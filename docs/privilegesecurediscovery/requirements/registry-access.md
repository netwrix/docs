---
title: "Configure registry access"
description: "Configure AWS CLI credentials and sign in to the Netwrix container registry so each node can pull Privilege Secure for Discovery images."
sidebar_position: 40
---

Netwrix hosts the container images for Netwrix Privilege Secure for Discovery in a private Amazon Elastic Container Registry (ECR). Authenticate each Ubuntu machine in the deployment with ECR before `secureone.sh` pulls the images.

Complete these steps on every node, including the primary node and the secondary nodes, before you run the deployment script.

## Prerequisites

- The AWS Command Line Interface (AWS CLI) version 2 installed on the node. See [Host prerequisites](./host-prerequisites.md).
- An AWS access key ID and secret access key.

:::note
Netwrix Support provides the access key ID and secret access key as part of deployment onboarding. Contact Netwrix Support if you haven't received them.
:::

## Configure the AWS credentials

1. Run the following command:

   ```bash
   aws configure
   ```

2. Enter the values that the prompts request:

   | Field | Value |
   | --- | --- |
   | AWS Access Key ID | `<access-key-id>` |
   | AWS Secret Access Key | `<secret-access-key>` |
   | Default region name | `us-west-2` |
   | Default output format | `json` |

## Sign in to the registry

After you configure the credentials, authenticate Docker with the Netwrix ECR registry:

```bash
aws ecr get-login-password --region us-west-2 | \
  docker login --username AWS --password-stdin \
  176947481038.dkr.ecr.us-west-2.amazonaws.com
```

The `Login Succeeded` message confirms the sign-in.

:::note
The ECR login token expires after 12 hours. If a deployment or upgrade fails with an authentication error, run the sign-in command again and retry.
:::

:::tip
To store Docker credentials in an encrypted credential store instead of the default configuration file, see [Docker credentials helper](../install/docker-credentials-helper.md).
:::
