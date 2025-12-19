---
description: >-
  Shows how to configure DNS and network settings so you can audit a remote
  domain that has no trust relationship with your primary domain using Netwrix
  Auditor.
keywords:
  - non-trusted domain
  - audit
  - DNS
  - nslookup
  - Netwrix Auditor
  - stub zone
  - NetBIOS over TCP/IP
products:
  - auditor
sidebar_label: How to Audit a Non-Trusted Domain
tags: []
title: "How to Audit a Non-Trusted Domain"
knowledge_article_id: kA04u000000PcsaCAC
---

# How to Audit a Non-Trusted Domain

## Question

How to audit a non-trusted domain in Netwrix Auditor?

## Answer

> **IMPORTANT:** A remote domain should be accessible and reachable via nslookup from domain controllers of your primary domain and from Netwrix server.

Refer to the following steps to audit a remote domain that does not have any trust relationship with the Netwrix server or your primary domain:

1. In any of domain controllers of your primary domain, open **DNS Manager** console.
2. In the left pane under the domain controller, right-click **Forward Lookup Zones**, and select **New zone**.
3. In the New Zone Wizard window, click next, select **Stub zone** and check the **Store the zone in Active Directory** checkbox. Click **Next**.
4. Select the **To all DNS servers running on domainc controllers in this domain** option for replication, and click **Next**.
5. Enter the remote domain FQDN in the **Zone name** field. Click **Next**.
6. Add IP addresses for all domain controllers of the remote domain.

> **NOTE:** It is recommended to provide multiple domain controllers to ensure redundancy.

7. Click **Next**, and then click **Finish** to complete the setup.
8. Once the setup is completed, restart the DNS server. Right-click the server, and select **Restart** under **All Tasks**.
9. In your Netwrix Auditor server and domain controller, run the following command in elevated Command Prompt to flush DNS:
```
text
ipconfig /flushdns
```
10. In your Netwrix Auditor server, run the following command in elevated Command Prompt:
```
text
nslookup
```
   - Once prompted, enter the remote domain FQDN you've previously specified to make sure the newly added domain is reachable from your Netwrix Auditor server.
11. Enable **NetBIOS over TCP/IP** support in the Netwrix Auditor server network interface:

   1. Proceed to **Network Connections** — you can reach the menu either via your Control Panel, or by searching by **View network connections**.
   2. Right-click the current connection, and click **Properties**.
   3. Select **Internet Protocol Version 4 (TCP/IPv4)**, and click **Properties**.
   4. Click **Advanced**.
   5. Select the **WINS** tab, and select **Enable NetBIOS over TCP/IP**. Click **OK** to save changes.

> **NOTE:** If the domain still fails to get audited after completing all the steps provided, you can also specify the domainc controller name as `domain.tld\user` or `user@domain.tld` in Netwrix Auditor.
