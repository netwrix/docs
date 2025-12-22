---
description: >-
  If you install Password Manager on a non-domain DMZ, users cannot log in to
  the Help-Desk or Admin portals with domain credentials because the front-end
  server authenticates using local accounts. This article explains two ways to
  use domain accounts for these portals.
keywords:
  - Password Manager
  - DMZ
  - non-domain
  - Admin portal
  - Help-Desk
  - IIS
  - back-end server
  - local accounts
  - authentication
products:
  - general
sidebar_label: Access to Administrative portal in non-domain DMZ
tags:
  - setup-and-deployment
title: "Access to Administrative portal in non-domain DMZ"
knowledge_article_id: kA00g000000H9bTCAS
---

# Access to Administrative portal in non-domain DMZ

## Symptom
I installed Password Manager on a non-domain DMZ and cannot log to the **Help-Desk** or **Admin portal** using regular credentials.

---

## Cause
The issue occurs because users are authenticated by the front-end server. Non-domain machine has only local accounts and cannot use domain accounts.

---

## Resolution
There are two ways of using domain accounts to authenticate the **Admin** or **Help-Desk** portals installed on a non-domain DMZ:

### Option 1. Configure the Password Manager Web application as follows:
1. Configure **Internet Information Services (IIS)** on your back-end server.
2. Install the **Password Manager Web application** on the back-end server.
3. Remove the **Help-Desk** and **Admin portals** from the front-end server.

### Option 2. Create new local accounts with the same credentials on both front-end and back-end servers.
- The accounts must be assigned local administrators rights.
- Use these accounts to log on the **Admin** or **Help-Desk** portals on a non-domain DMZ.
- When logging on, enter user names without any domain prefix.
