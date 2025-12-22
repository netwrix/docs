---
title: "Configure an Identity Store"
description: "Configure an Identity Store"
sidebar_position: 50
---

# Configure an Identity Store

Various configurations can be defined for an identity store.

**To manage configurations:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. You can configure the following for an identity store:

    - [Identity Store-specific Configurations](#identity-store-specific-configurations)
    - [Security Roles](#security-roles)
    - [Replication Settings](#replication-settings)
    - [Identity Store History](#identity-store-history)
    - [Workflows](#workflows)
    - [Entitlements](#entitlements)
    - [Schedules](#schedules)

## Identity Store-specific Configurations

The following configurations have to be defined for an identity store:

- An SMTP server for sending email notifications. See the
  [Configure an SMTP Server](/docs/directorymanager/11.0/signin/identitystore/configure/smtpserver.md)
  topic.
- Authentication types and policies. See the
  [Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
  topic.
- A group life cycle policy that controls the expiry and deletion of groups in the identity store.
  See the
  [Manage Group Lifecycle Settings](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md)
  topic.
- Membership life cycle policies for static groups. See the
  [Manage Membership Life Cycle Policies](/docs/directorymanager/11.0/signin/identitystore/configure/membershiplifecycle.md)
  topic.
- Inheritance settings for Dynasties. See the
  [Manage Dynasty Settings](/docs/directorymanager/11.0/signin/identitystore/configure/dynastysettings.md)
  topic.
- Group update and membership settings. See the
  [Manage Group Membership Settings](/docs/directorymanager/11.0/signin/identitystore/configure/outofbounds.md)
  topic.
- Group name prefixes, which are used to append group names. See the
  [Set Group Name Prefixes](/docs/directorymanager/11.0/signin/identitystore/configure/prefixes.md)
  topic.
- Settings for history tracking. See the
  [Configure History Tracking](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md)
  topic.
- A messaging provider so that mail-enabled objects can be created in the identity store. See the
  [Configure a Messaging Provider](/docs/directorymanager/11.0/signin/identitystore/configure/messagingprovider.md)
  topic.
- Profile validation settings to ensure the accuracy of users’ information in the directory. See the
  [Configure User Profile Validation](/docs/directorymanager/11.0/signin/identitystore/configure/profilevalidation.md)
  topic.
- Circular reference settings for object update. See the
  [Manage Circular Reference ](/docs/directorymanager/11.0/signin/identitystore/configure/circularreference.md)topic.
- Password restrictions and rules for setting identity store passwords. See the
  [Configure Password Options](/docs/directorymanager/11.0/signin/identitystore/configure/passwordoptions.md)
  topic.

## Security Roles

An identity store has security roles defined for it, and only role members can access GroupID. See
the [Security Roles](/docs/directorymanager/11.0/signin/securityrole/overview.md)
topic.

You can specify the following configurations for a role:

- Assign permissions on different GroupID functions. See the
  [Security Role – Permissions](/docs/directorymanager/11.0/signin/securityrole/permissions.md)
  topic.
- Specify policies for roles. See the
  [Security Role Policies](/docs/directorymanager/11.0/signin/securityrole/policy/overview.md)
  topic.

## Replication Settings

The Replication service is responsible for replicating objects that are created or modified directly
on the directory server, to the Elasticsearch repository. You can specify the attributes for the
Replication Service to replicate from the provider to the Elasticsearch repository.

See the
[Manage Local Replication Settings](/docs/directorymanager/11.0/signin/identitystore/replication.md)
topic for details.

## Identity Store History

You can view the changes made to an identity store’s configurations, workflows, and security roles
in an identity store. See the
[Identity Store History](/docs/directorymanager/11.0/signin/identitystore/view/view.md)
topic.

## Workflows

Workflows are a built-in auditing system to ensure that changes made to directory objects are
approved by an authorized user before they are committed to the directory.

You can define different workflows for an identity store. For example, you can define a workflow
that triggers when a user creates a group in the directory using GroupID. See the
[Workflows](/docs/directorymanager/11.0/signin/workflow/overview.md) topic for
details.

## Entitlements

Specify file servers in Active Directory and SharePoint sites to view and update the permissions
assigned to objects on shared resources. See the
[Entitlement](/docs/directorymanager/11.0/signin/entitlement/overview.md) topic.

## Schedules

Define schedules to auto execute different GroupID functions, such as group expiry and deletion,
Smart Group membership update, temporary additional manager assignment to users, and more. See the
[Schedules](/docs/directorymanager/11.0/signin/schedule/overview.md) topic.

**See Also**

- [Manage an Identity Store](/docs/directorymanager/11.0/signin/identitystore/manage.md)
