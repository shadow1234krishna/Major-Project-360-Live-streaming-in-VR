


locals {
  production_availability_zones = ["${var.region}a", "${var.region}b", "${var.region}c"]
}

module "networking" {
source = "./modules/network"
  region               = var.region
  environment          = "${var.environment}"
  vpc_cidr             = "${var.vpc_cidr}"
  public_subnets_cidr  = "${var.public_subnets_cidr}"
  private_subnets_cidr = "${var.private_subnets_cidr}"
  availability_zones   = "${local.production_availability_zones}"
}

module "jenkins-server" {
  source = "./modules/jenkins"
    region               = var.region
    environment          = "${var.environment}"
    vpc_id               = module.networking.vpc_id
    pub_subnet_id         = module.networking.public_subnets_id
  pvt_subnet_id             = module.networking.private_subnets_id

 }
 
module "sonar-server" {
  source = "./modules/sonar"
    region               = var.region
    environment          = "${var.environment}"
    vpc_id               = module.networking.vpc_id
    pub_subnet_id         = module.networking.public_subnets_id
  pvt_subnet_id             = module.networking.private_subnets_id

 }