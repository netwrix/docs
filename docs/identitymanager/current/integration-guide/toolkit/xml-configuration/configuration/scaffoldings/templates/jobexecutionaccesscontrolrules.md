---
title: "JobExecutionAccessControlRules"
description: "Assigns a set of rights to a given profile to execute any job, and view all job instances, task instances and logs."
sidebar_position: 5
---

This scaffolding assigns a set of rights to a given profile to execute any job, and view all job instances, task instances and logs.

The scaffolding generates the following scaffoldings:

- [Job View Access Control Rules](../templates/jobviewaccesscontrolrules)

Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs.
- [Run Job Administration Access Control Rules](../accesscontrolrules/jobs/runjobadministrationaccesscontrolrules)

Generates the permissions to launch jobs from UI for a given profile.
- [Run Job Notification Access Control Rules](../accesscontrolrules/jobs/runjobnotificationaccesscontrolrules)

Generates access control to send notification when job finish with an error state.
- [Run Job Repair Administration Access Control Rules](../accesscontrolrules/jobs/runjobrepairadministrationaccesscontrolrules)

Generates the permissions to launch from UI jobs that are in state blocked after a Provisioning or a synchronization for a given profile.
- [Run Job Repair Notification Access Control Rules](../accesscontrolrules/jobs/runjobrepairnotificationaccesscontrolrules)

Generates access control to send notification when a relaunch job finish with an error state.


## Examples
The following example assigns to the `Administrator` profile the rights to execute all jobs and view job instances, task instances and logs:

```xml
<JobExecutionAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<JobViewAccessControlRules Id="6" Profile="Administrator" />
<RunJobAdministrationAccessControlRules Id="10" Profile="Administrator" />
<RunJobNotificationAccessControlRules Id="11" Profile="Administrator" />
<RunJobRepairAdministrationAccessControlRules Id="12" Profile="Administrator" />
<RunJobRepairNotificationAccessControlRules Id="13" Profile="Administrator" />

```