---
description: >-
  Shows how to suppress warnings for domain controllers in Netwrix Auditor for
  Active Directory when the audit is properly configured or when the connection
  between the Netwrix server and a domain controller is unstable (RPC errors).
keywords:
  - Netwrix Auditor
  - Active Directory
  - domain controller
  - warnings
  - suppresswarnings
  - agent.ini
  - RPC
products:
  - auditor
sidebar_label: How to omit warnings in Netwrix Auditor for Active
tags: []
title: "How to omit warnings in Netwrix Auditor for Active Directory when audit is properly configured?"
knowledge_article_id: kA00g000000H9VeCAK
---

# How to omit warnings in Netwrix Auditor for Active Directory when audit is properly configured?

You receive warnings about some of your domain controllers while they are properly configured and do not have any issues. How can you omit warnings in Netwrix Auditor for Active Directory?

Netwrix Auditor may throw warnings about some of your domain controllers. This article applies when the audit is properly configured and/or the connection between the Netwrix server and the affected domain controller is not stable (RPC errors).

**Caution!** This article should not be used when **System** is shown in the **Who Changed** column of the daily summary report.

To omit the warnings:

1. Navigate to `C:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing`
2. Open `agent.ini`.
3. Add FQDNs in the following format: `<domain_controller>=suppresswarnings`

For example:

```
DC1.contoso.com=suppresswarnings
DC2.contoso.com=suppresswarnings
```

Each DC should be entered on a separate line.
