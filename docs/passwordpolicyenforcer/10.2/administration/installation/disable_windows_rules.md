---
title: "Disable Windows Rules"
description: "Disable Windows Rules"
sidebar_position: 30
---

# Disable Windows Rules

The Windows password policy rules can place restrictions on password history, age, length, and
complexity. If you enable the Password Policy Enforcer rules and the Windows rules, then users will
have to comply with both sets of rules.

Password Policy Enforcer has its own history, minimum and maximum age, length, and complexity rules.
See the
[Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
topic for additional information. You can use the Password Policy Enforcer and Windows rules
together. A password is only accepted if it complies with the Windows and Password Policy Enforcer
password policies.

Follow the steps below to disable the Windows password policy rules:

**Step 1 –** Start the Group Policy Management Console (gpmc.msc).

**Step 2 –** Expand the forest and domain items in the left pane.

**Step 3 –** Right-click the **Default Domain Policy GPO** (or whichever GPO you use to set your
domain password policy), then click **Edit...**

**Step 4 –** Expand the **Computer Configuration**, **Policies**, **Windows Settings**, **Security
Settings**, **Account Policies**, and **Password Policy** items.

**Step 5 –** Double-click **Enforce password history** in the right pane of the GPO Editor.

**Step 6 –** Enter **0** in the text box, then click **OK**.

**Step 7 –** Repeat the step above for the **Maximum password age**, **Minimum password age**, and
**Minimum password length** policies.

**Step 8 –** Double-click **Password must meet complexity requirements** in the right pane.

**Step 9 –** Select the **Disabled** option, and then click **OK**.

**Step 10 –** Close the Group Policy Management Editor.

![installing_ppe_3](/images/passwordpolicyenforcer/10.2/evaluation/preparing_the_computer.webp)

:::note
You do not have to disable all the Windows password policy rules to use Password Policy
Enforcer. You can use a combination of Password Policy Enforcer and Windows rules together if you
like. Just remember that a password is only accepted if it complies with the rules enforced by both
Windows and Password Policy Enforcer.

:::
