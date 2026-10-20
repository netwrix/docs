---
title: "Password Reset Client"
description: "Password Reset Client"
sidebar_position: 50
---

# Password Reset Client

Users can securely reset their password or unlock their account from the Windows Logon and Unlock
Computer screens with the Password Reset Client. Users click **Reset Password** to access the Password
Reset system.

![the_password_reset_client_1](/images/passwordreset/3.3/evaluation/the_password_reset_client_1.webp)

The Password Reset Client doesn't modify any Windows system files.

The Password Reset Client is normally deployed with Group Policy, Microsoft System Center
Configuration Manager, or some other software deployment tool. It takes about 15 minutes to set up
an automated deployment, so this guide covers manual installation for the evaluation.

## Installing the PRC

Follow the steps below to install the PRC.

**Step 1 –** Click **Start** > **Netwrix Password Reset** > **Client Software**.

**Step 2 –** Double-click **NPRClt330.msi**.

**Step 3 –** Click **Next**.

**Step 4 –** Read the license agreement. Select the checkbox to accept the license agreement terms, then click **Next**.

**Step 5 –** Click **Next**.

**Step 6 –** After the Password Reset Client is installed, click **Finish**.

**Step 7 –** Click **Yes** is asked to restart the computer.

You can also install the Password Reset Client on any client computers that are being used for the
evaluation.

## Configuring the PRC

The Password Reset Client is normally configured with an Active Directory administrative template.
With an administrative template, you can centrally configure all computers in the domain. It takes about 15 minutes to set
up the administrative template, so this guide covers configuring the PRC by importing the settings into the
registry for the evaluation.

**Step 1 –** Download the sample configuration from the following link:
[https://www.netwrix.com/download/PRC_Config.zip](https://www.netwrix.com/download/PRC_Config.zip)

**Step 2 –** Extract **PRC_Config.reg** from the .zip file.

**Step 3 –** Right-click **PRC_Config.reg**, then click **Edit**.

![the_password_reset_client_1_1](/images/passwordreset/3.3/evaluation/the_password_reset_client_1_1.webp)

**Step 4 –** Replace **127.0.0.1** in the .reg file with the IP address or hostname of your
evaluation server.

:::note
If you are only testing the Password Reset Client on the evaluation server, then leave it
set to 127.0.0.1. The IP address appears on two lines. You must change both lines.
:::


**Step 5 –** Press **CTRL** + **S** to save your changes, then close **Notepad**.

**Step 6 –** Double-click **PRC_Config** to import the settings into the registry. Click **Yes**
when asked to confirm. Repeat this step on any client computers being used for the evaluation.

:::note
You must import the configuration settings into the registry whenever you edit
PRC_Config.reg, otherwise the old settings remain.
:::


## Using the PRC

You can access the Password Reset Client from the Windows Logon and Unlock Computer screens. Click
the **Reset password...** command link to display the Password Reset menu.
