---
title: "Automate Sign-in to the Client"
description: "Automate Sign-in to the Client"
sidebar_position: 40
---

# Automate Sign-in to the Client

When you launch Netwrix Auditor client installed on the same machine as Netwrix Auditor server,
connection to that server is established automatically using your current account. However, if you
want to connect to Netwrix Auditor Server installed on another computer, you will be prompted to
specify connection parameters: server name and user credentials.

To automate the sign-in process, users who need to frequently connect to different Netwrix Auditor
Servers (for example, Managed Service Providers) may configure the product shortcut: when you click
the shortcut, Netwrix Auditor client will display the sign-in window with pre-populated server name
and user name. You will only have to enter password.

To create a shortcut for automated sign-in:

1. Navigate to the Netwrix Auditor client installation directory and locate the
   AuditIntelligence.exe file (default location is _C:\Program Files (x86)\Netwrix Auditor\Audit
   Intelligence\AuditIntelligence.exe)._
2. Create a shortcut for this executable file.
3. Right-click the created shortcut and select Properties.
4. In the Target field, a path to the executable file will be shown. Add the following parameters to
   the end:

    `/s:server_name /u:user_name /specify_creds`

    where:

    - `server_name`—your Netwrix Auditor Server name or IP address.
    - `user_name`— Netwrix Auditor user who will log in.

    Example:

    `"C:\Program Files (x86)\Netwrix Auditor\Audit Intelligence\Audit Intelligence.exe" /s:host.corp.local /u:corp\analyst /specify_creds`

5. Click Apply.

You can create as many shortcuts with different parameters as needed.
