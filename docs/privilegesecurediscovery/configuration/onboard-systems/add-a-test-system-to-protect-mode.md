---
title: "Add a test system to protect mode"
description: "Review the accounts on one system and move it to protect mode to confirm how just-in-time access works."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the Insight > Computer page name and path at 26.09.1. Evidence: none; the Access > Grant Access page is in docker/web/common/access/views/accessView.html and the protect mode choices are in accessCtrl.js (New Accounts: Deny, New Accounts: JITA, Disable).
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/360048268793_blobid2.webp shows the old product header and branding. Re-capture on the current release.

TODO: /images/privilegesecure/4.2/discovery/360048268793_blobid3.webp comes from an earlier release. Re-capture and redact system and account names.
:::

Move one system to protect mode first to learn how just-in-time access (JITA) works before you protect many systems. Protect mode removes accounts that aren't persistent from the system and stores them in Privilege Secure for Discovery. Users can then request access to the system.

## Prerequisites

- The system is scanned.
- The protect account is in the local Administrators group on the system. See [Add the protect account to local administrators](./add-the-protect-account-to-local-administrators.md).

## Review the accounts on the system

1. Decide which service accounts must be persistent. This is the most important step, because software can stop working if its account loses access. A persistent account stays on the system.
1. Decide which groups and users need privileged access to the system. Nested groups often give more access than a person needs, so review and clean up the access as part of the move to protect mode.

To see the accounts with access to a system, open the **Insight** > **Computer** page. The page lists the accounts and groups over several pages.

![Computer page listing the accounts and groups with administrator access to a system](/images/privilegesecure/4.2/discovery/360048268793_blobid2.webp)

## Add the system to protect mode

1. Select **Access** > **Grant Access**.
1. Locate the system.
1. Set **Protect Mode** to **New Accounts: JITA**.

   ![Grant Access page showing a system with protect mode set](/images/privilegesecure/4.2/discovery/360048268793_blobid3.webp)

Accounts that aren't persistent are removed from the system and added to Privilege Secure for Discovery. A user can now access the system through JITA if the user is also a member of an AD group that has access to the system. The product doesn't change Active Directory.
