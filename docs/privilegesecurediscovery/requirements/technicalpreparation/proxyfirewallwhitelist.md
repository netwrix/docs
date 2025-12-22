---
title: "Proxy/Firewall Whitelist Servers"
description: "Proxy/Firewall Whitelist Servers"
sidebar_position: 80
---

# Proxy/Firewall Whitelist Servers

Proxy/Firewall Whitelist Servers

# Proxy/Firewall Whitelist Servers

Some organizations utilize proxy servers for internet connections and this can provide a challenge
for installing Privilege Secure. Privilege Secure software and docker are pulled from external
locations when the nodes are built and configured. Below are the connections that need to be made
available to enable the build. This can be achieved in one of two ways, either specific proxy
entries or a tunnel opened up for the install period. This would also need to be opened for any
subsequent upgrades.

## Ubuntu

- [http://us-east-2.ec2.archive.ubuntu.com/ubuntu/](http://us-east-2.ec2.archive.ubuntu.com/ubuntu/)
- [http://security.ubuntu.com/ubuntu](http://security.ubuntu.com/ubuntu)
- [https://esm.ubuntu.com](https://esm.ubunutu.com)
- [https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu)
- [http://us.archive.ubuntu.com/ubuntu](http://us.archive.ubuntu.com/ubuntu)
- [http://www.ubuntu.com/usn/](http://www.ubuntu.com/usn/)
- [https://changelogs.ubuntu.com](https://changelogs.ubuntu.com)
- [http://ppa.launchpad.net/ansible/ansible/ubuntu](http://ppa.launchpad.net/ansible/ansible/ubuntu)
- [http://archive.ubuntu.com/ubuntu](http://archive.ubuntu.com/ubuntu)

Alternatively ubuntu.com can be whitelisted instead of all ubuntu URLs individually

## Python

- [https://pypi.org](https://pypi.org)
- [https://files.pythonhosted.org](https://files.pythonhosted.org)

## Privilege Secure

- [https://deploy.remediant.com ](https://deploy.remediant.com/)
- [176947481038.dkr.ecr.us-west-2.amazonaws.com](http://176947481038.dkr.ecr.us-west-2.amazonaws.com/)
- [https://prod-us-west-2-starport-layer-bucket.s3.us-west-2.amazonaws.com](https://prod-us-west-2-starport-layer-bucket.s3.us-west-2.amazonaws.com/*)
- [http://api.ecr.us-west-2.amazonaws.com](http://api.ecr.us-west-2.amazonaws.com/)

## Launchpad (Software Collaboration Platform)

- [http://launchpad.net/](http://launchpad.net/)
- [https://launchpad.net/](https://launchpad.net/)
