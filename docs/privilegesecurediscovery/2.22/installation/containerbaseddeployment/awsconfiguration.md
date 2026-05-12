---
title: "AWS Configuration"
description: "Configure AWS CLI credentials to authenticate with the Netwrix ECR container registry"
sidebar_position: 30
---

# AWS Configuration

NPS-D container images are hosted in a private Amazon Elastic Container Registry (ECR). You must
authenticate each Ubuntu machine in the deployment with ECR before `secureone.sh` can pull images.

Complete these steps on every node — primary and secondary — before running the deployment script.

:::note
Netwrix Support provides the AWS Access Key ID and Secret Access Key required for this step as part
of the deployment onboarding process. Contact Netwrix Support if you have not received your
credentials.
:::

## Configure AWS Credentials

Run the following command and follow the prompts to enter the AWS Access Key ID, Secret Access Key,
and region. Use the credentials provided to you by Netwrix Support.

```bash
# Configure AWS:
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
# Log in to ECR:
aws ecr get-login-password --region us-west-2 | \
  sudo docker login --username AWS --password-stdin \
  176947481038.dkr.ecr.us-west-2.amazonaws.com
```

A `Login Succeeded` message confirms the authentication was successful.

:::note
The ECR login token expires after 12 hours. If a deployment or upgrade fails with an authentication
error, re-run the login command above before retrying.
:::

:::tip
For enhanced security, store Docker credentials in an encrypted credential store instead of the
default configuration file. See [Docker Credentials Helper](../dockercredentials.md) for
instructions.
:::
