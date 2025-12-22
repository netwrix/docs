---
title: "SharePoint Online Ports"
description: "SharePoint Online Ports"
sidebar_position: 40
---

# SharePoint Online Ports

One of the following ports must be open for communication between Enterprise Auditor and the
SharePoint environment:

| Port | Protocol | Source                            | Direction | Target                        | Purpose             |
| ---- | -------- | --------------------------------- | --------- | ----------------------------- | ------------------- |
| 80   | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Online Environment | HTTP Communication  |
| 443  | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Online Environment | HTTPS Communication |
