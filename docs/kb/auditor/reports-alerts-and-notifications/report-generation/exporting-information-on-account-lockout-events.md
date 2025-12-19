---
description: >-
  You can extract account lockout event details by parsing the `allinfo.xml`
  file in the product installation directory; account names are recorded as
  SIDs. For centralized collection across multiple computers, use Netwrix Event
  Log Manager.
keywords:
  - account lockout
  - allinfo.xml
  - export
  - event logs
  - SIDs
  - Netwrix Event Log Manager
  - audit
  - account lockout examiner
products:
  - auditor
sidebar_label: Exporting information on account lockout events
tags: []
title: "Exporting information on account lockout events"
knowledge_article_id: kA00g000000H9THCA0
---

# Exporting information on account lockout events

Can I export information on account lockout events for audit purposes?

---

The Netwrix Account Lockout Examiner console does not have an export feature. However, all lockout information is stored in the `allinfo.xml` file located in the product installation directory. It can be easily parsed by a third-party tool or script to get the required information. However account names are not stored in the `allinfo.xml`; all accounts are referred to as SIDs.

![User-added image]./../0-images/ka04u000000HcN3_0EM700000004wrO.png)

Netwrix also has another product called Netwrix Event Log Manager for this purpose. This product is able to collect event log entries from multiple computers across the network and centrally store all events in a central location in a compressed format.

For more information, refer to the following link: https://www.netwrix.com/event_log_archiving_consolidation_freeware.html

