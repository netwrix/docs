---
title: "Similarity Rule"
description: "Similarity Rule"
sidebar_position: 80
---

# Similarity Rule

The Similarity rule rejects passwords that are similar to a user's current password. Password
similarity may indicate that a user is serializing their passwords. For example, "password1",
"password2", "password3", etc. Password serialization should be avoided because it may allow an
attacker to guess the new password.

![ppe_rules_9](/images/passwordpolicyenforcer/10.2/administration/ppe_rules_9.webp)

Select the **Enabled** check box to enable the Similarity rule.

- Select the Detect character substitution check box if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.
- Select the **Bi-directional analysis** check box if Password Policy Enforcer should additionally
  test passwords with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in their password. For example, a
  user may enter "drowssapdloym" instead of "myoldpassword".
- Choose a value from the **Tolerance** drop-down list to specify the maximum number of consecutive
  matching characters that Password Policy Enforcer will tolerate before rejecting a password. For
  example, the two passwords "old**passwd**" and "new**passwd**" contain six consecutive matching
  characters (shown in bold type). Password Policy Enforcer will reject the new password if the
  tolerance is five (or lower), and accept it if the tolerance is six (or higher). Choose the
  **Auto** value to reject passwords that contain the user's entire current password.

:::note
Click the Messages tab to customize the Password Policy Client rule inserts. This rule is
only enforced if the Password Policy Client is installed. It does not store or transmit passwords or
password hashes.

:::
