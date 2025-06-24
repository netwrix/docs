---
title: "Group Policy Management Console In Netwrix 1Secure"
sidebar_label: "Group Policy Management Console"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Group Policy Management Console

Group Policy Management Console is an administrative tool for managing Group Policy across the
company. If you want to audit Group Policy, Group Policy Management Console must be installed on the
computer where Netwrix Cloud Agent resides.

Follow the steps to install GPMC on Windows Server 2012 and above.

1. Navigate to **Start** > **Control Panel** > **Programs and Features** > **Turn Windows features
   on or off**.
2. In the **Add Roles and Features Wizard** dialog that opens, proceed to the **Features** tab in
   the left pane, and then select **Group Policy Management**.
3. Click **Next** to proceed to confirmation page.
4. Click **Install** to enable it.

Follow the steps to install GPMC on Windows 8.1 and Windows 10.

1. Depending on your OS, download and install Remote Server Administrator Tools that include Group
   Policy Management Console.

   - [Windows 8.1](http://www.microsoft.com/en-us/download/details.aspx?id=39296)
   - [Windows 10](https://www.microsoft.com/en-us/download/details.aspx?id=45520)

2. Navigate to **Start** > **Control Panel > Programs and Features** > **Turn Windows features on or
   off**.
3. Navigate to **Remote Server Administration Tools** > **Feature Administration Tools** and select
   **Group Policy Management Tools**.

# Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy

Review a full list of protocols and ports required for monitoring Active Directory, Exchange, and
Group Policy.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Cloud Agent resides.

- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

|                                    |          |                     |                    |                                                                                                                                   |
| ---------------------------------- | -------- | ------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Port                               | Protocol | Source              | Target             | Purpose                                                                                                                           |
| 389                                | TCP      | Netwrix Cloud Agent | Domain controllers | LDAP Common queries                                                                                                               |
| 3268                               | TCP      | Netwrix Cloud Agent | Domain controllers | LDAP Group membership GC search                                                                                                   |
| 3269                               | TCP      | Netwrix Cloud Agent | Domain controllers | Global catalog LDAP over SSL                                                                                                      |
| 88                                 | TCP/UDP  | Netwrix Cloud Agent | Domain controllers | Kerberos authentication                                                                                                           |
| 135 and dynamic range: 1024 -65535 | TCP      | Netwrix Cloud Agent | Domain controllers | Windows Management Instrumentation gpupdate /force                                                                                |
| 445                                | TCP      | Netwrix Cloud Agent | Domain controllers | SMB 2.0/3.0 Authenticated communication between Netwrix Cloud Agent and domain controllers.                                       |
| 53                                 | UDP      | Netwrix Cloud Agent | Domain controllers | DNS Client                                                                                                                        |
| 135 and dynamic range: 1024 -65535 | TCP      | Netwrix Cloud Agent | Exchange Server    | - Windows Management Instrumentation - Retrieve Exchange Server configuration settings\* - Run gpupdate /force \* gpupdate /force |
| 5985 5986                          | TCP      | Netwrix Cloud Agent | Exchange Server    | - Windows Remote Management - PowerShell connections: - 5985 - for HTTP - 5986 - for HTTPS                                        |

# Enable Secondary Logon Service

**Step 1 –** On the computer where Netwrix Cloud Agent resides, navigate to **Start** > **Windows
Administrative** Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) **>
Services**.

**Step 2 –** In the **Services** dialog, locate the **Secondary Logon** service.

**Step 3 –** Right-click the service and on the **General** tab make sure that **Startup type** for
this service is other than _Disabled_. Startup type can be either _Automatic_ or _Manual_.
