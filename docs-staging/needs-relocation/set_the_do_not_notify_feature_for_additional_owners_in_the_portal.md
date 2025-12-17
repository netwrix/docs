---
description: >-
  This article explains how to set the Do Not Notify feature for additional owners in Netwrix Directory Manager, allowing you to restrict email notifications for group changes.
keywords:
  - Directory Manager
  - Do Not Notify
  - Additional Owners
sidebar_label: Set Do Not Notify for Additional Owners
tags: []
title: "Set the Do Not Notify Feature for Additional Owners in the Portal"
knowledge_article_id: kA0Qk0000002R2XKAU
products:
  - directorymanager
---

# Set the Do Not Notify Feature for Additional Owners in the Portal

## Applies To

Directory Manager 11

## Overview

Netwrix Directory Manager (formerly GroupID) allows you to restrict individual additional owners from receiving email notifications for group changes. The **Do Not Notify** feature can be set for additional owners, so they do not receive notification emails, including those triggered by workflow actions. You can configure this feature using the Directory Manager Portal or the Management Shell.

## Instructions

### Set Do Not Notify for Additional Owners Using the Portal

1. Log in to the Directory Manager Portal.
2. Go to the **Properties** of the group for which you want to set **Do Not Notify**.
3. Click the **Owner** tab. You will see a check box next to each **Additional Owner** in the grid.
4. Select the check box to set **Do Not Notify** for the required additional owners and click **Save**.

![Do Not Notify option for additional owners in Directory Manager Portal](../0-images/servlet_image_99952a342a08.png)

### Set Do Not Notify for Additional Owners Using the Management Shell

> **NOTE:** Before running these cmdlets in your production environment, it is recommended to test them on sample groups to verify the results.

The **Do Not Notify** feature can also be set using the Management Shell with the **NotifyOptOutAdditionalOwners** parameter. This parameter is part of the **Additional Owner** attribute and cannot be set independently. You can set **Do Not Notify** while adding new additional owners or by modifying existing ones.

### Set Do Not Notify for New Additional Owners

```powershell
Set-Group -Identity "Group Name" -Add @{"AdditionalOwners" = "Name of the Additional Owner"} -NotifyOptOutAdditionalOwners "Name of the Additional Owner"
```

### Set Do Not Notify for Existing Additional Owners

```powershell
Set-Group -Identity "Group Name" -Replace @{"AdditionalOwners" = "Name of the Additional Owner","Name of the Additional Owner"} -NotifyOptOutAdditionalOwners "Name of the Additional Owner"
```

### Bulk Set Do Not Notify for All Additional Owners

```powershell
$i=Get-Group -Identity "Group Name"| Select -ExpandProperty AdditionalOwner
foreach($j in $i.split(",")){
    Set-Group -Identity "Group Name" -Replace @{"AdditionalOwners" = $j,$j} -NotifyOptOutAdditionalOwners $j
}
```