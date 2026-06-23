---
title: "Age (Min) Rule"
description: "Configure the Minimum Age rule to stop users from cycling through passwords to bypass the History and Similarity rules."
sidebar_position: 20
---

# Age (Min) Rule

The Minimum Age rule stops users from quickly cycling through a series of passwords to evade the [History](history_rule.md) and [Similarity](similarity_rule.md) rules. Only [domain policies](../../../installation/domain_and_local_policies.md) can enforce this rule.

![Minimum age rule](/images/passwordpolicyenforcer/11.2/administration/agemin.webp)

Select the **Age (Min)** checkbox to enable the Minimum Age rule.

Select a number from the **days** dropdown. Users must wait at least this many days between password changes.

:::note
The Minimum Age rule is unique because users can't comply with it by choosing a different password; they must wait until the required number of days has elapsed. The [Password Policy Client](../../password-policy-client/password_policy_client.md) consequently handles rejections by this rule differently from other rules. Instead of displaying the full rejection message, it only displays the Minimum Age rule's reason insert. The [Messages](../messages.md) page explains how to edit the messages shown to users.
:::

Password Policy Enforcer doesn't enforce this rule during [policy testing](../testpolicy.md), but the test log shows the user's password age, and adds a log entry if the Minimum Age rule would have rejected the password change request.
