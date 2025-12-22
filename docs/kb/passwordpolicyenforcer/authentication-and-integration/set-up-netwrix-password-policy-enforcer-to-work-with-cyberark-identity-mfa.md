---
description: >-
  Explains how to whitelist Netwrix Password Policy Enforcer so it works with
  CyberArk Identity Multi-Factor Authentication (MFA) by adding a registry key
  on client machines.
keywords:
  - Netwrix Password Policy Enforcer
  - CyberArk Identity
  - MFA
  - credential provider filters
  - registry
  - AnixisPPCFilter
  - whitelist
  - PPE
  - Windows Registry
products:
  - password-policy-enforcer
sidebar_label: Set Up Netwrix Password Policy Enforcer to Work wi
tags: []
title: "Set Up Netwrix Password Policy Enforcer to Work with CyberArk Identity MFA"
knowledge_article_id: kA0Qk0000001M4vKAE
---

# Set Up Netwrix Password Policy Enforcer to Work with CyberArk Identity MFA

## Symptom

In your environment with Netwrix Password Policy Enforcer (PPE) and CyberArk Identity Multi-Factor Authentication (MFA) set up, users do not see any password policy requirements.

## Cause

PPE must be whitelisted to operate correctly in the CyberArk Identity environment.

## Resolution

On PPE clients, create and add the following registry key to allow the correct operation of PPE and CyberArk Identity:

```registry
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Provider Filters\{DBB51941-EB03-4C20-9FEF-84902D73E987}]
@="AnixisPPCFilter"
"Disabled"=dword:00000001
```
