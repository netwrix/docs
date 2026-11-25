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

The Similarity rule rejects passwords that are similar to a user's current password. Password similarity may indicate that a user is serializing their passwords, such as "password1", "password2", and "password3". Password serialization allows an attacker to guess the new password.

To configure the Similarity rule:

1. Enable the **Similarity** button.
2. Select one or more of the following options:

    - Current password: Applies the similarity rules to the user's existing password.
    - User display name: Rejects passwords that are similar to a user's Active Directory display name (full name for local accounts).
    - User logon name: Rejects passwords that are similar to a user's logon name (user name).

3. For each option you enable, set the following rules:

    - Character substitution: Select the checkbox to reject passwords that rely on character substitution to comply with this rule.
    - Words typed backward: Select the checkbox to also test passwords with their characters reversed. Enabling bi-directional analysis stops users from getting around the rule by reversing the order of characters in their password. For example, a user may enter "drowssapdloym" instead of "myoldpassword".
    - Tolerance: Select a value to set the maximum number of matching characters that Password Policy Enforcer allows before rejecting a password. For example, the two passwords "old**passwd**" and "new**passwd**" contain six consecutive matching characters (shown in bold type). Password Policy Enforcer rejects the new password if the tolerance is five (or lower). It accepts the new password if the tolerance is six (or higher).
