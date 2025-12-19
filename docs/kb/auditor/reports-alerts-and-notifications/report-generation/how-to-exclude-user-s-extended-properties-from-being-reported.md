---
description: >-
  Add specific entries to the omitproplist.txt file in the Netwrix Auditor for
  SQL Server installation directory to prevent user extended properties from
  being reported.
keywords:
  - omitproplist.txt
  - omitproplist
  - extended properties
  - user properties
  - Netwrix Auditor
  - SQL Server
  - exclude
  - user.extended
products:
  - auditor
sidebar_label: How to exclude user`s extended properties from bei
tags: []
title: "How to exclude user`s extended properties from being reported?"
knowledge_article_id: kA00g000000H9WiCAK
---

# How to exclude user`s extended properties from being reported?

To exclude user's extended properties from being reported, add the following lines to the `omitproplist.txt` file located in the Netwrix Auditor for SQL Server installation directory:

1. Open the `omitproplist.txt` file in the Netwrix Auditor for SQL Server installation directory.
2. Add the following lines to the file:

```text
user.*.extended*
user.extended*.*
```
