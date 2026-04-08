---
title: "DLL Hijack Protection Scenario 3: Protecting Installers"
description: "DLL Hijack Protection Scenario 3: Protecting Installers"
sidebar_position: 30
---

# DLL Hijack Protection Scenario 3: Protecting Installers

A user downloads an app (like VLC) from the internet and tries to run it by providing administrator credentials at a UAC prompt.

Even if the user supplies valid administrator credentials, DLL Hijack Protection intervenes. In Safe Elevated Mode, the installer is blocked because it originates from an untrusted location.

This demo shows two ways to handle it:

- **Option 1:** Create a rule to allow the application
- **Option 2:** Authorize a specific user (e.g., DOMAIN\User) to perform installations from that location — when they elevate with UAC, the install proceeds

<iframe width="560" height="315" src="https://www.youtube.com/embed/e86uvN2Awqg" title="DLL Hijack Protection Scenario 3: Protecting Installers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
