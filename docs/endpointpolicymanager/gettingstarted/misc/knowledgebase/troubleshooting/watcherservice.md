---
title: "I see many instances of the Endpoint Policy Manager Watcher service running on my clients, is that normal?"
description: "I see many instances of the Endpoint Policy Manager Watcher service running on my clients, is that normal?"
sidebar_position: 100
---

# I see many instances of the Endpoint Policy Manager Watcher service running on my clients, is that normal?

Depending on the client machine architecture (32 or 64 bit) and the number of users logged in to
that client (either locally or via TS/RDS), the number of instances of each service will vary.

x86

| Service –>                       | PP Core Client | PP Watcher Service x64 | PP Watcher Service x86 |
| -------------------------------- | -------------- | ---------------------- | ---------------------- |
| System instance                  | X              |                        | X                      |
| Per user instance (Local/TS/RDS) |                |                        | X                      |

x64

| Service –>                       | PP Core Client | PP Watcher Service x64 | PP Watcher Service x86 |
| -------------------------------- | -------------- | ---------------------- | ---------------------- |
| System instance                  | X              | X                      | X                      |
| Per user instance (Local/TS/RDS) |                | X                      | X                      |

For example, an x64 machine with a single user logged in would have 5 instances.

![670_1_2017-11-13_2259](/images/endpointpolicymanager/troubleshooting/490_1_2017-11-13_2259.webp)

If another user logged in, it would add another pair of PPWatcherSvc (32/64) instances for a total
of 7 processes.

An x86 system with TWO users logged in would look like this.

![670_2_2017-11-13_2302](/images/endpointpolicymanager/troubleshooting/490_2_2017-11-13_2302.webp)

