---
title: "Similarity Rule for Password Policy Enforcer"
description: "Reject new passwords that are similar to the user's current password, display name, or logon name by configuring the Similarity rule."
keywords:
  - Password Policy Enforcer
  - Similarity rule
  - password similarity
  - password serialization
  - bi-directional analysis
sidebar_position: 110
---

# Similarity Rule for Password Policy Enforcer

The Similarity rule rejects passwords that are similar to a user's current password. Password
similarity may indicate that a user is serializing their passwords, such as "password1",
"password2", and "password3". Password serialization allows an attacker to guess the new password.

- Enable the **Similarity** button to enable the Similarity rule.

- Current password – applies the similarity rules to the user's existing password.

- User display name – rejects passwords that are similar to a user's Active Directory display name
  (full name for local accounts).

- User logon name – rejects passwords that are similar to a user's logon name (user name).

For each option enabled, set the rules:

- Character substitution – Select the checkbox to reject passwords that rely on character
  substitution to comply with this rule.
- Words typed backward – Select the checkbox to additionally test passwords with their characters
  reversed. Enabling bi-directional analysis stops users from circumventing this rule by reversing
  the order of characters in their password. For example, a user may enter "drowssapdloym" instead
  of "myoldpassword".
- Tolerance – Select a value to specify the maximum number of matching characters that Password Policy
  Enforcer allows before rejecting a password. For example, the two passwords "old**passwd**" and
  "new**passwd**" contain six consecutive matching characters (shown in bold type). Password Policy
  Enforcer rejects the new password if the tolerance is five (or lower), and accepts it if the
  tolerance is six (or higher).
