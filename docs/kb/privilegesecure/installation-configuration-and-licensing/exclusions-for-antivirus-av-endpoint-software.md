---
description: >-
  Directories to exclude from antivirus and endpoint protection on Netwrix
  Privilege Secure servers and registered remote nodes for optimal performance.
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
  - privilegesecure
sidebar_label: "Configuring Exclusions for Antivirus (AV) & Endpoint Software"
tags:
  - kb
  - installation-configuration-and-licensing
title: "Configuring Exclusions for Antivirus (AV) & Endpoint Software"
knowledge_article_id: kA04u0000000Hi8CAE
---

# Configuring Exclusions for Antivirus (AV) & Endpoint Software

## Overview

This article describes the directories to exclude from antivirus and endpoint protection software on the Netwrix Privilege Secure for Access Management server and any registered remote nodes (for example, remote **Proxy Service**, remote **Action Service**) to ensure optimal performance of Privilege Secure workflows.

Examples of unwanted behaviors caused by antivirus or endpoint protection include:

- **NPS UI** fails to load or crashes to a blank page.
- **NPS UI** experience errors in the browser's Developer Console.
- **NPS UI** feels unresponsive, with pages taking much longer than usual to load.
- Communication between the Privilege Secure server and its remote nodes feels slow (for example, service node's information UI takes a long time to load).

## Instructions

On all Privilege Secure servers and remote nodes running Action Services, Proxy Services, and so on, exclude the following directories from antivirus and endpoint protection software.

> **NOTE:** The paths do not include a drive letter because it can be customized during each Privilege Secure and service installation.

Configure the following exclusions on each Privilege Secure server:

```text
\Program Files\Stealthbits\PAM\ActionService
\Program Files\Stealthbits\PAM\ActionServiceWorker
\Program Files\Stealthbits\PAM\HostScanService
\Program Files\Stealthbits\PAM\DatabaseTools\Data
\Program Files\Stealthbits\PostgreSQL16\bin
\ProgramData\Stealthbits\PostgreSQL16
```

Configure the following exclusion on each server with a remote Proxy Service:

```text
\Program Files\Stealthbits\PAM\ProxyService
```

Configure the following exclusions on each server with a remote Action Service:

```text
\Program Files\Stealthbits\PAM\ProxyService
\Program Files\Stealthbits\PAM\ActionService
\Program Files\Stealthbits\PAM\ActionServiceWorker
```

Configure the following exclusions on each server with a remote Action Service and Host Scan Service:

```text
\Program Files\Stealthbits\PAM\ProxyService
\Program Files\Stealthbits\PAM\ActionService
\Program Files\Stealthbits\PAM\ActionServiceWorker
\Program Files\Stealthbits\PAM\HostScanService
```

Configure the following exclusions on each server with a remote Scheduler Service:

```text
\Program Files\Stealthbits\PAM\ProxyService
\Program Files\Stealthbits\PAM\SbPAM.SchedulerService
```
