---
title: "Add a user or group to an account inventory"
description: "Add an Active Directory or local user or group to the administrator account inventory of a Windows or Linux system in Protect Mode."
sidebar_position: 20
---

The administrator account inventory of a system lists the accounts that can receive administrator access on it. This page explains how to add an Active Directory (AD) user or group, or a local account, to that inventory for a system in Protect Mode.

:::note
Add a local administrator account to a protected system only for use cases that require the account to persist, such as service accounts.
:::

## Add an AD user or group

1. Locate the system on the **Access** > **Grant Access** page.
1. Select **+Add Account** in the upper right corner of the window.

   ![The Add Account button on the Grant Access page](/images/privilegesecure/4.2/discovery/admin/systemmanagement/10899393268503_mceclip0.webp)

1. Enter a search string, and then select the AD user or group.

   ![The search results for an AD user or group](/images/privilegesecure/4.2/discovery/admin/systemmanagement/10899393268503_mceclip1.webp)

1. For a Windows system, select **Just-In-Time** or **Persistent**.

   ![The Just-In-Time and Persistent options for a Windows system](/images/privilegesecure/4.2/discovery/admin/systemmanagement/10899393268503_mceclip2.webp)

1. For a Linux system, select **All Sudo permission allowed** or **Specify Sudo permissions**.

   ![The sudo permission options for a Linux system](/images/privilegesecure/4.2/discovery/admin/systemmanagement/10899393268503_mceclip3.webp)

   - If you add a group, all users who get JITA permission for this system through the group inherit the sudo permissions assigned to the group.
   - If you specify sudo permissions, use sudo file syntax. An example appears in the field before you edit it.

1. Select **Save** or **Save and add another**.

## Add a local user or group

You need the Privilege Secure for Discovery administrator role for this procedure.

1. If the system is in Protect Mode **Deny**, temporarily change it to **JITA**. Protect Mode JITA is required.
1. On the system, add the local user or group:
   - Windows: add it to the local Administrators group.
   - Linux: add it by using `sudo visudo`.
1. Rescan the system in Privilege Secure for Discovery.

   The local user or group now appears in the administrator account inventory of the system.

1. In the inventory, select **Action** > **Set Persistent** for the added account.
1. Rescan the system.

## Add accounts to many systems

Bulk actions can add and update accounts on many systems at once. See [Run bulk actions on systems](./bulk-actions.md).

You can also use Quickstart to provision users and groups to one or more systems by using the **Provision Account** column of the Computer Data sheet. For more information, see the following topics:

- [Install the Quickstart tools](../../configuration/bulk-onboarding/install-the-quickstart-tools.md)
- [Quickstart report field reference](../../configuration/bulk-onboarding/report-field-reference.md)
- [Replicate sudo permissions to many Linux systems](../../configuration/endpoint-preparation/linux-replicate-sudo-permissions.md)
