---
title: "Does Endpoint Policy Manager admin console need to be installed on Domain Controller (DC)?"
description: "Does Endpoint Policy Manager admin console need to be installed on Domain Controller (DC)?"
sidebar_position: 10
---

# Does Endpoint Policy Manager admin console need to be installed on Domain Controller (DC)?

No. The Netwrix Endpoint Policy Manager (formerly PolicyPak) admin console does NOT need to be
installed on DCs.

Let's do a quick run-through of the components of Endpoint Policy Manager and where they are
installed:

**Step 1 –** Endpoint Policy Manager Admin Console MSI: Install this on YOUR management station,
usually Windows 10. As a rule of thumb, install this anywhere you have and use the GPMC regularly.

**Step 2 –** Endpoint Policy Manager CSE MSI: Install this on the machines you want to manage using
Endpoint Policy Manager Software. Usually end-user computers, Citrix / TS machines, or anything that
users actually log on to or use

**Step 3 –** Endpoint Policy Manager pre-configured Paks: These are COPIED in one of three places:

- Locally to YOUR management station machine,
- To the Endpoint Policy Manager Central Store
  [Working with Others and using the Central Store](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/centralstorework.md)
- A share
  [Using Shares to Store Your Paks (Share-Based Storage)](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/shares.md).

:::note
Point 3 is needed for Endpoint Policy Manager Application Settings Manager (PPASM) only.
:::


So, nothing is ever needed to be installed on DCs. And nothing is ever required to be running on
DCs.

