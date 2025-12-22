---
title: "Create Access Certification Job"
description: "Create Access Certification Job"
sidebar_position: 20
---

# Create Access Certification Job

Creates the AccessCertification Job.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

**<CreateAccessCertificationJob DisplayName_L1="95: Execute Access Reviews" JobIdentifier="New_Access_Certif"/>**

```

## Properties

| Property                | Type   | Description                                                                                                    |
| ----------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional | String | Display name of the scaffolding in language 1 (up to 16).                                                      |
| JobIdentifier optional  | String | For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |

## Child Elements

The list of child elements includes the following:

- AddTask (optional) — Add a task before or after another in the job
- CronTabExpression (optional) — Schedule the job

### AddTask

| Property                       | Type    | Description                                                                                                |
| ------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| Task required                  | String  | Identifier of the task to add.                                                                             |
| TaskToCompareWith required     | String  | The identifier of the task before or after which the new task will be inserted.                            |
| After default value: false     | Boolean | For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith.  |
| Before default value: false    | Boolean | For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |
| CopyOccurence default value: 0 | Int32   | For Argument AddTask, Specify the Occurence to copy and add the Task in a specify Job.                     |
| Occurence default value: 0     | Int32   | Occurrence of the TaskToCompare after or before which the task will be added                               |

### CronTabExpression

| Property              | Type         | Description                                                                                        |
| --------------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| CronTab required      | String       | Represents the argument value.                                                                     |
| CronTimeZone optional | CronTimeZone | For Argument AddTask, Occurence of the TaskToCompare after or before which the task will be added. |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<Job Identifier="New_Access_Certif" DisplayName_L1="95: Execute Access Reviews" DisplayName_L2="95: Exécution des campagnes de certification" CronTabExpression="*/15 * * * *" CronTimeZone="ServerTime">
  <UpdateAccessCertificationCampaignTask Identifier="New_Access_Certif_UpdateAccessCertificationCampaign" DisplayName_L1="Update Access Certification Campaign" DisplayName_L2="Mise à jour des campagnes de certifications" Level="0" />
  <SetAccessCertificationReviewerTask Identifier="New_Access_Certif_SetAccessCertificationReviewer" DisplayName_L1="Set Access Certification Reviewer" DisplayName_L2="Mise à jour des valideurs pour la certification" Level="1" />
  <SendAccessCertificationNotificationTask Identifier="New_Access_Certif_SendAccessCertificationNotification" DisplayName_L1="Send Access Certification Notifications" DisplayName_L2="Envoi des notifications pour la certification" Level="2" />
  <ProcessAccessCertificationItemsTask Identifier="New_Access_Certif_ProcessAccessCertificationItems" DisplayName_L1="Process Access Certification Decisions" DisplayName_L2="Traitement des décisions pour la certification" Level="3" />
</Job>

```
