---
title: "Rings with Endpoint Policy Manager Cloud"
description: "Rings with Endpoint Policy Manager Cloud"
sidebar_position: 10
---

# Rings with Endpoint Policy Manager Cloud

In Endpoint Policy Manager Cloud, because the concept of groups is already used, you can consider a
Endpoint Policy Manager Cloud group like a ring. You can choose a group and manually specify to use
a particular version of the CSE on that group. You can also specify to use a particular version of
the CSE or Cloud Client everywhere (using the special "ALL" groups). Therefore, the following steps
are recommended:

**Step 1 –** Set up a group of 2–5% of your computers. When a new CSE or Cloud Client is released,
you should opt in and use this group to start testing and verify success. If there is a problem, you
can raise it to the Endpoint Policy Manager support team and we will work with you.

**Step 2 –** If all goes well, you can roll out the latest CSE and/or Cloud Client to more Endpoint
Policy Manager Cloud groups. It only takes one click within the group to select the CSE or Cloud
Client version. Your target rollout for the new CSE and/or Cloud Client should be around 30–50% of
your Windows machines. If an issues occurs, you can raise it to the support team and we willl work
with you.

**Step 3 –** After you have rolled out to 50% of your machines, you should be confident enough to
roll it out to all machines. When ready, pick the remaining Endpoint Policy Manager Cloud groups and
select the latest CSE and/or Endpoint Policy Manager Cloud client to opt-in more groups.

**Step 4 –** Alternatively, use the special **All** group to finish your upgrade and mass upgrade
the remaining PCs all at once (after completing some testing).

See the
[Endpoint Policy Manager Cloud Groups CSE and Cloud Client Small-Scale Testing and Updates](/docs/endpointpolicymanager/deliverymethods/cloud/videos/upkeepanddailyuse/groups.md)
topic for additional information on this process.

:::note
Update the CSE first or the Cloud Client first in the test groups and let each part of the
software update. Upgrading both at the same time is supported but is not recommended.

:::

