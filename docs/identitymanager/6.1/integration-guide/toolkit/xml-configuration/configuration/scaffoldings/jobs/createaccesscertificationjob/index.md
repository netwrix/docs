---
title: "CreateAccessCertificationJob"
description: "CreateAccessCertificationJob"
sidebar_position: 20
---

# CreateAccessCertificationJob

Creates the AccessCertification Job.

## Examples

```

**<CreateAccessCertificationJob DisplayName_L1="95: Execute Access Reviews" JobIdentifier="New_Access_Certif"/>**

```

## Properties

| Property                | Details                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional | **Type** String **Description** Display name of the scaffolding in language 1 (up to 16).                                                      |
| JobIdentifier optional  | **Type** String **Description** For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |

## Child Elements

- [AddTask](#addtask) (optional) Add a task before or after another in the job
- [CronTabExpression](#crontabexpression) (optional) Schedule the job
- [DoNotCreateJob](#donotcreatejob) (optional) Create only the tasks without the job

### AddTask

| Property                       | Details                                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Task required                  | **Type** String **Description** Identifier of the task to add                                                                               |
| TaskToCompareWith required     | **Type** String **Description** The identifier of the task before or after which the new task will be inserted                              |
| After default value: false     | **Type** Boolean **Description** For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith.  |
| Before default value: false    | **Type** Boolean **Description** For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |
| CopyOccurence default value: 0 | **Type** Int32 **Description** For Argument AddTask, Specify the Occurence to copy and add the Task in a specify Job.                       |
| Occurence default value: 0     | **Type** Int32 **Description** Occurence of the TaskToCompare after or before which the task will be added                                  |

### CronTabExpression

| Property              | Details                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| CronTab required      | **Type** String **Description** Represents the argument value.                                                                           |
| CronTimeZone optional | **Type** CronTimeZone **Description** For Argument AddTask, Occurence of the TaskToCompare after or before which the task will be added. |

### DoNotCreateJob

## Generated XML

Our example generates the following configuration:

```

<Job Identifier="New_Access_Certif" DisplayName_L1="95: Execute Access Reviews" DisplayName_L2="95: Ex�cution des campagnes de certification" CronTabExpression="*/15 * * * *" CronTimeZone="ServerTime">  <UpdateAccessCertificationCampaignTask Identifier="New_Access_Certif_UpdateAccessCertificationCampaign" DisplayName_L1="Update Access Certification Campaign" DisplayName_L2="Mise � jour des campagnes de certifications" Level="0" />  <SetAccessCertificationReviewerTask Identifier="New_Access_Certif_SetAccessCertificationReviewer" DisplayName_L1="Set Access Certification Reviewer" DisplayName_L2="Mise � jour des valideurs pour la certification" Level="1" />  <SendAccessCertificationNotificationTask Identifier="New_Access_Certif_SendAccessCertificationNotification" DisplayName_L1="Send Access Certification Notifications" DisplayName_L2="Envoi des notifications pour la certification" Level="2" />  <ProcessAccessCertificationItemsTask Identifier="New_Access_Certif_ProcessAccessCertificationItems" DisplayName_L1="Process Access Certification Decisions" DisplayName_L2="Traitement des d�cisions pour la certification" Level="3" /></Job>

```
