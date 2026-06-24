---
title: "Policy Properties"
description: "Policy Properties"
sidebar_position: 40
---

# Policy Properties

Sets the properties for the selected policy.

**Step 1 –** Open the Configuration Console:

Click **Start** > **Netwrix Password Policy Enforcer** > **PPE Configuration**
or
Double click the **PPE Configuration** desktop shortcut.

**Step 2 –** Click a policy name to open the policy configuration page.

**Step 3 –** Open the **Properties** tab.

![Set the Policy Properties](/images/passwordpolicyenforcer/11.2/administration/properties.webp)

Each policy must have a unique name. To change the name of a policy, enter the new name in the text
box.

Enter any **Notes** about the policy

Select the **Default characters set**. The default value (Netwrix Password Policy Enforcer) requires
users to comply with rules that use the Password Policy Enforcer character set. Choose the alternate
option (Windows) to have users comply with rules that use the Windows character set.

PPE's default character sets are:

| Character Set | Default characters                                                       |
| ------------- | ------------------------------------------------------------------------ |
| Lower Alpha   | Lowercase alphabetic (a-z)                                               |
| Upper Alpha   | Uppercase alphabetic (A-Z)                                               |
| Alpha         | Uppercase and lowercase alphabetic (a-z and A-Z)                         |
| Numeric       | Numerals (0-9)                                                           |
| Special       | All characters not included above                                        |
| High          | All characters above ANSI 126                                            |
| Custom        | No default characters                                                    |

:::note
Only Password Policy Enforcer 10.0 and higher contain the Windows character set. Password
Policy Enforcer 9, Netwrix Password Reset and Password Policy Enforcer/Web 7 (and older for all
products) always use the Password Policy Enforcer character set.
:::

- Some languages such as Japanese don't distinguish between uppercase and lowercase. These
  characters are in the Windows Alpha set, but not in the Upper or Lower sets.
- Characters classified as a space, punctuation, control, or blank by Windows are included in the
  Special character set. If these characters are also included in some other set by Windows (for
  example, a superscript one is both a decimal digit and punctuation), then Password Policy Enforcer
  only includes them in the Special character set when the Windows character set is selected.
- When using the Password Policy Enforcer character set, all characters above ANSI 126 are included
  in the High set. When using the Windows character set, a character is only included in the High
  set if it is above ANSI 126 and not included in any other set by Windows.

Select the number of rules for **Passwords must comply with** from the dropdown list to specifiy
the required compliance level for this policy. The default value **(all the rules**) requires users
to comply with all enabled rules. Choose an alternative option if Password Policy Enforcer should
enforce a more lenient password policy. Compliance level calculations exclude the Minimum Age and Maximum Age rules. See the [Rules](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/rules/rules.md) topic for additional information.

When setting the compliance level, consider that some rules may be disabled when a user enters a
passphrase. See the [Passphrase](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/passphrases.md) topic for additional information. Password Policy
Enforcer accepts passphrases that comply with all enabled rules, irrespective of the compliance
level. This ensures that users can use passphrases, even if they don't meet the compliance level when you
configure Password Policy Enforcer to disable one or more rules for passphrases.

Password Policy Enforcer can start a password synchronization application or script whenever a user
successfully changes their password. Enter the full path to the executable in the **Execute the
program when password is changed** text box. The path can contain environment variables like
`%SystemRoot%`. Every computer running Password Policy Enforcer should have a local copy of the
program, and only authorized users should have access to it, or any of its components.

Password Policy Enforcer sends the user logon name and new password to the program as command-line parameters. For
example, if you add the following commands to a batch file, Password Policy Enforcer records each user's
logon name and new password in a text file named **passwords.txt**:

**echo Username: %1 >> c:\passwords.txt**

echo Password: %2 >> c:\passwords.txt

:::warning
This script is shown as an example only. You shouldn't store user passwords.
:::


The command can now include the [USERNAME] and [PASSWORD] macros. If you specify neither, then PPE executes the
command with both parameters to maintain compatibility with existing programs/scripts.

:::info
Use the [USERNAME] parameter if the program/script doesn't need the password,
so that PPE doesn't unnecessarily send the password to the change notification command/script.

:::
