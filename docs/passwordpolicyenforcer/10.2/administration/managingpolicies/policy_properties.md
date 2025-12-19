---
title: "Policy Properties"
description: "Policy Properties"
sidebar_position: 30
---

# Policy Properties

Follow the steps to open the Policy Properties page.

![managing_policies_1](/images/passwordpolicyenforcer/10.2/administration/managing_policies_1.webp)

**Step 1 –** Click the **Policies** item to display the Policies view.

**Step 2 –** Click the desired policy in the right pane of the management console.

**Step 3 –** Click **Properties** in the right pane of the management console.

Each Password Policy Enforcer policy must have a unique name. To change the name of a policy, type
the new name in the text box beside the policy icon.

Password Policy Enforcer only enforces enabled policies. Select the **Enabled** check box if
Password Policy Enforcer should enforce this policy, or deselect it to disable the policy. The
policy's icon in the left pane of the management console changes to an X icon when a policy is
disabled.

:::note
A user's password history may be updated even when the policy assigned to the user is
disabled. See the
[Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
topic for additional information.
:::


The **Default character set** drop-down list specifies which character set Password Policy
Enforcer will use to enforce its rules. The default value (Netwrix Password Policy
Enforcer) requires users to comply with rules that use the Password Policy Enforcer character set.
Choose the alternate option (Windows) to have users comply with rules that use the Windows character
set.

:::note
Only Password Policy Enforcer 10.0 and higher will contain the Windows character set.
Password Policy Enforcer 9, Netwrix Password Reset and Password Policy Enforcer/Web 7 (and older for
all products) will always use the Password Policy Enforcer character set.
:::


:::warning
This value should not be changed while using PPE9.x clients, APR 3.x and Password
Policy Enforcer/Web 7.x (and older for all above). These clients only support the Password Policy
Enforcer character set. They will work if Password Policy Enforcer is configured to use the Windows
character sets, but they will still continue to use the Password Policy Enforcer character set as
that is all they know.
:::


- Some languages such as Japanese do not distinguish between uppercase and lowercase. These
  characters will be in the Windows Alpha set, but not in the Upper or Lower sets.
- Characters classified as a space, punctuation, control or blank by Windows are included in the
  Special character set. If these characters are also included in some other set by Windows (for
  example, a superscript one is both a decimal digit and punctuation), then Password Policy Enforcer
  only includes them in the Special character set when the Windows character set is selected.
- When using the Password Policy Enforcer character set, all characters above ANSI 126 are included
  in the High set. When using the Windows character set, a character is only included in the High
  set if it is above ANSI 126 and not included in any other set by Windows.

The **Reject passwords that do not comply with** drop-down list specifies the required compliance
level for this policy. The default value (all the rules) requires users to comply with all enabled
rules. Choose an alternative option if Password Policy Enforcer should enforce a more lenient
password policy. The Minimum Age and Maximum Age rules are excluded from compliance level
calculations. See the
[Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
topic for additional information.

When setting the compliance level, consider that some rules may be disabled when a user enters a
passphrase. See the Passphrases section below for additional information. Password Policy Enforcer
accepts passphrases that comply with all enabled rules, irrespective of the compliance level. This
ensures that passphrases can be used, even if they do not meet the compliance level when Password
Policy Enforcer is configured to disable one or more rules for passphrases.

Password Policy Enforcer can start a password synchronization application or script whenever a user
successfully changes their password. Enter the full path to the executable in the **Execute this
program when a password is changed** text box. The path can contain environment variables like
`%SystemRoot%`. Every computer running Password Policy Enforcer should have a local copy of the
program, and only authorized users should have access to it, or any of its components.

The user logon name and new password are sent to the program as command-line parameters. For
example, if you add the commands below to a batch file, Password Policy Enforcer will record each
user's logon name and new password in a text file called passwords.txt:

**echo Username: %1 >> c:\passwords.txt**

echo Password: %2 >> c:\passwords.txt

:::warning
This script is shown as an example only. You should not store user passwords.
:::


The command can now include the [USERNAME] and [PASSWORD] macros. If neither is specified, then the
command is executed with both parameters to maintain compatibility with existing programs/scripts.

:::info
Use the [USERNAME] parameter if the password is not needed by the program/script
so that the password is not unnecessarily sent to the change notification command/script.
:::


Record any configuration notes about this policy in the Notes text box.

- Click the **Assigned To** tab to assign this policy to users, groups, or containers.
- Click the **Passphrases** tab to specify which rules should be disabled when a user enters a
  passphrase.
- Click the **Messages** tab to customize the Password Policy Client message templates for this
  policy.
