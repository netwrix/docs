---
title: "Exchange Online Auditing"
description: "Exchange Online Auditing"
sidebar_position: 40
---

# Exchange Online Auditing

Before adding an Exchange Online data source for your organization, plan for the account that will
be used for data collection. This account will be specified in the monitored item (Microsoft 365
tenant) settings.

Netwrix 1Secure DSPM will access the cloud-based Microsoft 365 infrastructure using a dedicated Microsoft
Entra ID application. This app should be created manually by user with
administrative role and assigned required permissions. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.
