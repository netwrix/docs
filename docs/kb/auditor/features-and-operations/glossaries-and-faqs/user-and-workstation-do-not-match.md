---
description: >-
  Explains why the Who (User) and Workstation fields may not match in file
  server reports and how Logon ID mapping with event ID 4624 and subsequent
  events cause this behavior.
keywords:
  - Logon ID
  - Workstation mismatch
  - File Server
  - Event ID 4624
  - Event ID 4663
  - Netwrix Auditor
  - Source Network Address
  - Logoff
products:
  - auditor
sidebar_label: User and Workstation Do Not Match
tags: []
title: "User and Workstation Do Not Match"
knowledge_article_id: kA04u000001110iCAA
---

# User and Workstation Do Not Match

## Question

The fields **Who** (User) and **Workstation** mismatch in File Server-related reports. The **Workstation** specified does not belong to the user in question. Should this be considered a malicious user activity?

## Answer

Netwrix Auditor for File Servers collects certain events to allow data audit. These events do not contain any information on originating workstations, but they have a distinct Logon ID field that can be matched to the Logon ID in local logon events (`4624`). These logon events include the Source Network Address for the originating workstation to be resolved to FQDN and be displayed in Netwrix Auditor.

1. When a user logs on to the file server using a certain account via the machine **A**, the Logon ID **A** is assigned to the session **A**.

   > **NOTE:** The Logon ID along with the IP address of the machine are picked from the Event ID `4624`.

2. If the user disconnects without logging off to close the Logon ID **A** session, no logoff event is created for the session **A**.

3. Once another person logs on using the same account via the machine **B**, a new Logon ID **B** and another IP address (belonging to the machine **B**) are logged to a new logon event (`4624`).

4. Since the session **A** was not closed and did not generate a logoff event, the session **B** is perceived to be the same session as session **A** by the OS.

   > **NOTE:** If the second person makes any changes on the file server, the corresponding events `4663` and others will contain the initial Logon ID **A** to match the machine **A** logon.
