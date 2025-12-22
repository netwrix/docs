---
title: "Using Clientless Auditing"
description: "Using Clientless Auditing"
sidebar_position: 50
---

# Using Clientless Auditing

When using push mode for clientless auditing, you do not need to create snapshot sets as is required
in pull mode, but it is still permitted.

:::warning
Endpoint Policy Manager GPCR does not report on every Group Policy trigger (like a
computer-side reboot or when users log in or GPupdate). Endpoints only send data to the server
during the background refresh cycle which happens after login. This means that push mode data will
trickle in. You can change this behavior using the ADMX settings you will learn about in the section
called "Tuning and Troubleshooting."
:::


There are some built-in reports to help determine which computers (and their users) are delivering
auditing data. In Figure 54, the report entitled "Computers Reporting Auditing Data" will show
computers that are in the security group and have successfully delivered auditing data to the
server.

![gpcr_server_with_push_mode_18](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_18.webp)

Figure 54. Computers reporting auditing data.

The report entitled "Computers Attempting to Report Audit Data (Not in Group)" will show computers
that ran PPGPCR.Auditor.exe and had their data received by the server but dumped because they were
not in the security group, as shown in Figure 55.

![gpcr_server_with_push_mode_19](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_19.webp)

Figure 55. Data is dumped for computers not in the security group.

:::note
If you add a computer to your own Active Directory security group you will need to reboot
it for the computer to know it has changed group membership.
:::


There is a final report entitled "Users Reporting Audit Data," as shown in Figure 56. This enables
you to quickly view which users' data you have on file and which computer they last used to log in
with.

![gpcr_server_with_push_mode_20](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_20.webp)

Figure 56. Users reporting audit data.

