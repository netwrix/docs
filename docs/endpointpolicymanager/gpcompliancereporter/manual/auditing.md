---
title: "Troubleshooting Auditing Problems"
description: "Troubleshooting Auditing Problems"
sidebar_position: 40
---

# Troubleshooting Auditing Problems

In the sections that follow, we'll cover two common auditing problems.

## Computers Not in Group

You might see too many computers appear in the built-in report "Computers Attempting to Report Audit
Data (Not in Group)," as shown in Figure 70.

![tuning_and_troubleshooting_11](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_11.webp)

Figure 70. Computers attempting to report audit data.

The group the computers must belong to is specified as shown in Figure 71.

![tuning_and_troubleshooting_12](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_12.webp)

Figure 71. Computers must belong to the specified group.

If you specify your own Active Directory security group and then add computers to it, you will need
to reboot those endpoint computers so they know they have changed group membership. After a reboot
they will know their group membership and start to report data. They will transition from this
report to "Computers Reporting Audit Data."

:::note
Since all computers are always automatically in the built-in Domain Computers group, you
can choose that group and no reboot is required.
:::


## Missing Endpoint Data

Endpoints must receive the scheduled task to run PPGPCR.Auditor.exe when Group Policy is triggered.
That scheduled task then delivers the endpoint Group Policy data to the server. The server must know
the endpoint is a member of the security group designated to keep data. The two most common reasons
for not seeing endpoint data in the Endpoint Policy Manager GPCR server are the following:

- The scheduled task is missing on the endpoint.
- The computer is not a member of the security group.

To help you troubleshoot endpoints that are missing the scheduled task, you can create a snapshot.
Then use the "Has Audit Task" column to verify whether the endpoint includes the Endpoint Policy
Manager GPCR scheduled task, as shown in Figure 72.

![tuning_and_troubleshooting_13](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_13.webp)

Figure 72. The "Has Audit Task" column.

:::note
The "Has Audit Task" column is only present when the Endpoint Policy Manager GPCR client
is communicating with a Endpoint Policy Manager GPCR server (clientless auditing mode).

:::

