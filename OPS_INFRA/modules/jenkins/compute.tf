data "aws_key_pair" "jenkins"{
  key_name    = "jenkins"
}
data "aws_ami" "jenkins_server" {
   most_recent = "true"

   filter {
      name = "name"
      values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
   }

   filter {
      name = "virtualization-type"
      values = ["hvm"]
   }

   owners = ["099720109477"]
}

# data "aws_ami" "jenkins_server" {
#   most_recent      = true
#   owners           = ["self"]

#   filter {
#     name   = "name"
#     values = ["amazon-linux-for-jenkins*"]
#   }
# }
# resource "aws_key_pair" "jenkins_server" {
#   key_name   = "jenkins_server"
#   public_key = "${file("jenkins_server.pub")}"
# }

# lookup the security group of the Jenkins Server
# data "aws_security_group" "jenkins_server" {
#   filter {
#     name   = "group-name"
#     values = ["jenkins_server"]
#   }
# }

# userdata for the Jenkins server ...
data "template_file" "jenkins_server" {
  template = "${file("${path.module}/jenkins-server.sh")}"

  vars = {
    env = "dev"
    jenkins_admin_password = "mypass"
  }
}

# the Jenkins server itself
resource "aws_instance" "jenkins_server" {
  ami                    		= "${data.aws_ami.jenkins_server.image_id}"
  instance_type          		= "t2.medium"
  key_name               		= "${data.aws_key_pair.jenkins.key_name}"
  subnet_id              		= var.pub_subnet_id[0]
  vpc_security_group_ids 		= [aws_security_group.jenkins_server.id]
  user_data              		= "${file("${path.module}/jenkins-server.sh")}"

  tags = {
    Name        = "jenkins-${var.environment}-server"
    Environment = "${var.environment}"
  }

  root_block_device {
    delete_on_termination = true
  }
}

output "jenkins_server_ami_name" {
    value = "${data.aws_ami.jenkins_server.name}"
}

output "jenkins_server_ami_id" {
    value = "${data.aws_ami.jenkins_server.id}"
}

output "jenkins_server_public_ip" {
  value = "${aws_instance.jenkins_server.public_ip}"
}

output "jenkins_server_private_ip" {
  value = "${aws_instance.jenkins_server.private_ip}"
}