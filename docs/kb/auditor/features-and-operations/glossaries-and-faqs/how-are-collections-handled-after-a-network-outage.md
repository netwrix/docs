---
description: >-
  Explains how Netwrix Auditor handles Active Directory data collections during
  a Netwrix server network outage or when Domain Controllers are offline,
  including behavior when Security Logs are overwritten.
keywords:
  - network outage
  - Active Directory
  - Security Log
  - Domain Controller
  - collections
  - event log
  - Who Changed
  - Netwrix Auditor
  - data loss
products:
  - auditor
sidebar_label: How are collections handled after a network outage
tags: []
title: "How are collections handled after a network outage?"
knowledge_article_id: kA00g000000H9WHCA0
---

# How are collections handled after a network outage on the Netwrix server or when Domain Controllers are offline for some time?

## Details

Active Directory data collections run every minute. At the end of each collection, Netwrix Auditor saves the position of the last collected event and starts the next collection from the same place.

If a Domain Controller's Security Log is not overwritten while the server is inaccessible, Netwrix Auditor will collect and process the data as soon as you turn the server back on or network connectivity is restored, and no data loss will happen.

Note that Security Log events are not required for determining most of the changes — they are mostly used as the source of When and Who information. If the Security Log overwrites while the DC is inaccessible, or the disconnect time exceeds `6 hours`, Netwrix Auditor may report some changes with "System" in the `Who Changed` field. At the same time, a warning will be logged informing that the event log overwrites occurred.
