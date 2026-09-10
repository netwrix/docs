---
title: "Install for User Activity Core Service"
description: "Install for User Activity Core Service"
sidebar_position: 60
---

# Install for User Activity Core Service

By default, the Netwrix Auditor User Activity Core Service is installed automatically on the audited
computers when setting up auditing in Netwrix Auditor. If, for some reason, installation has failed,
you must install the Netwrix Auditor User Activity Core Service manually on each audited computer.

Before installing the Netwrix Auditor User Activity Core Service manually, make sure that:

- The audit settings are configured properly.
- The Data Processing Account has access to the administrative shares.

## Install User Activity Core Service Manually

**Step 1 –** On the computer where Auditor Server resides, navigate to _%ProgramFiles% (x86)\Netwrix
Auditor\User Activity Video Recording_ and copy the UACoreSvcSetup.msi file to the audited computer.

:::note
This is the default location. It may be changed because users can move this folder.
:::

**Step 2 –** Run the installation package.

**Step 3 –** Follow the instructions of the setup wizard. When prompted, accept the license
agreement and specify the installation folder.

**Step 4 –** On the Core Service Settings page, specify the host server (i.e., the name of the
computer where Netwrix Auditor is installed) and the server TCP port.

The Netwrix Auditor User Activity Core Service is installed and ready to audit user activity.

## Install User Activity Core Service with the Command Prompt

Follow the steps to perform a silent installation of the Netwrix Auditor User Activity Core Service
with the command prompt.

**Step 1 –** On the computer where Auditor Server resides, navigate to _%ProgramFiles%
(x86)\Netwrix Auditor\User Activity Video Recording_ and copy the **UACoreSvcSetup.msi** file to the
audited computer or to a file share the target server(s) can access.

**Step 2 –** Run the following commands on target servers:

- `CD %PathToInstaller%`
- `msiexec.exe /i "UACoreSvcSetup.msi" ALLUSERS=1 /qn /norestart /log output.log UAVR_SERVERNAME=%NAServer% UAVR_SERVERPORT=9004`

**Step 3 –** Replace _%PathToInstaller%_ with the path to the folder you copied the
**UACoreSvcSetup.msi** file.

**Step 4 –** Replace _%NAServer%_ with the name of your Netwrix Auditor server.
