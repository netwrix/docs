---
title: "Tuning Group Policy Compliance Reporter"
description: "Tuning Group Policy Compliance Reporter"
sidebar_position: 10
---

# Tuning Group Policy Compliance Reporter

Tuning Endpoint Policy Manager GPCR involves using provided ADMX files to reduce or increase how
often Endpoint Policy Manager GPCR endpoints communicate with the Endpoint Policy Manager GPCPR
server. We discuss using these files, as well as how the auditing process works and what triggers
it, in the sections below.

## Triggering the Auditor with a Scheduled Task

Starting with Endpoint Policy Manager GPCR build 1227, endpoints using `PPGPCR.Auditor.exe` will not
push data up to the server every time Group Policy applies. However, a scheduled task will trigger
`PPGPCR.Auditor.exe` to run every time Group Policy is applied. This is shown below in the Group
Policy Preference item that triggers the auditor to run:

```
Subscription <QueryList><Query Id="0" Path="Microsoft-
Windows-GroupPolicy/Operational"><Select Path="Microsoft-
Windows-GroupPolicy/Operational">*[System[( (EventID &gt;= 
8000 and EventID &lt;= 8007) or (EventID &gt;= 7000 and 
EventID &lt;= 7007) or (EventID &gt;= 6000 and EventID 
&lt;= 6007) )]]</Select></Query></QueryList>
```

The auditor EXE determines when to run and then sends the data back to the server.

## Default Auditor Triggers

The Endpoint Policy Manager GPCR auditor EXE process will only do work and send data back to the
server when a Group Policy background refresh event occurs:

- 8006 Successful computer periodic refresh event
- 8007 Successful user periodic refresh event

This ensures that the computer is started and the user is logged in (90–120 minutes after login) and
Group Policy is successful. The auditor EXE also keeps track of how many times per day it runs, with
a maximum of 20. Capping the auditor EXE at 20 runs per day ensures you'll never send an unrealistic
number of audits in a day. You could also configure the `PPGPCR.Auditor.exe` using ADMX files (see
the section called "Troubleshooting with ADMX or Registry Entries) to change or augment these
settings.

## Auditing Process for Modern Versions of Group Policy Compliance Reporter

When `PPGPCR.Auditor.exe` runs, the first thing it does is gather the RSOP via WMI and send them to
the Endpoint Policy Manager GPCR server for storage and processing.

- Running` PPGPCR.Auditor.exe` over the network requires about 1.4 MB of extra data to be sent. This
  occurs only at the background refresh cycle (but is changeable using ADMX settings).
- Taking an XML RSOP from WMI happens locally and takes no bandwidth.
- Sending the RSOP data to the server takes virtually no bandwidth. Once the RSOP is determined
  (about 600 KB), it is zipped down to about 68 KB.
- If the RSOP is the same as the last time, then no zipped files are sent from the client to the
  server, but a 1 KB heartbeat is still sent to update the server.

Note that it's possible to copy `PPGPCR.Auditor.exe` locally and run it there instead of running it
from a share on the server. This saves running 1.4 MB over the network every time any Group Policy
event is triggered. Values may change slightly from run to run.

## Auditing Process for Older Versions of Group Policy Compliance Reporter

With older versions of the PPGPCR, the first thing that `PPGPCR.Auditor.exe` does is run the
in-system function GPRESULT /X to generate RSOPs and send them to the Endpoint Policy Manager GPCR
server for storage and processing. When this happens, about 10 MB of data is sent over the network.
This is the very nature of `GPRESULT /X`. You can do a rough calculation of how long Endpoint Policy
Manager GPCR might take to push data from the endpoints up to the server based on the number of
endpoints and the bandwidth by using this calculator:
[http://ibeast.com/tools/band-calc.asp](http://ibeast.com/tools/band-calc.asp).

For example, if you had nine computers over a very slow 1.5 MB link to the closest DC, you could
estimate that the upload would take 8 minutes and 8 seconds if they all ran the auditor at the exact
same time. Since Group Policy is randomly running across all machines in the background (90–120
minutes after login), and since PPGPCR.Auditor.exe will only trigger on successful background user
and computer refreshes (now by default) and not at computer startup or user login, the risk of
saturation of a slow link is minimized.

Here is the breakdown of exactly what is happening when PPGPCR.Auditor.exe is triggered to do work:

- Running PPGPCR.Auditor.exe over the network requires about 1.4 MB of extra data to be sent. This
  occurs only at the background refresh cycle (but is changeable using ADMX settings).
- Taking an XML RSOP from `gpresult.exe /x` causes about 7–10 MB of data to be sent over the network
  from the DC to the endpoint.
- Sending the RSOP data to the server takes virtually no bandwidth. Once the RSOP is determined
  (about 600 KB), it is zipped down to about 34 KB.
- If the RSOP is the same as the last time, then no zipped files are sent from the client to the
  server, but a 1 KB heartbeat is still sent to update the server.

Note that it's possible to copy` PPGPCR.Auditor.exe` locally and run it there instead of running it
from a share on the server. This saves running 1.4 MB over the network every time any Group Policy
event is triggered. Values may change slightly from run to run, but in summary, after running
GPUpdate, the Endpoint Policy Manager GPCR auditor takes about 10 MB of network bandwidth on the
next auditor run because of the need to generate a new RSOP and compare it to the last one. The
biggest problem is that the Endpoint Policy Manager GPCR auditor relies on GPRESULT /X, which is a
system command and is hardcoded to work the way it does, making it take up the bulk of the
bandwidth. This is why only events that actually trigger the auditor to do real work are successful
user and computer background events, and they are capped at 20 per day.

Endpoint Policy Manager GPCR has a problem where bandwidth is constrained between the client and the
DCs, but build 1227 has dramatically improved on this problem. In builds beyond 1227, we will
continue working on additional ways to minimize the problem GPresult /x causes over slow links with
future releases.

