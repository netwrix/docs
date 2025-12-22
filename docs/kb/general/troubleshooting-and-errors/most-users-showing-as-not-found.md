---
description: >-
  User statuses on the Helpdesk portal may flip between Not locked and Not found
  after each refresh. This happens when an LDAP query to Active Directory
  returns no matching users, often due to an incorrect domain entry; the article
  explains how to verify and correct the domain.
keywords:
  - Not found
  - Not locked
  - Helpdesk
  - LDAP
  - domain
  - Active Directory
  - Password Manager
  - Users
products:
  - general
sidebar_label: Most users showing as Not found
tags: [troubleshooting-and-errors]
title: "Most users showing as Not found"
knowledge_article_id: kA00g000000H9bOCAS
---

# Most users showing as Not found

## Symptom
On the Helpdesk portal statuses of users changes from **Not locked** to **Not found** and back after every page refresh.

![User-added image](./../0-images/ka04u00000116cN_0EM7000000054QQ.png)

---

## Cause
Password Manager refreshes users' statuses every 30 seconds. Such behaviour could occur if an LDAP request to AD returns that there are no users with such names.

It could be related to an invalid domain name.

---

## Resolution
1. Go to Administrative portals - **Domains**
2. Click **Edit** the corresponding domain
3. Make sure domain name is correct and is entered in `UPPERCASE`
4. Click **OK** to save changes

![User-added image](./../0-images/ka04u00000116cN_0EM7000000054QL.png)
