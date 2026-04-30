---
title: "Synology Ports"
description: "Synology Ports"
sidebar_position: 20
---

# Synology Ports

Review a full list of protocols and ports required for Netwrix Auditor for Synology.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 514 UDP port.

| Port | Protocol  | Source                 | Target                 | Purpose                                    |
| ---- | --------- | ---------------------- | ---------------------- | ------------------------------------------ |
| 514  | UDP / TCP | Monitored file servers | Netwrix Auditor Server | Getting events from monitored file servers |
