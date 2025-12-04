---
description: >-
  Explains why Nwx executables are regularly removed and re-added to domain
  controllers and confirms this is expected behavior related to the network
  traffic compression service.
keywords:
  - netwrix
  - nwx
  - NwxSaclTunerAgent.exe
  - NwxNlaAgent.exe
  - NwxFsAgent.exe
  - network traffic compression
  - domain controller
  - compression service
  - data collection
  - executables
products:
  - auditor
sidebar_label: Nwx Executables Removed and Readded to Domain Cont
tags: []
title: "Nwx Executables Removed and Readded to Domain Controllers"
knowledge_article_id: kA04u000001114GCAQ
---

# Nwx Executables Removed and Readded to Domain Controllers

## Question

The same Netwrix Auditor-related executable files are being regularly removed and readded to a DC in the environment. The list of files includes `NwxSaclTunerAgent.exe`, `NwxNlaAgent.exe`, and `NwxFsAgent.exe`. Should this behavior be expected?

## Answer

Yes, this behavior is to be expected — these executable files represent the network traffic compression service running on domain controllers. The use of the up-to-date version of compression service executables is ensured when copying these files on every data collection. The compression service collects and pre-filters data to send it to your Netwrix Auditor server in a highly compressed format. For additional information on network traffic compression service, refer to the following article: [How the Network Traffic Compression Service Works](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-the-network-traffic-compression-service-works).

> **IMPORTANT:** While not recommended, you can disable the compression service. Refer to the following article for additional information on monitoring plan setup: Monitoring Plans — Create a New Plan.
