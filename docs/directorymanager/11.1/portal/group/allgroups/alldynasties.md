---
title: "View Dynasties in Directory Manager"
description: "View the Dynasties in the connected identity store, see how parent and child Dynasties relate, and filter the list."
keywords:
  - Dynasties
  - parent Dynasty
  - child Dynasty
  - Dynasty naming template
  - Dynasties Grid Filters
sidebar_position: 70
---

# View Dynasties in Directory Manager

A [Dynasty](/docs/directorymanager/11.1/portal/group/dynasty/overview.md) is a Smart Group that creates and manages other Smart Groups using information in the directory. This view lists only the Dynasties created in Directory Manager in the connected identity store. It doesn't include expired and deleted Dynasties.

## Dynasty types and names

The **Type** column shows whether a Dynasty is a parent, middle, or leaf Dynasty. Both middle and leaf Dynasties are child Dynasties. The parent Dynasty is at the top of the hierarchy, followed by middle and then leaf Dynasties.

Dynasty names help you group a parent Dynasty with its child Dynasties:

- **Geographical, Organizational, or Custom Dynasty:** The name of a child Dynasty starts with the name of its parent Dynasty, unless you change the naming template for Dynasty children.
- **Managerial Dynasty:** By default, the naming template for its child Dynasties starts with "Direct reports of `manager`".

## Filter Dynasties

To search Dynasties, [modify the search directory](allgroups.md#modify-search-directory). To filter the list, [add filters](allgroups.md#filter-all-groups) by clicking **Dynasties Grid Filters**. All the Dynasties that match the filters appear.
