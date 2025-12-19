---
title: "How do I submit a process dump (PROCDUMP) and Process Monitor (PROCMON) capture of a hanging process?"
description: "How do I submit a process dump (PROCDUMP) and Process Monitor (PROCMON) capture of a hanging process?"
sidebar_position: 60
---

# How do I submit a process dump (PROCDUMP) and Process Monitor (PROCMON) capture of a hanging process?

Get the following tools handy:

- Procmon
  [https://docs.microsoft.com/en-us/sysinternals/downloads/procmon](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon)
- process explorer
  [https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)
- procdump:
  [https://docs.microsoft.com/en-us/sysinternals/downloads/procdump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump)

:::note
You can pre-watch this video on PROCMON here:
[Process Monitor 101](/docs/endpointpolicymanager/gettingstarted/misc/videos/troubleshooting/processmonitor.md)
:::


**Step 1 –** Start Procmon. Let it run. It will start to generate a file.

**Step 2 –** Perform the problem / make the process hang. Make sure it hangs… then…

**Step 3 –** Then, while it's hung..

1. Run Process explorer to find the process. You want to find the PID of the process with a problem.
   An example of a hung process can be seen here, with PID 1072.

   ![525_1_image003](/images/endpointpolicymanager/troubleshooting/525_1_image003.webp)

   Processes should be easy to find if they are hanging.

   NOTE that processes in RED doesn't mean BAD: It just means processes are EXITING successfully.

2. Note the process name and/or PID.
3. Next get a procDUMP.. : procdump -ma 1072 ought to do it (recommended). OR.. procdump
   "`PPGPCR auditor.exe`" for a process by name.

   :::warning
   If you use the process name for the dump .. Just make sure in Process Explorer,
   that there are NO OTHER SAME NAMED tasks or Procdump will not dump them all. And be sure to dump
   the RIGHT process.. hence.. also making sure you got the PID.) The PID is a better bet.
   :::


**Step 4 –** When the DUMP is done.. Now you can Stop procMON. (File | uncheck CAPTURE EVENTS.)

**Step 5 –** Save the PROCMON file as the PML file with all details.

**Step 6 –** ZIP the PROCdump and PROCmon outputs as `SRX12345-DUMPS.ZIP` (your SRX number, not
12345).

**Step 7 –** Upload via SHAREFILE.. do NOT attach to your ticket. This will continue our analysis.

