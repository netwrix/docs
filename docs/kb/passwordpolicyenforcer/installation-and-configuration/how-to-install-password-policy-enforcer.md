---
description: >-
  Install Netwrix Password Policy Enforcer 9.12 manually or by Group Policy.
  This article lists system requirements, installation types, and step-by-step
  instructions for creating a distribution point, copying the MSI, creating and
  editing a GPO, and completing the installation.
keywords:
  - Netwrix Password Policy Enforcer
  - installation
  - PPE912
  - Group Policy
  - MSI
  - domain controllers
  - distribution point
  - Windows Server
  - password policy
products:
  - password-policy-enforcer
sidebar_label: How to Install Password Policy Enforcer
tags: []
title: "How to Install Password Policy Enforcer"
knowledge_article_id: kA04u000000Pd76CAC
---

# How to Install Password Policy Enforcer

## Overview

Netwrix Password Policy Enforcer version 9.12 is compatible with Windows Server 2008, 2012, 2016, and 2019. You can also install it on Windows Vista, 7, 8, and 10 workstations to enforce **local policies**. If you need to install Netwrix Password Policy Enforcer on Windows Server 2003 domain controllers, install version 8.03 instead of 9.12.

You do not have to force users to change their password immediately after Netwrix Password Policy Enforcer is installed. Users can continue using their current password until it expires, even if their current password does not comply with the password policy.

Installing Netwrix Password Policy Enforcer does not extend the Active Directory schema.

## System Requirements

- Windows Server 2008, 2008 R2, 2012, 2012 R2, 2016, or 2019. Windows Vista, 7, 8, 8.1, or 10.
- Fifteen megabytes of free disk space.
- Eight megabytes of free RAM (seventy-two megabytes if using **Argon2** hashes).

## Installation Types

Install Netwrix Password Policy Enforcer on every domain controller to enforce the password policy for domain user accounts, or on individual servers and workstations to enforce the password policy for local user accounts. If your domain contains read-only domain controllers, install Netwrix Password Policy Enforcer on these servers only if you are using the **Maximum Age rule**, **Password Policy Client**, **Password Reset**, or **PPE/Web**.

You can install Netwrix Password Policy Enforcer **manually** if you only need to install it on a few computers. For many computers in a domain, it is easier to perform an **automated** installation with Group Policy.

## Instructions

### Manual Installation (Express Setup)

Manual installation is recommended for small to medium networks. Repeat the installation procedure below on every computer that should enforce the password policy.

1. Start the Netwrix Password Policy Enforcer installer (`PPE912.exe`).
2. Read the license agreement, and then click **Yes** if you accept all the license terms and conditions.
3. Select the **Express** option, and then click **Next**.
4. Select the **Password Policy Server** check box if it is not selected.
5. Click **Next** to install Netwrix Password Policy Enforcer.
6. Click **Yes** when asked to restart the computer.

If you are using Netwrix Password Policy Enforcer to enforce a password policy for domain user accounts, repeat this procedure on the other domain controllers in the domain.

Netwrix Password Policy Enforcer has its own password rules, so you may want to disable the Windows password policy rules before configuring Netwrix Password Policy Enforcer.

### Automated Installation (Advanced Setup)

An automated installation uses Group Policy to distribute Netwrix Password Policy Enforcer. This type of installation is recommended when you need to install Netwrix Password Policy Enforcer on many computers. The following steps show how to install Netwrix Password Policy Enforcer on domain controllers to enforce **domain policies**, but you can also use Group Policy to target member servers and workstations to enforce **local policies**.

### Create a Distribution Point

A distribution point can be a UNC path to a server share or a DFS (Distributed File System) path. To create a Netwrix Password Policy Enforcer distribution point:

1. Log on to a server as an administrator.
2. Create a shared network folder to distribute the files from.
3. Give the **Domain Controllers** security group read access to the share, and limit write access to authorized personnel only.

### Copy PPE912.msi into the Distribution Point

1. Start the Netwrix Password Policy Enforcer installer (`PPE912.exe`).
2. Read the license agreement, and then click **Yes** if you accept all the license terms and conditions.
3. Select the **Advanced** option, and then click **Next**.
4. Right-click the `PPE912.msi` icon, click **Copy**, and then paste the file into the distribution point.
5. Give the **Domain Controllers** security group read access to the `PPE912.msi` file in the distribution point.
6. Click **Finish**.

### Create a Group Policy Object

1. Start the Group Policy Management Console (`gpmc.msc`).
2. Expand the forest and domain items in the left pane.
3. Right-click the **Domain Controllers** organizational unit (OU) in the left pane, and then click **Create a GPO in this domain, and Link it here...**
4. Type `Netwrix Password Policy Enforcer`, and then press **Enter**.

### Edit the Group Policy Object

1. Right-click the **Netwrix Password Policy Enforcer** GPO, and then click **Edit...**
2. Expand the **Computer Configuration**, **Policies**, and **Software Settings** items.
3. Right-click the **Software installation** item, and then select **New > Package...**
4. Type the full UNC path to `PPE912.msi` in the Open dialog box. You must enter a UNC path so that other computers can access this file over the network. For example, `\fileserver\distributionpointshare\PPE912.msi`
5. Click **Open**.
6. Select the **Assigned** deployment method, and then click **OK**.
7. Close the Group Policy Management Editor.

### Complete the Installation

Restart each domain controller to complete the installation. Windows installs Netwrix Password Policy Enforcer during startup, and then immediately restarts the computer a second time to complete the installation.

Netwrix Password Policy Enforcer will not enforce a password policy at this time because no policies are defined. Users can still change their password and will only need to comply with the Windows password policy rules (if enabled).
