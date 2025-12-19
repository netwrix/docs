---
title: "Configuration"
description: "Configuration"
sidebar_position: 30
---

# Configuration

Follow the steps below to configure your virtual appliance with Netwrix Privilege Secure.

**Step 1 –** Read and accept the EULA in the License terms page.

**Step 2 –** Specify a password for the built-in administrator account. The password should comply
to the following criteria:

- More than 20 characters long
- Not shared with any other account
- Well-protected in a physical or software manner (e.g., with a secure password manager)

**Step 3 –** Re-enter the password.

**Step 4 –** Click **Finish**.

**Step 5 –** Log in to the virtual machine.

**Step 6 –** The Windows PowerShell will start ad automatically run the configuration script.

Press any key to read the license agreement and then press **Y** to accept it.

You will be prompted to configure the virtual machine. Press Enter and follow the steps listed in
the table below:

|                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rename the virtual machine               | Specify a new name for the virtual machine (e.g.,NPSAM-Server). Consider the following: <ul><li>The name should be no longer than 15 characters</li><li>It may contain letters (a-z, A-Z), numbers (0-9), and hyphens (-). However, it cannot contain numbers only.</li><li>Spaces and periods (.) are not allowed</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Add additional input languages           | <ul><li>Select **Y** if you want to specify additional input languages</li><li>Select **N** to proceed with English</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Configure network                        | <ul><li>Select **Y** to configure network settings automatically using DHCP server</li><li>Select **N** to configure required parameters manually. In this case, you will have to specify IP settings manually.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Join computer to the domain or workgroup | <ul><li>Select **N** for Workgroup — this is a recommended scenario for domain or workgroup Netwrix Privilege Secure server.</li><li>Select **Y** for domain and specify FQDN (e.g., corp.local ). Then enter the domain administrator's name and password. <br />**NOTE:** As a security product, it is critical to ensure that access to the Netwrix Privilege Secure server is limited and controlled. As a security best practice, we strongly recommend that the virtual appliance is not joined to a domain. Otherwise, engage secure practices to ensure that domain administrator access to the virtual appliance is controlled and limited through group policy settings. See the next section for security best practices.</li></ul> |


**Step 7 –** When finished, you will be prompted to reboot the virtual machine for the changes to
take effect.

**Step 8 –** Login to the virtual machine and ensure date/time/time-zone are set correctly, and that
DNS is properly configured (forward and reverse lookup) to resolve all Active Directory domains and
network resources that are to be managed by Netwrix Privilege Secure.
