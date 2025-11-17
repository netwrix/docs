---
description: >-
  Shows how to apply a Windows product key to the Netwrix Virtual Appliance and
  how to convert the Windows evaluation edition to a retail or volume-licensed
  edition using DISM and slmgr.vbs.
keywords:
  - license
  - virtual appliance
  - Windows Server
  - product key
  - DISM
  - GVLK
  - activation
  - evaluation
  - volume license
products:
  - auditor
sidebar_label: How to apply the license to Virtual Appliance
tags: []
title: "How to apply the license to Virtual Appliance"
knowledge_article_id: kA00g000000H9V4CAK
---

# How to apply the license to Virtual Appliance

## Scenario

I have downloaded the Netwrix Virtual Appliance but when I am trying to apply a Windows product key, I get the following message: "**That key can't be used to activate this edition of Windows. Please try a different key.**" or "**This edition cannot be upgraded**""

## Solution

The Netwrix Virtual Appliance is distributed with a 180-day evaluation version of Windows Server. You have to use your own product key purchased from Microsoft for activation. The Key must be of `Retail` version, Volume Licensed keys follow a different procedure. Prior to applying the key, evaluation version must be converted to a Standard or Datacenter version. In order to do that, please perform the following steps:

1. Launch command prompt **as administrator**
2. Execute the following command: `DISM /online /Get-CurrentEdition.` Confirm that the Current Edition includes the word 'Eval'
3. Execute the command `DISM /online /Get-TargetEditions ` to get the list of possible upgrade options
4. Execute `DISM /online /Set-Edition:<edition ID> /ProductKey:[enter your product key here] /AcceptEula`, providing the edition ID from the previous step and a retail product key.

The server will restart twice.

**NOTE**, the process might take some time. Do not terminate it - wait until it completes. Afterward, you can apply the product key as usual.

### Volume-Licensed Activation

If you have `Volume Licensed` key, you can convert your Evaluation version to Retail version, after conversion, you can apply any product key.

To convert you need to select an appropriate Generic Volume License Key (GVLK) from [Microsoft Website](https://docs.microsoft.com/en-us/windows-server/get-started/kms-client-activation-keys) that matches your version of Windows Server.

Conversion Example for Windows Server 2019 Standard:

| Command | Description |
|---|---|
| `dism /online /set-edition:ServerStandard /productkey:N69G4-B89J2-4G8F4-WWYCC-J464C /accepteula` | Applies GVLK and converts to an appropriate ver. of OS. The Execution of Command might take up to 30 minutes |
| `slmgr.vbs /upk ` | Removes GVLK from OS |
| `slmgr.vbs /cpky` | Removes GVLK from OS |
| `slmgr.vbs /ipk XXXXX-XXXXX-XXXX-XXXXX-XXXXX` | Applies VL key |
| `slmgr.vbs /ato` | forced activation |

XXXXX-XXXXX-XXXX-XXXXX-XXXXX - is a VL key.
