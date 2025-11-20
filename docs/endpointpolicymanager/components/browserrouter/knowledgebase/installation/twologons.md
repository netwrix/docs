---
title: "Why doesn't Endpoint Policy Manager Browser Router routes take effect the first time I log on to Windows 8.1 or Windows 10?"
description: "Why doesn't Endpoint Policy Manager Browser Router routes take effect the first time I log on to Windows 8.1 or Windows 10?"
sidebar_position: 50
---

# Why doesn't Endpoint Policy Manager Browser Router routes take effect the first time I log on to Windows 8.1 or Windows 10?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router rules (and Default Browser
specification) might take two logons to take effect and/or one background GPupdate.

This is by design.

The first time the user logs on, Endpoint Policy Manager Browser Router needs to get set up and
introduce itself to the OS as the "Default Browser."

Then on the next Group Policy refresh (second logon or one logon plus a manual or background
GPupdate), Endpoint Policy Manager Browser Router should be "saved" and ready for use.

All Endpoint Policy Manager Browser Router policies should work at that point.


