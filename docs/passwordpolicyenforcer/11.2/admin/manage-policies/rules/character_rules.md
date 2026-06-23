---
title: "Characters (Granular)"
description: "Use the granular character rules to control which character types passwords must or must not contain."
sidebar_position: 40
---

# Character (Granular) Rules

Clicking the **Characters (Granular)** item in the rules pane displays the settings for nine related rules. Unlike the [Complexity rule](complexity_rule.md), these rules offer granular control over which characters are accepted or required, and can even require the use of certain character types in specific character positions. Use these rules to increase password strength or to ensure password compatibility with other systems.

![Character (Granular) Rule](/images/passwordpolicyenforcer/11.2/administration/chargranular.webp)

:::note
You must select the **Characters (Granular)** checkbox before you can enable any of the rules on this page.
:::

## Character Set Rules
The first seven rules work identically; they differ only in their default character set. A character set is the collection of characters that each rule searches for when checking a password. The first seven rules are named after their default character set: Alpha, Upper Alpha, Lower Alpha, Numeric, Special, High, and Custom.

A description of the default character set appears beside each rule's name. For example, the Alpha set is described as **(a-z and A-Z)**. This description is for the Password Policy Enforcer (PPE) default character set. If the policy is configured to use the Windows character set, then the characters will be different. The [Policy Properties](../policy_properties.md) page has more information about PPE's character sets.

Ensure the **Characters (Granular)** checkbox is selected at the top of the page, then select the checkbox beside a rule's name to enable that rule.

By default, these rules require passwords to contain certain characters. The word **Contain** below the rule's name indicates this. If you want the rule to stop certain characters from being used in passwords, then select **Not contain** from the dropdown.

When **Contain** is selected, PPE defaults to requiring at least one character from this character set. If you want to require more than one character, select the required number from the dropdown beside **contain**. For example, you might want to specify that passwords must contain at least two special characters.

Click **Add** (+) to add more specific positional requirements for this rule. Two options appear: **In position** and **Embedded**.

Select the **In position** option to specify the character positions where the characters must (or must not) appear in the password. For example, you might have a legacy system that requires a special character in the first three characters of a password. You can configure PPE to enforce this rule by selecting **In position**, then selecting **1** and **3** in the next two dropdowns.

![Restricting Characters](/images/passwordpolicyenforcer/11.2/administration/chargranularrestrict.webp)

:::tip
Select the same number for the starting and ending position if you want the rule to only check one character position.
:::

Select the **Embedded** option to specify that the characters must (or must not) be embedded within the password. For example, the passwords "12hello", "1hello", and "hello$987" don't contain any embedded numeric characters because the numeric characters are all at the beginning or end of the password. These passwords all contain embedded numeric characters (shown in bold): "he**7**llo", "4he**3**llo", "23hello**7**$45". Embedded numeric and special characters can protect passwords from cracking attacks because users often put these characters at the beginning or end of a password if a policy requires them.

Click **Characters** if you want to override the default character set.

![Set up custom character set](/images/passwordpolicyenforcer/11.2/administration/chargranularvowel.webp)

Enter a **Name** for the character set, then enter the characters making up the set in the **Characters set** text box. Don't enter any delimiters, just the characters. For example, `AaEeIiOoUu` for vowels. Your custom character set name doesn't appear throughout the user interface — it only appears in the [Policy and Rejection messages](../messages.md). Clear one or both of these text boxes, then click **Apply** to revert them to their original values.

:::tip
You can combine Character rules to enforce complex password requirements. For example, you might need to enforce a policy such as "passwords must contain a numeric character, but not in the first two positions" to ensure compatibility with some other system. Use two rules to enforce this requirement:
- Configure the [Characters (Complexity)](complexity_rule.md) rule to require a numeric character.
- Configure the **Numeric** character set rule to **Not contain** numeric characters in positions **1** to **2**.
:::

:::note
Other rules use custom character set names and character sets even if you disable the corresponding granular rule.
:::

The Character Set rules are flexible, but reserve them for cases where the [Complexity](complexity_rule.md) and First and Last Character rules cannot enforce your desired policy. These other rules are easier to configure and easier for users to understand.

## First and Last Character Rules
The First and Last Character rules reject passwords that don't begin or end with an allowed character. These rules are often used to ensure password compatibility with other systems.

Ensure the **Characters (Granular)** checkbox is selected at the top of the page, then select **Characters (First)** or **Characters (Last)**.

By default, these rules require passwords to begin or end with certain characters. The word **Begin** (First Character rule) or **End** (Last Character rule) below the rule's name indicates this. If you don't want certain characters to appear at the beginning or end of a password, select **Not begin** or **Not end** from the dropdown.

Click the character set names to select them. A checkmark appears next to the selected character sets. For example, this configuration rejects passwords that end with a numeric or special character:

![Characters (Last) rule](/images/passwordpolicyenforcer/11.2/administration/last_character_rule.webp)
