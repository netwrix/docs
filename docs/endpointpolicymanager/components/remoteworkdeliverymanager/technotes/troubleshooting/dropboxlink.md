---
title: "My Dropbox link won't verify in Remote Work Delivery Manager"
description: "My Dropbox link won't verify in Remote Work Delivery Manager"
sidebar_position: 10
---

# My Dropbox link won't verify in Remote Work Delivery Manager

Dropbox has recently made a change to their service and temporarily blocked our ability to verify
the acceptability of the link. This link, however, will continue to work if the policy was
previously created, or a verifiable link from another source is substituted during the policy
creation process. This article will walk through the process of creating a policy with a verifiable
link from another source and manually editing the XML to use the DropBox link.

## Create the Policy

Create the policy to be used as a template

**Step 1 –** Create and new GPO or open an existing one

**Step 2 –** Under either Computer or User Configuration, expand "PolicyPak -> App Delivery &
Patching Pak" and select "Remote Work Delivery Manager"

![800_1_image-20210602100219-1](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/800_1_image-20210602100219-1.webp)

**Step 3 –** Add a "New Web Policy"

**Step 4 –** Follow the prompts, setting your options as required

**Step 5 –** On the "Specify the copy source" page, paste in a working link. If you do not have one,
this link below can be used.
[https://z_deleteme.s3.amazonaws.com/7z.msi](https://z_deleteme.s3.amazonaws.com/7z.msi)

![800_2_image-20210602100219-2](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/800_2_image-20210602100219-2.webp)

**Step 6 –** On the "Specify the Copy Destination" page, enter in the directory to copy the file to
and set the file name as it should be for the destination file.

![800_3_image-20210602100219-3](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/800_3_image-20210602100219-3.webp)

**Step 7 –** If this an application distribution and installation, fill in the appropriate Post-copy
and Revert actions

**Step 8 –** Complete the wizard

## Export and Update the XML

In this next step we need to grab the XML and manually update it with the correct DropBox link.

**Step 1 –** Export to XML

![800_4_image-20210602100219-4](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/800_4_image-20210602100219-4.webp)

**Step 2 –** Open the saved XML file in your text editor

**Step 3 –** Find the option `<rd:source url=xxx` and replace the value with the correct DropBox
link.

Example:

![800_5_image-20210602100219-5](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/800_5_image-20210602100219-5.webp)

TO

![800_6_image-20210602100219-6](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/800_6_image-20210602100219-6.webp)

:::note
by default, when you create a DropBox link it ends with [dl=0]. If it does, it must be
changed it to [dl=1] to work. This would normally be done by the application automatically.
:::


**Step 4 –** If needed alter any other sections that are required that were not previously
configured within Netwrix Endpoint Policy Manager (formerly PolicyPak) (e.g. destination, afterApply
(post-copy action) or beforeRevert (revert action), then save the file

![800_7_image-20210602100219-7](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/800_7_image-20210602100219-7.webp)

**Step 5 –** If importing back into the same server as the originating template, and the policy
still exists, on the policy line (usually line 2), find "id" and change at least one of the
characters, any one of them will do. Endpoint Policy Manager will not allow the policy to be
imported if a policy already exists with the same ID.

![800_8_image-20210602100219-8](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/800_8_image-20210602100219-8.webp)

**Step 6 –** Save and close.

The XML can now be imported into your environment – Back into GPO land where it was created, added
to an MSI for MDM distribution or imported into the Endpoint Policy Manager Cloud – through the
regular means.

:::note
This policy cannot be altered by either of the Administrative Consoles (On-premise or
Cloud). Any changes must be done manually to the XML and re-imported as detailed above.

:::


