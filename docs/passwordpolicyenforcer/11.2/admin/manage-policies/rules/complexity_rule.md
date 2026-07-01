---
title: "Characters (Complexity)"
description: "Configure the Characters (Complexity) rule to require passwords to contain characters from a minimum number of character sets, such as uppercase, lowercase, numeric, and special characters."
sidebar_position: 30
---

# Characters (Complexity) rule

The Complexity rule rejects passwords that don't contain characters from a variety of character sets. A complex password takes longer to brute-force crack than a simple password of the same length.

![Character Complexity Rule](/images/passwordpolicyenforcer/11.2/administration/charcomplexity.webp)

Select the **Characters (Complexity)** checkbox to enable the Complexity rule.

Select a number from the **Must contain at least** dropdown. This rule rejects passwords if they don't contain characters from at least the specified number of character sets. This number must be less than or equal to the number of character sets selected below it.

Select the checkbox beside each required character set. Password Policy Enforcer (PPE) has seven character sets. The [Policy Properties](../policy_properties.md) page has more information about PPE's character sets. You can also use the [Characters (Granular)](character_rules.md) rules to customize the default character sets.

If the number in the dropdown is less than the number of selected character sets, then users have some flexibility in their choice of characters. For example, in the preceding screenshot, the password must contain only three of the four selected character sets.

:::note
This rule uses custom character set definitions from the [Characters (Granular)](character_rules.md) rules, even if you disable the granular rules.
:::

Select the **Passwords must always comply with this rule** checkbox to make the Complexity rule mandatory. Rules are mandatory by default, but you can make some of them optional by changing the **Passwords must comply with** setting on the policy's [**Properties**](../policy_properties.md) tab. The [Passphrase](../passphrases.md) feature can still disable a mandatory rule.
