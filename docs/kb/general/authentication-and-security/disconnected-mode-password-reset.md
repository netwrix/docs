---
description: >-
  Explains how disconnected-mode password reset works for the Logon Prompt
  Extension and how to configure registry keys to enforce or prohibit local
  cached password resets.
keywords:
  - disconnected-mode
  - password reset
  - cached password
  - GINA
  - Logon Prompt Extension
  - PRM_SuppressLaterEnrollment
  - PRM_ResetCredentialsCache
  - Group Policy
products:
  - general
sidebar_label: Disconnected-mode password reset
tags:
  - authentication-and-security
title: "Disconnected-mode password reset"
knowledge_article_id: kA00g000000H9dxCAC
---

# Disconnected-mode password reset

## Overview
The disconnected-mode reset enables the GINA extension on the Windows logon screen to reset a user's cached password, even when the machine is not connected to the domain.

Netwrix Password Manager is able to reset a password in a local cache if both of the following are true:

## Requirements
1. The Password manager Logon Prompt Extension is installed  
2. The user is enrolled through the local enrollment wizard, which is a part of the Logon Prompt Extension

## Behavior
If the Password Manager server cannot be reached, the Password Manager client can reset the password locally (in the cache). That password applies only to the current machine and becomes invalid as soon as the machine reconnects to the domain.

## Registry settings
To ensure all users enroll through the enrollment wizard, enable forced enrollment by creating the key `PRM_SuppressLaterEnrollment` with the value `1` in `HKLMSoftwareWow6432NodePoliciesNetWrixPassword Manager` (Wow6432Node only for x64 OS).

If you want to prohibit the reset of the password in the local cache, create the DWORD `PRM_ResetCredentialsCache` with the value `0` in `HKLMSoftwareWow6432NodePoliciesNetWrixPassword Manager` (Wow6432Node only for x64 OS).

All the above keys can be applied to all machines via Group Policy, using the template provided with Netwrix Password Manager.

## Reference
Refer to paragraph 3.3 procedure 4 of the Administrators guide for detailed information on applying the template:

https://www.netwrix.com/download/documents/NetWrix_Password_Manager_Administrator_Guide.pdf
