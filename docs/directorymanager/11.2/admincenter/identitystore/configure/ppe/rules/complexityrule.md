---
title: "Configure the Characters (Complexity) Rule in Directory Manager"
description: "Reject passwords that don't draw characters from enough character sets by configuring the Password Policy Enforcer Complexity rule."
keywords:
  - Characters (Complexity) rule
  - Password Policy Enforcer
  - character sets
  - password complexity
  - mandatory rule
sidebar_position: 40
---

# Configure the Characters (Complexity) Rule in Directory Manager

The Complexity rule rejects passwords that don't contain characters from enough character sets. Using several character types makes passwords harder to crack.

To configure the Complexity rule:

1. Enable the **Characters (Complexity)** button to turn on the Complexity rule.

2. In the `number` of character sets field, select how many character sets a password must draw from. Passwords are rejected if they don't contain characters from at least that many sets.

3. Select the available character sets. The number of available character sets must be equal to or greater than the number of required character sets.

4. To make the rule mandatory, select the **Passwords must always comply with this rule** checkbox. Password Policy Enforcer rules are mandatory by default. You can make them optional by changing the Reject passwords that don't comply with value in the Policy Properties page. A mandatory rule can still be disabled when a passphrase is used. See the Passphrases topic for more information.

:::note
The Complexity rule uses custom character set definitions from the Character rules, even if the Character rules are disabled.
:::

## Default character sets

The default character sets contain the following:

| Rule        | Default character set |
| ----------- | --- |
| Alpha Lower | Lowercase alphabetic (a - z) |
| Alpha Upper | Uppercase alphabetic (A - Z) |
| Alpha       | Uppercase and lowercase alphabetic (a - z & A - Z) |
| Numeric     | Numerals (0 - 9) |
| Special     | All characters not included in the other rules |
| High        | All characters above ANSI 126 |
| Custom      | No default characters |
