---
title: "Install host prerequisites"
description: "Install SSH, Docker Engine, and the AWS CLI on each Ubuntu node before you deploy Netwrix Privilege Secure for Discovery."
sidebar_position: 30
---

Prepare each Ubuntu machine before you deploy Netwrix Privilege Secure for Discovery. Complete this procedure on every node in a single-node or cluster deployment, including the primary node and the secondary nodes.

## Prerequisites

- Ubuntu Server 24.04 LTS.
- One machine for a single-node deployment, or three machines for a cluster.
- Internet access to download packages and container images. If the environment uses a proxy server, see [Proxy and firewall allowlist](./proxy-and-firewall-allowlist.md).

## Install SSH

If SSH isn't already installed, run the following commands:

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

The AWS Command Line Interface (AWS CLI) version 2 authenticates with the Netwrix Amazon Elastic Container Registry (ECR) so that the host can pull the container images.

```bash
# Install unzip:
sudo apt install unzip

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install --bin-dir /usr/local/bin --install-dir /usr/local/aws-cli --update
```

Run these steps on every node in the deployment.

## Next step

Configure the registry credentials. See [Registry access](./registry-access.md).
