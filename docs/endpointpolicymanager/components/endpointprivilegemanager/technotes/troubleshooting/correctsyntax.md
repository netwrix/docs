---
title: "I want all the files in a folder to be ALLOWED when SecureRun is used. What is the correct syntax?"
description: "I want all the files in a folder to be ALLOWED when SecureRun is used. What is the correct syntax?"
sidebar_position: 40
---

# I want all the files in a folder to be ALLOWED when SecureRun is used. What is the correct syntax?

If you want to allow all files in a folder to be permitted when SecureRun is used, do not use this
syntax.

![628_1_img1](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/628_1_img1.webp)

Instead, if you want to allow all .exe files in the application folder, then you should be using
either

%localappdata%\Slack (no wildcard/asterisk) + Folder typelike what's seen here…

![628_2_img2](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/628_2_img2.webp)

Or

%localappdata%\Slack\\\* + File type

![628_3_image-20210311160348-2](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/628_3_image-20210311160348-2.webp)


