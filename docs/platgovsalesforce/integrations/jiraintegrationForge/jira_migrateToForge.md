---
title: "Migrating to the Salesforce Forge App"
description: "How to migrate from the legacy Jira integration to the Salesforce Forge App"
sidebar_position: 1
---

# Migrating to the Salesforce Forge App

This document explains how to migrate from the **legacy Salesforce Jira integration** to the **Netwrix Salesforce Forge App**.

The Salesforce Forge App is a **new and separate application**. Both applications can coexist in the same Jira and Salesforce environment during the migration process.

## Migration Overview

- The legacy Jira integration and the Salesforce Forge App are **different applications**.
- Both applications can be installed and used **at the same time** in the same account.
- If a user continues using the legacy integration, **no issues occur**, as the underlying Change Request logic remains the same.
- Netwrix **strongly recommends using the Salesforce Forge App** for all new activity.

The migration primarily affects **authentication and configuration**, not the overall workflow.

## Key Differences


## Forge App vs Jira Connect App (Visualforce hosted in Salesforce)

| Aspect | Forge App (New) | Jira Connect App (Visualforce hosted in Salesforce – Legacy) |
| ------ | --------------- | ------------------------------------------------------------ |
| Application Type | Modern app built on **Atlassian Forge** | **Jira Connect** app rendering **Visualforce pages** |
| Hosting | **Managed by Atlassian (Forge)** | **Hosted in Salesforce** (Visualforce) |
| Infrastructure | No customer-managed infrastructure required | Requires Salesforce-hosted components and exposed endpoints |
| Security Model | Built-in Forge security and isolation | Security depends on Salesforce and Jira configuration |
| Authentication | Simplified OAuth flow handled by Forge | OAuth configured and managed in Salesforce |
| Secrets Management | Secure, centralized secret storage in Forge | Secrets managed manually in Salesforce |
| Deployment | Simple deployment using Forge CLI | Deployment of Visualforce pages and Jira Connect configuration |
| Maintenance Effort | Low maintenance overhead | Higher maintenance due to dual-platform dependencies |
| Scalability | Automatically scales with Atlassian infrastructure | Limited by Salesforce governor limits |
| Performance | Faster UI and reduced latency | Additional latency between Jira and Salesforce |
| User Experience (UX) | Modern, native Jira experience | Legacy UI based on Visualforce |
| Configuration Complexity | Minimal configuration required | Complex configuration and setup |
| Future Compatibility | Aligned with Atlassian’s long-term roadmap | Jira Connect is being phased out |
| Compliance & Auditing | Easier compliance with built-in isolation | Relies on Salesforce logging and auditing |
| Operational Cost | Lower operational and support cost | Higher operational cost |
| Customer Impact | Reduced setup effort and fewer errors | Higher risk of misconfiguration |


### Application Type

- **Legacy Integration**: Previous Jira integration app.
- **Salesforce Forge App**: New Forge-based Jira app.

Both apps interact with the same Salesforce logic and Change Request process.

### Authentication

The Salesforce Forge App introduces a simplified authentication model.

#### Connected App Authentication

When using **Connected App** authentication in the Salesforce Forge App:

- The Forge App provides a **Callback URL** in the **Connected App** tab.
- This Callback URL **must be copied and configured** in the Salesforce Connected App.

> **Important**  
> The Callback URL configured in Salesforce must exactly match the URL provided by the Forge App.

No other changes are required for Connected App authentication.

#### Login User Authentication

- No configuration changes are required.
- Existing credentials and login behavior remain unchanged.

## Configuration Changes

### Jira Credentials

- Jira credentials are **no longer required** on the **Configuration and Stats** page when using the Salesforce Forge App.
- Any previously configured Jira credentials are ignored by the Forge App.

### Status Mapping

- **Status Mapping is still required**.
- Existing Status Mapping configurations continue to work and do not need to be recreated.
- Ensure Status Mapping is correctly configured before switching users to the Forge App.

## Coexistence During Migration

During migration:

- Both the legacy integration and the Salesforce Forge App can be active.
- Users may access either app without impacting Change Requests or Salesforce data.
- Change Requests created from either app follow the same processing logic.

However, to ensure consistency and take advantage of the latest improvements, Netwrix recommends directing users to the **Salesforce Forge App** once migration steps are completed.

## Recommendation

Although continued use of the legacy integration does not cause functional issues, the **Salesforce Forge App** is the recommended solution moving forward due to:

- Simplified authentication
- Reduced configuration requirements
- Ongoing enhancements and support

Netwrix recommends completing the migration and standardizing on the Salesforce Forge App for all users.
