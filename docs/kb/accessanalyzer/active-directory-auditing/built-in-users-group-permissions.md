---
description: >-
  Explains whether the built-in Windows Users group (S-1-5-32-545) is required
  for Netwrix Access Analyzer and where to find the default installation folder
  and role-based access documentation.
keywords:
  - Users group
  - S-1-5-32-545
  - built-in users
  - permissions
  - Netwrix Access Analyzer
  - installation folder
  - STEALTHbits
  - StealthAUDIT
  - role based access
products:
  - access-analyzer
sidebar_label: Built-in Users Group Permissions
tags:
  - active-directory-auditing
title: "Built-in Users Group Permissions"
knowledge_article_id: kA0Qk0000001JDVKA2
---

# Built-in Users Group Permissions

## Question

During the security assessment in the Netwrix Access Analyzer environment, the use of the **Users** group (`S-1-5-32-545`) was noted for Access Analyzer services and folders. Does Netwrix Access Analyzer require the use of the **Users** group?

## Answer

The use of the **Users** group is not required—Netwrix Access Analyzer implements the **Users** group by default. You can modify the permissions for the installation folder to exclude the group. Refer to the following path for the default installation folder for Access Analyzer:

```text
C:\Program Files (x86)\STEALTHbits\StealthAUDIT\
```

Refer to the following article for additional information on Role Based Access to the Netwrix Access Analyzer console: https://docs.netwrix.com/docs/auditor/10_8 (Access — Role Based Access · v11.6).

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8 (Access — Role Based Access · v11.6)
