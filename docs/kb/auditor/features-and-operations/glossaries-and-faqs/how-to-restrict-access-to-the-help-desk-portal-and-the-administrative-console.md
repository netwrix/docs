---
description: >-
  Explains how to restrict access by managing the Administrator and Help-Desk
  Operator roles and how to add or remove members from these roles in the
  Administrative Console and Help-Desk portal.
keywords:
  - help-desk
  - security roles
  - administrator
  - help-desk operator
  - account lockout
  - reset password
  - Netwrix Account Lockout Examiner
  - Administrative Console
  - user management
  - Security Roles
products:
  - auditor
sidebar_label: How to restrict access to the Help-Desk portal and
tags: []
title: "How to restrict access to the Help-Desk portal and the Administrative Console"
knowledge_article_id: kA00g000000H9dFCAS
---

# How to restrict access to the Help-Desk portal and the Administrative Console

## Overview

Netwrix Account Lockout Examiner uses a role-based security model that allows assigning different access permissions to users with different roles. The product uses two roles:

- **Administrator**: has complete access to all product features, including the configuration options in the Administrative Console.
- **Help-Desk Operator**: can unlock user accounts and reset passwords, and perform account lockout examinations from the Administrative Console or the Help-Desk portal. Members of this role cannot modify the product settings.

By default, the **Administrator** role includes users belonging to the local `Administrators` group on the computer where Netwrix Account Lockout Examiner is installed; and the **Help-Desk Operator** role includes users belonging to `Netwrix Account Help Desk` group in the domain where Netwrix Account Lockout Examiner is installed.

## To include or exclude users from these security groups

1. In the Netwrix Account Lockout Examiner console, navigate to **File -> Settings** and select the **Security Roles** tab.
2. Click the **Modify** button next to the group that you want to edit.
3. In the dialog that opens, click **Add** to add a member to the selected security role, or select a user and click **Remove** to exclude them.

[![User-added image]./../0-images/ka04u000000HcVz_0EM700000004wyU.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAd1&feoid=00N700000032Pj2&refid=0EM700000004wyU)

