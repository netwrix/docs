---
description: >-
  Recently created Active Directory objects may not appear in Netwrix Privilege
  Secure until a domain synchronization runs. This article explains how to
  verify the domain sync status and run a manual synchronization so users,
  groups, and computers become available.
keywords:
  - Active Directory
  - AD sync
  - Netwrix Privilege Secure
  - domain synchronization
  - Last Synchronized
  - Resources
  - Synchronize Now
  - users
  - groups
  - computers
products:
  - privilege-secure-access-management
sidebar_label: 'Active Directory (AD) Users, Groups, or Computers '
tags: []
title: "Active Directory (AD) Users, Groups, or Computers Not Available to Add to SbPAM"
knowledge_article_id: kA04u000000PdKUCA0
---

# Active Directory (AD) Users, Groups, or Computers Not Available to Add to SbPAM

## Summary

Recently created Active Directory (AD) users, groups, or computers may not be immediately available to be added to the Netwrix Privilege Secure console, due to the last time Active Directory was synced with Netwrix Privilege Secure.

## Instructions

1. Log in to Netwrix Privilege Secure as an admin user, and navigate to **Resources**.
2. Confirm the domain the desired users and/or groups are members of has already been added (synced) to Netwrix Privilege Secure.  
   - If the domain doesn't appear in the Resources table, add it using the **+ New Domain** button above the Resources table.
3. After confirming the domain is a resource in Netwrix Privilege Secure, click the domain's name in the Resources table.
4. Confirm the **Last Synchronized** date and time.  
   - If it is not recent, click **Synchronize Now** to immediately run a domain sync.

![A domain resource as displayed in Netwrix Privilege Secure's web application.](./../0-images/ka04u000000HdF1_00N0g000004CA0p_0EM4u000004biML.png)

Upon successful domain sync, the **Last Synchronized** field for the domain will update. All users, groups, and computers in the domain will now be available to be onboarded to Netwrix Privilege Secure.
