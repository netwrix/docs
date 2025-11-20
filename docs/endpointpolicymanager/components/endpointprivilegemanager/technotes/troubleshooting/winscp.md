---
title: "Why is my File Info Deny rule for WinSCP Setup 17.x and lower not working?"
description: "Why is my File Info Deny rule for WinSCP Setup 17.x and lower not working?"
sidebar_position: 120
---

# Why is my File Info Deny rule for WinSCP Setup 17.x and lower not working?

PROBLEM:

You have created a Deny rule using the File Info condition in Least Privilege Manager for WinSCP
Setup where you wish to deny running version 5.17.10.11086 and any other lower versions. However,
all WinSCP Setup versions lower than 5.17.10.11087 are still able to be run after applying rule.

REASON:

The file Info deny rule was created by browsing for a reference file and selecting the WinSCP Setup
EXE file (WinSCP-5.17.10-Setup.exe). However, the PRODUCT name contains trailing spaces that are not
visible unless you highlight the Product name field, which is why the issue is occurring. If you
look in the screenshot below you will see that the Product name is really
"WinSCP                                                      ", and not just "WinSCP"

![884_1_image-20210816211638-1](/images/endpointpolicymanager/troubleshooting/leastprivilege/fileinfodeny/884_1_image-20210816211638-1.webp)

Also, not all versions of WinSCP Setup EXE have a file name:

![884_2_image-20210816211638-2](/images/endpointpolicymanager/troubleshooting/leastprivilege/fileinfodeny/884_2_image-20210816211638-2.webp)

SOLUTION:

To work around these issues, you can replace the FILE Info name with a wildcard, and add a wildcard
to the PRODUCT name "WinSCP" to account for the trailing spaces.

![884_3_image-20210816211638-3](/images/endpointpolicymanager/troubleshooting/leastprivilege/fileinfodeny/884_3_image-20210816211638-3.webp)


