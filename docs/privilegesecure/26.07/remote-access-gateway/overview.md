---
title: "Remote Access Gateway overview"
description: "Learn what the Remote Access Gateway is, which components it has, and how a browser session reaches a target system without a VPN."
sidebar_position: 10
---

# Remote Access Gateway overview

The Remote Access Gateway extends Netwrix Privilege Secure for Access Management (Privilege Secure) to external users, such as remote workers and third-party vendors. Users sign in to a web portal and open Remote Desktop Protocol (RDP) and Secure Shell (SSH) sessions in the browser. They don't need a VPN or a Privilege Secure client. Release notes and download pages also call the feature Session Remote Access or Secure Remote Access (SRA). File names and installers use the abbreviation RAG, for example `NPS.RagGateway.exe`.

The browser experience matches the Privilege Secure console for the actions an external user needs: request an activity, wait for approval, and connect to the session. See [Connect to a session in the browser](/docs/privilegesecure/26.07/remote-access-gateway/user-guide/browser-sessions.md).

{/* TODO verify: the current support position for production installs. The 26.03 page said a Netwrix engineer should be involved in the installation. Confirm whether to repeat that guidance. */}

## Components

The Remote Access Gateway has three components. Install the portal in the demilitarized zone (DMZ). Install the gateway and the Apache Guacamole daemon (guacd) inside your network.

| Component | Where it runs | What it does |
| --- | --- | --- |
| Portal | A dedicated server in the DMZ | Serves the sign-in page and the browser interface to users on port 443. It runs as the **NPS Rag Portal** Windows service and uses nginx. It forwards user requests to the gateway. |
| Gateway | A Windows server inside the network | Runs as the Internet Information Services (IIS) site **NPS Gateway Web Service** on port 6550. It passes an allowed set of requests to Privilege Secure on port 6500 and opens session connections to guacd. |
| guacd | The gateway server, in Docker under Windows Subsystem for Linux 2 (WSL 2) | Translates between the browser and the Privilege Secure proxy. It listens on port 4822 and uses Transport Layer Security (TLS) by default. |

![Remote Access Gateway architecture. A user browser connects to the Portal in the DMZ on port 443. The Portal passes requests to the Gateway on 6550. The Gateway calls the web service on 6500 and connects to guacd on 4822. guacd connects to the proxy service on 4489 for RDP or 4422 for SSH, and the proxy connects to the target.](/images/privilegesecure/26.07/remote-access-gateway/remote-access-gateway-data-path.webp)

## How a browser session reaches a target

1. The user opens the portal over HTTPS and signs in.
2. The portal forwards the request to the gateway on port 6550.
3. The gateway forwards the request to Privilege Secure on port 6500. The gateway forwards only a fixed list of requests.
4. When the user connects to an available session, the browser opens a WebSocket connection through the portal to the gateway.
5. The gateway connects to guacd on port 4822. guacd connects to the Privilege Secure proxy on port 4489 for RDP or 4422 for SSH.
6. The proxy authenticates the session, connects to the target system, and records the session.

The user's browser never connects to the application server or to the target system directly.

## What external users can reach

The gateway exposes only what an external user needs: sign-in, the activities that the user's access policies allow, the user's sessions, and approvals. Administration pages, logs, and configuration aren't available through the portal.

## Sign-in methods

A new gateway allows single sign-on (SSO) only. You can also allow local Privilege Secure users, or local and domain users. See [Configure sign-in for the portal](/docs/privilegesecure/26.07/remote-access-gateway/configuration/authentication.md).

## Plan the deployment

1. Review the hosts, software, ports, and certificates in [Remote Access Gateway requirements](/docs/privilegesecure/26.07/remote-access-gateway/requirements.md).
2. Install the gateway and guacd. See [Install the gateway and guacd](/docs/privilegesecure/26.07/remote-access-gateway/install/install-gateway.md).
3. Install the portal. See [Install the portal](/docs/privilegesecure/26.07/remote-access-gateway/install/install-portal.md).
4. Configure sign-in. See [Configure sign-in for the portal](/docs/privilegesecure/26.07/remote-access-gateway/configuration/authentication.md).

For the ports that each connection uses, see [Ports](/docs/privilegesecure/26.07/requirements/ports.md). For the Privilege Secure architecture, see [Architecture](/docs/privilegesecure/26.07/getting-started/architecture.md).
