---
title: "Gathering License Tool logs (LT.exe)"
description: "Gathering License Tool logs (LT.exe)"
sidebar_position: 90
---

# Gathering License Tool logs (LT.exe)

Sometimes LT.exe can produce errors due to AD/access rights restrictions. This can affect the
process of gathering information during LRK (License Request Key) generation.

![960_1_image-20230719015648-1_950x814](/images/endpointpolicymanager/troubleshooting/license/960_1_image-20230719015648-1_950x814.webp)

When this or any kind of issue occurs, the Support team may request logs for this tool.

Typically, this log cannot be collected using pplogs, especially if the customer is new to Netwrix
Netwrix Endpoint Policy Manager (formerly PolicyPak) products and does not have any of these
products installed.

Log files and related files for LT.exe (if any errors are detected) are located here:

`"C:\Users\****\AppData\Local\PolicyPak\PolicyPak License Tool"`

When asked, a customer need to access this location and ZIP the content of this folder for a further
transfer to the Support team. The user behind the asterisks is the one who was executing` LT.exe.`

