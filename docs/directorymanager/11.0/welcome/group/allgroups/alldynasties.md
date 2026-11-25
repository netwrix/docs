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

A [Dynasties in Directory Manager](/docs/directorymanager/11.0/welcome/group/dynasty/overview.md) is a Smart Group
that creates and manages other Smart Groups using information in the directory. This view lists only
the Dynasties created in Directory Manager in the connected identity store. It doesn't include
expired and deleted Dynasties.

The **Type** column shows whether a Dynasty is a parent, middle, or leaf Dynasty. Both middle and
leaf Dynasties are child Dynasties. The parent Dynasty comes at the top of the hierarchy, followed
by middle and then leaf Dynasties.

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- For a Geographical, Organizational, or Custom Dynasty: the name of a child Dynasty starts with the
  name of its parent Dynasty (unless you change the naming template for Dynasty children).
- For a Managerial Dynasty: by default, the naming template for its child Dynasties starts with
  "Direct reports of `<manager>`".

You can
[Modify Search Directory](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md#modify-search-directory)
to search Dynasties and add
[Filter All Groups](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md#filter-all-groups) by
clicking **Dynasties Grid Filters**. All the Dynasties matching the filters appear.

**See Also**

- [View and Manage All Groups in Directory Manager](/docs/directorymanager/11.0/welcome/group/allgroups/allgroups.md)
- [Dynasties in Directory Manager](/docs/directorymanager/11.0/welcome/group/dynasty/overview.md)
- [Manage Dynasties in Directory Manager](/docs/directorymanager/11.0/welcome/group/workingwithgroups/dynastyfunction.md)
- [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
- [How Group Expiry Works in Directory Manager](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupexpiry.md)
- [Join or Leave a Group in Directory Manager](/docs/directorymanager/11.0/welcome/group/workingwithgroups/groupjoinleave.md)
- [Work with Groups in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
- [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
