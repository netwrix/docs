---
title: "Using GPOTouch Utility to Automatically Update Storage"
description: "Using GPOTouch Utility to Automatically Update Storage"
sidebar_position: 50
---

# Using GPOTouch Utility to Automatically Update Storage

You can manually update the Local Store or Central Storage with updated Endpoint Policy Manager DLLs
and then manually edit each Group Policy Object and "touch" it if you are doing a manual upgrade. By
"touching" a GPO, we mean to clicking edit on the GPO, which will refresh its contents by looking
for upgraded AppSets. This can be time consuming to do this one by one. There is, however, a more
straightforward approach using the Endpoint Policy Manager GPOTouch utility.

:::note
The Endpoint Policy Manager GPOTouch utility is installed alongside the Admin Console and
DesignStudio setup MSI.
:::


To start the Endpoint Policy Manager GPOTouch utility, find it in the Start Menu, as seen in
The figure shown.

![policypak_application_settings_3_25](/images/endpointpolicymanager/applicationsettings/appsetfiles/endpointpolicymanager_application_settings_3_25.webp)

The figure shown. The Start Menu showing Endpoint Policy Manager GPOTouch.

Then follow the prompts to specify the source for the latest AppSets that you want to update:
Central Storage, Share-Based Storage, Local Store, or All GPOs with the latest AppSets.

:::note
To see an overview of the Endpoint Policy Manager GPOTouch utility, please watch this
tutorial video: [GPOTouch Utility](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/touchutility.md).

:::



