---
title: "User Logon Name Rule"
description: "User Logon Name Rule"
sidebar_position: 90
---

# User Logon Name Rule

The User Logon Name rule rejects passwords that are similar to a user's logon name (user name).
Passwords that are similar to a user's logon name are not desirable because they are easily guessed.

![ppe_rules_10](/images/passwordpolicyenforcer/10.2/administration/ppe_rules_10.webp)

- Select the Enabled check box to enable the User Logon Name rule.
- Select the Detect character substitution check box if Password Policy Enforcer should reject
  passwords that rely on character substitution to comply with this rule.

- Select the **Bi-directional analysis** check box if Password Policy Enforcer should additionally
  test passwords with their characters reversed. Enabling bi-directional analysis stops users from
  circumventing this rule by reversing the order of characters in their password. For example, a
  user may enter "emannogolym" instead of "mylogonname".
- Choose a value from the **Tolerance** drop-down list to specify the maximum number of consecutive
  matching characters that Password Policy Enforcer will tolerate before rejecting a password. For
  example, the logon name "mary**jones**", and the password "**Jones**town" contain five consecutive
  matching characters (shown in bold type). Password Policy Enforcer will reject this password if
  the tolerance is four (or lower), and accept it if the tolerance is five (or higher). Choose the
  **Auto** value to reject passwords that contain the user's entire logon name.
- Click the **Messages** tab to customize the Password Policy Client rule.
