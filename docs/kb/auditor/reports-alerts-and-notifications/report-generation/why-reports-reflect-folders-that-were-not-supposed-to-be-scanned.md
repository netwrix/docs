---
description: >-
  Explains why Netwrix Auditor reports may include folders that were not
  intended for scanning and how to exclude them using audit settings or the
  omitstorelist.txt file.
keywords:
  - netwrix auditor
  - UNC path
  - omitstorelist.txt
  - Windows Security log
  - Managed Items
  - folder inheritance
  - audit settings
  - shared folder
products:
  - auditor
sidebar_label: Why reports reflect folders that were not supposed
tags: []
title: "Why reports reflect folders that were not supposed to be scanned?"
knowledge_article_id: kA00g000000H9WXCA0
---

# Why reports reflect folders that were not supposed to be scanned?

A few shares are enabled, but in the reports, you are seeing a folder that wasn't supposed to be scanned.

---

For the most part, Netwrix Auditor collects events from the Windows Security log. If a UNC path is specified in **Managed Items** as `\server\share\folder`, but the actual share is `\server\share`, in your report you can get events related to `\server\share\folder2` which was not supposed to be scanned. Take a closer look at the reported folders' audit settings - it can be inherited from some of the root folders and make it appear in reports. Also, you can use the `omitstorelist.txt` file which is located in the Netwrix Auditor installation directory to exclude any folder or file from being reported.
