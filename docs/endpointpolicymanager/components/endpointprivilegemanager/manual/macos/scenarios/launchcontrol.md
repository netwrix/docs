---
title: "Application Launch Approval (aka Launch Control)"
description: "Application Launch Approval (aka Launch Control)"
sidebar_position: 50
---

# Application Launch Approval (aka Launch Control)

:::note
See the [Application Launch Approval](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/macintegration/applicationlaunch.md)
video for an overview of this section.
:::


You might have an application which is part of your deployment, but you want to prevent it from
running. In this example Firefox is on the machine and runs as expected as a standard user.

![Inserting image...](/images/endpointpolicymanager/mac/scenarios/application_launch_approval.webp)

To block Firefox from running you can specify a condition. You may use the PPFILEINFO tool to get
the SigningID (or other attributes) for a match.

![application_launch_approval_1](/images/endpointpolicymanager/mac/scenarios/application_launch_approval_1.webp)

In this example we are using a Signing Identifier: `org.mozilla.firefox`.

Then use that as your condition:

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/application_launch_approval_2.webp)

The result of the policy is that the application will be blocked on launch.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/application_launch_approval_3.webp)

Other actions besides Deny Execution are Allow Execution, with some options:

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/application_launch_approval_4.webp)

- No Confirmation — Application launches
- Confirmation — Provides a pop-up asking user to confirm the actual launch
- Reason — User is asked to provide reason why this should be launched
- Challenge — Please see section “Using MacOS + Admin Approval” later in this document
- Credentials — User is forced to provide credentials to launch application

Examples of the dialog boxes may be seen here:

![Screens screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/application_launch_approval_5.webp)



