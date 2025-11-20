---
title: "Set and Manage the Uninstallation Password for Endpoint Policy Manager Client-Side Extension"
description: "Set and Manage the Uninstallation Password for Endpoint Policy Manager Client-Side Extension"
sidebar_position: 210
---

# Set and Manage the Uninstallation Password for Endpoint Policy Manager Client-Side Extension

Starting with CSE 25.2, the Endpoint Policy Manager Client-Side Extension (CSE) Installer includes
new command-line options that allow administrators to set and update an uninstallation password.
This ensures that CSE can only be uninstalled with the correct password, adding an extra layer of
protection.

:::warning
This feature is not strictly considered to be a security feature, but rather another
layer of uninstallation protection. If someone is a local administrator on the machine or provided
admin rights to certain tools via Endpoint Policy Manager Least Privilege Manager (or similar), they
may be able to work around the password.
:::


:::note
At the end of this topic, there is an explanation of how a true local administrator on the
machine is authorized to uninstall the CSE without a password for emergency purposes. However, this
may be exploited by any local administrator or those with admin-like rights when a tool like
Endpoint Policy Manager Least Privilege Manager is used.
:::


Based on the information in this guide, you can determine if the password uninstall mechanism is
enough for your company and should be used or not.

This guide explains how to:

- Set an uninstallation password during installation
- Update or repair an existing installation with a new password
- Uninstall CSE when a password has been set

Tips

- If a password is provided, but it cannot be saved to the registry, the installation will be
  interrupted with an error
- Password protection is optional. No password is required.
- If no password is provided, CSE upgrade will install normally without requiring an uninstall
  password

## Set an Uninstallation Password During Installation

An uninstallation password can be specified at the time of installation using the `UNPASSWORD`
command-line option.

Example Password

If you use the password “HelloWorld” and Base64 encrypt it, you will get `SGVsbG9Xb3JsZA==` as the
result. You can use an encoder like [Base64 Encode](https://www.base64encode.org/), shown below.

![base64format](/images/endpointpolicymanager/troubleshooting/clientsideextension/base64format.webp)

Example Use of the Feature

- `msiexec /i "PolicyPak Client-Side Extension x64.msi" UNPASSWORD=SGVsbG9Xb3JsZA==`
- The password must be provided as a Base64-encoded string
- If a password is set, CSE cannot be uninstalled without providing the same password

See the interactive example shown in the screenshot.

![csewizard](/images/endpointpolicymanager/troubleshooting/clientsideextension/csewizard.webp)

If you try to uninstall the CSE by hand without a password, the following error message is
displayed.

![cseuninstallpw](/images/endpointpolicymanager/troubleshooting/clientsideextension/cseuninstallpw.webp)

## Uninstall CSE When a Password Is Set

If an uninstallation password was configured, it must be provided during the uninstall process.

Example Command

`msiexec /x "PolicyPak Client-Side Extension x64.msi" UNPASSWORD=SGVsbG9Xb3JsZA==`

![csepassword](/images/endpointpolicymanager/troubleshooting/clientsideextension/csepassword.webp)

Uninstallation Rules

- If the correct password is provided, CSE is uninstalled successfully
- If the wrong password is provided, the uninstallation fails with an error, and CSE remains
  installed
- If no password was set originally, CSE can be uninstalled normally without requiring `UNPASSWORD`
- If a password was set but `UNPASSWORD` is not provided in the command, the uninstallation fails
  with an error

## Update or Repair an Existing Installation

The uninstallation password can be updated or repaired by using both `UNPASSWORD` (current password)
and `NEWUNPASSWORD` (new password) in the installer command.

Example Command

`msiexec /i "PolicyPak Client-Side Extension x64.msi" UNPASSWORD=SGVsbG9Xb3JsZA== NEWUNPASSWORD=SGVsbG9Xb3JsZEFnYWlu`

Update Rules

- If `UNPASSWORD` matches the existing saved password, the password is updated to `NEWUNPASSWORD`
- If `NEWUNPASSWORD` is missing or cannot be saved, the installation fails with an error
- If `UNPASSWORD` and `NEWUNPASSWORD` are the same, the update is considered successful with no
  changes made
- If an incorrect `UNPASSWORD` is provided, the installation fails with an error
- If no `UNPASSWORD` is provided, but a password was set during installation, the update fails with
  an error
- If no password was previously set, and `NEWUNPASSWORD` is provided, the new password is saved as
  the uninstallation password

Storage and Security

The password is encrypted and stored in the Windows Registry at:

`HKEY_LOCAL_MACHINE\SOFTWARE\PolicyPak\Config\CSE\Installer`

Registry value details

- Type — REG_BINARY
- Name — UninstallPassword

The password is encrypted with the Windows Data Protection API (DAPI) and not in plain text.

![editbinary](/images/endpointpolicymanager/troubleshooting/clientsideextension/editbinary.webp)

This registry key is protected and accessible only by Administrators and the Local System account.
The password cannot be copied to another machine. If the registry value is transferred, CSE will not
recognize it on a different system.

## Emergency Uninstallation without Password

As an emergency method of uninstallation, you may use the Endpoint Policy Manager ADMX
Troubleshooting files which contains a policy named “Force disable uninstall password”.

See the [Troubleshooting with ADMX files](/docs/endpointpolicymanager/gettingstarted/misc/videos/troubleshooting/admxfiles.md) topic for
additional information about the ADMX troubleshooting files.

When this ADMX setting is set locally or targeted to a machine, the CSE will uninstall without a
password.

![disableuninstallpw](/images/endpointpolicymanager/troubleshooting/clientsideextension/disableuninstallpw.webp)

:::warning
Again as stated in the introduction of this document, someone with access rights to
change the KHLM part of the registry or use the Endpoint Policy Manager ADMX files could circumvent
the password previously set earlier.
:::


## Conclusion

- The ability to set, update, and enforce an uninstallation password provides additional layer for
  CSE deployments.
- Administrators should carefully manage passwords to ensure seamless management and prevent
  unauthorized removals.

:::tip
Remember, anyone with full admin rights (or ability to use the Endpoint Policy Manager ADMX
settings) can circumvent the password set on the machine.
:::

