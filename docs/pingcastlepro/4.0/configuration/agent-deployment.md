---
title: "PingCastle agent deployment"
description: "Deploy PingCastle agents and set their schedule."
sidebar_position: 30
---

# PingCastle "agent" deployment

To avoid any gap in the security architecture, PingCastle can run scans
outside the web application. That means that in this case the local
domains have to push their information into PingCastle Enterprise.

## Program

Run the latest official version of PingCastle. The
PingCastle.exe program in the same directory as
PingCastleEnterprise is suitable for use.

:::note
PingCastle Enterprise supports running the PingCastle audit program at a higher or lower version. If a newer version adds features, they won't appear unless you update the PingCastle Enterprise program, but you lose no data meanwhile.
:::

## Schedule

The best way to schedule it is to run your own scheduler. Indeed, you
may have purchased a batch product which is looking for failure or
dependencies.

Alternatively, the last page of the PingCastle audit program
documentation describes how to run it using the Windows scheduler.

The recommended frequency is every week, using a normal user account
(not privileged) running on a batch server (not a DC).

**Command**

You need to create an API key with the upload right (the \"Agent\" page
as admin).

You need to test the command line before scheduling it.

The typical command line is:

```bash
PingCastle --healthcheck (optional --server <other domain>) --level Full --api-endpoint https://youservername --api-key yourapikey --out run_logs.txt
```

The typical pitfalls are enabling TLS1.2 for the server but not
installing the TLS1.2 client package on the server running the audit.
