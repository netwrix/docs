---
title: "Apply Mode or \"Apply Once and Drift\""
description: "Apply Mode or \"Apply Once and Drift\""
sidebar_position: 60
---

# Apply Mode or "Apply Once and Drift"

You can also create policies that will enforce a given file association one time so that users can
then drift from your configuration and choose their own application.

:::note
For a video on applying policies only once, see
[Endpoint Policy Manager File Associations Manager: Apply once (and drift)](/docs/endpointpolicymanager/components/fileassociationsmanager/videolearningcenter/gettingstarted/applyonce.md).
:::


Let's create a file association policy on the User side so that Adobe Acrobat Reader is the assigned
application for all its associated files.

![about_policypak_file_associations_27](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_27.webp)

Notice that you get a popup message alerting you that user-side file and protocol associations are
ignored on Endpoint Policy Manager CSE versions older than 20.2.2361.

![about_policypak_file_associations_28](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_28.webp)

You can then choose all of the possible file types for Adobe Acrobat Reader.

![about_policypak_file_associations_29](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_29.webp)

Next choose the **Apply once (for policies)** option.

![about_policypak_file_associations_30](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_30.webp)

Once the policy has been enforced one time, users can then drift away from the deployed
configuration to make their own choices.

You can use this Apply once and drift approach for a single policy as well. Simply go to **Add** >
**New Policy** and click the **Apply** drop down menu and select **Once**.

![about_policypak_file_associations_31](/images/endpointpolicymanager/fileassociations/about_endpointpolicymanager_file_associations_31.webp)


