output "vpc_id" {
  value = "${aws_vpc.operations.id}"
}

output "public_subnets_id" {
  value = "${aws_subnet.operations-public.*.id}"
}

output "private_subnets_id" {
  value = ["${aws_subnet.operations-private.*.id}"]
}


output "public_route_table" {
  value = "${aws_route_table.operations-public.id}"
}