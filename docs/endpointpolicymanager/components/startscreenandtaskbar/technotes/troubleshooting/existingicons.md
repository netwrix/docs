---
title: "I use Partial/Merge mode, and expected existing icons to be maintained, but instead they were wiped out. What happened?"
description: "I use Partial/Merge mode, and expected existing icons to be maintained, but instead they were wiped out. What happened?"
sidebar_position: 30
---

# I use Partial/Merge mode, and expected existing icons to be maintained, but instead they were wiped out. What happened?

This can occur if you're doing something else to manage the Start Layout \*\*BEFORE\*\* Netwrix
Endpoint Policy Manager (formerly PolicyPak) Start Screen & Taskbar Manager is involved.

In short, there are two categories of Start Screen items:

- Default Windows groups and applications, or groups and applications pinned by user;
- Applications pinned by Enterprise (regardless of the method they were added: MDM, Group Policy,
  import-startlayout script during OSD, etc);

Items that fall into the second category "Applications pinned by Enterprise" are wiped out when new
layout is applied by Endpoint Policy Manager Start Screen & Taskbar Manager.


