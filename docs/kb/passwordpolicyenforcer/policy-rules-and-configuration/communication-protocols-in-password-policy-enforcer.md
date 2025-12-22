---
description: >-
  Explains the communication protocols supported by Netwrix Password Policy
  Enforcer (PPE) and provides step-by-step instructions to configure UDP or RPC
  communication between the Password Policy Server and Clients.
keywords:
  - Netwrix Password Policy Enforcer
  - PPE
  - RPC
  - UDP
  - Password Policy Server
  - Password Policy Client
  - Group Policy
  - PPE/Web
products:
  - password-policy-enforcer
sidebar_label: Communication Protocols in Password Policy Enforce
tags: []
title: "Communication Protocols in Password Policy Enforcer"
knowledge_article_id: kA0Qk0000001CgfKAE
---

# Communication Protocols in Password Policy Enforcer

## Overview

This article covers communication protocols used in Netwrix Password Policy Enforcer (PPE). In PPE v10.2 and newer, you can select a communication protocol to be used between the Password Policy Server and Client installations.

> **IMPORTANT:** Before implementing the RPC protocol, update all Password Policy Clients in your environment to the latest version (v10.2 and later).

> **IMPORTANT:** PPE/Web v7.11 and Netwrix Password Reset v3.3 do not yet support the RPC protocol. Do not implement the RPC protocol in the NPR and PPE/Web environments.

## Instructions

Refer to the following steps to set up PPE to use one of the available communication protocols:

### To use the UDP protocol

1. In the main PPE screen, select **Password Policy Server** in the left pane > **PPS Properties**.
2. In the **General** tab, specify the used port in the **Password Policy Server Port** field.

### To use the RPC protocol

1. In the main PPE screen, select **Password Policy Server** in the left pane > **PPS Properties**.
2. In the **General** tab, specify `0` in the **Password Policy Server Port** field.
3. In the Group Policy Management Console, locate the domain policy governing the PPE domain. Right-click the policy and click **Edit...**.
4. In the left pane, proceed to **Computer Configuration** > **Policies** > **Administrative Templates** > **Netwrix Password Policy Enforcer** > **Netwrix Password Policy Client**.
5. Right-click the **Communication settings** setting and select **Edit**.
6. Switch the **Type of communication** value to **RPC** and click **OK** to save changes.
