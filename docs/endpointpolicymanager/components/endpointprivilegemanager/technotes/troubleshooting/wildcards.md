---
title: "How are wildcards supported when used with Path and Command-line arguments in Least Privilege Manager?"
description: "How are wildcards supported when used with Path and Command-line arguments in Least Privilege Manager?"
sidebar_position: 90
---

# How are wildcards supported when used with Path and Command-line arguments in Least Privilege Manager?

When creating a PATH rule in LPM you can use wildcards at almost any level for the folder or file
name.

For example, all of the PATHs below are valid:

![667_1_image-20210312232539-1](/images/endpointpolicymanager/troubleshooting/leastprivilege/667_1_image-20210312232539-1.webp)

The same thing applies to using wildcards in Command-line arguments, all of the command-line
argument examples below are valid.

Syntax when you know the file name starts with a 2:

![667_2_image-20210316100826-1_942x394](/images/endpointpolicymanager/troubleshooting/leastprivilege/667_2_image-20210316100826-1_942x394.webp)

Syntax to substitute the name of any folder directly after %LocalAppData% and the file name starts
with a 2:

![667_3_image-20210316101015-2_944x398](/images/endpointpolicymanager/troubleshooting/leastprivilege/667_3_image-20210316101015-2_944x398.webp)

Syntax to substitute the name of any folder after Microsoft and the file name starts with a 2:

![667_4_image-20210316101118-3_940x391](/images/endpointpolicymanager/troubleshooting/leastprivilege/667_4_image-20210316101118-3_940x391.webp)


