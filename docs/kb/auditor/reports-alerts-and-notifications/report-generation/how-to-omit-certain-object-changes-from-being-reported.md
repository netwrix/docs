---
description: >-
  Explains how to exclude certain data from Server Configuration Change Reporter
  snapshots by using omit files such as `omit***.txt`, with examples of patterns
  you can use in `omitpathlist.txt`.
keywords:
  - server configuration
  - omit files
  - omitpathlist
  - omitregkeys
  - snapshot
  - WMI
  - Win32
  - registry
  - deviceid
  - Server Configuration Change Reporter
products:
  - auditor
sidebar_label: How to omit certain object changes from being repo
tags: []
title: "How to omit certain object changes from being reported?"
knowledge_article_id: kA00g000000H9TPCA0
---

# How to omit certain object changes from being reported?

The Server Configuration Change Reporter provides the option to exclude certain data from the reports. In the product installation folder, you can find a number of files named `omit***.txt`. For example, the file called `omitregkeys.txt` contains a list of registry keys that are not stored in the Server Configuration Change Reporter snapshot. Each one of these omit files contains examples of the file’s use (special symbols used: `*` - any symbol, `#` - comment, this line will not be processed).

Examples from the `omitpathlist.txt`:

1. `Server1rootcimv2:Win32_BaseBoard*`  
   Specifies that data related to the `Win32_BaseBoard` class from the `rootcimv2` namespace on the Server1 server will not be included;

2. `Server1rootcimv2*`  
   Specifies that data from the `rootcimv2` namespace on the Server1 server will not be included;

3. `Server1*Win32_Keyboard*`  
   Specifies that data related to the `Win32_Keyboard` class on the Server1 server will not be included;

4. `*Win32_CacheMemory*`  
   Specifies that data related to the `Win32_CacheMemory` class on all the servers will not be included;

5. `*rootaspnet*`  
   Specifies that data from the `rootaspnet` namespace on all the servers will not be included;

6. `Server1rootcimv2:Win32_UsbHub.deviceid="usbroot_hub4&630cc7&0"`"
   Specifies that data related to the `deviceid="usbroot_hub4&630cc7&0"` object of the `Win32_UsbHub` class from the namespace `rootcimv2` on the Server1 server will not be included;

7. `Server1*.deviceid="usbroot_hub4&630cc7&0"`  
   Specifies that data related to the `deviceid="usbroot_hub4&630cc7&0"` object on the Server1 server will not be included;

8. `*.deviceid="usbroot_hub4&630cc7&0"`  
   Specifies that data related to the `deviceid="usbroot_hub4&630cc7&0"` object on all the servers will not be included.

9. `*ScheduledTasksClass*.*MicrosoftWindowsCustomer Experience Improvement ProgramServer*`  
   Specifies that data related to the Windows Customer Experience Improvement Program scheduled tasks will not be included.
