---
title: "How do I use Scripts Manager to update the Registry on end-user workstations"
description: "How do I use Scripts Manager to update the Registry on end-user workstations"
sidebar_position: 60
---

# How do I use Scripts Manager to update the Registry on end-user workstations

If an end-user does not have administrative rights to their PC, they are unable to modify the
registry. Scripts Manager can be used to send out mass updates as required by the Admins.

:::note
We recommend you put the .REG file on a server so the file itself is under permissions
which cannot be tampered with. It could be a risk to put the .REG file locally on the hard drive
where anyone could edit the raw contents.
:::


**Step 1 –** Create new GPO where required

**Step 2 –** Expand Netwrix Endpoint Policy Manager (formerly PolicyPak) node on either Computer or
User Configuration side and click on "Scripts Manager"

**Step 3 –** Add new Policy (a or b)

![654_1_image-20200510105609-16_620x371](/images/endpointpolicymanager/scriptstriggers/654_1_image-20200510105609-16_620x371.webp)

**Step 4 –** Enter script by either a) Importing the file or b) entering or copying the comman

- Click File -> Open and browse for the script to enter

  ![654_3_image-20200510105609-17](/images/endpointpolicymanager/scriptstriggers/654_3_image-20200510105609-17.webp)

- Click down-arrow by (None), select type of script and enter the script command(s) in the windows
  below

  ![654_5_image-20200510105609-18](/images/endpointpolicymanager/scriptstriggers/654_5_image-20200510105609-18.webp)

  Sample Script: `regedit.exe /s \\server\share\NewRegValue.reg`

**Step 5 –** Select "Run Script as User" and "With elevated rights" -> NEXT

![654_7_image-20200510105609-19](/images/endpointpolicymanager/scriptstriggers/654_7_image-20200510105609-19.webp)

**Step 6 –** If the entry is to be reverted, i.e. the registry should become something else if the
policy is no longer linked or enabled, repeat steps 4 and 5 within this window specifying the
appropriate commands to set the registry as required -> NEXT

**Step 7 –** Specify when you want the command to be run -> NEXT

:::note
"Always" will ensure that if the value is every updated, it will be returned to the value
specified each time Group Policy is processed
:::


![654_9_image-20200510105609-20](/images/endpointpolicymanager/scriptstriggers/654_9_image-20200510105609-20.webp)

**Step 8 –** Give a descriptive name to the policy and set Item Level Targeting if required ->
FINISH


