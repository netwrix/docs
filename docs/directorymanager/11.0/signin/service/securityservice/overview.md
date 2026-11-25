---
title: "Security Service in Directory Manager"
description: "Learn what the Directory Manager Security service does for authentication and single sign-on, and how to run multiple Security services."
sidebar_position: 30
keywords:
  - Security service
  - single sign-on
  - authentication and authorization
  - multiple Security services
---

# Security Service in Directory Manager

Admin Center lets you quickly create and deploy a Security service. This web-based service is a
single sign-on implementation for Directory Manager clients. It is responsible for authenticating and
authorizing users on different Directory Manager clients and functionalities in accordance with their roles.
The service also encrypts and decrypts data that the Data service stores and fetches from the Directory Manager
database on SQL Server.

You can create multiple Security services. The default service is created while configuring Directory Manager.

## The Default Security Service

See the [Directory Manager Data Service](/docs/directorymanager/11.0/signin/service/dataservice/overview.md)
topic.

## Create Multiple Security Services

See the
[Reasons to Create Multiple Data Services](/docs/directorymanager/11.0/signin/service/dataservice/overview.md#reasons-to-create-multiple-data-services)
topic, replacing references to Data service with Security service.

**See Also**

- [Manage Directory Manager Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Create a Directory Manager Security Service](/docs/directorymanager/11.0/signin/service/securityservice/create.md)
- [Manage Directory Manager Security Service Settings](/docs/directorymanager/11.0/signin/service/securityservice/manage.md)
