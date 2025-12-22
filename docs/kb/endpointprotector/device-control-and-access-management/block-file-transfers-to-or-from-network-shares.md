---
description: >-
  Explains how to block file transfers to or from network shares by configuring
  the Content Aware Protection policy. Includes step-by-step instructions and
  examples for specifying network share paths.
keywords:
  - network share
  - denylist
  - Content Aware Protection
  - file transfer
  - UNC path
  - Endpoint Protector
  - block file transfer
  - denylist file location
products:
  - endpoint-protector
sidebar_label: Block File Transfers to or from Network Shares
tags:
  - device-control-and-access-management
title: "Block File Transfers to or from Network Shares"
knowledge_article_id: kA0Qk0000002B6oKAE
---

# Block File Transfers to or from Network Shares

## Overview

This article explains how to block file transfers to or from network shares using the Content Aware Protection policy.

## Instructions

1. Ensure that **Network Share** is selected in the Content Aware Protection policy.
2. Navigate to **Denylists and Allowlists > Denylists**.
3. Select the **File Location** tab.
4. Click the **Add** button.
5. In the **Content** text box, add the network share path without the two leading backslashes (`\`):
   - This is correct and will block file transfers: `192.168.10.10\test`
   - This is incorrect and will not block file transfers: `\192.168.10.10\test`
6. In the **Groups** or **Computers** section, select the computers or groups that the denylist should be applied to.
7. Save the changes.
