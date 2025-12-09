---
description: >-
  Netwrix Privilege Secure's High Availability Configuration tool returns "Index
  was outside the bounds of the array." when the NPS Rest URL has no port. This
  article explains the cause and shows how to resolve it by specifying port 443
  in the URL.
keywords:
  - NPS Rest URL
  - HA Configuration
  - Index was outside the bounds of the array
  - NPS.HAMgr
  - port 443
  - Privilege Secure
products:
  - privilege-secure-access-management
visibility: public
sidebar_label: Index Was Outside the Bounds of Array Error
tags: []
title: "Index Was Outside the Bounds of Array Error"
knowledge_article_id: kA04u00000110w7CAA
---

# Index Was Outside the Bounds of Array Error

## Symptom

Netwrix Privilege Secure generates the following error on each launch of the High Availability (HA) Configuration tool (`NPS.HAMgr`):

```
Index was outside the bounds of the array.
```

## Cause

The HA Configuration tool expects a port value at the end of the NPS Rest URL. If you configured your NPS Rest URL without a port, the HA Configuration tool prompts an error because it expects a port.

> **NOTE:** To verify how your NPS Rest URL is set up, refer to the following steps:
>
> 1. On the main Privilege Secure screen, click the **Configuration** tab.
> 2. In the left pane, select **Services**. The page will include the **NPS Rest URL** field. To learn more about the **Services** page in Netwrix Privilege Secure, refer to the following article: System Settings Pages − Services Page · v4.0.
>
> ![Services page screenshot](./../0-images/ka0Qk0000002ijJ_0EMQk000003vpYj.png)

## Resolution

Specify the `443` port in the NPS Rest URL. Refer to the following code block for the Rest URL syntax and example:

```
FQDN:port
https://pam.netwrix.com:443
```
