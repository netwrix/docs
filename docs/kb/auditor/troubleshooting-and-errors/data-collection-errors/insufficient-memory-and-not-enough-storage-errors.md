---
description: >-
  Explains causes and resolutions for "Insufficient memory" and "Not enough
  storage" errors when running Netwrix Event Log Manager, including how to
  adjust Windows performance settings.
keywords:
  - Insufficient memory
  - E_OUTOFMEMORY
  - Not enough storage
  - Netwrix Event Log Manager
  - SystemPropertiesAdvanced.exe
  - performance settings
  - Background services
  - Programs
  - managed object
  - memory
products:
  - auditor
sidebar_label: Insufficient memory and not enough storage errors
tags: []
title: "Insufficient memory and not enough storage errors"
knowledge_article_id: kA00g000000H9Y1CAK
---

# Insufficient memory and not enough storage errors

I get the following errors:
**Insufficient memory to continue the execution of the program**
**Not enough storage is available to complete this operation. (Exception from HRESULT: 0x8007000E (E_OUTOFMEMORY))**

---

1. The server where **Netwrix Event Log Manager** is installed has not enough physical memory to execute the program.
2. Your managed object has more than **20-50** servers.
3. The server where **Netwrix Event Log Manager** is installed is configured to optimize memory usage for **Background services**.

---

1. Increase the total amount of physical memory on your **Netwrix Event Log Manager** server.
2. Create additional managed objects and divide your managed servers between them.
3. Configure your server to optimize memory usage for **Programs**:
   1. Click **Start / Run**. Type `SystemPropertiesAdvanced.exe` and press **Enter**.
   2. In the **System properties** window click the **Settings** button under **Performance**.
   3. Navigate to the **Advanced** tab and select the **Programs** option under **Adjust for best performance of**. Click **Apply**.
