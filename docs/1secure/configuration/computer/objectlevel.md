---
title: "Configure Object-Level Access Auditing"
description: "Configure Object-Level Access Auditing"
sidebar_position: 20
---

# Configure Object-Level Access Auditing

Netwrix 1Secure can be configured to audit all the access types mentioned below:

![Advanced Activity Selection options](/images/1secure/configuration/computer/objectlevelaccessaudit.webp)

## Configure Object-level Access Auditing on Windows Server 2012 and Above

Follow the steps to configure Object-level access auditing on Windows Server 2012 and above.

**Step 1 –** Navigate to the target file share, right-click it and select **Properties**.

**Step 2 –** In the `<Share_Name>` Properties dialog box, select the Security tab and click
**Advanced**.

**Step 3 –** In the Advanced Security Settings for `<Share_Name>` dialog box, navigate to the
Auditing tab.

![Advanced Security Settings for `<Share_Name>` dialog box](/images/1secure/configuration/computer/auditing_entries_netapp_2016.webp)

**Step 4 –** Click **Add** to add a new principal. You can select **Everyone** (or another
user-defined group containing users that are granted special permissions) and click **Edit**.

**Step 5 –** In the Auditing Entry for `<Folder_Name>` dialog box, click the **Select a principal**
link and specify **Everyone**.

:::note
You can specify any other group as needed. The product will audit only user accounts that
are members of the selected group.
:::


**Step 6 –** Apply settings to your Auditing Entries depending on the access types you want to
audit. If you want to audit all access types, you need to add separate Auditing Entries for each
file share. Otherwise, reports will contain limited data and warning messages.
