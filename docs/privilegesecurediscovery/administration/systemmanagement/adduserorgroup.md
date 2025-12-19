---
title: "Add a User or Group to a Systems' Administrator Account Inventory"
description: "Add a User or Group to a Systems' Administrator Account Inventory"
sidebar_position: 20
---

# Add a User or Group to a Systems' Administrator Account Inventory

Add a User or Group to a Systems' Administrator Account Inventory

# Add a User or Group to a Systems' Administrator Account Inventory

Follow the steps to add an AD User or Group to a Windows or Linux System in Protect Mode.

**NOTE:** A local administrator account should only be added to protected systems for use cases that
require the accounts to be persisted, e.g service accounts.

**Step 1 –** Locate the system in the **Access** > **Grant Access** page.

**Step 2 –** Click the **+Add** **Account** button in the upper right corner of the window.

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/10899393268503_mceclip0.webp)

**Step 3 –** Use a string to search for the AD user/group and click on the desired AD user/group.

![mceclip1.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/10899393268503_mceclip1.webp)

**Step 4 –** **Windows**: Select **Just-In-Time** or **Persistent** and either the **Save** or
**Save and add another** button.

![mceclip2.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/10899393268503_mceclip2.webp)

**Step 5 –** **Linux**: Select **All Sudo permission allowed** or **Specify Sudo permissions**.

- If adding a group, all users getting JITA permission for this system from this group will inherit
  the sudo permissions assigned to the group.
- If specifying specific sudo permission, use sudo file syntax, example provided before editing
  field.

![mceclip3.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/10899393268503_mceclip3.webp)

**Step 6 –** Click either the **Save** or **Save and add another** button.

## Adding a local User or Group Account to a Windows or Linux System in Protect Mode

A local administrator account should only be added to protected systems for use cases that require
the accounts to be persisted, e.g service accounts.

**Step 1 –** Protect mode JITA is required.  If system in Protect Mode: Deny, change to JITA
temporarily to add user and/or group. (Privilege Secure administrator required.)

**Step 2 –** On the system: Add the local user and/or group to the system:

- Windows – Add to the local Administrators group.
- Linux – Add using `sudo visudo`

**Step 3 –** Rescan the system in Privilege Secure.

**Step 4 –** The local user and or group should now appear in the system's Administrator Account
Inventory.

**Step 5 –** In the systems' Administrator Account Inventory, for the added account, select
**Action** > **Set Persistent** (Privilege Secure administrator required.)

**Step 6 –** Rescan the system.

## Bulk Actions

Bulk actions for adding AD users and/or groups to multiple system inventories is currently being
developed.

## QuickStart

QuickStart can be used to provision user and/or groups to one or more systems using the Computer
Data Sheet, Provision Account column.

For additional information, see the following topics:

- [QuickStart Script](/docs/privilegesecurediscovery/administration/configuration/quickstartscript.md)
- [Quickstart Fields Demystified](/docs/privilegesecurediscovery/administration/systemmanagement/quickstartfields.md)

Replicate sudo permissions to one or many systems:

- [Linux: Replicate Sudo Permissions to Many Systems Using QuickStart](/docs/privilegesecurediscovery/administration/systemmanagement/linuxsudopermissions.md)
