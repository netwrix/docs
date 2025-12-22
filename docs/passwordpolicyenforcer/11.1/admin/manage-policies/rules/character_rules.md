---
title: "Character (Granular) Rules"
description: "Character (Granular) Rules"
sidebar_position: 40
---

# Character (Granular) Rules

Password Policy Enforcer has seven Character rules that reject passwords if they contain, or do not
contain certain characters. These rules can increase password strength or ensure password
compatibility with other systems.

![Character (Granular) Rule](/images/passwordpolicyenforcer/11.1/administration/chargranular.webp)

All the Character rules work identically, but each has their own default character set. A character
set is the collection of characters that each rule searches for when checking a password. You can
use the Character rules with their default character sets, or define your own. By default, the
Password Policy Enforcer selects the Password Policy Enforcer character on the
[Set Priorities](/docs/passwordpolicyenforcer/11.1/admin/manage-policies/manage_policies.md#set-priorities) page.

:::note
Only Password Policy Enforcer 11 and higher will contain the Windows character set.
Password Policy Enforcer 9, Netwrix Password Reset3 and Password Policy Enforcer Web 7 (and older
for all products) use the Password Policy Enforcer character set.
:::


Select the **Characters (Granular)** check box to enable the Characters rule.

For each selected character set, select whether they **Contain** or **Not contain** the specified
number of characters.

Select the **contain** option if this rule should ensure that new passwords contain certain
characters. Only one character is required by default, but you can specify a different value by
choosing the required number of characters from the drop-down list beside the **contain** option.

Select the **not contain any...** option if this rule should ensure that new passwords do not
contain certain characters.

You can further restrict the rule by defining positions or embedding characters.

Click the + sign by the character set.

Select **In position**.

![Restricting Characters](/images/passwordpolicyenforcer/11.1/administration/chargranularrestrict.webp)

If you want to restrict this rule to certain character positions, choose the starting position from
the first entry box and the ending position from the second entry box. For example, you may want to
enforce a rule that requires a numeric character in the second character position to maintain
compatibility with some other system.

![Require a number in position 2](/images/passwordpolicyenforcer/11.1/administration/chargranularrestrict2.webp)

Click the + sign by the character set.

Select **Embedded**.

Select the **Embedded** check box if users are required to embed these characters within their
passwords. For example, the passwords "12hello", "1hello", and "hello$987" do not contain any
embedded numeric characters, but these passwords do contain embedded numeric characters (shown in
bold type): "he**7**llo", "4he**3**llo", "23hello**7**$45". Embedded numeric and special characters
can help to protect passwords from cracking attacks.

:::note
The First Character, Last Character, and Complexity rules are easier to configure, and
easier for users to understand. Use these rules instead of the Character rules if they can enforce
your desired policy.
:::


You can customize character sets with the Characters option for a selected set.

**Step 1 –** Click **Characters** beside a selected Character set.

**Step 2 –** Enter a **Name**. This example uses **vowels**.

![Set up custom character set](/images/passwordpolicyenforcer/11.1/administration/chargranularvowel.webp)

**Step 3 –** Enter the **Characters**. This example uses **AaEeIiOoUu**.

**Step 4 –** Click **Apply**.

If you save and test the policy, you see **vowels** is listed as a requirement.

To remove a custom set, click **Characters** and delete the information. Click **Apply**.

### Enforcing Complex Character Requirements

Character rules can be combined to enforce complex password requirements. For example, you may need
to enforce a policy such as "passwords must contain a numeric character, but not in the first two
positions" to ensure compatibility with some other system.

This is done by using two of the Character rules:

Set **Characters (Complexity)** to require 1 Numeric character.

![Require a numeric value](/images/passwordpolicyenforcer/11.1/administration/chargranularrestrict3.webp)

Set **Characters (Granular)** to not contain numeric values in the first two positions.

![Don't allow numeric values in first two positions](/images/passwordpolicyenforcer/11.1/administration/chargranularrestrict4.webp)
