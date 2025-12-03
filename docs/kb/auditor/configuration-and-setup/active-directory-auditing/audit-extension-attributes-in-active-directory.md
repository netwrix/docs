---
description: >-
  Shows how to enable auditing of Active Directory extension attributes by
  editing the `ad2ecr.txt` file in the %Netwrix Auditor installation folder% so
  that extension attributes appear in reports when changed.
keywords:
  - extension attributes
  - Active Directory
  - ad2ecr.txt
  - Netwrix Auditor
  - audit
  - proxyAddresses
products:
  - auditor
sidebar_label: Audit Extension Attributes in Active Directory
tags: []
title: "Audit Extension Attributes in Active Directory"
knowledge_article_id: kA04u000000XmF4CAK
---

# Audit Extension Attributes in Active Directory

## Question

How to audit extension attributes in Active Directory?

## Answer

The set of entries specified in `ad2ecr.txt` are reported in Active Directory. In order to track changes to extension attributes in Active Directory, refer to the following steps:

1. Navigate to `%Netwrix Auditor installation folder%\Active Directory Auditing` folder.
2. Open the `ad2ecr.txt` file.
3. Place a hash symbol in front of each extension attribute to be audited, e.g.:

```
#.proxyAddresses
```

A hash symbol designates a comment nullifying the entry in the code.

4. Save changes to the file.

The extension attributes commented out will now show in reports when they are changed.
