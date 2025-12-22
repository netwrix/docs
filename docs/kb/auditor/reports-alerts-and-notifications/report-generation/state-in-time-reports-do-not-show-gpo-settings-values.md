---
description: >-
  State-in-time (SIT) GPO reports in Netwrix Auditor may show only summary
  information and omit most GPO settings when the Auditor VM is on a different
  subnet and the data processing account uses NETBIOS domain\account format.
  This article explains the affected environment, cause, and the resolution.
keywords:
  - GPO
  - state in time
  - SIT
  - GPO settings
  - Netwrix Auditor
  - NETBIOS
  - FQDN
  - data processing account
  - subnet
  - WINS
products:
  - auditor
sidebar_label: State in time reports do not show GPO settings val
tags: []
title: "State in time reports do not show GPO settings values"
knowledge_article_id: kA04u000000Pcy9CAC
---

# State in time reports do not show GPO settings values

GPO SIT reports do not show GPO settings values. Only GPO summary information is present.  
For example: “Empty Group Policy Objects” report lists Policies that actually contain some settings set.

![User-added image]./../0-images/ka04u000000HdEa_0EM4u000002CmYD.png)

Another example: “Group Policy Objects by Policy Name” report lists only settings of the following sections:

- General/Delegation
- General/Details
- General/Links
- General/Security Filtering

![User-added image]./../0-images/ka04u000000HdEa_0EM4u000002CmYI.png)

All the other data is missing from the report:  
![User-added image]./../0-images/ka04u000000HdEa_0EM4u000002CmYN.png)

## Affected environment

The conditions below must take place altogether:

1. Netwrix Auditor VM belongs to the different network subnet than the monitored active directory domain.

   Example:  
   Netwrix Auditor VM:  
   - IP address: `10.0.0.12`  
   - Subnet Mask: `255.255.0.0 / 16`  
   Domain Controller VM:  
   - IP address: `192.168.8.4`  
   - Subnet Mask: `255.255.252.0 / 22`

2. You are not using any custom WINS servers for NETBIOS names resolution.

3. Domain Item Data Processing Account in the Netwrix Auditor configuration setting for the monitored domain is set in a format of `NETBIOSDOMAINNAME\ACCOUNTSAMACCOUNTMANE` (e.g. `corp\administrator`).

![User-added image]./../0-images/ka04u000000HdEa_0EM4u000002CmYS.png)

## Cause

By default NetBios names cannot be resolved across different subnets using broadcasting.

## Resolution

Set the data processing account for the monitored domain item in a format of `FQDNDOMAINNAME\ACCOUNTSAMACCOUNTNAME` (e.g. `corp.local\administrator`)

![User-added image]./../0-images/ka04u000000HdEa_0EM4u000002CsNQ.png)
