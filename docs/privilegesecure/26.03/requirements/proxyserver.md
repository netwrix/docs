---
title: "Remote Service Node"
description: "Remote Service Node"
sidebar_position: 30
---

# Remote Service Node

Privilege Secure supports a variety of RDP/SSH clients, including:

- PuTTY
- MobaXterm
- MS Remote Desktop Connection Manager
- MS Terminal Services Client (Remote Desktop)

On all Privilege Secure servers, Netwrix recommends excluding the following directories from
antivirus and endpoint protection software. a drive letter isn't specified in each
path, as that can be customized during each Privilege Secure and service installation.

- \Program Files\Stealthbits\PAM\ActionService
- \Program Files\Stealthbits\PAM\ActionServiceWorker
- \Program Files\Stealthbits\PAM\DatabaseTools\Data
- \Program Files\Stealthbits\Postgres12\bin
- \ProgramData\Stealthbits\Postgres12

Exclusions for Remote Services:

- Action Service:

- \Program Files\Stealthbits\PAM\ActionService
- \Program Files\Stealthbits\PAM\ActionServiceWorker
- \Stealthbits\PAM\ProxyService\

- Proxy Service:

- \Stealthbits\PAM\ProxyService\

- Scheduler Service:

- \Stealthbits\PAM\SbPAM.SchedulerService\
- \Stealthbits\PAM\ProxyService\

See the following topics for specific installation instructions for remote services:

- [Proxy Service Install](/docs/privilegesecure/26.03/install/servicesonadditional/proxyservice.md)
- [Action Service Install](/docs/privilegesecure/26.03/install/servicesonadditional/actionservice.md)
- [Scheduler Service Install](/docs/privilegesecure/26.03/install/servicesonadditional/schedulerservice.md)
