---
title: "Webserver"
description: "Webserver"
sidebar_position: 40
---

# Webserver

#### System Components

| Webserver | Minimum         | Recommended       |
| --------- | --------------- | ----------------- |
| IIS       | 10              | 10                |
| Apache    | 2.4.58          | 2.4.58            |
| NGINX     | 1.24.0 (stable) | 1.25.4 (mainline) |

#### Required Modules/Extensions

| Attribute             | Minimum | Recommended | Applies to |
| --------------------- | ------- | ----------- | ---------- |
| URL Rewrite mod       | 2.1     | 2.1         | IIS        |
| ARR                   | 3.0     | 3.1         | IIS        |
| Websocket Protocol    | -       | -           | IIS        |
| mod_rewrite module    | -       | -           | Apache     |
| mod_proxy module      | -       | -           | Apache     |
| mod_ssl module        | -       | -           | Apache     |
| mod_proxy_http module | -       | -           | Apache     |

#### Required Configuration

**Mandatory Ports/firewall rules**

- Port 443 HTTPS to address the web server from the client (inbound)
- Port 11016 for communication with the application server (outgoing)
- Port 11018 for real-time updating (outgoing)
- (Optional) Port 11019 for using Password Secure as Identity Provider (SAML) (outgoing)
- (Optional) Port 11015 for Entra ID SCIM provisioning (outgoing)
