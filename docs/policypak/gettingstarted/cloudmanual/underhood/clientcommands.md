---
title: "PolicyPak Cloud Client Commands"
description: "PolicyPak Cloud Client Commands"
sidebar_position: 30
---

# PolicyPak Cloud Client Commands

The PolicyPak Cloud client can be invoked from an elevated command prompt with the
`ppcloud` command. Below are the switches to `ppcloud`:

- `/sync`: This switch attempts to re-synchronize with PolicyPak Cloud, verifying
  license status and computer group membership. Then, it downloads changes from PolicyPak Cloud. At that time, enforced policies are applied.
- `/cseupdatenow`: PolicyPak Cloud can download updates to the PolicyPak
  CSE and also the PolicyPak Cloud client when available. Remember the CSE and Cloud
  client must be specified at the group (or "All") level. This operation happens automatically in
  the background (when new CSEs or Cloud clients are available) but can be manually forced if you
  want to do small scale tests or are directed by PolicyPak Tech Support to do so.
- `/status`: Shows information about currently installed licenses, applied policies, and membership
  within groups.
- `/sysprep`: Used to install the PolicyPak Cloud client on a virtual desktop image.
  See "Option 2" in this KB article:
  [How to install the PolicyPak Cloud Client for use in an Azure Virtual Desktop image](/docs/policypak/deliverymethods/cloud/knowledgebase/clienttips/azurevirutaldesktop.md).
  Or see this article:
  [How to install and configure the PPC Client for a Non-Persistent VDI Image in VMware Horizon](/docs/policypak/deliverymethods/cloud/knowledgebase/clienttips/vdisolutions.md).
- `/unregister`: Used to un-register a machine from PolicyPak Cloud and reclaim a
  license. Used with a virtual desktops scenario.
- `/jointoken:value`: Used in conjunction with the `/sysprep `switch to automatically join a
  computer to specified groups. Used with a virtual desktop scenario.

