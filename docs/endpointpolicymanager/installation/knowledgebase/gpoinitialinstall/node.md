---
title: "I installed the Admin Console MSI, but I don't see the Endpoint Policy Manager node when I go to edit a GPO. Why?"
description: "I installed the Admin Console MSI, but I don't see the Endpoint Policy Manager node when I go to edit a GPO. Why?"
sidebar_position: 20
---

# I installed the Admin Console MSI, but I don't see the Endpoint Policy Manager node when I go to edit a GPO. Why?

For Windows 7 users, ensure you have .Net Framework 3.5 installed on your management station. Later
versions of .Net Framework are not compatible with Netwrix Endpoint Policy Manager (formerly
PolicyPak) on Windows 7.

For users running Windows 8 and later, ensure you have .Net Framework 4.0 or higher installed on
your management station.

