---
title: "Remote Access Gateway"
description: "Remote Access Gateway"
sidebar_position: 10
---

# Remote Access Gateway

The Remote Access Gateway (RAG) may be added to any Netwrix Privilege Secure installation to
securely extend access to external users such as remote workers or third-party vendors. VPN-less
access is provided via web page with browser-based sessions for RDP and SSH.

![architecture](/images/privilegesecure/4.2/remoteaccessgateway/architecture.webp)

The RAG is made up of two components:

**RAG Portal**

A dedicated web server to be installed in the DMZ. This is the front-end of the solution for end
users and by default the website runs on HTTPS\443. The RAG Portal communicates with the RAG gateway
over HTTPS\443

**RAG Gateway**

The gateway runs inside the corporate network and provides a bridge between the RAG Portal and the
Netwrix Privilege Secure installation. The RAG Gateway communicates to the Netwrix Privilege Secure
web service on port 6500 and the Proxy on 4489 and 4422 for RDP and SSH, respectively.
