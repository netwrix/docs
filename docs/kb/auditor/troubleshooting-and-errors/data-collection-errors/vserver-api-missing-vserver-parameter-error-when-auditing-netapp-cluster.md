---
description: >-
  Explains how to resolve the "Vserver API missing vserver parameter" ONTAPI
  error that prevents NetApp cluster auditing in Netwrix Auditor.
keywords:
  - netapp
  - ontapi
  - vserver
  - error
  - auditing
  - svm
  - management-interface
  - netwrix
  - audit
products:
  - auditor
sidebar_label: '"Vserver API missing vserver parameter" error when'
tags: []
title: '"Vserver API missing vserver parameter" error when auditing NetApp Cluster'
knowledge_article_id: kA00g000000PcikCAC
---

# "Vserver API missing vserver parameter" error when auditing NetApp Cluster

## Symptom
When you add NetApp for auditing and the collection fails immediately with the error below:

`"Cannot start auditing the 'ServerName' server. 
Failed to get file server information (0x8004959A ONTAPI error: Vserver API missing vserver parameter.)."`

## Cause
The specified management interface is not the management interface of the CIFS SVM you are trying to audit.

## Solution
1. Open the **Network Interfaces** setting in the Cluster management console.
2. Find the interface that has **Management Access** enabled and is assigned to the SVM you are trying to audit.
3. Remember its IP address and specify it in the properties of the NetApp item in Netwrix Auditor in the **ONTAPI** node.

![Management_Interface_NetApp]./../0-images/ka04u000000HcZ5_0EM0g000002CGLg.png)

Also make sure the account used to collect to ONTAPI is assigned a custom role on the SVM that has the following capabilities with access query levels:

| Capability                          | Access level |
|-------------------------------------|--------------|
| Version                             | readonly     |
| Volume                              | readonly     |
| vserver audit                       | all          |
| vserver audit rotate-log            | all          |
| vserver cifs                        | readonly     |

See [Creating Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access](https://docs.netwrix.com/docs/auditor/10_8).

