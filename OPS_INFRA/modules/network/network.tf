resource "aws_vpc" "operations" {
  cidr_block           = var.vpc_cidr
  instance_tenancy = "default"
  enable_dns_support = "true"
  enable_dns_hostnames = "true"
  tags = {
    Name        = "operations-${var.environment}-vpc"
    Environment = "${var.environment}"
  }
}




# Internet GW
resource "aws_internet_gateway" "operations-gw" {
  vpc_id = aws_vpc.operations.id

  tags = {
    Name        = "${var.environment}-igw"
    Environment = "${var.environment}"
  }
}

# Subnets
resource "aws_subnet" "operations-public" {
  vpc_id = aws_vpc.operations.id
   count                   = "${length(var.public_subnets_cidr)}"
  cidr_block              = "${element(var.public_subnets_cidr,   count.index)}"
  availability_zone       = "${element(var.availability_zones,   count.index)}"
  map_public_ip_on_launch = true
  tags = {
    Name        = "${var.environment}-${element(var.availability_zones, count.index)}-public-subnet"
    Environment = "${var.environment}"
  }
}
resource "aws_subnet" "operations-private" {
  vpc_id = aws_vpc.operations.id
  count                   = "${length(var.private_subnets_cidr)}"
  
  cidr_block              = "${element(var.private_subnets_cidr, count.index)}"
  availability_zone       = "${element(var.availability_zones, count.index)}"
  map_public_ip_on_launch = false
  tags = {
    Name        = "${var.environment}-${element(var.availability_zones, count.index)}-private-subnet"
    Environment = "${var.environment}"
  }
}

# route tables
resource "aws_route_table" "operations-public" {
  vpc_id = aws_vpc.operations.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.operations-gw.id
  }

  tags = {
    Name        = "${var.environment}-private-route-table"
    Environment = "${var.environment}"
  }
}
resource "aws_route_table" "operations-private" {
  vpc_id = "${aws_vpc.operations.id}"

  tags = {
    Name        = "${var.environment}-private-route-table"
    Environment = "${var.environment}"
  }
}
# route associations public
resource "aws_route_table_association" "public" {
  count                   = "${length(var.public_subnets_cidr)}"
  subnet_id     = "${element(aws_subnet.operations-public.*.id, count.index)}"
  route_table_id = "${aws_route_table.operations-public.id}"
}
resource "aws_route_table_association" "private" {
  count          = "${length(var.private_subnets_cidr)}"
  subnet_id      = "${element(aws_subnet.operations-private.*.id, count.index)}"
  route_table_id = "${aws_route_table.operations-private.id}"
}
