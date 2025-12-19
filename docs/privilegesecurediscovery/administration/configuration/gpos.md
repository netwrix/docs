---
title: "GPOs"
description: "GPOs"
sidebar_position: 200
---

# GPOs

GPOs

# GPOs

## Problem

With the rollout of Privilege Secure, attention often has to be given to GPOs. GPOs are used to push
access to the local administrator account for many users and groups. However, Privilege Secure
represents a paradigm shift in thinking on how privileged access is managed. Until this shift in
thinking is rectified, Privilege Secure and Active Directory will "fight" over whether an account is
in the Local Administrators group, Privilege Secure removing the account, and GPO adding it back
again, in an infinite loop. Or, vice versa, Privilege Secure is adding Persistent accounts (service
accounts) and GPO, using Restricted Groups, is removing them again.

## Solution

- Reduce the scope of these GPOs. Do not include JITA accounts (interactive accounts) in the list of
  accounts to add via GPO. If needed for initial addition of these accounts (for example, on a new
  build) use the GPO option for "Apply once and do not reapply".
- Do not rely on "Restricted Groups" to tightly control the Local Administrators group. That is what
  Privilege Secure is for. Instead use "Preferences" to _add_ Persistent accounts to the Local
  Administrators group (but not remove any). See an example of this type of GPO below under "More
  Information".

## More Information

- Example of how to use GPO to add the Privilege Secure service account (the "Protect Mode"
  account).
  [Add Privilege Secure Protect Mode Account to Windows Endpoints via GPO](/docs/privilegesecurediscovery/requirements/technicalpreparation/productmodeaccount.md)
