---
title: "Remote Service Node"
description: "List the supported RDP and SSH clients and the antivirus exclusions for Privilege Secure servers and the remote Action, Proxy, and Scheduler services."
keywords:
  - Remote Service Node
  - antivirus exclusions
  - PuTTY
  - MobaXterm
  - Action Service
  - Proxy Service
  - Scheduler Service
sidebar_position: 30
---

# Remote Service Node

Privilege Secure supports a variety of RDP/SSH clients, including:

- PuTTY
- MobaXterm
- MS Remote Desktop Connection Manager
- MS Terminal Services Client (Remote Desktop)

On all Privilege Secure servers, Netwrix recommends excluding the following directories from
antivirus and endpoint protection software. A drive letter isn't specified in each
path, as that can be customized during each Privilege Secure and service installation.

- `\Program Files\Stealthbits\PAM\ActionService`
- `\Program Files\Stealthbits\PAM\ActionServiceWorker`
- `\Program Files\Stealthbits\PAM\DatabaseTools\Data`
- `\Program Files\Stealthbits\Postgres16\bin`
- `\ProgramData\Stealthbits\Postgres16`

Exclusions for Remote Services:

- Action Service:
  - `\Program Files\Stealthbits\PAM\ActionService`
  - `\Program Files\Stealthbits\PAM\ActionServiceWorker`
  - `\Stealthbits\PAM\ProxyService\`
- Proxy Service:
  - `\Stealthbits\PAM\ProxyService\`
- Scheduler Service:
  - `\Stealthbits\PAM\SbPAM.SchedulerService\`
  - `\Stealthbits\PAM\ProxyService\`

See the following topics for specific installation instructions for remote services:

- [Proxy Service Install](/docs/privilegesecure/26.03/install/servicesonadditional/proxyservice.md)
- [Action Service Install](/docs/privilegesecure/26.03/install/servicesonadditional/actionservice.md)
- [Scheduler Service Install](/docs/privilegesecure/26.03/install/servicesonadditional/schedulerservice.md)
