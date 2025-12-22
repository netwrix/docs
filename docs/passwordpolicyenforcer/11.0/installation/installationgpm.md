---
title: "Install with Group Policy Management"
description: "Install with Group Policy Management"
sidebar_position: 40
---

# Install with Group Policy Management

An automated installation uses Group Policy to distribute Password Policy Enforcer. This type of
installation is recommended when you need to install Password Policy Enforcer on many computers.
This section shows you how to install Password Policy Enforcer on domain controllers to enforce
domain policies, but you can also use Group Policy to target member servers and workstations if you
need to enforce local policies. See the
[Domain and Local Policies](/docs/passwordpolicyenforcer/11.0/installation/domain_and_local_policies.md) topic for additional
information.

## Create a Distribution Point

A distribution point can either be a UNC path to a server share, or a DFS (Distributed File System)
path. To create a Password Policy Enforcer distribution point:

**Step 1 –** Log on to a server as an administrator.

**Step 2 –** Create a shared network folder to distribute the files from.

**Step 3 –** Give the **Domain Controllers** security group read access to the share, and limit
write access to authorized personnel only.

**Step 4 –** Download the Netwrix Password Policy Enforcer installation package from Netwrix.

**Step 5 –** Extract the installers from the compressed file.

**Step 6 –** Copy the **.msi** files to the distribution folder.

## Create a Group Policy Object

**Step 1 –** Start the Group Policy Management Console (**gpmc.msc**).

**Step 2 –** Expand the forest and domain items in the left pane.

**Step 3 –** Right-click the **Domain Controllers OU** in the left pane, and then click **Create a
GPO in this domain, and Link it here...**

![GPM installation](/images/passwordpolicyenforcer/11.0/install/gpm1.webp)

**Step 4 –** Enter **Password Policy Enforcer** in the provided field, and then press **Enter**.

![GPM Install](/images/passwordpolicyenforcer/11.0/install/gpm2.webp)

## Edit the Group Policy Object

**Step 1 –** Right-click the **Password Policy Enforcer GPO**, and then click the **Edit...**
button.

**Step 2 –** Expand the **Computer Configuration**, **Policies**, and **Software Settings** items.

**Step 3 –** Right-click the **Software installation** item, and then select **New** >
**Package...**

**Step 4 –** Enter the full **UNC path** to your **msi** files.

:::note
You must enter a UNC path so that other computers can access this file over the network.
For example: \\file server\distribution point share\Netwrix*PPE\_\_version*.msi
:::


**Step 5 –** Click **Open**.

![installing_ppe_2](/images/passwordpolicyenforcer/11.0/install/installing_ppe_2.webp)

**Step 6 –** Select **Assigned** as the deployment method.

**Step 7 –** Click **OK**.

**Step 8 –** Close the Group Policy Management Editor.

## Complete the Installation

Restart each domain controller to complete the installation. Windows installs Password Policy
Enforcer during startup, and then immediately restarts the computer a second time to complete the
installation.

Password Policy Enforcer does not enforce a password policy until the policies are defined. Users
can still change their password, and will only need to comply with the Windows password policy rules
(if enabled).
