---
description: 'If Netwrix Threat Manager is not receiving file system events from Netwrix Activity Monitor agents, the Syslog message template may be set incorrectly. This article explains how to change the Syslog message template from LEEF to Netwrix Threat Prevention in the Netwrix Activity Monitor console.'
keywords:
- Netwrix Threat Manager
- Netwrix Activity Monitor
- Syslog
- LEEF
- Syslog template
- file system events
- agent
- NTM
- NAM
products:
- threat-manager
title: 'File Systems Events Not Appearing in Netwrix Threat Manager From the Netwrix Activity Monitor Agent(s)'
knowledge_article_id: kA0Qk0000001qUPKAY
---

# File Systems Events Not Appearing in Netwrix Threat Manager From the Netwrix Activity Monitor Agent(s)

## Symptom

You may see that Netwrix Threat Manager (NTM) is not receiving events from Netwrix Activity Monitor (NAM) file system event collection.

## Cause

The incorrect **Syslog** message template of **LEEF** was selected.

![](./images/ka0Qk000000CpYD_0EMQk00000BJq9S.png)

## Resolution

To resolve this issue, change the Syslog message template from **LEEF** to **Netwrix Threat Prevention** as per the steps below:

1. Within the NAM console, click **Monitored Hosts** to select the needed host output for the **Syslog** item and Select **Edit**.  
   ![](./images/ka0Qk000000CpYD_0EMQk00000BJoNm.png)

2. Confirm the server and port needed for NTM.

3. Click the ellipsis to open the Message Template window, select the **Netwrix Threat Manager (Netwrix Threat Prevention)** Template, and click **OK**.  
   ![](./images/ka0Qk000000CpYD_0EMQk00000BJssn.png)

4. Click **Test** to verify the template setting and click **OK**.

> **NOTE:** This is UDP, so there is no true confirmation that a connection is/was made.  
> ![](./images/ka0Qk000000CpYD_0EMQk00000BJrGo.png)

5. Return to the NTM Web console and check for new events once posted.

> **NOTE:** This could take several minutes for the agent to update and for new events to occur.

## Related Article

- Syslog Tab