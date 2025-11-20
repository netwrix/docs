---
title: "How to deliver network drive mappings using Group Policy Preferences on the computer side"
description: "How to deliver network drive mappings using Group Policy Preferences on the computer side"
sidebar_position: 50
---

# How to deliver network drive mappings using Group Policy Preferences on the computer side

Normally, when you configure network drive mappings using Group Policy Preferences, this is done on
the user side since there is no Drive Maps option on the computer side.

![106_1_img-1](/images/endpointpolicymanager/preferences/106_1_img-1.webp)

However, there is a way to deliver network drive mappings on the computer side using Group Policy
Preferences.

**Step 1 –** Launch the Microsoft Group Policy Management Console (GPMC) as a user with the
necessary rights to create and link GPOs at the OU or Domain level.

**Step 2 –** Create a new GPO and link it at the Computer OU Level, or Domain level, depending on
which computers need to receive these drive mappings.

**Step 3 –** Edit t the policy and
expand` User Configuration > Preferences > Windows Settings > Drive Maps`.

**Step 4 –** Right click on Drive Maps and choose `New > Mapped Drive`

![106_2_img-2](/images/endpointpolicymanager/preferences/106_2_img-2.webp)

**Step 5 –** Create the new drive mapping policy as you would normally, but with one difference: be
sure to check **Run in logged-on user's security context (user policy option)** under the Common
tab.

![106_3_img-3](/images/endpointpolicymanager/preferences/106_3_img-3.webp)

**Step 6 –** Once you have everything configured correctly and the policy item is saved, export the
policy item to the desktop. You can just drag it to the desktop.

![106_4_img-4](/images/endpointpolicymanager/preferences/106_4_img-4.webp)

**Step 7 –** Once you have successfully exported the policy file to the desktop, go ahead and delete
the drive maps policy item under `User Configuration > Preferences > Windows Settings > Drive Maps`.

![106_5_img-5](/images/endpointpolicymanager/preferences/106_5_img-5.webp)

**Step 8 –** Now copy the drive map policy (`H_.xml`) from your desktop to a server share that is
accessible by all users, who should all have a minimum of READ access to this share.

![106_6_img-6](/images/endpointpolicymanager/preferences/106_6_img-6.webp)

**Step 9 –** Expand `Computer Configuration > Preferences > Windows Settings > Files `

![106_7_img-7](/images/endpointpolicymanager/preferences/106_7_img-7.webp)

**Step 10 –** Right-click on **Files** and choose New File, then configure it using the image below
as a guide.

- Source = UNC path to the file on the server share (i.e.` \\Server\share\H_.xml`)
- Destination = `%ProgramData%\endpointpolicymanager\XmlData\Computer\H_.XML`

  ![106_8_img-8](/images/endpointpolicymanager/preferences/106_8_img-8.webp)

**Step 11 –** Run `gpupdate` on one of the computers that live in an OU or domain where you applied
the policy, to verify that they get the drive mapping.

![106_9_img-9](/images/endpointpolicymanager/preferences/106_9_img-9.webp)


