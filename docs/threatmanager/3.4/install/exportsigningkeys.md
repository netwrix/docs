---
title: "Export the JWT Signing Key to Another Host"
description: "Export the JWT signing key from the installer Welcome page to a one-time-code-protected file and import it on another host."
sidebar_position: 43
---

# Export the JWT Signing Key to Another Host

Use the installer's **Export Signing Keys** action to create a single-file `.exe` that carries the JWT signing key, encrypted with a one-time code. Run the file on another host to write the key to that host's registry.

## Prerequisites

- You installed Threat Manager, and a JWT signing key exists. See [JWT Signing Key](/docs/threatmanager/3.4/install/signingkey.md).
- You have Administrator rights on the host where you import the key.
- The other host has .NET Framework 4.7.2 or later.

## Export the key

**Step 1 –** Start the installer. The Welcome page shows the **Export Signing Keys** button only when you installed the product and a signing key exists.

**Step 2 –** Click **Export Signing Keys**. The **Export** page opens. It warns that the export file and the one-time code are secrets. The file has no code signature, so Windows or security software may warn about it.

**Step 3 –** In **Save the export file as:**, enter a file name or click **Browse...**. The default is `NTM-SigningKeys-<computer name>.exe` on the desktop. The name must end with `.exe`, and the folder must exist.

**Step 4 –** Complete the page. The Finish page shows a one-time code with **Copy code** and **Open folder** buttons.

**Step 5 –** Save the code now. The page says: "Save this code now. It is not stored anywhere and cannot be shown again. Send it to the person importing the keys over a different channel than the file."

## Import the key on the new host

**Step 1 –** Copy the exported `.exe` to the new host.

**Step 2 –** Run the file as an Administrator and enter the one-time code. The tool re-protects the key with that host's DPAPI and writes it to the registry with the same restricted access.

**Step 3 –** Restart the services.

## Limits

- Export has no command-line or silent equivalent.
- Copying the registry value to another host doesn't work, because DPAPI Local Machine binds the key to the machine.

## Troubleshooting

| Message | Cause |
| --- | --- |
| "The export tool was not found at '\{0\}'." | The export tool is missing. It installs under `<install folder>\Tools\RegistryValueTransfer\RegistryValueTransfer.exe`. |
| "Exporting the signing keys failed: \{0\}" | The export failed. The message gives the reason. |
