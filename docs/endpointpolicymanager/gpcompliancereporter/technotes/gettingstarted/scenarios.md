---
title: "What scenarios is PPGPCR not well suited for today?"
description: "What scenarios is PPGPCR not well suited for today?"
sidebar_position: 10
---

# What scenarios is PPGPCR not well suited for today?

PPGPCR works excellently under most scenarios and conditions. That being said, PPGPCR is not well
suited should you have the following network:

[DC] Many endpoints

When PPGPCR is used in PUSH mode (with PPGPCR Auditor), we rely upon the in-system function GPRESULT
/X to generate RSOPs then send them up to the PPGPCR server for storage and processing.

When we do this, about 10MB of data is sent over the network. This is the very nature of GPRESULT
/X.

You can do a rough calculation of how long PPGPCR might take to push data from the endpoints up to
the server based upon:

- Number of endpoints and
- Bandwidth.

Using this
calculator: [http://ibeast.com/tools/band-calc.asp](http://ibeast.com/tools/band-calc.asp)

Estimate about 10MB per endpoint for each GP update. So for example if you had 9 computers over a
1.5MB link to the closest DC, you could estimate that the upload would take 8 minutes and 8 seconds
(Screenshot: [http://screencast.com/t/KzLNHY4vcPJZ](http://screencast.com/t/KzLNHY4vcPJZ) )

The important points here are:

- Running the auditor EXE over the network costs about 1.4 MB of extra data to be sent.
- Taking an XML RSOP from gpresult.exe causes about 7-10 MB of data to be sent over the network.
- Sending the RSOP data to the server takes virtually no bandwidth. One RSOP is determined (about
  600KB), we ZIP it down to about just 34 KB.

PPGPCR has a Heartbeat so we can keep the server updated.

- (Remote exe) which takes the following:
  - 832 KB if no gpupdate,
  - 11.1 MB if gpupdate (for the new RSOP, even though it decides it's the same and doesn't submit
    it)
- Heartbeat (local exe) takes:
  - 120 KB if no gpupdate
  - 10.2 MB if gpupdate (for the new RSOP, even though it decides it's the same and doesn't submit
    it)

Therefore:

- Full RSOP submission (remote exe) takes: 11.7 MB
- Full RSOP submission (local exe) takes: 10.3 MB

:::note
Values may change slightly from run to run, but in summary: after a gpupdate, PPGPCR
Auditor takes about 10 MB of network bandwidth on the next auditor run regardless of anything,
because of the need to generate a new RSOP.
:::


The biggest problem, again, is that PPGPCR Auditor relies upon GPRESULT /X, which is a system
command, and is hardcoded the way it works, and as such, is the bulk of the bandwidth.

We know PPGPCR has this as a problem where bandwidth is constrained between the client and the DCs.
We're working on ways to minimize the problem in future releases.

