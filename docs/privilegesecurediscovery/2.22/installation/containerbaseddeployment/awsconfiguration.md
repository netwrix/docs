---
title: "AWS Configuration"
description: "Configure AWS CLI credentials to authenticate with the Netwrix ECR container registry"
sidebar_position: 30
---

# AWS Configuration

NPS-D container images are hosted in a private Amazon Elastic Container Registry (ECR). Each Ubuntu
machine in the deployment must be authenticated with ECR before `secureone.sh` can pull images.

Complete these steps on every node — primary and secondary — before running the deployment script.

## Configure AWS Credentials

Run the following command and follow the prompts to enter the AWS Access Key ID, Secret Access Key,
and region. Use the credentials provided to you by Netwrix support or your internal deployment team.

```bash
aws configure
```

When prompted:

| Field | Value |
|---|---|
| AWS Access Key ID | `<access-key-id>` |
| AWS Secret Access Key | `<secret-access-key>` |
| Default region name | `us-west-2` |
| Default output format | `json` |

## Log In to ECR

After configuring credentials, authenticate Docker with the Netwrix ECR registry:

```bash
aws ecr get-login-password --region us-west-2 | \
  sudo docker login --username AWS --password-stdin \
  176947481038.dkr.ecr.us-west-2.amazonaws.com
```

A `Login Succeeded` message confirms the authentication was successful.

:::note
The ECR login token expires after 12 hours. If a deployment or upgrade fails with an authentication
error, re-run the login command above before retrying.
:::
