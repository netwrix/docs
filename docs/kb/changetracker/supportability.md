---
title: "Change Tracker Supportability"
description: >-
  Describes what information to collect and provide to Netwrix Support when
  reporting an issue with Netwrix Change Tracker, including general details,
  Agent and ITSM module attachments, and Hub Server attachments.
sidebar_label: Change Tracker Supportability
sidebar_position: 0
keywords:
  - change tracker supportability
  - support ticket
  - troubleshooting
  - agent logs
  - hub server logs
  - ITSM
  - rolling-log.txt
  - HubDetails.xml
  - msinfo32
products:
  - changetracker
tags:
  - kb
knowledge_article_id: ""
---

# Change Tracker Supportability

## Overview

Collecting the right information before you open a [Netwrix support ticket](https://www.netwrix.com/support.html) for Netwrix Change Tracker helps Netwrix diagnose and resolve your issue faster. This article describes what to provide for any Change Tracker issue, plus additional items specific to Agent, Hub Server, and ITSM module problems.

## General Information to Provide

Provide the following for any ticket, regardless of the problem:

1. A detailed description of the issue, including when it was first noticed. Include a screenshot or video if you can capture one.
2. The version of the Netwrix Hub Server you are using.
3. Whether there have been any recent updates or patches to the operating system:
   - What was updated?
   - When did it occur?
   - What exactly was installed?
   - Was the system rebooted after the patch?
4. The scope of the problem:
   - Is the issue limited to a specific group of devices hosting the same application or operating system? Are all agents in that group affected, or only some?
   - How many agents are affected in total?
5. Whether any of the following changed recently:
   - SSL/TLS version
   - Microsoft IIS services
   - IIS certificate
   - IIS website port binding
   - MongoDB version

If the issue involves the Hub Server being down, unreachable, or underperforming, also answer:

- Which of the following are you experiencing: cannot log in, cannot start IIS/MongoDB services, cannot reach the web console, or the server itself is unreachable via RDP or SSH?
- If performance-related: what was the last change made to the system before the behavior started, how many agents currently report to the system, and how long has the server shown this behavior?
- If a specific Hub component is affected (saved queries, compliance reports, configuration templates): was that component previously working properly?

## Agent Issues

If the issue is related to an agent, also provide the following log files.

### Change Tracker NetCore Agent

**On Windows**
- `C:\ProgramData\NNT\gen7agent.app.netcore\rolling-log.txt`
- `C:\ProgramData\NNT\gen7agent.app.netcore\HubDetails.xml`

**On Linux**
- `/var/nnt/gen7agent.app.netcore/rolling-log.txt`
- `/var/nnt/gen7agent.app.netcore/HubDetails.xml`

### Express Agent (Linux/Unix)

- `/var/nnt/expressagent/expressagent-log.txt`
- `/var/nnt/expressagent/HubDetails.xml`
- `/var/nnt/expressagent/store.db`

### Additional Attachments for Linux Agents

1. Compress and attach the `/var/messages` file.
2. Compress and attach the `/var/nnt/` folder.
3. Compress and attach the `/opt/nnt` folder.
4. Attach the output of `uname -a`.
5. Attach the output of `ps aux | grep nnt-`.
6. Attach the output of `rpm -qa | grep nnt-`.

### Additional Attachments for Windows Agents

1. Compress and attach the `C:\ProgramData\NNT` folder.
2. Provide Windows Event Logs (Application and System):
   - Go to **Start** > **Run**, type `eventvwr`, and press **Enter**.
   - Click **Action** > **Create Custom View**, set the time range under **Logged** > **Custom Range**, and select **Application** and **System** under **Event Logs**.
   - Click **OK**, name the view, and click **OK** again.
   - Select the view, then click **Action** > **Save All Events in Custom View As**, and save as type **Event Files (*.evtx)**.
3. If enabled, provide IIS server logs (default location `C:\inetpub\logs\LogFiles`).

## ITSM Module Issues

If the issue is related to the ITSM module, also attach:

- `C:\Program Files\NNT Change Tracker Suite\Gen7SyncService\gen7syncservice.exe.config`

## Hub Server Issues

If the issue is related to the Hub Server, also provide:

1. The Hub Service log folder: `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\log\`
2. The MongoDB log folder: `C:\ProgramData\Change Tracker Generation 7 (NetCore)\MongoDB\log`
3. The Windows Event Logs, System Information, IIS logs, and Windows Firewall logs listed in the Windows Agent section above — the same collection steps apply to the Hub server.

---