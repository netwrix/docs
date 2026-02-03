---
description: >-
  Steps to diagnose and resolve issues where devices do not appear in the client
  list for Netwrix Endpoint Protector by checking certificates and digital
  signatures.
keywords:
  - missing devices
  - client list
  - certificate
  - GlobalSign
  - certmgr.msc
  - digital signature
  - Netwrix Endpoint Protector
  - troubleshooting
  - support
products:
  - endpoint-protector
sidebar_label: Missing Devices in the Client List
tags:
  - device-control-and-access-management
title: "Missing Devices in the Client List"
knowledge_article_id: kA0Qk0000002B4FKAU
---

# Missing Devices in the Client List

## Overview

This article outlines the steps to diagnose and resolve issues where devices do not appear in the client list for Netwrix Endpoint Protector.

## Instructions

1. Open Certificate Manager in Windows 10 by running `certmgr.msc` from the command prompt.
2. Under **Trusted Root Certification Authorities** > **Certificates**, check if GlobalSign certificates are present and take a screenshot.
3. If there is more than one GlobalSign certificate, right-click each one then **Properties**, and take a screenshot of the properties window.
4. Right-click the installer on the affected machine, select **Properties** then go to the **Digital Signatures** tab (if available), and take a screenshot.
5. Send all the above screenshots to Netwrix Technical Support (https://www.netwrix.com/support.html) and specify the client version running on the affected machines.
