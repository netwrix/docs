---
description: >-
  Explains the meaning and impact of the "Licensed Host Count Exceeded" banner
  in Netwrix Access Analyzer and how to determine and resolve host licensing
  issues.
keywords:
  - licensed host count
  - license file
  - Netwrix Access Analyzer
  - licensed hosts
  - watermark
  - ADInventory
  - host discovery
  - support
  - sales
products:
  - access-analyzer
sidebar_label: What Does "Licensed Host Count Exceeded" Mean in t
tags:
  - reference-and-technical-specifications
title: What Does "Licensed Host Count Exceeded" Mean in the Access Analyzer Banner?
knowledge_article_id: kA04u0000000IvdCAE
---

# What Does "Licensed Host Count Exceeded" Mean in the Access Analyzer Banner?

## Summary
The Netwrix Access Analyzer license mechanism is based on the number of rows in host inventory for legacy reasons. Because the product is now typically licensed based on count of Active Directory users, the banner indicating a problem with licensing can cause concern.

## Issue
User opens the Netwrix Access Analyzer Console and the application banner contains the message `Licensed Host Count Exceeded`.

## Instructions
This message is generated when someone has added more hosts to their database than they have been licensed for. To find out how many hosts an environment is licensed for, follow these steps:

1. On the menu bar, select **Help** > **About** in the Netwrix Access Analyzer console.
2. In the About window, view the licensed modules and the licensed hosts section. This number is controlled by the license file.

To increase the host count, contact your account manager or email sales@stealthbits.com. In most cases, there is no associated cost because the product is licensed on a per-user basis rather than on a per-host basis. Netwrix Access Analyzer for Windows and Netwrix Access Analyzer for Systems Governance are notable rare exceptions where licensing may be server-based instead of user-based. The error has no impact on functionality of the product, and reports will still be generated for all hosts scanned. The only other noticeable result of exceeding a host count is that there is a watermark on the published report.

Most often, the reason that there are too many hosts is that there is a host discovery task that is looking at too broad of a scope such as an IP sweep or an Active Directory query that looks at every OU instead of a single OU. If this is what happened in your environment, you can reach out to support@stealthbits.com and an engineer can assist you in removing the excess hosts and properly scoping the discovery query.

**Internal Note:** Even though they may just need a new license file with a higher host limit, the number of hosts can be considered a proxy for the size of an organization. As such, the `Licensed host count exceeded` message may be an indication that a true-up is in order. Perform a health check on the `ADInventory` job group and verify the number of AD Users in production.

## Product
**Product:** Netwrix Access Analyzer  
**Module:** Netwrix Access Analyzer - Core  
**Versions:** All  
**Legacy Article ID:** 2423
