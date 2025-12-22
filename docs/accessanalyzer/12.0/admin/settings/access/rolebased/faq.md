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
Locked jobs do not affect the functionality of the Administrator role. See the
[Role Definitions](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/roledefinitions.md) topic for more information.
:::


How can I make sure that a lock on a job will not get tampered with through the associated XML file?

The Scheduling Service Account provides limited rights for the Job Approver. Previously, the Job
Approver required permissions on the Jobs folder in order to apply the lock to a job. Now, the
credentials specified in the Scheduling Service Account will be used to apply the locks. Therefore,
the Job Approver no longer needs access to the Jobs folder and cannot manually remove or tamper with
the associated XML file.

:::note
If using a Job Initiator’s credentials for a Schedule Service Account, all jobs must be
locked in order for them to be executed. See the [Role Definitions](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/roledefinitions.md) and
[Roles & the Schedule Service Account](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/scheduleserviceaccount.md) topics for more information.
:::


Why can the Host Management Administrator not manage settings for the Host Discovery and Host
Inventory nodes under Settings?

The Host Management Administrator role is designed specifically to access the Host Management node.
Therefore, this role does not grant access to the global settings menu under the Settings node.

:::note
In order to access this node, the user must have either the Administrator or the Global
Options Administrator role. See the [Role Definitions](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/roledefinitions.md) topic for more
information.
:::


What rights do I need to give the user on the local machine in order to use Access Analyzer?

Enabling Role Based Access removes the necessity to explicitly provide users rights on the Access
Analyzer folder structure. Instead, when the Administrator role is first assigned and Role Based
Access is enabled, a new local group called NEAUsers is created on Access Analyzer Console server.
This NEAUsers group is given the necessary permissions on the Access Analyzer application directory.
When a user is assigned a role, they are added to the NEAUsers group to give them the necessary
access to Access Analyzer.

See the [Assign User to Role Members](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/assignroles.md) topic for additional information.

When a user’s role is changed, when does the new role take affect?

If a user’s role has been altered while they are in an active Access Analyzer session, the user must
exit the Access Analyzer Console and re-open the application for the new role to take effect. This
is also true if a user has been given an additional role or removed from role membership. The
capabilities of the new role will not come into effect until the Access Analyzer application has
been restarted.

:::note
See the
[Edit Role Members' Responsibilities](assignroles.md#edit-role-members-responsibilities) and
[Delete Role Member](assignroles.md#delete-role-member) topics for more information.
:::


I locked a job, but when going back to it, it appears to be unlocked. Why?

A locked job signifies that the job has been approved for execution and should not be modified. If a
job is modified in any way, the lock is immediately removed. Although most roles should not be able
to modify locked jobs, the Administrator role can. This role is not governed by the limitations of
Role Based Access. Thus, if a locked job is modified by an Administrator, the job will become
unlocked. This event will be logged as a job-change related event by Administrator in the Access
Analyzer Event Log.

:::note
If using a Job Initiator’s credentials for the Schedule Service Account, all jobs must be
locked in order for them to execute. See the [Role Definitions](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/roledefinitions.md),
[Workflow with Role Based Access Enabled](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/workflow.md), and [Roles and the Event Log](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/eventlog.md)
topics for more information.
:::


What should be the group type when assigning Role Based Access to an AD group in a multi-domain
environment?

When assigning an Role Based Access to an AD group, it is important to consider the domain
relationship between the AD group and the Access Analyzer server.

If the Access Analyzer server and the AD group are in different domains then the AD group must be a
universal group. If the group type is not universal then it will result in the RBA being unable to
access the user's group membership and the user who is a member of that AD group will be unable to
view any reports.

However, if both the Access Analyzer server and the AD group are in the same domain, the AD group
can be either a local group, global group, or universal group.
