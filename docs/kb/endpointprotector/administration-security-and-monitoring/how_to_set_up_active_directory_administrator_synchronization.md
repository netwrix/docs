---
description: >-
  This article explains how to synchronize Active Directory (AD) administrator accounts using the AD Authentication feature, allowing for efficient management of administrator accounts.
keywords:
  - Active Directory
  - administrator synchronization
  - AD Authentication
sidebar_label: Set Up AD Administrator Synchronization
tags:
  - administration-security-and-monitoring
title: "How to Set Up Active Directory Administrator Synchronization"
knowledge_article_id: kA0Qk0000002B77KAE
products:
  - endpoint-protector
---

# How to Set Up Active Directory Administrator Synchronization

## Overview

This article explains how to synchronize Active Directory (AD) administrator accounts using the AD Authentication feature. Synchronizing AD administrators allows you to import and manage administrator accounts efficiently.

## Instructions

Follow these steps to set up AD administrator synchronization:

1. Log in to the **Endpoint Protector** web console and go to **System Configuration > System Settings**. In the **Active Directory Authentication** section, fill in the required fields.
2. Ensure the **Enable Active Directory Authentication** feature is turned on.
3. Select the connection type based on your AD server settings.
4. Enter the IP address and port used by the server.
5. In the **Domain Name** field, add the domain controller without an OU (for example, `DC=domain,DC=local` for "domain.local").
6. Enter the account suffix used by the administrator directory (for example, `@domain.local`). In some cases, you must include the domain before the username (for example, `DOMAIN\User`).
7. The AD Administrators Group can contain any other groups of users except for primary groups, which Microsoft restricts from this action. Only users in this AD group will be synced and imported as Super Administrators. You can create additional administrators with different access control levels manually from the **System Administrators** section.
8. Click **Save** to apply the changes. A banner at the top of the page will confirm success.
9. Return to the **Active Directory Authentication** section and test the connection. After confirming the connection works, click **Sync AD Administrators** to import the administrator accounts.