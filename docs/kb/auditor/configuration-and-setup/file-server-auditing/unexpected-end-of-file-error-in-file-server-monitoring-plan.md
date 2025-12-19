---
description: >-
  Explains how to resolve "Unexpected end of file" errors (EventIDs 2002 and
  2004) in Netwrix Auditor file server monitoring plans caused by missing
  permissions on the Microsoft Link-Layer Discovery Protocol driver.
keywords:
  - Netwrix Auditor
  - MSLLDP
  - EventID 2002
  - EventID 2004
  - sc sdset
  - security descriptor
  - file server monitoring
  - ProgramData
products:
  - auditor
sidebar_label: Unexpected End of File Error in File Server Monito
tags: []
title: "Unexpected End of File Error in File Server Monitoring Plan"
knowledge_article_id: kA0Qk0000000ZCHKA2
---

# Unexpected End of File Error in File Server Monitoring Plan

## Symptom

The Netwrix Auditor Health Log contains EventIDs 2002 and 2004:

```
Unexpected end of file has occurred. 
The following elements are not closed refering to Netwrix .xml files in
the ProgramData directory of the Netwrix server specific to the monitoring plan.
```

## Cause

This error is related to the link-layer protocol. It indicates that no service account has been granted permission to access the Microsoft Link-Layer Discovery Protocol (MSLLD) driver.

## Resolution

To address this issue, follow these steps:

1. Run elevated Command Prompt to execute the following command:

   ```text
   SC sdshow MSLLDPCopy
   ```

   The output should read similar to the following:

   ```text
   D:(D;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BG)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;SY)
   (A;;CCDCLCSWRPDTLOCRSDRCWDWO;;;BA)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;SO)
   (A;;LCRPWP;;;S-1-5-80-3141615172-2057878085-1754447212-2405740020-3916490453)
   S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
   ```

2. Execute the following command:

   ```text
   SC sdshow MUPCopy
   ```

   The output should read similar to the following:

   ```text
   D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)
   (A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWLOCRRC;;;IU)
   (A;;CCLCSWLOCRRC;;;SU)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
   ```

3. Locate the entry for `NT AUTHORITY\ SERVICE` represented as `(A;;CCLCSWLOCRRC;;;SU)`. Add it to the original MSLLDP security descriptor property, just before the last `S:(AU…` group.

4. Apply the new security descriptor to the MSLLDP service using the following command. Delete the carriage return symbols when copying the command.

   ```text
   sc sdset mslldp D:
   (D;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BG)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;SY)
   (A;;CCDCLCSWRPDTLOCRSDRCWDWO;;;BA)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;SO)
   (A;;LCRPWP;;;S-1-5-80-3141615172-2057878085-1754447212-2405740020-3916490453)(A;;CCLCSWLOCRRC;;;SU)
   S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
   ```
