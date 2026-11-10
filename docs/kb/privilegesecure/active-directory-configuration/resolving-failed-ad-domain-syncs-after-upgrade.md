---
description: >-
  Resolve failed "Sync AD Domain" actions after upgrading from Privilege Secure
  3.5 or earlier to 3.6 or later by re-entering the service account password.
keywords:
  - Active Directory
  - AD sync
  - Sync AD Domain
  - Netwrix Privilege Secure
  - service account
  - password
  - upgrade
  - failed sync
  - Resources
  - Service Accounts
products:
  - privilegesecure
sidebar_label: Resolving Failed AD Domain Syncs after Upgrade
tags:
  - kb
  - active-directory-configuration
title: "Resolving Failed AD Domain Syncs after Upgrade"
knowledge_article_id: kA04u000000LLlaCAG
---

# Resolving Failed AD Domain Syncs after Upgrade

## Overview

This article describes how to resolve failed "Sync AD Domain" actions after an upgrade from Netwrix Privilege Secure for Access Management 3.5 or earlier to Privilege Secure 3.6 or later.

## Instructions

To resolve failed Active Directory (AD) syncs after an upgrade, reconfigure your Active Directory service account.

1. In the Privilege Secure console, go to **Configuration > Service Accounts**. Select your Active Directory service account.
2. Click inside the password field and retype the account's password. This ensures that the stored password in the Privilege Secure database is correct.
3. To verify, go to your AD domain under the **Resources** menu and use the **Test** button. The reconfigured service account should now be functioning, and you should now be able to run manual or scheduled Active Directory syncs as normal.
