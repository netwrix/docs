---
title: "Configure registry access"
description: "Configure AWS CLI credentials and sign in to the Netwrix container registry so each node can pull Privilege Secure for Discovery images."
sidebar_position: 40
---

Netwrix hosts the container images for Netwrix Privilege Secure for Discovery in a private Amazon Elastic Container Registry (ECR). Sign each Ubuntu node in to the registry before you run `secureone.sh`, which pulls the images.

Complete these steps on every node, including the primary node and the secondary nodes of a cluster, as the user that runs the deployment script.

## Prerequisites

- The AWS Command Line Interface (AWS CLI) version 2 installed on the node. See [Install host prerequisites](./host-prerequisites.md).
- Docker Engine installed on the node.
- An AWS access key ID and secret access key.
- Network access to the registry hosts in [Proxy and firewall allowlist](./proxy-and-firewall-allowlist.md).

:::note
Netwrix Support provides the access key ID and secret access key during deployment onboarding. Contact Netwrix Support if you haven't received them.
:::

## Choose the user

The deployment script runs as `sudo -E bash secureone.sh`. The `-E` option keeps your home directory, so the script and the `s1` tool read the sign-in and the AWS credentials from your user, not from the root user. Run every command on this page as that same user, and don't open a root shell with `sudo -i`, because a root shell uses `/root` as its home directory.

:::warning
If you configure the credentials as one user and run the script as another, the image pull fails with an authentication error.
:::

## Configure the AWS credentials

1. Run the following command without `sudo`:

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

The command stores the values in `~/.aws`. The `s1` tool reads this directory to pull its own image.

## Sign in to the registry

Authenticate Docker with the Netwrix ECR registry. Use `sudo -E` so that Docker saves the sign-in in your `~/.docker/config.json` file, which `secureone.sh` reads:

```bash
aws ecr get-login-password --region us-west-2 \
  | sudo -E docker login --username AWS --password-stdin \
    176947481038.dkr.ecr.us-west-2.amazonaws.com
```

The output includes `Login Succeeded`.

The `aws` command runs as your user, so it uses your AWS credentials, and only `docker login` runs as root.

:::note
The registry token expires after 12 hours. If a deployment or upgrade fails with an authentication error, run the sign-in command again and retry the command that failed.
:::

By default, Docker stores the token in `~/.docker/config.json` as base64-encoded text, which isn't encrypted. To keep the token in an encrypted store instead, see [Set up the Docker credential helper](../install/docker-credentials-helper.md).

## Troubleshoot the sign-in

| Message | Cause and fix |
| --- | --- |
| `pull access denied ... repository does not exist or may require 'docker login'` | The node isn't signed in, or you signed in as a different user than the one that runs the script. Run the sign-in command again as the deployment user. |
| `Could not pull <image>` from `secureone.sh` | The node isn't signed in, the token expired, or the release isn't published to the registry. Sign in again, and check the version in the command. |
| `Unable to locate credentials` from the `aws` command | You haven't run `aws configure` as this user. Run it, and then sign in again. |
| `UnrecognizedClientException` or `The security token included in the request is invalid` | The access key ID or secret access key is wrong or disabled. Contact Netwrix Support. |
