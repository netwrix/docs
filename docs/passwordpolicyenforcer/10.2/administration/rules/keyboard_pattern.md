---
title: "Keyboard Pattern Rule"
description: "Keyboard Pattern Rule"
sidebar_position: 130
---

# Keyboard Pattern Rule

The Keyboard Pattern rule rejects passwords that contain keyboard patterns such as "qwerty".
Passwords should not contain keyboard patterns because they are vulnerable to cracking attacks and
shoulder surfing (observing users as they enter their password).

![ppe_rules_17](/images/passwordpolicyenforcer/10.2/administration/ppe_rules_17.webp)

The examples for this rule are taken from a US keyboard layout. These patterns may not exist on
other keyboard layouts.

- Select the **Enabled** check box to enable the Keyboard Pattern rule.
- Choose the pattern detection mode from the **keyboard patterns** drop-down list. The Horizontal
  mode only detects horizontal patterns such as "qwerty" and "zxcvbn". The Vertical mode only
  detects vertical patterns such as "4esz" and "4rfc". The "Horizontal or vertical" mode detects
  patterns in both axes.
- Select the **Detect direction change** check box if Password Policy Enforcer should detect
  keyboard patterns that contain direction changes. For example, "qwewq" and "4rfr4" are both
  recognized as five-character keyboard patterns if direction change detection is enabled.

:::note
Password Policy Enforcer detects direction changes in both axes if the pattern detection
mode is set to "Horizontal or vertical". For example, "qawsed", "qwedsa", "qwedcv", and "qwsazx" are
all recognized as six-character keyboard patterns if direction change detection is enabled and the
pattern detection mode is set to "Horizontal or vertical".
:::


- Select the **Detect key repeat** check box if Password Policy Enforcer should detect keyboard
  patterns that contain repeated keystrokes. For example, "qwwert" and "qwwwer" are both recognized
  as six-character keyboard patterns if key repeat detection is enabled.
- Select the **Detect key skip** check box if Password Policy Enforcer should detect keyboard
  patterns that contain a horizontally skipped key. For example, "qwryui" is recognized as a six-
  character keyboard pattern if key skip detection is enabled.
- Choose a value from the **Tolerance** drop-down list to specify the longest keyboard pattern that
  Password Policy Enforcer will tolerate before rejecting a password. For example, the password
  "my**qwer**pw" contains a four-character keyboard pattern (shown in bold type). Password Policy
  Enforcer will reject this password if the tolerance is set to three (or lower), and accept it if
  the tolerance is set to four (or higher).
- Click the **Keyboard Layouts** button to select which keyboard layouts Password Policy Enforcer
  uses for pattern detection. You must select at least one layout. Click OK to configure the
  keyboard layout for the Keyboard Patter rule.

![Keyboard Layout Window](/images/passwordpolicyenforcer/10.2/administration/keboardlayoutwindow.webp)

Click the **Messages** tab to customize the Password Policy Client rule inserts.

:::note
Modifier keys such as Shift and AltGr will not evade pattern detection. Key positions can
differ, even in keyboards with matching layouts. The Keyboard Pattern rule may not detect some
patterns because of these differences. Please report any missed patterns to
[Netwrix Support](https://www.netwrix.com/support.html).

:::
