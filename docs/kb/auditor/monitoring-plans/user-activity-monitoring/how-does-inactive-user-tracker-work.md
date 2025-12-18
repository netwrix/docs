---
description: >-
  Explains how the Inactive User Tracker (IUT) in Netwrix Auditor determines
  user inactivity by querying Active Directory attributes and calculating
  inactivity periods.
keywords:
  - inactive user tracker
  - IUT
  - Active Directory
  - lastLogon
  - lastLogonTimestamp
  - createTimestamp
  - domain controller
  - LDAP
  - inactivity
  - Netwrix Auditor
products:
  - auditor
sidebar_label: How Does Inactive User Tracker Work?
tags: []
title: "How Does Inactive User Tracker Work?"
knowledge_article_id: kA00g000000H9WSCA0
---

# How Does Inactive User Tracker Work?

## Question

How does Inactive User Tracker (IUT) work?

## Answer

1. IUT requests the current date from the local machine.  
2. IUT requests the list of Active Directory users from the domain (via LDAP).  
3. IUT picks the first user from the list.  
4. IUT retrieves `lastLogon` and `lastLogonTimestamp` attributes for the user from every domain controller.

> **IMPORTANT:** In case a single domain controller is unavailable, no action will be performed.

5. If the user has never logged in, the `createTimestamp` attribute is used instead of `lastLogon` or `lastLogonTimestamp`. In case multiple `lastLogonTimestamp` entries are available, the most recent is used.  
6. Inactivity time is calculated using `createTimestamp`, `lastLogon` or `lastLogonTimestamp` and the local machine date/time to determine the number of days.  
7. If the user matches the inactivity criteria specified, they will be added to the list of inactive users and acted upon according to the configuration.  
8. Steps 4 to 7 are repeated for each user in the list.
