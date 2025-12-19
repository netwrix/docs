---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 2
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

- Configure multi-factor authentication (MFA). See the [First Launch](/docs/privilegesecure/4.2/install/firstlaunch.md) topic
  for additional information.
- Login to the Privilege Secure Console. See the
  [Log Into the Privilege Secure Console](/docs/privilegesecure/4.2/install/login.md) topic for additional information.

## Update the License

Netwrix Privilege Secure comes with a temporary 30-day license. Contact the organization’s Netwrix
sales representative to purchase a license:

- Import the license file. See the [Import the License File](/docs/privilegesecure/4.2/admin/navigation/importlicense.md) topic for
  additional information.

Privilege Secure licensing is done according to user count. Any user who is provisioned access to
Privilege Secure will consume a license after their first login. This is true for all users,
regardless of role (Administrator, Reviewer, User, or Custom Role).

## Add Service Accounts & Domains

Prior to using Privilege Secure, it is necessary to add the service accounts and domains that
contain the users, groups and resources:

- [Service Accounts Page](/docs/privilegesecure/4.2/admin/configuration/serviceaccounts/serviceaccounts.md) — Add the account credentials
  that will grant access to the required resources
- [Add New Domain](/docs/privilegesecure/4.2/admin/interface/resources/addandchange/domain.md) — Add the Active Directory domains that contain the
  users, groups, resources and service accounts that Privilege Secure will use to grant access

## Add Users, Resources & Activities

Before users can create sessions, it is necessary to setup an access policy. A user must be a part
of an access policy to create a session. The access policy determines what activities the users can
perform and on what resources. An Access Policy consists of three parts that must be configured
first:

- [Users & Groups Page](/docs/privilegesecure/4.2/admin/interface/usersgroups/usersgroups.md) — Add the Users and Groups from AD that
  will use the Privilege Secure Console
- [Resources Page](/docs/privilegesecure/4.2/admin/interface/resources/resources.md) — Add the resources such as Windows or Linux
  servers that the users will access via the Privilege Secure Console
- [Activities Page](/docs/privilegesecure/4.2/admin/interface/activities/activities.md) — Add the actions that Privilege Secure will
  perform before, during and after a session, such as temporarily adding the user to a local admins
  group

## Configure Access Policies

Once the users, groups and resources are added to the console, it is now possible to create access
policies to control privileged access:

- [Connection Profiles Page](/docs/privilegesecure/4.2/admin/interface/accesspolicy/connectionprofiles/connectionprofiles.md) — Add the connection profile
  that will be used with the access policy
- [Access Policy Page](/docs/privilegesecure/4.2/admin/interface/accesspolicy/accesspolicy.md) — Create the access policies to control
  privileged access to resources

## Create Sessions

Privilege Secure is configured and ready to use:

- [Create My Activity Session](/docs/privilegesecure/4.2/enduser/myactivities/createsession.md) — Create a session to grant
  temporary privileges and gain access to the resources defined by the previously created access
  policy
- [Browser Extension Interface](/docs/privilegesecure/4.2/enduser/browserextension/interface/interface.md) — Conveniently access all of
  your previously created activities from within an internet browser
