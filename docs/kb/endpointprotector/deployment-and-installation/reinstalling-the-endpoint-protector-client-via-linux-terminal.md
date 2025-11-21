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
  - endpoint-protector
sidebar_label: Reinstalling the Endpoint Protector Client via Lin
tags:
  - deployment-and-installation
title: "Reinstalling the Endpoint Protector Client via Linux Terminal"
knowledge_article_id: kA0Qk0000002B6JKAU
---

# Reinstalling the Endpoint Protector Client via Linux Terminal

## Overview

This article describes how to reinstall the Netwrix Endpoint Protector Client on Linux using terminal commands. The process includes uninstalling the current client, updating the server IP configuration, and reinstalling the client.

## Instructions

### Uninstall and Reinstall the Netwrix Endpoint Protector Client

1. On the Netwrix Endpoint Protector client, open the terminal.
2. To uninstall the existing client, run the command below:
```bash
sudo bash uninstall.sh
```
3. Set the Netwrix Endpoint Protector server IP address:
```bash
sudo nano options.sh
```
4. Edit the file to set the correct server IP address, then save and exit.
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
