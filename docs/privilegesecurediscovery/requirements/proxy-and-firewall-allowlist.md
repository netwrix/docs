---
title: "Proxy and firewall allowlist"
description: "Allow the Netwrix, Ubuntu, Docker, AWS, and Microsoft hosts that a container-based Privilege Secure for Discovery installation contacts."
sidebar_position: 60
---

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

The `secureone.sh` script and the `s1` tool use the `us-west-2` registry by default. The `S1_REPO_DOMAIN` value in `/secureone/s1.env` sets the registry domain. If Netwrix Support directs you to use another registry domain, allow that host and its matching layer bucket instead.

## Ubuntu and Docker hosts

- `http://archive.ubuntu.com/ubuntu`
- `http://<country-code>.archive.ubuntu.com/ubuntu/`
- `http://<region>.ec2.archive.ubuntu.com/ubuntu/` (for hosts in AWS, where `<region>` is the AWS Region)
- `http://security.ubuntu.com/ubuntu`
- `https://esm.ubuntu.com` (for hosts that use Ubuntu Pro)
- `https://download.docker.com/linux/ubuntu`

The `setup` command installs Docker and Python 3 with `apt-get` when they're missing, so the host needs the Ubuntu package sources that its apt configuration lists, and the Docker repository. Instead of listing each Ubuntu host, you can allow `ubuntu.com` and its subdomains.

## AWS CLI host

Allow this host to download the AWS Command Line Interface (AWS CLI) installer. See [Install host prerequisites](./host-prerequisites.md).

- `https://awscli.amazonaws.com`

## Microsoft Entra ID hosts

Allow these hosts only if you use the Microsoft Entra ID integration. The product connects to them while it runs, and not only during an install. The product uses these public cloud hosts for the integration.

- `https://login.microsoftonline.com`
- `https://graph.microsoft.com`

## Quickstart tools hosts

Allow these hosts only if you install the quickstart tools, which use `pip` to download Python packages. See [Install the quickstart tools](../configuration/bulk-onboarding/install-the-quickstart-tools.md).

- `https://pypi.org`
- `https://files.pythonhosted.org`

For the hosts of the EDR platforms, see [Ports and firewall](./ports-and-firewall.md#privilege-secure-for-discovery-to-edr-cloud-platforms).
