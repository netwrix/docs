---
description: >-
  Explains why failed logon entries in Search Results or Reports may lack
  information in the What field. Describes how Windows event types for
  workstations and domain controllers affect the available data and links to
  investigation resources.
keywords:
  - failed logon
  - 4771
  - 4768
  - 4769
  - 4625
  - Event Log
  - Kerberos
  - Netwrix Auditor
  - domain controller
products:
  - auditor
sidebar_label: Why Do I Have Incomplete Information on Failed Log
tags: []
title: "Why Do I Have Incomplete Information on Failed Logons?"
knowledge_article_id: kA04u0000000HNFCA2
---

# Why Do I Have Incomplete Information on Failed Logons?

## Situation
In Search Results or Reports there is no information in **What** (the destination point of a login) field.

## Explanation
Netwrix Auditor Logon Activity uses native Windows tools to collect data. It uses Event log events to do so. Windows uses different types of events for failed logons on **Workstations** and **Domain Controllers**.

Within a Domain, all the logons go through a **Domain Controller** using [KERBEROS](https://docs.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview) ticketing system for Authentication. When logon on a **Workstation** fails, three events will be created: [`4768`](https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=4768), [`4769`](https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=4769), [`4771`](https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=4771). The first two are the informational events registering the request of KERBEROS authentication, the third one (`4771`) is the event that contains all the information about the authentication requester.

The problem here is that as a result of a **failed** logon, the request doesn't go **past** KERBEROS pre-authentication and therefore does not contain the information about the destination point of a logon request; consequently, the `4771` event does not contain such information and, as we rely only on native tools to gather information, we can't populate the **What** field of a failed logon.

When logon on a **Domain Controller** fails, the process is simpler as it is considered a failed *local* logon attempt (event [`4625`](https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=4625) will appear) and the data for the destination point will be present.

If you would like to have information on how to investigate Failed Logons, check out these articles:

- [Investigating Failed Logons](https://kb.netwrix.com/5198)
- [How to detect the root cause of multiple failed logons](https://kb.netwrix.com/3553)
- [How to Find Destination of Failed NTLM Logons?](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/how-to-find-destination-of-failed-ntlm-logons)
