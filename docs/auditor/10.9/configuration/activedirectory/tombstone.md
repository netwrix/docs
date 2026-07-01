---
title: "Adjust Active Directory Tombstone Lifetime (optional)"
description: "Adjust Active Directory Tombstone Lifetime (optional)"
sidebar_position: 90
---

# Adjust Active Directory Tombstone Lifetime (optional)

You can restore deleted Active Directory objects and their attributes using the Netwrix Auditor
Object Restore for Active Directory tool shipped with Netwrix Auditor. The tool finds the
information on deleted objects in the product snapshots (this data is stored in the Long-Term
Archive, a local file-based storage of audit data) and AD tombstones.

To be able to restore deleted Active Directory objects longer, increase the **Active Directory
tombstone lifetime** property (set by default to 180 days). Netwrix recommends setting it to 2 years
(**730 days**). You can specify any number of days, but a selected value should not exceed the
Long-Term Archive retention period.

Take into consideration that increasing tombstone lifetime may affect Active Directory performance
and operability.

To perform this procedure, you will need the
[ADSI Edit](http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx) utility.utility.

Follow the steps to change the tombstone lifetime attribute.

**Step 1 –** On any domain controller in the target domain, navigate to Start > Windows
Administrative Tools **> ADSI Edit**.

**Step 2 –** Right-click the **ADSI Edit** node and select **Connect To**. In the **Connection
Settings** dialog, enable **Select a well-known Naming Context** and select **Configuration** from
the drop-down list.

![manualconfig_adsi_connectionwinserver2016](/images/1secure/configuration/ad/manualconfig_adsi_connectionwinserver2016.webp)

**Step 3 –** Navigate to **Configuration `<Your_Root_Domain_Name>` →
CN=Configuration,DC=`<name>`,DC=`<name>` → CN=Services → CN=Windows NT → CN=Directory Service**.
Right-click it and select **Properties** from the pop-up menu.

**Step 4 –** In the **CN=Directory Service Properties** dialog, locate the **tombstoneLifetime**
attribute in the **Attribute Editor** tab.

![manualconfig_adsi_tombstone_winserver2016](/images/auditor/10.7/configuration/activedirectory/manualconfig_adsi_tombstone_winserver2016.webp)

**Step 5 –** Click **Edit**. Set the value to _"730"_ (which equals 2 years).
