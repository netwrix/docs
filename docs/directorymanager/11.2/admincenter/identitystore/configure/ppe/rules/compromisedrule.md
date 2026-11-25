---
title: "Configure the Compromised Rule in Directory Manager"
description: "Reject passwords found in prior breaches by pointing the Password Policy Enforcer Compromised rule at your compromised password files."
keywords:
  - Compromised rule
  - Password Policy Enforcer
  - breached passwords
  - credential stuffing
  - password rules
sidebar_position: 50
---

# Configure the Compromised Rule in Directory Manager

The Compromised rule rejects passwords from prior breaches. Don't use these passwords because they are vulnerable to credential stuffing attacks.

To configure the Compromised rule:

1. Enable the **Compromised** button to turn on the Compromised rule.

2. Enter the path to your compromised password base files in the text box. The path can contain environment variables like %SystemRoot%.

   :::warning
   Using shared hash files degrades performance and could jeopardize security.
   :::
