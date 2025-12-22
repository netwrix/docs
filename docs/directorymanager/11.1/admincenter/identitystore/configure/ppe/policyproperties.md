---
title: "Set up policy properties"
description: "Set up policy properties"
sidebar_position: 40
---

# Set up policy properties

Sets the properties for the selected policy.

Follow the steps to set up policy properties.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy , click **Edit**.

**Or**

Click on a policy name to open the policy configuration page.

Step 5 – Open the **Properties** tab.

- Name – Each policy must have a unique name. To change the name of a policy, type the new name in
  the **Name** box.

- Notes – Enter any **Notes** about the policy.

- Default Character Set – Select the **Default characters set**. The default value (Netwrix Password
  Policy Enforcer) requires users to comply with rules that use the Password Policy Enforcer
  character set. Choose the alternate option (Windows) to have users comply with rules that use the
  Windows character set.

- Characters classified as a space, punctuation, control or blank by Windows are included in the
  Special character set. If these characters are also included in some other set by Windows (for
  example, a superscript one is both a decimal digit and punctuation), then Password Policy Enforcer
  only includes them in the Special character set when the Windows character set is selected.
- When using the Password Policy Enforcer character set, all characters above ANSI 126 are included
  in the High set. When using the Windows character set, a character is only included in the High
  set if it is above ANSI 126 and not included in any other set by Windows.

- Password must comply with – Select the number of rules for **Passwords must comply with** from the
  drop-down list to specify the required compliance level for this policy. The default value **(all
  the rules**) requires users to comply with all enabled rules. Choose an alternative option if
  Password Policy Enforcer should enforce a more lenient password policy. The
  [Age (Min) Rule](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/rules/minimum_age_rule.md) and [Age (Max) Rule](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/rules/maximum_age_rule.md) rules
  are excluded from compliance level calculations. See the [Set up Rules](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/rules/overview.md) topic
  for additional information.

    When setting the compliance level, consider that some rules may be disabled when a user enters a
    passphrase. See the [Enable the use of an optional passphrase](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/passphrases.md) topic for
    additional information. Password Policy Enforcer accepts passphrases that comply with all
    enabled rules, irrespective of the compliance level. This ensures that passphrases can be used,
    even if they do not meet the compliance level when Password Policy Enforcer is configured to
    disable one or more rules for passphrases.

- You can execute a program whenever a user successfully changes or resets their password. Enter the
  full path to the executable in the Execute the Program When Password is Changed text box.
