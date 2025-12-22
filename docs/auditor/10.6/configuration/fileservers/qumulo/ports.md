---
title: "Qumulo Ports"
description: "Qumulo Ports"
sidebar_position: 10
---

# Qumulo Ports

Review a full list of protocols and ports required for Netwrix Auditor for Qumulo.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 514 UDP port.

| Port | Protocol  | Source                 | Target                 | Purpose                                    |
| ---- | --------- | ---------------------- | ---------------------- | ------------------------------------------ |
| 514  | UDP / TCP | Monitored file servers | Netwrix Auditor Server | Getting events from monitored file servers |
