---
title: "Account Inventory Colors"
description: "Learn what each color in the Administrator Accounts list means for the accounts in a system's inventory."
sidebar_position: 30
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/admin/configuration/360050514593_screen_shot_2020-06-16_at_11.51.53_am.webp is a June 2020 capture that shows lab account names. Re-capture in the 26.09.1 UI with example names.
:::

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that the colors and their meanings below, and the "Access" page name, match the 26.09.1 UI. Evidence: the Administrator Accounts pane is in docker/web/common/access/views/accessView.html at v26.09.1-rc; the color mapping wasn't checked.
:::

The **Administrator Accounts** pane in Netwrix Privilege Secure for Discovery uses colors to tell the administrator accounts on a system apart. This page explains the color scheme.

![The Administrator Accounts pane showing accounts in different colors](/images/privilegesecure/4.2/discovery/admin/configuration/360050514593_screen_shot_2020-06-16_at_11.51.53_am.webp)

The list is on the right side of the **Access** page. It shows the users and groups that can get administrator rights on the selected system. An account in the **Account** column might not have local administrator rights.

## Colors

| Color | Meaning |
| --- | --- |
| Light gray | Persistent accounts. In Protect Mode, the product doesn't remove these accounts from the local Administrators group during a scan. |
| Dark gray | Offline access accounts and the Privilege Secure for Discovery service account. A key symbol means that the product manages the password rotation. |
| Black | The Windows RID 500 local account. A circle with a diagonal line means that the account is disabled. A key symbol means that the product manages the password rotation through Offline Access Management (OAM). |
| Blue | Groups that were assigned to the inventory directly. |
| Dark green | Users that were assigned to the inventory directly and aren't part of a group. |
| Light green | Users that have an open administrative access session on the system. A session starts when you select **Access System** on the Grant Access page. |
| Red | A local administrator account that isn't a domain account or a special account (RID 500 or a product-specific account). |

Persistence is described in [Remove persistence on machines](../domains-and-ad/remove-persistence.md).

## Why an account is blue or dark green

Blue and dark green accounts are in the inventory for one of the following reasons:

- The account was in the local Administrators group when the system was put into Protect Mode. The product removed it from the group at that time, but it stays in the inventory list.
- The account was added to the administrator account and group inventory through the API.
- The account was added to the local Administrators group on the system. Depending on the configuration, the product might remove the entry from the local Administrators group during the next scan, and the account might stay in the inventory.
