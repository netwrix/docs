---
description: >-
  Step-by-step checklist to upgrade Netwrix Password Policy Enforcer servers and
  clients, including configuration import, license import, AD replication, and
  reboot order.
keywords:
  - Password Policy Enforcer
  - PPE
  - upgrade
  - domain controller
  - AD replication
  - license import
  - PPS Properties
  - PPE Configuration
products:
  - password-policy-enforcer
sidebar_label: Upgrade Checklist in Password Policy Enforcer
tags: []
title: "Upgrade Checklist in Password Policy Enforcer"
knowledge_article_id: kA0Qk0000001Cf3KAE
---

# Upgrade Checklist in Password Policy Enforcer

## Overview

This article covers steps to take when upgrading Netwrix Password Policy Enforcer (PPE) in your environment.

## Instructions

Refer to the following steps to complete the PPE upgrade:

1. After you upgrade the **PPE Server** installation in one domain controller (DC), select **No** when a reboot is prompted.
2. Run the **PPE Configuration** tool on the DC. Upon the launch, the upgraded **PPE Server** instance imports the configuration.
3. Import the PPE license—in the **PPS Properties** menu, select the **License** tab and import the license.
4. Allow the Active Directory replication to replicate the configuration settings to all DCs in the domain.
5. Reboot the DC with the updated **PPE** instance.
6. Upgrade and reboot other DCs.

> **NOTE:** Once you complete the steps provided above, you can upgrade the **PPE** client installations.
