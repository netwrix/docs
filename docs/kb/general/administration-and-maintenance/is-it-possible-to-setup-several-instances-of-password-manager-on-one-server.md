---
description: >-
  Explains that Password Manager registers a single service per server, so you
  cannot run multiple instances on the same server; recommends using separate
  servers or VMs.
keywords:
  - Password Manager
  - service
  - multiple instances
  - server
  - VM
  - virtual machine
  - installation
  - deployment
products:
  - general
sidebar_label: Is it possible to setup several instances of Passw
tags:
  - administration-and-maintenance
title: "Is it possible to setup several instances of Password Manager on one server?"
knowledge_article_id: kA00g000000H9VmCAK
---

# Is it possible to setup several instances of Password Manager on one server?

---

Password Manager gets registered as a service, and with the current architecture there is only one service per server allowed.

If you need several instances of Password Manager, you will need to allocate several servers or VMs.
