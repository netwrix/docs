---
title: "General Tab"
description: "General Tab"
sidebar_position: 10
---

# General Tab

Use the General tab to maintain the list of managed domains, set the database options, and enable
the Password Policy Enforcer integration. See the Netwrix Password Policy Enforcer topic for
additional information.

![configuring_npr](/images/passwordreset/3.3/administration/configuring_npr.webp)

### Domain List

The Domain List is empty when Password Reset is first installed, and users must type their domain
name. You can configure Password Reset to display a list of domains instead of an empty text box.

**Add a Domain to the list**

Follow the steps below to add a domain to the list.

**Step 1 –** Click **Add...**

**Step 2 –** Type a NetBIOS (NT Compatible) or DNS domain name.

**Step 3 –** Click **OK**, and then click **Apply**.

:::note
The most frequently used domain should be first in the list as it will be the default. You
can rearrange the domains by dragging them to another position. You can also click Sort to sort them
alphabetically.
:::


**Remove a Domain from the list**

Follow the steps below to remove a domain from the list:

**Step 1 –** Select the domain name in the Domain List.

**Step 2 –** Click **Remove**, and then click **Yes** when asked to confirm.

**Step 3 –** Click **Apply**.

### Database

Password Reset uses an SQL Server Compact database by default. It creates two database files
(apr.sdf and aprlog.sdf) in the Password Reset installation folder.

Follow the steps below to move these files to another folder.

**Step 1 –** Close the Data Console if it is open.

**Step 2 –** Stop the Password Reset service.

**Step 3 –** Move apr.sdf and aprlog.sdf to their new location. The database files should remain on
a local disk.

**Step 4 –** Give the Password Reset service account read and write permissions to the database
files in their new location.

**Step 5 –** Open the Password Reset Configuration Console, and click **Change...** in the
**General** tab.

**Step 6 –** Click **Browse...** and select the new database path.

**Step 7 –** Click **OK** twice, and then click **Apply**.

**Step 8 –** Start the Password Reset service.

**Step 9 –** Update the backup script to copy from the new folder. See the
[Working with the Database](/docs/passwordreset/3.3/administration/workingwiththedatabase/working_with_the_database.md) topic for additional information.

You can also move the database from SQL Server Compact to SQL Server. See the
[Working with the Database](/docs/passwordreset/3.3/administration/workingwiththedatabase/working_with_the_database.md) topic for more information.

### Netwrix Password Policy Enforcer

Password Reset is a configurable password filter that enforces granular password policies with many
advanced features. Password Reset can integrate with Password Policy Enforcer to help users choose a
compliant password.

![configuring_npr_1](/images/passwordpolicyenforcer/11.0/passwordreset/administration/configuring_npr_1.webp)

Password Reset displays the Password Policy Enforcer policy message when users are prompted for
their new password, and the Password Policy Enforcer rejection message if the new password does not
comply with the password policy. Select the **Password Policy Enforcer integration** check box if
you have installed and configured Password Policy Enforcer on your domain controllers.

Password Reset locates and queries a domain controller in the user's domain when Password Policy
Enforcer integration is enabled. You can override this behavior and send all Password Policy
Enforcer queries to a specific IP address by setting the `PPEIPAddress` registry value to the IP
address of a Password Policy Server. The `PPEIPAddress` value is in
`HKEY_LOCAL_MACHINE\SOFTWARE\ANIXIS\ANIXIS Password Reset\3.0`.

:::note
Due to a protocol upgrade, Netwrix Password Reset v3.3 is not compatible with Netwrix
Password Policy Enforcer v8.x and earlier versions. If you are using Netwrix Password Reset with any
of those older Netwrix Password Policy Enforcer versions, please consider upgrading Netwrix Password
Policy Enforcer first to a current version, and only then upgrade Netwrix Password Reset to v3.3 (or
later).
:::


Users are more likely to see the Password Policy Enforcer Generic Rejection message rather than the
more detailed Rejection message when this registry value is set. Users may also have the wrong
policy, or no policy enforced if the queried server is not a domain controller in the user's
domain.
Queries to the Password Policy Server are sent to UDP port 1333 by default. You may need to create
firewall rules to open this port. See the Password Policy Enforcer documentation for additional information.

:::note
Due to a protocol upgrade, it is now recommended to enable protocol encryption for
clients. To do so, please navigate to the PPS Properties in your Netwrix Password Policy Enforcer
server configuration, and enable "Only accept encrypted client request".
:::


![using_ppe_with_npr](/images/passwordpolicyenforcer/11.0/passwordreset/administration/using_ppe_with_npr.webp)

Please do not enable this option if you are using Netwrix Password Reset v3.3 with Netwrix Password
Policy Enforcer v8.x or earlier versions, or with Netwrix Password Policy Enforcer/Web. If you are
using Netwrix Password Reset v3.3 with any of those older versions of Netwrix Password Policy
Enforcer, please consider upgrading first to a current and supported version.

:::note
Password Policy Enforcer is not included with Password Reset. Go to
[www.netwrix.com/password_policy_enforcer](https://www.netwrix.com/password_policy_enforcer.html) to
learn more about Password Policy Enforcer.

:::
