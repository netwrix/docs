---
description: >-
  When Thales SafeNet MFA and the Netwrix Password Policy Enforcer Client are installed on the same system, the Password Policy Enforcer Client does not display policies and Thales MFA may not function correctly. This article explains the cause and provides a registry fix.

keywords:
  - Netwrix Password Policy Enforcer
  - Thales SafeNet
  - registry
  - PPE Client
  - Windows Registry
  - MFA
  - credential provider
  - GUID
  - DoNotFilter
  - regedit
  - AuthGINA

products:
  - passwordpolicyenforcer
sidebar_label: Credential Provider Conflict Prevents Password Policies from Displaying
tags:
  - kb
title: "Credential Provider Conflict Prevents Password Policies from Displaying"
knowledge_article_id: ""
---

# Credential Provider Conflict Prevents Password Policies from Displaying

## Symptoms

When Thales SafeNet MFA and the Netwrix Password Policy Enforcer (PPE) Client are both installed on the same system, the PPE Client does not display policies.


## Cause

By default, the Thales SafeNet credential provider blocks all other credential providers, including the PPE Client, to prevent bypass.

## Resolution

1.	Open Registry Editor and navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\CRYPTOCard\AuthGINA`.

2.	Set the `DoNotFilter` registry value to the PPE Client GUID:
```
{F347212E-AF6B-4726-92B3-E4DF3388D58C}
```

> **NOTE:** For more information on these registry settings, see [Registry Settings ⸱ Thales 🡥](https://thalesdocs.com/sta/agents/wla-windows_logon/wla-registry_settings/index.html).

3.	Reboot and verify that policies now appear for the end user on the CTRL+ALT+DEL Change Password screen.
