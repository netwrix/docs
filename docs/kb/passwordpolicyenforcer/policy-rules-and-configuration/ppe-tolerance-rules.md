---
description: >-
  Explains how the Tolerance setting affects dictionary searches in Netwrix
  Password Policy Enforcer and shows example search substrings for different
  tolerance values.
keywords:
  - tolerance
  - password-policy-enforcer
  - PPE
  - dictionary-search
  - password-matching
  - Bi-directional-Analysis
  - start-length
products:
  - password-policy-enforcer
sidebar_label: PPE Tolerance Rules
tags: []
title: "PPE Tolerance Rules"
knowledge_article_id: kA04u0000000K8rCAE
---

# PPE Tolerance Rules

The **Tolerance** determines the shortest section of the password that the tool will look for in the file. For example, let’s say your password is `PASSWORD`. If the tolerance is `4`, Netwrix Password Policy Enforcer will search the dictionary for these words:

```
PASSW
ASSWO
SSWOR
SWORD
PASSWO
ASSWOR
SSWORD
PASSWOR
ASSWORD
PASSWORD
```

The start length is `Tolerance + 1` characters. The rule may perform other searches depending on the settings (such as searching for all these words backwards if **Bi-directional Analysis** is enabled). In the example above, you can see that `SWORD` would have been found if it was in the dictionary file.

If the `Tolerance` were set to `6`, Netwrix Password Policy Enforcer would search the file for these words:

```
PASSWOR
ASSWORD
PASSWORD
```

Notice that there are fewer searches and so Netwrix Password Policy Enforcer is less likely to find a match (more tolerant). In this example, `PASSWORD` would still be matched. So increasing the tolerance makes Netwrix Password Policy Enforcer more tolerant of shorter matches in the file. It didn't find `SWORD`, but it still found `PASSWORD`.
