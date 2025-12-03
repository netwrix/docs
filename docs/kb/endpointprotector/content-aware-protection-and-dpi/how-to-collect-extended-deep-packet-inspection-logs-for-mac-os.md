---
description: >-
  This article explains how to collect extended Deep Packet Inspection (DPI)
  logs on MacOS to assist with troubleshooting and support requests. Use the
  provided script to generate a tar archive that you can attach to your support
  ticket.
keywords:
  - DPI
  - deep packet inspection
  - macOS
  - Endpoint Protector
  - epp_collect_dpi_tool
  - epp_dpi_logs.tar
  - support
  - logs
  - troubleshooting
products:
  - endpoint-protector
sidebar_label: How to Collect Extended Deep Packet Inspection Log
tags:
  - content-aware-protection-and-dpi
title: "How to Collect Extended Deep Packet Inspection Logs for Mac OS"
knowledge_article_id: kA0Qk0000002B2nKAE
---

# How to Collect Extended Deep Packet Inspection Logs for Mac OS

## Overview

This article explains how to collect extended Deep Packet Inspection (DPI) logs on MacOS to assist with troubleshooting and support requests.

## Instructions

Follow the steps below to collect the DPI logs:

1. Download and extract the following zip file:  
   [epp_collect_dpi_tool.zip ⸱ Netwrix Endpoint Protector &#129125;](https://download.endpointprotector.com/Support_files/epp_collect_dpi_tool.zip)

2. Open a terminal and run the following commands:

```bash
sudo chmod 0777 ./epp_collect_dpi_info_mac.sh
sudo ./epp_collect_dpi_info_mac.sh
```

3. The log file `epp_dpi_logs.tar` will generate on your desktop.

4. Once collected, attach the `epp_dpi_logs.tar` file to your support ticket related to this issue.
