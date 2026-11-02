---
title: "Licensing Page"
description: "Licensing Page"
sidebar_position: 30
---

# Licensing Page

The Licensing page of the System Settings interface displays license information. Threat
Manager comes with a temporary trial license.

{/* TODO: confirm the trial license length in code. */}

Threat Manager deletes the bundled trial key file (`{ProductName}_Trial.key`) only after the key
activates. If activation fails, the file stays in place, and Threat Manager keeps the existing
license information until the next activation. A ReportOnly install doesn't activate or use the bundled trial key, so a later
upgrade to Full still gets a trial period.

![System Settings interfaces on the Licensing page](/images/threatmanager/3.0/administration/configuration/systemsettings/licensing.webp)

The License Info section displays the following:

- Customer Info – Name of the licensed customer
- Type – Type of license
- Expires – Expiration date

The License section provides a method for importing a new license.

If the license is missing or expired, an alert banner displays under the navigation
header.

## Import License

To import a license key file:

![License section of the Licensing page](/images/threatmanager/3.0/administration/configuration/systemsettings/licensingbrowse.webp)

**Step 1 –** On the License page of the System Settings interface, click Browse. The Add New
Integration window opens.

**Step 2 –** Locate the **License Key File** in the File Explorer and click **Open**. The File
Explorer closes and returns to the console.

Threat Manager now imports the License Key. The License Info section at the top of
the page displays the license information.

If Netwrix rejects the license, the page keeps the current license and shows the error in red. It
doesn't show "Installed license." Reloading the page doesn't change the installed license.

Threat Manager keeps existing license aliases until activation succeeds, so a failed or repeated activation doesn't remove license information.

Uploading a license requires the ShowConfiguration permission, and the console audits it as
LicenseUpdated. A rejected upload returns HTTP 400 with the license information and its error
message.

## Troubleshoot License Errors

The Licensing page shows one of these messages when a license fails to install:

| Message | Cause |
|---|---|
| `The license key has expired. Contact Netwrix to get a new license key.` | The key is expired. |
| `The license key is invalid. Make sure you selected the correct license key file.` | The key file is invalid. |
| `The license could not be installed because the existing license file is corrupted. Contact Netwrix support for assistance.` | Activation failed with "License activation error 2". |
| `The license could not be installed. {original message}` | Any other activation error. Threat Manager also writes the original message to the License Service log. |
| `The license could not be installed. See the License Service log for details.` | Any other activation error with no message available. |

If the server returns no message, the page shows "Error installing license."

