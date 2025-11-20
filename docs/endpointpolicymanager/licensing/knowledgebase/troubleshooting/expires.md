---
title: "I have a pop-up saying \"License expires soon\" or \"Licenses expire in X days\" when editing a GPO. What do I do?"
description: "I have a pop-up saying \"License expires soon\" or \"Licenses expire in X days\" when editing a GPO. What do I do?"
sidebar_position: 30
---

# I have a pop-up saying "License expires soon" or "Licenses expire in X days" when editing a GPO. What do I do?

Once a new license key has been imported to existing On-Prem environment, you may notice a pop-up
message in your GPMC console mentioning your old license key is getting expired soon.

One or more similar messages may appear in MMC/GPMC when editing a GPO.

![937_1_image-20230425211701-1_950x194](/images/endpointpolicymanager/troubleshooting/license/937_1_image-20230425211701-1_950x194.webp)

![937_2_image-20230425211701-2](/images/endpointpolicymanager/troubleshooting/license/937_2_image-20230425211701-2.webp)

As example, this can occur if you have two license GPOs in your domain.

For instance, two license GPOs are linked with the following expiration dates:

GPO 1: Expires March 1, 2023

GPO 2: Expires March 1, 2024

:::note
The rest of this KB is generally around your GPMC editing machine and the pop-ups within
the GPMC. If you're getting client-side pop-ups, please refer to this article:
:::


[How do I make the Grace Period licensing pop-up go away?](/docs/endpointpolicymanager/licensing/knowledgebase/troubleshooting/graceperiod.md)

Resolution for the Admin's GPMC editing station:

- Unlink the old and expiring license after verifying that the new license will cover the same
  components and OUs/ domain as the soonto-be-expiring license. Delete the old GPO links as well
  from under any OUs/domain where it was linked. More details here:
  [I just installed new license files / new GPOs. Should I keep or delete the old license files / GPOs?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/fileold.md)

:::note
You can use the LT tool to search through and find OLD licenses so you can be sure you
only have one license remaining. [Using LT for license cleanup](/docs/endpointpolicymanager/licensing/videolearningcenter/troubleshooting/cleanup.md)/
:::


- On an example ENDPOINT computer (one that has the Netwrix Endpoint Policy Manager (formerly
  PolicyPak) CSE; which can also include the Admin's GPMC machine) verify the endpoint got the new
  license successfully. Use this KB article with PPUPDATE directions to see exactly if a machine is
  properly licensed:
  [How can I tell how a machine is licensed (by GPO, MDM, or XML file), and also know for what components it is licensed?](/docs/endpointpolicymanager/licensing/knowledgebase/troubleshooting/components.md)

Now, on your machine, the one with the GPMC…

- Run `GPupdate /force` to flush out old licenses that were being delivered to your GPMC management
  station
- Close the GPMC, then reopen the GPMC.
- Try editing a GPO in GPMC, does the error message reappear
- If popups are gone, you are all done.

If you still get pop-up messages and the messages reference the registry, you should check under the
following registry keys on your GPMC management station for any old information relating to the old
license.

License info held in Registry in the following locations (HKLM)

```
SOFTWARE\Policies\PolicyPak\License Policies\    SOFTWARE\PolicyPak\License Policies\    SOFTWARE\Policies\PolicyPak\Licenses\    SOFTWARE\PolicyPak\Licenses\
```

If any old info is found, then export those registry keys just in case they need to be readded back
for some reason.

Then once the registry keys are backed up safely to reg files somewhere you can safely delete any
registry keys with old Endpoint Policy Manager license info.

Afterward, reopen GPMC and try editing a GPO again, does the message appear? If not, you are done.
If yes, then open a support ticket for further assistance.

