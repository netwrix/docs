---
description: >-
  Blank Netwrix Password Reset reports can occur when the Maximum password age
  values differ between the default domain GPO and Netwrix Password Policy
  Enforcer; align these settings to restore report data.
keywords:
  - password expiration
  - password policy
  - Maximum password age
  - GPO
  - Netwrix Password Policy Enforcer
  - Netwrix Password Reset
  - Netwrix Auditor
  - blank reports
products:
  - auditor
  - password-policy-enforcer
sidebar_label: Password Expiration Notifier Generates Blank Repor
tags: []
title: "Password Expiration Notifier Generates Blank Repor Policy Enforcer"
knowledge_article_id: kA0Qk0000001IpJKAU
---

# Netwrix Password Reset Generates Blank Reports After Configuring Netwrix Password Policy Enforcer

## Related Query

- “Netwrix Password Reset reports don't work after configuring policies for Netwrix Password Policy Enforcer.”

## Symptoms

- Netwrix Password Policy Enforcer (PPE) is installed and configured in your environment.
- Netwrix Auditor Netwrix Password Reset reports do not contain any data.

## Cause

The **Maximum password age** settings mismatch in the default domain GPO and PPE.

## Resolution

Configure the **Maximum password age** setting in the default domain GPO and in Netwrix Password Policy Enforcer (PPE) so both use the same value.
