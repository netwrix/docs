---
title: "Microsoft Entra ID Permissions for Directory Manager"
description: "See the Microsoft Graph, Exchange Online, and SharePoint permissions that the Directory Manager app registration needs in Microsoft Entra ID."
keywords:
  - Graph API permissions
  - application permissions
  - Exchange Online permissions
  - SharePoint delegated permissions
  - Microsoft Graph application permissions
sidebar_position: 20
---

# Microsoft Entra ID Permissions for Directory Manager

When you use a Microsoft Entra ID identity store, the user must have certain role assignments
and application permissions on the registered app in Microsoft Entra ID.

This topic lists the roles and permissions Directory Manager needs to perform operations in a Microsoft
Entra ID provider.

See the [Manage Directory Manager Licenses](/docs/directorymanager/11.0/signin/concepts/licensing.md)
topic for additional information on Directory Manager licensing.

## Graph API Application Permissions

The following application permissions are required.

![Channel application permissions for the registered app in Microsoft Entra ID](/images/directorymanager/11.0/configureentraid/register/channel.webp)

![Directory application permissions for the registered app in Microsoft Entra ID](/images/directorymanager/11.0/configureentraid/register/directory.webp)

![Group application permissions for the registered app in Microsoft Entra ID](/images/directorymanager/11.0/configureentraid/register/group.webp)

![Mail application permissions for the registered app in Microsoft Entra ID](/images/directorymanager/11.0/configureentraid/register/mail.webp)

![Role application permissions for the registered app in Microsoft Entra ID](/images/directorymanager/11.0/configureentraid/register/role.webp)

![User application permissions for the registered app in Microsoft Entra ID](/images/directorymanager/11.0/configureentraid/register/user.webp)

![User password and phone application permissions for the registered app in Microsoft Entra ID](/images/directorymanager/11.0/configureentraid/register/user-pw-phone.webp)

## Office 365 Exchange Online Permissions

![Office 365 Exchange Online ExchangeManageAsApp permission for the registered app](/images/directorymanager/11.0/configureentraid/register/exchange.webp)

## SharePoint Delegated Permissions

![SharePoint AllSites delegated permissions for the registered app](/images/directorymanager/11.0/configureentraid/register/allsites.webp)
