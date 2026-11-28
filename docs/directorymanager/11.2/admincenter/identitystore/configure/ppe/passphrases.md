---
title: "Enable Optional Passphrases in a Directory Manager PPE Policy"
description: "Relax password rules for long passphrases by choosing the length at which selected Password Policy Enforcer rules are disabled."
keywords:
  - passphrase
  - Password Policy Enforcer
  - PPE policy
  - password rules
  - compliance level
sidebar_position: 30
---

# Enable Optional Passphrases in a Directory Manager PPE Policy

Passphrases have gained popularity in recent years because they can be more difficult to crack and easier to remember than passwords. The difference between passwords and passphrases is their length. Passwords are rarely longer than 15 characters, but passphrases commonly contain 20 or more characters.

Complexity and dictionary rules are less important for passphrases because passphrases rely primarily on length for security. You might want to relax some password policy requirements for passphrases.

To enable optional passphrases:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the **ellipsis** button for an identity store and select **Edit**.
3. Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The PPE Policies page appears.
4. Click the **three vertical dots** icon next to the policy, and then click **Edit**.

   **Or**

   Click a policy name to open the policy configuration page.

5. Open the **Passphrase** tab.
6. Select the number of characters the password must contain before the selected rules are disabled.
7. Select the rules to disable.

Disabled rules aren't counted when calculating the compliance level. Password Policy Enforcer accepts passphrases that comply with all enabled rules, irrespective of the compliance level. This ensures that users can use passphrases even if they don't meet the compliance level when Password Policy Enforcer is configured to disable one or more rules for passphrases.

:::note
Opinions differ on how long a passphrase needs to be. Even a 30-character passphrase can be weaker than a well-chosen password. Don't disable too many rules under the assumption that length alone makes up for the reduced complexity.
:::
