---
description: >-
  Netwrix Auditor may generate alerts when Windows records lockout events even
  if an account cannot actually be locked. This article explains why Event ID
  4740 triggers alerts and how to view the related activity record.
keywords:
  - Event ID 4740
  - account lockout
  - lockout alert
  - Netwrix Auditor
  - RID
  - Windows auditing
  - security event
  - alert details
products:
  - auditor
sidebar_label: Why I Get Alerts on Accounts That Cannot Be Locked
tags: []
title: "Why I Get Alerts on Accounts That Cannot Be Locked Out?"
knowledge_article_id: kA04u00000111EBCAY
---

# Why I Get Alerts on Accounts That Cannot Be Locked Out?

## Question

Why Netwrix Auditor sends alerts on accounts that cannot be locked out?

## Answer

If an account was to be locked based on certain rules within Windows such as too many bad password attempts, even if it cannot be locked, Windows will still generate `Event ID 4740` despite the failure.

Learn more about this event in [4740(S): A user account was locked out. ⸱ Microsoft](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4740)

If you configured alerts triggered by lockout events, Netwrix Auditor reacts to these Events even in case of failed attempts and sends the corresponding alert.

Alerts contain also an account RID, that is a unique ID within Netwrix that ties it to the alert that was fired off which would allow you to look into it more thoroughly.

You can then select an alert that fired off and click **Show activity record in a new window** to the bottom right, which will show you the details of the event.
