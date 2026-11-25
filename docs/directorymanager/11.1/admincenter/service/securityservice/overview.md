---
title: "Security Service in Directory Manager"
description: "Learn what the Directory Manager Security service does, why to replace its default signing key, and how to run multiple Security services."
sidebar_position: 20
keywords:
  - Security service
  - single sign-on
  - signing key
  - multiple Security services
  - load balancer
---

# Security Service in Directory Manager

Admin Center lets you quickly create and deploy a Security service. This web-based service is a single sign-on implementation for Directory Manager clients. It authenticates and authorizes users on different Directory Manager clients and functionalities according to their roles. The service also encrypts and decrypts data that the Data service stores in, and fetches from, the Directory Manager database on SQL Server.

You can create multiple Security services. The default service is created while configuring Directory Manager.

## The default Security service

See [The Default Data Service](/docs/directorymanager/11.1/admincenter/service/dataservice/overview.md#the-default-data-service).

At the time of Directory Manager installation, a generic signing key is assigned to the Directory Manager Security Service. For security reasons, use a unique signing key specific to your environment. With the Netwrix Directory Manager (formerly GroupID) Signing Key Utility, you can replace the old signing key with a new key. For more information, see the [Directory Manager Signing Key Utility](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md) topic.

## Creating multiple Security services

To create multiple Security services, see the [Create Multiple Data Services for Load Balancing](/docs/directorymanager/11.1/admincenter/service/dataservice/overview.md#create-multiple-data-services-for-load-balancing) topic. Replace references to the Data service with the Security service.

After you define multiple Security services, you can enable communication between them. As a result, session information for signed-in users persists across multiple Directory Manager clients. For more information, see the [Manage Advanced Settings](manage.md#manage-advanced-settings) section of the [Manage Directory Manager Security Service Settings](/docs/directorymanager/11.1/admincenter/service/securityservice/manage.md) topic.
