---
title: "Application Service Account"
description: "Application Service Account"
sidebar_position: 20
---

# Application Service Account

The Windows service account running the Netwrix Auditor Access Reviews service may be used as the
Database service account, the Active Directory service account, and/or the SMTP authentication
account. Check the Database, Active Directory, and Notification pages in the Configuration interface
to confirm where the account is in use before modifying it to ensure these functionality are not
impaired. If the same account is being used for multiple purposes, it will require the proper
permissions for each purpose.

It may become necessary (for testing purposes, infrastructure changes, etc.) to change the Windows
account set to run the Netwrix Auditor Access Reviews service. The following step-by-step
instructions are for modifying this account within the Services Control Manager console.

**CAUTION:** The account assigned to run the Netwrix Auditor Access Reviews service must have Full
Control over the installation directory:

...\Netwrix\Access Reviews

## Modify the Service Account via Service Control Manager

Follow the steps to enable and/or modify the Windows service account running the Netwrix Auditor
Access Reviews service.

**Step 1 –** Navigate to Service Control Manager (`services.msc`). The Services Control Manager
opens.

![Services Manager Console showing the Netwrix Access Information Center service and the right-click Menu](/images/auditor/10.7/access/reviews/admin/troubleshooting/servicesmanager.webp)

**Step 2 –** Right-click on the Netwrix Auditor Access Reviews service and select **Properties**.
The service Properties window opens.

![Netwrix Access Information Center service Properties window with Select User browser window](/images/auditor/10.7/access/reviews/admin/troubleshooting/serviceproperties.webp)

**Step 3 –** On the **Log On** tab, select the **This account** radio button. Enter the account name
using NTAccount format [```DOMAIN\username```]. Optionally, use the **Browse** button to search for
the account. Enter the account's password in both the **Password** and **Confirm password** fields.
Then click **OK**. The Properties window closes.

**Step 4 –** The selected account is displayed in the Log On As column for the service. Either
Restart or Stop and Start the service for this change to take affect.

The Netwrix Auditor Access Reviews service is now running with the supplied Windows account.
