---
description: >-
  Best practices for securing Netwrix Auditor, covering host access, role
  management, service monitoring, Microsoft security tools, auditing of related
  systems, and offline backups of the Long-Term Archive.
keywords:
  - Netwrix Auditor
  - security
  - RBAC
  - TDE
  - BitLocker
  - Long-Term Archive
  - backups
  - service monitoring
  - SQL Server
products:
  - auditor
sidebar_label: Best Practices for Securing Netwrix Auditor
tags: []
title: "Best Practices for Securing Netwrix Auditor"
knowledge_article_id: kA00g000000H9SPCA0
---

# Best Practices for Securing Netwrix Auditor

## Overview

This article outlines best practices for securing Netwrix Auditor, including limiting access, maintaining roles, monitoring services, enabling security tools, auditing related systems, and performing regular backups.

## Instructions

- Limiting Access to the Netwrix Auditor Host
- Maintaining Roles in Netwrix Auditor
- Monitoring Netwrix Auditor Services
- Enabling Native Microsoft Security Tools
- Auditing Related Systems via Netwrix Auditor
- Making Regular Offline Backups of the Long-Term Archive

### Limiting Access to the Netwrix Auditor Host

Use Restricted Groups to apply group membership and User Rights Assignment policy settings, limiting access to the Netwrix Auditor host to a select group of users. For additional information, refer to the following articles:

- [Description of Group Policy Restricted Groups ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/troubleshoot/windows-server/group-policy/description-of-group-policy-restricted-groups)
- [User Rights Assignment ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/user-rights-assignment)

### Maintaining Roles in Netwrix Auditor

Netwrix Auditor provides a flexible role-based access control (RBAC) model, restricting user actions based on their roles. For more information about RBAC, refer to the following article:

- Role-Based Access and Delegation

### Monitoring Netwrix Auditor Services

Ensure that critical Netwrix Auditor services, such as the Netwrix Auditor Configuration Service and the Netwrix Auditor Archive Service, are always operational. Use the freeware Netwrix Service Monitor tool to monitor startup services on multiple servers and receive email alerts if services stop unexpectedly. For additional information, refer to the following page:

- [Netwrix Service Monitor](https://www.netwrix.com/windows_services_monitoring_freeware.html)

### Enabling Native Microsoft Security Tools

- Enable transparent data encryption (TDE) to secure your SQL database data. For more information, refer to the following article: [Transparent Data Encryption (TDE) ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sql/relational-databases/security/encryption/transparent-data-encryption?view=sql-server-ver16).
- Enable BitLocker encryption to secure your Long-Term Archive. For more information, refer to the following article: [BitLocker Overview ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/).

### Auditing Related Systems via Netwrix Auditor

- Enable configuration and logon auditing for your SQL Server:
  - Set up alerts for logon activity, role changes, and db_owner role changes for SQL databases.

- Enable auditing for Local Users and Groups, services, and software installations on your SQL Server and Netwrix Auditor servers:
  - Configure alerts for changes to log clearance and Local Administrator groups.
  - Enable session recording for SQL Server and the Netwrix Auditor host via User Activity Monitoring.
  - Set up alerts for SQL Management Studio or Netwrix Auditor launches.
  - Configure alerts for logons to the SQL Server and Netwrix Auditor host.

- Enable auditing of the Long-Term Archive:
  - Exclude the Netwrix data-processing account from the monitoring scope.
  - Set up alerts for all read, modify, delete events, and failed activities.

### Making Regular Offline Backups of the Long-Term Archive

To prevent data loss due to unexpected archive corruption, malicious actions, ransomware, or other circumstances, regularly back up your Long-Term Archive. Consider off-site or cloud backups to ensure the integrity of your Long-Term Archive data.

## Related Links

- [Description of Group Policy Restricted Groups ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/troubleshoot/windows-server/group-policy/description-of-group-policy-restricted-groups)
- [User Rights Assignment ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/user-rights-assignment)
- Role-Based Access and Delegation
- [Netwrix Service Monitor](https://www.netwrix.com/windows_services_monitoring_freeware.html)
- [Transparent Data Encryption (TDE) ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sql/relational-databases/security/encryption/transparent-data-encryption?view=sql-server-ver16)
- [BitLocker Overview ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/)
