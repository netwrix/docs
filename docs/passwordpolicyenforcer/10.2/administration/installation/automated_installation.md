---
title: "Automated Installation (Advanced Setup)"
description: "Automated Installation (Advanced Setup)"
sidebar_position: 10
---

# Automated Installation (Advanced Setup)

An automated installation uses Group Policy to distribute Password Policy Enforcer. This type of
installation is recommended when you need to install Password Policy Enforcer on many computers.
This section shows you how to install Password Policy Enforcer on domain controllers to enforce
domain policies, but you can also use Group Policy to target member servers and workstations if you
need to enforce local policies. See the
[Domain and Local Policies](/docs/passwordpolicyenforcer/10.2/administration/domain_and_local_policies.md)
topic for additional information.

## Create a Distribution Point

A distribution point can either be a UNC path to a server share, or a DFS (Distributed File System)
path. To create a Password Policy Enforcer distribution point:

**Step 1 –** Log on to a server as an administrator.

**Step 2 –** Create a shared network folder to distribute the files from.

**Step 3 –** Give the **Domain Controllers** security group read access to the share, and limit
write access to authorized personnel only.

### Copy PPE10.1.msi into the Distribution Point

**Step 1 –** Start the Password Policy Enforcer installer (PPE10.1.exe).

**Step 2 –** Read the license agreement, and then click **Yes** if you accept all the license terms
and conditions.

**Step 3 –** Select the **Advanced** option, and then click **Next**.

**Step 4 –** Right-click the **PPE10.1.msi** icon, click **Copy**, and then paste the file into the
distribution point.

![installing_ppe](/images/passwordpolicyenforcer/10.2/administration/installing_ppe.webp)

**Step 5 –** Give the **Domain Controllers** security group read access to the PPE10.1.msi file in
the distribution point.

**Step 6 –** Click **Finish**.

## Create a Group Policy Object

**Step 1 –** Start the Group Policy Management Console (gpmc.msc).

**Step 2 –** Expand the forest and domain items in the left pane.

**Step 3 –** Right-click the **Domain Controllers OU** in the left pane, and then click **Create a
GPO in this domain, and Link it here...**

![installing_ppe_1](/images/passwordpolicyenforcer/10.2/administration/installing_ppe_1.webp)

**Step 4 –** Enter **Password Policy Enforcer** in the provided field, and then press **Enter**.

## Edit the Group Policy Object

**Step 1 –** Right-click the **Password Policy Enforcer GPO**, and then click the **Edit...**
button.

**Step 2 –** Expand the **Computer Configuration**, **Policies**, and **Software Settings** items.

**Step 3 –** Right-click the **Software installation** item, and then select **New** >
**Package...**

**Step 4 –** Enter the full **UNC path to PPE10.1.msi** in the Open dialog box.

:::note
You must enter a UNC path so that other computers can access this file over the network.
For example: \\file server\distribution point share\PPE10.1.msi
:::


**Step 5 –** Click **Open**.

![installing_ppe_2](/images/passwordpolicyenforcer/10.2/administration/installing_ppe_2.webp)

**Step 6 –** Select the **Assigned deployment method**, and then click **OK**.

**Step 7 –** Close the Group Policy Management Editor.

## Complete the Installation

Restart each domain controller to complete the installation. Windows installs Password Policy
Enforcer during startup, and then immediately restarts the computer a second time to complete the
installation.

Password Policy Enforcer will not enforce a password policy at this time because no policies are
defined. Users can still change their password, and will only need to comply with the Windows
password policy rules (if enabled).
