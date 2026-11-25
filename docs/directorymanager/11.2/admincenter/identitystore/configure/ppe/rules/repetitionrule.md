---
title: "Repetition Rule for Password Policy Enforcer"
description: "Reject passwords with repeated characters or patterns by configuring the Repetition rule in a Password Policy Enforcer policy."
keywords:
  - Password Policy Enforcer
  - Repetition rule
  - password repetition
  - character substitution
  - pattern repetition
sidebar_position: 100
---

# Repetition Rule for Password Policy Enforcer

The Repetition rule rejects passwords that contain excessive character or pattern repetition. Reducing repetition increases resistance to both brute-force and dictionary cracking algorithms. The Repetition rule isn't case sensitive, so "mypaSssSword" contains four consecutive repeating characters (SssS).

To configure the Repetition rule:

1. Enable the **Repetition** button.
2. Set the following options:

    - Reject repetition `<_character_>` and more consecutive characters like "aaaA": Select the option and set the maximum number of consecutive repeating characters that passwords can contain.
    - Reject repetition like "wordword" or "p@$s_p@$s": Select the option to enable pattern repetition.
    - Detect character substitution: Select this option if Password Policy Enforcer should reject passwords that rely on character substitution to comply with this rule.
    - Bi-directional analysis: Select this option if Password Policy Enforcer should also test passwords with their characters reversed. This stops users from getting around the rule by reversing the order of characters in their password. For example, a user may enter "edcba" instead of "abcde".
    - Tolerance: Choose a value from the dropdown list to set the longest pattern that Password Policy Enforcer allows before rejecting a password. For example, the password "password**wxyz**" contains a four-character pattern. Password Policy Enforcer rejects this password if the tolerance is set to three (or lower). It accepts the password if the tolerance is set to four (or higher).
