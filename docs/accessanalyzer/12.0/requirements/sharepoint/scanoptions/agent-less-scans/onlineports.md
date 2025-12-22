---
title: "SharePoint Online Ports"
description: "SharePoint Online Ports"
sidebar_position: 40
---

# SharePoint Online Ports

One of the following ports must be open for communication between Access Analyzer and the SharePoint
environment:

| Port | Protocol | Source                         | Direction | Target                        | Purpose             |
| ---- | -------- | ------------------------------ | --------- | ----------------------------- | ------------------- |
| 80   | TCP      | Access Analyzer Console server | ↔        | SharePoint Online Environment | HTTP Communication  |
| 443  | TCP      | Access Analyzer Console server | ↔        | SharePoint Online Environment | HTTPS Communication |
