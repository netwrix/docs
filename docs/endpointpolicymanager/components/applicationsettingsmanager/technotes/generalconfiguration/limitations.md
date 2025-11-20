---
title: "How many Endpoint Policy Manager policies can I create within one Group Policy Object?"
description: "How many Endpoint Policy Manager policies can I create within one Group Policy Object?"
sidebar_position: 60
---

# How many Endpoint Policy Manager policies can I create within one Group Policy Object?

This isn't a PolicyPak limitation; you could theoretically have unlimited Netwrix Endpoint Policy
Manager (formerly PolicyPak) policies (entries) within one Group Policy Object.

That being said, the only major concern would be the overall size of the "registry.pol" file WITIHIN
the Group Policy Object itself (found at following location:

```
C:\Windows\Sysvol\sysvolPolicies<GUID>user or computer
```

On Windows XP and Windows 7, the maximum size permitted by Microsoft is 5MB, and usually, it takes
almost 10-15 Paks entries to reach 5MB.

On Windows 8 and later, the max size is 100MB per Group Policy Object, meaning you can have a lot
more entries if you wanted within one Group Policy Object without issue (provided your target
machines are Windows 8 and later).


