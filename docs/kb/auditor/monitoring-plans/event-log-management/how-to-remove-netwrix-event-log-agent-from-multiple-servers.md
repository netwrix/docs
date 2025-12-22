---
description: >-
  Shows how to remove the Netwrix Event Log agent from multiple servers by using
  sc.exe and a provided PowerShell script that accepts a list of servers.
keywords:
  - Netwrix
  - Event Log agent
  - remove
  - sc.exe
  - PowerShell
  - servers
  - Remove.zip
products:
  - auditor
sidebar_label: How to remove Netwrix Event Log agent from multipl
tags: []
title: "How to remove Netwrix Event Log agent from multiple servers"
knowledge_article_id: kA00g000000H9W9CAK
---

# How to remove Netwrix Event Log agent from multiple servers

We used to use Netwrix Auditor - Generic (Event Log Management) events and Netwrix Auditor for User logons with agents, but we do not use them anymore

But agents are still installed on the servers, so we need a method to safely automate the removal of the service from all servers.

---

The agents are registered as services, so it is recommended to use `sc.exe` to remove services.

Find attached a Powershell script that will remove Netwrix agents from all servers in the specified list.

https://kb.netwrix.com/wp-content/uploads/2013/12/Remove.zip

The script requires a list of servers in a text file as input.

Example: `.Remove.ps1 -list D:Servers.txt`
