---
description: >-
  If many accounts appear as SIDs on the Helpdesk portal, Password Manager
  cannot find corresponding Active Directory entries; this article explains how
  to restore usernames by ensuring AD connectivity and restarting the service.
keywords:
  - SIDs
  - Helpdesk portal
  - Password Manager
  - Active Directory
  - Services.msc
  - service account
  - required rights
  - DCs
products:
  - general
sidebar_label: Users on Helpdesk portal are shown as SIDs
tags: [troubleshooting-and-errors]
title: "Users on Helpdesk portal are shown as SIDs"
knowledge_article_id: kA00g000000H9bJCAS
---

# Users on Helpdesk portal are shown as SIDs

At the Netwrix Password Manager Helpdesk portal a large number of accounts are showing SIDs rather than usernames.

---

Users are listed as SIDs in the Helpdesk Portal when Password Manager can not find corresponding entries in AD.
This could happen if the Password Manager service cannot contact AD for some reason.

---

To address the issue:
1. Make sure the server where Password Manager is installed can contact DCs
2. Restart the **Netwrix Password Manager** service via `Services.msc`

If this doesn't help, make sure that Password Manager service account has all [required rights](https://kb.netwrix.com/1868) and try rebooting the entire server
