---
description: >-
  Explains why documents that are classified may not appear in Browse or Search
  results due to security trimming, and shows how to confirm and address the
  issue across supported repository types.
keywords:
  - search
  - security trimming
  - SharePoint
  - ACL
  - QS Administration
  - Microsoft Entra ID
  - ADFS
  - federated accounts
  - repositories
products:
  - data-classification
sidebar_label: Missing search results
tags: []
title: "Missing search results"
knowledge_article_id: kA00g000000H9e5CAC
---

# Missing search results

There can be a situation where documents are **classified** to a particular term but are not showing within the **Browse** results, or expected results are missing from **Search**. This article applies to content stored in the following repository types:

- **SharePoint** (Including **SharePoint Online**)
- **File Shares**
- **Box**
- **Microsoft Exchange**
- **CMIS Repositories**
- **Google Drives**

Missing documents are typically related to **security trimming** — particularly depending on the configured **authentication** mechanism. **Search** results are automatically trimmed based on source security. In the case of SharePoint this takes into account:

- Explicitly defined user security (AD Users/Groups)
- SharePoint Groups

At search time the system enumerates your access, identifying all applicable usernames (including alternate domains) and all application AD groups. These are then matched to the security (**ACLs**) of each document before returning the **trimmed** search results. There are two simple methods to confirm if trimming is the cause of missing results:

1. Compare Security  
   A simple method is to confirm the two **ACL** lists, comparing the end-user's security list to that of the document itself:
   1. **User** — An end-user's security can be reviewed by requesting that they access the **QS Administration interface**, and navigate to the following URL: `/conceptQS/ShowUser`
   2. **Document** — Compare that to the document's security, which you can view by selecting the **i** within **Sources/Reports/Taxonomies** and viewing the **Properties** tab

2. Disable Security Trimming  
   Security trimming can be disabled by following the steps below for all sources:
   1. Log into the **QS Administration Interface** and access the **Config** area
   2. Select the **Logging** tab
   3. Enable the **ACL** trace

Most **sources** also support disabling security on a more granular basis by selecting the **Allow Anonymous Access** option on the source edit screen. While disabling security may be the most appropriate option, the problem may instead be related to federation of user accounts. This occurs when the environment is not on the same domain as the source system(s). To assist with this scenario the product supports two **SSO** methods, allowing the logged-in username to match the source system(s) security — as well as allowing for federated security groups to be passed through to conceptSearching:

- **Microsoft Entra ID (formerly Azure AD)** — Instructions for a **Microsoft Entra ID** deployment can be found as a separate KB article
- **ADFS 3.0** — Instructions for an **ADFS** deployment can be found within the partners site in the **Documentation** section (**QS AD FS Configuration Guide**)
