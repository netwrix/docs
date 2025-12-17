---
description: >-
  This article describes how to configure security questions for an identity store in Netwrix Directory Manager.
keywords:
  - security questions
  - identity store
  - multifactor authentication
sidebar_label: Configure Security Questions
tags: []
title: "Configure Security Questions for an Identity Store"
knowledge_article_id: kA0Qk0000002LpxKAE
products:
  - directorymanager
---

# Configure Security Questions for an Identity Store

## Overview

This article describes how to configure security questions for an identity store in **Netwrix Directory Manager** (formerly GroupID).

Each identity store maintains a local pool of security questions, which administrators can modify by adding or removing questions from the global question bank. By default, four questions are added to the local pool when an identity store is created.

Security questions are supported as an authentication method for multifactor and two-factor authentication. During enrollment, users select a specified number of questions from the local pool and provide answers. For authentication, users must supply the same answers provided at enrollment.

## Instructions

1. Log in to the Admin Portal of the identity store with an account that has permissions to manage the identity store.
2. In the Admin Portal, click **Settings**.

   ![Settings option in the Admin Portal](../0-images/servlet_image_b4cc511f5745.png)

3. In **Settings**, click **Question Pool**.

   ![Question Pool section in Settings](../0-images/servlet_image_eb6ac1dac410.png)

4. From the **Question Pool** section, you can modify existing questions, add new questions, or remove questions as needed.