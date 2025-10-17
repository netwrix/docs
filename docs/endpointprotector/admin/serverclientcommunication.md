---
title: "Server – Client Communication"
description: "Server – Client Communication"
sidebar_position: 170
---

# Server – Client Communication

This section details the communication between the Endpoint Protector Server and Client encrypted by
the TLS protocol.

- On Endpoint Protector Server version 5.7.0.0 TLSv1.2 is enabled by default and TLSv1.1 could be
  enabled upon request (backwards compatibility to older agents/appliances) in 5.7.0.0.
- On Endpoint Protector Server version 5.8.0.0 TLSv1.2 and TLSv1.3 will be enabled by default.
  TLSv1.1 could be enabled upon request (backwards compatibility to older agents/appliances) in
  5.8.0.0.

## Endpoint Protector Client

**TLS 1.3 Compatibility**

| OS      | Older version                                                    | Newer version                                  | Endpoint Protector Client Features                                                |
| ------- | ---------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------- |
| Windows | Not compatible Windows 7, XP, and versions older than Windows 10 | Compatible Windows 10, version 1903 and higher | Uses Windows' built-in TLS encryption engine (Schannel).                          |
| macOS   | Compatible                                                       | Compatible                                     | Uses a custom bundled OpenSSL package shipped with the Endpoint Protector Client. |
| Linux   | Not compatible                                                   | Compatible                                     | Uses Linux's built-in OpenSSL engine.                                             |

## Endpoint Protector Server

**TLS 1.3 Compatibility**

| Older than 5.7.0.0        |                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| Version 5.7.0.0 or higher | For in-place upgrades via Live Update (deprecated feature starting with 2509 version), the Linux OS libraries must be upgraded by Customer Support |
