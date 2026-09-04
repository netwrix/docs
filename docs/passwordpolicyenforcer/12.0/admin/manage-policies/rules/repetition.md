---
title: "Repetition"
description: "Configure the Repetition rule to reject passwords that contain excessive character or pattern repetition."
sidebar_position: 100
---

# Repetition rule

The Repetition rule rejects passwords that contain repeating patterns like abbbbc and pwdpwdpwd. Excessive repetition decreases password entropy, making passwords easier to guess or crack.

## Character repetition

Select the **Repetition** checkbox at the top of the page, then select the **Reject repetition** checkbox to reject passwords containing repeating characters like abbbbc.

Select a value from the dropdown to specify the maximum number of consecutive repeating characters that Password Policy Enforcer (PPE) accepts before rejecting the password. This rule isn't case sensitive, so the password mypa**SssS**word contains four consecutive repeating characters (shown in bold).

## Pattern repetition

Select the **Repetition** checkbox at the top of the page, then select the **Reject repetition like "wordword" or "p@$s_p@$s"** checkbox to reject passwords containing repeating patterns.

Select the **Detect character substitution** checkbox if you want PPE to apply [character substitutions](rules.md#detecting-character-substitution) when checking passwords.

Select the **Detect words typed backwards** checkbox if you want PPE to test passwords with their characters reversed. This stops users from circumventing this rule by reversing the order of characters in the repeated pattern. For example, PPE detects that password@drowssap contains two instances of password, even though the characters are reversed. The match doesn't need to be a real word, just a matching pattern of characters.

Select a value from the **Tolerance** dropdown to specify the maximum number of consecutive matching characters that PPE tolerates before rejecting a password. For example, the password **mypwd**4**mypwd**5 contains a five-character repeating pattern (shown in bold). PPE rejects this password if the tolerance is four or lower, and accepts it if the tolerance is five or higher. This rule isn't case sensitive, so the password **mypwd**4**MYPWD**5 still contains a five-character repeating pattern.

:::tip
Increase the tolerance if [testing](../testpolicy.md#by-user) shows that this rule rejects too many acceptable passwords. Decrease it if the rule is too permissive. The [Rules](rules.md#tolerance) page has more information about how PPE implements tolerance.
:::
