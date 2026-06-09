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

When you attempt to change your password, one or both of the following occur:

- No rejection event appears in the event log.
- The Password Policy Client displays a generic rejection message instead of a detailed message explaining which rules the password did not comply with.

## Cause

The Password Policy Client evaluates a subset of the Password Policy Enforcer (PPE) rules before submitting the password change to Windows.

If the password passes all client-side PPE rules but fails a Windows password policy rule (history, minimum age, maximum age, minimum length, or complexity), Windows rejects the change before PPE processes it on the domain controller. PPE did not reject the password and cannot log a rejection event or provide a detailed rejection message.

## How Password Changes Are Processed

The following steps occur in order when you change your password:

1. **Password Policy Client** — If the Password Policy Client is installed, it evaluates the password against the subset of PPE rules that the client can enforce.
   - If the password fails a client-side rule, the Password Policy Client displays a detailed rejection message and cancels the change request.
   - If the password passes all client-side rules, the change request proceeds to Windows.
2. **Windows password policy rules** — Windows Local Security Authority Subsystem Service (LSASS) checks the new password against Windows password policy rules: history, minimum age, 
  maximum age, minimum length, and complexity.
   - If the password fails any Windows rule, LSASS rejects the change immediately. PPE does not see the password on the domain controller.
   - If the password passes all Windows rules, LSASS sends it to PPE for additional checks.
3. **Password Policy Server** — On the domain controller, PPE evaluates the password against all its rules except [Similarity](pathname:///docs/passwordpolicyenforcer/11_2/admin/manage-policies/rules/similarity_rule), and accepts or rejects the password.

### Effect on the Password Policy Client

The Password Policy Client can only display a detailed rejection message in two cases:

- A client-enforced PPE rule rejects the password.
- The PPE server rejects the password on the domain controller.

If the password passes all client-side rules and Windows then rejects it, the Password Policy Client has no rejection detail from PPE to display and falls back to the generic message.

### Effect on the Event Log

PPE can only log rejection events if PPE rejects the password, either on the client or server side.

## Resolution

To ensure PPE evaluates all passwords and can provide detailed rejection messages, disable the Windows password policy rules. You must then satisfy only the PPE rules.

See [Disable Windows Rules](pathname:///docs/passwordpolicyenforcer/11_2/installation/disable_windows_rules) for instructions.

> **NOTE:** If your organization requires both Windows and PPE rules, you must satisfy both. A password that passes all client-side PPE rules but fails a Windows rule will always produce a generic rejection message, and PPE logs no event for that rejection. This is expected behavior.

## Related Links

- [Similarity](pathname:///docs/passwordpolicyenforcer/11_2/admin/manage-policies/rules/similarity_rule)
- [Disable Windows Rules](pathname:///docs/passwordpolicyenforcer/11_2/installation/disable_windows_rules)
