---
description: >-
  Netwrix Data Classification may display a "Keyset does not exist ( exception
  from HRESULT : 0x80090016)" error. This article explains how to regenerate the
  machine keys without reinstalling IIS.
keywords:
  - Keyset does not exist
  - HRESULT 0x80090016
  - MachineKeys
  - IIS
  - applicationhost.config
  - Netwrix Data Classification
  - iissetup
  - configProtectedData
products:
  - data-classification
sidebar_label: 'Keyset does not exist ( exception from HRESULT : 0'
tags:
  - troubleshooting-and-errors
title: 'Keyset does not exist ( exception from HRESULT : 0x80090016)'
knowledge_article_id: kA04u000000XmHFCA0
---

# Keyset does not exist ( exception from HRESULT : 0x80090016)

## Scenario

Netwrix Data Classification displays the following error:

```text
Error: There was an error while performing this operation.
Details:
Keyset does not exist ( exception from HRESULT : 0x80090016)
```

## Solution

You can regenerate these machine keys without reinstalling IIS completely. To do that follow the steps below:

1. Rename the files listed below or move them to a different location from `C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys\`
   - `iisConfigurationKey 6de9cb26d2b98c01ec4e9e8b34824aa2_GUID`
   - `NetFrameworkConfigurationKey d6d986f09a1ee04e24c949879fdb506c_GUID`
   - `iisWasKey 76944fb33636aeddb9590521c2e8815a_GUID`

2. Backup `applicationhost.config`, then delete everything inside the tags below in `applicationhost.config`. Delete the contents within the `configProtectedData` or `providers` sections:

```xml
<configProtectedData>
    <providers>
    ...
    </providers>
</configProtectedData>
```

3. Open a command prompt in admin mode and run the command below:

```text
"%windir%\system32\inetsrv\iissetup.exe /install SharedLibraries"
```

4. Keys should be recreated in the `C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys\` folder. Now the IIS App pool user can be changed.

These steps, along with more information, can be found here as well: https://techcommunity.microsoft.com/t5/iis-support-blog/keyset-does-not-exist-exception-from-hresult-0x8009000d-or-or/ba-p/342955
