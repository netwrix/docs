---
title: "Directory Manager Management Shell Overview and Access"
description: "Learn what Directory Manager Management Shell does, then connect to an identity store and set up remote access to run its PowerShell cmdlets."
keywords:
  - Directory Manager Management Shell
  - PowerShell Core
  - enable-psremoting
  - remote access
  - identity store connection
sidebar_position: 100
---

# Directory Manager Management Shell Overview and Access

Directory Manager Management Shell is a command-line interface for managing objects like users,
contacts, mailboxes, groups, smart groups, and dynasties, and for performing other administrative
tasks in Active Directory and Microsoft Entra ID-based identity stores.

Built with PowerShell Core technology, Directory Manager Management Shell lets you perform many of
the tasks you can perform with Directory Manager, as well as tasks that the console doesn't support.

This documentation is a reference for the Directory Manager PowerShell commands. It provides detail
on their function, syntax, and parameters, and gives ready-to-use examples that you can modify and
test in your own environment.

The documentation is intended for advanced users familiar with the use of the Windows Command prompt
and PowerShell Core.

## Identity Store-based Model

Directory Manager 11.0 has an extensible identity store-based model. It supports the following data
stores for creating an identity store:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

:::note
The cmdlets covered in this section are for Active Directory and Microsoft Entra ID-based
identity stores.
:::

## Access Directory Manager Management Shell

Before using Directory Manager Management Shell, you must connect it to an identity store.

To access Management Shell:

1. On the Windows Start menu, search for **GroupID Management Shell 11.0**. Click it to launch
   Directory Manager Management Shell 11.0.
2. On the Netwrix GroupID Authenticate page, select an identity store to connect to.

    ![Authenticate page with the identity store selection list](/images/directorymanager/11.0/managementshell/login.webp)

    :::note
    If your required identity store isn't listed, contact the Directory Manager administrator.
    :::

3. In the **Username** and **Password** boxes, provide the user name and password of your identity
   store account and click **Sign In**.

    ![Authenticate page with the Username and Password boxes and the Sign In button](/images/directorymanager/11.0/managementshell/login-2.webp)

    :::note
    Click the **Edit** icon if you want to select another identity store to connect to.
    :::

    The Management Shell window appears as follows:

    ![Directory Manager Management Shell 11.0 window showing the connected identity store](/images/directorymanager/11.0/managementshell/shell.webp)

    It displays information about the connected identity store.

You can now run Directory Manager Management Shell cmdlets.

## Connect Directory Manager Management Shell Remotely

To enable remoting on a Directory Manager machine, the remote machine must have one of the following
operating systems:

- Windows Server 2016 or 2019 or 2022
- Windows Server Nano (1809 or higher)
- Windows 11
- Windows 10 1607+

The Windows network location of that machine must be Domain or Private ("Home" or "Work"). If the
network location is Public, Directory Manager Management Shell can't create the required firewall
exception for WS-Management Communication.

The Windows Management Shell remoting features are supported by the WS-Management protocol and the
Windows Remote Management (WinRM) service that implements WS-Management in Windows.

Also ensure the following is available at the remote machine:

- Windows PowerShell 7.3.6
- Windows Remote Management 2.0

To enable remoting on a Directory Manager machine:

1. Click **Start > Windows PowerShell**.

    Right-click Windows PowerShell and select **Run as administrator**.

2. At the command prompt, type:

    ```
       enable-psremoting
    ```

    ![PowerShell window running the enable-psremoting command](/images/directorymanager/11.0/managementshell/powershellwindow.webp)

:::note
By default, on Windows Server 2016, Windows PowerShell remoting is enabled. Use this command
to re-enable remoting on Windows Server 2016 if it becomes disabled.
:::

You have to run this command only once on each computer that receives commands. You don't have to
run it on computers that only send commands. Because the configuration starts listeners, run it only
where it's needed.

To verify that remoting is configured correctly, run a test command:

```
new-PSSession –ComputerName <computer name>
```

This command creates a remote session on the local computer and returns an object that represents
the session. The output should look as shown in the following snapshot:

![Output of the new-PSSession command showing the remote session object](/images/directorymanager/11.0/managementshell/pssessioncommand.webp)

### Access Directory Manager Management Shell Remotely

Sign in to the machine through which you want to remotely access the Directory Manager Management
Shell and perform the following steps:

1. Right-click **Start > PowerShell 7.3.6** using the **Run as Administrator** command to open it
   with Administrator privileges.
2. At the prompt, enter the following script. It displays the new session created for the remote
   machine.

    ```
       $username = "domain\username"
       $pass = ConvertTo-SecureString "user password" -AsPlainText -Force
       $Cred = New-Object System.Management.Automation.PSCredential ($username, $pass)
       $s = New-PSSession -ComputerName "machine name" -Credential $Cred -ConfigurationName PowerShell.7
       Invoke-Command -Session $s -ScriptBlock {$srcu = [reflection.assembly]::LoadFrom('C:\Program Files\PowerShell\7\System.Windows.Forms.dll'); $OnAssemblyResolve = [System.ResolveEventHandler] { param($sender, $e) if ($e.Name -like "System.Windows.Forms, Version=*") { return $srcu }return $null;};[System.AppDomain]::CurrentDomain.add_AssemblyResolve($OnAssemblyResolve);$reg=Get-ItemProperty -Path HKLM:SOFTWARE\Microsoft\PowerShell\1\PowerShellSnapIns\Imanami.Groups.Management.PowerShell.Admin11; $appbase=$reg.ApplicationBase;Import-Module -Name $appbase\directorymanagerManagementShell\bin\Imanami.directorymanager.Management.dll;Set-ModulePath -ModulePath $appbase\GroupIDManagementShell\bin}
       Import-PSSession -Session $s -Type cmdlet -AllowClobber
       Connect-IdentityStore -mode "2" -IdentityStoreID "identity store id" -Credential $Cred
    ```

    The following line of the preceding script connects the current user to the identity store
    (having ID 1).

    ```
    Connect-IdentityStore -mode "2" -IdentityStoreID "1" -Credential $Cred
    ```

    To get the identity store ID from the Directory Manager SQL database in which the desired
    identity store exists:

    1. Sign in to the SQL Server (having the Directory Manager database) with an account that has
       read permissions.
    2. View the top 100 rows of the table "Svc.Identitystore". See the following snapshot for
       details:

        ![Svc.Identitystore table rows in the Directory Manager SQL database](/images/directorymanager/11.0/managementshell/directorymanagerdatabase.webp)

After the script has run, a remote session is created. You can now run all Directory Manager
cmdlets through PowerShell 7 without signing in to the Directory Manager server.

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
