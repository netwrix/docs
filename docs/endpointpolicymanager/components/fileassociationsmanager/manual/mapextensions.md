---
title: "Quick Start - Mapping Extensions to Applications"
description: "Quick Start - Mapping Extensions to Applications"
sidebar_position: 30
---

# Quick Start - Mapping Extensions to Applications

:::note
For some video overviews of Endpoint Policy Manager File Associations Manager, see the
[Endpoint Policy Manager Cloud: Managing File Assocations](/docs/endpointpolicymanager/components/fileassociationsmanager/videolearningcenter/methods/cloud.md) topic
for additional information.
:::


Even after applications such as Acrobat, Metro Media Player, and Outlook are installed, those
applications are not associated by default with the appropriate file extensions.

Using Endpoint Policy Manager File Associations Manager, we want to make the following maps:

- PDF — Acrobat Reader (MSI version)
- MAILTO — Outlook or Claws Mail (MSI version)
- MP4 — Metro Media Player (UWP version)

Follow these steps to associate the extensions:

**Step 1 –** Create a GPO and link it to where your computers are. For example, a GPO named PPFAM
Policies is linked to the East Sales Computers OU.

**Step 2 –** In **Computer Configuration** > **PolicyPak** > **File Associations Manager**, select
**Add** > **New Policy**.

![about_policypak_file_associations_11](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_11.webp)

**Step 3 –** The Endpoint Policy Manager File Associations Manager policy editor displays, showing
the most common configuration. For this Quickstart, make the following selections:

- Filter Type: File Type
- File Extension: PDF
- Action Type: Registered application
- Select Program: Since you typed PDF earlier, clicking **Select Program** automatically show
  applications on your machine (the one with the Group Policy editor) that are capable of opening
  PDF files. Since you already installed Adobe Reader, the program is selectable.

**Step 4 –** The Associated Program (ProgID) and Application Name are automatically filled in.

![about_policypak_file_associations_12](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_12.webp)

**Step 5 –** When you click **OK** to save the policy, the entry looks like this:

![about_policypak_file_associations_13](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_13.webp)

**Step 6 –** Create another policy to map MAILTO: to Outlook or Claws Mail (your machine must have
Outlook or Claws Mail already installed). Go to **Add** > **New Policy**. For this policy, choose
**Network Protocol** as the filter type, then type in `mailto` (using either lowercase or uppercase)
in the **Network Protocol** field. Click **Select Program** and locate Claws Mail.

![about_policypak_file_associations_14](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_14.webp)

You now have two entries, one for PDF and one for MAILTO:

![about_policypak_file_associations_15](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_15.webp)

Now we create a map from MP4 to the UWP version of Metro Media Player. You must have the UWP
(Windows Universal/Windows store) version of Metro Media Player on your management station for these
steps.

**Step 7 –** Create a new policy to map all videos to the UWP version of Metro Media Player. To do
this, click the **Windows 10 Category** radio button, and then select **Video Player**. Click
**Select Program**, find an instance of Metro Media Player (UWP), and select it. When you do, the
Associated Program (Progid) and Application Name are automatically filled in.

![about_policypak_file_associations_16](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_16.webp)

Now, you'll have a new entry.

![about_policypak_file_associations_17](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_17.webp)

Make sure the endpoint has the same programs installed as the management station and also has the
Endpoint Policy Manager CSE installed.

**Step 8 –** Run `GPupdate`. Note that when settings are applied using Group Policy they do not take
effect until that user logs off and then logs on again. Also note that after `GPupdate `is run there
is no discernible change in the icons of the newly registered file types.

![about_policypak_file_associations_18](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_18.webp)

Once you run `GPupdate` you should see the PDF icon change. After this, double-clicking on a PDF
should open Acrobat Reader, double-clicking on the MP4 should open Metro Media Player, and opening
your Wordpad doc, which has a MAILTO: email address, should open Claws Mail (or Outlook).

![about_policypak_file_associations_19](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_19.webp)


