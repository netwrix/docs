---
title: "Similarity"
description: "Configure the Similarity rule to reject passwords that are similar to a user's current password, display name, or logon name."
sidebar_position: 110
---

# Similarity rule

The Similarity rule rejects passwords that are similar to a user's current password, display name, or logon name. These passwords are predictable and relatively easy to guess.

![Similarity rule](/images/passwordpolicyenforcer/11.2/administration/similarity.webp)

Select the **Similarity** checkbox at the top of the page, then select the types of similarity that you want Password Policy Enforcer (PPE) to detect:

- Select the **Current password** checkbox if you want PPE to reject passwords that are similar to the user's current password. Password similarity may indicate that a user is serializing their passwords. For example, password1, password2, password3. Password serialization allows an attacker to predict future passwords.

- Select the **User display name** checkbox if you want PPE to reject passwords that are similar to the user's Active Directory display name (full name for [local accounts](../../../installation/domain_and_local_policies.md)).

- Select the **User logon name** checkbox if you want PPE to reject passwords that are similar to a user's logon name (user name).

:::note
**Current password** similarity detection only works when users change passwords from the [Password Policy Client](../../password-policy-client/password_policy_client.md), [Password Policy Enforcer Web](../../../web-overview/web_overview.md), or Netwrix Password Reset. This feature doesn't store or transmit passwords or password hashes. It complements the [History rule](history_rule.md), but doesn't replace it because it only compares the current password with the new one.
:::

Select **Yes** from the corresponding **Character substitution** dropdown if you want PPE to apply [character substitutions](rules.md#detecting-character-substitution) when checking passwords.

Select **Yes** from the corresponding **Words typed backwards** dropdown if you want PPE to test passwords with their characters reversed. This stops users from circumventing this rule by reversing the order of characters in the similar password fragments. For example, PPE also evaluates the password emannogolym as mylogonname.

Select a value from the corresponding **Tolerance** dropdown to specify the maximum number of consecutive matching characters that PPE tolerates before rejecting a password. For example, the passwords old**passwd** and new**passwd** contain six consecutive matching characters (shown in bold). PPE rejects the new password if the tolerance is five or lower, and accepts it if the tolerance is six or higher. The **Auto** value rejects passwords that contain the user's entire current password, display name, or logon name, respectively.

:::tip
Increase the tolerance if [testing](../testpolicy.md#by-user) shows that this rule rejects too many acceptable passwords. Decrease it if the rule is too permissive. The [Rules](rules.md#tolerance) page has more information about how PPE implements tolerance.
:::
