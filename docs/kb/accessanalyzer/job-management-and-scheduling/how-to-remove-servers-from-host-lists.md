---
description: >-
  Describes how to remove servers from host lists and explains why removed
  machines may reappear if still present in Active Directory.
keywords:
  - remove servers
  - host lists
  - Host Management
  - Active Directory
  - AD discovery
  - delete hosts
  - HostStatus
  - ADInventory
products:
  - access-analyzer
sidebar_label: How to Remove Servers from Host Lists
tags:
  - job-management-and-scheduling
title: "How to Remove Servers from Host Lists"
knowledge_article_id: kA04u0000000IPDCA2
---

# How to Remove Servers from Host Lists

## Overview

Delete servers no longer in the environment from host lists, as these lists contain machines that have been removed from the network.

## Instructions

### Remove a machine from the Host Management

1. Select the **Host Management** node in the top-left corner.
2. Search for the required machine.

> **TIP:** The name column can be sorted alphabetically by clicking the Name column header (once for ascending, a second time for descending), or filtered for a specific host by clicking on the drop-down option on the right hand side of the column header. Additionally you may search for hosts with an offline status in the same manner using the **HostStatus** column.

3. Right click the machine, and select **Delete Host(s)**. Multiple sequential hosts can be selected by holding down the 'shift' key while selecting hosts or multiple non-sequential hosts can be selected by holding down the 'ctrl' key while selecting hosts.

### Removed machine is still in the list

If you have removed the machine from the host management, and the next day you see it in the list again, it is possible that the machine is still in AD. During an AD host discovery query, all computers in AD will be added to the host list. Once the machine is removed from AD, and then removed from the host list, it should no longer show on the host lists.

**Module:** SA - DC - Active Directory; SA - DC - ADInventory
