---
title: "What happens if there is an outage on Endpoint Policy Manager Cloud ?"
description: "What happens if there is an outage on Endpoint Policy Manager Cloud ?"
sidebar_position: 150
---

# What happens if there is an outage on Endpoint Policy Manager Cloud ?

From time to time, Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud could become
unavailable or "goes down". This is rare, but it can happen.

First, to verify and ensure the problem is with the Endpoint Policy Manager Cloud service, and not
something on your end, please see the following article
[Troubleshoot communication from the Cloud Client and Cloud Service](/docs/endpointpolicymanager/deliverymethods/cloud/knowledgebase/clienttroubleshooting/servicecommunication.md) (and
the sub-KB articles at the end).

However, if the Endpoint Policy Manager Cloud service itself is down, you might see the following
behavior:

**Step 1 –** Computers cannot be joined / re-joined to Endpoint Policy Manager Cloud

![612_1_rt](/images/endpointpolicymanager/troubleshooting/cloud/612_1_rt.webp)

**Step 2 –** Endpoint Policy Manager Cloud /sync might show the following message…

Syncing with the cloud...

Could not sync with the cloud.

```
A network error occurred during sending Sync to https://cloudsvc.policypak.com/Services/Synchronization: 
The request channel timed out while waiting for a reply after 00:00:29.9686167. 
Increase the timeout value passed to the call to Request or increase the SendTimeout value on the Binding. 
The time allotted to this operation may have been a portion of a longer timeout.

```

```
A network error occurred during sending Sync to https://cloudsvc.policypak.com/Services/Synchronization: 
The request channel timed out while waiting for a reply after 00:00:29.9530410. 
Increase the timeout value passed to the call to Request or increase the SendTimeout value on the Binding. 
The time allotted to this operation may have been a portion of a longer timeout.
```

```
A security error occurred during sending Sync to https://cloudsvc.policypak.com/Services/Synchronization: 
The token provider cannot get tokens for target 'https://cloudsvc.policypak.com/Services/Synchronization'. 
Elapsed time: 00:01:00.7012049
```

This indicates that NEW policies aren't able to sync from the Endpoint Policy Manager Cloud server.

However, existing clients will maintain their already-delivered Policy settings.

Additionally, clients will not disconnect or become un-joined from the Endpoint Policy Manager Cloud
server.


