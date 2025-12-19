---
description: >-
  Shows how to hide the domain list in the Self-Service portal by editing the
  branding.asp file in the Web_SS folder and configuring DomainMode and
  DefaultDomain.
keywords:
  - domain list
  - Self-Service portal
  - branding.asp
  - DomainMode
  - DefaultDomain
  - Web_SS
  - Password Manager
products:
  - general
sidebar_label: Remove the domain list from the Self-Service porta
tags:
  - configuration-and-customization
title: "Remove the domain list from the Self-Service portal"
knowledge_article_id: kA00g000000H9cKCAS
---

# Remove the domain list from the Self-Service portal

To hide the domain list, do the following:

## Procedure

1. Navigate to the `Web_SS` folder of the Password Manager installation directory.
2. Locate the `branding.asp` file and edit it:
   - Locate the `DomainMode` parameter and set it to `'hide'`. This will hide the domain list from the **Self-Service portal**.
   - Locate the `DefaultDomain` and enter the predefined domain name.
3. Save the changes to the file and refresh the **Self-Service portal**.

[![User-added image](./../0-images/ka04u00000116es_0EM700000004xUQ.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000Xdsv&feoid=00N700000032Pj2&refid=0EM700000004xUQ)
