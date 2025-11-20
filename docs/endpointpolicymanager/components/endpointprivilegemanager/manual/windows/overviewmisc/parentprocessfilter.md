---
title: "Understanding Parent Process Filter"
description: "Understanding Parent Process Filter"
sidebar_position: 80
---

# Understanding Parent Process Filter

You might have an application which has the ability to be called multiple ways. For instance, you
could double-click on it to run or install, or perhaps some parent application can call the child
program to be run or installed.

You can use Parent Process Filter to find out which child processes can be run by which parent
processes.

In this example, an iTunes Helper application can only be installed if the iTunesSetup.exe
application is actually performing the action (in this case with **Signature** and **File Info**
being checked first before the child application is launched elevated.)

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_parent_process.webp)



