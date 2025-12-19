---
description: >-
  Step-by-step instructions to configure rights for Outside Hours and Outside
  Network in Netwrix Endpoint Protector, including how to enable policies, set
  working hours, define DNS settings, and configure fallback rights.
keywords:
  - Outside Hours
  - Outside Network
  - Netwrix Endpoint Protector
  - device control
  - fallback policies
  - DNS
  - Content Aware Policies
  - working hours
products:
  - endpoint-protector
sidebar_label: Configuring Rights for Outside Hours and Outside N
tags:
  - device-control-and-access-management
title: "Configuring Rights for Outside Hours and Outside Network"
knowledge_article_id: kA0Qk0000002B6ZKAU
---

# Configuring Rights for Outside Hours and Outside Network

## Overview
This article explains how you configure rights for Outside Hours and Outside Network in Netwrix Endpoint Protector. These settings allow you to define different device and content access rights based on time and network conditions.

## Instructions
1. In the Netwrix Endpoint Protector Console, navigate to **Device Control** and select your configuration level:
   - Global: **Global Settings** > **Outside Hours and Outside Network**.
   - Computer, User, or Group: **Computer**/**User**/**Group Settings** > **Manage Settings**.
2. To configure the **Outside Hours policies**, enable the **Outside Hours** setting, then set the **Working Days**, **Business Hours Start Time**, and **End Time**.
3. To configure **Outside Network policies**, enable the **Outside Network** setting, then add the **DNS Fully Qualified Domain Name** and **DNS IP Addresses**.
4. Set fallback device type rights as needed by configuring fallback rights globally, or per group, user, or computer.
5. For **Content Aware Policies**, select the **Outside Network** and **Outside Hours** policy types as required.

> **IMPORTANT:** When triggered, fallback policies supersede the standard device rights. For fallback policies, **Outside Network Policies** take precedence over **Outside Hours Policies**.
