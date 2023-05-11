# Security Group:
resource "aws_security_group" "sonar_server" {
  name        = "sonar_server"
  description = "sonar Server: created by Terraform for ${var.environment}"

  # legacy name of VPC ID
  vpc_id = var.vpc_id

###############################################################################
# ALL INBOUND
###############################################################################
# Since Jenkins runs on port 8080, we are allowing all traffic from the internet
  # to be able ot access the EC2 instance on port 8080
  ingress {
    description = "Allow all traffic through port 8080"
    from_port = "9000"
    to_port = "9000"
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
  }

  # Since we only want to be able to SSH into the Jenkins EC2 instance, we are only
  # allowing traffic from our IP on port 22
  ingress {
    description = "Allow SSH from my computer"
    from_port = "22"
    to_port = "22"
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # We want the Jenkins EC2 instance to being able to talk to the internet
  egress {
    description = "Allow all outbound traffic"
    from_port = "0"
    to_port = "0"
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name        = "operations-${var.environment}-sg"
    Environment = "${var.environment}"
  }

}