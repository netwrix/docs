---
title: "Passphrase"
description: "Passphrase"
sidebar_position: 30
---

# Passphrase

Passphrases have gained popularity in recent years as they can be more difficult to crack and easier
to remember than passwords. The difference between passwords and passphrases is their length.
Passwords are rarely longer than 15 characters, but passphrases commonly contain 20 or more
characters.

Complexity and dictionary rules are less important for passphrases as passphrases rely primarily on
length for security. You may want to relax some password policy requirements for passphrases.

**Step 1 –** Open the Configuration Console:

Click **Start** > **Netwrix Password Policy Enforcer** > **PPE Configuration**
or
Double click the **PPE Configuration** desktop shortcut.

**Step 2 –** Click on a policy name to open the policy configuration page.

**Step 3 –** Open the **Passphrase** tab.

![Enable Passphrases](/images/passwordpolicyenforcer/11.1/administration/passphrase.webp)

**Step 4 –** Select the number of characters the password must contain before the selected rules are
disabled.

**Step 5 –** Select the rules to be disabled.

Disabled rules are not counted when calculating the compliance level, but Password Policy Enforcer
accepts passphrases that comply with all enabled rules, irrespective of the compliance level. This
ensures that passphrases can be used, even if they do not meet the compliance level when Password
Policy Enforcer is configured to disable one or more rules for passphrases.

:::note
Opinions differ on how long a passphrase needs to be. Even a 30 character passphrase can
be weaker than a well-chosen password. Do not disable too many rules under the assumption that
length alone makes up for the reduced complexity.

:::
