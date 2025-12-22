---
description: >-
  This article provides troubleshooting steps for resolving issues with Two-Factor Authentication (2FA) in Endpoint Protector, focusing on time synchronization and alternative setup methods.
keywords:
  - Two-Factor Authentication
  - Endpoint Protector
  - troubleshooting
sidebar_label: Troubleshoot 2FA Issues
tags:
  - administration-security-and-monitoring
title: "Troubleshoot Two-Factor Authentication Issues"
knowledge_article_id: kA0Qk0000002B61KAE
products:
  - endpoint-protector
---

# Troubleshoot Two-Factor Authentication Issues

## Overview

This article provides troubleshooting steps for resolving issues with Two-Factor Authentication (2FA) in Endpoint Protector, focusing on time synchronization and alternative setup methods.

## Instructions

To troubleshoot issues with 2FA, try one or more of the following steps:

1. Ensure that the **Endpoint Protector** server date/time matches exactly with the date/time on the phone used to scan the QR code. This can be checked by following these steps:
   1. In the **Endpoint Protector** console, go to **Appliance** > **Server Maintenance** and click **Synchronize time**.
   2. Check the date and time on the phone.
2. Disable Two-Factor Authentication (2FA) in **Endpoint Protector**, then re-enable it. For detailed steps on enabling or disabling 2FA, see [Enable Two-Factor Authentication for System Admins with Google Authenticator App](/docs/kb/endpointprotector/administration-security-and-monitoring/enable_two-factor_authentication_for_system_admins_with_google_authenticator_app).
3. Instead of scanning the QR code, manually enter the code in the **Google Authenticator** app.

## Related Links

- [Enable Two-Factor Authentication for System Admins with Google Authenticator App](/docs/kb/endpointprotector/administration-security-and-monitoring/enable_two-factor_authentication_for_system_admins_with_google_authenticator_app)
- [Managing System Administrators and Administrator Groups](/docs/kb/endpointprotector/administration-security-and-monitoring/managing-system-administrators-and-administrator-groups)
- [Two-Factor Authentication](https://docs.netwrix.com/docs/endpointprotector/admin/systemconfiguration/adminandaccess#two-factor-authentication)
