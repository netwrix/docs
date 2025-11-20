---
title: "I always use a proxy and the cloud client cannot seem to make contact with the services (see FAQ Item #3 above first.) What else can I try?"
description: "I always use a proxy and the cloud client cannot seem to make contact with the services (see FAQ Item #3 above first.) What else can I try?"
sidebar_position: 70
---

# I always use a proxy and the cloud client cannot seem to make contact with the services (see FAQ Item #3 above first.) What else can I try?

The Netwrix Endpoint Policy Manager (formerly PolicyPak) cloud service is running as Local Service.
That service might need to be instructed to be used to specify a proxy for the LocalService Account.

The keys you can manipulate are: HKEY_USERS.DEFAULTSoftwareMicrosoftWindowsCurrentVersionInternet
SettingsConnectionsDefaultConnectionSettings and SavedLegacySettings.

The ideal way to do this is as follows:

**Step 1 –** Log on as a local admin to the machine.

**Step 2 –** Create the right proxy info in your IE browser as your own user.

**Step 3 –** Find the
`HKEY_Current_UserSoftwareMicrosoftWindowsCurrentVersionInternet SettingsConnections`

`"DefaultConnectionSettings"`

**Step 4 –** Find the
`HKEY_Current_UserSoftwareMicrosoftWindowsCurrentVersionInternet SettingsConnections`

`"SavedLegacySettings"`

**Step 5 –** Copy each one to the path for the
.`DEFAULT profile. HKEY_USERS.DEFAULTSoftwareMicrosoftWindowsCurrentVersionInternet SettingsConnectionsDefaultConnectionSettings`
and ` SavedLegacySettings.`

You should see the proxy information like what is seen here in the binary value.

![373_1_image005sdfggrt](/images/endpointpolicymanager/troubleshooting/cloud/373_1_image005sdfggrt.webp)


