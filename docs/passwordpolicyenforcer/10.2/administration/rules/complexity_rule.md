---
title: "Complexity Rule"
description: "Complexity Rule"
sidebar_position: 40
---

# Complexity Rule

The Complexity rule rejects passwords that do not contain characters from a variety of character
sets. Using several character types can make passwords more difficult to crack.

![ppe_rules_4](/images/passwordpolicyenforcer/10.2/administration/ppe_rules_4.webp)

Select the **Enabled** check box to enable the Complexity rule.

Choose the number of required character sets from the drop-down list. Passwords will be rejected if
they do not contain characters from at least the specified number of character sets.

Choose the available character sets by selecting the check boxes beside the character set names. The
number of available character sets must be equal to or greater than the number of required character
sets.

Select the **Passwords must always comply with this rule** check box to make the Complexity rule
mandatory. Password Policy Enforcer rules are mandatory by default, but can be made optional by
changing the Reject passwords that do not comply with value in the Policy Properties page. A
mandatory rule can still be disabled when a passphrase is used. See the
[Passphrases](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/passphrases.md)
topic for additional information.

Click the Messages tab to customize the Password Policy Client rule inserts.

:::note
The Complexity rule uses custom character set definitions from the Character rules, even
if the Character rules are disabled.

:::
