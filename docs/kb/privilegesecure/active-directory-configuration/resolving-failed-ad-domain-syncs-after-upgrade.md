---
description: >-
  Learn how to resolve failed "Sync AD Domain" actions after upgrading to
  Netwrix Privilege Secure 3.6+ by reconfiguring the Active Directory service
  account.
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
  - privilege-secure-access-management
sidebar_label: Resolving Failed AD Domain Syncs after Upgrade
tags: []
title: "Resolving Failed AD Domain Syncs after Upgrade"
knowledge_article_id: kA04u000000LLlaCAG
---

# Resolving Failed AD Domain Syncs after Upgrade

## Summary
This article discusses how to resolve failed "Sync AD Domain" actions following an upgrade from Netwrix Privilege Secure 3.5 or earlier, to Netwrix Privilege Secure 3.6 or later.

## Instructions
To resolve failed Active Directory syncs after an upgrade, reconfigure your Active Directory service account.

1. In the Netwrix Privilege Secure console, navigate to **Configuration > Service Accounts**. Select your Active Directory service account.
2. Click inside the password field, and retype the account's password. This will ensure that the stored password in the Netwrix Privilege Secure database is correct.
3. To verify, navigate to your AD domain under the **Resources** menu, and use the **Test** button. The reconfigured service account should now be functioning.
4. You should now be able to run manual or scheduled Active Directory syncs as normal.
