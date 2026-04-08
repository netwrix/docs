---
title: "DLL Hijack Protection Basics: Get to know the system with a simple example"
description: "DLL Hijack Protection Basics: Get to know the system with a simple example"
sidebar_position: 10
---

# DLL Hijack Protection Basics: Get to know the system with a simple example

This scenario demonstrates running a DLL directly with rundll32.exe from an untrusted location.

Command:

```
rundll32.exe c:\temp\DLL-Notsigned.dll,EntryPointW
```

This is high-risk behavior: a DLL in a user-writable path is executed directly.
DLL Hijack Protection flags and blocks it.

When this behavior is intentional or expected, the demo shows two ways to authorize it:

- **Option 1:** Authorize the identity (allow a specific user or group to perform this action)
- **Option 2:** Authorize the DLL itself using a matching rule (path, hash, or publisher)

<iframe width="560" height="315" src="https://www.youtube.com/embed/CmG91OYEXs8" title="DLL Hijack Protection Basics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
