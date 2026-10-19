---
description: >-
  Supported special characters for Netwrix Change Tracker user and agent
  passwords, and how to configure local password requirements.
keywords:
  - password
  - special characters
  - PCI-DSS
  - user accounts
  - agent passwords
  - password policy
  - password requirements
  - agent authentication
  - special character list
  - user password settings
  - System Settings
products:
  - change-tracker
sidebar_label: Special Characters in Passwords
tags:
  - kb
  - configuration-and-setup
title: Using Special Characters in Passwords
knowledge_article_id: ""
---

# Using Special Characters in Passwords

## Overview

Administrators responsible for Netwrix Change Tracker and its user accounts should change default passwords to strong, unique passwords immediately. Attackers can exploit weak or default credentials to propagate an attack if they compromise a system.

Payment Card Industry Data Security Standard (PCI-DSS) Requirement 2 specifically states that an organization cannot use vendor-supplied defaults for system passwords and other security parameters.

## Instructions

### Supported Special Characters

When creating passwords that include special characters, use only the characters from the following list to ensure that remote agents and users can connect and log in successfully:

**! ? . , $ # * ' ; / : @ ~ ( ) _ +**

### Configuring Local Password Requirements

If you cannot integrate Change Tracker with your Active Directory server, configure local user password requirements through **Settings** > **System Settings**, under the **User Password Settings** heading.
