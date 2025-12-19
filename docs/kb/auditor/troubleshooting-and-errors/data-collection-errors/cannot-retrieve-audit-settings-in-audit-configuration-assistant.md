---
description: >-
  When using Netwrix Auditor Audit Configuration Assistant, you may see errors
  indicating inability to retrieve audit settings or admin audit logging
  settings due to insufficient permissions.
keywords:
  - audit settings
  - Audit Configuration Assistant
  - Domain Controllers
  - SACL
  - admin audit logging
  - permissions
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Cannot Retrieve Audit Settings in Audit Configurat
tags: []
title: "Cannot Retrieve Audit Settings in Audit Configuration Assistant"
knowledge_article_id: kA04u000001114QCAQ
---

# Cannot Retrieve Audit Settings in Audit Configuration Assistant

## Symptom

During the assessment via Netwrix Auditor Audit Configuration Assistant you've encountered one of the following errors:

```text
Cannot retrieve audit settings for these Domain Controllers:
%DC_name% 
Could not connect to a remote registry (0x80070005 Access is denied)
```

```text
Cannot retrieve audit settings. Make sure that current user account has permissions required to access SACL configuration.
```

```text
Cannot retrieve admin audit logging settings. Cannot execute the PowerShell command.
[FailureCategory=AuthZ-CmdletAccessDeniedException]
The user %user% isn't assigned to any management roles.
```

![Audit Configuration Assistant error screenshot]./../0-images/ka04u00000117HQ_0EM4u000008M035.png)

## Cause

The user is not included in any or one of the following groups: Domain Admins, Enterprise Admins, Organization Management of Records Management (in Exchange organization).

## Resolution

Configure the user to be used in the Audit Configuration Assistant utility. For additional information on user permissions required for Audit Configuration Assistant utility, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8/tools/overview

