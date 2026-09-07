---
title: Settings
description: The Settings page holds deployment-wide defaults, feature flags, user accounts, single sign-on, backups, and system logs across five tabs, each shown only to the roles that can use it.
---

Settings holds what applies to the whole installation rather than to one source or scan: classification and Netwrix Activity Monitor defaults, feature flags, user accounts, single sign-on, backups, and system logs. Open **Configuration > Settings** in the sidebar. Every role can open the page, but it shows only the tabs your role can use.

![Application settings tab with Classification defaults](/images/accessanalyzer/26.1/settings/application.webp)

## Tabs

| Tab | What it holds | Who sees it |
|---|---|---|
| [**Application**](application.md) | Deployment-wide defaults for classification and Netwrix Activity Monitor, plus the enrollment token used to enroll Netwrix Activity Monitor agents | Admin, Viewer |
| [**Feature flags**](feature-flags.md) | Experimental toggles for optional scan features | Admin, Viewer |
| [**Users**](users.md) | User accounts, their roles, and whether each account is active | Admin, User admin |
| **System** | [Backups](backups.md) and [single sign-on](single-sign-on.md) | Admin, User admin |
| [**System logs**](system-logs.md) | Application logs from every component, with search, filter, and download | Admin |

## Permissions by role

**Admin** reads and changes everything on every tab. Two controls are Admin-only even on a shared tab: the **Enrollment token** panel on Application and the **Backups** card on System. Admins land on the Application tab when they open Settings.

**User admin** gets the Users and System tabs and lands on Users when opening Settings. On System, a User admin sees the **Single sign-on** card but not the **Backups** card. A User admin also can't grant the Admin role or change an existing Admin's account.

**Viewer** gets the Application and Feature flags tabs but can't save changes on either. The controls look editable, but every save fails with the message **Some settings were not saved**.

[Users and roles](users.md#roles) describes each role and what it can do across the rest of the product.

## Timing of saved changes

Saving an Application setting or a feature flag doesn't restart anything. Access Analyzer picks up the change on its own within 5 minutes; a feature flag can take about a minute longer to reach the classification engine. That has two consequences:

- Classification settings apply to Sensitive data scans that start after the change takes effect. A scan that's already running keeps the values it started with.
- Netwrix Activity Monitor settings apply to connections opened after the change takes effect. An Activity Monitor agent that's already connected keeps its current session.
