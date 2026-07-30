---
title: Tips and Tricks
description: Advanced configuration patterns, exclusion strategies, and best practices for Secure Download Manager.
sidebar_position: 20
---

# Tips and Tricks

## Start with a Pilot OU Before Rolling Out Broadly

Before linking a Secure Download Manager policy to your entire organization, link it to a small
pilot OU containing a representative set of users from different departments. Enable
**Enable logging for this policy** on each Exclusions Policy during the pilot. Run the policy
for a week, review the PolicyPak event logs, and identify any workflows that need exclusions.
This prevents a wave of support tickets after a broad rollout.

## Always Combine URL Pattern and File Extensions for the Strongest Exclusions

An Exclusions Policy with only a **File Extensions** value, for example `exe`, allows any EXE
to execute regardless of where it was downloaded from. An exclusion with only a **URL Pattern**
allows any file type from that source. Combining both fields in the same Exclusions Policy
requires both conditions to match before the exclusion fires — giving you the narrowest and
most precise exception.

For example, to allow EXE files downloaded specifically from your internal software portal:

| Field | Value |
|---|---|
| URL Pattern | `https://software.contoso.com/*` |
| File Extensions | `exe msi` |

## Use Wildcards in URL Patterns for Azure DevOps and CDN Sources

Internal tooling and build systems often serve files from URLs with changing path segments.
Use wildcards to accommodate these patterns without over-broad exclusions:

```
*dev.azure.com/NetwrixCorporation/*
```

This matches any file served from the Netwrix Azure DevOps organization, regardless of the
project or path, without opening the entire `dev.azure.com` domain.

## Use Item Level Targeting to Scope Exclusions by Role

Each Exclusions Policy supports Item Level Targeting. Use it to restrict an exclusion to
specific users or machines without creating separate GPOs:

- Allow developers to run EXEs from a build server URL, while keeping the restriction for
  all other users.
- Allow IT admins to run MSI files from any source for imaging and deployment tasks.
- Apply stricter exclusion rules on shared or kiosk machines based on OU or computer name.

Global Settings don't support Item Level Targeting. If you need different notification or
email behavior per group of machines, use separate GPOs.

## Use Variables in the Notification Message to Reduce Support Tickets

Custom notification text supports `%DOWNLOADED_FILE_NAME%`, `%DOWNLOADED_FILE_SOURCE_URL%`,
and `%DOWNLOADED_FILE_ZONE_ID%`, as well as standard process variables. Including the
source URL in the message gives users the information they need to submit a meaningful
helpdesk request:

```
"%DOWNLOADED_FILE_NAME%" was blocked because it was downloaded from
%DOWNLOADED_FILE_SOURCE_URL% (Zone ID: %DOWNLOADED_FILE_ZONE_ID%).
To request an exception, visit helpdesk.contoso.com.
```

## Use the Email Tab for Audit Trails in Security-Sensitive Environments

The **Email** tab in Global Settings sends a detailed alert on every block event, including
process information and network activity context. Configure **Send To** with a shared security
mailbox or your SIEM's email ingestion address. Check **Open the message in Notepad instead**
during initial testing to verify the alert content before enabling live delivery.

## Combine with PolicyPak Least Privilege Manager for Layered Defense

Secure Download Manager prevents execution at the browser download stage. PolicyPak
Least Privilege Manager controls whether executables that reach the desktop can elevate.
Together:

1. Secure Download Manager blocks execution of unknown files from the browser.
2. Least Privilege Manager controls elevation of any executable that reaches the desktop.

See the
[Least Privilege Manager](/docs/policypak/components/leastprivilegemanager/overview.md)
documentation for configuration details.

## Review Secure Download Manager Entries in the ADM Report

Both Global Settings and Exclusions Policies are included in the PolicyPak ADM report. After
deployment, generate an ADM report and filter for Secure Download Manager to audit:

- Which machines have the component enabled.
- Which Exclusions Policies are active and what URL patterns and file extensions they allow.

This is especially useful in environments where multiple admins manage GPOs, as the report
gives a consolidated view of the effective configuration across all collections.
