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

The Compromised rule rejects passwords from prior breaches. These passwords shouldn't be used because they are vulnerable to credential stuffing attacks.

- Enable the **Compromised** button to enable the Compromised rule.

- Enter the path to your compromised password base files in the text box. The path can contain
  environment variables like %SystemRoot%.

    :::warning
    Using shared hash files degrades performance and could jeopardize security.
    
    :::
