---
title: "Configure Windows Registry Audit Settings"
description: "Configure Windows Registry Audit Settings"
sidebar_position: 80
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

Perform one of the following procedures depending on the OS version:

- Configuring Windows registry audit settings on pre-Windows Server 2012 versions
- Configuring Windows registry audit settings on Windows Server 2012 and above

## Configuring Windows registry audit settings on pre-Windows Server 2012 versions

**Step 1 –** On your target server, open **Registry Editor**: navigate to **Start → Run** and type
_"regedit"_.

**Step 2 –** In the registry tree, expand the **HKEY_LOCAL_MACHINE** key, right-click **SOFTWARE**
and select **Permissions** from the pop-up menu.

**Step 3 –** In the **Permissions for SOFTWARE** dialog, click **Advanced**.

**Step 4 –** In the **Advanced Security Settings for SOFTWARE** dialog, select the **Auditing** tab
and click **Add**.

**Step 5 –** Select the **Everyone** group.

**Step 6 –** In the **Auditing Entry for SOFTWARE** dialog, select _"Successful"_ for the following
access types:

- **Set Value**
- **Create Subkey**
- **Delete**
- **Write DAC**
- **Write Owner**

![ManualConfig_WS_AuditingEntry2008](/images/1secure/configuration/windowsserver/manualconfig_ws_auditenrty2008.webp)

Repeat the same steps for the `HKEY_LOCAL_MACHINE\SYSTEM` key.

## Configuring Windows registry audit settings on Windows Server 2012 and above

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

![Config_WS_AuditingEntry_2016](/images/1secure/configuration/windowsserver/manualconfig_ws_auditenrty_2016.webp)

Repeat the same steps for the `HKEY_LOCAL_MACHINE\SYSTEM` key.

Using Group Policy for configuring registry audit is not recommended, as registry DACL settings may
be lost.
