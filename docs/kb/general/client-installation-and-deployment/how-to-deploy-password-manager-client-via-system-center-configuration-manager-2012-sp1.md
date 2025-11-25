---
description: >-
  Shows how to deploy the Netwrix Password Reset client via System Center
  Configuration Manager 2012 SP1 using the prm_client.msi and
  gina_registry_settings.reg files.
keywords:
  - Netwrix Password Reset
  - SCCM
  - System Center Configuration Manager
  - prm_client.msi
  - gina_registry_settings.reg
  - deployment
  - Wow6432Node
  - client installation
products:
  - general
sidebar_label: 'How to deploy Netwrix Password Reset client via System Center Configuration Manager 2012 SP1'
tags:
  - client-installation-and-deployment
title: >-
  How to deploy Netwrix Password Reset client via System Center Configuration
  Manager 2012 SP1
knowledge_article_id: kA00g000000PbdVCAS
---

# How to to deploy Netwrix Password Reset client via System Center Configuration Manager 2012 SP1?

---

**NOTE**. If you do not need a detailed description on how to create a new package, program and advertisement in System Center Configuration Manager, refer to Step 2 point 7 to find the command line string parameter for the deployed program.

To install Netwrix Password Reset Logon Prompt Extension via System Center Configuration Manager (simplest scenario) perform the following steps.

## Step 1. Prepare files for deployment. Package should include `prm_client.msi` itself and `gina_registry_settings.reg` with settings. Draft `gina_registry_settings.reg` is attached to the article.

1. Change the `prm_client.msi` default settings if needed, refer to [this article](https://kb.netwrix.com/2014) if you want to change this.

2. Edit `gina_registry_settings.reg` file with Notepad to apply required settings. Un-comment the required values (remove #) and change them. Refer to [this article](https://kb.netwrix.com/2056) describing keys and values.

**NOTE**. `PM_Server` is mandatory.

**NOTE**. Remove the `Wow6432Node` registry key from the file if you are going to use the client on a 32-bit machine.

3. Copy both files to your System Center Configuration Manager packages folder

## Step 2. Create a new package in SCCM

1. Launch **SCCM 2012 Configuration Manager** and choose **Software Library** node
2. Right-click on **Packages** and choose **Create package**

