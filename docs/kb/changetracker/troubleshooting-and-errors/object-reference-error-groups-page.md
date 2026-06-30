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
knowledge_article_id:
---

# System Error — Object Reference Not Set to an Instance of an Object — Cannot View Groups Page in Netwrix Change Tracker

## Symptom

Netwrix Change Tracker lets you log in; however, when you go to **Settings > Groups** you receive the following error:

```text
System Error - Object Reference not set to an instance of an object
```

<!-- Image removed: Screenshot of the Object Reference error on the Groups page -->

## Cause

This error occurs when your account does not have the correct user rights to view the Groups page.

## Resolution

1. Log out of the Netwrix Change Tracker user account that you are currently logged in as.
2. Log in as the default **admin** account in Netwrix Change Tracker.
3. Navigate to the **Groups** tab in the **Settings** tile.
4. Do you see the groups? You should be able to. This means that the account you previously had logged in as did not have the user rights to view the device groups.
5. Go to **Settings > Users**.
6. Do you have Active Directory integration enabled? If so, does your AD integration require you to supply the FQDN in order to log in?

   <!-- Image removed: Screenshot showing AD Integration example requiring FQDN for login -->

7. If the above is true, view the username in **Settings > Users** of Netwrix Change Tracker. This needs to be the same as the exact username you provide during login. The username must include the full domain prefix (e.g., `DOMAIN\username`) to match what Active Directory expects.

   <!-- Image removed: Screenshot showing correct vs incorrect username format — DOMAIN\username (correct) vs username without domain (incorrect) -->
