---
title: "Repeating Pattern Rule"
description: "Repeating Pattern Rule"
sidebar_position: 150
---

# Repeating Pattern Rule

The Repeating Pattern rule rejects passwords that contain repeating character sequences. Users may
use repetition to artificially increase the length of a short password. This should be avoided as it
can weaken the password.

![ppe_rules_17](/images/passwordpolicyenforcer/10.2/administration/ppe_rules_17.webp)

- Select the **Enabled** checkbox to enable the Repeating Pattern rule.
- Select the Detect character substitution checkbox if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.
- Select the **Bi-directional analysis** checkbox if Password Policy Enforcer should search for
  patterns with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in the repeated pattern. For example,
  a user may enter "password@drowssap" instead of "password@password".
- Choose a value from the **Tolerance** dropdown list to specify the maximum number of consecutive
  matching characters that Password Policy Enforcer tolerates before rejecting a password. For
  example, the password "**mypwd**4**mypwd**5" contains a five-character repeating pattern (shown
  in bold type). Password Policy Enforcer rejects this password if the tolerance is four or lower,
  and accepts it if the tolerance is five or higher.
- Click the **Messages** tab to customize the Password Policy Client rule inserts.
