---
title: "Patterns"
description: "Configure the Patterns rule to reject passwords that contain sequential character patterns like abcde or keyboard patterns like qwerty."
sidebar_position: 90
---

# Patterns rule

The Patterns rule rejects passwords that contain sequential character patterns like abcde and keyboard patterns like qwerty. Passwords with predictable character patterns are easier to guess and crack.

![Patterns rule](/images/passwordpolicyenforcer/11.2/administration/patterns.webp)

## Sequential character patterns

Select the **Patterns** checkbox at the top of the page, then select the **Reject character patterns like "abcde"** checkbox to reject passwords containing sequential character patterns.

Select the **Detect character substitution** checkbox if PPE should apply [character substitutions](rules.md#detecting-character-substitution) when checking passwords.

Select the **Detect words typed backwards** checkbox if PPE should test passwords with their characters reversed. For example, PPE also evaluates the password zyxwdrowssap as passwordwxyz.

Select a value from the **Tolerance** dropdown to specify the maximum number of consecutive matching characters that PPE tolerates before rejecting a password. For example, the password password**wxyz** contains a four-character sequential pattern (shown in bold). PPE rejects this password if the tolerance is three or lower, and accepts it if the tolerance is four or higher. The "Auto" value rejects passwords only if the entire password is a sequential character pattern. For example, PPE rejects the password abcde, but not abcdez or abcd123.

:::tip
Increase the tolerance if [testing](../testpolicy.md#by-user) shows that this rule rejects too many acceptable passwords. Decrease it if the rule is too permissive. The [Rules](rules.md#tolerance) page has more information about how PPE implements tolerance.
:::

Click **Character patterns** to select which sequential character patterns PPE detects. The options are **English alphabet (a-z)** and **Numbers (0-9)**. Both are selected by default.

![Character patterns](/images/passwordpolicyenforcer/11.2/administration/character_patterns.webp)

## Keyboard patterns

Select the **Patterns** checkbox at the top of the page, then select the **Reject keyboard patterns like "qwerty"** checkbox to reject passwords containing keyboard patterns.

Select a value from the **Detect** dropdown to specify the types of keyboard patterns PPE detects. The "Horizontal" value only detects horizontal patterns like qwerty and zxcvbn. The "Vertical" value only detects vertical patterns like 4esz and 4rfc. The "Horizontal or vertical" value detects patterns in both directions.

Select the **Detect direction change** checkbox if PPE should detect direction changes in keyboard patterns. For example, qwewq and 4rfr4 are both recognized as five-character keyboard patterns if **Detect direction change** is selected.

:::note
PPE detects direction changes in both directions if "Horizontal or vertical" is selected. For example, qawsed, qwedsa, qwedcv, and qwsazx are all identified as six-character keyboard patterns if **Detect direction change** is selected and **Detect** is set to "Horizontal or vertical".
:::

Select the **Detect key repeat** checkbox if PPE should continue matching the keyboard pattern when a key is repeated. For example, qwwert and qwwwer are both recognized as six-character keyboard patterns if **Detect key repeat** is selected.

Select the **Detect key skip** checkbox if PPE should continue matching the keyboard pattern when a key is skipped horizontally or vertically. For example, qwryui is recognized as a six-character keyboard pattern if **Detect key skip** is selected.

Select a value from the **Tolerance** dropdown to specify the maximum number of consecutive matching characters that PPE tolerates before rejecting a password. For example, the password pass**qwer**word contains a four-character keyboard pattern (shown in bold). PPE rejects this password if the tolerance is three or lower, and accepts it if the tolerance is four or higher.

:::tip
Increase the tolerance if [testing](../testpolicy.md#by-user) shows that this rule rejects too many acceptable passwords. Decrease it if the rule is too permissive. The [Rules](rules.md#tolerance) page has more information about how PPE implements tolerance.
:::

Click **Keyboard layouts** to select which international keyboard layouts PPE detects. **United States** is selected by default.

![Keyboard layouts](/images/passwordpolicyenforcer/11.2/administration/keyboard_layouts.webp)
