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

## Symptom

When Thales SafeNet MFA and the Netwrix Password Policy Enforcer (PPE) Client are both installed on the same system:
- The PPE Client does not display password policies.
- Thales SafeNet MFA may not function correctly.


## Cause

The Thales SafeNet agent installs a credential provider under `HKEY_LOCAL_MACHINE\SOFTWARE\CRYPTOCard\AuthGINA` (CRYPTOCard is the legacy Thales subsidiary whose agent manages this key). By default, the agent blocks all other credential providers to prevent MFA bypass. The `DoNotFilter` registry value acts as an allowlist — only credential providers whose GUIDs are listed there are permitted to load alongside the Thales SafeNet provider.

## Resolution

1.	Open **Registry Editor** and navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\CRYPTOCard\AuthGINA`.

2.	Add the PPE Client GUID to the `DoNotFilter` registry value to allow the PPE Client to load alongside the Thales SafeNet credential provider:
```
{F347212E-AF6B-4726-92B3-E4DF3388D58C}
```

> **NOTE:** For more information on these registry settings, see [Registry Settings ⸱ Thales 🡥](https://thalesdocs.com/sta/agents/wla-windows_logon/wla-registry_settings/index.html).

3.	Reboot, then press **CTRL+ALT+DEL** and select **Change Password** to verify that password policies now appear for the end user.
