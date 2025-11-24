---
description: >-
  Shows how to verify whether the Netwrix Auditor server can reach the Meraki
  API and how to troubleshoot an Event ID 6023 error caused by port or firewall
  issues.
keywords:
  - Meraki
  - Meraki API
  - Netwrix Auditor
  - Network Devices Audit Service
  - Event ID 6023
  - ports
  - firewall
  - curl
  - Meraki dashboard
products:
  - auditor
sidebar_label: How to Identify Whether Auditor Server Can Receive
tags: []
title: "How to Identify Whether Auditor Server Can Receive Data from Meraki API?"
knowledge_article_id: kA0Qk0000000XGvKAM
---

# How to Identify Whether Auditor Server Can Receive Data from Meraki API?

## Symptoms

When configuring a Meraki dashboard data source, the following error appears:

```
 
        Source: Network Devices Audit Service
        Event ID: 6023
        Unable to process item: The network path was not found. 
```

When searching for the Meraki dashboard data source, no data is available.

## Cause

This error indicates an incorrect port configuration on the side of the Meraki dashboard data source.

## Instructions

To identify whether the Netwrix Auditor server can receive data from the Meraki API, open the command prompt as an administrator and execute the following command:

1. Open the command prompt as an administrator.
2. Run the command:

```bash
curl https://api.meraki.com/api/v1 > 1.html
```

This is an example of a response when the product cannot access the Meraki API:

![User-added image]./../0-images/ka0Qk0000002jaX_0EMQk0000045bUT.png)

In this case, check the ports required to audit the Meraki dashboard source and your internal firewall. Learn more about required ports and protocols in this article: Data Source Configuration — Network Devices — Network Devices Ports — v10.6 https://docs.netwrix.com/docs/auditor/10_8).

