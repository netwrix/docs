---
title: "SendAccessCertificationNotificationTask"
description: "SendAccessCertificationNotificationTask"
sidebar_position: 160
---

# SendAccessCertificationNotificationTask

Notify assigned users having pending access certification items in campaign marked with
`NotificationNeeded`.

## Examples

```

  <SendAccessCertificationNotificationTask Identifier="SendAccessCertificationNotification" DisplayName_L1="Notify users having pending access certification items"/>

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |
