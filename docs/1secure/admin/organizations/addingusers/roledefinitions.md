---
title: "Permissions by Role"
description: "Permissions by Role"
sidebar_position: 10
---

# Permissions by Role

The following tables describe permissions by role for each type of screen or action.

## Roles

1Secure has the following roles:

| Role | Description |
| ---- | ----------- |
| System Administrator | Has full access to the system and is granted every permission. Tenant users can't assign this role. |
| Administrator | Administrators have full access rights within the organization. |
| Editor | Editors have modification access rights within the organization. |
| Viewer | Viewers have read only access rights within the organization. |
| Managed Tenant Manager | Managed organization Managers have the ability to manage tags and user access to child (managed) organizations. |
| Business Viewer | Business viewers have read-only access rights within the organization. |
| Co-managing Administrator | Co-managing administrators have the ability to manage business users and sources within the organization. |

When you add a user, you can assign System Administrator, Administrator, Editor, or Viewer as the
user's main role. The list omits System Administrator unless you are a System Administrator. It
omits Administrator unless you are an Administrator or above. Business Viewer and Co-managing
Administrator are business user roles, so the main role list excludes them.

You can assign the Co-managing Administrator role only when the BusinessAdministrators feature is
enabled and you aren't a Co-managing Administrator.

## Permissions Granted to Each Role

The permission names in the interface are User Management, Manage Business Users, Manage Tenancy
Groups, Manage Sources, Manage Sites, Manage Credentials, Manage Integrations, View Integrations,
Manage Managed Tenant, View Managed Tenant, Update Agent and Manage Saving Activity Record
Subscriptions.

| Role | Permissions granted |
| ---- | ------------------- |
| Administrator | Bulk User Add, Audit View, Dashboard Manage and View, User Manage, Risk Profile Manage, Tenancy Administration, Managed Tenant Manage, Product Manage, Alert Manage and View, Integrations Manage and View, Report Export, Activity Record Report Save, Agent Update, Subscription Manage, and manage Sources, Sites, Credentials, Business Users, and Tenancy Groups |
| Editor | Dashboard Manage and View, User Manage, Managed Tenant Manage, Alert View, Integrations View, Report Export, Activity Record Report Save, Subscription Manage, and manage Sources, Sites, Credentials, and Business Users |
| Viewer | Dashboard View |
| Business Viewer | Dashboard View and Report Export |
| Co-managing Administrator | Dashboard View, Sources, Sites, Credentials, Subscription Manage, Bulk User Add, Report Export, Agent Update, and manage Business Users |
| Managed Tenant Manager | Managed Tenant Manage, and manage Sources, Sites, Credentials, and Business Users |

Editors aren't granted Alert Manage, Agent Update, Integrations Manage, Tenancy Administration
(My organization), Risk Profile Manage, Bulk User Add, Tenancy Groups manage or Audit View.

A Business Viewer sees the organization dashboard and alerts, can run investigations and can view
predefined reports. Business viewers can't add reports on their own. A Co-managing Administrator
can configure organization sources and connectors and can add business viewers.

## Permissions Required for Pages

- Users page (**Configuration** > **Users**) – User Manage. Adding several users at once also
  requires Bulk User Add, which Editors don't hold.
- Organization groups page – Manage Tenancy Groups. Administrators and System Administrators hold
  this permission.
- My organization page and its settings, deletion, and authentication actions – Tenancy
  Administration. Only Administrators hold this permission.
- Business users tab (add, edit, and delete) – Manage Business Users. Adding or editing a business
  user also requires Bulk User Add.
- Creating a managed organization – Manage Managed Tenant.

## Permission Tables

## Alerts Overview

| Screen/Action       | MSP | Business Viewer | Co-managing Administrator |
| ------------------- | --- | --------------- | ------------------------- |
| **Alerts Overview** | Yes | Yes             | No                        |
| Switch Organization | Yes | No              | No                        |
| Edit Alert Settings | Yes | No              | No                        |
| Go to ARs           | Yes | Yes             | No                        |

## Configuration

| Screen/Action         | MSP | Business Viewer | Co-managing Administrator |
| --------------------- | --- | --------------- | ------------------------- |
| **Configuration**     | Yes | No              | Yes                       |
| Managed Organizations | Yes | No              | No                        |
| Users                 | Yes | No              | No                        |
| Alerts                | Yes | No              | No                        |
| Risk Profiles         | Yes | No              | No                        |
| Integrations          | Yes | No              | No                        |
| My Organization       | Yes | No              | No                        |
| Audit Logs            | Yes | No              | No                        |

## Configuration Credentials

| Screen/Action    | MSP | Business Viewer | Co-managing Administrator |
| ---------------- | --- | --------------- | ------------------------- |
| **Credentials**  | Yes | No              | Yes                       |
| Edit Credentials | Yes | No              | Yes                       |

## Configuration Sites/Agent

| Screen/Action                           | MSP | Business Viewer | Co-managing Administrator |
| --------------------------------------- | --- | --------------- | ------------------------- |
| **Sites**                               | Yes | No              | Yes                       |
| Edit Site                               | Yes | No              | Yes                       |
| Delete Site                             | Yes | No              | Yes                       |
| Update Agent                            | Yes | No              | Yes                       |
| Configure Agent (Update Config Details) | Yes | No              | Yes                       |
| Change Agent Update Schedule            | Yes | No              | Yes                       |

## Configuration Sources

| Screen/Action           | MSP | Business Viewer | Co-managing Administrator |
| ----------------------- | --- | --------------- | ------------------------- |
| **Sources**             | Yes | No              | Yes                       |
| Add Source              | Yes | No              | Yes                       |
| Edit Source             | Yes | No              | Yes                       |
| Delete Source           | Yes | No              | Yes                       |
| View Connectors         | Yes | No              | Yes                       |
| Edit Connector Settings | Yes | No              | Yes                       |
| Delete Connector        | Yes | No              | Yes                       |

## Configuration Users

| Screen/Action | MSP | Business Viewer | Co-managing Administrator |
| ------------- | --- | --------------- | ------------------------- |
| **Users**     | Yes | No              | No                        |
| Add User      | Yes | No              | only business viewers     |
| Edit User     | Yes | No              | only business viewers     |
| Delete User   | Yes | No              | only business viewers     |

## Organization Configuration

| Screen/Action                      | MSP | Business Viewer | Co-managing Administrator |
| ---------------------------------- | --- | --------------- | ------------------------- |
| **Organization Configuration**     | Yes | No              | Yes                       |
| Sources                            | Yes | No              | Yes                       |
| Sites                              | Yes | No              | Yes                       |
| Credential                         | Yes | No              | Yes                       |
| Users                              | Yes | No              | No                        |
| Subscriptions                      | Yes | No              | Yes                       |
| Edit Organization (tags, profiles) | Yes | No              | No                        |
| View Dashboard                     | Yes | Yes             | Yes                       |

## Organization Dashboard

This table explains the functionality that each role can perform on an organization dashboard.

| Screen/Action                   | MSP | Business Viewer | Co-managing Administrator |
| ------------------------------- | --- | --------------- | ------------------------- |
| **View Organization Dashboard** | Yes | Yes             | Yes                       |
| Switch Organization             | Yes | No              | No                        |
| Go to Investigation             | Yes | Yes             | Yes                       |
| Go to Risk Assessment           | Yes | Yes             | Yes                       |
| Go to Alerts Overview           | Yes | Yes             | No                        |
| Configure Organization (button) | Yes | No              | No                        |

## Risk Assessment Dashboard

| Screen/Action                 | MSP | Business Viewer | Co-managing Administrator |
| ----------------------------- | --- | --------------- | ------------------------- |
| **Risk Assessment Dashboard** | Yes | Yes             | Yes                       |
| Switch Organization           | Yes | No              | No                        |
| Select Time Frame             | Yes | Yes             | Yes                       |
| Select Risk Profile           | Yes | Disabled        | Disabled                  |
| Go to Profile Settings        | Yes | No              | No                        |
| Subscribe                     | Yes | No              | Yes                       |
| Export                        | Yes | Yes             | Yes                       |
| View Risk Details             | Yes | Yes             | Yes                       |

## Reports

| Screen/Action                    | MSP | Business Viewer          | Co-managing Administrator |
| -------------------------------- | --- | ------------------------ | ------------------------- |
| **Reports**                      | Yes | Yes                      | Yes                       |
| Switch Organization              | Yes | No                       | No                        |
| New Investigation                | Yes | Yes                      | Yes                       |
| View Pre-defined Reports         | Yes | Yes                      | Yes                       |
| Save Pre-defined Reports As      | Yes | No                       | No                        |
| Export pre-defined Reports       | Yes | Yes                      | Yes                       |
| Subscribe to Pre-defined Reports | Yes | No                       | Yes                       |
| View Custom Reports              | Yes | Only if marked as shared | Only if marked as shared  |
| Save Custom Reports              | Yes | No                       | No                        |
| Export Custom Reports            | Yes | Only if marked as shared | Only if marked as shared  |
| Edit Custom Reports              | Yes | No                       | No                        |
| Delete Custom Reports            | Yes | No                       | No                        |
| Subscribe to Custom Reports      | Yes | No                       | Yes                       |

## Subscriptions

| Screen/Action            | MSP | Business Viewer | Co-managing Administrator |
| ------------------------ | --- | --------------- | ------------------------- |
| **Subscriptions**        | Yes | No              | Yes                       |
| Turn on/off subscription | Yes | No              | Yes                       |
| Delete subscription      | Yes | No              | Yes                       |
| Go to related report     | Yes | No              | Yes                       |
