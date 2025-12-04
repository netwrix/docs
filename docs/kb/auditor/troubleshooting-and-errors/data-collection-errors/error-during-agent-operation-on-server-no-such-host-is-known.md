---
description: >-
  Explains how to resolve the "No such host is known" error reported by Netwrix
  Auditor when an agent fails to resolve a server name. Provides checks for
  server names and DNS registration steps.
keywords:
  - No such host is known
  - nslookup
  - DNS
  - ipconfig /registerdns
  - agent error
  - Netwrix Auditor
  - DNS records
  - server name resolution
products:
  - auditor
sidebar_label: 'Error During Agent Operation on Server: No Such Ho'
tags: []
title: 'Error During Agent Operation on Server: No Such Host is Known'
knowledge_article_id: kA00g000000H9XmCAK
---

# Error During Agent Operation on Server: No Such Host is Known

## Symptom

Activity Summary contains the following error message:

```text
<ServerName>: Error during agent operation on server <ServerName>. No such host is known. Additional information: none.
```

## Causes

Here are the possible causes for the issue:

- Cause 1. Incorrect server names are specified.
- Cause 2. DNS-request fails.

## Resolutions

Here are possible options to resolve the issue:

### Check Server Names

First of all, check that all server names are specified correctly in the program settings. Make sure that your DNS server, has the DNS-records registered for your problematic servers:

1. On the server running Netwrix Auditor Server host, launch the `nslookup` tool: click **Start** / **Run**, type in `nslookup.exe` and press **Enter**.
2. In the `nslookup` dialog, check all your problematic servers one by one: specify a server name and press **Enter**.
3. If the IP-addresses appear in the command output, your DNS server has the DNS-records registered correctly.

### Check DNS Records

If the DNS-records are not registered correctly, perform the steps below:

1. On each problematic server, launch the command prompt: click **Start /** **Run**, type in `cmd` and press **Enter.**
2. Type in the `ipconfig /registerdns` command and press **Enter**.
3. As a result, the DNS records will be registered for your servers.
