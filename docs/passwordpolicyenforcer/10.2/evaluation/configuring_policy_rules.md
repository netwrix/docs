---
title: "Configuring Policy Rules"
description: "Configuring Policy Rules"
sidebar_position: 40
---

# Configuring Policy Rules

The policy you just created does not enforce any password requirements yet. You can now configure
the policy to enforce these rules:

- Password must contain at least seven characters.
- Password must contain at least one lowercase alpha character.
- Password must contain at least one uppercase character.
- Password must not be similar to the user's logon name.
- Password must not exist in a dictionary of common passwords.

**Step 1 –** Click the **Users** policy in the left pane of the management console to display the
policy's rules. Rules are displayed in the right pane.

![configuring_policy_rules](/images/passwordpolicyenforcer/10.2/evaluation/configuring_policy_rules.webp)

**Step 2 –** Double-click the **Length** rule.

**Step 3 –** Select the **Characters (Alpha Lower)** rule.

**Step 4 –** Select the **Enabled** check box, then click **OK**.

**Step 5 –** Double-click the **Characters (Alpha Upper)** rule.

**Step 6 –** Select the **Enabled** check box, then click **OK**.

**Step 7 –** Double-click the **User Logon Name** rule.

**Step 8 –** Select the **Enabled** check box, then click **OK**.

**Step 9 –** Double-click the **Dictionary** rule.

**Step 10 –** Select the **Enabled** check box.

**Step 11 –** Click **Browse**, select **Dict.txt** from the **\Program File (x86)\Password Policy
Enforcer** folder.

**Step 12 –** Click **Open**, then click **OK**.

:::note
Press F1 while using the management console to display help information for the current
window.

:::
