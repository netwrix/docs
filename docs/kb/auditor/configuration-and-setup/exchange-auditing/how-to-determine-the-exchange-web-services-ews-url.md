---
description: >-
  Learn how to find the Exchange Web Services (EWS) URL for your Exchange Server
  using PowerShell or Outlook. Includes the default URL format and step-by-step
  instructions.
keywords:
  - EWS
  - Exchange
  - Exchange Server
  - EWS URL
  - PowerShell
  - Outlook
  - Autodiscover
  - Availability Service
products:
  - auditor
  - data-classification
sidebar_label: How To Determine the Exchange Web Services (EWS) U
tags: []
title: "How To Determine the Exchange Web Services (EWS) URL"
knowledge_article_id: kA00g000000H9eFCAS
---

# How To Determine the Exchange Web Services (EWS) URL

The default **URL** for **EWS** is usually in the format `https://mailserver/EWS/Exchange.asmx`, however this may not be correct for every **Exchange Server**.

There are two methods to find the **URL:**

## PowerShell

1. Open the **Exchange Management Shell** on the **Exchange Server**  
2. Type `Get-WebServicesVirtualDirectory |Select name, *url* | fl`

## Outlook

1. Open **Outlook**  
2. Hold the **Ctrl key** + **right-click** on the **Outlook** Icon in the system tray  
3. Select **"Test E-mail Auto Configuration"** from the menu  
4. Type in an **email address** located on the desired **Exchange Server**  
5. Click **"Test"**  
6. The URL is listed as **"Availability Service URL"**
