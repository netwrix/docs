# Configure an Identity Store

Various configurations can be defined for an identity store.

__To manage configurations:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. You can configure the following for an identity store:

   - [Identity Store-specific Configurations](#Identity-Store-specific-Configurations)
   - [Security Roles](#Security-Roles)
   - [Replication Settings](#Replication-Settings)
   - [Identity Store History](#Identity-Store-History)
   - [Workflows](#Workflows)
   - [Entitlements](#Entitlements)
   - [Schedules](#Schedules)

## Identity Store-specific Configurations

The following configurations have to be defined for an identity store:

- An SMTP server for sending email notifications. See the [Configure an SMTP Server](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/smtpserver.md) topic.
- Authentication types and policies. See the [Authentication Policy](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md)
  topic.
- A group life cycle policy that controls the expiry and deletion of groups in the identity store.
  See the [Manage Group Lifecycle Settings](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md) topic.
- Membership life cycle policies for static groups.
  See the [Manage Membership Life Cycle Policies](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/membershiplifecycle.md) topic.
- Inheritance settings for Dynasties. See the [Manage Dynasty Settings](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/dynastysettings.md) topic.
- Group update and membership settings. See the [Manage Group Membership Settings](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/outofbounds.md) topic.
- Group name prefixes, which are used to append group names.
  See the [Group Name Prefixes](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/prefixes.md) topic.
- Settings for history tracking.
  See the [Configure History Tracking](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/historytracking.md) topic.
- A messaging provider so that mail-enabled objects can be created in the identity store.
  See the [Configure a Messaging Provider](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/messagingprovider.md) topic.
- Profile validation settings to ensure the accuracy of users’ information in the directory.
  See the [Configure User Profile Validation](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/profilevalidation.md) topic.
- Circular reference settings for object update. See the [Manage Circular Reference ](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/circularreference.md)topic.
- Password restrictions and rules
  for setting identity store passwords. See the [Configure Password Options](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/security/passwordoptions.md)
  topic.

## Security Roles

An identity store has security roles defined for it, and only role members can access Directory Manager. See the [Security Roles](/docs/product_docs/groupid/groupid/admincenter/securityrole/overview.md) topic.

You can specify the following configurations for a role:

- Assign permissions on different Directory Manager functions.
  See the [Security Role – Permissions](/docs/product_docs/groupid/groupid/admincenter/securityrole/permissions.md) topic.
- Specify policies for roles. See the [Security Role Policies](/docs/product_docs/groupid/groupid/admincenter/securityrole/policy/overview.md) topic.

## Replication Settings

The Replication service is responsible for replicating objects that are created or modified directly on the directory server, to the Elasticsearch repository. You can specify the attributes for the Replication Service to replicate from the provider to the Elasticsearch repository.

See the [Manage Local Replication Settings](/docs/product_docs/groupid/groupid/admincenter/identitystore/replication.md) topic for details.

## Identity Store History

You can view the changes made to an identity store’s configurations, workflows, and security roles in an identity store. See the [Identity Store History](/docs/product_docs/groupid/groupid/admincenter/identitystore/history/view.md) topic.

## Workflows

Workflows are a built-in auditing system to ensure that changes made to directory objects are approved by an authorized user before they are committed
to the directory.

You can define different workflows for an identity store. For example, you can define a workflow that triggers when a user creates a group in the directory using Directory Manager. See the [Workflows](/docs/product_docs/groupid/groupid/admincenter/workflow/overview.md) topic for details.

## Entitlements

Specify file servers in Active Directory and SharePoint sites to view and update the permissions assigned to objects on shared resources. See the [Entitlement](/docs/product_docs/groupid/groupid/admincenter/entitlement/overview.md) topic.

## Schedules

Define schedules to auto execute different Directory Manager functions, such as group expiry and deletion, Smart Group membership update, temporary additional manager assignment to users, and more. See the [Schedules](/docs/product_docs/groupid/groupid/admincenter/schedule/overview.md) topic.

__See Also__

- [Manage an Identity Store](/docs/product_docs/groupid/groupid/admincenter/identitystore/manage.md)
