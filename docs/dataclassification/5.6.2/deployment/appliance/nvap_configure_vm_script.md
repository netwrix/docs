---
title: "Configure Virtual Appliance"
description: "Configure Virtual Appliance"
sidebar_position: 60
---

# Configure Virtual Appliance

Follow the steps below to configure your virtual appliance with Netwrix Data Classification.

1. For Windows Server, the EULA will be displayed in the License terms page; read and accept the
   agreement.
2. Next, specify a password for the built-in administrator account. Then re-enter your password.
   Click Finish.
3. Log in to the virtual machine.
4. The Windows PowerShell opens and automatically runs the script. Press any key to read the license
   agreement and then press `Y` to accept it. Then you will be prompted to configure the virtual
   machine. Press Enter to start.

    | Step                                     | Description                                                                                                                                                                                                                                                                                                        |
    | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Rename virtual machine                   | Specify a new name for the virtual machine (e.g., _`NDC-Server`_). **NOTE:** The computer name must be properly formatted. It may contain letters (a-z, A-Z), numbers (0-9), and hyphens (-), but no spaces and periods (.). The name may not consist entirely of digits and may not be longer than 15 characters. |
    | Add additional input languages           | - Select `Y` if you want to specify additional input languages. - Select `N` to proceed with English.                                                                                                                                                                                                              |
    | Configure network                        | - Select `Y` to use DHCP server to configure network settings automatically. - Select `N` to configure required parameters manually. In this case, you will be prompted to set up IP settings manually.                                                                                                            |
    | Join computer to the domain or workgroup | - Select `Y`. Specify the fully qualified domain name to join (e.g., `corp.local`). Then specify domain administrator name and password. - Select `N`. Specify the local administrator name and credentials.                                                                                                       |

5. When the script execution completes, you will be prompted to reboot the virtual machine for the
   changes to take effect.
6. After reboot, log in to the virtual machine using the domain administrator credentials (for
   appliances joined to domain) or local administrator credentials (for appliances joined to
   workgroup).

    **NOTE:** Wait until virtual appliance configuration completes.

    For the first time, administrative web console starts automatically. Later, you can always open
    a web browser and navigate to the following URL: _http://localhost/conceptQS_.

7. Add license:

    1. In administrative web console, when prompted to start trial period, select No.
    2. Select Load license atop of the window.
    3. On the Licenses page that opens, click Add on the right and specify license details.
