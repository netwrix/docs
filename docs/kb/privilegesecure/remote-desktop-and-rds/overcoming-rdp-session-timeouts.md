---
description: >-
  This article explains how to respond to timeouts experienced during Remote
  Desktop Protocol (RDP) sessions when Group Policy Objects (GPOs) enforce
  strict idle timeouts. It provides steps for sessions created via the Netwrix
  Privilege Secure UI and for sessions provisioned through DirectConnect.
keywords:
  - RDP
  - timeout
  - idle timeout
  - Group Policy
  - GPO
  - Netwrix Privilege Secure
  - DirectConnect
  - session deprovision
products:
  - privilege-secure-access-management
sidebar_label: Overcoming RDP Session Timeouts
tags: []
title: "Overcoming RDP Session Timeouts"
knowledge_article_id: kA0Qk00000014nxKAA
---

# Overcoming RDP Session Timeouts

## Overview

This article explains how to respond to timeouts experienced during Remote Desktop Protocol (RDP) sessions in environments where Group Policy Objects (GPOs) enforce strict idle timeouts.

## Instructions

### If a Netwrix Privilege Secure RDP session is locked due to timeout, take the following steps.

- For sessions provisioned through the Netwrix Privilege Secure UI:
  1. Close your RDP session window. The session will remain active.
  2. Resume your work by launching a new RDP session, either through the **Active** tab of the **Dashboard** or through the **My Activities** card for your activity.

- For sessions provisioned through DirectConnect via an RDP manager:
  1. When the RDP session is terminated, the Netwrix Privilege Secure session will be deprovisioned.
  2. You will need to relaunch a new DirectConnect session to continue your work.
