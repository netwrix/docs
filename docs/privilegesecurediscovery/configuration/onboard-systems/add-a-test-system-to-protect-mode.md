---
title: "Add a test system to protect mode"
description: "Review the accounts on one system and move it to protect mode to confirm how just-in-time access works."
sidebar_position: 40
---

Move one system to protect mode first to learn how just-in-time access (JITA) works before you protect many systems. Protect mode removes accounts that aren't persistent from the system and stores them in Privilege Secure for Discovery. Users can then request access to the system.

## Prerequisites

- The product has scanned the system. The **Last Scanned** value on the **Grant Access** page shows when.
- The protect account is in the local Administrators group on the system. See [Add the protect account to local administrators](./add-the-protect-account-to-local-administrators.md).

## Review the accounts on the system

1. Select **Access** > **Grant Access**.
1. In **System Search**, enter the name of the system and select it.

   The **Administrator Accounts** table lists the accounts and groups that have administrator access. The **Persistent** column shows which accounts stay on the system, and the **On System** column shows which accounts are in the local Administrators group now.

   ![The Grant Access page for a system, with its scan and protect modes and its administrator accounts](/images/privilegesecurediscovery/onboard-systems/onboard-grant-access.webp)

1. Decide which service accounts must be persistent. This is the most important step, because software can stop working if its account loses access. A persistent account stays on the system.
1. To change an account, select **Action** in its row, and then select **Set Persistent** or **Remove Persistent**.

   ![The Action menu of an account, with the options Remove Admin and Remove Persistent](/images/privilegesecurediscovery/onboard-systems/onboard-account-action-menu.webp)

1. Decide which groups and users need privileged access to the system. Nested groups often give more access than a person needs, so review and clean up the access as part of the move to protect mode.

To see how the administrator accounts of a system changed over time, select **Insight** > **Computer** and search for the system. The **Computer Access History** chart shows the history, and the **Accounts with Admin Access** table lists the accounts.

## Choose a protect mode

**Protect Mode** has three choices:

- **Disable**: The product doesn't protect the system.
- **New Accounts: JITA**: The product removes accounts that aren't persistent and adds them to its inventory. A user can then request access through JITA. Choose this option for a test system.
- **New Accounts: Deny**: The product removes accounts that aren't persistent from the system, and it doesn't add newly found administrator accounts to its inventory. Users of those accounts can't request access through the product.

## Add the system to protect mode

1. On the **Grant Access** page, select the **Protect Mode** button for the system.
1. Select **New Accounts: JITA**.

   ![The Protect Mode menu of a system, with the options New Accounts: Deny and New Accounts: JITA](/images/privilegesecurediscovery/onboard-systems/onboard-protect-mode-menu.webp)

The product removes accounts that aren't persistent from the system and adds them to Privilege Secure for Discovery. A user can now access the system through JITA if the user is also a member of an AD group that has access to the system. The product doesn't change Active Directory.
