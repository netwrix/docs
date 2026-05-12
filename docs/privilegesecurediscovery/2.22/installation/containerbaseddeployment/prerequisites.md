---
title: "OS Prerequisites"
description: "Install operating system prerequisites for container-based NPS-D deployment on Ubuntu"
sidebar_position: 20
---

# OS Prerequisites

Prepare each Ubuntu machine before deploying NPS-D. This procedure applies to all nodes — both
primary and secondary — in a single-node or cluster deployment.

## Requirements

- Ubuntu Server 24.04.4 LTS
- 1 machine for a single-node deployment, or 3 machines for a cluster
- Internet access to download packages and container images

## Install SSH

If SSH is not already installed, run:

```bash
sudo apt install openssh-server
sudo systemctl enable --now ssh
```

## Install Docker

Run the following commands to add the Docker repository and install Docker Engine:

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install:
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Install the AWS CLI

The AWS Command Line Interface (AWS CLI) is required to authenticate with the Netwrix Amazon Elastic
Container Registry (ECR) and pull NPS-D container images.

```bash
# Install unzip:
sudo apt install unzip

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install --bin-dir /usr/local/bin --install-dir /usr/local/aws-cli --update
```

Repeat these steps on every node in the deployment.

**See also:** [AWS Configuration](./awsconfiguration.md) — configure credentials after installing the
AWS CLI.
