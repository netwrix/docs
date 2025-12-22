---
title: "Similarity Rule"
description: "Similarity Rule"
sidebar_position: 110
---

# Similarity Rule

The Similarity rule rejects passwords that are similar to a user's current password. Password
similarity may indicate that a user is serializing their passwords. For example, "password1",
"password2", "password3". Password serialization allows an attacker to guess the new password.

![Similarity Rule](/images/passwordpolicyenforcer/11.0/administration/similarity.webp)

Select the **Similarity** check box to enable the Similarity rule.

Select **Current password** to apply the similarity rules the user's existing password. The Password
Policy Enforcer client must be installed on the user's machine to enforce this rule.

Select **User display name** to reject passwords that are similar to a user's Active Directory
display name (full name for local accounts).

Select **User logon name** to reject passwords that are similar to a user's logon name (user name).

For each option enabled, set the rules:

Set **Character substitution** to **Yes** to reject passwords that rely on character substitution to
comply with this rule.

Set **Words typed backward** to **Yes** to additionally test passwords with their characters
reversed. Enabling bi-directional analysis stops users from circumventing this rule by reversing the
order of characters in their password. For example, a user may enter "drowssapdloym" instead of
"myoldpassword".

Set a **Tolerance** value to specify the maximum number of matching characters that Password Policy
Enforcer allows before rejecting a password. For example, the two passwords "old**passwd**" and
"new**passwd**" contain six consecutive matching characters (shown in bold type). Password Policy
Enforcer rejects the new password if the tolerance is five (or lower), and accepts it if the
tolerance is six (or higher).
