---
title: "During CSE installation on a VM the following message is displayed indicating a reboot will be needed"
description: "During CSE installation on a VM the following message is displayed indicating a reboot will be needed"
sidebar_position: 30
---

# During CSE installation on a VM the following message is displayed indicating a reboot will be needed

```
"The following applications are using files which the installer must update. You can either close the applications and click "Try Again" or click "Continue" so that the installer continues the installation, and replaces these files when your system restarts"
```

![752_1_image-20200108161845-1](/images/endpointpolicymanager/troubleshooting/install/752_1_image-20200108161845-1.webp)

You are receiving this message because the "Microsoft Visual C++ 2015-2019 Redistributable" that
VMware installs, is an older version than the version needed by the Netwrix Endpoint Policy Manager
(formerly PolicyPak) CSE.

### More Information:

VMware Tools are developed and built using VS2015 and uses the Microsoft Visual Studio 2015
Redistributable, however, in Endpoint Policy Manager we use VS2019.

Microsoft maintains a single version of the MS Visual C++ Redistributable for VS2015, VS2017 and
VS2019 and products built for VS2015 (e.g. VMware Tools) can use it without issue. However, the
Endpoint Policy Manager CSE cannot use the now outdated VS2015 bits, and installs the unified
version of the redistributable unless it is already present on a machine.

To avoid seeing this message on VMs during the CSE installation process you can download and install
the required redistributable using the links below before installing the Endpoint Policy Manager
Client Side Extensions (CSE).

[https://aka.ms/vs/16/release/vc_redist.x64.exe](https://aka.ms/vs/16/release/vc_redist.x64.exe)

[https://aka.ms/vs/16/release/vc_redist.x86.exe](https://aka.ms/vs/16/release/vc_redist.x86.exe)

