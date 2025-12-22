---
description: >-
  Explains why various Linux system users (for example, root, 65534, lightdm)
  appear in the Endpoint Protector user interface and how the client determines
  the active user.
keywords:
  - endpoint protector
  - linux
  - system users
  - active user
  - root
  - lightdm
  - 65534
  - endpoint client
  - ui
products:
  - endpoint-protector
sidebar_label: Why Do Various Linux System Users Appear in the En
tags:
  - features-and-operations
title: "Why Do Various Linux System Users Appear in the Endpoint Protector User Interface?"
knowledge_article_id: kA0Qk0000002BCgKAM
---

# Why Do Various Linux System Users Appear in the Endpoint Protector User Interface?

## Question
Why do various Linux system users appear in the **Endpoint Protector UI**?

## Answer
On Linux endpoints, you will see both standard and system users in the **Endpoint Protector UI**. System users such as `root`, `65534`, and `lightdm` are created by the operating system and may appear as active users depending on running processes.

The Endpoint Protector client determines the active user by querying a system library, which returns the current user context. The UI reflects the user reported by this library at any given time.

To ensure optimal accuracy and feature support, keep both the Endpoint Protector server and client updated to the latest versions.
