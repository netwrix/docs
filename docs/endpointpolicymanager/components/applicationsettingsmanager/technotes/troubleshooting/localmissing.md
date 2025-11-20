---
title: "I just upgraded my management station to 785. My LOCAL AppSets are now missing. What happened?"
description: "I just upgraded my management station to 785. My LOCAL AppSets are now missing. What happened?"
sidebar_position: 20
---

# I just upgraded my management station to 785. My LOCAL AppSets are now missing. What happened?

While Upgrading from a build prior to 785 all AppSets stored in Local Storage for Netwrix Endpoint
Policy Manager (formerly PolicyPak) Extension could be deleted.

This will happen if:

1. You are Upgrading to Admin-Console 785 or later from any previous build

AND

2. You are storing DLL extensions locally at following location

   ```
   c:\Program Files (x86)\PolicyPak\Extensions folder (on 64-bit machines)
   ```

```
c:\Program Files\PolicyPak\Extensions (on 32-bit machines)
```

If both conditions are true the DLL extensions stored at the location mentioned above may get
deleted and you will see the error below.

![409_1_image002](/images/endpointpolicymanager/troubleshooting/applicationsettings/appset/409_1_image002.webp)

To Workaround:

**Step 1 –** Back up the contents of the above-mentioned location before Upgrading to 785 and place
back after the upgrade

**Step 2 –** Simply re-place missing AppSets back in to the storage location; or better yet, use the
CENTRAL STORE or SHARED STORE method.

**Step 3 –**
[How can I use the Endpoint Policy ManagerCentral store (if I was already using the Endpoint Policy Manager Local store?)](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/generalconfiguration/centralstore.md).

This issue is fixed for any upgrade FROM 785 onwards, but it's not possible to fix "retroactively"
as you upgrade to 785.


