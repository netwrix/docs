---
description: >-
  Explains how Netwrix Password Reset (PEN) determines password expiration and
  selects users for notification. Describes the main algorithm steps used by the
  tool.
keywords:
  - password expiration
  - LDAP
  - pwdLastSet
  - Netwrix Password Reset
  - notification
  - Maximum Password Age
  - PEN
  - Active Directory
  - algorithm
  - users
products:
  - auditor
sidebar_label: How does Netwrix Password Reset work?
tags: []
title: "How does Netwrix Password Reset work?"
knowledge_article_id: kA00g000000H9WUCA0
---

# How does Netwrix Password Reset (PEN) work?

Note: This only includes the main function algorithm; advanced features are not included.

1. LDAP query is used to determine the Maximum Password Age for the domain.  
2. A list of users is also determined via LDAP query.  
3. First user from the list is processed.  
4. The `pwdLastSet` attribute value is determined for this user.  
5. The number of days before the password expires in is determined based on the Maximum Password Age as well as the value of `pwdLastSet`.  
6. PEN checks whether the user matches the conditions specified in the settings (e.g. list of users whose password expires in xx days, notification options and advanced settings).  
7. If the user matches the conditions then it is added to the report, if not, then the next user in the list is processed.
