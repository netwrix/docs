---
description: >-
  This article explains how to upgrade the Endpoint Protector client on Linux without performing a full uninstall and reinstall, preserving configuration variables from the previous build.
keywords:
  - Endpoint Protector
  - Linux client upgrade
  - configuration preservation
sidebar_label: Upgrade Linux Clients
tags:
  - deployment-and-installation
title: "Upgrade Linux Clients Without Uninstalling and Reinstalling"
knowledge_article_id: kA0Qk0000002B6mKAE
products:
  - endpoint-protector
---

# Upgrade Linux Clients Without Uninstalling and Reinstalling

## Overview

This article explains how to upgrade the Endpoint Protector client on Linux without performing a full uninstall and reinstall. The steps below allow you to upgrade the client while preserving configuration variables from the previous build.

## Instructions

1. Copy the new Endpoint Protector client installer to the Linux machine.
2. Open a Terminal window.
3. Export the variables from the `options.ini` file from the older build:

   ```plaintext
   export EPPCLIENT_WS_SERVER=ip.of.the.server
   export EPPCLIENT_WS_PORT=443
   export EPPCLIENT_DEPARTMENT_CODE=defdep
   ```

4. Unpack the archive:

   ```plaintext
   tar xvf [Filename.tar.xz]
   ```

5. From the unpacked directory of the newer build, run:

   ```plaintext
   sudo -E apt install ./pkgs/*.deb
   ```

6. Open **Endpoint Protector Notifier** and confirm that the Endpoint Protector client was upgraded.