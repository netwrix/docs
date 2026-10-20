---
description: >-
  Shows how to uninstall and reinstall the Netwrix Endpoint Protector client on
  Linux using terminal commands, and how to resolve missing dependency errors.
keywords:
  - endpoint protector
  - linux
  - reinstall
  - uninstall
  - dpkg
  - apt
  - dependencies
  - client
  - pkgs
products:
  - endpointprotector
sidebar_label: Reinstalling the Endpoint Protector Client via Linux Terminal
tags:
  - deployment-and-installation
  - kb
title: "Reinstalling the Endpoint Protector Client via Linux Terminal"
knowledge_article_id: kA0Qk0000002B6JKAU
---

# Reinstalling the Endpoint Protector Client via Linux Terminal

## Overview

This article describes how to reinstall the Netwrix Endpoint Protector Client on Linux using terminal commands. The process includes uninstalling the current client, updating the server address configuration, and reinstalling the client.

For the full reference, see [Linux](/docs/endpointprotector/admin/agent#linux) under Agent Install Parameters in the Agent documentation.

## Instructions

### Uninstall and Reinstall the Netwrix Endpoint Protector Client

1. On the Netwrix Endpoint Protector client, open the terminal.
2. To uninstall the existing client, run the following command:

   ```bash
   sudo bash uninstall.sh
   ```
3. Set the Netwrix Endpoint Protector server address:

   ```bash
   sudo nano options.sh
   ```
4. Edit the file to set the correct server address, then save and exit. Use the server's fully qualified domain name (FQDN) instead of an IP address, so the client keeps working when the server address changes.
5. Reinstall the client:

   ```bash
   sudo bash install.sh
   ```

### Resolving Missing Dependency Errors

If you encounter missing dependency errors during installation, run the following commands:
```bash
sudo bash uninstall.sh
sudo apt update
sudo dpkg -i ./pkgs/*.deb
sudo apt update
sudo apt upgrade
```

The `sudo dpkg -i ./pkgs/*.deb` command will display any missing dependencies. Use `sudo apt update` and `sudo apt upgrade` to resolve them.

> **NOTE:** These commands apply to Debian-based distributions (Ubuntu, LinuxMint, Debian), which use `dpkg`/`apt`. RedHat-based distributions (CentOS, RedHat, Fedora, AWS Linux 2, OpenSuse, SUSE, SLED Linux Enterprise Server) use `rpm`/`yum`/`dnf` instead, and require an additional step to set the server address. See [RedHat based distributions](/docs/endpointprotector/admin/agent#redhat-based-distributions) for details.
