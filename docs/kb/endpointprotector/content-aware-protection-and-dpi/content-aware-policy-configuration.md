---
description: >-
  Explains how to create and configure Content Aware Policies to detect
  sensitive content, set thresholds, and control data exit points across
  operating systems.
keywords:
  - content aware
  - policy
  - data protection
  - thresholds
  - exit points
  - file transfers
  - DPI
  - clipboard
  - OneDrive
  - printers
products:
  - endpointprotector
sidebar_label: Configuring Content Aware Policies
tags:
  - content-aware-protection-and-dpi
  - kb
title: "Configuring Content Aware Policies"
knowledge_article_id: kA0Qk0000002BCYKA2
---

# Configuring Content Aware Policies

## Overview

Content Aware Policies are rules for sensitive content detection that manage file transfers for users, computers, groups, or departments. You can create, edit, or delete policies, or apply predefined policies to address your organization’s data protection needs. You can prioritize policies, and you can enforce multiple policies on the same entity.

Content Aware Protection is a separate module from Device Control and eDiscovery, and it requires separate licensing and activation before you can create policies. For a full overview of the Content Aware Protection module, including activation and licensing requirements, see [Content Aware Protection](/docs/endpointprotector/admin/cap_module/capmodule).

> **NOTE:**
> Content Aware Policies also apply to the File Allowlist. Endpoint Protector now inspects all previously allowed files for sensitive content and, depending on the policy configuration, reports, blocks, or allows them.

## Policy Information and Configuration

When creating a Content Aware Policy, provide the following information:

- **OS Type:** Select the operating system (Windows, macOS, or Linux).
- **Policy Name:** Enter a name for the policy.
- **Policy Description:** Enter a description for the policy.
- **Policy Action:** Choose one of the following:
  - **Block & Report** – Deny and report sensitive content transfers.
  - **Report only** – Allow transfers but report sensitive content.
  - **Block only** – Deny transfers without reporting.
  - **Block and Remediate** – Deny transfers but allow user remediation with justification.
- **Policy Type:** Standard, Outside Hours, or Outside Network.
- **Policy Template:** Select or create a custom notification template.
- **Policy Status:** Enable to activate the policy.
- **Client Notifications:** Enable to send notifications to clients.
- **Global Thresholds:** Enable or disable global thresholding.
- **Threat Threshold Range:** Set the lowest (**Min**) and highest (**Max**) number of content violations for which the policy applies. Select **No maximum** to leave the range open. Version 2611 and later.
- **Severity:** Select **Informative** (default), **Low**, **Medium**, **High**, or **Critical**. Every event that the policy produces carries this severity. Version 2611 and later.
- **File Size Threshold:** Set the file size (in MB) for blocking or reporting transfers.

> **NOTE:**
> If a File Size Threshold is set, it applies to the entire policy, regardless of file types or custom content. The value must be a positive, whole number. For best results, start with the **Report only** action to monitor data use without interrupting activity. To enforce Outside Hours or Outside Network options, enable the setting on the specific device after saving the policy.

## Thresholds and Use Cases

Content Aware Policies support the following threshold types and best practices:

- **Regular Threshold:** This threshold applies to individual content types (e.g., it blocks four or more SSNs).
- **Global Threshold:** This threshold applies to combined threats (e.g., it blocks four or more threats of different types).
- **Best Practice:** Place **Block & Report** policies with thresholds at higher priority than **Report only** policies.
- **Range and severity:** The range and severity apply only when both the Server and the Client are version 2611 or later. Existing policies keep their threshold as the minimum, with no maximum. See [Threshold ranges and severity](/docs/endpointprotector/admin/cap_module/cappolicies#threshold-ranges-and-severity).

## Policy Exit Points

Policy Exit Points allow you to monitor and control the transfer of sensitive data across various platforms and channels:

- **Applications:** Web browsers, email clients, instant messaging, cloud/file sharing, social media, and others.
- **Storage Devices:** Monitor transfers to custom classes or all storage devices. For Windows, file transfers are monitored both to and from removable media.
- **Clipboard:** Monitor content captured through copy, cut, and paste operations. Applies to confidential content defined in the policy. Copy operations are always monitored; paste restrictions can be extended to specific applications.
- **Additional Exit Points:** Network shares, thin clients, print screen, and printers.

> **NOTE:**
> When printers are enabled as an exit point, also enable the **Advanced Printer** and **MTP Scanning** options in Settings (Global, Groups, Computers, etc.).

## Limitations and Special Cases

Content Aware Policies have the following limitations:

- **Encrypted content:** Endpoint Protector cannot scan encrypted files or applications that use encryption to secure communication.
- **Universal Windows Platform applications:** Applications such as Windows 10 Mail run in isolated environments, which limits add-on use and blocking by Content Aware policies.
- **Linux:** Paste functionality is limited to Xorg GNOME sessions. On Wayland, content blocking occurs during copy operations. Snap-based applications may affect file event detection.
- **Adobe Flash:** Select Adobe Flash Player from the Web Browser category to block sites using Adobe Flash Active X.
- **OneDrive for Business:** Enable Deep Packet Inspection (DPI) to distinguish it from OneDrive.
- **Block CD/DVD Burning:** This option is available only for Windows, for both built-in and third-party burning features.
- **Zoho WorkDrive and GDrive (Google Drive) sync applications:**
  - Reported or blocked file names display internal cache paths instead of the original file name, which prevents location-based and file name denylists from working reliably.
  - Block and Report log entries may be duplicated due to application-level transfer retries, and reported file sizes may be inaccurate.
  - File shadowing works intermittently. Shadows may contain corrupted content or be created without a hash, preventing download from the server.
