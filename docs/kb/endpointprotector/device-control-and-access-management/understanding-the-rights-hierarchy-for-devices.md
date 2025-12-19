---
description: >-
  This article explains the rights hierarchy for devices in Netwrix Endpoint
  Protector and how permissions are applied and overridden. It also shows how to
  set precedence between Computer and User rights and explains Custom Classes.
keywords:
  - netwrix endpoint protector
  - rights hierarchy
  - device rights
  - global rights
  - group rights
  - computer rights
  - user rights
  - custom classes
  - system settings
products:
  - endpoint-protector
visibility: public
sidebar_label: Understanding the Rights Hierarchy for Devices
tags:
  - device-control-and-access-management
title: "Understanding the Rights Hierarchy for Devices"
knowledge_article_id: kA0Qk0000002B6SKAU
---

# Understanding the Rights Hierarchy for Devices

## Overview

This article explains the rights hierarchy for devices, which determines how permissions are applied and overridden in Netwrix Endpoint Protector.

The rights hierarchy for devices, from lowest to highest, is as follows:

1. Global Rights
2. Group Rights
3. Computer or User Rights (You can configure which takes precedence in **System Configuration > System Settings.**)
4. Devices

## Instructions

1. To set precedence between **Computer Rights** and **User Rights**, go to **System Configuration > System Settings** and select the desired option.  
   ![System Settings page showing precedence configuration for Computer or User Rights](./../0-images/ka0Qk000000DzNR_0EMQk00000BmNLl.png)

2. **Custom Classes** have the highest priority and override all other rights. Use Custom Classes to globally set rights for a device or class of devices identified by VID, PID, and Serial Number.
