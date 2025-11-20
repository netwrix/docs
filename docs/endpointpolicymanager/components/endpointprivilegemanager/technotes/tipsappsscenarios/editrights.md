---
title: "Allowing access/edit rights to specific files for standard users"
description: "Allowing access/edit rights to specific files for standard users"
sidebar_position: 70
---

# Allowing access/edit rights to specific files for standard users

While you are working in an environment where access rights have been configured in a secure way,
sometimes there is a need for particular users to edit certain files with one or another
application. Let's take an example of hosts file editing on astandard user's side.

We can create a rule in Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager
which will specifically allow to edit only the file you wish the user to edit and nothing else.

We may use a Notepad text editor in this case, but you may elevate any editor. All you have to do is
to create an executable combo rule with **Path Condition** (for notepad.exe) and Command line
arguments (where path to HOSTS file is used as argument) with the **Strict Equality** option
enabled.

Should look like this:

![949_1_image-20230719020305-1_950x641](/images/endpointpolicymanager/leastprivilege/949_1_image-20230719020305-1_950x641.webp)

![949_2_image-20230719020305-2_950x635](/images/endpointpolicymanager/leastprivilege/949_2_image-20230719020305-2_950x635.webp)

![949_3_image-20230719020305-3_950x638](/images/endpointpolicymanager/leastprivilege/949_3_image-20230719020305-3_950x638.webp)

:::note
Keep in mind you are elevating the Application (Notepad in this case), not the file
itself.

:::


