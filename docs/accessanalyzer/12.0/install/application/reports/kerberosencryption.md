---
title: "Manage Kerberos Encryption Warning for the Web Console"
description: "Manage Kerberos Encryption Warning for the Web Console"
sidebar_position: 20
---

# Manage Kerberos Encryption Warning for the Web Console

If a computer's Local Security Policy, or applicable Group Policy, enforces certain encryption
methods for Kerberos authentication, then the service account running the Access Analyzer Web Server
must support the same encryption methods.

If you configured encryption methods for Kerberos on the Access Analyzer server but not on the
service account running the Access Analyzer Web Server service, users won't be able to
log in to the Web Console and will receive the following error message.

![Kerberos Error Message](/images/accessanalyzer/12.0/install/application/reports/kerberoserrormessage.webp)

When this occurs, Access Analyzer logs the following error:

_ERROR - Unhandled server error: Nancy.RequestExecutionException: Oh noes! --->
System.Security.SecurityException: The encryption type requested isn't supported by the KDC_.

Access Analyzer logs this error in the following location:

**%SAINSTALLDIR%\SADatabase\Logs\Web\service.log**

While it isn't required to configure these settings, this section provides the locations and steps
necessary to configure encryption methods in Local and Group policies to allow Kerberos for the
Report Index if an error does occur.

## Local Security Policies

Configure a Local Security Policy to allow Kerberos.

**Step 1 –** Open the Local Security Policy window.

![Local Security Policy Window](/images/accessanalyzer/12.0/install/application/reports/localsecuritypolicywindow.webp)

**Step 2 –** From the Security Settings list, navigate to **Local Policies** > **Security Options**.

**Step 3 –** Right-click the **Network Security: Configure encryption types allows for Kerberos**
policy > click **Properties**.

![Configure Local Security Setting Window](/images/accessanalyzer/12.0/install/application/reports/configurelocalsecuritysettingwindow.webp)

**Step 4 –** Configure necessary settings by checking each applicable box.

**Step 5 –** Click **Apply**, then click **OK**.

You've now configured a Local Security Policy to allow encryption methods for Kerberos. Proceed to
the [Configure Active Directory Users and Computers Settings to allow Kerberos](#configure-active-directory-users-and-computers-settings-to-allow-kerberos)
section of this topic to ensure you configure Active Directory Users and Computer settings to allow
the encryption methods for Kerberos.

## Group Security Policy

Configure a Local Group Security Policy to allow Kerberos.

**Step 1 –** Open the Local Group Policy Editor window.

![Local Group Policy Editor window](/images/accessanalyzer/12.0/install/application/reports/localgrouppolicywindow.webp)

**Step 2 –** From the Local Computer Policy list, navigate to **Computer Configuration** > **Windows
Settings** > **Security Settings** > **Local Policies** > **Security Options** folder .

**Step 3 –** Right-click the **Network Security: Configure encryption types allows for Kerberos**
policy, then click **Properties**.

![Configure Local Security Setting Window](/images/accessanalyzer/12.0/install/application/reports/configurelocalsecuritysettingwindow.webp)

**Step 4 –** Configure necessary settings by checking each applicable box.

**Step 5 –** Click **Apply**, then click **OK**.

You've now configured a Local Group Security Policy to allow encryption methods for Kerberos.
Proceed to the
[Configure Active Directory Users and Computers Settings to allow Kerberos](#configure-active-directory-users-and-computers-settings-to-allow-kerberos)
section of this topic to ensure you configure Active Directory Users and Computer settings to allow
the encryption methods for Kerberos.

## Configure Active Directory Users and Computers Settings to allow Kerberos

Ensure you configure the settings for Active Directory Users and Computers to
allow the encryption methods for Kerberos. Configurations you select in this section should
reflect the configuration options you selected in the two preceding sections. See the
[Local Security Policies](#local-security-policies) and
[Group Security Policy](#group-security-policy) topics for additional information.

**Step 1 –** Open the Active Directory Users and Computers window.

![Active Directory Users and Computers Window](/images/accessanalyzer/12.0/install/application/reports/activedirectoryusersandcomputerswindows.webp)

**Step 2 –** Click and expand the Domain from the left-hand menu and click **Users**.

**Step 3 –** Right-click a **User** from the list of available users, then click **Properties**.

![User Properties Window](/images/accessanalyzer/12.0/install/application/reports/userproperteswindow.webp)

**Step 4 –** Click the **Account** tab.

**Step 5 –** Locate the appropriate Account options and check the corresponding boxes.

**Step 6 –** Click **Apply**, then click **OK**.

You've now configured Active Directory Users and Computer settings to allow the encryption methods
for Kerberos. These settings should match the configuration options for Local Security Policies and
Local Group Policies.
