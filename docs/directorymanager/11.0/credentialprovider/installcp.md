---
title: "Install Directory Manager Credential Provider"
description: "Install Directory Manager Credential Provider on a workstation manually or deploy it to many workstations with a Group Policy Object and an Orca transform."
keywords:
  - install Credential Provider
  - Group Policy deployment
  - Orca transform
  - CPSettings.xml
  - Windows logon screen
sidebar_position: 10
---

# Install Directory Manager Credential Provider

You can install Directory Manager Credential Provider in one of the following ways:

- [Install Credential Provider Manually](#install-credential-provider-manually)
- [Install Credential Provider via a Group Policy Object (GPO)](#install-credential-provider-via-a-group-policy-object-gpo)

## Install Credential Provider Manually

Browse to the folder where you copied the package, then follow these steps:

1. Click the _NetwrixdirectorymanagerCredentialprovider.msi_ file. The wizard opens and installs
   Credential Provider.
2. After the installation, the wizard asks you to restart your machine.
3. After the restart, the Windows logon screen appears as follows:

    ![Windows logon screen with the Forgot Password and Unlock Account options](/images/directorymanager/11.0/portal/user/manage/windows_screen.webp)

    The **Forgot Password** and **Unlock Account** options are now available on the Windows logon
    screen. They route you to the URLs provided for these options in the _CPSettings.xml_ file. You
    can modify the URLs as well as the text of these options.

    The _CPSettings.xml_ file has the following settings:

    - `<ForgetPasswordText value="Forget Password?" />`

        Provide the text for the ForgotPasswordText key. This text appears on the Windows logon
        screen for the Forgot Password option.

    - `<UnlockAccountText value="Unlock Account" />`

        Provide the text for the UnlockAccountText key. This text appears on the Windows logon
        screen for the Unlock Account option.

    - `<ResetMyPasswordUrl value="https://MachineName:port/Portalname" />`

        Provide the URL to which you want to redirect users to reset their forgotten passwords.

        - **For GroupID 10**:
          `https://MachineName:port/portalname`
        - **For GroupID 11**:
          `https://MachineName:port/portalname/Home/PasswordReset`

    - `<UnlockMyAccountUrl value="https://MachineName:port/Portalname" />`

        Provide the URL to which you want to redirect users to unlock their locked accounts.

        - **For GroupID 10:** `https://MachineName:port/Portalname`
        - **For GroupID 11:** `https://MachineName:port/portalname/Home/UnlockAccount`

    - `<CPTitle value="Log on to: Netwrix GroupID" />`

        Provide the text for the CPTitle key. This text appears as the title under the Netwrix logo
        on the Windows logon screen.

## Install Credential Provider via a Group Policy Object (GPO)

Instead of installing Credential Provider manually on each individual client workstation, you can
distribute it for automatic installation using a GPO, which saves substantial time, especially on
larger networks. The GPO can be defined for an organizational unit or applied on the entire domain.
Credential Provider is installed automatically at the next Windows startup.

Installing Credential Provider is a two-step process:

1. [Install Orca](#install-orca)
2. [Deploy Credential Provider via a GPO](#deploy-credential-provider-via-a-gpo)

### Install Orca

Before you install Credential Provider via a GPO, install Orca:

1. Browse to the folder where you have copied the Credential Provider package.
2. Go to the MST Guide folder and run the `Orca-x86_en-us.msi` application. The Orca console opens:

    ![Orca console](/images/directorymanager/11.0/portal/user/manage/orca_console.webp)

3. In Orca, click **File** > **Open**. Browse to the Netwrix GroupID Credential Provider folder and
   load the _NetwrixdirectorymanagerCredentialprovider.msi_ in Orca.

    ![Credential Provider loaded in Orca](/images/directorymanager/11.0/portal/user/manage/cp_loaded.webp)

4. From the menu, select **Transform** > **New Transform**:

    ![New Transform option](/images/directorymanager/11.0/portal/user/manage/new_transform.webp)

5. Click **Property** in the left pane. The list of properties appears in the **Property**
   main window:

    ![Property page](/images/directorymanager/11.0/portal/user/manage/property.webp)

6. On your machine, create a new folder and copy the following files to it:

    - CPsettings.xml
    - NetwrixdirectorymanagerCredentialprovider.msi

7. Share the folder with the Everyone group with Read permission.
8. Provide the path of this newly created folder in the **SOURCEPATH** box.

    ![Property path](/images/directorymanager/11.0/portal/user/manage/property_path.webp)

9. From the menu, select **Transform** > **Generate Transform**:

    ![Generate Transform option](/images/directorymanager/11.0/portal/user/manage/generate_transform.webp)

10. Enter a filename for the generated .mst file and save it into the shared folder you just created.
11. Close **Orca**.

### Deploy Credential Provider via a GPO

After you install Orca, deploy Credential Provider via a GPO:

1. Launch the **Group Policy Management** console by typing _gpmc.msc_ in the **Run** box and
   clicking **OK**. The Group Policy Management Editor opens.

    ![Group Policy Management console](/images/directorymanager/11.0/portal/user/manage/gp_policy.webp)

    :::note
    The Group Policy Management console is available if the Group Policy Management feature is
    installed.
    :::

2. Right-click the domain or organizational unit for the computers that you want the Credential
   Provider installed on. Select **Create a GPO in this domain, and link it here...**:

    ![Create a GPO in this domain and link it here option](/images/directorymanager/11.0/portal/user/manage/new_gpo.webp)

    Or

    Right-click **Default Domain Policy** and select **Edit**:

    ![Edit Default Domain Policy option](/images/directorymanager/11.0/portal/user/manage/edit_gpo.webp)

3. In the **Group Policy Management Editor**, click **Computer Configuration** > **Policies** >
   **Software Settings** > **Software installation** > **New** > **Package**.

    ![New Package option](/images/directorymanager/11.0/portal/user/manage/software_installation.webp)

    :::note
    These steps edit the default policy.
    :::

4. Browse to the shared folder. The folder must have the following files in it:

    - CPSettings.xml
    - Netwrixdirectorymanagercredentialprovider.msi
    - .mst file

    Select the _Netwrixdirectorymanagercredentialprovider.msi_ and click **OK**.

    ![Deploy Software dialog](/images/directorymanager/11.0/portal/user/manage/deploy_cp.webp)

5. Select **Advanced** and click **OK**. The following window opens:

    ![Modifications tab](/images/directorymanager/11.0/portal/user/manage/modification_tab.webp)

6. Select the **Modifications** tab and click **Add**.
7. Browse to the shared folder where you saved the generated .mst file. Select that file and click
   **OK**.
8. Close the Group Policy Management Editor.

Credential Provider is deployed on your machine via the default domain policy.

## Run the credential provider

1. Restart the machine, or run Command Prompt as administrator and enter the following command in
   the cmd window:
   `gpupdate /force`

## Run the credential provider on client machines

The modified domain policy is installed on the client machines in the scope of the Group Policy
Object when they next restart. The Windows logon screen appears as follows:

![Windows logon screen with Credential Provider links](/images/directorymanager/11.0/portal/user/manage/windows_screen.webp)

See Also

- [Directory Manager Credential Provider](/docs/directorymanager/11.0/credentialprovider/credentialprovider.md)
- [Uninstall Directory Manager Credential Provider](/docs/directorymanager/11.0/credentialprovider/uninstallcp.md)
