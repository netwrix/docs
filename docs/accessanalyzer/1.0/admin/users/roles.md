---
title: "Roles and Permissions"
description: "Admin and Viewer role definitions and access levels"
sidebar_position: 20
---

# Roles and Permissions

Access Analyzer uses a role-based access control model with two built-in roles. Each user is assigned exactly one role at account creation, which determines their access level throughout the application.

## Role Definitions

| Capability | Administrator | Viewer |
|---|---|---|
| View dashboards and reports | Yes | Yes |
| View sources, scans, and results | Yes | Yes |
| Create, edit, and delete sources | Yes | No |
| Create, schedule, and run scans | Yes | No |
| Manage service accounts | Yes | No |
| Configure sensitive data rules | Yes | No |
| Manage users and roles | Yes | No |
| Modify application settings | Yes | No |
| View audit logs | Yes | Yes |
| Export audit logs | Yes | No |

## Administrator

The **Administrator** role grants full access to all features, including user management, source configuration, scan execution, settings, and audit log exports. At least one administrator account must exist in the system.

## Viewer

The **Viewer** role provides read-only access to dashboards, scan results, source listings, and audit logs. Viewers cannot create, modify, or delete any resources.

:::note
Role assignments can be changed at any time by an administrator through the user edit form.
:::
