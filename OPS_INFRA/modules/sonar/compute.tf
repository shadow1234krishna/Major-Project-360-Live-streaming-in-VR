data "aws_key_pair" "jenkins"{
  key_name    = "jenkins"
}
data "aws_ami" "sonar_server" {
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



# userdata for the Jenkins server ...
resource "aws_instance" "sonar_server" {
  ami                    		= "${data.aws_ami.sonar_server.image_id}"
  instance_type          = "t2.medium"
  user_data              = file("${path.module}/sonar-server.sh")
  vpc_security_group_ids = [aws_security_group.sonar_server.id]
  key_name               		= "${data.aws_key_pair.jenkins.key_name}"
  subnet_id              		= var.pub_subnet_id[0]

  tags = {
    Name        = "sonar-${var.environment}-server"
    Environment = "${var.environment}"
  }

# the Jenkins server itself

  root_block_device {
    delete_on_termination = true
  }
}

output "sonar_server_ami_name" {
    value = "${data.aws_ami.sonar_server.name}"
}

output "sonar_server_ami_id" {
    value = "${data.aws_ami.sonar_server.id}"
}

output "sonar_server_public_ip" {
  value = "${aws_instance.sonar_server.public_ip}"
}

output "sonar_server_private_ip" {
  value = "${aws_instance.sonar_server.private_ip}"
}