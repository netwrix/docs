---
title: "Proxy and firewall allowlist"
description: "Allow the Ubuntu, Docker, Python, and Netwrix hosts that a container-based Privilege Secure for Discovery installation downloads from."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm which PyPI hosts (pypi.org and files.pythonhosted.org) the current install_docker script still needs on the container-based path. Evidence: none; the legacy page listed them for the ISO build.

TODO: Confirm that deploy.remediant.com is still used by the container-based installation. Evidence: none.

TODO: Confirm that Launchpad (launchpad.net) is still needed now that the Ansible PPA is no longer used. Evidence: none.

TODO: Confirm the Amazon S3 layer bucket host for the registry (`prod-<region>-starport-layer-bucket`). Evidence: none.
:::

Some organizations route internet traffic through a proxy server. The Ubuntu hosts for Netwrix Privilege Secure for Discovery download packages and container images from external locations when you install and upgrade the product. Make the following hosts reachable by adding specific proxy entries or by opening a tunnel for the installation period. Do the same for each upgrade.

## Ubuntu and Docker hosts

- `http://archive.ubuntu.com/ubuntu`
- `http://<country-code>.archive.ubuntu.com/ubuntu/`
- `http://<region>.ec2.archive.ubuntu.com/ubuntu/` (for hosts in AWS, where `<region>` is the AWS Region)
- `http://security.ubuntu.com/ubuntu`
- `https://esm.ubuntu.com`
- `http://www.ubuntu.com/usn/`
- `https://changelogs.ubuntu.com`
- `https://download.docker.com/linux/ubuntu`

Instead of listing each Ubuntu host, you can allow `ubuntu.com` and its subdomains.

## Python hosts

- `https://pypi.org`
- `https://files.pythonhosted.org`

## Netwrix hosts

- `https://deploy.remediant.com`

Allow these hosts for the Netwrix container registry, where `<region>` is `us-west-2`:

```text
176947481038.dkr.ecr.<region>.amazonaws.com
https://prod-<region>-starport-layer-bucket.s3.<region>.amazonaws.com
https://api.ecr.<region>.amazonaws.com
```

## Launchpad hosts

- `http://launchpad.net/`
- `https://launchpad.net/`
