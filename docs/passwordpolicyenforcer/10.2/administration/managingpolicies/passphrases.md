---
title: "Passphrases"
description: "Passphrases"
sidebar_position: 60
---

# Passphrases

Passphrases have gained popularity in recent years as they can be more difficult to crack and easier
to remember than passwords. The difference between passwords and passphrases is their length.
Passwords are rarely longer than 15 characters, but passphrases commonly contain 20 or more
characters.

Complexity and dictionary rules are less important for passphrases as passphrases rely primarily on
length for security. You may therefore want to relax some password policy requirements for
passphrases.

Follow the steps to configure a password policy with fewer requirements for passphrases.

![managing_policies_7](/images/passwordpolicyenforcer/10.2/administration/managing_policies_7.webp)

**Step 1 –** Click the Policies item to display the
[Policies View](/docs/passwordpolicyenforcer/10.2/administration/managementconsole/management_console_views.md#policies-view).

**Step 2 –** Click the desired policy in the right pane of the management console.

**Step 3 –** Click Properties in the right pane of the management console.

**Step 4 –** Click the Passphrases tab.

**Step 5 –** Choose the minimum number of characters a password must contain before some rules are
disabled from the drop-down list.

**Step 6 –** Select the rules that will be disabled.

**Step 7 –** Click OK to close the Policy Properties page

Disabled rules are not counted when calculating the compliance level, but Password Policy Enforcer
will accept passphrases that comply with all enabled rules, irrespective of the compliance level.
This ensures that passphrases can be used, even if they do not meet the compliance level when
Password Policy Enforcer is configured to disable one or more rules for passphrases.

:::note
Opinions differ on how long a passphrase needs to be. Even a 30 character passphrase can
be weaker than a well-chosen password. Do not disable too many rules under the assumption that
length alone will make up for the reduced complexity as this is not always true.

:::
