---
description: >-
  You are unable to audit a target server by IP address or by using `localhost`,
  and the Activity Records report shows an incorrect server name. This article
  explains causes and provides steps to fix DNS cache and hosts-file issues so
  you can audit by FQDN.
keywords:
  - netwrix auditor
  - IP address
  - localhost
  - hosts file
  - DNS cache
  - ipconfig
  - flushdns
  - Activity Records
  - FQDN
products:
  - auditor
sidebar_label: Unable to audit target server by IP address
tags: []
title: "Unable to audit target server by IP address"
knowledge_article_id: kA00g000000H9axCAC
---

# Unable to audit target server by IP address

## Symptoms
1. Unable to audit a target server by using `IP address`.
2. Unable to audit a host server by using `localhost`.
3. **Activity Records** summary report shows incorrect server name.

## Cause
1. There is stale data in the `DNS cache` of the host and target machines.  
2. There is incorrect data in the `hosts` file of the host and target machines.

## Resolution
To resolve this issue, perform the following steps:

1. On the target and the host machines, remove all records which contain the `IP address` of the host and the target machines from the following file: `C:\Windows\system32\drivers\etc\hosts`
2. Flush the `DNS cache` on the host and the target machines by executing the following command: `ipconfig /flushdns`
3. Use the FQDN-name of the target machine instead of `IP address` or `localhost` when adding it as an item in Netwrix Auditor.
