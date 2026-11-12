---
title: "What happens when you connect Microsoft"
description: "Understand the two Microsoft windows that appear when you sign in, what each grants, and what 1Secure keeps and drops."
sidebar_position: 7
---

# What happens when you connect Microsoft

When you click **Sign in with Microsoft**, Microsoft shows two windows, one after the other. The first asks for your own access, which 1Secure uses once during setup. The second grants the 1Secure application the read permissions it keeps. This page explains each window, what it grants, and what 1Secure keeps and drops.

## The first window: your own access, for setup

The first window is titled **Permissions requested** and asks for three permissions on your behalf.

| What the window lists | What 1Secure does with it |
|-----------------------|---------------------------|
| View your basic profile | Confirms who signed in and which directory you belong to. |
| Maintain access to data you have given it access to | Lets 1Secure grant the Microsoft Entra AI Reader role without opening another Microsoft window. |
| Read and write directory RBAC settings | Assigns the Microsoft Entra AI Reader role to the 1Secure application. |

The first window asks nothing for Azure, Power Apps, or Dynamics 365, so a tenant without those services still connects. When you grant **Azure Reader roles** or **Power Platform application user** on **Connect Microsoft**, a further Microsoft window asks for that service alone.

| Line you grant | What its window lists | What 1Secure does with it |
|----------------|-----------------------|---------------------------|
| Azure Reader roles | Access Azure Resource Manager as you | Lists the subscriptions you can see and assigns the Azure Reader roles on those you pick. |
| Power Platform application user | Access the PowerApps Service API, and Access Common Data Service as you | Lists your Power Platform environments, registers 1Secure with Power Platform, and adds the 1Secure application user and its roles in each environment you pick. |

A line you skip never asks for its permissions. If your tenant doesn't have the service, its line says so and you can skip it. Microsoft Entra ID stays connected.

These permissions act as you, and only where your own account can act. 1Secure holds the first window's access, encrypted, for fifteen minutes. It drops the access after the grants are made, and keeps no token after that. The roles it assigns go to the 1Secure application, not to you. See [Add additional permissions](/docs/1secureaisecurity/configuration/add-additional-permissions.md).

### Leave "Consent on behalf of your organization" cleared

The first window shows a **Consent on behalf of your organization** box. Leave it cleared.

- Selected, it grants these permissions for every user of your directory. 1Secure never needs that.
- Cleared, Microsoft records only your own consent. Another administrator who sets up 1Secure later is asked the same once.

### "Unverified" and "not published by Microsoft or your organization"

The window can mark the 1Secure application as **unverified** and say "This application is not published by Microsoft or your organization." Microsoft shows this until the application's publisher verification is complete. It is safe to accept.

## The second window: the read permissions 1Secure keeps

The second window asks you, as an administrator, to consent for your whole organization. When you click **Accept**, Microsoft grants the 1Secure application every permission it lists, across the directory. 1Secure uses them to read, and never to change your directory. A few are rights that Microsoft offers only in a form wider than reading, such as full control of each SharePoint site you approve, because reading a site's own permissions needs that right. These are the permissions 1Secure keeps and scans with.

The second window lists eighteen Microsoft Graph application permissions: Application.Read.All, User.Read.All, DelegatedPermissionGrant.Read.All, Organization.Read.All, Policy.Read.All, Policy.Read.PermissionGrant, AuditLog.Read.All, AuditLogsQuery.Read.All, RoleManagement.Read.Directory, Reports.Read.All, Sites.Read.All, CopilotPackages.Read.All, AppCatalog.Read.All, Sites.Selected, SharePointTenantSettings.Read.All, Group.Read.All, InformationProtectionPolicy.Read.All, and ThreatHunting.Read.All. Sites.FullControl.All is added only when you choose **All sites** for SharePoint.

[Connect every Microsoft source](/docs/1secureaisecurity/configuration/sources/connect-every-microsoft-source.md) lists each permission, what it reads, and what a test or scan says when it is missing.

## What 1Secure keeps and what it drops

| Item | Kept | Dropped |
|------|------|---------|
| Your own access from the first window | No. | After the setup grants are made, or after fifteen minutes. |
| The read permissions from the second window | Yes, on the 1Secure application in your directory. | When you remove the application. |
| The roles assigned during setup | Yes, on the 1Secure application. | When you remove them. |

Microsoft keeps a record of your consent to the first window on the 1Secure application. To revoke it after setup, open **Enterprise apps** in the Microsoft Entra admin center, open the 1Secure application, open **Permissions**, and revoke only the rows of type **Delegated**. Keep every **Application** row. The next grant you make from 1Secure asks for your consent again.

To remove everything, see [Remove AI Security from your Microsoft tenant](/docs/1secureaisecurity/configuration/remove-ai-security-from-your-microsoft-tenant.md).
