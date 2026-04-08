---
title: "DLL Hijack Protection Scenario 3: Protecting Installers"
description: "DLL Hijack Protection Scenario 3: Protecting Installers"
sidebar_position: 30
---

# DLL Hijack Protection Scenario 3: Protecting Installers

A user downloads an app (like VLC) from the internet and tries to run it with admin credentials.

Even if they know the password, DLL Hijack Protection steps in:

In Safe Elevated Mode, the installer is blocked because it originates from an untrusted location.

This demo shows two ways to handle it:

- **Option 1:** Create a rule to allow the application
- **Option 2:** Allow a specific user (e.g., DOMAIN\User) to bypass the protection — so when they elevate with UAC, the install is permitted

<iframe width="560" height="315" src="https://www.youtube.com/embed/e86uvN2Awqg" title="DLL Hijack Protection Scenario 3: Protecting Installers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
