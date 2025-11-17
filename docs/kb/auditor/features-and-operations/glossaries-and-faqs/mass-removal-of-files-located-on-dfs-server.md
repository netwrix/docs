---
description: >-
  Explains why the Mass Data Removal from File Servers alert appears when files
  are removed and immediately replaced on a DFS server, and how upgrading
  resolves the issue.
keywords:
  - Mass Data Removal
  - DFS
  - file server
  - Netwrix Auditor
  - alert
  - upgrade
  - My Products
  - 10.6.12321
products:
  - auditor
sidebar_label: Mass Removal of Files Located on DFS Server
tags: []
title: "Mass Removal of Files Located on DFS Server"
knowledge_article_id: kA0Qk0000000WeDKAU
---

# Mass Removal of Files Located on DFS Server

## Question

Why am I seeing the alert **Mass Data Removal from File Servers** in Netwrix Auditor, alongside the removal and immediate replacement of many files on a DFS file server?

## Answer

This is expected behavior for Netwrix Auditor 10.6.12321 and below. To avoid the issue, Netwrix recommends upgrading to the latest version. You can download the latest version from the [My Products](https://www.netwrix.com/my_products.html) page.

For the oldest versions, the workflow is as follows:

1. In the audited infrastructure with multiple DFS servers, if one server undergoes maintenance shutdown while another remains operational, it triggers mass file removal.
2. This removal consequently activates the **Mass Data Removal from File Servers** alert in Netwrix Auditor.
3. Netwrix Auditor interprets the disappearance of files from the affected server as a mass creation of file delete Activity Records.
