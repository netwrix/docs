---
description: >-
  Lists expected permission-related errors when scanning SharePoint on-premises
  and the permissions you should verify for each error.
keywords:
  - SharePoint
  - on-prem
  - permissions
  - SPAA
  - SP_DataAccess
  - Backup Operators
  - WSS_WPG
  - Central Administration
  - database
products:
  - access-analyzer
sidebar_label: Common SharePoint On-Prem Scanning Permission Erro
tags:
  - sharepoint-online-integration
title: "Common SharePoint On-Prem Scanning Permission Errors"
knowledge_article_id: kA04u0000000IfHCAU
---

# Common SharePoint On-Prem Scanning Permission Errors

## Overview

Getting the permissions right in SharePoint on-premise can be tricky, so here are the expected permission-related errors and what you should check when you see them.

## Instructions

Based on the error, check to make sure that the user has the permission(s) associated with it.

### SPAA against SharePoint 2013/2016

| Missing Permission | Expected Error |
| --- | --- |
| Local Group Membership: Backup Operators | `Unable to determine administrative site for (host URL) error accessing remote registry. Requested registry access is not allowed` |
| Local Group Membership: WSS_WPG Group | `Unable to negotiate connection to SharePoint database server (host URL): Error: Access is denied` |
| Full Read Web Application Policy | `Unable to negotiate connection to farm: Unable to negotiate connection to SharePoint server sbpmlab-sp10` |
| Site Collection Admin on Central Administration Site Collection | `Unable to retrieve site collection "URL" Error: Access denied. You do not have permission to perform this action or access this resource.` |
| No DB permissions at all | `Unable to negotiate connection to SharePoint database server (host URL): Error Connection Timeout Expired. The timeout period elapsed while attempting to consume the pre-login handshake acknowledgement. This could be because the handshake failed or the server was unable to respond back in time. The duration spent while attempting to connect to this server was - [Pre-Login] initialization=4943; handshake=1768;` |
| SP_DataAccess Role membership on SharePoint Content Databases | `Unable to negotiate connection to SharePoint database server (host URL): Error Connection Timeout Expired. The timeout period elapsed while attempting to consume the pre-login handshake acknowledgement. This could be because the handshake failed or the server was unable to respond back in time. The duration spent while attempting to connect to this server was - [Pre-Login] initialization=4943; handshake=1768;` |
| SP_DataAccess Role membership on SharePoint Config Database | `Error enumerating ISharePointSiteCollection children of ISharePointWebApplication. The EXECUTE permission was denied on the object 'proc_getSiteNames', database 'SharePoint_Config'` |
| Public membership to SharePoint_Config, Owner on the content DB | `Unable to negotiate connection to SharePoint database server sbnjqasp01: Error: The EXECUTE permission was denied on the object 'proc_getObject', database 'SharePoint_Config', schema 'dbo'` |

### SPAA against SharePoint 2010

| Missing Permission | Expected Error |
| --- | --- |
| Local Group Membership: Backup Operators | `Unable to determine administrative site for (host URL) error accessing remote registry. Requested registry access is not allowed` |
| Local Group Membership: WSS_WPG Group | `Unable to negotiate connection to SharePoint database server (host URL): Error: Access is denied` |
| Full Read Web Application Policy | `Unable to negotiate connection to farm: Unable to negotiate connection to SharePoint server sbpmlab-sp10` |
| Site Collection Admin on Central Administration Site Collection | `Unable to retrieve site collection "URL" Error: Access denied. You do not have permission to perform this action or access this resource.` |
| No DB permissions at all | `Unable to negotiate connection to SharePoint database server (host URL): Error Connection Timeout Expired. The timeout period elapsed while attempting to consume the pre-login handshake acknowledgement. This could be because the handshake failed or the server was unable to respond back in time. The duration spent while attempting to connect to this server was - [Pre-Login] initialization=4943; handshake=1768;` |
| SP_DataAccess Role membership on SharePoint Content Databases | `Unable to negotiate connection to SharePoint database server (host URL): Error Connection Timeout Expired. The timeout period elapsed while attempting to consume the pre-login handshake acknowledgement. This could be because the handshake failed or the server was unable to respond back in time. The duration spent while attempting to connect to this server was - [Pre-Login] initialization=4943; handshake=1768;` |
| SP_DataAccess Role membership on SharePoint Config Database | `Error enumerating ISharePointSiteCollection children of ISharePointWebApplication. The EXECUTE permission was denied on the object 'proc_getSiteNames', database 'SharePoint_Config'` |
| Public membership to SharePoint_Config, Owner on the content DB | `Unable to negotiate connection to SharePoint database server sbnjqasp01: Error: The EXECUTE permission was denied on the object 'proc_getObject', database 'SharePoint_Config', schema 'dbo'` |
