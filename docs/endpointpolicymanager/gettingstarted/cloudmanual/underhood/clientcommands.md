---
title: "Endpoint Policy Manager Cloud Client Commands"
description: "Endpoint Policy Manager Cloud Client Commands"
sidebar_position: 30
---

# Endpoint Policy Manager Cloud Client Commands

The Endpoint Policy Manager Cloud client can be invoked from an elevated command prompt with the
`ppcloud` command. Below are the switches to `ppcloud`:

- `/sync`: This switch attempts to re-synchronize with Endpoint Policy Manager Cloud, verifying
  license status and computer group membership. Then, it downloads changes from Endpoint Policy
  Manager Cloud. At that time, enforced policies are applied.
- `/cseupdatenow`: Endpoint Policy Manager Cloud can download updates to the Endpoint Policy Manager
  CSE and also the Endpoint Policy Manager Cloud client when available. Remember the CSE and Cloud
  client must be specified at the group (or "All") level. This operation happens automatically in
  the background (when new CSEs or Cloud clients are available) but can be manually forced if you
  want to do small scale tests or are directed by Endpoint Policy Manager Tech Support to do so.
- `/status`: Shows information about currently installed licenses, applied policies, and membership
  within groups.
- `/sysprep`: Used to install the Endpoint Policy Manager Cloud client on a virtual desktop image.
  See "Option 2" in this KB article:
  [How to install the Endpoint Policy Manager Cloud Client for use in an Azure Virtual Desktop image](/docs/endpointpolicymanager/deliverymethods/cloud/knowledgebase/clienttips/azurevirutaldesktop.md).
  Or see this article:
  [How to install and configure the PPC Client for a Non-Persistent VDI Image in VMware Horizon](/docs/endpointpolicymanager/deliverymethods/cloud/knowledgebase/clienttips/vdisolutions.md).
- `/unregister`: Used to un-register a machine from Endpoint Policy Manager Cloud and reclaim a
  license. Used with a virtual desktops scenario.
- `/jointoken:value`: Used in conjunction with the `/sysprep `switch to automatically join a
  computer to specified groups. Used with a virtual desktop scenario.

