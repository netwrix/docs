---
title: "How-to troubleshoot LPM rules for Kaseya Agent Service?"
description: "How-to troubleshoot LPM rules for Kaseya Agent Service?"
sidebar_position: 150
---

# How-to troubleshoot LPM rules for Kaseya Agent Service?

It seems that the Kaseya Agent service starts before the Netwrix Endpoint Policy Manager (formerly
PolicyPak) services, which means Endpoint Policy Manager never witnesses Kaseya Agent Service
(AgentMon.exe) spawning, so LPM never evaluates if it matches any defined policy.

The owner of the "AgentMon.exe" is on the SecureRun list, the service can start, but then there it
isn't matching the policy which would allow it to spawn child processes that are allowed.

We are going to make the Kaseya service depend on the Endpoint Policy Manager services.

Since we only need to do this if Endpoint Policy Manager exists, we'll use Endpoint Policy Manager
Script Manager to run a PowerShell script to enable the service dependencies (if Kaseya also
exists).

Upon rebooting the machine all of the Kaseya actions should match the created policies and child
processes are allowed as intended.

PS: Kaseya Agent service' display name should be same as in the script. Please confirm and edit if
it's different in your environment.

Steps:

**Step 1 –** Create a Endpoint Policy Manager Scripts Manager policy under Computer container

![873_1_image-20211130233051-1](/images/endpointpolicymanager/troubleshooting/leastprivilege/873_1_image-20211130233051-1.webp)

**Step 2 –** Select PowerShell script from the drop-down at On apply action window and paste the
PowerShell script from below.

![873_2_image-20211130233051-2](/images/endpointpolicymanager/troubleshooting/leastprivilege/873_2_image-20211130233051-2.webp)

**Step 3 –** Select ‘Once or when forced' at Specify process mode window.

![873_3_image-20211130233051-3](/images/endpointpolicymanager/troubleshooting/leastprivilege/873_3_image-20211130233051-3.webp)

**Step 4 –** Finish the Wizard to complete the policy creation.

Optional:

- Revert script when policy no longer applies or you do not need Endpoint Policy Manager services
  dependencies for Kaseya Agent Service.

  ![873_4_image-20211130233051-4](/images/endpointpolicymanager/troubleshooting/leastprivilege/873_4_image-20211130233051-4.webp)

\*\*\*\*\* Powershell 'apply' script:

```
$svcKaseya = (Get-Service -DisplayName "Kaseya Agent" | Select -Property Name).Name
$svcPPHelper = "PPExtensionSvc*"
$svcPPWatcher = "PPWatcherSvc*"
if ($svc = @(get-service $svcKaseya -ea 0)) {
# if Kaseya Service has no dependents currently
if (-not $svc.ServicesDependedOn) {
# Build the list of PolicyPak service names
$svcListPP = @()
if ($svc = @(get-service $svcPPHelper -ea 0)) {
foreach ($s in $svc.Name) {
$svcListPP += $s
}
}
if ($svc = @(get-service $svcPPWatcher -ea 0)) {
foreach ($s in $svc.Name) {
$svcListPP += $s
}
}
$svcListPP = $svcListPP -join "/"
# Set the Kaseya service to depend on the PolicyPak services
& cmd /c sc config $svcKaseya depend= $svcListPP
# Restart the kaseya agent service
Restart-Service $svcKaseya
}
}
```

\*\*\*\*\*\*Powershell ‘revert' script:

```
$svcKaseya = (Get-Service -DisplayName "Kaseya Agent" | Select -Property Name).Name
& cmd /c sc config $svcKaseya depend= /
```


