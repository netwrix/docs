---
title: "Configure the Patterns Rule in Directory Manager"
description: "Reject passwords that contain character or keyboard patterns such as abcde or qwerty by enabling the Password Policy Enforcer Patterns rule."
keywords:
  - Patterns rule
  - keyboard patterns
  - character patterns
  - password tolerance
  - Password Policy Enforcer
sidebar_position: 90
---

# Configure the Patterns Rule in Directory Manager

The Patterns rule rejects passwords that contain character patterns such as "abcde". Character
patterns weaken passwords.

- Enable the **Patterns** button to enable the Patterns rule.
- Reject character patterns like "abcde" – Enable this button to check for character patterns.

    - Detect character substitution – Select this checkbox if Password Policy Enforcer should
      reject passwords that rely on character substitution to comply with this rule.
    - Detect words typed backwards – Select this checkbox if Password Policy Enforcer should
      additionally test passwords with their characters reversed. Enabling this analysis stops users
      from circumventing this rule by reversing the order of characters in their password. For
      example, a user may enter "edcba" instead of "abcde".
    - Tolerance – Choose a value from the dropdown list to specify the longest pattern that
      Password Policy Enforcer allows before rejecting a password. For example, the password
      "password **wxyz**" contains a four-character pattern (shown in bold type). Password Policy
      Enforcer rejects this password if the tolerance is set to three (or lower), and accepts it if
      the tolerance is set to four (or higher).

- Character patterns – Click the **Character Patterns** button to set the patterns to apply. Default
  is both English alphabet (a-z) and Numbers (0-9).

- Enable the **Reject keyboard patterns like "qwerty"** button to enable check for keyboard
  patterns.

    - Detect `<_keyboard type_>` keyboard patterns – Select keyboard layouts to set the keyboard
      type, Horizontal, Vertical, or Horizontal and Vertical.
    - Detect direction change – Select this checkbox for entries that change direction. For
      example, qweewq.
    - Detect key repeat – Select the checkbox for repeated keys, based on the Tolerance value. If
      Tolerance is 4, aaaa is accepted and aaaaa is rejected.
    - Detect key skip – Select this checkbox for skipped keys, such as qetuo.
    - Tolerance – Set the number of characters in a keyboard pattern that Password Policy
      Enforcer allows before it rejects the password.
