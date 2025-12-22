---
title: "Patterns Rule"
description: "Patterns Rule"
sidebar_position: 90
---

# Patterns Rule

The Patterns rule rejects passwords that contain character patterns such as "abcde". Character
patterns weaken the password.

- Enable the **Patterns** button to enable the Patterns rule.
- Reject character patterns like "abcde" – Enable this button to check for character patterns.

    - Detect character substitution – Select this check box if Password Policy Enforcer should
      reject passwords that rely on character substitution to comply with this rule.
    - Detect words typed backwards – Select this check box if Password Policy Enforcer should
      additionally test passwords with their characters reversed. Enabling this analysis stops users
      from circumventing this rule by reversing the order of characters in their password. For
      example, a user may enter "edcba" instead of "abcde".
    - Tolerance – Choose a value from the drop-down list to specify the longest pattern that
      Password Policy Enforcer allows before rejecting a password. For example, the password
      "password **wxyz**" contains a four-character pattern (shown in bold type). Password Policy
      Enforcer rejects this password if the tolerance is set to three (or lower), and accept it if
      the tolerance is set to four (or higher).

- Character patterns – Click the **Character Patterns** button to set the patterns to apply. Default
  is both English alphabet (a-z) and Numbers (0-9).

- Enable the **Reject keyboard patterns like "qwerty"** button to enable check for keyboard
  patterns.

    - Detect `<_keyboard type_>` keyboard patterns – Select keyboard layouts to set the keyboard
      type, Horizontal, Vertical or Horizontal and Vertical.
    - Detect direction change – Select this check box for entries that change direction. For
      example, qweewq.
    - Detect key repeat – Select the check box for repeated keys, based on the Tolerance value. If
      Tolerance is 4, aaaa is accepted and aaaaa is rejected.
    - Detect key skip – Select this check box for skipped keys, such as qetuo.
    - Tolerance – Set tolerance for the number of characters in a keyboard pattern is allowed before
      the password is rejected.
