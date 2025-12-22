---
title: "RunJobNotificationAccessControlRules"
description: "RunJobNotificationAccessControlRules"
sidebar_position: 90
---

# RunJobNotificationAccessControlRules

Generates access control to send notification when job finish with an error state.

## Examples

```

**<RunJobNotificationAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Job_RunJobLaunch_Notification_Errored" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/RunJob/Launch/Errored" /></AccessControlRule>

```
