---
description: >-
  Explains why Netwrix Auditor may report "User Account Locked Out" for a domain
  administrator account that cannot actually be locked out, and why such events
  are included in reports and alerts.
keywords:
  - account lockout
  - domain administrator
  - false lockout
  - Netwrix Auditor
  - lockout events
  - Windows
  - account policies
  - reports
  - alerts
products:
  - auditor
sidebar_label: Account lockout events for domain administrator ac
tags: []
title: "Account lockout events for domain administrator account"
knowledge_article_id: kA00g000000H9UlCAK
---

# Account lockout events for domain administrator account

I get a report showing a change with details: “User Account Locked Out” for the domain administrator account that cannot be locked out. What does this change mean?

---

The domain administrator account cannot be locked out. Windows may generate "false" lockout events triggered by changes that could potentially cause this account lockout based on your account policies. The event is generated as a result of the actions that were performed on the domain administrator account, for example when someone entered the domain administrator’s password incorrectly several times in a row. Netwrix Auditor includes "false" lockout events in reports and alerts since they cannot be differentiated from "real" lockouts.
