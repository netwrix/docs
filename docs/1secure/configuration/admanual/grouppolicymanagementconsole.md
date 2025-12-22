---
title: "Group Policy Management Console"
description: "Group Policy Management Console"
sidebar_position: 80
---

# Group Policy Management Console

Group Policy Management Console is an administrative tool for managing Group Policy across the
company. If you want to audit Group Policy, Group Policy Management Console must be installed on the
computer where Netwrix Cloud Agent resides.

Follow the steps to install GPMC on Windows Server 2012 and above.

1. Navigate to **Start** > **Control Panel** > **Programs and Features** > **Turn Windows features
   on or off**.
2. In the **Add Roles and Features Wizard** dialog that opens, proceed to the **Features** tab in
   the left pane, and then select **Group Policy Management**.
3. Click **Next** to proceed to confirmation page.
4. Click **Install** to enable it.

Follow the steps to install GPMC on Windows 8.1 and Windows 10.

1. Depending on your OS, download and install Remote Server Administrator Tools that include Group
   Policy Management Console.

    - [Windows 8.1](http://www.microsoft.com/en-us/download/details.aspx?id=39296)
    - [Windows 10](https://www.microsoft.com/en-us/download/details.aspx?id=45520)

2. Navigate to **Start** > **Control Panel > Programs and Features** > **Turn Windows features on or
   off**.
3. Navigate to **Remote Server Administration Tools** > **Feature Administration Tools** and select
   **Group Policy Management Tools**.
