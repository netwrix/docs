---
title: "Denylists and Allowlists"
description: "Denylists and Allowlists"
sidebar_position: 60
---

# Denylists and Allowlists

From this section, you can create Denylists and Allowlists for use in both the Content
Aware Protection and eDiscovery modules. After you define these lists, you can enable them for a
specific policy.

Denylists serve as the parameters for a Content Aware Protection or eDiscovery policy, defining
inclusively what the policy detects and protects.

**Denylists and Allowlists Availability**

| Type           | Name                   | Windows Platform                | macOS Platform | Linux Platform | Content Aware Protection Module | eDiscovery Module |
| -------------- | ---------------------- | ------------------------------- | -------------- | -------------- | ------------------------------- | ----------------- |
| Denylists      | Custom Content         | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | File Name              | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | File Location          | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | Scan Location          | Yes                             | Yes            | Yes            | No                              | Yes               |
| Denylists      | Regex                  | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | Domain and URL         | Yes                             | Yes            | Yes            | Yes                             | No                |
| Denylists      | E-mail Domain          | Yes                             | Yes            | Yes            | Yes                             | No                |
| Denylists      | Fingerprinting         | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | NDC Classification     | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | MIP Classification     | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Denylists      | Applications           | Yes                             | Yes            | Yes            | Yes                             | No                |
| Allowlists     | MIME Type              | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Allowlists     | Allowed Files          | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Allowlists     | File Location          | Yes                             | Yes            | Yes            | Yes                             | Yes               |
| Allowlists     | Network Share          | Yes                             | Yes            | No             | Yes                             | No                |
| Allowlists     | E-mail Domain          | Yes                             | Yes            | Yes            | Yes                             | No                |
| Allowlists     | Deep Packet Inspection | Yes                             | Yes            | Yes            | Yes                             | No                |
| URL Categories | URL Categories         | Yes                             | Yes            | Yes            | Yes                             | No                |

Each tab accepts up to 1,000 lists, except the Network Share allowlist, which accepts up to 15 lists. A list name must have 2 to 128 characters, and a description can have up to 256 characters. You can import lists from an `.xls` file by using the sample file on the form.

:::info
Endpoint Protector supports large lists, but extensive use can impact
performance. Use the minimum number of lists with reasonable entries for optimal performance.
:::


:::note
The Allowlist/Network Shares retain the old limit of 15 dictionaries, with 10 items per
dictionary.

:::
