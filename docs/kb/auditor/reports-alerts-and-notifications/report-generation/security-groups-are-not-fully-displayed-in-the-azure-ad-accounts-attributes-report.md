---
description: >-
  Explains why the Azure AD Accounts — Attributes report shows “XXX and more”
  for the Member of attribute and how to view the full group list using the
  Azure AD Accounts - Effective Group Membership report.
keywords:
  - Azure AD
  - security groups
  - group membership
  - Azure AD Accounts
  - Effective Group Membership
  - Expand Group Membership
  - Netwrix Auditor
  - Attributes report
products:
  - auditor
sidebar_label: Security Groups are Not Fully Displayed in the Azu
tags: []
title: "Security Groups are Not Fully Displayed in the Azure AD Accounts – Attributes Report"
knowledge_article_id: kA0Qk0000000ITBKA2
---

# Security Groups are Not Fully Displayed in the Azure AD Accounts – Attributes Report

## Question

Why does the **Azure AD Accounts — Attributes** report show security groups membership (the **Member of** attribute) for an account in the format **XXX and more** instead of the full groups list?

## Answer

In short, the answer is lack of space on the report page. Since there are a lot of groups those users are members of, the report does not have enough space to show all of them.

However, as an alternative, you can use the **Azure AD Accounts - Effective Group Membership** report along with the **Azure AD Accounts – Attributes** reports.

The thing is that when you click the **Expand Group Membership** link in the **Azure AD Accounts - Attributes** report, it basically redirects you to the information from the **Azure AD Accounts - Effective Group Membership** report.

Therefore, by using both reports simultaneously, you will be able to check the effective group membership information from the other report (**Azure AD Accounts - Effective Group Membership**) which will have the full list of the groups an account is a member of.

> **IMPORTANT:** If you run Netwrix Auditor from a **remote server (client)**, please verify it has the same version and build as your Auditor Server. They must be exactly the same.
