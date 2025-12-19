---
description: >-
  Shows how to specify a Dell EMC Unity server as a monitored item in Netwrix
  Auditor and what to consider when you use an IP address instead of the FQDN.
keywords:
  - Dell EMC Unity
  - Unity
  - Netwrix Auditor
  - monitored item
  - FQDN
  - IP address
  - DNS
  - reverse lookup
  - Active Directory
products:
  - auditor
sidebar_label: How to specify Dell EMC Unity server as a monitore
tags: []
title: "How to specify Dell EMC Unity server as a monitored item"
knowledge_article_id: kA04u000000PcpRCAS
---

# How to specify Dell EMC Unity server as a monitored item

To audit Dell EMC Unity storage system, Netwrix Auditor needs to access its registry data. You must provide the `FQDN` of the Unity storage system when you add a Dell EMC Unity storage as a monitored item in the Netwrix Auditor monitoring plan.

Alternatively, you can enter the IP address. If your Netwrix Auditor server is located in another domain (an untrusted domain or a workgroup), ensure any of the following:

- A reverse lookup zone is configured on the DNS server for the Unity system — to resolve its IP address into FQDN.

-OR-

- The Netwrix Auditor data collecting account has `Read` permissions for the `OU=EMC NAS servers` node in Active Directory.

Otherwise, data collection will fail, reporting an error caused by network path not found.
