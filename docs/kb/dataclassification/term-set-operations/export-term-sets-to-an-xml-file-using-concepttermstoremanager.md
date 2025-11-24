---
description: >-
  Shows how to export a SharePoint term set structure to an XML file using the
  conceptTermStoreManager utility. The resulting XML contains the entire term
  set structure and custom properties in the proprietary conceptSearching XML
  format.
keywords:
  - term sets
  - conceptTermStoreManager
  - conceptSearching
  - XML export
  - term store
  - SharePoint
  - taxonomy
  - conceptQS
  - export term sets
products:
  - data-classification
sidebar_label: Export Term Sets to an XML File using conceptTermS
tags:
  - term-set-operations
title: "Export Term Sets to an XML File using conceptTermStoreManager"
knowledge_article_id: kA04u000000XmGCCA0
---

# Export Term Sets to an XML File using conceptTermStoreManager

Export a term set structure to an XML file via the conceptTermStoreManager using the steps listed in this article.

## Steps

1. Navigate to `C:\inetpub\wwwroot\conceptQS\bin\conceptTermStoreManager.exe`
2. Run the `conceptTermStoreManager.exe` and observe the following screen:

   ![User-added image](./../0-images/ka04u000000HdFy_0EM4u000001rAT5.png)

3. Click the **Export** box to export a term set structure to an XML file.
4. On the **Export Term Sets** page, enter the details of the site collection where the Term Store can be accessed using the credentials supplied.

   ![User-added image](./../0-images/ka04u000000HdFy_0EM4u000001rAV6.png)

5. Click **Next**.
6. Select the term sets you wish to export by using the checkboxes on the right-hand side.

   ![User-added image](./../0-images/ka04u000000HdFy_0EM4u000001rAVB.png)

7. Click either the **Selected** button to export the checked items or the **All** button to export all term sets found in the term store.
8. Name and save the XML file when the **Save As** window appears.

The resulting XML file will contain the entire Term Set structure, including all custom properties, in the proprietary conceptSearching XML format. This file can be used to load the term set into another term store using the Import facility.
