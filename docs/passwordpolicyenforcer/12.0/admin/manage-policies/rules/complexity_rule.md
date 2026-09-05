---
title: "Characters (Complexity)"
description: "Configure the Characters (Complexity) rule to require passwords to contain characters from a minimum number of character sets, such as uppercase, lowercase, numeric, and special characters."
sidebar_position: 30
---

# Characters (Complexity) rule

The Complexity rule rejects passwords that don't contain characters from a variety of character sets. A complex password takes longer to brute-force crack than a simple password of the same length.

Select the **Characters (Complexity)** checkbox to enable the Complexity rule.

Select a number from the **Must contain at least** dropdown. This rule rejects passwords if they don't contain characters from at least the specified number of character sets. This number must be less than or equal to the number of character sets selected below it.

Select the checkbox beside each required character set. Password Policy Enforcer (PPE) has seven character sets. The [Policy Properties](../policy_properties.md) page has more information about PPE's character sets. You can also use the [Characters (Granular) rules](character_rules.md) to customize the default character sets.

If the number in the dropdown is less than the number of selected character sets, then users have some flexibility in their choice of characters. For example, if you select four character sets but set **Must contain at least** to 3, then a password only needs characters from three of those four sets to comply.

:::note
This rule uses custom character set definitions from the [Characters (Granular) rules](character_rules.md), even if you disable the granular rules.
:::

Select the **Passwords must always comply with this rule** checkbox to make the Complexity rule mandatory. Rules are mandatory by default, but you can make some of them optional by changing the **Passwords must comply with** setting on the policy's [**Properties**](../policy_properties.md) tab. The [Passphrases](../passphrases.md) feature can still disable a mandatory rule.
