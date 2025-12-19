---
description: >-
  Shows how to view, create, and manage system administrators and administrator
  groups in Netwrix Endpoint Protector, and how to configure related account
  settings, roles, and two-factor authentication.
keywords:
  - Netwrix Endpoint Protector
  - system administrators
  - administrator groups
  - Super Administrator
  - two-factor authentication
  - roles and permissions
  - Active Directory
  - SSO
products:
  - endpoint-protector
sidebar_label: Managing System Administrators and Administrator G
tags:
  - administration-security-and-monitoring
title: "Managing System Administrators and Administrator Groups"
knowledge_article_id: kA0Qk0000002BCTKA2
---

# Managing System Administrators and Administrator Groups

## Overview

This article explains how to view, create, and manage system administrators and administrator groups in Netwrix Endpoint Protector. You can assign administrators different roles and permissions to control access to various modules and features.

## Instructions

### View or Manage Administrators

1. In the Netwrix Endpoint Protector Console, navigate to **System Configuration** > **System Administrators**.  
   ![System Administrators section in Endpoint Protector](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4.2/page/Content/Resources/Images/EndpointProtector/Admin/SystemConfiguration/ClientUninstall.png?_LANG=enus)
2. To create a new administrator, click **Create** and provide the following details:
   - Username and password
   - Email address
   - First and last name
   - Phone number
   - UI language
3. Configure account settings as needed:
   - **Account is active:** Enable or disable the account.
   - **Login Attempt Restrictions:** Set a timeout (5–10 minutes) after 5–10 unsuccessful login attempts.
   - **Enforce login IP restrictions:** Restrict login attempts to specific IP addresses.
   - **Require password change at next login:** Force the administrator to change their password at first login.

> **CAUTION:** The **Require password change at next login** setting is ignored if **Enforce All Administrator Password Security at Next Login** is enabled for Active Directory imported users or for SSO users (Azure and OKTA).

4. Optional: Enable additional settings as needed:
   - **Failed Login Alert:** Receive alerts for failed login attempts.
   - **Schedule Exports Alert:** Receive alerts for scheduled exports.
   - **Ignore AD Authentication:** Allow login using local EPP credentials.
5. To assign Super Administrator privileges, enable **Super Administrator**. This grants access to all departments and Netwrix Endpoint Protector sections.  
   ![Super Administrator Details](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4.2/page/Content/Resources/Images/EndpointProtector/Admin/SystemConfiguration/SuperAdministratorDetails.png?_LANG=enus)
6. To enforce two-factor authentication, enable **Two Factor Authentication** and configure Google Authenticator.
7. Assign the administrator to one or more departments or administrator groups as needed.
8. To manage administrator groups, go to **System Configuration** > **Administrators Groups**.
   - Click **Create** to add a new group.
   - Provide a group name, select roles, add a description, and assign administrators.  
   ![Administrators Groups](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4.2/page/Content/Resources/Images/EndpointProtector/Admin/SystemConfiguration/AdministratorsGroups.png?_LANG=enus)

> **NOTE:** The **Read Only** role cannot be combined with any other roles. The **Support** section is always available to all administrators, regardless of assigned roles.
