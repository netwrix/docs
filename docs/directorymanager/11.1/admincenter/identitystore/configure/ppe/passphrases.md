---
title: "Enable the use of an optional passphrase"
description: "Enable the use of an optional passphrase"
sidebar_position: 30
---

# Enable the use of an optional passphrase

Passphrases have gained popularity in recent years as they can be more difficult to crack and easier
to remember than passwords. The difference between passwords and passphrases is their length.
Passwords are rarely longer than 15 characters, but passphrases commonly contain 20 or more
characters.

Complexity and dictionary rules are less important for passphrases as passphrases rely primarily on
length for security. You may want to relax some password policy requirements for passphrases.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy , click **Edit**.

**Or**

Click on a policy name to open the policy configuration page.

Step 5 – Open the **Passphrase** tab.

Step 6 – Select the number of characters the password must contain before the selected rules are
disabled.

Step 7 – Select the rules to be disabled.

Disabled rules are not counted when calculating the compliance level, but Password Policy Enforcer
accepts passphrases that comply with all enabled rules, irrespective of the compliance level. This
ensures that passphrases can be used, even if they do not meet the compliance level when Password
Policy Enforcer is configured to disable one or more rules for passphrases.

:::note
Opinions differ on how long a passphrase needs to be. Even a 30 character passphrase can be
weaker than a well-chosen password. Do not disable too many rules under the assumption that length
alone makes up for the reduced complexity.

:::
