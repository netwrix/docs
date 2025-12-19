---
title: "Exchange PowerShell Permissions"
description: "Exchange PowerShell Permissions"
sidebar_position: 30
---

# Exchange PowerShell Permissions

The ExchangePS Data Collector utilizes PowerShell to collect various information from the Exchange
environment. This data collector utilizes Remote PowerShell to collect information about Exchange
Users Configuration, Mailboxes, Public Folders, and Exchange Online Mail-Flow.

**Job Group Requirements in Addition to ExchangePS**

In addition to the permissions required by the ExchangePS Data Collector, the Connection Profile
assigned to these job groups requires the following permissions:

-   **2. CAS Metrics**

    - This job group also requires remote connection permissions for the SMARTLog Data Collector.
      See the [Exchange Remote Connections Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/remoteconnections.md) topic for additional
      information.

-   **3. Databases**

    - This job group also requires permissions for the Exchange2K Data Collector, which is
      MAPI-based and has additional requirements

-   **4. Mailboxes**

    - This job group also requires Exchange Mailbox Access Auditing to be enabled. See the
      [Enable Exchange Mailbox Access Auditing](#enable-exchange-mailbox-access-auditing) topic for
      additional information.

-   **5. Public Folders**

    - This job group also requires permissions for the ExchangePublicFolder Data Collector, which is
      MAPI-based and has additional requirements

-   **8. Exchange Online**

    - This job group uses Modern Authentication to target Exchange Online. See the
      [Exchange Online Auditing Configuration](/docs/accessanalyzer/12.0/requirements/exchange/exchangeonline/access.md) topic
      for additional information.

## Permissions Explained

**Remote PowerShell and Windows Authentication Enabled**

The Remote PowerShell and Windows Authentication configurations for Exchanges servers are required
to be enabled on at least one Exchange server running the Client Access Service so that the
ExchangePS Data Collector can make a remote PowerShell connection and authenticate through Access
Analyzer.

Access Analyzer passes credentials saved in the Connection Profile to the data collector so that it
is able to connect to the targeted host. This requires the Exchange server to allow for Windows
Authentication. See the
[Enable Remote PowerShell for ExchangePS Data Collector](#enable-remote-powershell-for-exchangeps-data-collector)
topic and the
[Enable Windows Authentication for PowerShell Virtual Directory](#enable-windows-authentication-for-powershell-virtual-directory)
topic for additional information.

**View-Only Organization Management Role Group**

This is required so the ExchangePS Data Collector is able to run the various Exchange PowerShell
cmdlets.

**Public Folder Management**

This permission is only required if utilizing the ExchangePublicFolder Data Collector or
ExchangeMailbox Data Collector, as well as the PublicFolder or Mailbox Action Modules. This is
required in order to make a connection through the MAPI protocol. The following job group requires
the Public Folder Management Role Group:

-   **5. Public Folders** > **Ownership**

If not running this collection, then this permission is not required.

**Mailbox Search Role**

This is required to collect Mailbox Access Audit logs and run Mailbox Search queries through the
ExchangePS Data Collector. The following job group requires the Mailbox Search Role:

-   **4. Mailboxes** > **Logons**

**Application Impersonation Role**

The Application Impersonation Role is a customer role you need to create. See the
[Create Custom Application Impersonation Role in Exchange](#create-custom-application-impersonation-role-in-exchange)
topic for additional information.

## Scoping Options

There are five different scoping options within this data collector. Since not all query categories
support all scoping options, No Scoping is an option. If there are no scoping options available,
then the data collector should be run against the host specified in the Summary page of the data
collector wizard.

**No Scoping**

This option will gather information about the entire Exchange Organization. When using the applet,
the data collector will gather information about the Exchange Forest in which the Access Analyzer
Console currently resides. For Remote PowerShell, the data collector will gather information about
the Exchange Organization to which the Remote PowerShell connection was made. This refers to the
server entered in the Client Access Server (CAS) field of the global configuration from the
**Settings** > **Exchange** node or on the Scope Page of the data collector wizard. See the
[ExchangePS: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scope.md) topic for additional
information.

**Scope by Database**

This option will gather information about any databases which are chosen. When using the applet, the
data collector will return databases in the Scope by DB page of the data collector wizard for the
Exchange Organization in which the Access Analyzer Console currently resides, as well as, only
return information about those databases. For Remote PowerShell, the data collector will return
databases in the Scope by DB page of the data collector wizard for the Exchange Forest, as well as,
only return information about those databases. See the
[ExchangePS: Scope by DB](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scopedatabases.md) topic for
additional information.

**Scope by Mailbox**

This option will gather information about any mailboxes which are chosen. When using the applet, the
data collector will return mailboxes in the Scope by Mailboxes page of the data collector wizard for
the Exchange Forest in which the Access Analyzer Console currently resides, as well as, only return
information about those mailboxes. For Remote PowerShell, the data collector will return mailboxes
in the Scope by Mailboxes page of the data collector wizard for the Exchange Forest, as well as,
only return information about those mailboxes. See the
[ExchangePS: Scope by Mailboxes](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scopemailboxes.md) topic
for additional information.

**Scope by Server**

This option will gather information about objects which reside on the chosen server. When choosing
this option, the data collector will then use the Host List applied to the job’s **Configure** >
**Hosts** node as the servers scoping list. When using the applet, the data collector will deploy a
process to the targeted host to run the PowerShell on that server. For Remote PowerShell, the data
collector will deploy no applet and utilize the WinRM protocol to gather information about the
objects on that server.

**Scope by Public Folder**

This option will gather information about any public folders which are chosen. When using the
applet, the data collector will return public folders in the Scope by Public Folders page of the
data collector wizard for the Exchange Forest in which the Access Analyzer Console currently
resides, as well as, only return information about those public folders. For Remote PowerShell, the
data collector will return public folders in the Scope by Public Folders page of the data collector
wizard for the Exchange Forest, as well as, only return information about those public folders. See
the
[ExchangePS: Scope by Public Folders](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/scopepublicfolders.md)
topic for additional information.

## Enable Remote PowerShell for ExchangePS Data Collector

Follow these steps to enable Remote PowerShell.

**Step 1 –** On the server that Access Analyzer will connect with Remote PowerShell, open
PowerShell.

**Step 2 –** Run the following command:

```
Enable-PSRemoting
```

**Step 3 –** When prompted, type `A` and `A` again to enable the appropriate services and protocols.

Remote PowerShell has been enabled. See the Microsoft
[Tip: Enable and Use Remote Commands in Windows PowerShell](https://technet.microsoft.com/en-us/library/ff700227.aspx)
article for additional information.

Next, enable Windows Authentication for PowerShell Virtual Directory on the same server.

## Enable Windows Authentication for PowerShell Virtual Directory

Once Remote PowerShell has been enabled on an Exchange Server in the environment, it is necessary to
also enable Windows Authentication for the PowerShell Virtual Directory on the same Exchange server.
Follow these steps to enable Windows Authentication.

**Step 1 –** On the server where Remote PowerShell was enabled, open the Internet Information
Services (IIS) Manager.

![IIS Authentication Open Feature](/images/accessanalyzer/12.0/requirements/solutions/exchange/iismanager.webp)

**Step 2 –** Traverse to the **PowerShell** Virtual Directory under the **Default Web Site**. Select
**Authentication** and click **Open Feature**.

![IIS Enable Windows Authentication](/images/accessanalyzer/12.0/requirements/solutions/exchange/iismanagerauth.webp)

**Step 3 –** Right-click on **Windows Authentication** and select **Enable**.

Windows Authentication has been enabled for the PowerShell Virtual Directory.

## Create Custom Application Impersonation Role in Exchange

Follow the steps to create the custom Application Impersonation role. The process is the same for
Exchange 2010 Service Pack 1 through Exchange 2019 and Exchange Online.

**Step 1 –** Within the Exchange Admin Center, navigate to the permissions section and select admin
roles.

**Step 2 –** Add a new role group by clicking on the + button, and the New Role Group window opens.

![New role group window](/images/accessanalyzer/12.0/requirements/solutions/exchange/rolegroup.webp)

**Step 3 –** Configure the new role group with the following settings:

- Name – Provide a distinct name for the role group, for example Application Impersonation
- Description – Optionally indicate in the description that the new role group is required for
  Access Analyzer
- Write scope – Remain set to **Default**
- Roles – Click the + button to open the Select a Role window. Select the
  **ApplicationImpersonation** role from the available list and click **Add**. Then click **OK** to
  close the Select a Role window.
- Members – Click the + button to open the Select Members window. Select the account from the
  available list and click **Add**. Remember, the account needs to be assigned the other permissions
  required for the **EWSMailbox** and/or **EWSPublicFolder** data collectors. Then click **OK** to
  close the Select Members window.

**Step 4 –** **Save** the new role group.

The new role group appears in the list.

## Enable Exchange Mailbox Access Auditing

The 4. Mailboxes Job Group requires the Exchange Mailbox Access Auditing to be enabled. In order to
collect Mailbox Access Auditing events, it is necessary to enable Exchange Mailbox Access Auditing
for Exchange. See the following Microsoft articles:

- Exchange Online –
  [Enable mailbox auditing in Office 365](https://technet.microsoft.com/en-us/library/dn879651.aspx)
  article
- Exchange 2016 – Exchange 2019 –
  [Enable or disable mailbox audit logging for a mailbox](https://technet.microsoft.com/en-us/library/ff461937(v=exchg.160).aspx)
  article
- Exchange 2013 –
  [Enable or disable mailbox audit logging for a mailbox](https://technet.microsoft.com/en-us/library/ff461937(v=exchg.150).aspx)
  article
- Exchange 2010 –
  [Enable or Disable Mailbox Audit Logging for a Mailbox](https://technet.microsoft.com/en-us/library/ff461937(v=exchg.141).aspx)
  article
