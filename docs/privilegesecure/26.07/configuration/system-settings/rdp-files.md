---
title: "Configure and sign RDP files"
description: "Set RDP file options such as resolution and multi-monitor, and sign RDP files so Windows doesn't warn about an untrusted publisher."
sidebar_position: 50
---

# Configure and sign RDP files

When a user starts a Remote Desktop Protocol (RDP) session from Privilege Secure, the console downloads an RDP file. The **RDP Options** panel sets the display options in that file and the certificate that signs it.

Select **System Settings** > **RDP Options** to open the panel.

![The RDP Options panel with the default resolution, multi monitor, and smart sizing options and the certificate thumbprint field.](/images/privilegesecure/26.07/configuration/system-settings-rdp-options.webp)

## RDP options

| Option | Description | Default |
|---|---|---|
| **Default Resolution** | The resolution the session uses when it first connects. | 1440x900 |
| **Multi Monitor** | Select to let the session span multiple monitors. | Cleared |
| **Smart Sizing** | Select to scale the remote desktop to fit the client window. | Selected |
| **Certificate Thumbprint** | The thumbprint of the certificate that signs RDP files. | Empty |

**Default Resolution** offers these values: 640x480, 800x600, 1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1440x1050, 1680x1050, 1920x1080, 1920x1200, 1920x2058, 2560x1440, and **Full Screen**. With **Full Screen**, RDP tries to detect the client screen resolution and match it.

To change an option, edit it and click **Save**.

Privilege Secure writes the selected resolution into every RDP file that it generates, whether **Certificate Thumbprint** has a value or not. The signing step runs after the resolution is set.

{/* TODO verify: an internal report says that in 26.07 the Default Resolution setting has no effect on the client until Certificate Thumbprint has a value. The 26.07.3 web service code writes the resolution into the file before it signs, so the page doesn't state that limit. Test an unsigned RDP file in the Windows Remote Desktop client to see how it treats desktopwidth and desktopheight. */}

## Sign RDP files

RDP files that you download from Privilege Secure show as coming from an unknown publisher. To remove the warning, sign the files with a certificate and tell Windows to trust it.

### Prerequisites

- A certificate in the local computer certificate store on the Privilege Secure server. It can be the certificate that you use for the console.
- Permission to edit Group Policy for the client computers.
- The `IIS_IUSRS` account has read permission on the certificate's private key. Set the permission in `certlm.msc`. Without this permission, the web service log shows "Could not sign RDP file with certificate for RDP Session" with the error "Keyset does not exist", and the file isn't signed.

### Add the thumbprint to Privilege Secure

1. On the Privilege Secure server, open `certlm.msc`.
1. Open the certificate that signs RDP files.
1. Click the **Details** tab.
1. Copy the hexadecimal **Thumbprint** value.
1. In the console, select **System Settings** > **RDP Options**.
1. Paste the value in **Certificate Thumbprint**.
1. Click **Save**.

### Trust the certificate on client computers

The client computers need the SHA1 thumbprint in Group Policy, or the warning continues.

1. Open the Local Group Policy Editor, or the Group Policy Management Editor for a domain policy.
1. Go to **Computer Configuration** > **Administrative Templates** > **Windows Components** > **Remote Desktop Services** > **Remote Desktop Connection Client**. Don't expand the folder.
1. Double-click **Specify SHA1 thumbprints of certificates representing trusted .rdp publishers**.
1. Select **Enabled**.
1. In **Comma-separated list of SHA1 trusted certificate thumbprints**, paste the thumbprint. For example: `A1B2C3D4E5F60718293A4B5C6D7E8F9012345678`.
1. Click **Apply**, then **OK**.

Windows computers that receive the policy then trust the RDP file.

## Related topics

- [System settings reference](/docs/privilegesecure/26.07/configuration/system-settings/system-settings.md)
- [Replace the web console certificate](/docs/privilegesecure/26.07/configuration/certificates.md)
