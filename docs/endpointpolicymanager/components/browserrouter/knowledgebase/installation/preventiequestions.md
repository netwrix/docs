---
title: "I'm using SCCM to deploy the PP CSE. I want to ensure that Internet Explorer is closed during the installation of PPBR to prevent IE questions of users if they are logged in. What should I do?"
description: "I'm using SCCM to deploy the PP CSE. I want to ensure that Internet Explorer is closed during the installation of PPBR to prevent IE questions of users if they are logged in. What should I do?"
sidebar_position: 20
---

# I'm using SCCM to deploy the PP CSE. I want to ensure that Internet Explorer is closed during the installation of PPBR to prevent IE questions of users if they are logged in. What should I do?

You can use the snippet of code within SCCM to test to see if IE is closed and then if it is, only
then install the PP CSE.

```
Do {$ieCheck = Get-Process iexplore -ErrorAction SilentlyContinueIf ($ieCheck -eq $null) {msiexec /i ‘PolicyPak Client-Side Extension x64.msi' /q#Write-Host ‘Installing'Start-Sleep -s 600Exit}else {#Write-Host ‘IE Open'Start-Sleep -s 600}} while ($ieCheck -ne $null)
```


