---
title: "Scripted/Command Line Use of Gen 7 Agent EXE Installer"
description: "Scripted/Command Line Use of Gen 7 Agent EXE Installer"
sidebar_position: 20
---

# Scripted/Command Line Use of Gen 7 Agent EXE Installer

By co-locating a pre-configured **HubDetails.xml** file in the same folder as the Gen 7 Agent
installer these details will be used by the installer for the installed agent.

Use of the `/SP- /VERYSILENT /SUPPRESSMSGBOXES` switches will ensure the installation is silent and
operates unattended.

C:\Users\Administrator\Downloads>dir

Volume in drive C has no label.

Volume Serial Number is 3092-7141

Directory of C:\Users\Administrator\Downloads

03/03/2017 15:03 `<DIR>` .

03/03/2017 15:03 `<DIR>` ..

03/03/2017 13:35 462 HubDetails.xml

24/02/2017 17:14 19,110,240 nnt-changeTracker™-gen7agent-7.0.0.15-68.exe

2 File(s) 19,110,702 bytes

2 Dir(s) 4,802,424,832 bytes free

C:\Users\Administrator\Downloads>nnt-changeTracker™-gen7agent-7.0.0.15-68.exe /SP- /VERYSILENT
/SUPPRESSMSGBOXES

Alternatively, a full command line installation can be used, with individual arguments used to
specify HubDetails settings.

**For example**:

C:\Users\Administrator\Downloads>nnt-changeTracker™-gen7agent-7.0.0.15-68.exe /UseNewHub=true
/HUBURL=https://192.168.1.107/api /NamePrefix=GenVii- /HUBUSER=agent /HUBPASSWORD=passWord121 /SP-
/VERYSILENT /SUPPRESSMSGBOXES

You can also use these parameters in the command line: NameSuffix, Thumbprint, Proxy, ProxyDomain,
ProxyUser, ProxyPassword.

:::note
These parameters are not case sensitive.
:::


For more information on the **HubDetails.xml** nodes and settings see the
[First Run – HubDetails.xml File](/docs/changetracker/8.1/admin/settingstab/devicegroups.md) topic for additional
information.
