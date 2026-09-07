---
title: Installation
description: How to prepare a Linux server, run the Access Analyzer installer, and sign in for the first time.
---

Access Analyzer runs on a single Linux server that you own. You download one installer binary, run it as root, and answer a few prompts. The installer checks the server, sets up every service, and prints the address and credentials you use to sign in.

An installation takes three steps, each covered on its own page.

1. [Requirements](requirements.md)—pick a size, confirm the server has enough CPU, RAM, and disk, and gather the license key, hostname, TLS certificate, and first administrator's email address before you start.
2. [Install Access Analyzer](run-the-installer.md)—copy the certificate to the server and run `dspm-installer`, either answering the prompts or passing everything as flags.
3. [Sign in for the first time](first-sign-in.md)—open the web application, change the first administrator's one-time password, and either connect Active Directory or Entra ID or skip that step for later.

After the first sign-in, the [Guides](../guides/index.md) walk you through scanning your first source.

## People You Need

You need an administrator with root access to the Linux server, either signed in as root or using `sudo`. The installer writes to `/etc/dspm`, `/var/log`, and `/usr/local/bin`, so a non-root account cannot complete it.

You also need someone who can issue a TLS certificate for the server's hostname and someone who can open firewall ports. The [Requirements](requirements.md) page lists exactly what to ask for.

## Scripting or Troubleshooting an Installation

The [Installer reference](installer-reference.md) lists the flags, environment variables, exit codes, and preflight checks, for when you script an installation or need to find out why one stopped.
