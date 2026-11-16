---
description: >-
  This article provides step-by-step instructions for setting up a SIEM integration with Endpoint Protector.
keywords:
  - SIEM integration
  - Endpoint Protector
  - Syslog-ng
  - SIEM server
  - Security Token
  - Log Types
  - Exclude Headers
  - Disable Server Logging
sidebar_label: Configuring SIEM Integration
tags:
  - administration-security-and-monitoring
  - kb
title: "Configuring a SIEM Integration"
knowledge_article_id: kA0Qk0000002B75KAE
products:
  - endpointprotector
---

# Configuring a SIEM Integration

## Question

Can you configure a SIEM integration?

## Answer

Yes, to integrate your SIEM server with Endpoint Protector, ensure you meet the following requirements:

- The SIEM server has a private IP address if it is on the same network as the Endpoint Protector server, or a public IP address or DNS if it is on a different network.
- The SIEM server can receive Syslog-ng type logs.

After you meet the requirements, log in to the Endpoint Protector web console and follow these steps:

1. Navigate to **Appliance > SIEM Integration**.
2. Click **Add New**. In the New Server window, fill in all required information. You can use an IP address, DNS, or FQDN.
3. If you enable **Disable Server Logging**, Endpoint Protector sends logs directly to the SIEM server and does not keep them on the Endpoint Protector server.
4. The **Security Token** field is optional and is only required by some SIEM servers for a successful connection.
5. If you do not want to receive any header and only need the data, enable the **Exclude Headers** option.
6. Select all **Log Types** that you want to send to the SIEM server.
7. Click **Save** to complete the integration setup. The server now redirects logs to your SIEM server.

> **NOTE:**
> Endpoint Protector does not send previous logs to the SIEM server. It forwards only logs received after you set up the integration.

For the full configuration reference, including SIEM Encryption for the TCP protocol, see [SIEM Integration](/docs/endpointprotector/admin/appliance#siem-integration) in the Appliance documentation.

## Reviewing Exported Log Formats and Fields

Endpoint Protector exports logs to your SIEM server in a standard format, with a specific set of fields for each log type (for example, Device Control, Content Aware Protection, and Admin Action). See [SIEM Export Log Formats](/docs/endpointprotector/admin/appliance#siem-export-log-formats) for the full field reference by log type.

Review the exported log formats and fields before completing the integration, and adjust your SIEM parser accordingly. Netwrix periodically adds fields and data to the standard format across releases, so a parser configured against an older format may not capture newer fields.

> **NOTE:**
> On version 2608, the structure of the SIEM messages can differ from the previous SIEM Export format because of changes in the database. Version 2611 fixes this issue and restores the previous format. Upgrade to 2611 to get the previous format back.
