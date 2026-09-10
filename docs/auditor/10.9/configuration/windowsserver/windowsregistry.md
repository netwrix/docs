---
title: "Configure Windows Registry Audit Settings"
description: "Configure Windows Registry Audit Settings"
sidebar_position: 30
---

# Configure Windows Registry Audit Settings

Windows Registry audit permissions must be configured on each Windows server you want to audit so
that the “Who” and “When” values are reported correctly for each change. For test environment, PoC
or evaluation you can use automatic audit configuration. If you want to configure Windows Registry
manually, follow the instructions below.

The following audit permissions must be set to _"Successful"_ for the
`HKEY_LOCAL_MACHINE\SOFTWARE and HKEY_LOCAL_MACHINE\SYSTEM` keys:

- Set Value
- Create Subkey
- Delete
- Write DAC
- Write Owner

Follow the steps to configure Windows registry audit settings.

**Step 1 –** On your target server, open **Registry Editor**: navigate to **Start → Run** and type
_"regedit"_.

**Step 2 –** In the registry tree, expand the **HKEY_LOCAL_MACHINE** key, right-click **SOFTWARE**
and select **Permissions** from the pop-up menu.

**Step 3 –** In the **Permissions for SOFTWARE** dialog, click **Advanced**.

**Step 4 –** In the **Advanced Security Settings for SOFTWARE** dialog, select the **Auditing** tab
and click **Add**.

**Step 5 –** Click **Select a principal link** and specify the **Everyone** group in the **Enter the
object name to select** field.

**Step 6 –** Set **Type** to _"Success"_ and **Applies to** to _"This key and subkeys_.

**Step 7 –** Click **Show advanced permissions** and select the following access types:

- Set Value
- Create Subkey
- Delete
- Write DAC
- Write Owner

![Config_WS_AuditingEntry_2016](/images/auditor/10.7/configuration/windowsserver/manualconfig_ws_auditenrty_2016.webp)

Repeat the same steps for the `HKEY_LOCAL_MACHINE\SYSTEM` key.

Using Group Policy for configuring registry audit is not recommended, as registry DACL settings may
be lost.
