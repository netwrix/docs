---
title: "Password Policy Client Displays Generic Message and No PPE Event Is Logged"
description: >-
  Explains why the PPE Password Policy Client displays a generic rejection message and no
  PPE event is logged when a password change fails, and how to resolve it by disabling
  Windows password policy rules.
sidebar_label: "Password Policy Client Displays Generic Message and No PPE Event Is Logged"
keywords:
  - generic rejection message
  - password rejected
  - Windows password policy
  - LSASS
  - password filter
  - event log
  - Password Policy Client
  - troubleshooting
  - Password Policy Enforcer
  - PPE
  - no event logged
  - Windows rules
products:
  - password_policy_enforcer
tags:
  - kb
  - troubleshooting-and-errors
knowledge_article_id: 
---

# Password Policy Client Displays Generic Message and No PPE Event Is Logged

## Symptom

When a user attempts to change their password, one or both of the following occur:

- The Password Policy Client displays a generic rejection message instead of a detailed message explaining which rules the password did not comply with.
- No event is written to the event log indicating that the password was rejected.

## Cause

The Password Policy Client evaluates a subset of the Password Policy Enforcer (PPE) rules before the password change is submitted to Windows. If the password passes all client-side PPE rules but fails a Windows password policy rule (history, minimum age, maximum age, minimum length, or complexity), Windows rejects the change before PPE processes it on the domain controller. PPE didn't reject the password and cannot log a rejection event or provide a detailed rejection message.

## How Password Changes Are Processed

When a user changes their password, the following steps occur in order:

1. **Password Policy Client** — If the Password Policy Client is installed, it evaluates the password against the subset of PPE rules that the client can enforce. If the password fails a client-side rule, the Password Policy Client displays a detailed rejection message and the change request is cancelled. If the password passes all client-side rules, the change request proceeds to Windows.
2. **Windows password policy rules** — Windows Local Security Authority Subsystem Service (LSASS) checks the new password against Windows password policy rules (history, age, length, and complexity). If the password fails any Windows rule, LSASS rejects the change immediately. PPE does not see the password on the domain controller.
3. **Password Policy Server** — If the password passes all Windows rules, LSASS sends it to PPE for additional checks. PPE evaluates the password against all its rules, except for [Similarity](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/rules/similarity_rule.md) on the domain controller and accepts or rejects the password.

### Effect on the Password Policy Client

The Password Policy Client can only display a detailed rejection message if the password is rejected by a client-enforced PPE rule, or if the PPE server rejects the password on the domain controller. If the password passes all client-side rules and Windows then rejects it, the Password Policy Client has no rejection detail from PPE to display and falls back to the generic message.

### Effect on the Event Log

The same is true for rejection messages in the event log. PPE can only log these events if a password is rejected by PPE, either on the client or server side.

## Resolution

To ensure PPE evaluates all passwords and can provide detailed rejection messages, disable the Windows password policy rules. Users must then satisfy only the PPE rules.

See [Disable Windows Rules](/docs/passwordpolicyenforcer/11.2/installation/disable_windows_rules.md) for instructions.

> **NOTE:** If your organization requires both Windows and PPE rules, users must satisfy both. A password that passes all client-side PPE rules but fails a Windows rule will always produce a generic rejection message, and no PPE event will be logged for that rejection. This is expected behavior.
