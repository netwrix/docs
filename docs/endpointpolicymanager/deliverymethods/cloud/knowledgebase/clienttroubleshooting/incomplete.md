---
title: "My Endpoint Policy Manager Cloud Client or Client Side Extension isn't completing the installation; How do I fix it?"
description: "My Endpoint Policy Manager Cloud Client or Client Side Extension isn't completing the installation; How do I fix it?"
sidebar_position: 220
---

# My Endpoint Policy Manager Cloud Client or Client Side Extension isn't completing the installation; How do I fix it?

If you find that when installing or updating the either the Cloud Client (PPC Client) or Client Side
Extension (CSE) from the cloud server it doesn't complete successfully, it may be that the
downloaded file was corrupted or cut-off during transit. When this happens and our checks catch the
error, the installation for the corrupted file will fail.

To get around this issue, the corrupted file, the application that isn't completing the
installation, needs to be deleted so it can be re-downloaded. Please review the steps below to
determine what needs to be deleted.

## Initial Installation

As the PPC Client is already downloaded, it's the CSE that would be the issue here. You'll get
indication something is wrong when the Installation complete. You may end up with a message
something like this:

![968_1_image-20230925200947-1](/images/endpointpolicymanager/troubleshooting/cloud/install/968_1_image-20230925200947-1.webp)

Note missing group membership.

**Step 1 –** Delete the MSI from the following path

````C:\ProgramData\PolicyPak\Downloaded
Installations\PolicyPak Client-Side Extension\xx.x.xxxx``` (where xx.x.xxxx is the
version being installed)

__Step 2 –__ To force an update immediately, open a command prompt and run the
command ```ppcloud
/CSEUpdateNow```; Otherwise, the CSE will update during the next
check-in.

## Updates

Corrupt here could be for either the PPC Client or the
CSE.

### PPC Client

__Step 1 –__
Delete
the MSI from the following path

```C:\ProgramData\PolicyPak\Downloaded
Installations\PolicyPak Cloud Client\xx.x.xxxx``` (where xx.x.xxxx is the version
being installed)

__Step 2 –__ To force an update immediately, open a command prompt and run the
command ```ppcloud
/CSEUpdateNow```; Otherwise, the PPC Client will update during the next
check-in.

### Client Side Extension

__Step 1 –__ Delete
the MSI from the following path

````

Use code snippets for code commands and examples.
Delete the "Copy" link from the code snippet.
We used to use a Command Line style. We have mostly phased it out.

````

```C:\ProgramData\PolicyPak\Downloaded
Installations\PolicyPak Client-Side Extension\xx.x.xxxx```(where xx.x.xxxx is the
version being installed)

__Step 2 –__ To force an update immediately, open a command prompt and run the
command ppcloud
/CSEUpdateNow; Otherwise, the CSE will update during the next
check-in.

__NOTE:__  Please note that this issue is expected to be resolve in late
September or October 2023.

__NOTE:__  If you have a slow connection on the endpoint, the CSE can be
downloaded from our customer portal and pre-installed. Please refer to the following KB article ->

[How can I best install Endpoint Policy Manager Cloud for remote clients over a slow link/internet connection?](/docs/endpointpolicymanager/deliverymethods/cloud/knowledgebase/gettingstarted/slowinternet.md)
````


