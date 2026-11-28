---
title: "Security Service in GroupID"
description: "Learn what the GroupID Security service does for authentication and single sign-on, and how to run multiple Security services."
sidebar_position: 30
keywords:
  - Security service
  - single sign-on
  - authentication and authorization
  - multiple Security services
---

# Security Service in GroupID

Admin Center lets you quickly create and deploy a Security service. This web-based service is a
single sign-on implementation for GroupID clients. It is responsible for authenticating and
authorizing users on different GroupID clients and functionalities in accordance with their roles.
The service also encrypts and decrypts data that the Data service stores and fetches from the GroupID
database on SQL Server.

You can create multiple Security services. The default service is created while configuring GroupID.

## The Default Security Service

See the [GroupID Data Service](/docs/directorymanager/11.0/signin/service/dataservice/overview.md)
topic.

## Create Multiple Security Services

See the
[Reasons to Create Multiple Data Services](/docs/directorymanager/11.0/signin/service/dataservice/overview.md#reasons-to-create-multiple-data-services)
topic, replacing references to Data service with Security service.

**See Also**

- [Manage GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Create a GroupID Security Service](/docs/directorymanager/11.0/signin/service/securityservice/create.md)
- [Manage GroupID Security Service Settings](/docs/directorymanager/11.0/signin/service/securityservice/manage.md)
