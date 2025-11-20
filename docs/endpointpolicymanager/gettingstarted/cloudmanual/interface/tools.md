---
title: "Tools"
description: "Tools"
sidebar_position: 60
---

# Tools

Video: For an overview of this section, see
[Endpoint Policy Manager Cloud: Automatically Join Groups with JOINTOKEN](/docs/endpointpolicymanager/deliverymethods/cloud/videos/upkeepanddailyuse/jointoken.md).

Video: For an advanced installation routine where you can use another tool like an MDM tool, such as
Intune, or an RMM tool to bootstrap the installation of the Endpoint Policy Manager Cloud client and
also immediately join the computer to specific groups, see
[Endpoint Policy Manager Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy.](/docs/endpointpolicymanager/deliverymethods/cloud/videos/usingwithothermethods/mdm.md).

The Tools tab has a special tool called **Join Tokens**. The **Join Tokens** function enables you to
create a unique string to append at the end of the Cloud client installation file. When you do, the
Cloud client will do the following:

- Automatically join the machine to the specific group
- Automatically pick up the XML directives in that group
- Automatically pick up the CSE version directed to that
  group/911-policypak-cloud-automatically-join-groups-with-jointoken/
- Automatically upgrade to the latest Cloud client directed to that group

![web_interface_and_controls_108_625x221](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_108_625x221.webp)

**Step 1 –** To do this, go to the Tools tab, then click on the Join Tokens action.

![web_interface_and_controls_109_624x306](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_109_624x306.webp)

**Step 2 –** Click on **Add Join Token**. For a new join token add a description and expiry time.
Then, click on **Select Groups** and pick a specific group or groups that you want the computer to
automatically join from the Cloud client.

![web_interface_and_controls_110_312x333](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_110_312x333.webp)

**Step 3 –** Click **Save**.

![web_interface_and_controls_111_623x205](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_111_623x205.webp)

**Step 4 –** You can click on the button within the Show column to get a display of your actual join
token value.

:::note
All join token values will end with an **=** sign.
:::


**Step 5 –** Finally, on a command line, you can kick off the assignment to your groups as shown
below. Note that there is no slash before the word JOINTOKEN.

`msiexec /i "PolicyPak Cloud Client.msi" JOINTOKEN="AQOLsGUcYHV6OL03pP88Qe0="`

However, after verifying that it worked on one or two machines (by hand), we recommend the following
syntax which would be an automated quiet install with logging. Again, note that there is no slash
before the word JOINTOKEN.

`msiexec /i "PolicyPak Cloud Client.msi" /qn /norestart /log `

"`c:\temp\ppcloudinstall.log" JOINTOKEN="AQOLsGUcYHV6OL03pP88Qe0=`"


