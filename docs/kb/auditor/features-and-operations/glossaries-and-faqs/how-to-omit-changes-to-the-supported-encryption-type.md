---
description: >-
  Shows how to exclude changes to the Active Directory attribute "Supported
  Encryption Type" from reporting by Netwrix Auditor by adding the attribute to
  the omit properties list.
keywords:
  - Supported Encryption Type
  - msds-supportedencryptiontypes
  - omitproplist.txt
  - Active Directory
  - exclude changes
  - omit properties
  - Netwrix Auditor
  - monitoring scope
products:
  - auditor
sidebar_label: How to Omit Changes to Supported Encryption Type
tags: []
title: How to omit changes to the "Supported Encryption Type"?
knowledge_article_id: kA00g000000H9VZCA0
---

# How to omit changes to the "Supported Encryption Type"?

To exclude changes to "Supported Encryption Type" from being reported, perform the following steps:

1. On the machine where Netwrix Auditor resides, navigate to the product installation directory (by default `C:\Program Files (x86)\Netwrix Auditor\Acitve Directory Auditing`)
2. Open `omitproplist.txt` file and add the following line: ` *.msds-supportedencryptiontypes`
3. Save this file.

Additional details can be found here: Exclude Data from Active Directory Monitoring Scope
