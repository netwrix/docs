---
title: "Role Based Access: FAQ"
description: "Role Based Access: FAQ"
sidebar_position: 90
---

# Role Based Access: FAQ

This topic lists some commonly asked questions about Role Based Access functionality in Enterprise
Auditor.

**How do locked jobs affect the role functionality?**

A lock on a job represents the Job Approver's approval and therefore makes the job acceptable to
execute. Once a job is locked, Job Builders can no longer modify the job configuration. Furthermore,
Enterprise Auditor allows only locked jobs to run. Therefore, the Job Initiator can only run or
schedule jobs that have already been locked.

:::note
Locked jobs don't affect the functionality of the Administrator role. See the
[Role Definitions](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/roledefinitions.md)
topic for more information.
:::


How can you ensure that a lock on a job isn't tampered with through the associated XML file?

The Scheduling Service Account provides limited rights for the Job Approver. Previously, the Job
Approver required permissions on the Jobs folder to apply the lock to a job. Now,
Enterprise Auditor uses the credentials specified in the Scheduling Service Account to apply the
locks. Therefore,
the Job Approver no longer needs access to the Jobs folder and can't manually remove or tamper with
the associated XML file.

:::note
If using a Job Initiator’s credentials for a Schedule Service Account, all jobs must be
locked in order for them to be executed. See the
[Role Definitions](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/roledefinitions.md)
and
[Roles & the Schedule Service Account](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/scheduleserviceaccount.md)
topics for more information.
:::


Why can the Host Management Administrator not manage settings for the Host Discovery and Host
Inventory nodes under Settings?

The Host Management Administrator role provides access only to the Host Management node.
Therefore, this role doesn't grant access to the global settings menu under the Settings node.

:::note
to access this node, the user must have either the Administrator or the Global
Options Administrator role. See the
[Role Definitions](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/roledefinitions.md)
topic for more information.
:::


What rights do you need to give the user on the local machine to use Enterprise Auditor?

Enabling Role Based Access removes the necessity to explicitly provide users rights on the
Enterprise Auditor folder structure. Instead, when the Administrator role is first assigned and Role
Based Access is enabled, the roles will set permissions to allow all members of the local users
group the necessary access to Enterprise Auditor.

When an administrator changes a user's role, when does the new role take effect?

If an administrator has altered a user's role while the user is in an active Enterprise Auditor
session, the user must exit the Enterprise Auditor Console and re-open the application for the new
role to take effect. This is also true if an administrator has given a user an additional role or
removed the user from role membership. The capabilities of the new role don't come into effect
until the user restarts the Enterprise Auditor application.

:::note
See the
[Edit Role Members' Responsibilities](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/assignroles.md#edit-role-members-responsibilities)
and
[Delete Role Member](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/assignroles.md#delete-role-member)
topics for more information.
:::


A job was locked, but it appears unlocked when you go back to it. Why?

A locked job signifies that the Job Approver has approved the job for execution and that you
shouldn't modify it. If you modify a job in any way, Enterprise Auditor immediately removes the
lock. Although most roles shouldn't be able to modify locked jobs, the Administrator role can. This
role isn't governed by the limitations of Role Based Access. Thus, if an Administrator modifies a
locked job, the job becomes unlocked. Enterprise Auditor logs this event as a job-change-related
event performed by the Administrator in the Enterprise Auditor Event Log.

:::note
If using a Job Initiator’s credentials for the Schedule Service Account, all jobs must be
locked in order for them to execute. See the
[Role Definitions](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/roledefinitions.md),
[Workflow with Role Based Access Enabled](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/workflow.md),
and
[Roles and the Event Log](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/eventlog.md)
topics for more information.
:::


What should be the group type when assigning Role Based Access to an AD group in a multi-domain
environment?

When assigning Role Based Access to an AD group, consider the domain
relationship between the AD group and the Enterprise Auditor server.

If the Enterprise Auditor server and the AD group are in different domains then the AD group must be
a universal group. If the group type isn't universal, Role Based Access can't access the user's
group membership, and the user in that AD group can't view any reports.

However, if both the Enterprise Auditor server and the AD group are in the same domain, the AD group
can be either a local group, global group, or universal group.
