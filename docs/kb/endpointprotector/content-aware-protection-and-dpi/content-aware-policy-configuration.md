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
  - endpoint-protector
sidebar_label: Content Aware Policy Configuration
tags:
  - content-aware-protection-and-dpi
title: "Content Aware Policy Configuration"
knowledge_article_id: kA0Qk0000002BCYKA2
---

# Content Aware Policy Configuration

## Overview

Content Aware Policies are rules for sensitive content detection that manage file transfers for users, computers, groups, or departments. You can create, edit, or delete policies, or apply predefined policies to address your organization’s data protection needs. Policies can be prioritized, and multiple policies can be enforced on the same entity.

> **NOTE:** Content Aware Policies also apply to the File Allowlist. All files previously allowed will now be inspected for sensitive content and, depending on the policy configuration, either reported, blocked, or allowed.

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
- **Threat Threshold:** Set the maximum allowed content violations for a file transfer.
- **File Size Threshold:** Set the file size (in MB) for blocking or reporting transfers.

> **NOTE:** If a File Size Threshold is set, it applies to the entire policy, regardless of file types or custom content. The value must be a positive, whole number. For best results, start with the **Report only** action to monitor data use without interrupting activity. To enforce Outside Hours or Outside Network options, enable the setting on the specific device after saving the policy.

## Thresholds and Use Cases

- **Regular Threshold:** Applies to individual content types (e.g., blocks four or more SSNs).
- **Global Threshold:** Applies to combined threats (e.g., blocks four or more threats of different types).
- **Best Practice:** Place **Block & Report** policies with thresholds at higher priority than **Report Only** policies.

## Policy Exit Points

Policy Exit Points allow you to monitor and control the transfer of sensitive data across various platforms and channels:

- **Applications:** Web browsers, email clients, instant messaging, cloud/file sharing, social media, and others.
- **Storage Devices:** Monitor transfers to custom classes or all storage devices. For Windows, file transfers are monitored both to and from removable media.
- **Clipboard:** Monitor content captured through copy, cut, and paste operations. Applies to confidential content defined in the policy. Copy operations are always monitored; paste restrictions can be extended to specific applications.
- **Additional Exit Points:** Network shares, thin clients, print screen, and printers.

> **NOTE:** When printers are enabled as an exit point, also enable the **Advanced Printer** and **MTP Scanning** options in Settings (Global, Groups, Computers, etc.).

## Limitations and Special Cases

- **Universal Windows Platform applications** (e.g., Windows 10 Mail) run in isolated environments, limiting add-on use and blocking by Content Aware policies.
- **Linux:** Paste functionality is limited to Xorg GNOME sessions. On Wayland, content blocking occurs during copy operations. Snap-based applications may affect file event detection.
- **Adobe Flash:** Select Adobe Flash Player from the Web Browser category to block sites using Adobe Flash Active X.
- **OneDrive for Business:** Enable Deep Packet Inspection (DPI) to distinguish from OneDrive.
- **Block CD/DVD Burning:** Available only for Windows, for both built-in and third-party burning features.
