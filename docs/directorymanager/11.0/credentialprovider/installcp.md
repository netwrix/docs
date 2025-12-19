---
title: "Install GroupID Credential Provider"
description: "Install GroupID Credential Provider"
sidebar_position: 10
---

# Install GroupID Credential Provider

You can install GroupID Credential Provider in one of the following ways:

- [Install GroupID Credential Provider Manually](#install-groupid-credential-provider-manually)
- [Install GroupID Credential Provider via a Group Policy Object (GPO)](#install-groupid-credential-provider-via-a-group-policy-object-gpo)

### Install GroupID Credential Provider Manually

Browse to the folder where you have copied the package:

1. Click the _NetwrixdirectorymanagerCredentialprovider.msi_ file. The wizard opens and installs GroupID
   Credential Provider.
2. After the installation, it asks you to restart your machine.
3. After the restart, the Windows logon screen appears as follows:

    ![Windows Logon screen](/images/directorymanager/11.0/portal/user/manage/windows_screen.webp)

    The **Forgot Password** and **Unlock Account** options are now available on the Windows logon
    screen. They route you to the URLs provided for these options in the _CPSettings.xml_ file. You
    can modify the URLs as well as the text of these options.

    Let’s have a look at the settings which are available in the _CPsettings.xml_ file:

    - `<ForgetPasswordText value="Forget Password?" />`

        Provide the text for the ForgotPasswordText key. This text will appear on the Windows logon
        screen for the Forgot Password option.

    - `<UnlockAccountText value="Unlock Account" />`

        Provide the text for the UnlockAccountText key. This text will appear on the Windows logon
        screen for Unlock Account option.

    - `<ResetMyPasswordUrl value="https://MachineName:port/Portalname" />`

        Provide the URL to which you want to redirect the user to reset his/her forgotten password.

        - **For GroupID 10**:
          `https://MachineName:port/portalname`
        - **For GroupID 11**:
          `https://MachineName:port/portalname/Home/PasswordReset`

4. `<UnlockMyAccountUrl value="https://MachineName:port/Portalname" />`

    Provide the URL to which you want to redirect the user to unlock his/her locked account.

    - **For GroupID 10:** `https://MachineName:port/Portalname`
    - **For GroupID 11:** `https://MachineName:port/portalname/Home/UnlockAccount`

5. `<CPTitle value="Log on to: Netwrix GroupID" />`

    Provide the text for the CPTitle key. This text will appear as title under the Netwrix logo on
    the Windows logon screen.

## Install GroupID Credential Provider via a Group Policy Object (GPO)

Instead of installing Credential Provider manually on each individual client workstation, you can
distribute it for automatic installation using a GPO, for substantial time savings (especially with
larger networks). The GPO can be defined for an organizational unit or applied on the entire domain.
Credential Provider is installed automatically at the next Windows startup.

Installing Credential Provider is a two-step process:

1. [Install Orca](#install-orca)
2. [Deploy Credential Provider via a GPO](#deploy-credential-provider-via-a-gpo)

### Install Orca

Before Credential Provider’s installation via GPO, Orca software is to be installed:

1. Browse to the folder where you have copied the Credential Provider package.
2. Go to the MST Guide folder and run the _Orca-x86_en-us.msi_ application. The Orca console opens:

    ![Orca console](/images/directorymanager/11.0/portal/user/manage/orca_console.webp)

3. In Orca, click **File** > **Open**. Browse to the Netwrix GroupID Credential Provider folder and
   load the _NetwrixdirectorymanagerCredentialprovider.msi_ in Orca.

    ![Credential Provider in Orca](/images/directorymanager/11.0/portal/user/manage/cp_loaded.webp)

4. From the menu, select **Transform** > **New Transform**:

    ![New Transform option](/images/directorymanager/11.0/portal/user/manage/new_transform.webp)

5. Click **Property** in the left pane, list of the properties are displayed in the **Property**
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

10. Type a filename for the generated .mst file and save it into the shared folder you just created.
11. Close **Orca**.

### Deploy Credential Provider via a GPO

Having Orca successfully installed, follow these steps to deploy Credential Provider via a GPO.

1. Launch **Group Policy Management** console by typing _gpmc.msc_ in the **Run** box and clicking
   **OK**. The Group Policy Management Editor opens.

    ![Group Policy Management console](/images/directorymanager/11.0/portal/user/manage/gp_policy.webp)

    NOTE: Group Policy Management console is available if the Group Policy Management feature has
    been installed.

2. Right-click the domain or organizational unit for the computers that you want the Credential
   Provider installed on. Select **Create a GPO in this domain, and link it here...**:

    ![CCreate a GPO in this domain and link it here option](/images/directorymanager/11.0/portal/user/manage/new_gpo.webp)

    Or

    Right-click the Select **Default Domain Policy** and select **Edit**:

    ![Edit Default Domain Policy option](/images/directorymanager/11.0/portal/user/manage/edit_gpo.webp)

3. In the **Group Policy Management Editor**, click **Computer Configuration** > **Policies** >
   **Software Settings** > **Software installation** > **New** > **Package**.

    ![New Package option](/images/directorymanager/11.0/portal/user/manage/software_installation.webp)

    NOTE: This documentation describes steps for editing the default policy.

4. Browse to the shared folder. The folder must have the following files in it:

    - CPSettings.xml
    - Netwrixdirectorymanagercredentialprovider.msi
    - .mst file

    Select the _Netwrixdirectorymanagercredentialprovider.msi_ and click **Ok**.

    ![Deploy Software ](/images/directorymanager/11.0/portal/user/manage/deploy_cp.webp)

5. Select **Advanced** and click **Ok**. The following window opens:

    ![Modifications tab](/images/directorymanager/11.0/portal/user/manage/modification_tab.webp)

6. Select the **Modifications** tab. Click **Add**.
7. Browse to the shared folder where you saved the generated .mst file. Select that file and click
   **Ok**.
8. Close the Group Policy Management Editor.

The GroupID Credential provider is deployed on your machine via the default domain policy.

## Run the credential provider

1. Restart the machine
   or
   Run Command Prompt as administrator and type the following command in the cmd window:
   gpupdate /force

## Run the credential provider on client machines

The modified domain policy will be installed on the client machines, which are in the scope of the
Group Policy Object, upon their next restart. The Windows logon screen appear as follows:

![Windows Logon screen](/images/directorymanager/11.0/portal/user/manage/windows_screen.webp)

See Also

- [ GroupID Credential Provider](/docs/directorymanager/11.0/credentialprovider/credentialprovider.md)
- [Uninstall GroupID Credential Provider](/docs/directorymanager/11.0/credentialprovider/uninstallcp.md)
