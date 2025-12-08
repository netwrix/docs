---
description: >-
  This article provides step-by-step instructions for setting up a SIEM integration with Endpoint Protector.
keywords:
  - SIEM integration
  - Endpoint Protector
  - Syslog-ng
sidebar_label: Set Up SIEM Integration
tags:
  - administration-security-and-monitoring
title: "Set Up a SIEM Integration"
knowledge_article_id: kA0Qk0000002B75KAE
products:
  - endpointprotector
---

# Set Up a SIEM Integration

## Question

Can you set up a SIEM integration?

## Answer

Yes, to integrate your SIEM server with **Endpoint Protector**, ensure the following requirements are met:

- The SIEM server has a private IP address if it is on the same network as the **Endpoint Protector** server, or a public IP address or DNS if it is on a different network.
- The SIEM server can receive Syslog-ng type logs.

Once the requirements are met, log in to the **Endpoint Protector** web console and follow these steps:

1. Navigate to **Appliance > SIEM Integration**.
2. Click **Add New**.
3. In the New Server window, fill in all required information. You can use an IP address, DNS, or FQDN.
4. If you enable **Disable Server Logging**, logs are sent directly to the SIEM server and are not kept on the **Endpoint Protector** server.
5. The **Security Token** field is optional and is only required by some SIEM servers for a successful connection.
6. If you do not want to receive any header and only need the data, enable the **Exclude Headers** option.
7. Select all **Log Types** that you want to send to the SIEM server.
8. Click **Save** to complete the integration setup. The server will now redirect logs to your SIEM server.

> **NOTE:** Previous logs will not be sent to the SIEM server. Only logs received after the integration is set up will be forwarded.