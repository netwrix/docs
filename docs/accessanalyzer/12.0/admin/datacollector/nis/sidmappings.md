---
title: "NIS: SID Mappings"
description: "NIS: SID Mappings"
sidebar_position: 50
---

# NIS: SID Mappings

Use the SID Mappings page to specify the Windows-style SID mappings for the Unix User ID and Group
ID. It is a wizard page for the category of:

- Scan NIS User and Groups

![NIS Data Collector Wizard SID Mappings page](/images/accessanalyzer/12.0/admin/datacollector/nis/sidmappings.webp)

The default settings work for most environments. Use this page to **Add**, **Edit**, or **Remove**
ID Mappings. You can add multiple entries. For each range of User ID or Group ID entered, Access
Analyzer adds the offset to the ID, and the resulting SID uses the format with `%d` replaced by the
ID.
