---
title: "What's New"
description: "What's New"
sidebar_position: 10
---

# What's New

## New Netwrix Community!

All Netwrix product announcements have moved to the new Netwrix Community. See announcements for
Netrix GroupID in the [GroupID](https://community.netwrix.com/c/directorymanager/announcements/110) area of
our new community.

The following information highlights the new and enhanced features introduced in Netwrix GroupID
version 11.0.

Here is a list of the new features in GroupID 11:

- [General](#general)
- [Admin Center](#admin-center)
- [GroupID Portal](#groupid-portal)
- [Synchronize](#synchronize)
- [Entitlement](#entitlement)

### General

General features that apply to all GroupID areas are listed below.

Web-based application

GroupID 11 is a web-based application. It has two portals:

- Admin Center - Has replaced the MMC-based Windows application.
- GroupID portal - Self-Service portal, Password Center user portal, Password Center helpdesk
  portal, Insights portal, Automate, Synchronize, and Reports have been merged into a single portal.

Elasticsearch support

Earlier you could only use Elasticsearch deployed by GroupID. Now you can use your own instance of
Elasticsearch. GroupID 11 supports Elasticsearch v 8.0.0.

GroupID as an identity provider

GroupID 11 can serve as an identity provider. You can register a third-party application as a
service provider in GroupID to authenticate users in that application through GroupID.

GroupID Scheduler Service in IIS

Scheduled jobs are now saved in the GroupID database. The GroupIDSchedulerService, created in the
GroupIDSite11 site in native IIS, is responsible for initiating schedule runs.

Web-based Replication and Email services

Earlier Replication service and Email service were Windows services. Now they are web-based services
deployed in native IIS.

Passwordless authentication with QR code

With the QR code option enabled for an identity store, users can simply scan the QR code with the
GroupID mobile app on their smartphones to connect GroupID Admin Center or the GroupID portal to an
identity store and sign in, without the need to provide a username and password.

Core services deployment in Docker

You can now deploy core GroupID services, Data Service and Security Service, in Docker. (Preview)

### Admin Center

The Admin Center portal offers the following new features:

Linked identity store

You can link Active Directory and Microsoft Entra ID identity stores in GroupID. In this way,
identical user and group objects existing in these identity stores (domains) can be linked and
auto-synced.

Deployment of services and GroupID portals in native IIS, remote IIS, and Docker

Earlier versions of GroupID supported deployments in native IIS only. Now, you can create as many
portals, Data services, Security services, and Mobile services as needed, while deploying them in
any of the supported web srervers.

Elastic health check facility

You can monitor the Elasticsearch service for the following:

- The status of the Elasticsearch service as stopped or running.
- Elasticsearch cluster health stats, that include cluster health status, node info, and shards
  info.
- Cluster indices information, like health, number of documents, and status.

Modern authentication support

In addition to basic authentication, GroupID 11 also supports modern authentication.

Power Automate integration

Link a workflow in an identity store to a Power Automate flow. When the GroupID workflow is
triggered, the linked flow is auto-triggered.

Admin Center history tracking

In earlier GroupID versions, history was partially tracked for actions performed in GroupID
Management Console. In GroupID 11, the history tracking function has been extended to include Admin
Center history. GroupID auto-tracks actions such as the creation and deletion of identity stores,
the creation and deletion of SMS gateway accounts, changes to replication settings, modifications to
notification templates, and much more.

Circular reference in membership and direct reports

GroupID checks for circular reference when users update objects manually or when objects are auto
updated via a GroupID schedule. If a circular reference occurs, GroupID displays an error and
prevents the user from saving the change.

Multiple deployments of applications

For load balancing and high availability, GroupID facilitates you to create multiple instances of
the following applications:

- GroupID portal
- Data Service
- Security Service
- Mobile Service

Now you can create an application, such as a portal, and host different instances of this portal on
different web servers, i.e., native IIS, remote IIS, and Docker. All instances of this portal share
the same design settings and the same server settings, except that each instance has its own
deployment settings.

### GroupID Portal

In GroupID portal, end users can perform functions according to the role(s) assigned to them.

Single portal for end-users

The following GroupID modules and portals have been merged into a single portal – GroupID portal.

| Modules/Nodes | Portals                         |
| ------------- | ------------------------------- |
| Automate      | Self-Service portal             |
| Synchronize   | Password Center User portal     |
| Reports       | Password Center Helpdesk portal |
|               | Insights (now Entitlement)      |

DL support in a Microsoft Entra ID identity store

GroupID 11 allows users to manage distribution lists in a Microsoft Entra ID Identity store.

Query-based search in the GroupID portal

In addition to Advanced Search, users can use a Query Designer to define criteria for searching
objects and save each query for later use.

Dynasties in the GroupID portal

Dynasties, which were previously only managed by Automate, are now available in the GroupID portal.
Just like Smart Groups and static groups, users can easily create and manage Dynasties through the
GroupID portal.

Upgrade a static group to a Managerial Dynasty

Using the GroupID portal, you can upgrade a static group to a Managerial Dynasty. It’s a one-step
process that converts the static group to a Dynasty with all attributes intact.

Specify new manager while transferring direct report

Portal users can transfer their direct reports and specify a new manager for them.

Membership preview for Smart Groups and Dynasties

The membership preview option enables you to preview the objects (along with their membership) that
will be created/added when you update the membership of a Smart Group or Dynasty. If out-of-bounds
configurations are specified, the membership preview takes them into account as well.

Microsoft Teams groups

The GroupID portal enables you to create teams and channels in MS Teams. You can create static teams
and smart teams, where smart team memberships are defined through queries. Your teams can have
temporary and permanent members as well as temporary and permanent owners. Moreover you can also set
expiry dates for teams.

Channels in teams can be public and private. Users can join public channels while private channel
membership is determined by the team owner.

### Synchronize

Synchronize is now web-based and available in the GroupID portal. Synchronize jobs now use identity
stores and data sources defined in Admin Center as source and destination. Earlier, only IT admins
could run Synchronize since it was part of the GroupID Management Console but now end users can use
it too. Proper checks are in place to control access via the Synchronize policy and
Synchronize-related permissions.

Support for Microsoft Entra ID and Google Workspace providers

GroupID 11 now supports Microsoft Entra ID and Google Workspace as source and destination providers.
You must create their identity stores in Admin Center to use them as source or destination providers
in Synchronize jobs.

Data sources for Synchronize

GroupID 11 supports data sources (databases and files) as source and destination providers for
Synchronize jobs. Users can create Synchronize jobs to provision, de-provision, or synchronize data
using these data sources. Amongst others, support for SCIM is also available.

Data source for files on local server and one drive

The Excel, Access, and Text/CSV files used for creating a data source can be placed on a local
server or OneDrive.

Synchronize policy

Using the Synchronize policy, you can allow or disallow:

- a provider to be used as a source or destination.
- an identity store/data source to be used as a source or destination.

You can choose the object types that can be created or synced at the destination using a Synchronize
job. For each object type in an identity store and data source, you can also specify the attributes
that will be available for mapping the source and destination fields in a Synchronize job.

Synchronize permissions

Using Synchronize permission, you can control different actions that role members can perform in
Synchronize. For example, if the permission to create a Synchronize job is disabled for a role, the
_Create Job_ option will not be available to role members.

Workflows support in Synchronize

If a Synchronize job performs an operation in the destination identity store and a workflow is
configured for that operation in that identity store, then a workflow request is generated on the
job run. If the approver approves the request, the job will run successfully. If the approver denies
the request, you will be unable to run the job.

Python scripting in Synchronize

Along with VB scripting, GroupID 11 introduces Python scripting while creating a job. You can choose
either of the two to modify the script for a job.

Messaging provider of destination

Synchronize supports different messaging providers that can be configured while creating a job.
However, instead of configuring a new messaging provider, you can also select the messaging provider
of the destination identity store.

Notification server of destination

If notifications are enabled for a Synchronize job, then email notifications are sent to the
specified recipients using the notification server of destination identity store. If a notification
server is not configured in the destination identity store, you can configure it while creating the
job.

### Entitlement

In earlier GroupID versions, you only view the effective NTFS permissions that a user or group had
on file server shares in your environment. With GroupID 11, you can now view and update permissions
for file server shares and SharePoint sites.

Entitlement for SharePoint

You can assign and revoke permission on:

- perpetual basis
- temporary basis

For this, two new scheduled jobs have been added:

- Entitlement Scope
- Entitlement Temporary Permissions
