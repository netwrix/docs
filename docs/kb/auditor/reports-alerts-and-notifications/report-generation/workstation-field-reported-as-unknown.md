---
description: >-
  Explains reasons why the Workstation field can be reported as unknown in
  Activity Summary, reports, and search results for Active Directory, and points
  to configuration and troubleshooting resources for Netwrix Auditor and Netwrix
  OneSecutre.
keywords:
  - Workstation
  - unknown
  - Activity Summary
  - Active Directory
  - Netwrix Auditor
  - OneSecutre
  - Security log
  - monitoring plan
  - data collecting account
  - event log
products:
  - auditor
  - onesecure
sidebar_label: Workstation Field Reported as Unknown
tags: []
title: "Workstation Field Reported as Unknown"
knowledge_article_id: kA00g000000H9VdCAK
---

# Workstation Field Reported as Unknown

## Question

Why is the **Workstation** field returned as **unknown** in Activity Summary, reports, and search results?

## Answer

> **NOTE:** This article only applies to Active Directory (AD).

This could be caused by one of the following reasons:

- The data collecting account used in the affected monitoring plan does not have access to the domain controller. This could be related to the format the account is specified in, or permissions granted to the account. For additional information on permissions, refer to the following article: Monitoring Plans − Data Collecting Account ⸱ v10.6.

- Warnings for AD auditing are related to the Originating Workstation feature. Netwrix Auditor and Netwrix OneSecutre collect user logon and logoff events to identify the user session for the change as no data on a specific workstation to introduce a change to AD in Security events on domain controllers is usually indicated. This workflow can be inaccurate as there might be several open sessions on different workstations for a single user, or no recent logons or logoffs events on workstations registered. This warning is expected and doesn't affect general data collection—in this case it can be safely ignored.

- Security log overwrites. For example, a user logged to the workstation from which a change was made before Netwrix Auditor or Netwrix OneSecutre was installed, and log overwrites occurred before the product ran the first data collection. For instructions on how to configure the Security event log size and retention policy to prevent log overwrites, refer to Active Directory – Adjust Security Event Log Size and Retention · v10.6. This cause is usually accompanied by corresponding errors in the Netwrix Auditor or Netwrix OneSecutre System Health log.

- Audit policies are configured incorrectly. You can configure them automatically in Netwrix Auditor or Netwrix OneSecutre or manually. For instructions, refer to Configuration – Active Directory · v10.6. This cause is usually accompanied by corresponding errors in the Netwrix Auditor or Netwrix OneSecutre System Health log.

- The change to the audited domain was made through the interface of Exchange Server installed in a different domain.

- The change to the audited domain was made through Exchange Management Shell with the impersonation of another user's account. For example, a user logged to a workstation under their account and then opened a different session through Exchange Management Shell which enabled them to perform operations by using the permissions associated with another user's account.

- Native Windows logon events lack the information on the IP address of the originating workstation.

- The change was made under a computer account (e.g., computer password resets, account lockouts, changes to Service Principal names, etc.). This is the most popular reason. In order to confirm it, check the **Who** field of the corresponding change—if the account name ends with '$'—this is a computer account and the workstation is expected to be 'unknown'.

## Related Articles

- Monitoring Plans − Data Collecting Account ⸱ v10.6.
- Active Directory – Adjust Security Event Log Size and Retention · v10.6
- Configuration – Active Directory · v10.6
