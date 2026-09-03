---
title: "Passphrases"
description: "Configure Password Policy Enforcer to relax specific password rules for passphrases."
sidebar_position: 30
---

# Passphrases

Passphrases have gained popularity in recent years because they can be more difficult to crack and easier to remember than passwords. The difference between passwords and passphrases is their length. Passwords are typically 12 to 20 characters, but passphrases commonly contain 20 or more characters.

Rules like [Complexity](rules/complexity_rule.md) and [Dictionary](rules/dictionary_rule.md) are less important for passphrases because passphrases rely primarily on length for security. You can relax some password policy requirements for passphrases by configuring Password Policy Enforcer (PPE) to disable some rules when passwords reach a certain length.

1. Open the [PPE Configuration Console](../configconsole.md).
2. Click the name of a policy in the policy list.
3. Select the **Passphrase** tab.
4. Select the **Passphrase** checkbox to enable this feature.

   ![Enable Passphrases](/images/passwordpolicyenforcer/12.0/administration/passphrase.webp)

5. Select the minimum number of characters from the **contains** dropdown. PPE disables the specified rules when a password contains at least this many characters.
6. Select the rules you want to disable for passphrases.

PPE excludes disabled rules when calculating the compliance level (the **Passwords must comply with** setting on the policy's [**Properties**](policy_properties.md) tab). PPE accepts a passphrase that complies with all enabled rules, even if it doesn't meet the compliance level.

:::warning
Opinions differ on how long a passphrase needs to be. Even a 30-character passphrase can be weaker than a well-chosen password. Don't disable too many rules under the assumption that length alone compensates for reduced complexity.
:::
