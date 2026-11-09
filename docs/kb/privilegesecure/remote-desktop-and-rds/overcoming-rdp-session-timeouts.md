---
description: >-
  Respond to RDP session timeouts caused by strict Group Policy idle timeouts, for sessions started from the UI or through DirectConnect.
keywords:
  - RDP
  - Remote Desktop Protocol
  - timeout
  - idle timeout
  - Group Policy
  - GPO
  - Netwrix Privilege Secure
  - DirectConnect
  - session deprovision
  - My Activities
products:
  - privilegesecure
sidebar_label: "Overcoming RDP Session Timeouts"
tags:
  - kb
  - remote-desktop-and-rds
title: "Overcoming RDP Session Timeouts"
knowledge_article_id: kA0Qk00000014nxKAA
---

# Overcoming RDP Session Timeouts

## Overview

This article describes how to respond to timeouts experienced during Remote Desktop Protocol (RDP) sessions in environments where Group Policy Objects (GPOs) enforce strict idle timeouts.

## Instructions

If a Netwrix Privilege Secure for Access Management RDP session is locked due to timeout, take the following steps for your type of session.

### Sessions Provisioned Through the Privilege Secure UI

1. Close your RDP session window. The session remains active.
2. Resume your work by launching a new RDP session, either through the **Active** tab of the **Dashboard** or through the **My Activities** card for your activity.

### Sessions Provisioned Through DirectConnect via an RDP Manager

When the RDP session is terminated, the Privilege Secure session is deprovisioned. To continue your work, relaunch a new DirectConnect session.
