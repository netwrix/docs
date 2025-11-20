---
title: "How to fix the Chrome / Edge Chromium launch issues?"
description: "How to fix the Chrome / Edge Chromium launch issues?"
sidebar_position: 250
---

# How to fix the Chrome / Edge Chromium launch issues?

You might discover one or more computers will not correctly launch Chrome or Edge.

Netwrix Endpoint Policy Manager (formerly PolicyPak) was required to update the Endpoint Policy
Manager Browser Router extension in the Google Chrome store from V2 to V2 Manifests.  MV2 support
timeline is ending on June 2022. This document has more
information: [https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/).

After we updated and republished the PPBR chromium extension with V3 manifests, some customers
reported that Endpoint Policy Manager Browser Router would stop routing after Chrome or Edge was
opened (and left opened) for 5 – 10 minutes. The reason for this error is a known Chromium API bug
reproducible for MV3 extensions. Check the following discussion:
[https://bugs.chromium.org/p/chromium/issues/detail?id=1189678](https://bugs.chromium.org/p/chromium/issues/detail?id=1189678). The
MV3 support for the Browser Router extension will be rescheduled as soon as the Chromium bug is
fixed.

Therefore, due to the Chromium timeout bug with v3 manifests, we rolled back to the V2 manifest
version.

In doing so, a Chrome / Edge bug itself may not be able to compensate for the switch back to V2
manifests from the V3 manifests already in the Chrome / Edge profiles. Sometimes, the V3 extension
is not removed correctly and you'll see both V2 and V3 manifests at the same time; causing Chrome /
Edge crash during startup.

Resolution is reasonably straightforward: Chrome and Edge shouldn't have both manifests at the same
time. For now, affected machines need removal of the MV3 extension. 
 A quick fix for the Chrome/Edge launch issue is reinstalling the Endpoint Policy Manager Cloud
Client and /or CSE. However, following workaround should work as well.

**Step 1 –** Remove the
directory` fmbfiodledfjldlhiemaadmgppoeklbn from %LocalAppData%\Google\Chrome\User Data\Default\Extensions\`

**Step 2 –** Remove the
directory` fmbfiodledfjldlhiemaadmgppoeklbn from %LocalAppData%\Microsoft\Edge\User Data\Default\Extensions\`

**Step 3 –** Logoff and Re-logon to the client machine. (A true logoff and log on is required.)

Here is a PowerShell script that can be used with Endpoint Policy Manager Scripts Manager which goes
into the Chrome or Edge folder and deletes all the details for the extension.

PowerShell Scripts for Google Chrome and Microsoft Edge Chromium:

Google Chrome:

```
$users = Get-ChildItem C:\Users
foreach ($user in $users){$folder = "$($user.fullname)\AppData\Local\Google\Chrome\User Data\Default\Extensions\fmbfiodledfjldlhiemaadmgppoeklbn"
If (Test-Path $folder) {Remove-Item $folder -Recurse -Force -ErrorAction silentlycontinue } }
```

Microsoft Edge:

```
$users = Get-ChildItem C:\Users
foreach ($user in $users){$folder = "$($user.fullname)\AppData\Local\Microsoft\Edge\User Data\Default\Extensions\fmbfiodledfjldlhiemaadmgppoeklbn"
If (Test-Path $folder) {Remove-Item $folder -Recurse -Force -ErrorAction silentlycontinue } }
```

## Deploy these PowerShell scripts using Endpoint Policy Scripts Manager:

These are the locations and directories of the Endpoint Policy Manager Browser Router Extension that
will be removed when PS script is deployed with PP Scripts Manager.

**Step 1 –** BR Extension folder location.

![870_1_image-20220217002324-1](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/870_1_image-20220217002324-1.webp)

**Step 2 –** Create a User-side PP Scripts Manager policy. Use the Google Chrome PS script from PS
Scripts section.

![870_2_image-20220217002324-2](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/870_2_image-20220217002324-2.webp)

**Step 3 –** Create a User-side PP Scripts Manager policy. Use the Microsoft Edge PS script from PS
Scripts section.

![870_3_image-20220217002324-3](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/870_3_image-20220217002324-3.webp)

**Step 4 –** At next `GPUPDATE `or when`/FORCE`switch is used the respective folders for the
extension will be removed.

**Step 5 –** At next logon and Chrome or Edge restart, the Endpoint Policy Manager Browser Router
extension with the single (correct) manifest will return.

**Step 6 –** Verify the Endpoint Policy Manager Browser Router extension of each Browser as shown
below.

Microsoft Edge:

![870_4_image-20220217002324-4](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/870_4_image-20220217002324-4.webp)

Google Chrome:

![870_5_image-20220217002324-5](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/870_5_image-20220217002324-5.webp)

Use this Endpoint Policy Manager Scripts Manager policy to mass deploy for any future issues.


