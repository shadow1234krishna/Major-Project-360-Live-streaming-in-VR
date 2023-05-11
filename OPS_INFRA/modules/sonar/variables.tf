variable "region" {
  description = "us-east-1"
}
# variable "my_ip" {
#   description = "The CIDR block for the public subnet"
# }
variable "environment" {
  description = "The Deployment environment"
}

//Networking
variable "vpc_id" {
  description = "the vpc ID"
}

variable "pub_subnet_id" {
  type        = list
  description = "The CIDR block for the public subnet"
}
variable "pvt_subnet_id" {
  type        = list
  description = "The CIDR block for the public subnet"
}