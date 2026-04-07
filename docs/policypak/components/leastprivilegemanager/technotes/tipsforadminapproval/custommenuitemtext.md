---
title: "How does custom menu item text work after builds 23.8 and later?"
description: "How does custom menu item text work after builds 23.8 and later?"
sidebar_position: 90
---

# How does custom menu item text work after builds 23.8 and later?

Starting in builds 23.8 and later, we changed the behavior of the custom menu items so you can have
more control. Here is the expected behavior when you have Admin Approval used and not used, and what
happens when a rule matches and the expected result.

| Admin Approval State | Rule Match             | Result                                                                                 |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| Not used / Disabled  | On Demand Rule Matches | Show custom menu item text specified for explicit rules.                               |
| Not used / Disabled  | No rules match         | Show custom menu item text configured for explicit rules (grayed out).                 |
| Enabled              | Explicit Rule Matches  | Show custom menu item text configured for explicit rules.                              |
| Enabled              | No rules Match         | Show custom text configured for Admin Approval (or default "Run with PolicyPak" text). |


