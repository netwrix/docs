---
title: "Creating the Secret Key"
description: "Creating the Secret Key"
sidebar_position: 10
---

# Creating the Secret Key

On the Computer side of the GPO, use the Endpoint Policy Manager (formerly PolicyPak) Least
Privilege Manager node to create a new Admin Approval Policy.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/creating_the_secret_key.webp)

You’ll now see the Admin Approval Settings, as shown in here. Change the Admin Approval State from
**Not Configured** to **Enabled**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/creating_the_secret_key_1.webp)

You also can change two other settings:

- Secure Desktop - Endpoint Policy Manager Admin Approval Dialog will present itself by default on
  the Windows Secure Desktop. You can change this behavior here.
- Approval with Admin Creds - Endpoint Policy Manager Admin Approval Dialog may be bypassed when an
  admin (like yourself) is physically present or remote controlling the machine and you wish to
  overcome the dialog.

Next, click on the **Secret Key** tab. Here is where you can create a secret key by choosing either
**Derive from Password** or **Generate Random**. Then, click **Copy**, and paste the secret key into
Notepad.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/creating_the_secret_key_2.webp)

Click on the **Misc** tab, which enables you to configure the two policies shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/creating_the_secret_key_3.webp)

- Custom Message - Configure the pop-up the user will see when Admin Approval kicks in.
- Display name - Configure the right-click menu item the user will which will invoke Admin Approval.
- Installers - Determine if an application is an installer, such as an MSI, or a setup program that
  installs applications.

  - When **Enforce Admin Approval for all installers** is set, and an install routine is detected
    (MSI or non-MSI), the user will be prompted for admin approval so that the program can run as
    Admin. When this option is enabled, installers of all types, including Dropbox, Zoom Meetings,
    web browsers, and so on, are prevented from being installed without Admin Approval.
    Additionally, for installers like iTunes, this setting is required because iTunes starts by
    running an MSI, and then has other processes that must be detected as install routines (which
    require their own approvals) to succeed.
  - When this is configured to **Do not enforce Admin Approval for installers**, only items that
    are specifically requesting elevation will prompt for Admin Approval, not every MSI or other
    installation routine (which may not specifically request elevation).
  - When this setting is set to **Not Configured**, other policies could control this setting;
    hence, there are no changes because of this GPO/policy.

This setting should be set to **Enforce Admin Approval for all installers**. Click **OK** to save
the Admin Approval policy, which will appear on the Computer side of Endpoint Policy Manager Least
Privilege Manager within the GPO.



