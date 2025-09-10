---
title: "Denylists and Allowlists"
description: "Denylists and Allowlists"
sidebar_position: 60
---

# Denylists and Allowlists

From this section, you can create Denylists and Allowlists that can be used in both the Content
Aware Protection and eDiscovery modules. Once deﬁned, these lists can be enabled for a speciﬁc
policy.

**Denylists and Allowlists Availability**

| Type           | Name                   | Windows Platform                | macOS Platform | Linux Platform | Content Aware Protection Module | eDiscovery Module |
| -------------- | ---------------------- | ------------------------------- | -------------- | -------------- | ------------------------------- | ----------------- |
| Denylists      | Custom Content         | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | File Name              | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | File Location          | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | Scan Location          | Yes                             | Yes            | Yes            | No                              | Yes               |
| Denylists      | Regex                  | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | Domain and URL         | Yes                             | Yes            | Yes            | Yes                             | No                |
| Denylists      | E-mail Domain          | Yes                             | Yes            | Yes            | Yes                             | NO                |
| Allowlists     | MIME Type              | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Allowlists     | Allowed Files          | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Allowlists     | File Location          | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Allowlists     | Network Share          | Yes                             | Yes            | No             | Yes                             | No                |
| Allowlists     | E-mail Domain          | Yes                             | Yes            | Yes            | Yes                             | No                |
| Allowlists     | URL Name               | Yes\* Only on Internet Explorer | No             | No             | Yes                             | No                |
| Allowlists     | Deep Packet Inspection | Yes                             | Yes            | Yes            | Yes                             | No                |
| URL Categories | URL Categories         | Yes                             | Yes            | Yes            | Yes                             | No                |

:::info
Endpoint Protector 5.9.4+ supports larger lists, but extensive use can impact
performance. Use the minimum number of lists with reasonable entries for optimal performance.
:::


:::note
The Allowlist/Network Shares retain the old limit of 15 dictionaries, with 10 items per
dictionary.

:::
