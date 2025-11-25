---
description: >-
  Explains how to enable the Monitor webmail setting in Netwrix Endpoint
  Protector to scan the subject and body of web-based email messages and
  describes behavior, considerations, and limitations.
keywords:
  - monitor webmail
  - webmail scanning
  - deep packet inspection
  - Gmail
  - Yahoo
  - Outlook
  - Netwrix Endpoint Protector
  - Content Aware Protection
products:
  - endpoint-protector
sidebar_label: Utilize the Monitor Webmail Setting for Subject an
tags:
  - content-aware-protection-and-dpi
title: "Utilize the Monitor Webmail Setting for Subject and Body Scanning"
knowledge_article_id: kA0Qk0000002BFdKAM
---

# Utilize the Monitor Webmail Setting for Subject and Body Scanning

## Overview

The **Monitor webmail** setting in Netwrix Endpoint Protector enables subject and body scanning for web-based email services, including Gmail, Yahoo, and Outlook, when accessed through a browser. This article explains how to enable the Monitor webmail setting, describes its behavior, and highlights important considerations and limitations, especially when using Yahoo and Linux environments.

> **NOTE:** When using Yahoo, the email recipients whitelist for attachments will work only if the attachment is uploaded after the recipients are added. If the recipients are modified after the attachment has been added, the file will not be scanned again or validated against the new recipients list. Inconsistent behavior may be experienced on Linux machines.

## Instructions

1. Activate the **Deep Packet Inspection** module if it is not already activated.
2. Go to **Content Aware Protection** > **Deep Packet Inspection** and check the **Monitor webmail for Gmail** setting.  
   
   ![Creating a policy in Content Aware Protection](./../0-images/ka0Qk000000ESkP_0EMQk00000C7Jbh.png)
3. Go to **Content Aware Protection** and create the desired policy.
