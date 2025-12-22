---
title: "Security Service"
description: "Security Service"
sidebar_position: 20
---

# Security Service

Admin Center lets you quickly create and deploy a Security service. This web-based service is a
single sign-on implantation for Directory Manager clients. It is responsible for authenticating and
authorizing users on different Directory Manager clients and functionalities in accordance with
their roles. The service also encrypts and decrypts data that Data service stores and fetches from
the Directory Manager database on SQL Server.

You can create multiple Security services; the default service is created while configuring
Directory Manager.

## The Default Security Service

See [The Default Data Service](/docs/directorymanager/11.1/admincenter/service/dataservice/overview.md#the-default-data-service) topic.

At the time of Directory Manager installation, a generic signing key is assigned to the Directory
Manager Security Service. For security reasons, it is recommended that a unique signing key is used
which is specific to your environment. Using Netwrix Directory Manager (formerly GroupID) Signing
Key Utility you can replace the old signing key with a new key. See the
[Signing Key Utility](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md) topic for additional information.

## Why Create Multiple Security Services?

See the
[Why Create Multiple Data Services?](/docs/directorymanager/11.1/admincenter/service/dataservice/overview.md#why-create-multiple-data-services)
topic while replacing references to Data service with Security service. After defining multiple
Security services, you can enable communication between them. As a result of their communication,
logged in session-related information persists across multiple Directory Manager clients. See the
[Manage Advanced Settings](manage.md#manage-advanced-settings) section of the
[Manage Security Service Settings](/docs/directorymanager/11.1/admincenter/service/securityservice/manage.md) topics for additional information.
