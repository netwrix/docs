---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 30
---

# Getting Started

Once Privilege Secure is installed, complete the following configuration sections to enable users to
create activity based sessions on defined resources.

Additional capabilities such as Access Certification, email notifications, and SIEM service
integration can be enabled in their respective configuration pages.


## Configure MFA

Privilege Secure requires a multi-factor authentication (MFA) solution (Authenticator, DUO, Symantec
VIP, etc.) for all user accounts. First time users must register an MFA to use with their Active
Directory credentials:

- Configure multi-factor authentication (MFA). See the [First Launch](/docs/privilegesecure/25.12/install/firstlaunch.md) topic
  for additional information.
- Login to the Privilege Secure Console. See the
  [Log Into the Privilege Secure Console](/docs/privilegesecure/25.12/install/login.md) topic for additional information.

## Update the License

Netwrix Privilege Secure comes with a temporary 30-day license. Contact the organization’s Netwrix
sales representative to purchase a license:

- Import the license file. See the [Import the License File](/docs/privilegesecure/25.12/admin/navigation/importlicense.md) topic for
  additional information.

Privilege Secure licensing is done according to user count. Any user who is provisioned access to
Privilege Secure will consume a license after their first login. This is true for all users,
regardless of role (Administrator, Reviewer, User, or Custom Role).

## Access Policies

The end goal when using Netwrix Privilege Secure is to gain secure access to remote devices or secrets in the vault.  This is done through Access Policies. Accordingly, Access Policies are divided into resource (access to remote devices), and credential (access to credentials and files in the vault).

### Resouce-based Access Policies

A resource-based Access Policy connects users to resources and performs activities to facilitate that connection. Here are the components: 

![Resource-based Access policy Compnenents](/images/privilegesecure/25.12/accessmanagement/requirements/resource-based.png)

- User is a person or service logged into NPS-AM, but that is not necessarily the account used to login to the remote device.  That account is referred to as the “login account” and can be:
    - Requestor – the users account is also the login account.
    - Managed Account - a permanent account that is controlled by NPS.
    - Activity Token (aka Ephemeral) - an account that NPS creates just for this session and then destroys it when the session ends.
    - Vault – these are managed accounts in other vaults that can be used as login accounts. Netwrix calls this ability to use other vaults, even PAM competitors, Bring Your Own Vault (BYOV).

- Resources are the remote devices the user is trying to access. This includes Windows and Linux servers and PCs, databases, and network appliances.

- Activities include creating and/or promoting the login account so that it has the privileges needed to do your task. This means enabling RDP/SSH and adding them to the Doman admins group. It also often includes rotating the credentials for the session. Activities are defined before, during, and after the session. For example, if the login account needs to be added to the Domain Admins group, that is done before the session and then the login account can be removed and the password rotated when the session ends.

- Users and resources can be manually added or brought in with a directory synchronization like with Active Directory or EntraID. Corresponding service accounts have to be setup. For AD, this means an account that has the privileges that allow AD sync, create, disable/enable, and delete accounts, and adding and removing other accounts from groups.  For non-AD joined Linux machines, it means a local account NPS-AM can use to connect via SSH and has sudo/wheel access.

- Connection policies include details on how to access the proxy, how long sessions are allowed and if they can be extended, any command restrictions, how credentials are handled, and approval workflows. 

The following process takes you through this process from the bottom-up.  Once NPS has MFA and proper licensing set-up, you start adding service accounts and directory syncs, then onboarding users and resources, creating activities, and connection parameters, then finally creating Access Policies.

### Add Service Accounts & Domains

Prior to using Privilege Secure, it is necessary to add the service accounts and domains that
contain the users, groups and resources:

- [Service Accounts Page](/docs/privilegesecure/25.12/admin/configuration/serviceaccounts/serviceaccounts.md) — Add the account credentials
  that will grant access to the required resources
- [Add New Domain](/docs/privilegesecure/25.12/admin/interface/resources/domain.md) — Add the Active Directory domains that contain the
  users, groups, resources and service accounts that Privilege Secure will use to grant access

### Add Users, Resources & Activities

Before users can create sessions, it is necessary to setup an access policy. A user must be a part
of an access policy to create a session. The access policy determines what activities the users can
perform and on what resources. An Access Policy consists of three parts that must be configured
first:

- [Users & Groups Page](/docs/privilegesecure/25.12/admin/interface/usersgroups/usersgroups.md) — Add the Users and Groups from AD that
  will use the Privilege Secure Console
- [Resources Page](/docs/privilegesecure/25.12/admin/interface/resources/resources.md) — Add the resources such as Windows or Linux
  servers that the users will access via the Privilege Secure Console
- [Activities Page](/docs/privilegesecure/25.12/admin/interface/activities/activities.md) — Add the actions that Privilege Secure will
  perform before, during and after a session, such as temporarily adding the user to a local admins
  group

### Configure Access Policies

Once the users, groups and resources are added to the console, it is now possible to create access
policies to control privileged access:

- [Connection Profiles Page](/docs/privilegesecure/25.12/admin/interface/accesspolicy/connectionprofiles/connectionprofiles.md) — Add the connection profile
  that will be used with the access policy
- [Access Policy Page](/docs/privilegesecure/25.12/admin/interface/accesspolicy/accesspolicy.md) — Create the access policies to control
  privileged access to resources

### Create Sessions

Privilege Secure is configured and ready to use:

- [Create My Activity Session](/docs/privilegesecure/25.12/enduser/myactivities/createsession.md) — Create a session to grant
  temporary privileges and gain access to the resources defined by the previously created access
  policy
- [Browser Extension Interface](/docs/privilegesecure/25.12/enduser/browserextension/interface/interface.md) — Conveniently access all of
  your previously created activities from within an internet browser

## Credential-based Access Policies

A credential-based Access Policy allows users to access credentials and/or files from the vault.

This is what is required to build a credential based Access Policy 

![Resource-based Access policy Compnenents](/images/privilegesecure/25.12/accessmanagement/requirements/credential-based.png)

- Users are the people or services logged in to NPS-AM.
- Credentials are usernames and secrets stroed in the vault.
- Files are any kind of file stored inteh vault.
- Activities here are not editable. They provide access to credentials or files.
- Connection policiy include details on how long sessions are allowed, if they can be extended and approval workflows. 

To add a vault, see [Adding a vault](/docs/privilegesecure/25.12/admin/interface/resources/secretvault.md). Then to add credentials or files to the vault, see [Vault Details](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/secretvault.md)

To grant access to credentials or files in the vault to users, see [Access Policy](/docs/privilegesecure/25.12/admin/interface/accesspolicy/addaccesspolicy.md) and create an Access Policy that is Credential based. Then see [Credential-based Access Policy](/docs/privilegesecure/25.12/admin/interface/accesspolicy/credentials.md)
