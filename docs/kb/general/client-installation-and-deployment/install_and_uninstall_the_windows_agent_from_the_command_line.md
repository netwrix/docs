---
description: >-
  This article provides step-by-step instructions for installing and uninstalling the Windows agent from the command line.
keywords:
  - Windows agent
  - command line
  - installation
  - uninstallation
  - msiexec
sidebar_label: Install and Uninstall Windows Agent
tags:
  - client-installation-and-deployment
title: "Install and Uninstall the Windows Agent from the Command Line"
knowledge_article_id: kA0Qk0000002B71KAE
products:
  - general
---

# Install and Uninstall the Windows Agent from the Command Line

## Question

Can you install and uninstall the Windows agent from the terminal/command line prompt?

## Answer

Yes, this is possible. Follow the steps below to complete this process:

### Install the Agent from the Command Line

Use the following command syntax to install the agent:

```plaintext
msiexec.exe /i "path_to_msi" WSIP="EPP_server_IP" WSPORT="443" DEPT_CODE=defdep /q REBOOT=ReallySuppress
```

### Uninstall the Agent from the Command Line

Use the following command syntax to uninstall the agent:

```plaintext
msiexec.exe /x "path_to_msi" ADMIN_PASSWORD_0="your_uninstall_password" REBOOT=ReallySuppress REMOVE_PROP=1 /qn
```

> **NOTE:** Enter your uninstall password in the above command only if a password was previously configured in the server UI. Otherwise, you can remove the `ADMIN_PASSWORD_0` attribute.