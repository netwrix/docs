---
title: >-
  System Error — Object Reference Not Set to an Instance of an Object — Cannot
  View Groups Page in Netwrix Change Tracker
description: >-
  You can log in to Netwrix Change Tracker but receive "System Error - Object
  Reference not set to an instance of an object" when opening the Groups page.
  This article explains how to resolve the issue by verifying user rights and
  Active Directory integration settings.
sidebar_label: Object Reference Error on Groups Page
keywords:
  - Change Tracker
  - Netwrix Change Tracker
  - Object Reference
  - groups page
  - permissions
  - AD integration
  - users
  - login error
  - system error
  - user rights
  - FQDN
  - Active Directory
products:
  - change-tracker
tags:
  - kb
  - troubleshooting-and-errors
knowledge_article_id: ka04u000000HdAGAA0
---

# System Error — Object Reference Not Set to an Instance of an Object — Cannot View Groups Page in Netwrix Change Tracker

## Symptom

You can log in to Netwrix Change Tracker, but when you go to **Settings > Groups**, you receive the following error:

```text
System Error - Object Reference not set to an instance of an object
```

<!-- Image removed: Screenshot of the Object Reference error on the Groups page -->

## Cause

This error occurs when your account does not have the correct user rights to view the Groups page.

## Resolution

1. Log out of the Netwrix Change Tracker user account that you are currently using.
2. Log in as the default **admin** account in Netwrix Change Tracker.
3. Navigate to the **Groups** tab in the **Settings** tile.
4. Verify that the groups are visible. If they are, the previous account lacks the user rights required to view device groups.
5. Go to **Settings > Users**.
6. Check whether Active Directory integration is enabled and whether it requires a fully qualified domain name (FQDN) for login.

   <!-- Image removed: Screenshot showing AD Integration example requiring FQDN for login -->

7. If AD integration requires an FQDN, review the username in **Settings > Users**.
8. Verify that the username matches exactly what the user provides at login, including the domain prefix (for example, `DOMAIN\username`).

   <!-- Image removed: Screenshot showing correct vs incorrect username format — DOMAIN\username (correct) vs username without domain (incorrect) -->
