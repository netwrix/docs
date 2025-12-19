---
description: >-
  Lists the accounts that Netwrix Account Lockout Examiner uses, their roles,
  and recommendations for permissions and licensing.
keywords:
  - Account Lockout Examiner
  - credentials
  - service account
  - help-desk
  - license
  - permissions
  - Account Lockout Examiner Administrator
  - Helpdesk Operator
  - Netwrix
products:
  - auditor
sidebar_label: Credentials used by Account Lockout Examiner
tags: []
title: "Credentials used by Account Lockout Examiner"
knowledge_article_id: kA00g000000H9UFCA0
---

# Credentials used by Account Lockout Examiner

What credentials does Netwrix Account Lockout Examiner use?

Netwrix Account Lockout Examiner uses two types of accounts:

1. **The service account** - an account used to run the Netwrix Account Lockout Examiner service. This account is used to collect logs and examine machines. It is recommended to use a domain admin account. [Here is the list](https://www.netwrix.com/kb/1396) of all required rights and permissions.
2. **An account to run the console.** By default, credentials of the user that is logged in currently are used. It is counted by the license and is shown as examination initializer. This account must be granted the Account Lockout Examiner Administrator role in the product settings. This role allows access to the Help-desk portal as well. It is recommended to grant the account the local admin role.
3. **An account you enter to access the Help-desk portal.** Usually the portal prompts for the credentials; otherwise the credentials of the user that is logged in currently are used. This account is also counted by the license. It must be granted the Helpdesk Operator role in the product settings.
