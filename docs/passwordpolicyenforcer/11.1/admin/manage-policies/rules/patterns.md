---
title: "Patterns Rule"
description: "Patterns Rule"
sidebar_position: 90
---

# Patterns Rule

The Patterns rule rejects passwords that contain character patterns such as "abcde". Character
patterns weaken the password.

![Patterns rule](/images/passwordpolicyenforcer/11.1/administration/patterns.webp)

Select the **Patterns** check box to enable the Patterns rule.

Select **Reject character patterns like "abcde"** to check for character patterns.

Select **Character patterns** to set the patterns to apply. Default is both **English alphabet
(a-z)** and **Numbers (0-9)**.

Select **Detect character substitution** if Password Policy Enforcer should reject passwords that
rely on character substitution to comply with this rule.

Select **Detect words typed backwards** if Password Policy Enforcer should additionally test
passwords with their characters reversed. Enabling this analysis stops users from circumventing this
rule by reversing the order of characters in their password. For example, a user may enter "edcba"
instead of "abcde".

Choose a value from the **Tolerance** drop-down list to specify the longest pattern that Password
Policy Enforcer allows before rejecting a password. For example, the password "password**wxyz**"
contains a four-character pattern (shown in bold type). Password Policy Enforcer rejects this
password if the tolerance is set to three (or lower), and accept it if the tolerance is set to four
(or higher). Choose the **Auto** value if passwords should be rejected if they only contain a
single, continuous, character pattern. For example, "abcde" would be rejected, but "abcdz" and
"abc123" would not.

Select **Reject keyboard patterns like "qwerty"** to check for keyboard patterns.

Select **Keyboard layouts** to set the keyboard type. Default is **United States**.

Select the type of keyboard pattern: **Horizontal**, **Vertical** or **Horizontal and Vertical**.

Select **Detect direction change** for entries that change direction. For example, **qweewq**.

Select **Detect key repeat** for repeated keys, based on the **Tolerance** value. If Tolerance is 4,
**aaaa** is accepted and **aaaaa** is rejected.

Select **Detect key skip** for skipped keys, such as **qetuo**.

Set **Tolerance** for the number of characters in a keyboard pattern is allowed before the password
is rejected.
