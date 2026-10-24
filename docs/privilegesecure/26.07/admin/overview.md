---
title: "Administration overview"
description: "Learn what Privilege Secure administrators do day to day and find the console pages for sessions, users, roles, credentials, auditing, and service health."
sidebar_position: 10
---

# Administration overview

Administrators run Netwrix Privilege Secure day to day. They watch and control sessions, decide who can sign in to the console, delegate responsibilities through roles, keep credentials rotating, review the audit trail, and check that the services are healthy.

This section assumes you have installed the product and signed in to the console at `https://<nps-server>:6500` for the first time. See [Sign in to the console](/docs/privilegesecure/26_07/user-guide/sign-in).

## Roles and permissions

The built-in roles are Administrators, Users, Reviewers, and Auditors. You can assign a person more than one role, and the permissions are cumulative. If one of the roles is Administrator, you don't need to add an Auditors role, because administrators can already see all session history.

The product has no Approver role. The approvers for a session request are the users and groups named in an approval tier of the connection profile. See [Approval workflows](/docs/privilegesecure/26_07/configuration/access-policies/approval-workflows).

**Admin View Read Only** is a permission that lets auditors see the console without changing anything. See [Give auditors read-only console access](/docs/privilegesecure/26_07/admin/roles/admin-view-read-only).

For the full list of roles and what each can do, see [Roles and permissions](/docs/privilegesecure/26_07/admin/roles).

## Administrative tasks

| Task | Where to start |
|---|---|
| Watch, lock, or end sessions in progress, and review past sessions | [Dashboard](/docs/privilegesecure/26_07/admin/sessions/dashboard) |
| Add users and groups, create local and application users, and check license use | [Users and groups](/docs/privilegesecure/26_07/admin/users-groups) |
| Assign built-in roles or create a custom role | [Roles and permissions](/docs/privilegesecure/26_07/admin/roles) |
| Manage, rotate, and verify credentials | [Credentials](/docs/privilegesecure/26_07/admin/credentials/overview) |
| Review the activity log, events, change history, log files, and reports | [Auditing and reporting overview](/docs/privilegesecure/26_07/admin/audit-reporting) |
| Check service health and scheduled system jobs | [Monitor service nodes](/docs/privilegesecure/26_07/admin/service-nodes) |
| Add and maintain servers, domains, websites, and other resources | [Resources](/docs/privilegesecure/26_07/resources/overview) |
| Manage the Remote Access Gateway for sessions from outside the network | [Remote Access Gateway overview](/docs/privilegesecure/26_07/remote-access-gateway/overview) |

## Daily policy maintenance

Access policies and activities control what users can do. You set them up once and then adjust them as needs change. Maintain them on these pages:

- [Access policies](/docs/privilegesecure/26_07/configuration/access-policies/overview)
- [Activities](/docs/privilegesecure/26_07/configuration/activities)
