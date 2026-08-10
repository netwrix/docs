---
title: "Test Policy"
description: "Test individual passwords or a batch of passwords against your policies, and troubleshoot unexpected results, in Netwrix Password Policy Enforcer."
sidebar_position: 60
---

# Test Policy

You can check if your Password Policy Enforcer (PPE) policies meet your requirements by clicking **Test policy** in the home page above the policy list, or in the upper-right of the policy editor.

:::warning
You must save any pending configuration changes before clicking **Test policy** in the policy editor, otherwise the Configuration Console discards your unsaved changes.
:::

Use the two tabs at the top of the Test Policy dialog to select the type of test. Select [**By user**](#by-user) to test individual passwords for a specific user. Select [**Password bulk test**](#password-bulk-test) to test passwords in a file against a specific policy.

![Test by user](/images/passwordpolicyenforcer/11.2/administration/testuser.webp)

## By user

Use the **By user** test to quickly check policy changes, or to help understand why PPE accepts or rejects a particular password. This test simulates a password change, but it doesn't change the password.

![Failing password](/images/passwordpolicyenforcer/11.2/administration/testuserfail.webp)

Enter a username in the first text box, or click **Select** to display a user search and selection dialog.

Enter a test password in the second text box. PPE tests the password when you stop typing. An icon in the text box indicates whether the password complies with the [policy assigned to](./usersgroups.md) the chosen user.

Additional information is displayed in the right pane. The policy assigned to the user is shown first, followed by the rules for the policy and their test pass/fail status.

If you're not sure why PPE accepted or rejected the password, then click **View log** in the right pane to show additional troubleshooting information, including:
- The computer the Configuration Console read the configuration from.
- Any [dictionary](./rules/dictionary_rule.md) word or [keyboard pattern](./rules/patterns.md#keyboard-patterns) matched with the password.
- Any errors or warnings that occurred during testing.

If the information in the log doesn't explain why PPE accepted or rejected the password, then enable the **Verbose logging** toggle switch at the bottom of the dialog box. This opens a second pane with additional troubleshooting information from every enabled rule. You can click the name of any rule with a **>** beside its name to show all the events logged by that rule.

![Verbose logging](/images/passwordpolicyenforcer/11.2/administration/testuserverbose.webp)

## Password bulk test

Use the **Password bulk test** to test a password policy against a list of passwords in a text file. You can use this feature to fine-tune your policy and to see how effective it is against a list of compromised passwords or cracking dictionaries.

![Password bulk test](/images/passwordpolicyenforcer/11.2/administration/testbulk.webp)

Select a policy to test from the dropdown, then click **Browse** to select the text file. The file should have one password on every line.

The default test report includes all accepted and rejected passwords, and PPE saves the report to the `%ProgramFiles%\Netwrix\Password Policy Enforcer\` folder. Click **Report settings** if you want to change the defaults.

Click **Test passwords** to begin the test. The Configuration Console shows a progress bar along with some statistics in the right pane. You can click **Cancel** to terminate the test.

![Test results](/images/passwordpolicyenforcer/11.2/administration/testbulkresult.webp)

When the test completes, click **Show full report** in the right pane to view the report in a web browser. The report contains some summary statistics along with the rejected and accepted password lists, if you chose to show them in the report settings. Click **Copy** above a list to copy it to the clipboard, or click **Save** to save it to a text file.

## Policy testing vs. password changes

Policy testing simulates a password change, but it may not always reflect what happens when a user changes their password. A password change may yield different results to a policy test because:

- Policy testing doesn't simulate the [Windows password policy rules](../../installation/disable_windows_rules.md). If you enable the Windows rules, then Windows may reject a password even though it complies with the PPE policy.
- Policy testing doesn't simulate the [Minimum Age rule](rules/minimum_age_rule.md).
- Policy testing doesn't simulate the [History rule](rules/history_rule.md).
- Policy testing simulates the policy even if PPE or the policy are disabled. Use this behavior to test your configuration before enabling PPE or a new password policy.
- Policy testing occurs on the computer that the Configuration Console is running on. If the Configuration Console is [connected to a domain configuration](../configconsole.md#connect-to-a-configuration), then it may not find the [dictionary](./rules/dictionary_rule.md) file or [compromised](./rules/compromised_rule.md) database on the local computer, or they may be different from the ones on the domain controller. Copy the files onto the local computer (in the same paths as the domain controller) to avoid this problem.
- If the Configuration Console is [connected to a domain configuration](../configconsole.md#connect-to-a-configuration) and you recently modified the PPE configuration, then Active Directory may still be replicating the new configuration to the other domain controllers.
