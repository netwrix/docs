---
description: >-
  Explains how to monitor hidden file shares (those ending with $) when using
  the Netwrix Auditor data source for Windows File Servers, including adding
  individual hidden shares and auditing all hidden shares via the Scope tab.
keywords:
  - hidden file shares
  - hidden shares
  - file shares
  - Netwrix Auditor
  - Windows File Servers
  - UNC
  - Scope tab
  - Computer item
products:
  - auditor
sidebar_label: How do I monitor hidden file shares?
tags: []
title: "How do I monitor hidden file shares?"
knowledge_article_id: kA00g000000H9U6CAK
---

# How do I monitor hidden file shares?

If you specified **Computer** as an Item in the Netwrix Auditor Windows File Servers data source, Netwrix Auditor monitors all available file shares on that server, except for the hidden ones (ending with `$` sign). If you want to monitor a specific hidden share, you need to add it explicitly, specifying its full UNC path, e.g. `\server\hiddenshare$`.

If you would like to audit all hidden shares on the server, check the corresponding option at the **Scope** tab of your **Computer** item:

![image.png]./../0-images/ka04u000000HcNr_0EM4u000007qtQ1.png)

**NOTE:** It is not recommended to specify the system drive (`\server\c$`) as an Item. This will force Netwrix to audit local folders including the system ones that produce a lot of noise and degrade the product performance.

