---
title: "Creating Rules to Avoid UAC Prompts and Other Dialogs"
description: "Creating Rules to Avoid UAC Prompts and Other Dialogs"
sidebar_position: 20
---

# Creating Rules to Avoid UAC Prompts and Other Dialogs

Over time, once SecureRun is on, you will likely still get some application attempting to update in
the background, which will cause a pop-up explaining a blocking attempt.

Once you have learned which programs are causing the pop-ups, you can decide to create an Allow and
Log rule, an Elevate rule, or a Deny rule. The rule type you choose depends on the application and
what you’re trying to do.

When SecureRun is turned on, the typical action needed is Allow and Log through a command line rule.
For instance, to allow Java to attempt to keep updating, you would set a Path Condition and set a
rule to Allow and Log a command line.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/creating_rules_to_avoid_uac.webp)

The example below show a Combo rule enabling OneDriveSetup.exe to keep running (**Path Condition**
and **Command-line Condition**) with the Allow and Log action.

For more information on Combo rules, see
[Creating and Using Executable Combo Rules](/docs/endpointpolicymanager/components/endpointprivilegemanager/manual/windows/overviewmisc/bestpractices/executablecombo.md)

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/creating_rules_to_avoid_uac.webp)

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/securerun/creating_rules_to_avoid_uac_1.webp)

After the rules are created, you should not see pop-ups from installers with rules in place.



