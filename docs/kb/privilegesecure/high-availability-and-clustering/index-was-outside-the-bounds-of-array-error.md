---
description: >-
  The High Availability Configuration tool returns "Index was outside the bounds
  of the array." when the NPS Rest URL has no port. Specify port 443 in the URL.
keywords:
  - NPS Rest URL
  - HA Configuration
  - Index was outside the bounds of the array
  - NPS.HAMgr
  - port 443
  - Privilege Secure
  - High Availability
  - HA Configuration tool
  - Services page
  - FQDN
products:
  - privilegesecure
visibility: public
sidebar_label: Index Was Outside the Bounds of Array Error
tags:
  - kb
  - high-availability-and-clustering
title: "Index Was Outside the Bounds of Array Error"
knowledge_article_id: kA04u00000110w7CAA
---

# Index Was Outside the Bounds of Array Error

## Symptom

Netwrix Privilege Secure for Access Management generates the following error on each launch of the High Availability (HA) Configuration tool (`NPS.HAMgr`):

```
Index was outside the bounds of the array.
```

## Cause

The HA Configuration tool expects a port value at the end of the NPS Rest URL. If you configured your NPS Rest URL without a port, the HA Configuration tool prompts an error because it expects a port.

> **NOTE:** To verify how your NPS Rest URL is set up, complete the following steps:
>
> 1. On the main Privilege Secure screen, click the **Configuration** tab.
> 2. In the left pane, select **Services**. The page includes the **NPS Rest URL** field. For more information about the **Services** page in Privilege Secure, see the following article: System Settings Pages − Services Page · v4.0.
>
> ![Services page screenshot](./../0-images/ka0Qk0000002ijJ_0EMQk000003vpYj.png)

## Resolution

Specify the `443` port in the NPS Rest URL. The following code block shows the Rest URL syntax and an example:

```
FQDN:port
https://pam.netwrix.com:443
```
