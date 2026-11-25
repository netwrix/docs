---
title: "Install and Configure Directory Manager Credential Provider"
description: "Install Directory Manager Credential Provider, configure it with CPSettings.xml, the registry, or Group Policy, and deploy it with GPO or Intune."
keywords:
  - Credential Provider installation
  - CPSettings.xml
  - Group Policy deployment
  - Microsoft Intune deployment
  - credential provider filtering
  - Windows sign-in screen
sidebar_position: 1
---

# Install and Configure Directory Manager Credential Provider

## Table of contents

1. [Introduction](#introduction)
2. [Glossary](#glossary)
3. [First-time setup guide](#first-time-setup-guide)
4. [Configuration methods](#configuration-methods)
5. [Configuration reference](#configuration-reference)
6. [Common deployment scenarios](#common-deployment-scenarios)
7. [Troubleshooting and FAQ](#troubleshooting-and-faq)
8. [Security best practices](#security-best-practices)
9. [Rollback instructions](#rollback-instructions) (includes the upgrade procedure)
10. [Support](#support)

## Introduction

The Directory Manager Credential Provider, formerly known as Netwrix GroupID Credential Provider, is a Windows Credential Provider. It extends the Windows login screen with self-service password reset and account unlock. Use it to reset your password or unlock your account from the Windows login screen without administrator assistance.

### What this page covers

- Step-by-step installation and configuration for first-time users
- The upgrade procedure (uninstall the old version, install the new version)
- A configuration reference for all available settings
- Common scenarios with example configurations
- A troubleshooting guide for common issues
- Security considerations and best practices

### Prerequisites

- **Windows 10 or Windows 11** (64-bit)
- **Administrator access** to the target machine
- **Visual C++ 2022 Redistributable** (x64), included in the installer
- **Network access** to your password reset portal (HTTPS recommended)
- **Minimum 500 MB** free disk space for installation

### Upgrade policy

**Important:** This product doesn't support in-place upgrades. To upgrade to a newer version:

1. Uninstall the current version. See [Rollback Instructions](#rollback-instructions).
2. Restart the computer.
3. Install the new version. See the [First-Time Setup Guide](#first-time-setup-guide).
4. Apply your configuration settings.

Uninstalling preserves your configuration settings in CPSettings.xml or Group Policy. You can reuse them with the new version.

## Glossary

These terms help you configure the credential provider:

| Term | Definition |
|------|------------|
| **Credential Provider** | A Windows component that handles user authentication at the login screen. Windows supports multiple credential providers simultaneously (password, PIN, fingerprint, and so on). |
| **CLSID** | Class Identifier. A unique GUID (Globally Unique Identifier) that identifies a COM class in Windows. The credential provider uses `{c8765b62-7058-4d7f-9421-11a75d623206}` as its identifier. |
| **CPSettings.xml** | Configuration file that contains all settings for the credential provider. It is in the installation directory by default. |
| **CEF** | Chromium Embedded Framework. An open-source framework that embeds a Chromium-based web browser in the credential provider to render password reset web pages. |
| **PLAP** | Pre-Logon Access Provider. A credential provider that appears before the user selects a logon option, typically used for VPN connections before login. |
| **GPO** | Group Policy Object. A Windows feature for centralized management of settings across multiple computers in an Active Directory environment. |
| **Tile** | The visual element on the Windows login screen that represents a credential provider or user account. |
| **Filter** | A mechanism that controls which other credential providers appear on the login screen when the Directory Manager credential provider is active. |
| **Registry** | Windows database that stores system and application configuration settings. |
| **MSI** | Microsoft Installer package. The installation file format for Windows applications. |

### Common CLSIDs referenced in filters

You can filter these built-in Windows credential provider CLSIDs to show or hide them:

- `{60b78e88-ead8-445c-9cfd-0b87f74ea6cd}`: Password Credential Provider (standard Windows password login)
- `{2135F72A-90B5-4ED3-A7F1-8BB705AC276A}`: Picture Password Provider
- `{8AF662BF-65A0-4D0A-A540-A338A999D36F}`: Fingerprint Provider
- `{BEC09223-B018-416D-A0AC-523971B639F5}`: Windows Hello Face Provider
- `{D6886603-9D2F-4EB2-B667-1971041FA96B}`: PIN Provider

**Why these CLSIDs matter**: The FilterLogon and FilterUnlock settings use these CLSIDs to control which credential providers appear next to the Directory Manager provider. This simplifies the login experience for users.

## First-time setup guide

This section walks you through installing and configuring the Directory Manager Credential Provider for the first time.

### Quick start checklist

**Essential steps to install and configure:**

1. Install the MSI package (PasswordCenterClientSetup64.msi).
2. Configure password reset URLs in CPSettings.xml.
3. Restart the machine.
4. Verify that the credential provider appears on the login screen.
5. Test password reset functionality.

**Time Required**: Approximately 15-20 minutes

### Install manually

Use this method for single computers or small deployments that don't need centralized management.

#### Install steps

1. **Download the Installer**
   - Get `Netwrix Directory Manager Credential Provider` from your Netwrix Product Library or the link your Account Manager shared.
   - Verify that Netwrix digitally signed the file.

2. **Run the Installer**
   - Go to the folder where you copied the MSI package.
   - Right-click the MSI file and select **Run as administrator**.

3. **Installation Complete**
   - The installer copies all necessary files.
   - It registers the credential provider with Windows.
   - It installs Visual C++ 2022 Redistributable if it isn't already present.
   - **Important**: A system reboot is required to activate the credential provider.

4. **Reboot the System**
   - The installer prompts for a reboot.
   - Save all work and restart the computer.
   - After the reboot, the credential provider is active.

**Default Installation Location**:

```
C:\Program Files\Imanami\Password Center Client (x64)\
```

**Installed Files**:

- `Imanami.PasswordCenter.Credential64.dll`: Core credential provider
- `GroupIDBrowser.exe`: Browser launcher
- `WebBrowser.exe`: CEF-based browser
- `CPSettings.xml`: Configuration file (see [Locate and edit CPSettings.xml](#locate-and-edit-cpsettingsxml))
- Additional CEF runtime files and resources

#### Verify the installation

After the reboot, the Windows logon screen shows the credential provider:

![Windows sign-in screen showing the Netwrix logo, title text, and the Forgot Password and Unlock Account links](/images/directorymanager/11.1/portal/user/manage/windows_screen.webp)

The logon screen shows:

- **Netwrix logo** (or a custom logo if configured)
- **Title text** under the logo (customizable with the CPTitle setting)
- **"Forgot Password?"** link (default text, customizable)
- **"Unlock Account"** link (default text, customizable)

These links open the URLs configured in the `CPSettings.xml` file.

#### Quick configuration of CPSettings.xml

The installer creates the `CPSettings.xml` file with default values. Before first use, customize these key settings.

**Location**: `C:\Program Files\Imanami\Password Center Client (x64)\CPSettings.xml`

**Essential Settings to Configure**:

Open `CPSettings.xml` in a text editor as administrator and change these values:

1. **Forgot Password Link Text**:

   ```xml
   <ForgotPasswordText value="Forgot Password?" />
   ```

   Set the text that appears on the Windows logon screen for the password reset option.

2. **Unlock Account Link Text**:

   ```xml
   <UnlockAccountText value="Unlock Account" />
   ```

   Set the text that appears on the Windows logon screen for the unlock option.

3. **Password Reset URL**:

   ```xml
   <ResetMyPasswordUrl value="https://MachineName:port/Portalname" />
   ```

   Set the URL where users go to reset their password:

   - **For version 10**: `https://MachineName:port/portalname`
   - **For version 11**: `https://MachineName:port/portalname/Home/PasswordReset`

4. **Account Unlock URL**:

   ```xml
   <UnlockMyAccountUrl value="https://MachineName:port/Portalname" />
   ```

   Set the URL where users go to unlock their account:

   - **For version 10**: `https://MachineName:port/Portalname`
   - **For version 11**: `https://MachineName:port/portalname/Home/UnlockAccount`

5. **Credential Provider Title**:

   ```xml
   <CPTitle value="Log on to: Netwrix GroupID" />
   ```

   This text appears as the title under the Netwrix logo on the Windows logon screen.

**Important**: After you change `CPSettings.xml`, restart the computer or lock and unlock the session twice for the changes to take effect.

For all configuration options, see [Configure Required Settings](#configure-required-settings).

### Deploy with Group Policy Software Installation

For organizations that manage multiple computers in an Active Directory environment, Group Policy Software Installation provides centralized management and automated deployment.

**Prerequisites**:

- Active Directory domain environment
- Domain Administrator or delegated GPO management rights
- Network share that all target computers can access
- MSI package (PasswordCenterClientSetup64.msi)

**Deployment Steps**:

#### Prepare the installation package

1. **Create Network Share**:
   - Create a shared folder that all computers can access. For example, `\\fileserver\software\CredentialProvider\`.
   - Set these share permissions:
     - Domain Computers: Read
     - Authenticated Users: Read
     - Administrators: Full Control

2. **Copy MSI to Network Share**:

   ```
   \\fileserver\software\CredentialProvider\PasswordCenterClientSetup64.msi
   ```

3. **Set NTFS Permissions on Share**:
   - Right-click the shared folder and select **Properties** > **Security**.
   - Add "Domain Computers" with Read permissions.
   - Add "Authenticated Users" with Read permissions.
   - These permissions let computers access the MSI during installation.

4. **Copy CPSettings.xml to Network Share** (Optional):
   - Copy the customized `CPSettings.xml` file to the same network share.
   - The MSI references this file during installation.
   - Share this file with Read permissions for Domain Computers.

#### Create an MSI transform file with Orca (optional)

To customize the MSI installation, such as pre-configuring the SOURCEPATH for CPSettings.xml, create a Transform (.mst) file with Orca. This advanced method suits organizations that want to embed configuration settings in the deployment package.

**When to Use This Method**:

- You want to pre-configure the CPSettings.xml source path.
- You need to change MSI properties before deployment.
- You want a single, reusable deployment package with custom settings.

**Prerequisites**:

- Orca MSI editor tool (included in the Windows SDK)
- MSI package (PasswordCenterClientSetup64.msi)

**Steps to Create MST Transform File**:

1. **Install Orca**:
   - Browse to the folder that contains the Credential Provider package.
   - Open the `MST Guide` folder (if included with your package).
   - Run `Orca-x86_en-us.msi` to install Orca.
   - The Orca console opens after installation.

   ![Orca console open after installation](/images/directorymanager/11.1/portal/user/manage/orca_console.webp)

2. **Open MSI in Orca**:
   - Start Orca.
   - Click **File** > **Open**.
   - Browse to the Credential Provider folder.
   - Select and open `PasswordCenterClientSetup64.msi`.

   ![Orca with PasswordCenterClientSetup64.msi loaded](/images/directorymanager/11.1/portal/user/manage/cp_loaded.webp)

3. **Create New Transform**:
   - From the menu, select **Transform** > **New Transform**.
   - This creates a new transform that stores your customizations.

   ![Orca Transform menu with the New Transform option](/images/directorymanager/11.1/portal/user/manage/new_transform.webp)

4. **Modify Properties**:
   - In the left pane, click **Property**.
   - The main window lists the MSI properties.
   - Find the **SOURCEPATH** property in the list.

   ![Orca Property table listing MSI properties, including SOURCEPATH](/images/directorymanager/11.1/portal/user/manage/property.webp)

5. **Configure Source Path**:
   - Create a shared folder for configuration files. For example, `\\fileserver\software\CredentialProvider\Config\`.
   - Copy `CPSettings.xml` to this folder.
   - Share the folder with the Everyone group with Read permission.
   - In Orca, double-click the **SOURCEPATH** property value.
   - Enter the UNC path to the shared folder: `\\fileserver\software\CredentialProvider\Config\`.
   - Click **OK**.

   ![Orca SOURCEPATH property value set to the UNC path of the configuration folder](/images/directorymanager/11.1/portal/user/manage/property_path.webp)

6. **Generate Transform File**:
   - From the menu, select **Transform** > **Generate Transform**.

   ![Orca Transform menu with the Generate Transform option](/images/directorymanager/11.1/portal/user/manage/generate_transform.webp)

   - Save the transform file with a descriptive name, for example, `CustomConfig.mst`.
   - Save it to the same shared folder as the MSI package:

     ```
     \\fileserver\software\CredentialProvider\CustomConfig.mst
     ```

7. **Close Orca**:
   - Close the Orca application.
   - The transform file is ready for GPO deployment.

**Files Required in Network Share After This Step**:

```
\\fileserver\software\CredentialProvider\
├── PasswordCenterClientSetup64.msi
├── CustomConfig.mst                  (your generated transform file)
└── Config\
    └── CPSettings.xml                (configuration file)
```

**Important Notes**:

- The .mst file must be in the same network share as the MSI.
- The SOURCEPATH must point to a valid network location that Domain Computers can access.
- Group Policy applies transform files during GPO deployment (see [Configure installation options (optional)](#configure-installation-options-optional)).

#### Create the Group Policy Object

1. **Open Group Policy Management Console (GPMC)**:
   - On a Domain Controller or management workstation, run `gpmc.msc`.
   - Or select **Start** > **Administrative Tools** > **Group Policy Management**.

   ![Group Policy Management console showing the domain and its GPOs](/images/directorymanager/11.1/portal/user/manage/gp_policy.webp)

   :::note
   Group Policy Management console is available if the Group Policy Management feature has been installed.
   :::

2. **Create New GPO**:
   - Go to your domain or the appropriate Organizational Unit (OU).
   - Right-click it and select **Create a GPO in this domain, and Link it here**.

   ![Context menu with the Create a GPO in this domain, and Link it here option](/images/directorymanager/11.1/portal/user/manage/new_gpo.webp)

   - Enter the name "Deploy Netwrix Credential Provider".
   - Click **OK**.

   **Or**

   Right-click **Default Domain Policy** and select **Edit**:

   ![Context menu on Default Domain Policy with the Edit option](/images/directorymanager/11.1/portal/user/manage/edit_gpo.webp)

3. **Link GPO to Target OUs** (if not already linked):
   - Right-click the GPO.
   - Select **Link an Existing GPO**.
   - Choose the organizational units that contain the target computers. Typical targets are the Workstations OU and All Computers.

#### Configure the software installation policy

1. **Edit the GPO**:
   - Right-click the new GPO.
   - Select **Edit**.
   - Group Policy Management Editor opens.

2. **Navigate to Software Installation**:
   - Expand `Computer Configuration`.
   - Expand `Policies`.
   - Expand `Software Settings`.
   - Click `Software installation`.

   ![Software installation node in the Group Policy Management Editor with the New Package option](/images/directorymanager/11.1/portal/user/manage/software_installation.webp)

   :::note
   This documentation describes steps for editing the default policy.
   :::

3. **Add New Package**:
   - Right-click in the right pane and select **New** > **Package**.
   - Go to the network share: `\\fileserver\software\CredentialProvider\`.
   - Select `PasswordCenterClientSetup64.msi`.
   - **Important**: Use the UNC path, not a mapped drive letter.

   ![Deploy Software dialog with the Assigned and Advanced deployment options](/images/directorymanager/11.1/portal/user/manage/deploy_cp.webp)

4. **Choose Deployment Method**:
   - In the "Deploy Software" dialog, select **"Assigned"** (recommended).
     - The software installs automatically during computer startup.
     - No user interaction is required.
     - Installation happens before user login.
   - Alternatively, select **"Advanced"** for custom options, including MST transforms.
   - Click **OK**.

#### Configure installation options (optional)

If you selected "Advanced" in step 4 of [Configure the software installation policy](#configure-the-software-installation-policy), configure these additional options:

1. **Deployment Tab**:
   - Select Auto-install this application by file extension activation.
   - Select Uninstall this application when it falls out of the scope of management.
   - Set the deployment type to Assigned.
   - Set the installation user interface options to Basic (default).

2. **Modifications Tab** (For MST Transform Files):

   If you created an MST transform file with Orca (see [Create an MSI transform file with Orca (optional)](#create-an-msi-transform-file-with-orca-optional)), apply it here:

   - Click the **Modifications** tab.

   ![Package properties dialog with the Modifications tab selected](/images/directorymanager/11.1/portal/user/manage/modification_tab.webp)

   - Click **Add**.
   - Browse to the network share where you saved the .mst file.
   - Select your transform file, for example, `CustomConfig.mst`.
   - Click **Open**.
   - The transform file appears in the modifications list.
   - Click **OK**.

   **Important**:

   - The .mst file must be accessible through the same UNC path as the MSI.
   - Ensure that Domain Computers have Read access to the .mst file.
   - The installation applies the transform automatically.

   **Verification**:

   - After you add the modification, the .mst file appears in the Modifications tab.
   - You can add multiple transforms. Group Policy processes them in order from top to bottom.

3. **Upgrades Tab**:
   - **Note:** This tab is for MSI supersedence configuration only, NOT for in-place upgrades.
   - Configure it only if this MSI package should replace or uninstall a different product.
   - Leave it empty for standard deployments. The product doesn't support version upgrades.

4. **Security Tab**:
   - Verify that "Authenticated Users" has "Read" permission.
   - Add "Domain Computers" with "Read" permission if it isn't present.

5. **Click "OK"** to save the settings.

#### Configure registry settings with GPO

1. **In the same GPO**, configure the credential provider settings:
   - Go to `Computer Configuration` > `Preferences` > `Windows Settings` > `Registry`.

2. **Add Registry Items**:
   - Right-click and select **New** > **Registry Item**.
   - Configure each setting.

   **Example Registry Items**:

   | Action | Hive | Key Path | Value Name | Value Type | Value Data |
   |--------|------|----------|------------|------------|------------|
   | Update | HKEY_LOCAL_MACHINE | SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings | ResetMyPasswordUrl | REG_SZ | https://portal.company.com/reset |
   | Update | HKEY_LOCAL_MACHINE | SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings | UnlockMyAccountUrl | REG_SZ | https://portal.company.com/unlock |
   | Update | HKEY_LOCAL_MACHINE | SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings | WindowTitle | REG_SZ | Company Password Reset |
   | Update | HKEY_LOCAL_MACHINE | SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings | CPTitle | REG_SZ | Company Self-Service |
   | Update | HKEY_LOCAL_MACHINE | SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings | Log | REG_SZ | false |
   | Update | HKEY_LOCAL_MACHINE | SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings | DisableAutoFilter | REG_SZ | false |

3. **Configure Item-Level Targeting** (Optional):
   - Use this to apply settings only to specific computer groups.
   - Right-click the registry item and select **Properties** > **Common** tab.
   - Select **Item-level targeting**, and then click **Targeting**.
   - Add conditions, for example, Computer in Group or Operating System.

#### Test in a pilot group

**Before full deployment, test with a small group**:

1. **Create Test OU**:
   - Create a "Pilot Computers" OU.
   - Move 2-3 test computers to this OU.

2. **Link GPO to Test OU**:
   - Link the "Deploy Netwrix Credential Provider" GPO to the Pilot OU.
   - Ensure that no conflicting GPOs apply.

3. **Force Policy Update on Test Computer**:

   ```cmd
   gpupdate /force
   shutdown /r /t 0
   ```

4. **Verify Installation**:
   - After the reboot, check the installation:

     ```cmd
     wmic product where "name like '%Credential%'" get name,version
     ```

   - Verify that the credential provider appears on the login screen.
   - Test password reset functionality.

5. **Review Event Logs**:
   - Check for installation errors.
   - Open **Event Viewer** > **Applications and Services Logs** > **Microsoft** > **Windows** > **GroupPolicy**.

#### Deploy to production

1. **Link GPO to Production OUs**:
   - After successful pilot testing, link the GPO to the main Workstations or All Computers OU.

2. **Staggered Rollout** (Recommended):
   - Week 1: Deploy to 10% of computers.
   - Week 2: Deploy to 50% of computers.
   - Week 3: Deploy to all remaining computers.
   - Use Security Filtering or WMI filters to control the deployment scope.

3. **Monitor Deployment**:
   - Check Group Policy Results on sample computers:

     ```cmd
     gpresult /h gpreport.html
     ```

   - Monitor Windows Event Logs for installation issues.
   - Collect feedback from the help desk.

#### Verify the deployment

**Check GPO Application**:

```powershell
Get-ADComputer -Filter * -SearchBase "OU=Workstations,DC=company,DC=com" | ForEach-Object {
    $computer = $_.Name
    Write-Host "Checking $computer..."
    Invoke-Command -ComputerName $computer -ScriptBlock {
        Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*" |
        Where-Object {$_.DisplayName -like "*Credential*"}
    } -ErrorAction SilentlyContinue
}
```

**Check Installation Status**:

1. Open **Active Directory Users and Computers** > **Computers**.
2. Right-click the computer and select **Properties** > **Software**.
3. Verify that the credential provider is listed.

**Client Machine Deployment**:

After you configure and link the GPO, client machines in the scope of the policy receive and install the credential provider automatically:

1. **Automatic Installation Trigger**:
   - Installation occurs automatically at the next computer startup.
   - The modified domain policy applies to all computers in the linked OU.
   - No user intervention is required on client machines.

2. **Force Installation Immediately** (Optional):

   Administrators can force the policy update and installation on client machines without waiting for the next scheduled refresh:

   ```cmd
   gpupdate /force
   ```

   Then restart the computer to complete the installation:

   ```cmd
   shutdown /r /t 0
   ```

3. **Verify on Client Machines**:

   After the restart, the Windows logon screen shows the credential provider with:

   - Netwrix logo (or a custom logo if configured)
   - "Forgot Password?" link
   - "Unlock Account" link
   - Custom title text under the logo

   ![Windows sign-in screen with the credential provider links and custom title text](/images/directorymanager/11.1/portal/user/manage/windows_screen.webp)

   The credential provider is now active on client workstations.

#### Troubleshoot GPO deployment

**Issue: Software Not Installing**

1. **Verify GPO Link**:
   - Check that the GPO is linked to the correct OU.
   - Verify that the link isn't disabled.
   - Check that the GPO status is "Enabled".

2. **Check Computer Account**:
   - Verify that the computer is in the target OU.
   - Check that "Authenticated Users" has Read permission on the GPO.

3. **Verify Network Share Access**:

   ```cmd
   net use \\fileserver\software\CredentialProvider
   ```

   - The command should succeed without errors.
   - Check from a domain computer account context.

4. **Check Event Logs on Client**:
   - Open **Event Viewer** > **Application Log**.
   - Look for MSI Installer events (Event ID 1033, 1034, 11707, 11708).
   - Open **Windows Logs** > **System** and look for Group Policy errors.

5. **Force Policy Refresh**:

   ```cmd
   gpupdate /force /boot
   ```

**Issue: Installation Fails**

1. **Check MSI Package**:
   - Verify that the MSI isn't corrupted.
   - Check that the digital signature is valid.
   - Test a manual installation on one computer.

2. **Review MSI Log**:
   - Enable MSI logging through GPO or manually.
   - Check `C:\Windows\Temp\MSI*.log`.

3. **Prerequisites Missing**:
   - Verify that Visual C++ 2022 Redistributable installs correctly.
   - You might need to deploy the VC++ Redistributable separately first.

### Deploy with Microsoft Intune

For organizations that use Microsoft Intune and Microsoft Entra ID, deploy the credential provider to cloud-managed or hybrid-joined devices.

**Prerequisites**:

- Microsoft Intune subscription
- Global Administrator or Intune Administrator role
- Windows 10/11 devices enrolled in Intune
- Devices that are Microsoft Entra joined or hybrid joined
- MSI package (PasswordCenterClientSetup64.msi)

**Deployment Steps**:

#### Prepare the IntuneWin package

1. **Convert MSI to IntuneWin Format**:

   Microsoft Intune requires applications in `.intunewin` format.

   **Download Microsoft Win32 Content Prep Tool**:

   - Download it from https://github.com/Microsoft/Microsoft-Win32-Content-Prep-Tool.
   - Extract `IntuneWinAppUtil.exe`.

2. **Create Source Folder**:

   ```
   C:\IntuneApps\CredentialProvider\
   ```

   - Copy `PasswordCenterClientSetup64.msi` to this folder.

3. **Run Content Prep Tool**:

   ```cmd
   cd C:\IntuneApps
   IntuneWinAppUtil.exe -c C:\IntuneApps\CredentialProvider -s PasswordCenterClientSetup64.msi -o C:\IntuneApps\Output
   ```

   Parameters:

   - `-c`: Source folder that contains the MSI
   - `-s`: Source setup file (MSI filename)
   - `-o`: Output folder for the .intunewin file

4. **Verify Output**:
   - The output file is `C:\IntuneApps\Output\PasswordCenterClientSetup64.intunewin`.
   - This file is ready to upload to Intune.

#### Upload the app to Microsoft Intune

1. **Sign in to Microsoft Intune Admin Center**:
   - Go to https://intune.microsoft.com.
   - Sign in with Global Admin or Intune Admin credentials.

2. **Navigate to Apps**:
   - Click **Apps** in the left navigation.
   - Click **All apps**.
   - Click **+ Add** on the top toolbar.

3. **Select App Type**:
   - Set the app type to **Windows app (Win32)**.
   - Click **Select**.

#### Configure the app information

**Step 1: App Information**

1. **Select App Package File**:
   - Click **Select app package file**.
   - Browse to and select `PasswordCenterClientSetup64.intunewin`.
   - Click **OK**.

2. **Fill in Application Details**:
   - **Name**: `Netwrix GroupID Credential Provider`
   - **Description**:

     ```
     Windows Credential Provider for self-service password reset and account unlock.
     Integrates with Netwrix GroupID Password Center portal.
     ```

   - **Publisher**: `Netwrix`
   - **App Version**: `3.1.0.0`
   - **Category**: Select **Computer Management** (optional).
   - **Show this as a featured app in the Company Portal**: No (not applicable for a device-targeted app).
   - **Information URL**: `https://www.netwrix.com` (optional)
   - **Privacy URL**: `https://www.netwrix.com/privacy.html` (optional)
   - **Developer**: `Netwrix`
   - **Owner**: `IT Department` (optional)
   - **Notes**: (optional)
   - **Logo**: Upload a company or Netwrix logo (optional, 512x512 PNG recommended).

3. **Click** **Next**.

**Step 2: Program**

1. **Install Command**:

   ```cmd
   msiexec /i "PasswordCenterClientSetup64.msi" /quiet /norestart
   ```

2. **Uninstall Command**:

   ```cmd
   msiexec /x {4C3F32FA-8AAE-41B7-806E-195782B986D5} /quiet /norestart
   ```

3. **Install Behavior**:
   - Select **System**.
   - This runs the installation in the SYSTEM context before user login.

4. **Device Restart Behavior**:
   - Select **Determine behavior based on return codes**.
   - Or select **Force a restart** if you want a mandatory reboot.
   - Use return codes for flexibility (recommended).

5. **Click** **Next**.

**Step 3: Requirements**

Define which devices can install this application:

1. **Operating System Architecture**:
   - Select **64-bit**.
   - Clear **32-bit**. The credential provider is x64 only.

2. **Minimum Operating System**:
   - Select **Windows 10 20H2** or **Windows 10 21H2**.
   - Or select **Windows 11 22H2** if you deploy only to Windows 11.

3. **Disk Space Required (MB)**:
   - Enter `500` MB (approximate size including CEF components).

4. **Physical Memory Required (MB)**:
   - Leave it blank, or enter `4096` (4 GB) for modern systems.

5. **Number of Logical Processors Required**:
   - Leave it blank (not required).

6. **CPU Speed Required (MHz)**:
   - Leave it blank (not required).

7. **Click** **Next**.

**Step 4: Detection Rules**

Configure how Intune detects whether the application is already installed.

For **Choose Detection Rule Format**, select **Manually configure detection rules**.

1. **Click** **+ Add**.

2. **Configure Detection Rule**:
   - **Rule type**: **Registry**
   - **Key path**: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{4C3F32FA-8AAE-41B7-806E-195782B986D5}`
   - **Value name**: `DisplayVersion`
   - **Detection method**: **String comparison**
   - **Operator**: **Equals**
   - **Value**: `3.1.0.0`
   - **Associated with a 32-bit app on 64-bit clients**: No

3. **Alternative Detection Rule** (Registry Key Existence):
   - **Rule type**: **Registry**
   - **Key path**: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Providers\{c8765b62-7058-4d7f-9421-11a75d623206}`
   - **Detection method**: **Key exists**
   - **Associated with a 32-bit app on 64-bit clients**: No

4. **Click** **OK**.

5. **Click** **Next**.

**Step 5: Dependencies**

If your app depends on other applications, for example, Visual C++ Redistributable:

1. **Add Dependencies** (if needed):
   - Click **+ Add**.
   - Search for "Visual C++ 2022 Redistributable".
   - If it isn't present, add the VC++ Redistributable as a separate app first.
   - Select the appropriate dependency.
   - Set the dependency type to **Auto install**.

2. **Or Skip** if the MSI includes the dependencies:
   - The credential provider MSI includes the VC++ Redistributable.
   - Click **Next** without adding dependencies.

**Step 6: Supersedence**

**Note:** Supersedence replaces different products. It can't upgrade versions of this product.

To upgrade this credential provider to a new version:

- Uninstall the old version first.
- Deploy the new version as a fresh installation.
- See [Upgrade Policy](#upgrade-policy) for details.

For a first-time deployment:

1. **Skip this step**: Click **Next** without adding supersedence.

**Step 7: Assignments**

Configure which devices or users receive this application:

1. **Required** (Recommended for device-wide installation):
   - Click **+ Add group** under **Required**.
   - Search for and select device groups:
     - Example: "All Corporate Devices"
     - Example: "Workstations"
     - Or specific OU-synced groups: "Workstations-Finance", "Workstations-HR"
   - Set **Mode** to **Included**.
   - Click **OK**.

2. **Available for Enrolled Devices** (Optional):
   - Use this if you want users to install from Company Portal.
   - This isn't recommended for the credential provider, which should install at the device level.

3. **Exclude Groups** (Optional):
   - Add groups to exclude from installation.
   - Example: "Pilot Excluded", "VIP Devices"

4. **End User Notifications**:
   - Select **Hide all toast notifications**.
   - The credential provider should install silently.

5. **Delivery Optimization Priority**:
   - Select **Not configured** or **Foreground**.

6. **Click** **Next**.

**Step 8: Review + Create**

1. **Review all settings**:
   - Verify the app information.
   - Check the install and uninstall commands.
   - Confirm the detection rules.
   - Verify the assigned groups.

2. **Click** **Create**.

3. **Wait for Upload**:
   - The application uploads to Intune, which can take several minutes.
   - A progress indicator shows the upload status.

#### Configure credential provider settings with Intune

After you deploy the application, configure its settings with Configuration Profiles:

1. **Create Configuration Profile**:
   - Go to **Devices** > **Configuration profiles**.
   - Click **+ Create profile**.
   - Set Platform to **Windows 10 and later**.
   - Set Profile type to **Templates** > **Custom**.
   - Click **Create**.

2. **Basic Information**:
   - Name: `Netwrix Credential Provider Configuration`
   - Description: `Registry settings for Netwrix GroupID Credential Provider`
   - Click **Next**.

3. **Configuration Settings**:
   - Click **+ Add**.
   - Configure OMA-URI settings for each registry value.

   **OMA-URI Settings**:

   | Setting | Configuration |
   |---------|--------------|
   | **Name** | Reset Password URL |
   | **Description** | URL for password reset portal |
   | **OMA-URI** | `./Device/Vendor/MSFT/Policy/Config/ADMX_CredentialProviders/ResetMyPasswordUrl` |
   | **Data type** | String |
   | **Value** | `<enabled/><data id="ResetMyPasswordUrl" value="https://portal.company.com/reset"/>` |

   Alternatively, use the **Registry** OMA-URI format:

   | Setting | Configuration |
   |---------|--------------|
   | **Name** | Reset Password URL |
   | **OMA-URI** | `./Vendor/MSFT/Registry/HKLM/SOFTWARE/Policies/Imanami/GroupID/Version 10.0/PasswordCenterClient/Settings/ResetMyPasswordUrl` |
   | **Data type** | String |
   | **Value** | `https://portal.company.com/reset` |

   Repeat for each setting:

   - `UnlockMyAccountUrl`
   - `WindowTitle`
   - `CPTitle`
   - `DisableAutoFilter`
   - `Log`

4. **Assignments**:
   - Click **Next**.
   - Set **Assign to** to the same groups as the application.
   - Click **Next**.

5. **Review + Create**:
   - Review the settings.
   - Click **Create**.

#### Monitor the Intune deployment

1. **Check Application Status**:
   - Go to **Apps** > **All apps**.
   - Click `Netwrix GroupID Credential Provider`.
   - Click **Device install status**.
   - View the installation progress for each device:
     - Installed
     - In Progress
     - Failed
     - Not Applicable

2. **View Device Details**:
   - Go to **Devices** > **All devices**.
   - Select a device.
   - Click **Managed Apps**.
   - Verify that the credential provider is listed as "Installed".

3. **Check for Errors**:
   - Go to **Tenant administration** > **Intune operational** (Insider preview).
   - Or go to **Devices** > **Monitor** > **App install status**.
   - Filter by application name.
   - Review the error messages for failed installations.

#### Sync devices to apply policy

**Force Immediate Sync from Intune**:

1. Go to **Devices** > **All devices**.
2. Select the target devices.
3. Click **Sync** on the top toolbar.
4. The device checks in with Intune and applies policies.

**Force Sync from Device**:

```cmd
# Run on target Windows device
psexec -s cmd
```

Then:

```cmd
# Force Intune sync
C:\Program Files (x86)\Microsoft Intune Management Extension\Microsoft.Management.Services.IntuneWindowsAgent.exe /sync
```

Or use the Settings app:

1. Go to **Settings** > **Accounts** > **Access work or school**.
2. Click your work account.
3. Click **Info**.
4. Scroll down and click **Sync**.

#### Verify the installation on a client device

1. **Check Installed Applications**:

   ```powershell
   Get-WmiObject -Class Win32_Product | Where-Object {$_.Name -like "*Credential*"}
   ```

2. **Verify Registry Configuration**:

   ```powershell
   Get-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings"
   ```

3. **Check Credential Provider Registration**:

   ```cmd
   reg query "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Providers\{c8765b62-7058-4d7f-9421-11a75d623206}"
   ```

4. **Test on Login Screen**:
   - Lock the device (Win + L).
   - Verify that the credential provider tile appears.
   - Test that the password reset URL opens correctly.

#### Troubleshoot Intune deployment

**Issue: Application Not Deploying**

1. **Check Device Enrollment**:
   - Go to **Devices** > **All devices** and select the device.
   - Verify that **Managed by** shows "Intune".
   - Check the last check-in time. It should be recent.

2. **Verify Group Membership**:
   - Check whether the device is a member of the assigned group.
   - Go to **Groups**, search for the deployment group, and open **Members**.
   - Verify that the target devices are listed.

3. **Check Application Assignment**:
   - Go to **Apps** > **All apps** and select the credential provider app.
   - Open **Properties** > **Assignments**.
   - Verify the **Required** assignment to the correct groups.

4. **Review Intune Logs on Device**:
   - The logs are in `C:\ProgramData\Microsoft\IntuneManagementExtension\Logs\`.
   - Key files:
     - `IntuneManagementExtension.log`
     - `AgentExecutor.log`
   - Search for the credential provider or the MSI filename.

**Issue: Installation Fails**

1. **Check Detection Rule**:
   - Verify that the detection rule is correct.
   - Test the registry key existence manually on the device.
   - Change the detection rule if needed.

2. **Review Return Codes**:
   - Check the Intune app installation status.
   - Common MSI return codes:
     - `0` = Success
     - `1603` = Fatal error during installation
     - `1618` = Another installation is in progress
     - `3010` = Success, reboot required

3. **Test Manual Installation**:
   - Download the MSI to a test device.
   - Run it manually:

     ```cmd
     msiexec /i PasswordCenterClientSetup64.msi /l*v install.log
     ```

   - Review `install.log` for errors.

4. **Check Prerequisites**:
   - Verify that the Windows 10/11 version meets the requirements.
   - Check available disk space (>500 MB).
   - Ensure that the device has internet connectivity.

**Issue: Configuration Not Applied**

1. **Verify Configuration Profile Assignment**:
   - Go to **Devices** > **Configuration profiles**.
   - Select the credential provider configuration.
   - Check that the assignments match the app assignments.

2. **Check Profile Status on Device**:
   - Go to **Devices** > **All devices** and select the device.
   - Click **Device configuration**.
   - Verify that the profile shows "Succeeded".

3. **Force Profile Sync**:
   - From the device, go to **Settings** > **Accounts** > **Access work or school** and click **Sync**.
   - Or use the Intune portal: go to **Devices**, select the device, and click **Sync**.

4. **Verify Registry Values on Device**:

   ```powershell
   Get-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings" | Format-List
   ```

#### Intune deployment best practices

1. **Test with Pilot Group**:
   - Create a "Pilot Devices" group in Microsoft Entra ID.
   - Assign the application to the pilot group first.
   - Test thoroughly before the full rollout.

2. **Staggered Deployment**:
   - Phase 1: Pilot group (10-20 devices)
   - Phase 2: Department group (50-100 devices)
   - Phase 3: Full organization
   - Monitor each phase before you proceed.

3. **Use Dynamic Groups**:
   - Create dynamic device groups based on attributes.
   - For example, use this rule for all Windows 10/11 devices:

     ```
     (device.deviceOSType -eq "Windows") and (device.deviceOSVersion -ge "10.0")
     ```

4. **Monitor Compliance**:
   - Create a compliance policy to check the credential provider installation.
   - Flag non-compliant devices for review.

5. **Document Configuration**:
   - Document portal URLs and settings.
   - Keep configuration profile settings in version control.
   - Maintain a runbook for troubleshooting.

### Locate and edit CPSettings.xml

The `CPSettings.xml` file is the primary configuration file for the credential provider.

**File Location**:

```
C:\Program Files\Imanami\Password Center Client (x64)\CPSettings.xml
```

**Important Notes**:

- The installer creates this file if it exists in the same directory as the installer.
- You need administrator privileges to edit this file.
- Changes take effect after the next login screen refresh or machine restart.
- The file is in XML format. Maintain proper XML syntax when you edit it.

**How to Edit**:

1. Open Notepad as Administrator (right-click it and select **Run as administrator**).
2. Open the CPSettings.xml file from the installation directory.
3. Make your changes (see the configuration in the next section).
4. Save the file.
5. Lock the computer (Win + L) or restart it to see the changes.

### Configure required settings

**Minimum Required Configuration**:

At a minimum, configure these two URLs:

```xml
<?xml version="1.0" standalone="yes" ?>
<CPSettings>
    <!-- REQUIRED: URL for password reset portal -->
    <ResetMyPasswordUrl value="https://your-password-portal.com/reset" />

    <!-- REQUIRED: URL for account unlock portal -->
    <UnlockMyAccountUrl value="https://your-password-portal.com/unlock" />

    <!-- All other settings below are optional and have defaults -->
    <WindowTitle value="Netwrix Directory Manager" />
    <CPTitle value="Netwrix Directory Manager" />
    <ForgetPasswordText value="Forgot my password?" />
    <UnlockAccountText value="Unlock my account" />
    <Log value="false" />
</CPSettings>
```

**Replace the URLs**:

- Replace `https://your-password-portal.com/reset` with your actual password reset portal URL.
- Replace `https://your-password-portal.com/unlock` with your actual account unlock portal URL.
- Use HTTPS for both URLs for security. HTTP is supported but not recommended.

**⚠️ Common Mistake**: Using placeholder URLs like `https://google.com` or `https://localhost`. Use your actual portal URLs instead.

### Verify the installation

After you save the configuration and restart (or lock the screen):

1. **Lock your computer** (press Win + L).

2. **Expected Behavior**:
   - The standard Windows login screen appears.
   - Below or next to your user account, the credential provider tile appears.
   - The tile shows:
     - The custom title you configured (`CPTitle`)
     - Two options:
       - "Forgot my password?" (or your custom text)
       - "Unlock my account" (or your custom text)
     - Your custom logo, if configured

3. **Visual Confirmation**:

   ```
   [Your User Account Tile]

   [Netwrix Directory Manager Tile]
   → Forgot my password?
   → Unlock my account
   ```

4. **Test the Functionality**:
   - Click "Forgot my password?".
   - A browser window opens and shows your password reset portal.
   - The URL matches your `ResetMyPasswordUrl` setting.

### Test password reset (optional but recommended)

1. Click "Forgot my password?" on the login screen.
2. Verify that:
   - A browser window opens.
   - Your password reset portal loads correctly.
   - You can go through the reset process.
   - The SSL certificate is valid (if you use HTTPS).

3. If the portal doesn't load:
   - Check the URLs in CPSettings.xml.
   - Verify network connectivity.
   - Check firewall settings.
   - See the [Troubleshooting](#troubleshooting-and-faq) section.

### Next steps

**Basic setup is complete.** You now have a working credential provider.

**Optional Next Steps**:

- [Configure filtering](#credential-provider-filtering) to control which other login options appear.
- [Customize the appearance](#ui-customization) with logos and custom text.
- [Configure proxy settings](#network-and-proxy-settings) if you are behind a corporate proxy.
- [Deploy through GPO](#deploy-with-group-policy-software-installation) for enterprise environments.
- [Enable logging](#logging-and-debugging) for troubleshooting.

## Configuration methods

You can configure the Directory Manager Credential Provider with three methods. They are listed in order of precedence:

### Group Policy (highest priority)

**Registry Path**:

```
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings
```

**Use When**:

- You manage multiple computers in an Active Directory environment.
- You enforce configuration across an organization.
- You want to prevent local administrators from changing settings.

**Precedence**: Settings configured through Group Policy override all other configuration methods.

**Example GPO Configuration**:

1. Open Group Policy Management Console (GPMC).
2. Create or edit a GPO.
3. Go to **Computer Configuration** > **Preferences** > **Windows Settings** > **Registry**.
4. Add registry values under the Group Policy registry path.

### Local registry (medium priority)

**Registry Path**:

```
HKEY_LOCAL_MACHINE\SOFTWARE\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings
```

**Use When**:

- You configure a single computer.
- You test settings before GPO deployment.
- You manage standalone computers.

**How to Configure**:

1. Open Registry Editor (regedit.exe) as Administrator.
2. Go to the local registry path.
3. Create or change String (REG_SZ) values.
4. Restart or lock the computer to apply the changes.

**Example Registry Values**:

```
ResetMyPasswordUrl (REG_SZ) = "https://portal.company.com/reset"
UnlockMyAccountUrl (REG_SZ) = "https://portal.company.com/unlock"
WindowTitle (REG_SZ) = "Company Password Reset"
Log (REG_SZ) = "true"
```

### CPSettings.xml (lowest priority)

**File Location**:

```
C:\Program Files\Imanami\Password Center Client (x64)\CPSettings.xml
```

**Use When**:

- You do the initial setup and testing.
- You have standalone deployments.
- You provide default values during installation.

**Precedence**: The credential provider uses settings in CPSettings.xml only if the Registry or Group Policy doesn't define them.

**⚠️ Note**: The MSI package installs this file with default values. It's the easiest method for first-time configuration.

### Configuration priority summary

When the credential provider starts, it reads settings in this order:

```
1. Group Policy Registry (Policies key)
   ↓ (if not found)
2. Local Registry (Software key)
   ↓ (if not found)
3. CPSettings.xml file
   ↓ (if not found)
4. Hard-coded defaults in the DLL
```

**💡 Best Practice**:

- Use **CPSettings.xml** for initial setup and testing.
- Use **Local Registry** for single-computer deployments.
- Use **Group Policy** for enterprise-wide deployments.

## Configuration reference

This section describes all available configuration settings.

### Defaults and required settings

| Setting | Required | Default Value | Description |
|---------|----------|---------------|-------------|
| `ResetMyPasswordUrl` | Yes | (none) | URL for password reset portal |
| `UnlockMyAccountUrl` | Yes | (none) | URL for account unlock portal |
| `WindowTitle` | No | "Netwrix Directory Manager" | Browser window title |
| `CPTitle` | No | "Netwrix Directory Manager" | Tile title on login screen |
| `ForgetPasswordText` | No | "Forgot my password?" | Text for reset button |
| `UnlockAccountText` | No | "Unlock my account" | Text for unlock button |
| `Log` | No | "false" | Enable/disable logging |
| `DisableAutoFilter` | No | "false" | Disable automatic filtering |

**⚠️ Important**: You MUST configure both `ResetMyPasswordUrl` and `UnlockMyAccountUrl` for the credential provider to function properly.

### Basic settings

#### ResetMyPasswordUrl

- **Type**: String (URL)
- **Required**: Yes
- **Default**: None (must be configured)
- **Description**: The URL of your password reset web portal
- **Example**: `https://passwordreset.company.com/reset`
- **Notes**:
  - Must be a valid HTTP or HTTPS URL
  - HTTPS strongly recommended for security
  - This URL opens when the user clicks "Forgot my password?"

```xml
<ResetMyPasswordUrl value="https://passwordreset.company.com/reset" />
```

#### UnlockMyAccountUrl

- **Type**: String (URL)
- **Required**: Yes
- **Default**: None (must be configured)
- **Description**: The URL of your account unlock web portal
- **Example**: `https://passwordreset.company.com/unlock`
- **Notes**:
  - Must be a valid HTTP or HTTPS URL
  - HTTPS strongly recommended for security
  - This URL opens when the user clicks "Unlock my account"
  - Can be the same as ResetMyPasswordUrl if your portal handles both functions

```xml
<UnlockMyAccountUrl value="https://passwordreset.company.com/unlock" />
```

### UI customization

#### WindowTitle

- **Type**: String
- **Required**: No
- **Default**: "Netwrix Directory Manager"
- **Description**: Title displayed in the browser window title bar
- **Example**: `Company Password Reset`

```xml
<WindowTitle value="Acme Corp Password Reset" />
```

#### CPTitle

- **Type**: String
- **Required**: No
- **Default**: "Netwrix Directory Manager"
- **Description**: Title displayed on the credential provider tile at the login screen
- **Example**: `Company Self-Service`
- **Notes**: Keep this short (20-30 characters max) for best display

```xml
<CPTitle value="Acme Corp Self-Service" />
```

#### ForgetPasswordText

- **Type**: String
- **Required**: No
- **Default**: "Forgot my password?"
- **Description**: Text displayed for the password reset option
- **Example**: `Reset Password`

```xml
<ForgetPasswordText value="Reset My Password" />
```

#### UnlockAccountText

- **Type**: String
- **Required**: No
- **Default**: "Unlock my account"
- **Description**: Text displayed for the account unlock option
- **Example**: `Unlock Account`

```xml
<UnlockAccountText value="Unlock My Account" />
```

#### ImageFile

- **Type**: String (filename)
- **Required**: No
- **Default**: "logo.bmp"
- **Description**: Logo image displayed on the credential provider tile
- **Supported Formats**: BMP, PNG, JPG
- **Recommended Size**: 128x128 pixels
- **Location**: Must be in the installation directory
- **Example**: `company-logo.bmp`

```xml
<ImageFile value="company-logo.bmp" />
```

**How to Use Custom Logo**:

1. Create a 128x128 pixel BMP, PNG, or JPG image.
2. Copy the image file to `C:\Program Files\Imanami\Password Center Client (x64)\`.
3. Update the `ImageFile` setting with your filename.
4. Lock and unlock the computer to see the changes.

#### IconImage

- **Type**: String (filename)
- **Required**: No
- **Default**: "favicon.ico"
- **Description**: Icon displayed in the browser window and taskbar
- **Supported Formats**: ICO
- **Recommended Size**: 32x32 or 64x64 pixels
- **Location**: Must be in the installation directory

```xml
<IconImage value="company-icon.ico" />
```

### Credential provider filtering

Filtering controls which other Windows credential providers (login methods) are visible when the Directory Manager credential provider is active.

#### Understanding filtering

**What is Filtering?**

By default, Windows displays all registered credential providers on the login screen (password, PIN, Windows Hello, and so on). Use filtering to:

- Hide specific credential providers in certain scenarios.
- Simplify the login screen by showing only relevant options.
- Create a cleaner user experience.

**When is Filtering Applied?**

- **Logon Scenario**: When the computer starts or after logout
- **Unlock Scenario**: When the workstation is locked (Win + L)

#### DisableAutoFilter

- **Type**: Boolean (true/false)
- **Required**: No
- **Default**: "false"
- **Description**: Controls whether automatic filtering is enabled

**Values**:

- `false` (default): Filtering is enabled. The credential provider filters other credential providers based on the FilterLogon and FilterUnlock settings.
- `true`: Filtering is disabled. All Windows credential providers appear on the login screen.

```xml
<DisableAutoFilter value="false" />
```

**When to Use**:

- Set to `false` for production (recommended). This provides a controlled, simplified login experience.
- Set to `true` for troubleshooting. This shows all credential providers for debugging.

**Visual Example**:

```
DisableAutoFilter = false (Filtering Enabled):
┌─────────────────────────────┐
│  Windows Login Screen       │
├─────────────────────────────┤
│  [User Account]             │
│  [Netwrix Self-Service]     │
│    → Reset Password         │
│    → Unlock Account         │
└─────────────────────────────┘

DisableAutoFilter = true (Filtering Disabled):
┌─────────────────────────────┐
│  Windows Login Screen       │
├─────────────────────────────┤
│  [User Account]             │
│  [Netwrix Self-Service]     │
│  [Windows Hello Face]       │
│  [PIN]                      │
│  [Fingerprint]              │
└─────────────────────────────┘
```

#### FilterLogon

- **Type**: String (semicolon-separated CLSIDs)
- **Required**: No
- **Default**: (list of common credential provider CLSIDs)
- **Description**: Specifies which credential providers to filter (hide) during the logon scenario

**Format**:

```xml
<FilterLogon value="CLSID1;CLSID2;CLSID3" />
```

**Common CLSIDs to Filter**:

```xml
<FilterLogon value="{2135F72A-90B5-4ED3-A7F1-8BB705AC276A};{25CBB996-92ED-457E-B28C-4774084BD562};{3DD6BEC0-8193-4FFE-AE25-E08E39EA4063};{4DA7114C-DE47-43BF-A644-62876DCC2A72};{8AF662BF-65A0-4D0A-A540-A338A999D36F};{8FD7E19C-3BF7-489B-A72C-846AB3678C96};{BEC09223-B018-416D-A0AC-523971B639F5};{C5D7540A-CD51-453B-B22B-05305BA03F07};{C885AA15-1764-4293-B82A-0586ADD46B35};{D6886603-9D2F-4EB2-B667-1971041FA96B};{F64945DF-4FA9-4068-A2FB-61AF319EDD33};{F8A0B131-5F68-486C-8040-7E8FC3C85BB6}" />
```

**What These CLSIDs Represent**:

- `{2135F72A-90B5-4ED3-A7F1-8BB705AC276A}`: Picture Password
- `{8AF662BF-65A0-4D0A-A540-A338A999D36F}`: Fingerprint
- `{BEC09223-B018-416D-A0AC-523971B639F5}`: Windows Hello Face
- `{D6886603-9D2F-4EB2-B667-1971041FA96B}`: PIN
- (Additional CLSIDs for other credential providers)

**💡 Tip**: The default value filters most alternative credential providers. Only the standard password login and the Directory Manager provider remain visible.

#### FilterUnlock

- **Type**: String (semicolon-separated CLSIDs)
- **Required**: No
- **Default**: (same as FilterLogon)
- **Description**: Specifies which credential providers to filter during the workstation unlock scenario

**Usage**: Set this to the same value as FilterLogon, unless you want different filtering behavior when unlocking than when logging on.

```xml
<FilterUnlock value="{2135F72A-90B5-4ED3-A7F1-8BB705AC276A};{D6886603-9D2F-4EB2-B667-1971041FA96B}" />
```

**Example Scenario**:

You might want to allow Windows Hello Face during logon but not during unlock:

- `FilterLogon`: Don't include the Windows Hello CLSID. Hello appears during logon.
- `FilterUnlock`: Include the Windows Hello CLSID. Hello is hidden during unlock.

#### AllowedCP

- **Type**: String (semicolon-separated CLSIDs)
- **Required**: No
- **Default**: Empty (allow all)
- **Description**: Allow list of credential providers (opposite of filtering)

**Usage**: Instead of specifying what to hide (FilterLogon/FilterUnlock), specify what to show.

```xml
<AllowedCP value="{60b78e88-ead8-445c-9cfd-0b87f74ea6cd};{c8765b62-7058-4d7f-9421-11a75d623206}" />
```

This example allows only:

- Standard password login (`{60b78e88-ead8-445c-9cfd-0b87f74ea6cd}`)
- The Directory Manager credential provider (`{c8765b62-7058-4d7f-9421-11a75d623206}`)

**💡 When to Use**:

- Use `AllowedCP` to explicitly allow specific providers (allow-list approach).
- Use `FilterLogon/FilterUnlock` to hide specific providers (block-list approach).
- Don't use both at the same time. Choose one approach.

### Network and proxy settings

If your organization uses a proxy server for internet access, configure these settings.

#### ProxyServer

- **Type**: String (hostname or IP)
- **Required**: No (only if using proxy)
- **Default**: Empty (no proxy)
- **Description**: Hostname or IP address of the proxy server
- **Example**: `proxy.company.com` or `10.0.0.1`

```xml
<ProxyServer value="proxy.company.com" />
```

#### ProxyPort

- **Type**: String (port number)
- **Required**: No (only if using proxy)
- **Default**: Empty
- **Description**: Port number of the proxy server
- **Example**: `8080`, `3128`

```xml
<ProxyPort value="8080" />
```

#### ProxyType

- **Type**: String
- **Required**: No
- **Default**: Empty (direct connection)
- **Description**: Type of proxy configuration

**Supported Values**:

- `http`: HTTP proxy
- `https`: HTTPS proxy
- `socks`: SOCKS proxy
- `pac`: Proxy Auto-Configuration file

```xml
<ProxyType value="http" />
```

#### ProxyPacUrl

- **Type**: String (URL)
- **Required**: No (only if using PAC file)
- **Default**: Empty
- **Description**: URL to a Proxy Auto-Configuration (PAC) file
- **Example**: `http://proxy.company.com/proxy.pac`

```xml
<ProxyPacUrl value="http://proxy.company.com/proxy.pac" />
```

**When to Use**: If your organization uses a PAC file for proxy configuration, specify the PAC file URL here.

#### ProxyUserName

- **Type**: String
- **Required**: No (only if proxy requires authentication)
- **Default**: Empty
- **Description**: Username for proxy authentication

```xml
<ProxyUserName value="proxyuser" />
```

**⚠️ Security Note**: Storing credentials in plain text isn't recommended. Consider using integrated Windows authentication with your proxy server instead.

#### ProxyPassword

- **Type**: String
- **Required**: No (only if proxy requires authentication)
- **Default**: Empty
- **Description**: Password for proxy authentication

```xml
<ProxyPassword value="password123" />
```

**⚠️ Security Warning**:

- This setting stores the password in **plain text**.
- Anyone with administrator access can read it.
- **Recommended**: Use proxy servers that support Windows integrated authentication instead.
- If you must use a password, set proper file permissions on CPSettings.xml.

#### Complete proxy configuration example

```xml
<!-- HTTP Proxy with Authentication -->
<ProxyServer value="proxy.company.com" />
<ProxyPort value="8080" />
<ProxyType value="http" />
<ProxyUserName value="proxyuser" />
<ProxyPassword value="ProxyPass123" />

<!-- OR: PAC File Configuration -->
<ProxyType value="pac" />
<ProxyPacUrl value="http://proxy.company.com/proxy.pac" />
```

### Logging and debugging

#### Log

- **Type**: Boolean (true/false)
- **Required**: No
- **Default**: "false"
- **Description**: Enable or disable detailed logging

**Values**:

- `false` (default): Logging disabled (recommended for production)
- `true`: Logging enabled (use for troubleshooting)

```xml
<Log value="true" />
```

**Log File Location**:

```
C:\Program Files\Imanami\Password Center Client (x64)\log.txt
```

**What is Logged**:

- Configuration loading and parsing
- Credential provider initialization
- URL loading attempts
- Browser launching events
- Filtering decisions
- Errors and exceptions

**⚠️ Privacy Warning**:

- Log files might contain sensitive information (URLs, usernames).
- Enable logging only when troubleshooting.
- Delete log files after troubleshooting is complete.
- Restrict access to log files to administrators only.

**How to Use Logs for Troubleshooting**:

1. Enable logging: `<Log value="true" />`
2. Save CPSettings.xml.
3. Restart or lock the computer.
4. Reproduce the issue.
5. Open `log.txt` in the installation directory.
6. Look for ERROR or WARNING entries.
7. Share relevant log excerpts with support (redact sensitive information).

#### CEFLogMode

- **Type**: String
- **Required**: No
- **Default**: "Disabled"
- **Description**: Controls the Chromium Embedded Framework logging level

**Supported Values**:

- `Disabled` (default): No CEF logging
- `Enabled`: Basic CEF logging
- `Verbose`: Detailed CEF logging (very verbose)

```xml
<CEFLogMode value="Enabled" />
```

**CEF Log Location**:

```
C:\Program Files\Imanami\Password Center Client (x64)\debug.log
```

**When to Use**:

- Enable it when you troubleshoot browser rendering issues.
- Enable it when web pages fail to load.
- Use `Verbose` mode only when support requests it.

### SSL and certificate settings

#### IgnoreCertificateErrors

- **Type**: Boolean (true/false)
- **Required**: No
- **Default**: "false"
- **Description**: Whether to ignore SSL certificate errors

**Values**:

- `false` (default): Enforce SSL certificate validation (recommended)
- `true`: Ignore SSL certificate errors (not recommended)

```xml
<IgnoreCertificateErrors value="false" />
```

**⚠️ SECURITY WARNING**:

Setting this to `true` is a **significant security risk**:

- It disables SSL/TLS certificate validation.
- It makes the connection vulnerable to man-in-the-middle attacks.
- It allows connections to servers with expired, self-signed, or invalid certificates.
- You should **NEVER** use it in production environments.

**When You Might See Certificate Errors**:

1. **Self-signed certificates**: Your password reset portal uses a self-signed SSL certificate.
2. **Expired certificates**: The portal's SSL certificate has expired.
3. **Hostname mismatch**: You access the portal by IP instead of hostname.
4. **Untrusted CA**: The certificate is issued by a CA that isn't in the Windows trust store.

**Recommended Solutions Instead of Ignoring Errors**:

1. **Get a valid SSL certificate** from a trusted Certificate Authority:
   - Let's Encrypt (free)
   - DigiCert, Sectigo, GlobalSign (commercial)

2. **Add self-signed certificate to Windows trust store**:
   - Export the certificate from your portal.
   - Import it into **Certificates (Local Computer)** > **Trusted Root Certification Authorities**.

3. **Use proper hostname**:
   - Access the portal by its proper FQDN, not its IP address.
   - Ensure that the certificate matches the hostname.

4. **For testing only** (temporary workaround):

   ```xml
   <IgnoreCertificateErrors value="true" />
   ```

   **Set this back to `false` before production deployment.**

### Advanced settings

#### WebView

- **Type**: String
- **Required**: No
- **Default**: "cef"
- **Description**: Selects which web rendering engine to use

**Supported Values**:

- `cef` (default): Use Chromium Embedded Framework (recommended)
- `2`: Use Microsoft IE (legacy option)

```xml
<WebView value="cef" />
```

**Recommendation**: Keep the default value (`cef`) unless support instructs you otherwise.

## Common deployment scenarios

These ready-to-use configuration examples cover typical deployment scenarios.

### Small business (basic setup)

**Environment**:

- Single location
- 10-50 computers
- Direct internet connection (no proxy)
- Password reset portal: `https://reset.company.com`

**Configuration** (CPSettings.xml):

```xml
<?xml version="1.0" standalone="yes" ?>
<CPSettings>
    <!-- Basic Configuration -->
    <ResetMyPasswordUrl value="https://reset.company.com" />
    <UnlockMyAccountUrl value="https://reset.company.com" />

    <!-- Company Branding -->
    <WindowTitle value="Company Password Reset" />
    <CPTitle value="Company Self-Service" />
    <ImageFile value="logo.bmp" />

    <!-- Keep it simple - default filtering -->
    <DisableAutoFilter value="false" />

    <!-- No proxy needed -->
    <!-- Logging disabled for production -->
    <Log value="false" />
</CPSettings>
```

**Deployment Steps**:

1. Install the MSI on each computer.
2. Copy the company logo as `logo.bmp` to the installation directory.
3. Edit CPSettings.xml with the settings from this scenario.
4. Restart the computers.
5. Test on one computer before you roll out to all.

### Enterprise with Group Policy

**Environment**:

- Multiple locations
- 500+ computers
- Active Directory domain
- Password reset portal: `https://selfservice.enterprise.com`
- Corporate proxy server

**Deployment Method**: Group Policy

**GPO Configuration Steps**:

1. **Create GPO**:
   - Open Group Policy Management Console.
   - Create a new GPO named "Netwrix Credential Provider Configuration".

2. **Configure Registry Settings**:
   - Edit the GPO and go to **Computer Configuration** > **Preferences** > **Windows Settings** > **Registry**.
   - Set the target path to `HKLM\SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings`.

3. **Add Registry Values**:

   | Name | Type | Value |
   |------|------|-------|
   | ResetMyPasswordUrl | REG_SZ | https://selfservice.enterprise.com/reset |
   | UnlockMyAccountUrl | REG_SZ | https://selfservice.enterprise.com/unlock |
   | WindowTitle | REG_SZ | Enterprise Self-Service |
   | CPTitle | REG_SZ | IT Self-Service |
   | DisableAutoFilter | REG_SZ | false |
   | ProxyServer | REG_SZ | proxy.enterprise.com |
   | ProxyPort | REG_SZ | 8080 |
   | ProxyType | REG_SZ | http |
   | Log | REG_SZ | false |

4. **Deploy MSI**:
   - Use Group Policy Software Installation or SCCM.
   - Link the GPO to the appropriate OUs.
   - Force a group policy update with `gpupdate /force`.

**Benefits of GPO Deployment**:

- Centralized configuration management
- Consistent settings across all computers
- Organization-wide settings updates from one place
- Local administrators can't change settings
- Automatic application to new computers

### Enterprise with proxy and authentication

**Environment**:

- Corporate proxy that requires authentication
- Password reset portal: `https://passwordreset.company.com`

**Configuration** (CPSettings.xml or GPO):

```xml
<?xml version="1.0" standalone="yes" ?>
<CPSettings>
    <!-- Portal URLs -->
    <ResetMyPasswordUrl value="https://passwordreset.company.com/reset" />
    <UnlockMyAccountUrl value="https://passwordreset.company.com/unlock" />

    <!-- Proxy Configuration -->
    <ProxyServer value="proxy.company.com" />
    <ProxyPort value="8080" />
    <ProxyType value="http" />
    <ProxyUserName value="serviceaccount" />
    <ProxyPassword value="ServicePassword123" />

    <!-- UI Customization -->
    <WindowTitle value="Company IT Services" />
    <CPTitle value="Self-Service" />

    <!-- Standard Configuration -->
    <DisableAutoFilter value="false" />
    <Log value="false" />
</CPSettings>
```

**⚠️ Security Recommendations**:

1. Use a dedicated service account for proxy authentication.
2. Grant this account only proxy access permissions.
3. Rotate the password regularly.
4. Deploy with Group Policy, which is more secure than a local file.
5. Consider using proxy servers that support Windows integrated authentication.

### Testing and development environment

**Environment**:

- Test environment
- Detailed logging needed
- Testing with self-signed certificates
- Single test machine

**Configuration** (CPSettings.xml):

```xml
<?xml version="1.0" standalone="yes" ?>
<CPSettings>
    <!-- Test Portal URLs -->
    <ResetMyPasswordUrl value="https://test-portal.company.local/reset" />
    <UnlockMyAccountUrl value="https://test-portal.company.local/unlock" />

    <!-- Development Settings -->
    <WindowTitle value="TEST - Password Reset" />
    <CPTitle value="TEST - Self-Service" />

    <!-- Enable All Logging -->
    <Log value="true" />
    <CEFLogMode value="Verbose" />

    <!-- Disable Filtering (show all credential providers) -->
    <DisableAutoFilter value="true" />

    <!-- Allow Self-Signed Certificates (TEST ONLY!) -->
    <IgnoreCertificateErrors value="true" />
</CPSettings>
```

**⚠️ WARNING**: This configuration is for testing only. Never use it in production.

**Testing Checklist**:

- The credential provider tile appears on the login screen.
- "Forgot my password?" opens the correct URL.
- "Unlock my account" opens the correct URL.
- The browser window displays the portal correctly.
- You can complete the password reset process.
- `log.txt` has no errors.
- The behavior is correct with and without filtering enabled.
- The behavior matches production expectations.

**Before Moving to Production**:

```xml
<!-- Change these back to secure values -->
<Log value="false" />
<CEFLogMode value="Disabled" />
<IgnoreCertificateErrors value="false" />
<DisableAutoFilter value="false" />
```

### High security environment

**Environment**:

- Financial or healthcare organization
- Strict security requirements
- All connections must use HTTPS
- Audit logging required
- Minimal credential provider exposure

**Configuration**:

```xml
<?xml version="1.0" standalone="yes" ?>
<CPSettings>
    <!-- HTTPS Only URLs -->
    <ResetMyPasswordUrl value="https://secure-reset.company.com/reset" />
    <UnlockMyAccountUrl value="https://secure-reset.company.com/unlock" />

    <!-- UI Configuration -->
    <WindowTitle value="Secure Password Reset" />
    <CPTitle value="Authorized Access" />
    <ForgetPasswordText value="Reset Password" />
    <UnlockAccountText value="Unlock Account" />

    <!-- Security Settings -->
    <IgnoreCertificateErrors value="false" />

    <!-- Filter Everything Except Password and Netwrix -->
    <AllowedCP value="{60b78e88-ead8-445c-9cfd-0b87f74ea6cd};{c8765b62-7058-4d7f-9421-11a75d623206}" />

    <!-- Enable Audit Logging -->
    <Log value="true" />
    <CEFLogMode value="Enabled" />
</CPSettings>
```

**Additional Security Measures**:

1. Deploy through Group Policy to prevent local tampering.
2. Use valid SSL certificates from a trusted CA.
3. Enable Windows Event Log monitoring.
4. Restrict physical access to log files.
5. Run regular security audits of the configuration.
6. Monitor log files for suspicious activity.
7. Use multifactor authentication on the password reset portal.

### Kiosk or shared computer

**Environment**:

- Shared computer in a lobby or common area
- Multiple users throughout the day
- Limited credential provider options needed

**Configuration**:

```xml
<?xml version="1.0" standalone="yes" ?>
<CPSettings>
    <!-- Portal URLs -->
    <ResetMyPasswordUrl value="https://reset.company.com" />
    <UnlockMyAccountUrl value="https://reset.company.com" />

    <!-- Simple UI -->
    <WindowTitle value="Password Help" />
    <CPTitle value="Need Help?" />
    <ForgetPasswordText value="I forgot my password" />

    <!-- Only show standard password and self-service -->
    <AllowedCP value="{60b78e88-ead8-445c-9cfd-0b87f74ea6cd};{c8765b62-7058-4d7f-9421-11a75d623206}" />

    <!-- No logging (privacy) -->
    <Log value="false" />
</CPSettings>
```

**Additional Kiosk Configuration**:

- Enable automatic logoff after inactivity.
- Disable or hide the unlock option (show only reset).
- Lock down browser navigation (if the portal supports it).
- Clear the browser cache periodically.

## Troubleshooting and FAQ

This section addresses common issues and frequently asked questions.

### Frequently asked questions

#### Locate the CPSettings.xml file

**Answer**: Follow these steps.

```
C:\Program Files\Imanami\Password Center Client (x64)\CPSettings.xml
```

The installer creates this file if it exists in the same directory as the installer. You need administrator privileges to edit it.

**How to Find It**:

1. Open File Explorer.
2. Go to `C:\Program Files\Imanami\`.
3. Open the `Password Center Client (x64)` folder.
4. Look for `CPSettings.xml`.

**If File is Missing**:

- Reinstall the credential provider.
- Check that the installation completed successfully.
- Verify that you're looking in the correct directory.

#### Apply changes to CPSettings.xml

**Answer**: Changes to configuration require a refresh of the login screen.

**To Apply Changes**:

**Option 1: Lock and Unlock**:

1. Save CPSettings.xml.
2. Press `Win + L` to lock.
3. Press `Ctrl + Alt + Del`, and then press Escape.
4. Lock again (`Win + L`).
5. The changes are now visible.

**Option 2: Restart Computer** (most reliable):

1. Save CPSettings.xml.
2. Restart the computer.
3. The changes apply at the next login screen.

**Option 3: Restart Windows Logon Process** (advanced):

1. Open Task Manager as Administrator.
2. Go to the **Details** tab.
3. Find `winlogon.exe`.
4. End the process. It restarts automatically.
5. ⚠️ Use caution. This might log you out.

**Note**: Configuration cached from Group Policy or Registry takes precedence over CPSettings.xml.

#### Troubleshoot a missing credential provider tile

**Troubleshooting Steps**:

1. **Verify Installation**:
   - Check whether the files exist in `C:\Program Files\Imanami\Password Center Client (x64)\`.
   - Verify that `Imanami.PasswordCenter.Credential64.dll` is present.

2. **Check Registry Registration**:
   - Open Registry Editor (regedit.exe).
   - Go to `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Providers\{c8765b62-7058-4d7f-9421-11a75d623206}`.
   - Verify that the key exists.
   - Check whether the default value is "Imanami.PasswordCenter.Credential64".

3. **Verify DLL Registration**:
   - Open Command Prompt as Administrator.
   - Run `reg query "HKLM\SOFTWARE\Classes\CLSID\{c8765b62-7058-4d7f-9421-11a75d623206}"`.
   - The output should show InprocServer32 pointing to the DLL.

4. **Check Event Logs**:
   - Open Event Viewer.
   - Go to **Windows Logs** > **System**.
   - Look for errors related to credential providers or winlogon.

5. **Try Reinstalling**:
   - Uninstall the credential provider.
   - Restart the computer.
   - Reinstall the MSI package.
   - Restart again.

6. **Check Group Policy**:
   - Run `gpresult /h gpreport.html`.
   - Open gpreport.html.
   - Check for any policies that might disable custom credential providers.

#### Troubleshoot a portal that doesn't load

**Common Causes and Solutions**:

**Cause 1: Incorrect URL**

- Check `ResetMyPasswordUrl` and `UnlockMyAccountUrl` in CPSettings.xml.
- Verify that the URLs are correct (copy and paste from a working browser).
- Ensure that the URLs include `https://` or `http://`.
- Test the URLs in a regular browser first.

**Cause 2: Network Connectivity**

- Ping the portal server from a command prompt.
- Check firewall settings.
- Verify that the internet connection works.
- Test from the login screen user context (not your user context).

**Cause 3: Proxy Issues**

- If you are behind a proxy, configure proxy settings in CPSettings.xml.
- Verify that the proxy server address and port are correct.
- Check whether the proxy requires authentication.
- Test the proxy settings in a regular browser first.

**Cause 4: SSL Certificate Errors**

- Enable logging: `<Log value="true" />`.
- Check log.txt for certificate errors.
- Verify that the portal has a valid SSL certificate.
- See the [IgnoreCertificateErrors](#ignorecertificateerrors) section for handling certificate issues.

**Debugging Steps**:

1. Enable logging in CPSettings.xml.
2. Reproduce the issue.
3. Check `log.txt` in the installation directory.
4. Look for errors related to URL loading.
5. Test the URL in a regular browser from the same computer.

#### Hide Windows Hello or PIN options

**Answer**: Use the `FilterLogon` and `FilterUnlock` settings to hide specific credential providers.

**Example - Hide Windows Hello Face and PIN**:

```xml
<FilterLogon value="{BEC09223-B018-416D-A0AC-523971B639F5};{D6886603-9D2F-4EB2-B667-1971041FA96B}" />
<FilterUnlock value="{BEC09223-B018-416D-A0AC-523971B639F5};{D6886603-9D2F-4EB2-B667-1971041FA96B}" />
```

Where:

- `{BEC09223-B018-416D-A0AC-523971B639F5}` = Windows Hello Face
- `{D6886603-9D2F-4EB2-B667-1971041FA96B}` = PIN

**Alternative - Show Only Specific Providers**:

```xml
<AllowedCP value="{60b78e88-ead8-445c-9cfd-0b87f74ea6cd};{c8765b62-7058-4d7f-9421-11a75d623206}" />
```

This shows only:

- Standard password login (`{60b78e88-ead8-445c-9cfd-0b87f74ea6cd}`)
- The Directory Manager credential provider (`{c8765b62-7058-4d7f-9421-11a75d623206}`)

For the complete list of CLSIDs, see the [Credential Provider Filtering](#credential-provider-filtering) section.

#### Use the same portal URL for reset and unlock

**Answer**: Yes. If your password reset portal handles both functions, you can use the same URL:

```xml
<ResetMyPasswordUrl value="https://portal.company.com" />
<UnlockMyAccountUrl value="https://portal.company.com" />
```

Many self-service portals detect whether the user needs a password reset or an account unlock from the account status.

**Alternative**: Use different paths on the same server:

```xml
<ResetMyPasswordUrl value="https://portal.company.com/reset" />
<UnlockMyAccountUrl value="https://portal.company.com/unlock" />
```

#### Deploy to multiple computers

**Answer**: You can use several deployment methods.

**Method 1: Group Policy Software Installation** (Recommended for AD environments)

1. Copy the MSI to a network share.
2. Open Group Policy Management.
3. Create or edit a GPO.
4. Go to **Computer Configuration** > **Policies** > **Software Settings** > **Software Installation**.
5. Right-click and select **New** > **Package**.
6. Select the MSI file.
7. Choose **Assigned**.
8. Configure settings through Group Policy (see [Enterprise with Group Policy](#enterprise-with-group-policy)).

**Method 2: SCCM/Intune**

1. Import the MSI into SCCM or Intune.
2. Create a deployment package.
3. Target computer collections.
4. Deploy with automatic installation.

**Method 3: PowerShell Script**

```powershell
# Deploy to multiple computers
$computers = Get-Content "computers.txt"
$msiPath = "\\server\share\PasswordCenterClientSetup64.msi"

foreach ($computer in $computers) {
    Invoke-Command -ComputerName $computer -ScriptBlock {
        Start-Process msiexec.exe -ArgumentList "/i $using:msiPath /quiet /norestart" -Wait
    }
}
```

**Method 4: Manual Installation** (Small deployments)

1. Copy the MSI to each computer.
2. Run the MSI as administrator on each computer.
3. Configure CPSettings.xml on each computer.
4. Restart the computers.

#### Enable logging for troubleshooting

**Answer**: Follow these steps.

**Step 1: Enable Logging in Configuration**

Edit CPSettings.xml:

```xml
<Log value="true" />
<CEFLogMode value="Enabled" />
```

**Step 2: Apply Changes**

- Save the file.
- Restart the computer or lock and unlock twice.

**Step 3: Reproduce the Issue**

- Trigger the problem you're troubleshooting.
- Interact with the credential provider.

**Step 4: Collect Log Files**

The log files are in the installation directory:

```
C:\Program Files\Imanami\Password Center Client (x64)\log.txt
C:\Program Files\Imanami\Password Center Client (x64)\debug.log (CEF log)
```

**Step 5: Review Logs**

- Open log.txt in Notepad.
- Look for ERROR or WARNING entries.
- Check timestamps to find relevant entries.
- Note any error codes or messages.

**Step 6: Disable Logging After Troubleshooting**

```xml
<Log value="false" />
<CEFLogMode value="Disabled" />
```

**⚠️ Important**:

- Delete log files after troubleshooting. They might contain sensitive information.
- Don't leave logging enabled in production. It affects performance.

#### Resolve SSL certificate errors

**Answer**: This usually means your password reset portal uses one of the following:

- A self-signed SSL certificate
- An expired certificate
- A certificate from an untrusted CA
- A certificate whose hostname doesn't match

**✅ Recommended Solutions** (in order of preference):

**Solution 1: Get Valid SSL Certificate**

- Obtain a certificate from a trusted CA (Let's Encrypt, DigiCert, and others).
- Install it on your password reset portal.
- This solves the problem permanently.

**Solution 2: Add Certificate to Windows Trust Store**

1. Export the certificate from your portal.
2. Copy the certificate to the computer.
3. Open Certificate Manager: select **Run** and enter `certlm.msc`.
4. Go to **Trusted Root Certification Authorities** > **Certificates**.
5. Right-click and select **All Tasks** > **Import**.
6. Import the certificate.
7. Restart the computer.

**Solution 3: Use Proper Hostname**

- Access the portal by its proper domain name, not its IP address.
- Ensure that the certificate matches the hostname exactly.

**❌ NOT Recommended: Ignore Certificate Errors**

Use this only as a temporary workaround for testing:

```xml
<IgnoreCertificateErrors value="true" />
```

**⚠️ WARNING**: This setting is insecure. See [IgnoreCertificateErrors](#ignorecertificateerrors) for the security implications.

#### Upgrade to a newer version

**Answer**: This product doesn't support in-place upgrades. You must uninstall the old version first.

**Upgrade Procedure**:

1. **Backup Current Configuration**:
   - Export registry settings (if you use GPO).
   - Copy CPSettings.xml to a safe location.
   - Document the current configuration.

2. **Uninstall Current Version**:
   - Open **Control Panel** > **Programs and Features**.
   - Select "Netwrix GroupID Credential Provider".
   - Click **Uninstall**.
   - Restart the computer.

3. **Install New Version**:
   - Follow the [First-Time Setup Guide](#first-time-setup-guide).
   - Install the new MSI package.
   - Restart the computer.

4. **Restore Configuration**:
   - Copy your backed-up CPSettings.xml to the installation directory.
   - Or reapply the GPO settings.
   - Restart or lock and unlock to verify.

**For Enterprise Deployments**:

- Update the MSI package in your GPO or SCCM deployment.
- Configure the GPO to uninstall the old version before it installs the new version.
- Test with a pilot group before you roll out organization-wide.

See [Upgrade Policy](#upgrade-policy) for details.

#### Restart after changing configuration

**Answer**: It depends on what you changed and how.

**Requires Restart**:

- Installing or uninstalling the credential provider
- First-time configuration
- Changing filtering settings (FilterLogon, FilterUnlock, AllowedCP)
- When in doubt, restart to be safe

**May Not Require Restart** (lock and unlock might be sufficient):

- URL changes (ResetMyPasswordUrl, UnlockMyAccountUrl)
- UI customization (titles, text)
- Logging settings
- Proxy settings

**Recommended**:

- For critical changes: **Restart the computer**
- For testing: **Lock/Unlock** and test
- For production: **Always restart** to ensure the changes are fully applied

### Common error messages

#### Error: "The page can't be displayed"

**Cause**: Network connectivity or proxy issues

**Solutions**:

1. Verify that the internet connection works.
2. Check firewall settings and allow outbound HTTPS (port 443).
3. Configure proxy settings if you are behind a corporate proxy.
4. Test the URL in a regular browser.
5. Check the Windows Event Log for network-related errors.

#### Error: "This site isn't secure" or certificate error

**Cause**: SSL certificate validation failed

**Solutions**:

1. Install a valid SSL certificate on the portal (best solution).
2. Add the self-signed certificate to the Windows trust store.
3. Verify that you access the portal by the correct hostname (not the IP address).
4. For testing only: temporarily set `<IgnoreCertificateErrors value="true" />`.

#### Error: Login screen appears blank or freezes

**Cause**: The credential provider DLL failed to load or crashed

**Solutions**:

1. Check the Windows Event Log:
   - Open **Windows Logs** > **System**.
   - Look for winlogon or credential provider errors.
2. Verify that the DLL exists: `C:\Program Files\Imanami\Password Center Client (x64)\Imanami.PasswordCenter.Credential64.dll`
3. Check that Visual C++ 2022 Redistributable is installed.
4. Reinstall the credential provider.
5. Boot in Safe Mode to access the system if you are locked out.

**⚠️ Important**: If you are locked out of the system, see [Emergency Removal](#emergency-removal-system-locked-out).

#### Error: "Access Denied" when editing CPSettings.xml

**Cause**: Insufficient permissions

**Solutions**:

1. Open Notepad as Administrator:
   - Right-click Notepad.
   - Select **Run as administrator**.
2. Open CPSettings.xml from within Notepad.
3. Or use a Command Prompt opened as administrator:

   ```cmd
   notepad "C:\Program Files\Imanami\Password Center Client (x64)\CPSettings.xml"
   ```

### Advanced troubleshooting

#### Collecting diagnostic information

When you contact support, collect this information:

**1. Configuration Files**:

```
C:\Program Files\Imanami\Password Center Client (x64)\CPSettings.xml
```

**2. Log Files** (if logging is enabled):

```
C:\Program Files\Imanami\Password Center Client (x64)\log.txt
C:\Program Files\Imanami\Password Center Client (x64)\debug.log
```

**3. Registry Export**:

Open Command Prompt as Administrator:

```cmd
reg export "HKLM\SOFTWARE\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings" CPRegistry.reg
reg export "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Providers\{c8765b62-7058-4d7f-9421-11a75d623206}" CPProviderReg.reg
```

**4. Event Logs**:

```cmd
wevtutil epl System SystemLog.evtx
wevtutil epl Application ApplicationLog.evtx
```

**5. Group Policy Report**:

```cmd
gpresult /h GPReport.html
```

**6. Installation Information**:

```cmd
wmic product where "name like '%Credential%'" get name,version
```

**⚠️ Redact Sensitive Information**: Before you share the files with support, remove:

- Passwords
- Internal URLs and server names
- Usernames
- Internal IP addresses

#### Recovery mode (locked out)

If the credential provider causes issues and you're locked out, use one of these options.

**Option 1: Safe Mode**

1. Restart the computer.
2. Press F8 during boot (or Shift + F8).
3. Select **Safe Mode**.
4. Sign in with an administrator account.
5. Uninstall the credential provider or fix the configuration.
6. Restart normally.

**Option 2: Boot from Recovery Media**

1. Boot from Windows installation media.
2. Select **Repair your computer**.
3. Choose **Command Prompt**.
4. Go to the credential provider installation folder.
5. Rename or delete the DLL:

   ```cmd
   cd "C:\Program Files\Imanami\Password Center Client (x64)"
   ren Imanami.PasswordCenter.Credential64.dll Imanami.PasswordCenter.Credential64.dll.bak
   ```

6. Restart the computer.

**Option 3: Remote Registry Edit**

1. From another computer on the network, open Registry Editor (regedit.exe).
2. Connect to the remote registry:
   - Select **File** > **Connect Network Registry**.
   - Enter the computer name.
3. Go to the credential provider registration key.
4. Delete or rename the key.
5. Restart the remote computer.

#### Testing filtering behavior

To verify that filtering works correctly:

**Step 1: Disable Filtering**

```xml
<DisableAutoFilter value="true" />
```

- Lock the computer.
- Note which credential providers appear. You should see all of them.

**Step 2: Enable Filtering with Specific Filter**

```xml
<DisableAutoFilter value="false" />
<FilterLogon value="{D6886603-9D2F-4EB2-B667-1971041FA96B}" />
```

- Lock the computer.
- The PIN provider should be hidden.
- Other providers should appear.

**Step 3: Test AllowedCP**

```xml
<AllowedCP value="{60b78e88-ead8-445c-9cfd-0b87f74ea6cd};{c8765b62-7058-4d7f-9421-11a75d623206}" />
```

- Lock the computer.
- You should see ONLY the password and Directory Manager providers.

## Security best practices

Follow these best practices for a secure deployment of the credential provider.

### Use HTTPS for portal URLs

**✅ DO:**

```xml
<ResetMyPasswordUrl value="https://portal.company.com/reset" />
<UnlockMyAccountUrl value="https://portal.company.com/unlock" />
```

**❌ DON'T:**

```xml
<ResetMyPasswordUrl value="http://portal.company.com/reset" />
```

**Why**: HTTPS encrypts communication between the client and the portal. This protects user credentials in transit.

### Use valid SSL certificates

**✅ DO:**

- Obtain SSL certificates from trusted Certificate Authorities.
- Keep certificates up to date (monitor expiration).
- Use proper hostname matching.
- Implement certificate pinning if available.

**❌ DON'T:**

- Use self-signed certificates in production.
- Ignore certificate errors with `IgnoreCertificateErrors = true`.
- Use expired certificates.
- Access the portal by IP address instead of hostname.

### Secure proxy credentials

**✅ DO:**

- Use proxy servers with Windows integrated authentication.
- If credentials are required, deploy through Group Policy (more secure than a local file).
- Use a dedicated service account with minimal privileges.
- Rotate proxy passwords regularly.
- Monitor the service account for suspicious activity.

**❌ DON'T:**

- Store proxy credentials in CPSettings.xml if you can avoid it.
- Use personal accounts for proxy authentication.
- Use passwords that don't expire.
- Share proxy credentials across multiple services.

### Restrict file permissions

**Recommended File Permissions** for CPSettings.xml:

```
C:\Program Files\Imanami\Password Center Client (x64)\CPSettings.xml
- SYSTEM: Full Control
- Administrators: Full Control
- Users: Read only
```

**How to Set**:

1. Right-click CPSettings.xml.
2. Select **Properties** > **Security** tab.
3. Click **Advanced**.
4. Remove all permissions.
5. Add:
   - SYSTEM: Full Control
   - Administrators: Full Control
   - Users: Read
6. Disable inheritance.
7. Apply the changes.

**Why**: These permissions prevent non-administrators from changing the configuration or reading proxy credentials.

### Control credential provider filtering

**✅ DO:**

- Use filtering to limit credential provider options.
- Simplify the user experience by showing only necessary options.
- Use `AllowedCP` for the allow-list approach (more secure).
- Test filtering thoroughly before deployment.

**❌ DON'T:**

- Leave `DisableAutoFilter = true` in production.
- Expose unnecessary credential providers.
- Filter out standard password login. Users need a fallback method.

**Recommended Filtering** (show only password and Directory Manager):

```xml
<AllowedCP value="{60b78e88-ead8-445c-9cfd-0b87f74ea6cd};{c8765b62-7058-4d7f-9421-11a75d623206}" />
```

### Disable logging in production

**✅ DO:**

```xml
<Log value="false" />
<CEFLogMode value="Disabled" />
```

**❌ DON'T:**

- Leave logging enabled in production.
- Store logs indefinitely.
- Share logs without redacting sensitive information.

**Why**:

- Log files might contain sensitive information (URLs, usernames).
- Logging affects performance.
- Logs consume disk space.

**When Troubleshooting**:

1. Enable logging temporarily.
2. Reproduce the issue.
3. Collect the logs.
4. Disable logging immediately.
5. Delete the logs after analysis.

### Use Group Policy for enterprise deployment

**✅ DO:**

- Deploy configuration through Group Policy.
- Use Group Policy Software Installation for MSI deployment.
- Centralize configuration management.
- Prevent local administrators from changing settings.

**❌ DON'T:**

- Rely only on the local CPSettings.xml file in an enterprise.
- Let users modify credential provider settings.
- Deploy without testing in a pilot group first.

**Benefits**:

- Configuration is stored in the registry (more secure than an XML file).
- Management is centralized.
- Changes have an audit trail.
- Deployment to new computers is automatic.

### Run regular security audits

**Audit Checklist**:

- Review the CPSettings.xml or GPO configuration quarterly.
- Verify that SSL certificates are valid and up to date.
- Check for unauthorized changes to the configuration.
- Review the Windows Event Logs for credential provider errors.
- Test password reset functionality periodically.
- Verify that filtering works as expected.
- Check file permissions on the installation directory.
- Review proxy credentials and rotate them if needed.
- Confirm that logging is disabled in production.
- Test rollback procedures.

### Protect against brute force attacks

**Portal-Side Protections** (implement on your password reset portal):

- Rate limiting on reset attempts
- Account lockout after failed attempts
- CAPTCHA for reset requests
- Multifactor authentication
- Email/SMS verification
- Audit logging of all reset attempts
- Anomaly detection

**Credential Provider Protections**:

- Use `AllowedCP` to limit authentication methods.
- Enable Windows audit policies to log logon attempts.
- Monitor failed login attempts through the Event Log.
- Deploy alongside Windows account lockout policies.

### Data protection considerations

**Compliance Requirements**:

**GDPR/Privacy**:

- Disable logging in production (logs might contain PII).
- If logging is required, implement a log retention policy.
- Document what data is processed.
- Ensure that the password reset portal complies with data protection regulations.

**PCI DSS** (if applicable):

- Use strong SSL/TLS (TLS 1.2 or later).
- Don't store cardholder data in logs.
- Run regular security testing.
- Use strong access controls.

**HIPAA** (healthcare):

- Use encrypted connections (HTTPS).
- Implement audit logging on the portal side.
- Run regular security risk assessments.
- Sign a Business Associate Agreement with the portal provider.

## Rollback instructions

If the credential provider causes issues or you need to revert changes, use these procedures.

### Undo configuration changes

**Situation**: Configuration changes caused unexpected behavior, but the credential provider works.

**Steps**:

1. **Revert to Previous Configuration**:
   - Edit CPSettings.xml.
   - Restore the previous settings.
   - Or delete the customizations to use the defaults.

2. **Or Revert Registry Changes**:
   - Open Registry Editor (regedit.exe).
   - Go to `HKLM\SOFTWARE\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings`.
   - Delete the modified values.
   - Or restore from a previous registry export.

3. **Or Revert Group Policy**:
   - Open Group Policy Management.
   - Edit the GPO.
   - Delete or change the credential provider settings.
   - Run `gpupdate /force` on client computers.

4. **Apply Changes**:
   - Restart the computer.
   - Verify the expected behavior.

### Uninstall the credential provider

**Situation**: You need to remove the credential provider completely.

**Method 1: Uninstall via Control Panel**

1. Open Control Panel.
2. Open **Programs and Features** (or **Apps & Features**).
3. Find "Netwrix GroupID Credential Provider".
4. Click **Uninstall**.
5. Follow the uninstall wizard.
6. Restart the computer.

**Method 2: Uninstall via Command Line**

```cmd
wmic product where name="Netwrix GroupID Credential Provider" call uninstall
```

Or use MSI:

```cmd
msiexec /x {4C3F32FA-8AAE-41B7-806E-195782B986D5} /quiet /norestart
```

**Method 3: Uninstall Silently (for scripts)**

```cmd
msiexec /x "C:\Path\To\PasswordCenterClientSetup64.msi" /quiet /norestart
```

**Method 4: Uninstall via Group Policy Object**

For enterprise environments where you deployed the credential provider through GPO:

1. **Open Group Policy Management**:
   - Run `gpmc.msc`.
   - Or select **Start** > **Administrative Tools** > **Group Policy Management**.

2. **Locate and Edit the GPO**:
   - Right-click the GPO that contains the credential provider deployment, for example, "Deploy Netwrix Credential Provider" or "Default Domain Policy".
   - Select **Edit**.
   - The Group Policy Management Editor opens.

3. **Navigate to Software Installation**:
   - Expand `Computer Configuration`.
   - Expand `Policies`.
   - Expand `Software Settings`.
   - Click `Software installation`.

4. **Remove the Package**:
   - Right-click the Credential Provider package.
   - Point to **All Tasks**.
   - Click **Remove**.

5. **Select Removal Method**:
   - In the "Remove Software" dialog box, select **"Immediately uninstall the software from users and computers"**.
   - Click **OK**.

6. **Close the Editor**:
   - Click **Close** to close the Group Policy Object Editor.

7. **Client Workstation Removal Process**:
   - When client workstations restart, they apply the GPO that no longer contains the Credential Provider.
   - This removes the installed Credential Provider from all client workstations.
   - **Important**: After the software is removed, users must restart the workstation **again** to remove the links from the Windows logon screen.

**Force Immediate Removal on Specific Computers**:

On client computers, administrators can force a policy update:

```cmd
gpupdate /force /boot
```

**Verify Removal on Client Machines**:

Check whether the credential provider is uninstalled:

```powershell
Get-WmiObject -Class Win32_Product | Where-Object {$_.Name -like "*Credential*"}
```

Or check the registry:

```cmd
reg query "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Providers\{c8765b62-7058-4d7f-9421-11a75d623206}"
```

If the registry key doesn't exist, the uninstallation was successful.

**Monitoring Uninstallation Status**:

Check the GPO application results:

```cmd
gpresult /h gpreport.html
```

Review the HTML report to verify that the software removal policy was applied.

### Emergency removal (system locked out)

**Situation**: The credential provider prevents login and you need immediate access.

**Option 1: Safe Mode**

1. Reboot the computer.
2. Press F8 during boot (or select **Shift + Restart** > **Troubleshoot** > **Advanced Options** > **Startup Settings** > **Restart** > F4).
3. Select **Safe Mode**.
4. Sign in with an administrator account.
5. Uninstall the credential provider through Control Panel.
6. Restart normally.

**Option 2: Manual Removal via Recovery Mode**

1. Boot from Windows installation media.
2. Select **Repair your computer**.
3. Select **Troubleshoot** > **Command Prompt**.
4. Identify the Windows drive (usually C:):

   ```cmd
   dir C:\
   ```

5. Go to the installation folder:

   ```cmd
   cd "C:\Program Files\Imanami\Password Center Client (x64)"
   ```

6. Rename the DLL to disable it:

   ```cmd
   ren Imanami.PasswordCenter.Credential64.dll Imanami.PasswordCenter.Credential64.dll.disabled
   ```

7. Remove the registry entries:

   ```cmd
   reg delete "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Providers\{c8765b62-7058-4d7f-9421-11a75d623206}" /f
   ```

8. Restart:

   ```cmd
   wpeutil reboot
   ```

**Option 3: Remote Registry Edit**

1. From another computer on the network, ensure that the Remote Registry service is running on the target computer.
2. Open Registry Editor (regedit.exe).
3. Select **File** > **Connect Network Registry**.
4. Enter the computer name.
5. Go to `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Providers`.
6. Delete the key `{c8765b62-7058-4d7f-9421-11a75d623206}`.
7. Restart the remote computer.

### Restore from backup

**Situation**: You need to restore the entire system configuration.

**If you have Registry Backup**:

1. Open Registry Editor (regedit.exe) as Administrator.
2. Select **File** > **Import**.
3. Select the previously exported .reg file.
4. Restart the computer.

**If you have System Restore Point**:

1. Boot to Safe Mode or Recovery Mode.
2. Select **System Restore** and choose a restore point.
3. Select a point before the credential provider installation.
4. Complete the restore process.
5. Restart the computer.

### Rollback checklist

Use this checklist when you roll back:

- Document the current configuration before the rollback.
- Export registry keys before you make changes.
- Test the rollback procedure on a non-production computer first.
- Notify users before the credential provider becomes unavailable.
- Have administrator access credentials ready.
- Back up the current configuration files.
- Create a system restore point.
- Verify that other credential providers work after the removal.
- Document the reason for the rollback (for future reference).
- Update change management documentation.

### Post-rollback verification

After you roll back, verify the following:

1. **Login Still Works**:
   - Test standard password login.
   - Verify that other credential providers (PIN, Windows Hello) work.
   - Test with multiple user accounts.

2. **No Remnants**:
   - Check that the installation folder is removed (or the DLL is disabled).
   - Verify that the registry keys are removed.
   - Check that no orphaned files remain.

3. **Clean Event Log**:
   - Check the Windows Event Log for credential provider errors.
   - You should see no new credential provider-related errors.

4. **Document**:
   - Record what you rolled back.
   - Note any issues you encountered.
   - Document lessons learned.

### Preventing rollback needs

**Best Practices to Avoid Rollback**:

1. **Test Thoroughly Before Production**:
   - Deploy to a pilot group first.
   - Test all scenarios.
   - Verify compatibility with existing credential providers.

2. **Use Staging Environment**:
   - Test configuration changes in a lab environment.
   - Validate before you deploy to production.

3. **Incremental Deployment**:
   - Deploy to a small group first.
   - Monitor for issues.
   - Expand the deployment gradually.

4. **Maintain Backups**:
   - Run regular system backups.
   - Export the registry before you make changes.
   - Keep previous versions of configuration files.

5. **Document Configuration**:
   - Maintain configuration documentation.
   - Record all changes.
   - Keep a history of previous working configurations.

## Support

### Getting help

If you need help with the Directory Manager Credential Provider, take these steps first.

**Before Contacting Support**:

1. **Check This Documentation**:
   - Review [Troubleshooting & FAQ](#troubleshooting-and-faq).
   - Check [Common Deployment Scenarios](#common-deployment-scenarios).
   - Verify your configuration against the examples.

2. **Enable Logging and Collect Information**:
   - Enable logging in CPSettings.xml.
   - Reproduce the issue.
   - Collect diagnostic information (see [Collecting Diagnostic Information](#collecting-diagnostic-information)).

3. **Check Netwrix Knowledge Base**:
   - Go to https://www.netwrix.com/support.html.
   - Search for known issues and solutions.

### Contact information

**Netwrix Support**:

- Website: https://www.netwrix.com/support.html
- Email: support@netwrix.com
- Phone: Check the website for regional support numbers

**When Contacting Support, Provide**:

1. **Product Information**:
   - Product name: Netwrix Directory Manager Credential Provider
   - Version: 3.1.0.0
   - Installation date

2. **Environment Details**:
   - Windows version (Windows 10/11)
   - Domain or workgroup
   - Number of affected computers
   - Deployment method (standalone, GPO, SCCM)

3. **Issue Description**:
   - Detailed description of the problem
   - Steps to reproduce
   - When the issue started
   - What changed recently
   - Error messages (exact text)

4. **Diagnostic Files** (if applicable):
   - CPSettings.xml (redact sensitive info)
   - log.txt (redact sensitive info)
   - Registry export
   - Event log export
   - Screenshots of error messages

### Community resources

**Netwrix Community Forum**:

- Share experiences with other users.
- Ask questions.
- Learn best practices.
- Visit https://community.netwrix.com/.

## Appendix

### Appendix A: Complete configuration example

This CPSettings.xml includes all available settings:

```xml
<?xml version="1.0" standalone="yes" ?>
<CPSettings>
    <!-- Required URLs -->
    <ResetMyPasswordUrl value="https://portal.company.com/reset" />
    <UnlockMyAccountUrl value="https://portal.company.com/unlock" />

    <!-- UI Customization -->
    <WindowTitle value="Company Password Reset" />
    <CPTitle value="Company Self-Service" />
    <ForgetPasswordText value="Forgot my password?" />
    <UnlockAccountText value="Unlock my account" />
    <ImageFile value="logo.bmp" />
    <IconImage value="favicon.ico" />

    <!-- Filtering Configuration -->
    <DisableAutoFilter value="false" />
    <FilterLogon value="{2135F72A-90B5-4ED3-A7F1-8BB705AC276A};{25CBB996-92ED-457E-B28C-4774084BD562};{3DD6BEC0-8193-4FFE-AE25-E08E39EA4063};{4DA7114C-DE47-43BF-A644-62876DCC2A72};{8AF662BF-65A0-4D0A-A540-A338A999D36F};{8FD7E19C-3BF7-489B-A72C-846AB3678C96};{BEC09223-B018-416D-A0AC-523971B639F5};{C5D7540A-CD51-453B-B22B-05305BA03F07};{C885AA15-1764-4293-B82A-0586ADD46B35};{D6886603-9D2F-4EB2-B667-1971041FA96B};{F64945DF-4FA9-4068-A2FB-61AF319EDD33};{F8A0B131-5F68-486C-8040-7E8FC3C85BB6}" />
    <FilterUnlock value="{2135F72A-90B5-4ED3-A7F1-8BB705AC276A};{25CBB996-92ED-457E-B28C-4774084BD562};{3DD6BEC0-8193-4FFE-AE25-E08E39EA4063};{4DA7114C-DE47-43BF-A644-62876DCC2A72};{8AF662BF-65A0-4D0A-A540-A338A999D36F};{8FD7E19C-3BF7-489B-A72C-846AB3678C96};{BEC09223-B018-416D-A0AC-523971B639F5};{C5D7540A-CD51-453B-B22B-05305BA03F07};{C885AA15-1764-4293-B82A-0586ADD46B35};{D6886603-9D2F-4EB2-B667-1971041FA96B};{F64945DF-4FA9-4068-A2FB-61AF319EDD33};{F8A0B131-5F68-486C-8040-7E8FC3C85BB6}" />
    <AllowedCP value="" />

    <!-- Proxy Configuration -->
    <ProxyServer value="" />
    <ProxyPort value="" />
    <ProxyType value="" />
    <ProxyPacUrl value="" />
    <ProxyUserName value="" />
    <ProxyPassword value="" />

    <!-- Logging -->
    <Log value="false" />
    <CEFLogMode value="Disabled" />

    <!-- Advanced Settings -->
    <WebView value="cef" />
    <IgnoreCertificateErrors value="false" />
</CPSettings>
```

### Appendix B: Registry configuration reference

This is the complete registry configuration for Group Policy deployment.

**Registry Path**:

```
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings
```

**Registry Values** (all REG_SZ type):

| Name | Value Example | Description |
|------|---------------|-------------|
| ResetMyPasswordUrl | https://portal.company.com/reset | Password reset URL |
| UnlockMyAccountUrl | https://portal.company.com/unlock | Account unlock URL |
| WindowTitle | Company Password Reset | Browser window title |
| CPTitle | Company Self-Service | Tile title |
| ForgetPasswordText | `Forgot my password?` | Reset button text |
| UnlockAccountText | `Unlock my account` | Unlock button text |
| ImageFile | logo.bmp | Logo filename |
| IconImage | favicon.ico | Icon filename |
| DisableAutoFilter | false | Enable/disable filtering |
| FilterLogon | CLSID;CLSID | Logon filter list |
| FilterUnlock | CLSID;CLSID | Unlock filter list |
| AllowedCP | CLSID;CLSID | Allowed providers |
| ProxyServer | proxy.company.com | Proxy server |
| ProxyPort | 8080 | Proxy port |
| ProxyType | http | Proxy type |
| ProxyPacUrl | http://proxy.company.com/proxy.pac | PAC file URL |
| ProxyUserName | username | Proxy username |
| ProxyPassword | password | Proxy password |
| Log | false | Enable logging |
| CEFLogMode | Disabled | CEF logging |
| WebView | cef | Web engine |
| IgnoreCertificateErrors | false | Certificate validation |

### Appendix C: Version history

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | October 15, 2025 | Initial technical documentation release |

### Appendix D: Credential provider CLSIDs reference

This table lists the common Windows credential provider CLSIDs for filtering:

<!-- vale Netwrix.PromotionalLanguage = NO -->

| CLSID | Description |
|-------|-------------|
| `{60b78e88-ead8-445c-9cfd-0b87f74ea6cd}` | Password Credential Provider |
| `{2135F72A-90B5-4ED3-A7F1-8BB705AC276A}` | Picture Password Provider |
| `{25CBB996-92ED-457E-B28C-4774084BD562}` | Windows Biometric Provider |
| `{3DD6BEC0-8193-4FFE-AE25-E08E39EA4063}` | Generic Provider |
| `{4DA7114C-DE47-43BF-A644-62876DCC2A72}` | FIDO Provider |
| `{8AF662BF-65A0-4D0A-A540-A338A999D36F}` | Fingerprint Provider |
| `{8FD7E19C-3BF7-489B-A72C-846AB3678C96}` | Smart Card Provider |
| `{BEC09223-B018-416D-A0AC-523971B639F5}` | Windows Hello Face Provider |
| `{C5D7540A-CD51-453B-B22B-05305BA03F07}` | NGC (Next Generation Credentials) Provider |
| `{C885AA15-1764-4293-B82A-0586ADD46B35}` | Cloud Experience Provider |
| `{D6886603-9D2F-4EB2-B667-1971041FA96B}` | PIN Provider |
| `{F64945DF-4FA9-4068-A2FB-61AF319EDD33}` | IrisRecognition Provider |
| `{F8A0B131-5F68-486C-8040-7E8FC3C85BB6}` | Generic Tile Provider |
| `{c8765b62-7058-4d7f-9421-11a75d623206}` | **Netwrix Directory Manager Credential Provider** |

<!-- vale Netwrix.PromotionalLanguage = YES -->

## Document changelog

### Version 1.0 - October 15, 2025

- Initial release
- Complete technical documentation
- Step-by-step first-time setup guide
- Glossary of terms and acronyms
- Configuration reference with defaults table
- Common deployment scenarios with examples
- Troubleshooting and FAQ section
- Security best practices
- Rollback instructions for safe undoing
- Appendices with complete configuration examples

**Document End**
