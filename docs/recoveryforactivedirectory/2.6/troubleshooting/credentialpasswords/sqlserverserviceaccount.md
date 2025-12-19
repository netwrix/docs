---
title: "Update SQL Server Service Account Password"
description: "Update SQL Server Service Account Password"
sidebar_position: 20
---

# Update SQL Server Service Account Password

Follow the steps to update the password for the SQL Server service account.

**Step 1 –** To launch the Recovery Configuration Utility, double-click the Recovery_Config.exe
executable at the following location in the Recovery for Active Directory installation directory:
`...Netwrix\Recovery for Active Directory\Recovery_Config.exe`

![  Recovery Configuration Utility](/images/recoveryforactivedirectory/2.6/install/configurationutility.webp)

**Step 2 –** Update the account password for SQL Server Authentication in the Login and Password
fields.

**Step 3 –** Click the **Test** button to validate the connection. On success, the following message
is displayed:

![Connection Test Successful](/images/recoveryforactivedirectory/2.6/troubleshooting/updatepassword/connectiontest.webp)

**Step 4 –** Click **OK**.

**Step 5 –** Once the connection has been established, click **Save** to update the account.

![Configuration Utility Saved Confirm](/images/recoveryforactivedirectory/2.6/troubleshooting/updatepassword/sqlsettings.webp)

**Step 6 –** Click **OK**.

The SQL Server service account password has been updated and saved.
