---
title: "Proxy Server Requirements"
description: "Proxy Server Requirements"
sidebar_position: 30
---

# Proxy Server Requirements

Privilege Secure supports any RDP / SSH Client, including:

- PuTTY
- MobaXterm
- MS Remote Desktop Connection Manager
- MS Terminal Services Client (Remote Desktop)

On all Privilege Secure servers, it is recommended to exclude the following directories from
antivirus and endpoint protection software. Please note a drive letter is not specified in each
path, as that can be customized during each Privilege Secure and service installation.

- \Program Files\Stealthbits\PAM\ActionService
- \Program Files\Stealthbits\PAM\ActionServiceWorker
- \Program Files\Stealthbits\PAM\DatabaseTools\Data
- \Program Files\Stealthbits\Postgres12\bin
- \ProgramData\Stealthbits\Postgres12

See also:

- [Proxy Service Install](/docs/privilegesecure/4.1/install/servicesonadditionalservers/proxyservice.md)
- [Action Service Install](/docs/privilegesecure/4.1/install/servicesonadditionalservers/actionservice.md)
- [Scheduler Service Install](/docs/privilegesecure/4.1/install/servicesonadditionalservers/schedulerservice.md)

Exclusions:

- Action:

    - \Program Files\Stealthbits\PAM\ActionService
    - \Program Files\Stealthbits\PAM\ActionServiceWorker
    - \Stealthbits\PAM\ProxyService\

- Proxy:

    - \Stealthbits\PAM\ProxyService\

- Scheduler:

    - \Stealthbits\PAM\SbPAM.SchedulerService\
    - \Stealthbits\PAM\ProxyService\

Review the example below:

Before you begin, it is recommended to exclude the following directories from antivirus and endpoint
protection software. Please note a drive letter is not specified in each path, as that can be
customized during Action Service installation:

- \Program Files\Stealthbits\PAM\ActionService
- \Program Files\Stealthbits\PAM\ActionServiceWorker
- \Stealthbits\PAM\ProxyService\
