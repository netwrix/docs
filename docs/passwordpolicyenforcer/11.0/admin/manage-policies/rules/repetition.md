---
title: "Repetition Rule"
description: "Repetition Rule"
sidebar_position: 100
---

# Repetition Rule

The Repetition rule rejects passwords that contain excessive character or pattern repetition.
Reducing repetition increase resistance to both brute-force and dictionary cracking algorithms. The
Repetition rule is not case sensitive, so "mypaSssSword" contains four consecutive repeating
characters (SssS).

![Repetition Rule](/images/passwordpolicyenforcer/11.0/administration/repetition.webp)

Select the **Repetition** check box to enable the repetition rule.

Select the **Reject repetition** option and set the maximum number of consecutive repeating
characters that passwords can contain.

Select the **Reject repetition like "wordword" or "p@$s_p@$s"** option to enable pattern repetition.

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
