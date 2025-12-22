---
description: >-
  Shows how to include change password events performed by users through the
  Ctrl+Alt+Del key combination in Netwrix Auditor reports.
keywords:
  - change password
  - Ctrl+Alt+Del
  - Netwrix Auditor
  - omitproplist.txt
  - password reset
  - Active Directory auditing
  - reports
products:
  - auditor
sidebar_label: Include Change Password Events by Users via Ctrl+Alt+Del
tags: []
title: "Include Change Password Events by Users via Ctrl+Alt+Del Combination in Netwrix Auditor Reports Auditor Reports"
knowledge_article_id: kA00g000000H9TnCAK
---

# Include Change Password Events by Users via Ctrl+Alt+Del Combination in Netwrix Auditor Reports

## Question

Is it possible to include change password events performed by users through the ctrl+alt+del key combination into Netwrix Auditor reports?

## Answer

Yes, it is possible. Such events are omitted by default. To include them in Netwrix Auditor reports, follow the steps below:

1. Navigate to the Netwrix Auditor for Active Directory installation folder: `C:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing` by default.
2. Locate the `omitproplist.txt` file and open it with a text editor.
3. Locate the `*.PasswordChanged` line and add a `"#"` sign at the beginning so it looks like `#*.PasswordChanged`.
4. Save your edits.

Once these changes have been applied, password resets performed by users will be shown in the Netwrix Auditor change reports.
