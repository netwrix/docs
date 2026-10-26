---
title: "How the Product Determines a Host Is Offline"
description: "How the scanner and worker services use ping, the FQDN, and the last known IP address to decide that a host is offline and return the Host Offline error."
sidebar_label: "How the Product Determines a Host Is Offline"
keywords:
- NPS-D
- SecureONE
- Remediant SecureONE
- Host Offline
- host offline error
- FQDN
- fping
- ping timeout
- last known IP address
- scanner service
- worker service
products:
- privilegesecurediscovery
tags:
- kb
- security-and-compliance
knowledge_article_id: kA04u00000110pzCAA
---

## Overview

This article describes how Netwrix Privilege Secure for Discovery decides that a host is offline. When the product contacts a system for any action, it uses the fully qualified domain name (`FQDN`) or the last known IP address. It never uses the common name (`CN`, the short name).

## How the Scanner and Worker Services Determine Offline Hosts

The scanner and worker services do the following:

1. Ping the host over `IPv4`, and then connect by using the `FQDN`. The ping uses `fping` with a timeout of `500ms`. If the connection fails, continue to the next step.
2. Ping the host, and then connect by using the last known IP address.
3. Retry both the `FQDN` and the last known IP address one more time.
4. If both retries fail, the product considers the host offline and returns the `Host Offline` error.
