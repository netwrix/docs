---
title: "Job Execution Access Control Rules"
description: "Job Execution Access Control Rules"
sidebar_position: 50
---

# Job Execution Access Control Rules

This scaffolding assigns a set of rights to a given profile to execute any job, and view all job
instances, task instances and logs.

The scaffolding generates the following scaffoldings:

- [Job View Access Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/templates/jobviewaccesscontrolrules/index.md): Scaffolding to generate
  a set of rights to view all JobInstances, TaskInstances and logs.
- [RunJobAdministrationAccessControlRules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/runjobadministrationaccesscontrolrules/index.md):
  Generates the permissions to launch jobs from UI for a given profile.
- [RunJobNotificationAccessControlRules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/runjobnotificationaccesscontrolrules/index.md):
  Generates access control to send notification when job finish with an error state.
- [RunJobRepairAdministrationAccessControlRules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/runjobrepairadministrationaccesscontrolrules/index.md):
  Generates the permissions to launch from UI jobs that are in state blocked after a Provisioning or
  a synchronization for a given profile.
- [RunJobRepairNotificationAccessControlRules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/runjobrepairnotificationaccesscontrolrules/index.md):
  Generates access control to send notification when a relaunch job finish with an error state.

## Examples

The following example assigns to the `Administrator` profile the rights to execute all jobs and view
job instances, task instances and logs:

```

**<JobExecutionAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<JobViewAccessControlRules Id="6" Profile="Administrator" /><RunJobAdministrationAccessControlRules Id="10" Profile="Administrator" /><RunJobNotificationAccessControlRules Id="11" Profile="Administrator" /><RunJobRepairAdministrationAccessControlRules Id="12" Profile="Administrator" /><RunJobRepairNotificationAccessControlRules Id="13" Profile="Administrator" />

```
