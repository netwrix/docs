---
title: "SharePoint Online Permissions"
description: "SharePoint Online Permissions"
sidebar_position: 30
---

# SharePoint Online Permissions

SharePoint Online environments can only be scanned in Agent-less mode. When SharePoint agent-less
scans are run, it means all of the data collection processing is conducted by the Access Analyzer
Console server across the network.

## Modern Authentication

The SharePoint agent-less scan architecture uses modern authentication in the target environment:

**Tenant Global Administrator Role**

- Tenant Global Administrator role is required to provision the application

    - Modern authentication enables Access Analyzer to scan SharePoint Online and all OneDrives in
      the target environment

**Permissions for Microsoft Graph APIs**

- Application Permissions:

    - Application.Read.All – Read all applications
    - AuditLog.Read.All – Read all audit log data
    - Directory.Read.All – Read directory data
    - Domain.Read.All – Read domains
    - Files.Read.All – Read files in all site collections
    - GroupMember.Read.All – Read all group memberships
    - InformationProtectionPolicy.Read.All – Read all published labels and label policies for an
      organization
    - Member.Read.Hidden – Read all hidden memberships
    - Organization.Read.All – Read organization information
    - OrgContact.Read.All – Read organization contact
    - Policy.Read.All – Read your organization's policies
    - Policy.Read.ConditionalAccess – Read you organization's conditional access policies
    - Policy.Read.PermissionGrant – Read consent and permission grant policies
    - ServiceHealth.Read.All – Read service health
    - ServiceMessage.Read.All – Read service messages
    - Sites.Read.All – Read items in all site collections
    - Team.ReadBasic.All – Get a list of all teamss
    - TeamMember.Read.All – Read the members of all teams

- Delegated Permissions:

    - Group.Read.All – Read all groups
    - User.Read.All – Read all users' full profiles

**Permissions for Office 365 Management APIs**

- Application Permissions:

    - ActivityFeed.Read – Read activity data for your organization
    - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data
    - ServiceHealth.Read – Read service health information for your organization

**Permissions for SharePoint APIs**

- Application Permissions:

    - Sites.FullControl.All – Have full control of all site collections
    - Sites.Read.All – Read items in all site collections
    - TermStore.Read.All – Read managed metadata
    - User.Read.All – Read user profiles
