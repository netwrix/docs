---
title: "Set Up Directory Manager PPE Policy Properties"
description: "Set the name, notes, character set, compliance level, and post-change program for a Password Policy Enforcer policy."
keywords:
  - PPE policy properties
  - Password Policy Enforcer
  - compliance level
  - default character set
  - policy name
sidebar_position: 40
---

# Set Up Directory Manager PPE Policy Properties

Set the properties for the selected policy.

To set up policy properties:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the **ellipsis** button for an identity store and select **Edit**.
3. Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The PPE Policies page appears.
4. Click the **three vertical dots** icon next to the policy, and then click **Edit**.

   **Or**

   Click a policy name to open the policy configuration page.

5. Open the **Properties** tab and set the following:

   - Name – Each policy must have a unique name. To change the name of a policy, enter the new name in the **Name** box.
   - Notes – Enter any **Notes** about the policy.
   - Default Character Set – Select the **Default characters set**. The default value (Netwrix Password Policy Enforcer) requires users to comply with rules that use the Password Policy Enforcer character set. Choose the alternate option (Windows) to have users comply with rules that use the Windows character set.

     - Windows classifies characters as a space, punctuation, control, or blank. The Special character set includes these characters. Windows might also include some of these characters in another set. For example, a superscript one is both a decimal digit and punctuation. In that case, Password Policy Enforcer includes them in the Special character set only when you select the Windows character set.
     - When you use the Password Policy Enforcer character set, the High set includes all characters above ANSI 126. When you use the Windows character set, a character is in the High set only if it is above ANSI 126 and Windows doesn't include it in any other set.

   - Password must comply with – Select the number of rules for **Passwords must comply with** from the dropdown list to specify the required compliance level for this policy. The default value **(all the rules**) requires users to comply with all enabled rules. Choose an alternative option if Password Policy Enforcer should enforce a more lenient password policy. The [Configure the Age (Min) Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/minimum_age_rule.md) and [Configure the Age (Max) Rule in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/maximum_age_rule.md) rules are excluded from compliance level calculations. See the [Set Up Password Policy Rules in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/rules/overview.md) topic for additional information.

     When you set the compliance level, consider that some rules might be disabled when a user enters a passphrase. See the [Enable Optional Passphrases in a Directory Manager PPE Policy](/docs/directorymanager/11.2/admincenter/identitystore/configure/ppe/passphrases.md) topic for additional information. Password Policy Enforcer accepts passphrases that comply with all enabled rules, irrespective of the compliance level. This ensures that users can use passphrases even if they don't meet the compliance level when Password Policy Enforcer is configured to disable one or more rules for passphrases.

   - Execute the Program When Password is Changed – To run a program whenever a user successfully changes or resets their password, enter the full path to the executable in the Execute the Program When Password is Changed text box.
