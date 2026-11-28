---
title: "Configure an Identity Store in Directory Manager"
description: "Learn which settings you can configure for an identity store, including SMTP, security roles, replication, workflows, entitlements, and schedules."
keywords:
  - identity store configuration
  - security roles
  - replication settings
  - identity store workflows
  - identity store schedules
sidebar_position: 50
---

# Configure an Identity Store in Directory Manager

You can define various configurations for an identity store.

**To manage configurations:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Configure any of the following for the identity store:

   - Identity store-specific configurations
   - Security roles
   - Replication settings
   - Identity store history
   - Workflows
   - Entitlements
   - Schedules

## Identity store-specific configurations

Define the following configurations for an identity store:

- An SMTP server for sending email notifications. See the
  [Configure an SMTP Server in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/smtpserver.md) topic.
- Authentication types and policies. See the [Directory Manager Authentication Policies](/docs/directorymanager/11.2/admincenter/authpolicy/authpolicy.md) topic.
- A group lifecycle policy that controls the expiry and deletion of groups in the identity store.
  See the [Manage Group Lifecycle Settings in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/grouplifecycle.md) topic.
- Membership lifecycle policies for static groups. See the
  [Manage Directory Manager Membership Lifecycle Policies](/docs/directorymanager/11.2/admincenter/identitystore/configure/membershiplifecycle.md) topic.
- Inheritance settings for Dynasties. See the
  [Manage Dynasty Settings in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/dynastysettings.md) topic.
- Group update and membership settings. See the
  [Manage Group Membership Limits in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/outofbounds.md) topic.
- Group name prefixes, which are added to group names. See the
  [Configure Group Name Prefixes in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/prefixes.md) topic.
- Settings for history tracking. See the
  [Configure History Tracking in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/historytracking.md) topic.
- A messaging provider so that mail-enabled objects can be created in the identity store. See the
  [Configure a Messaging Provider in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/messagingprovider.md) topic.
- Profile validation settings to ensure the accuracy of users' information in the directory. See the
  [Configure User Profile Validation in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/profilevalidation.md) topic.
- Circular reference settings for object update. See the
  [Manage Circular Reference in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/circularreference.md) topic.
- Password restrictions and rules for setting identity store passwords. See the
  [Configure Password Options in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/passwordoptions.md) topic.

## Security roles

An identity store has security roles defined for it, and only role members can access Directory
Manager. See the [Security Roles in Directory Manager](/docs/directorymanager/11.2/admincenter/securityrole/overview.md) topic.

You can specify the following configurations for a role:

- Assign permissions on different Directory Manager functions. See the
  [Security Role Permissions in Directory Manager](/docs/directorymanager/11.2/admincenter/securityrole/permissions.md) topic.
- Specify policies for roles. See the [Security Role Policies](/docs/directorymanager/11.2/admincenter/securityrole/policy/overview.md)
  topic.

## Replication settings

The Replication service replicates objects that are created or modified directly on the directory
server to the Elasticsearch repository. You can specify the attributes for the
Replication Service to replicate from the provider to the Elasticsearch repository.

See the [Manage Identity Store Replication Settings](/docs/directorymanager/11.2/admincenter/identitystore/replication.md) topic for details.

## Identity store history

You can view the changes made to an identity store's configurations, workflows, and security roles.
See the [View Identity Store History in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/view/view.md) topic.

## Workflows

Workflows are a built-in auditing system. They ensure that an authorized user approves changes to
directory objects before the changes are committed to the directory.

You can define different workflows for an identity store. For example, you can define a workflow
that triggers when a user creates a group in the directory using Directory Manager. See the
[Directory Manager Workflows Overview](/docs/directorymanager/11.2/admincenter/workflow/overview.md) topic for details.

## Entitlements

Specify file servers in Active Directory and SharePoint sites to view and update the permissions
assigned to objects on shared resources. See the [Entitlement Management in Directory Manager](/docs/directorymanager/11.2/admincenter/entitlement/overview.md) topic.

## Schedules

Define schedules to run different Directory Manager functions, such as group expiry and
deletion, Smart Group membership update, temporary additional manager assignment to users, and more.
See the [Schedules in Directory Manager](/docs/directorymanager/11.2/admincenter/schedule/overview.md) topic.