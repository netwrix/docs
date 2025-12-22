---
description: >-
  Explains whether you can specify a group other than the Everyone group in the
  audit settings and the implications for monitoring and event volume.
keywords:
  - Everyone group
  - audit settings
  - Netwrix Auditor
  - file servers
  - Local System
  - Users group
  - Security event log
  - audit configuration
products:
  - auditor
sidebar_label: Can I specify a group other than the Everyone group in the audit settings?
tags: []
title: "Can I specify a group other than the Everyone group in the audit settings?"
knowledge_article_id: kA00g000000H9TVCA0
---

# Can I specify a group other than the Everyone group in the audit settings?

This is possible, but in this case **Netwrix Auditor** will be informing you about activity of the users belonging to this group only.

Sometimes, for the file servers with high-level services activity running under the **Local System** account, we recommend using the **Users** local group on the file server to decrease the number of events in the **Security** event log.

---

**NOTE:** **Netwrix Auditor** will send you email reports with warnings about the audit configuration. This will not affect the reporting functionality and the product will monitor user accounts that belong to the selected group successfully.
