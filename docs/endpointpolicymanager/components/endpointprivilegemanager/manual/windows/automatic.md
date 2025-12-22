---
title: "Automatic Rules Generator Tool"
description: "Automatic Rules Generator Tool"
sidebar_position: 100
---

# Automatic Rules Generator Tool

Once you remove Admin rights, the user will not be able to run some applications. Additionally, once
Endpoint Policy Manager SecureRun™ is enabled, the user will not be able to install and run items
they download. However, we have a utility in the PolicyPak Extras folder called PolicyPak LPM Auto
Rule Generator Tool, which will help you create rules to elevate applications and bypass SecureRun™
as necessary. This tool operates on one machine at a time, and it is typically used on one or a few
representative machines.

:::note
See the
[Auto Rules Generator Tool (with SecureRun)](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/basicsandgettingstarted/autorulesgeneratortool.md)
video for a demo of Endpoint Policy Manager Automatic Rules Generator Tool in action.
:::


Following are the basic steps for operating the tool:

- Point the tool toward one machine (in the future this tool might work for multiple machines).
- Define locations to search.
- Determine whether to turn on the SecureRun™ Simulator.
- Create rules to allow, block, or elevate, as needed.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules.webp)

On the opening page, pick a location or locations to run the tool. The tool offers standard or
custom locations (**Other Locations**) such as the User’s Desktop, and other unusual locations, as
shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_1.webp)

Next, select which types of items to search for.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_2.webp)

Next, you have the option to turn on the SecureRun™ Simulator. The SecureRun™ Simulator will
simulate what would happen if SecureRun™ was turned on, so you can know which applications would be
automatically blocked or allowed based on the members of the SecureRun™ list. You can also add a
member like Microsoft Endpoint Manager (SCCM and Intune) or other installer accounts, as you would
with SecureRun™.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_3.webp)

Then, you’ll be presented with all the applications and their default state and will have the
opportunity to create rules that will automatically change the state. For instance, when SecureRun™
is enabled, many applications are set to Automatic Block. "

You can select the drop-down in the Action column next to any program and change the state.

- To allow NotepadP.exe to run even though SecureRun™ is on, simply change its state to "Allow"
  (which was previously Automatic Block).
- To allow Procmon.exe to run elevated, even though SecureRun™ would block it and Procmon would
  require admin rights, change the state to Elevate.
- You can also specify Block, but if you select this you will be double blocking, because not only
  will SecureRun™ be blocking the program (automatically), but you will have also added a Block
  (Deny) rule.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_4.webp)

To save a little time, you can also hide items that are automatically allowed or blocked by
SecureRun™, as seen here, to reduce the number of items shown.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_5.webp)

Next, you are presented with a summary of the rules you will be creating.

![A screenshot of a computer program Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_6.webp)

Now you can create the conditions automatically. The most secure settings are automatically checked,
but you may change them to other settings if desired.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_7.webp)

The final page, shown in here, enables you to export the rules directly into a GPO (provided you
have Group Policy Create/Edit rights) or into an XML file that you can import into a Group Policy
Object.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_8.webp)

Rules are now exported.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_9.webp)

The result after looking at the GPO is shown here, with your rules ready to go.

![policypak_automatic_rules_10](/images/endpointpolicymanager/leastprivilege/tool/rulesgenerator/endpointpolicymanager_automatic_rules_10.webp)



