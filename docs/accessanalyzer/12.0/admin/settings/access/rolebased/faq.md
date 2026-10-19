---
title: "Role Based Access: FAQ"
description: "Role Based Access: FAQ"
sidebar_position: 90
---

# Role Based Access: FAQ

This topic lists some commonly asked questions about Role Based Access functionality in Access
Analyzer.

**How do locked jobs affect the role functionality?**

A lock on a job represents the approval by the Job Approver, and is therefore deemed acceptable to
execute. Once a job is locked, Job Builders can no longer modify the job configuration. Furthermore,
only locked jobs can be run. Therefore, the Job Initiator can only run or schedule jobs which have
already been locked.

:::note
Locked jobs don't affect the functionality of the Administrator role. See the
[Role Definitions](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/roledefinitions.md) topic for more information.
:::


How does Access Analyzer protect a lock on a job from tampering through the associated XML file?

The Scheduling Service Account provides limited rights for the Job Approver. Previously, the Job
Approver required permissions on the Jobs folder to apply the lock to a job. Now, Access Analyzer
uses the credentials specified in the Scheduling Service Account to apply the locks. Therefore,
the Job Approver no longer needs access to the Jobs folder and can't manually remove or tamper with
the associated XML file.

:::note
If the Schedule Service Account uses a Job Initiator's credentials, all jobs must be
locked before they run. See the [Role Definitions](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/roledefinitions.md) and
[Roles & the Schedule Service Account](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/scheduleserviceaccount.md) topics for more information.
:::


Why can the Host Management Administrator not manage settings for the Host Discovery and Host
Inventory nodes under Settings?

The Host Management Administrator role is designed specifically to access the Host Management node.
Therefore, this role doesn't grant access to the global settings menu under the Settings node.

:::note
to access this node, the user must have either the Administrator or the Global
Options Administrator role. See the [Role Definitions](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/roledefinitions.md) topic for more
information.
:::


What rights does the user need on the local machine to use Access Analyzer?

Enabling Role Based Access removes the necessity to explicitly provide users rights on the Access
Analyzer folder structure. Instead, when the Administrator role is first assigned and Role Based
Access is enabled, Access Analyzer creates a new local group called NEAUsers on the Access Analyzer
Console server. Access Analyzer grants the NEAUsers group the necessary permissions on the Access Analyzer application directory.
When you assign a user a role, Access Analyzer adds them to the NEAUsers group to give them the
necessary access to Access Analyzer.

See the [Assign User to Role Members](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/assignroles.md) topic for additional information.

When a user’s role is changed, when does the new role take affect?

If you change a user's role while they're in an active Access Analyzer session, the user must
exit the Access Analyzer Console and re-open the application for the new role to take effect. This
is also true if you give a user an additional role or remove them from role membership. The
capabilities of the new role don't take effect until the user restarts the Access Analyzer
application.

:::note
See the
[Edit Role Members' Responsibilities](assignroles.md#edit-role-members-responsibilities) and
[Delete Role Member](assignroles.md#delete-role-member) topics for more information.
:::


A job was locked, but it now appears unlocked. Why?

A locked job signifies that the Job Approver approved the job for execution and that no one should
modify it. If anyone modifies a job in any way, Access Analyzer immediately removes the lock.
Although most roles shouldn't be able to modify locked jobs, the Administrator role can, because
Role Based Access limitations don't govern this role. Thus, if an Administrator modifies a locked
job, the job becomes unlocked. The Access Analyzer Event Log records this event as a job-change-related
event performed by the Administrator.

:::note
If the Schedule Service Account uses a Job Initiator's credentials, all jobs must be
locked before they can execute. See the [Role Definitions](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/roledefinitions.md),
[Workflow with Role Based Access Enabled](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/workflow.md), and [Roles and the Event Log](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/eventlog.md)
topics for more information.
:::


What should be the group type when assigning Role Based Access to an AD group in a multi-domain
environment?

When assigning Role Based Access to an AD group, consider the domain
relationship between the AD group and the Access Analyzer server.

If the Access Analyzer server and the AD group are in different domains then the AD group must be a
universal group. If the group type isn't universal, RBA can't access the user's group membership,
and the user in that AD group can't view any reports.

However, if both the Access Analyzer server and the AD group are in the same domain, the AD group
can be either a local group, global group, or universal group.
