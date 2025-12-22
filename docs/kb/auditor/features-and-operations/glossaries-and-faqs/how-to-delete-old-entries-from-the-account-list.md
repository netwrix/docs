---
description: >-
  Shows how to remove old account entries from the account list in Netwrix
  Auditor by using the UI or by editing the `alinfo.xml` file manually.
keywords:
  - account list
  - alinfo.xml
  - ALObj
  - SID
  - remove accounts
  - Netwrix Auditor
  - service restart
  - delete entries
products:
  - auditor
sidebar_label: How to delete old entries from the account list
tags: []
title: "How to delete old entries from the account list"
knowledge_article_id: kA00g000000H9TkCAK
---

# How to delete old entries from the account list

You can delete old entries by selecting the accounts from **All accounts** (multiple selection is supported) and clicking the **Remove** button.

The account list is stored in the `alinfo.xml` file and you can manually delete the required accounts directly from the file. To do this, stop the Netwrix Auditor service, delete the account information (the information is enclosed in the `<ALObj>` and `</ALObj>` tags; accounts are referred to as `SIDs`), and then start the service again.

1. Stop the Netwrix Auditor service.
2. Open the `alinfo.xml` file.
3. Delete the account information enclosed in the `<ALObj>` and `</ALObj>` tags for the accounts you want to remove. Accounts are referred to as `SIDs`.
4. Save the `alinfo.xml` file.
5. Start the Netwrix Auditor service.

![User-added image]./../0-images/ka04u000000HcNX_0EM700000004wxg.png)

