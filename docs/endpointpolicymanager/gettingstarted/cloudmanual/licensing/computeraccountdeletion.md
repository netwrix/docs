---
title: "Computer Account Deletion"
description: "Computer Account Deletion"
sidebar_position: 60
---

# Computer Account Deletion

When a computer account is deleted, its acquired license is immediately returned back to the
available license pool. To delete a computer, click on a group and go to the computer in the
Computers section. Then, select **Delete computer**.

![licensing_with_policypak_cloud_4_499x277](/images/endpointpolicymanager/cloud/licensing/licensing_with_endpointpolicymanager_cloud_4_499x277.webp)

The computer account then goes to the **Deleted** group. From there, you have two options:

- **Undelete** - Returns the client back into the queue to acquire a license from the pool.
- **Delete permanently** - Removes the record from Endpoint Policy Manager Cloud and, in addition,
  will send a signal to the client computer to uninstall both the Endpoint Policy Manager Cloud MSI
  and Endpoint Policy Manager client-side extension (CSE) from the Windows machine (during the next
  connection).

![licensing_with_policypak_cloud_5_499x266](/images/endpointpolicymanager/cloud/licensing/licensing_with_endpointpolicymanager_cloud_5_499x266.webp)

