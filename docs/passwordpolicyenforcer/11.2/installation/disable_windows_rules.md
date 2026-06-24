---
title: "Disable Windows Rules"
description: "How to disable the Windows password policy rules to avoid conflicts with Password Policy Enforcer."
sidebar_position: 20
---

# Disable Windows rules

Windows has its own password policy rules for password history, age, length, and complexity. If you enable both Password Policy Enforcer (PPE) rules and Windows rules, users must comply with both the PPE and Windows rules.

PPE has its own rules for password [history](../admin/manage-policies/rules/history_rule.md), [minimum age](../admin/manage-policies/rules/minimum_age_rule.md), [maximum age](../admin/manage-policies/rules/maximum_age_rule.md), [length](../admin/manage-policies/rules/length_rule.md), and [complexity](../admin/manage-policies/rules/complexity_rule.md). While it's possible, and sometimes beneficial, to use PPE and Windows rules together, it can also be confusing when testing PPE. It is therefore recommended to disable the Windows password policy rules while you are experimenting with and testing your PPE configuration.

To disable the Windows password policy rules:

1. Start the Group Policy Management Console (`gpmc.msc`).
2. Expand the **Forest** and **Domains** items, then expand your domain in the left pane.
3. Right-click the **Default Domain Policy** GPO (or whichever GPO you use for your domain password policy), then click **Edit**.
4. Expand **Computer Configuration** > **Policies** > **Windows Settings** > **Security Settings** > **Account Policies** > **Password Policy**.
5. Double-click **Enforce password history** in the right pane.
6. Enter **0** in the text box, then click **OK**.
7. Repeat step 6 for **Maximum password age**, **Minimum password age**, and **Minimum password length**.
8. Double-click **Password must meet complexity requirements** in the right pane.
9. Select **Disabled**, then click **OK**.
10. Close the Group Policy Management Editor.

![installing_ppe_3](/images/passwordpolicyenforcer/11.2/evaluation/preparing_the_computer.webp)

:::note
Don't set the Windows policies to **Not Configured** as that leaves the previously enforced value in place and doesn't disable the rule. Instead, follow the preceding steps to explicitly set each numeric policy to **0** and set the complexity policy to **Disabled**.
:::

:::note
You don't have to disable the Windows password policy rules to use PPE. A password must comply with both the Windows and PPE policies to be accepted.

Fine-Grained Password Policies (FGPP) override the domain password policy. If your organization uses FGPP, you'll also need to remove or modify any Password Settings Objects (PSOs) that apply to your users. To do that, open **Active Directory Administrative Center**, navigate to **System** > **Password Settings Container**, and remove or modify the relevant PSOs.
:::
