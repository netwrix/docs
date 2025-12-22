---
description: >-
  Learn how to configure Mixed Version Mode in Netwrix Threat Prevention
  Enterprise Manager, including how the Pre735Port key and root.dat certificate
  control mixed mode and how to enable or disable it.
keywords:
  - mixed version mode
  - Threat Prevention
  - Enterprise Manager
  - Pre735Port
  - root.dat
  - SIEnterpriseManager
  - agent authentication
  - port 3741
products:
  - threat-prevention
sidebar_label: How To Configure Mixed Version Mode in Threat Prev
tags: []
title: "How To Configure Mixed Version Mode in Threat Prevention"
knowledge_article_id: kA04u0000000HwKCAU
---

# How To Configure Mixed Version Mode in Threat Prevention

## What is mixed version mode?

Netwrix Threat Prevention 7.3.5 introduced some new enhancements to agent authentication which use a new default port (3741). This is required because two different certificate handshakes are required.

Mixed version mode is enabled by default when you upgrade from Threat Prevention versions between 7.0.1 and 7.3.0. This helps customers by enabling them to upgrade their Enterprise Manager while still managing these older agents.

It is important to disable mixed version mode on the Enterprise Manager when all agents have been upgraded and confirmed working.

## How to configure mixed version mode

There are two key components which control the configuration of mixed version mode:

- The Pre735Port key located in the `SIEnterpriseManager.exe.config` and in most circumstances will look like this
  - This controls the port which is listened on
  - Setting this to `0` will disable the listener
  - If this key is not in the config file then `Pre735Port` has never been enabled.
- The `root.dat` certificate located in `SIEnterpriseManager\CertsInfo`
  - This must be in this location for mixed version mode to authenticate agents correctly
  - The `root.dat` can be safely deleted when there are no more SI Agents installed which are below version 7.3.5.

### Disabling Mixed Version Mode

1. Browse to the Threat Prevention Enterprise Manager Installation Directory. This defaults to `C:\Program Files\Stealthbits\StealthINTERCEPT\SIEnterpriseManager`
2. Open `SIEnterpriseManager.exe.config` in notepad
3. Edit the `Pre735Port` key value to be `0` to disable the listener
4. Save the `SIEnterpriseManager.exe.config`
5. Browse to the `CertsInfo` folder in the `SIEnterpriseManager` location found in step 1.
6. Restart the `SIEnterpriseManager` service
7. Confirm that `SIEnterpriseManager` is no longer listening on the Pre735Port. This can be completed with this PowerShell command:

```powershell
Get-NetTCPConnection -OwningProcess (Get-Process SIEnterpriseManager).id -State Listen
```

8. Delete the `root.dat` from the `CertsInfo` folder to fully remove mixed version mode

**Note: If you do not do this then when installing a later update on the enterprise manager the installation may re-enable this functionality**

### Enabling Mixed Version Mode

1. Browse to the Threat Prevention Enterprise Manager Installation Directory. This defaults to `C:\Program Files\Stealthbits\StealthINTERCEPT\SIEnterpriseManager`
2. Open `SIEnterpriseManager.exe.config` in notepad
3. Edit the `Pre735Port` key value from `0` to the previous port used (default `3739`)
4. Save the `SIEnterpriseManager.exe.config`
5. Browse to the `CertsInfo` folder in the `SIEnterpriseManager` location found in step 1.
6. Ensure the `root.dat` is present
7. Restart the `SIEnterpriseManager` service
8. Confirm that `SIEnterpriseManager` is listening on the Pre735Port. This can be completed with this PowerShell command:

```powershell
Get-NetTCPConnection -OwningProcess (Get-Process SIEnterpriseManager).id -State Listen
```
