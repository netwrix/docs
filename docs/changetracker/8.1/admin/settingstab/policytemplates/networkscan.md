---
title: "Network Scan"
description: "Network Scan"
sidebar_position: 130
---

# Network Scan

There are several steps required to configure and define a multi-device network scan.

![NetworkScan](/images/changetracker/8.1/admin/settings/policytemplates/networkscan.webp)

**Step 1 –** Define The Network device. Select the agent from which you would like the scan to run,
usually the Agent installed on the Hub server, but any remote Agent or Agents can be used to run
scans to their local subnet, thereby simplifying routing/firewall rules.

![EditNetwork](/images/changetracker/8.1/admin/settings/policytemplates/editnetwork.webp)

- **Host/Database Name** - Define the individual addresses and/or address range; use a space to
  separate multiple entries; use a 1-20 notation for an inclusive range.
- **Credentials** - For a multiple device/address port scan range, no credentials are required so a
  simple **No-Connection-Required** credential key is needed.

![EditNetworkCredentialName](/images/changetracker/8.1/admin/settings/policytemplates/editnetworkcredentialname.webp)

- **Credential Name** - Create a ‘No-Connection-Required’ credential key – a username and password
  will be required but these can be entered as dummy credentials.

**Step 2 –** The **Network Port Tracker** can then be scheduled to run like any other Tracker
although due to the typically prolonged time needed to complete each scan, especially if UDP ports
are included, we would advise that the Tracker is set to **Polling frequency: run at** ‘agent
startup’ and repeat ‘No repeat’.

![page_guide_53](/images/changetracker/8.1/admin/settings/policytemplates/page_guide_53.webp)

**Step 3 –** Once the initial poll has completed the duration will be required as a communications
Event.

![page_guide_54](/images/changetracker/8.1/admin/settings/policytemplates/page_guide_54.webp)

**Step 4 –** Provided you have specified within the Tracker template to **Send Baseline Events**
then you will also be able to see both the full baseline/status for the Tracker results, as well as
the usual change events. Similarly, you can also report on these, export the events, and receive
alerts for any Planned and Unplanned changes.

![EventDetailsNetwork](/images/changetracker/8.1/admin/settings/policytemplates/eventdetailsnetwork.webp)
