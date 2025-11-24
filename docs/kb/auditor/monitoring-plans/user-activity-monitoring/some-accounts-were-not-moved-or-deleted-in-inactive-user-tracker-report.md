---
description: >-
  Explains why some accounts in the Inactive User Tracker report were not moved
  or deleted and provides troubleshooting steps to resolve statuses such as
  `Cannot delete the account`.
keywords:
  - Inactive User Tracker
  - IUT
  - Netwrix Auditor
  - Cannot delete the account
  - domain controller
  - Delete account with all its subnodes
  - Protect object from accidental deletion
  - data collection account
products:
  - auditor
sidebar_label: Some Accounts Were Not Moved or Deleted in Inactiv
tags: []
title: "Some Accounts Were Not Moved or Deleted in Inactive User Tracker Report"
knowledge_article_id: kA04u000001111gCAA
---

# Some Accounts Were Not Moved or Deleted in Inactive User Tracker Report

## Question

Your report states some accounts were not moved or deleted. Why were they not affected?

## Answer

Since Inactive User Tracker (IUT) in Netwrix Auditor has the ability to make actual changes within your Active Directory, it has requirements to meet to introduce these changes. IUT requires all DCs to be operating, otherwise it cannot verify that a user is truly inactive. In case there are non-operable or decommissioned domain controllers in your network, you can omit them — refer to the following article for additional information: [How to Exclude Non-operable Domain Controllers from Monitoring in Netwrix Auditor](/docs/kb/auditor/configuration-and-setup/windows-server-monitoring/how-to-exclude-non-operable-domain-controllers-from-monitoring-in-netwrix-auditor).

If you still encounter reports showing the `Cannot delete the account` status for accounts after omitting the inoperable DCs, refer to the following steps:

- This error might appear if the targeted computer account is not an end object but a container for other objects. IUT won't be able to remove those accounts unless the **Delete account with all its subnodes** checkbox is checked.

  ![Delete account with all its subnodes checkbox]./../0-images/ka04u000001179H_0EM4u000008Lt2y.png)

  > **IMPORTANT:** This will lead to the deletion of the entire container considered as inactive by IUT.

- The data collection account used by IUT does not have sufficient rights and permissions. Refer to the following article for additional information on roles, rights, and permissions required for Inactive User Tracker data collection account: Monitoring Plans — Data Collecting Account.

- The account has the **Protect object from accidental deletion** checkbox checked in **Properties** > **Object**. This is a Windows Active Directory feature to prevent the deletion and moving of flagged objects without admin intervention. IUT cannot override this feature; you must manually edit the flag.

