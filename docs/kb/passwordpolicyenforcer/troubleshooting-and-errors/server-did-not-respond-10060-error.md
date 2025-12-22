---
description: >-
  Explains the cause and resolution for the "Server did not respond (10060)"
  error in Netwrix Password Policy Enforcer, including MTU and datagram size
  considerations.
keywords:
  - Server did not respond
  - 10060
  - UDP 1333
  - MTU
  - datagram size
  - custom message
  - Password Policy Enforcer
  - PPE V9.0
products:
  - password-policy-enforcer
sidebar_label: Server Did Not Respond (10060) Error
tags: []
title: "Server Did Not Respond (10060) Error"
knowledge_article_id: kA0Qk0000000X8rKAE
---

# Server Did Not Respond (10060) Error

## Symptoms

- Netwrix Password Policy Enforcer prompts the following error:

```
The server {Servername.domain} did not respond (10060).
Make sure this server is running PPE V9.0 or later, and UDP Port 1333 is not blocked by a firewall.
```

- The affected server is online. The UDP port 1333 is not blocked by a firewall.

## Cause

The datagram size exceeds the maximum transmission unit (MTU) in the corresponding network. The number of symbols used in custom messages for PPE policy rules directly affects the datagram size.

> **NOTE:** To verify the cause, edit the custom policy rule message to include a few symbols or a short custom message. If the issue is resolved after shortening the custom rule message, proceed to edit the custom message to fit the MTU size.

## Resolution

Reduce the number of symbols in the custom policy rule messages.
