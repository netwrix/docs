---
title: "Troubleshooting Client and Endpoint Problems"
description: "Troubleshooting Client and Endpoint Problems"
sidebar_position: 20
---

# Troubleshooting Client and Endpoint Problems

In the sections below, we'll discuss some common problems and errors associated with the client and
endpoints.

## Forcing the Server to See Updated Computers in Active Directory

If you attempt to create a snapshot and you are unable to locate computers you expect, this does not
necessarily mean that something is wrong. The Compliance Reporter server only checks where computers
are in Active Directory once an hour. Therefore, if a computer is moved or renamed, PPGPCR won't
know about it until the next hour. However, you can restart the Endpoint Policy Manager GPCR Server
service as shown in Figure 60. Then the most recent Active Directory data will be pulled and used.

![tuning_and_troubleshooting_2](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_2.webp)

Figure 60. Restarting the Endpoint Policy Manager GPCR server service.

## Forcing the Auditor to Run

There are two ways to get the auditor to send data to the server:

- Running the scheduled task as an admin
- Running PPGPCR.Auditor.exe as SYSTEM (not as an admin)

In order to see the scheduled task on an endpoint, you must be logged in as an admin or run Task
Scheduler as an admin. Only then will you see the "Endpoint Policy Manager GP Compliance Reporter
Auditor" task as shown below. To force it to run, right-click on the task, and select "Run," as
shown in Figure 61. It will go from being queued to having a finished status.

![tuning_and_troubleshooting_3](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_3.webp)

Figure 61. Running the scheduled task from the Task Scheduler.

The second way to try to run the auditor is by hand, as SYSTEM. Local admin rights are not
sufficient, and if you try to run the auditor as a user or admin, you will get an error, as shown in
Figure 62.

![tuning_and_troubleshooting_4](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_4.webp)

Figure 62. Running the auditor as a user or admin will result in an error.

To run the auditor as SYSTEM, you need to open an admin command prompt, and download and run the
PSEXEC tool from Microsoft. Run `PsExec -i -s CMD`, as shown in Figure 63. Then, to force the
auditor to run, run `\\server\share\PPGPCR.Auditor.exe TargetServer /force`. You must specify the
Endpoint Policy Manager GPCR server on the command line, as shown in Figure 63.

![tuning_and_troubleshooting_5](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_5.webp)

Figure 63. Specifying the PPGPCR server on the command line.

The above steps will perform the same work as the Task Scheduler, and can be used if scheduled task
is not operational.

## Connection Errors

When making manual snapshots, if you see many machines reporting back "Connection Error," that means
that there was a communication problem between the Endpoint Policy Manager GPCR client (admin
console) and each target machine requesting RSOP. An example of these errors is shown in Figure 64.

:::note
For a video addressing the opening of the firewall ports as described in this section,
please go to the following link:
[Open required firewall ports](/docs/endpointpolicymanager/gpcompliancereporter/videos/troubleshooting/firewallports.md).
:::


![tuning_and_troubleshooting_6](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_6.webp)

Figure 64. Connection errors indicating a communication problem.

When this occurs, it is almost always caused by one of the following issues:

- The target machine is off.
- The target machine has the Windows firewall turned on and is blocking the "Remote Admin" ports.
- DNS is not functioning between the Endpoint Policy Manager GPCR client (admin console) and the
  target machine.

The Endpoint Policy Manager GPCR client (admin console) must be able to contact each target machine
and request its RSOP. If any of the conditions above are true, you cannot receive that computer's
data. Adjusting for DNS problems is beyond the scope of this manual. However, one problem we can
address is opening the remote administration ports (ports 135 and 445) on the target machines. You
can do this very easily by using Group Policy.

Create a Group Policy setting for your machines to open the required ports. In Figure 65, you can
see an example of a GPO linked to "East Sales Desktops." The setting to open the ports is located at
Computer Configuration | Admin Templates | Network | Network Connections | Windows Firewall | Domain
Profile | Windows Firewall: Allow inbound remote administrative exception, as shown in Figure 65.

![tuning_and_troubleshooting_7](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_7.webp)

Figure 65. Enabling the setting "WIndows Firewall: Allow inbound remote administrative exception."

When you do this, you will be able to remotely grab RSOP from target computers.

:::note
After you make this change, it could take up to 120 minutes for all computers in the
organizational unit (OU) to receive this signal. You can reboot them or manually run GPUpdate
instead of waiting.
:::


## License Errors

When computers return "No License" in the snapshot status, this means a successful connection was
established, but a Endpoint Policy Manager GPCR license was not found.

:::note
Target machines must be licensed for Endpoint Policy Manager GPCR to return all data
(Microsoft and Endpoint Policy Manager data).
:::


When a machine is licensed for Endpoint Policy Manager GP Compliance Reporter, you should see its
status shown as "OK," as shown in Figure 66. A status of "Connection Error" or "No License"
indicates problems where this computer will not be able to be reported on.

![tuning_and_troubleshooting_8](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_8.webp)

Figure 66. The license status of the machines.

## Warning Messages

Just as Group Policy contains both user-side and computer-side items, the RCT does as well. Endpoint
Policy Manager GPCR helps test for compliance to your RCT. As such, an "OK" status is obtained only
when 100% of the settings in the RCT (on the user- or computer-side) match what is on the target
computer. Unless there is a perfect match, you will receive a warning, as shown in Figure 67.

![gpcr_concepts_and_quickstart_29_624x174](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/gpcr_concepts_and_quickstart_29_624x174.webp)

Figure 67. You will receive a warning if there is not a perfect match between the RCT and the target
computer.

