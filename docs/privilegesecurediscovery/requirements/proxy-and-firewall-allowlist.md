---
title: "Proxy and firewall allowlist"
description: "Allow the Netwrix, Ubuntu, Docker, AWS, and Microsoft hosts that a container-based Privilege Secure for Discovery installation contacts."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the Ubuntu hosts that a 24.04 host needs during an install or upgrade. The list keeps the archive, regional mirror, EC2 mirror, and security hosts, and `esm.ubuntu.com` for hosts with Ubuntu Pro. It drops `www.ubuntu.com/usn` and `changelogs.ubuntu.com`, which the earlier ISO-based list included. Evidence: secureone.sh runs `apt-get` only to install Docker prerequisites and Python 3 when they are missing (lines 354-373).

TODO: Confirm that the registry host (`176947481038.dkr.ecr.us-west-2.amazonaws.com`) and its S3 layer bucket are the only registry hosts in 26.09.1, and whether any customer needs a different AWS Region. Evidence: secureone.sh line 112 sets `S1_REPO_DOMAIN` to the us-west-2 host and lets an environment variable override it.

TODO: Confirm whether Microsoft national clouds (for example, `login.microsoftonline.us` and `graph.microsoft.us`) are supported for Microsoft Entra ID. Evidence: the code calls `login.microsoftonline.com` and `graph.microsoft.com` only.
:::

Some organizations route internet traffic through a proxy server. The hosts for Netwrix Privilege Secure for Discovery download packages and container images from external locations when you install and upgrade the product. Make the following hosts reachable by adding specific proxy entries or by opening a tunnel for the installation period. Do the same for each upgrade.

## Netwrix hosts

Allow this host to download the quickstart bundle and the quickstart tools:

- `https://releases.netwrix.com`

Allow these hosts for the Netwrix container registry, where `<region>` is `us-west-2`:

```text
176947481038.dkr.ecr.<region>.amazonaws.com
https://prod-<region>-starport-layer-bucket.s3.<region>.amazonaws.com
https://api.ecr.<region>.amazonaws.com
```

## Ubuntu and Docker hosts

- `http://archive.ubuntu.com/ubuntu`
- `http://<country-code>.archive.ubuntu.com/ubuntu/`
- `http://<region>.ec2.archive.ubuntu.com/ubuntu/` (for hosts in AWS, where `<region>` is the AWS Region)
- `http://security.ubuntu.com/ubuntu`
- `https://esm.ubuntu.com` (for hosts that use Ubuntu Pro)
- `https://download.docker.com/linux/ubuntu`

Instead of listing each Ubuntu host, you can allow `ubuntu.com` and its subdomains.

## AWS CLI host

Allow this host to download the AWS Command Line Interface (AWS CLI) installer. See [Install host prerequisites](./host-prerequisites.md).

- `https://awscli.amazonaws.com`

## Microsoft Entra ID hosts

Allow these hosts only if you use the Microsoft Entra ID integration. The product connects to them while it runs, and not only during an install.

- `https://login.microsoftonline.com`
- `https://graph.microsoft.com`

## Quickstart tools hosts

Allow these hosts only if you install the quickstart tools, which use `pip` to download Python packages. See [Install the quickstart tools](../configuration/bulk-onboarding/install-the-quickstart-tools.md).

- `https://pypi.org`
- `https://files.pythonhosted.org`

For the hosts of the EDR platforms, see [Ports and firewall](./ports-and-firewall.md#privilege-secure-for-discovery-to-edr-cloud-platforms).
