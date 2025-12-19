---
description: >-
  Lists the service account permission requirements to configure Office 365 as a
  messaging provider for Netwrix Directory Manager Identity Store. Covers the
  required administrator roles and their capabilities.
keywords:
  - Office 365
  - service account
  - identity store
  - messaging provider
  - Netwrix Directory Manager
  - Global Administrator
  - Exchange Administrator
  - User Administrator
products:
  - directory-manager
sidebar_label: Office 365 Service Account Requirements for Identi
tags:
  - system-administration-and-maintenance
title: "Office 365 Service Account Requirements for Identity Store Configuration"
knowledge_article_id: kA0Qk0000002JeTKAU
---

# Office 365 Service Account Requirements for Identity Store Configuration

## Overview

This article contains the service account requirements for configuring Office 365 as a messaging provider in Netwrix Directory Manager Identity Store. Netwrix Directory Manager enables you to create an identity store on an identity provider and perform group and user management tasks, such as creating groups, scheduling group updates, expiring groups, creating users and mailboxes, and managing user directory profiles.

If you want to use Office 365 as a messaging provider for creating mail-enabled objects, Netwrix Directory Manager provides a built-in feature to help you set up Office 365 as a messaging provider.

## Instructions

A service account with one of the following permission configurations is required to connect to Office 365.

- **Global Administrator**
- **Exchange Administrator:** Can manage all aspects of the Exchange product.
- **User Administrators:** (User Account Administrator) Can manage all aspects of users and groups, including resetting passwords for limited administrators.
