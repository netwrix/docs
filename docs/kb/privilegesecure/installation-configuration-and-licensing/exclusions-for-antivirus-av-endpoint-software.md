---
description: >-
  Lists antivirus and endpoint protection exclusions required on Netwrix
  Privilege Secure servers and registered remote nodes to ensure optimal
  workflow performance.
keywords:
  - privilege secure
  - antivirus exclusions
  - AV exclusions
  - endpoint protection
  - Action Service
  - Proxy Service
  - Scheduler Service
  - Postgres
  - performance
products:
  - privilege-secure-access-management
sidebar_label: Exclusions for Antivirus (AV) & Endpoint Software
tags: []
title: "Exclusions for Antivirus (AV) & Endpoint Software"
knowledge_article_id: kA04u0000000Hi8CAE
---

# Exclusions for Antivirus (AV) & Endpoint Software

## Summary
Certain directories should be excluded from antivirus and endpoint protection on the Netwrix Privilege Secure (NPS) server and any registered remote nodes (ex. remote **Proxy Service**, remote **Action Service**) to ensure optimal performance of NPS workflows.

Examples of unwanted behaviors caused by antivirus or endpoint protection include:
- **NPS UI** fails to load or crashes to a blank page.
- **NPS UI** experience errors in the browser's Developer Console.
- **NPS UI** feels unresponsive, with pages taking much longer than usual to load.
- Communication between the NPS server and its remote nodes feels slow (ex. service node's information UI takes a long time to load).

## Instructions
On all NPS servers and remote nodes running Action Services, Proxy Services, etc., you should exclude the following directories from antivirus and endpoint protection software. Please note a drive letter is not used in each path as that can be customized during each NPS and service installation.

The following exclusions should be configured on each NPS server:

```text
\Program Files\Stealthbits\PAM\ActionService
\Program Files\Stealthbits\PAM\ActionServiceWorker
\Program Files\Stealthbits\PAM\HostScanService
\Program Files\Stealthbits\PAM\DatabaseTools\Data
\Program Files\Stealthbits\Postgres16\bin
\ProgramData\Stealthbits\Postgres16
```

The following exclusion should be configured on each server with a remote Proxy Service:

```text
\Program Files\Stealthbits\PAM\ProxyService
```

The following exclusions should be configured on each server with a remote Action Service:

```text
\Program Files\Stealthbits\PAM\ProxyService
\Program Files\Stealthbits\PAM\ActionService
\Program Files\Stealthbits\PAM\ActionServiceWorker
```

The following exclusions should be configured on each server with a remote Action Service and Host Scan Service:

```text
\Program Files\Stealthbits\PAM\ProxyService
\Program Files\Stealthbits\PAM\ActionService
\Program Files\Stealthbits\PAM\ActionServiceWorker
\Program Files\Stealthbits\PAM\HostScanService
```

The following exclusions should be configured on each server with a remote Scheduler Service:

```text
\Program Files\Stealthbits\PAM\ProxyService
\Program Files\Stealthbits\PAM\SbPAM.SchedulerService
```
