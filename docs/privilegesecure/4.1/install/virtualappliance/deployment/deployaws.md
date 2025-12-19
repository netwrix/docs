---
title: "Deploy to AWS"
description: "Deploy to AWS"
sidebar_position: 40
---

# Deploy to AWS

Connect to the instance where Netwrix Privilege Secure is going to be deployed. The Windows
PowerShell opens and automatically runs the script.

**Configure SQL Server Instance**

Follow the steps below to configure the SQL Server instance.

**Step 1 –** In the Netwrix Privilege Secure configuration wizard, review the computer name and
domain to which the computer has joined.

**Step 2 –** Determine whether to keep default parameters or to perform additional configuration:

- To perform additional configuration, proceed to step 3.
- To keep the default parameters, proceed to step 4.

**Step 3 –** If you want to rename the computer and join it to another domain or workgroup, follow
the steps below:

- Enter Y to open the System Properties dialog.
- Modify computer parameters at your convenience.
- Restart the computer.
- Re-establish RDP connection to the instance where NDC is being deployed.
- When completed, return to step 1.

The shell script automatically configures the SQL Server instance. The sysadmin server role on the
SL Server instance is granted automatically to the BUILTIN\Administrators group.

If you are alright with the default computer name or workgroup, press Y to accept the license
agreement and deploy Netwrix Privilege Secure. If not, accept the license agreement and change the
computer, domain, or work group manually.

**Configure a Guest instance**

Follow the steps below to configure a guest instance.

**Step 1 –** In the Deployment configuration wizard, press N to configure the instance. The System
Properties dialog opens.

**Step 2 –** Select Change and specify the required parameters:

**Step 3 –** The instance needs to restart. You can do it now to complete deployment or manually
restart it later.

**Step 4 –** To reconnect to the instance, navigate to EC2 Management Console and select the
instance where is being deployed. Right-click it and select Connect.

**Step 5 –** Re-enter your credentials. You may use the existing password or decrypt it again.

**Step 6 –** Log on to the instance where is being deployed.

**Step 7 –** The Windows PowerShell opens. Press Y to leave computer parameters as is.

The shell script automatically configures SQL Server instance. The sysadmin server role on SQL
Server instance is granted automatically to the BUILTIN\Administrators group.

For the first time, this starts automatically. See the steps below for additional information. For
later runs, you can always run it from the Start menu or launch it by double-clicking the shortcut
on the desktop.
