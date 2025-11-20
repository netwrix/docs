---
title: "How to trigger an update of the Endpoint Policy ManagerClient Side Extension and Cloud Client via command line using Endpoint Policy Manager Cloud versus Group Policy (OnPrem) Edition"
description: "How to trigger an update of the Endpoint Policy ManagerClient Side Extension and Cloud Client via command line using Endpoint Policy Manager Cloud versus Group Policy (OnPrem) Edition"
sidebar_position: 50
---

# How to trigger an update of the Endpoint Policy ManagerClient Side Extension and Cloud Client via command line using Endpoint Policy Manager Cloud versus Group Policy (OnPrem) Edition

## Using Endpoint Policy Manager Cloud

From a CMD prompt, run `ppcloud /cseupdatenow` or`ppcloud /update` (both commands do the same thing)
Check for updated cloud client and client-side extensions and install them, if any are available.

From more information seeRecommendations when using Netwrix Endpoint Policy Manager (formerly
PolicyPak) Cloud: Rings and Rollouts in the topic below.

- [Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/rings.md)

:::note
When using the commands above both the CSE and PPC client will be updated if new versions
are available.
:::


## Using Endpoint Policy Manager Group Policy (OnPrem) Edition

From a CMD prompt run `ppupdate`followed by one of the switches in the examples provided below.

:::note
These switches are dependent on having the CSE MSI files present in the Central Store See
Active Directory Options 2 & 3 in the KB below for more information.
:::


[Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/rings.md)

Examples:

```
ppupdate /cseupdate
```

Forces CSE to immediately re-read `update.config`

Check for updates will be performed on schedule.

```
ppupdate /cseupdatenow
```

Forces CSE to immediately re-read `update.config`, checks for updates and installs them if any are
available.

Using this option will also reset the schedule.

```
ppupdate /cseupdatenow /force 
```

When specified along with /cseupdatenow, forces CSE to check for updates even when automatic updates
are disabled in `update.config`. This option is useful for those who want to check for updates on
their own schedule.

