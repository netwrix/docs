---
description: >-
  This article provides step-by-step instructions on how to block specific IP addresses from accessing the console by configuring login IP restrictions for the administrator account.
keywords:
  - IP address blocking
  - console access
  - login IP restrictions
sidebar_label: Block Specific IP Addresses
tags:
  - administration-security-and-monitoring
title: "How to Block Specific IP Addresses from Accessing the Console"
knowledge_article_id: kA0Qk0000002B78KAE
products:
  - endpoint-protector
---

# How to Block Specific IP Addresses from Accessing the Console

## Overview

This article provides step-by-step instructions on how to block specific IP addresses from accessing the console by configuring login IP restrictions for the administrator account.

## Instructions

To block specific IP addresses from accessing the console, configure login IP restrictions for the administrator account by following these steps:

1. In the **Endpoint Protector Management Console**, go to **System Configuration** > **System Administrators**.
2. Right-click the administrator account you want to restrict and select **Edit**.
3. Turn on **Enforce login IP restrictions**.

   ![Dialog box for enforcing login IP restrictions with the option enabled](./../0-images/servlet_image_1e592ef62413.png)

4. Enter the IP addresses from which the user is not allowed to log in.
5. Click **Save** to apply the changes.