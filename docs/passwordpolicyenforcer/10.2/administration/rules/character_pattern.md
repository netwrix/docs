---
title: "Character Pattern Rule"
description: "Character Pattern Rule"
sidebar_position: 140
---

# Character Pattern Rule

The Character Pattern rule rejects passwords that contain character patterns such as "abcde".
Passwords should not contain character patterns because they can weaken the password.

![ppe_rules_19](/images/passwordpolicyenforcer/10.2/administration/ppe_rules_19.webp)

- Select the **Enabled** check box to enable the Character Pattern rule.
- Select the Detect character substitution check box if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.
- Select the **Bi-directional analysis** check box if Password Policy Enforcer should additionally
  test passwords with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in their password. For example, a
  user may enter "edcba" instead of "abcde".
- Choose a value from the **Tolerance** drop-down list to specify the longest pattern that Password
  Policy Enforcer will tolerate before rejecting a password. For example, the password
  "password**wxyz**" contains a four-character pattern (shown in bold type). Password Policy
  Enforcer will reject this password if the tolerance is set to three (or lower), and accept it if
  the tolerance is set to four (or higher). Choose the **Auto** value if passwords should be
  rejected if they only contain a single, continuous, character pattern. For example, "abcde" would
  be rejected, but "abcdz" and "abc123" would not.
- Click the **Character Patterns** button to select which character patterns Password Policy
  Enforcer will detect. You must select at least one pattern.
- Click the **Messages** tab to customize the Password Policy Client rule inserts.
