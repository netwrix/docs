---
description: >-
  Describes Event ID 2002 'get-help' not recognized error in the Netwrix Auditor
  System Health log and explains that the issue is caused by a Microsoft
  Exchange cumulative update. Instructs you to upgrade to Netwrix Auditor 10.6
  build 12322 or later and includes related links.
keywords:
  - Event ID 2002
  - get-help
  - Exchange Server
  - KB5030877
  - security update
  - Netwrix Auditor
  - System Health log
  - Administrator Audit Logging
products:
  - auditor
sidebar_label: 'Event ID 2002: The Term ''get-help'' Is Not Recogniz'
tags: []
title: 'Event ID 2002: The Term ''get-help'' Is Not Recogniz'
knowledge_article_id: kA0Qk0000000GuPKAU
---

# Event ID 2002: The Term ''get-help'' Is Not Recogniz

## Symptom

The Netwrix Auditor System Health log contains Event ID 2002:

```text
Error detecting Exchange Server Administrator Audit Logging Settings for dc name:
Unable to establish the connection to the Exchange Server (server name) due to the following error:
The term 'get-help' is not recognized as the name of a cmndlet, function, script file, or operating program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
```

## Cause

The issue caused by Microsoft cumulative update for multiple editions of MS Exchange. Learn more in Description of the security update: [Microsoft Exchange Server 2019 and 2016: October 10, 2023 (KB5030877) ⸱ Microsoft 📝](https://support.microsoft.com/en-us/topic/description-of-the-security-update-for-microsoft-exchange-server-2019-and-2016-october-10-2023-kb5030877-ec769ff1-f60f-411e-a7ed-b63b42a686eb)

## Resolution

To resolve the issue, upgrade Netwrix Auditor to the version 10.6 build 12322 and above.

### Related article:

- [Administrator Audit Logging (AAL) configuration details](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/administrator-audit-logging-aal-configuration-details)
