---
description: >-
  When using Taxonomy Manager with a SharePoint Term Set, the tree may fail to
  load or you may be unable to edit a clue or term. This article describes
  likely causes and steps to verify connection credentials, credential
  permissions, and the conceptClassifier solution for SharePoint 2010.
keywords:
  - SharePoint
  - Term Set
  - Taxonomy Manager
  - credentials
  - '401'
  - '403'
  - '500'
  - conceptClassifier
products:
  - auditor
  - data-classification
sidebar_label: SharePoint Term Set tree fails to load or unable t
tags: []
title: "SharePoint Term Set tree fails to load or unable to edit a clue or term"
knowledge_article_id: kA00g000000H9dzCAC
---

# SharePoint Term Set tree fails to load or unable to edit a clue or term

When using **Taxonomy Manager** with a **SharePoint Term Set** either the tree fails to load or you are unable to edit a clue/term. You will typically receive one of the following errors:

- 401 Unauthorized
- 403 Access denied. You do not have permission to perform this action or access this resource
- 500 Internal Server Error

This issue is typically related to:

- **Invalid Credentials**, or
- The **SharePoint** solution not being correctly deployed (**SharePoint 2010**)

## Verify Connection Credentials

Each registered **SharePoint Term Set** has configured connection credentials allowing you to request/load the **Term Set data** from **SharePoint**. The **credentials** used for the **connection** can be viewed by:

1. Open the **QS Administration Interface**
2. Select "**Taxonomies**" from the top navigation
3. Select "**Global Settings**" from the sub navigation
4. For each affected **Term Set** select:
   1. "**Test**" to confirm **connectivity**
   2. "**Edit**" to amend the **username**/**password**

## Verify Credential Permissions

To support amending the **Term Set** structure and editing clues the specified connection credentials must either be a:

- **Term Group Manager**, or a
- **Term Store Administrator**

You can confirm this via the **Term Store Manager** interface in **SharePoint** by selecting the appropriate level (**Group**/**Store**) and verifying that the **connection credentials** are specified in the **administrator** input.

## Verify conceptClassifier Solution (SharePoint 2010 Only)

When connecting to **SharePoint 2010 Term Sets** the **conceptClassifier** for **SharePoint farm solution** must be deployed.
