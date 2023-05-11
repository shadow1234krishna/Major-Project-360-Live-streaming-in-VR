#!/bin/bash
# This script install Jenkins in your Ubuntu System
#
# This script must be run as root:
#   $ ./jenkins_install.sh

if [[ $EUID -ne 0 ]]; then
	echo "This script must be run as root" 1>&2
	exit 1
fi
apt-get update -y
# Install the necessary packages to prepare the environment
apt-get install -y autoconf bison build-essential libffi-dev libssl-dev openjdk-11-jre-headless
apt-get install -y libyaml-dev libreadline6 libreadline6-dev zlib1g zlib1g-dev curl git vim yq 


wget -qO /usr/local/bin/yq https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64
chmod a+x /usr/local/bin/yq
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
bash ./get_helm.sh

wget https://github.com/helmfile/helmfile/releases/download/v0.151.0/helmfile_0.151.0_linux_amd64.tar.gz 
tar -xvzf helmfile_0.151.0_linux_amd64.tar.gz
chmod +x helmfile
mv helmfile /usr/local/bin/helmfile
# Install Jenkins
## Before install is necessary to add Jenkins to trusted keys and source list
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
apt-get update -y
apt upgrade -y
apt-get install -y jenkins


## Add user to jenkins
## You can check if user was created using: SELECT User FROM mysql.user;

# install docker
curl -fsSL get.docker.com -o get-docker.sh
sh get-docker.sh
# Update the Jenkins admin password

# Install plugins
wget http://127.0.0.1:8080/jnlpJars/jenkins-cli.jar
export pass=$(cat /var/lib/jenkins/secrets/initialAdminPassword)

java -jar jenkins-cli.jar -s http://127.0.0.1:8080/ -auth admin:$pass install-plugin SonarQube Scanner
java -jar jenkins-cli.jar -s http://127.0.0.1:8080/ -auth admin:$pass install-plugin git
java -jar jenkins-cli.jar -s http://127.0.0.1:8080/ -auth admin:$pass install-plugin Slack Notification

systemctl restart jenkins