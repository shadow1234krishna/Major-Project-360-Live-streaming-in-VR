# MAJOR_PROJECT_DOCS
for better understanding check general docs first [DOCS REPO](https://github.com/Waddah-Ahmad/MAJOR_PROJECT_DOCS.git "repo home")
> this project have future work and some requirements to be added like extra security , extra test codes , underlying infra for tha application

# IAAC REPO
this repository for infrastructure AS a code terraform consists of two servers hosted on AWS
* jenkins
* sonarqube


# PROJECT WORKFLOW
each server have init shell script executed by terraform to get the state of servers ready

to run :
> terraform plan && terraform apply

# HOW IT WORKS
it runs two EC2 instances in aws cloud provider



## future work
CaaC for jenkins

master slave archetecture to be intruduced
