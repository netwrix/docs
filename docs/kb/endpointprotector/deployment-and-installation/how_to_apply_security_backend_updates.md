---
description: >-
  This article explains how to use the Security Backend Updates section in Endpoint Protector to check for and apply security updates.
keywords:
  - security updates
  - Endpoint Protector
  - system backup
sidebar_label: Apply Security Backend Updates
tags:
  - deployment-and-installation
title: "How to Apply Security Backend Updates"
knowledge_article_id: kA0Qk0000002B2zKAE
products:
  - endpoint-protector
---

# How to Apply Security Backend Updates

## Overview

This article explains how to use the Security Backend Updates section in **Endpoint Protector** to check for and apply security updates. You can view information on recent updates, see a list of available updates, and apply updates as needed.

> **IMPORTANT:** Security update options are only available for customer-hosted instances (for example, AWS, Google Cloud, etc.), except for Operating System and Kernel upgrades. Updates are not tested beforehand but are pulled from the official Linux repository.

### Prerequisites

- Test the updates in a test environment first.
- Capture a virtual machine snapshot.
- Make a system backup from **System Maintenance** in the **System Backup v2** section.

## Instructions

1. In the **Endpoint Protector** console, navigate to **Dashboard** > **Live update**.
2. Select one of the available security update types and click **Check Updates**:
   - **Security**: Updates all security-related packages (Critical and High).
   - **Other**: Downloads and applies any update available to third-party libraries, kernel, OS packages, and MySQL database.
   - **All Updates**: Downloads and applies Informational and Optional/Unclassified updates.
3. If updates are available, click **Apply Updates**.

> **IMPORTANT:** Some updates may automatically restart the **Endpoint Protector** server or other sub-services in the background. If updates do not apply, create a ticket in the Support Portal for further investigation.