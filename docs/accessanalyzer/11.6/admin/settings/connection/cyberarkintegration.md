---
title: "CyberArk Integration"
description: "CyberArk Integration"
sidebar_position: 20
---

# CyberArk Integration

For Enterprise Auditor to retrieve service account passwords from the CyberArk Password Vault,
complete the following prerequisites:

- Install the Secrets Manager on the Enterprise Auditor Console server. The organization’s
  Vault administrator can provide the Secrets Manager installation package and most likely needs to
  be present during the installation to provide credentials for the Secrets Manager
  installation to complete. See the CyberArk
  [Credential Provider (CP)](https://docs.cyberark.com/credential-providers/Latest/en/Content/CP%20and%20ASCP/Installing-CP.htm) article
  for additional information.
- Add an application to CyberArk for the integration with Enterprise Auditor. Then add the
  Application Id of this application to the `GlobalOptions.xml` file for
  Enterprise Auditor. See the
  [Customize CyberArk Application Id](#customize-cyberark-application-id) topic for additional
  information. You can lock down the application by providing an OS User, a Path, or a Hash. See
  the CyberArk
  [Add applications](https://docs.cyberark.com/credential-providers/14.0/en/Content/Common/Adding-Applications.htm) article
  for additional information.

    - The OS User needs to be the account running Enterprise Auditor. This could be the account used
      to launch the Enterprise Auditor application or an account used as the Schedule Service
      Account within Enterprise Auditor. More than one OS User can be added.
    - The Path should be a local path to the `StealthAUDIT.exe` file. The path should end with the
      file name: `…\StealthAUDIT.exe`.
    - Generate the Hash using the **AimGetAppInfo** tool in the
      `…\CyberArk\ApplicationPasswordProvider\Utils` folder on the server where Secrets Manager is
      installed. Run AimGetAppInfo in an Administrator Command Prompt using the following
      command:

        ```
        ..\CyberArk\ApplicationPasswordProvider\Utils\NETAimGetAppInfo.exe GetHash /AppExecutablesPattern <DevInstall>\PrivateAssemblies\Stealthbits.StealthAUDIT.Console.dll
        ```

        :::info
        Pipe the output hash value to a file to easily copy and paste it to the
        CyberArk application.
        :::


        See the CyberArk
        [Generate an application hash value](https://docs.cyberark.com/credential-providers/Latest/en/Content/CP%20and%20ASCP/Generating-Application-Hash-Value.htm) article
        for additional information.

        ![Application Details page for the CyberArk Application](/images/accessanalyzer/11.6/admin/settings/connection/applicationidhash.webp)

        Add the generated hash value in the Authentication tab of the Application Details page for
        the CyberArk Application.

        ![Allowed Machines list for the  CyberArk application](/images/accessanalyzer/11.6/admin/settings/connection/allowedmachines.webp)

    - Add the machine name for the Enterprise Auditor console to the Allowed Machines
      list for the CyberArk application

- After the Secrets Manager installation completes and you create the Enterprise Auditor
  application, give the necessary CyberArk accounts access to the Safes that store the
  Enterprise Auditor service accounts. This includes the account automatically created
  during the Secrets Manager installation, as well as the account automatically created
  when you create the application.

    ![Owners window for the Safe containing the credentials](/images/accessanalyzer/11.6/admin/settings/connection/vaultownerswindow.webp)

    - The account created during the AIM installation is under the naming convention
      `Prov_[COMPUTERNAME]`, where `COMPUTERNAME` is the name of the computer on which AIM is
      installed. Give this account **Retrieve accounts**, **List accounts**, and **View
      Safe Members** rights on the Safes you want.
    - The account created during the application creation has the same name as the application
      itself; give it **Retrieve accounts** rights on the Safes you want

## Customize CyberArk Application Id

Configure Enterprise Auditor with the Application id value of the application you created within
CyberArk for the integration. You do this in the
`GlobalOptions.xml` file within the Enterprise Auditor installation directory. The default location
is `…\STEALTHbits\StealthAUDIT\`.

To customize the CyberArk Application Id within Enterprise Auditor:

**Step 1 –** Navigate to the `GlobalOptions.xml` file. Open it with a text editor, for example
Notepad.

:::warning
Ensure Enterprise Auditor is closed when modifying this file.
:::


![GlobalOptions.xml file in Notepad](/images/accessanalyzer/11.6/admin/settings/connection/globaloptions.webp)

**Step 2 –** Find the `<CYBERARKAPPLICATION>` section of the `GlobalOptions.xml` file. Add the
Application Id of the configured CyberArk application for the integration in the `<APPID>` tag. If
required, customize the Command Timeout and Connection Port properties.

```
<CYBERARKAPPLICATION>
    <APPID>CyberArkApplicationID</APPID>
    <COMMANDTIMEOUT>30</COMMANDTIMEOUT>
    <CONNECTIONPORT>18923</CONNECTIONPORT>
</CYBERARKAPPLICATION>
```

- AppId – The name of the CyberArk application
- CommandTimeout – Set to the suggested default of 30
- ConnectionPort – This is a configurable option found during the installation of the CyberArk
  Credential Provider. After installation, it can be found in the configuration file located in the
  installation folder.

    See the CyberArk
    [TCP parameters](https://docs.cyberark.com/credential-providers/13.0/en/Content/CP%20and%20ASCP/Credential-Provider-Configuration-Files.htm#tcp-parameters) article
    for additional information.

**Step 3 –** Save and close the file.

Enterprise Auditor now uses the CyberArk Application Id identified in the XML string.

## User Credentials Window

In Enterprise Auditor, the CyberArk option for Password Storage is available on the User Credentials
window when configuring an **Active Directory Account** or **Local Windows Account**.

The credential information supplied in the User Credentials window must be an exact match to what is
in CyberArk as the privileged account for which it is linked. It is case-sensitive.

If you use a Connection Profile with a Local Windows Account credential using CyberArk password
storage to target multiple hosts, the local credential on each host needs to have the exact same
username and password combination.

![Connection view with CyberArk credentials](/images/accessanalyzer/11.6/admin/settings/connection/usercredentials.webp)

The Connection view displays `CyberArk` in the Source column of the User Credentials list for the
selected Connection Profile.

### Active Directory Account

Match the User Credentials window settings in Enterprise Auditor with the privilege account
properties in CyberArk. These values are case-sensitive, and must be an exact match.

![User Credentials window for Active Directory Account](/images/accessanalyzer/11.6/admin/settings/connection/usercredentialsad.webp)

The following table shows the values from your CyberArk configuration to populate in the User
Credentials window:

| Enterprise Auditor | CyberArk Property | CyberArk Description                   | Example Value     |
| ------------------ | ----------------- | -------------------------------------- | ----------------- |
| Domain             | Address           | Domain address                         | ExampleDomain.com |
| User name          | Username          | Privilege account                      | ExampleUser       |
| Safe               | Safe              | Vault managing the privileged accounts | Test              |
| Folder             | Folder            | Folder within Safe                     | Root              |

### Local Windows Account

Match the User Credentials window settings in Enterprise Auditor with the privilege account
properties in CyberArk. These values are case-sensitive, and must be an exact match. The Enterprise
Auditor Domain value is `<HOST>` and the CyberArk Address property value is the server address.

![User Credentials window for Local Windows Account](/images/accessanalyzer/11.6/admin/settings/connection/usercredentialslocal.webp)

The following table shows the values from your CyberArk configuration to populate in the User
Credentials window:

| Enterprise Auditor | CyberArk Property | CyberArk Description                   | Example Value |
| ------------------ | ----------------- | -------------------------------------- | ------------- |
| User name          | Username          | Privilege account                      | ExampleUser2  |
| Safe               | Safe              | Vault managing the privileged accounts | Test          |
| Folder             | Folder            | Folder within Safe                     | Root          |

:::info
Only use one Local Windows Account credential with CyberArk password storage in a
Connection Profile. As part of the Enterprise Auditor to CyberArk integration, the Enterprise
Auditor stops the job immediately if the query from Enterprise Auditor to CyberArk for the
credential fails. Therefore, Enterprise Auditor wouldn't query a second credential within the
Connection Profile.

:::
