---
description: >-
  Explains the Active Directory tombstoneLifetime attribute, how it affects
  object restore, and how to change it using ADSI Edit. Also explains how to
  align Netwrix Auditor Long-Term Archive retention with the tombstone lifetime.
keywords:
  - tombstoneLifetime
  - Active Directory
  - AD tombstones
  - object restore
  - Long-Term Archive
  - ADSI Edit
  - Netwrix Auditor
  - tombstone lifetime
products:
  - auditor
sidebar_label: 'What is "tombstoneLifetime" attribute and what is '
tags: []
title: What is "tombstoneLifetime" attribute and what is it used for?
knowledge_article_id: kA00g000000H9UDCA0
---

# What is "tombstoneLifetime" attribute and what is it used for?

You can restore deleted Active Directory objects and their attributes using the **Netwrix Auditor Object Restore for Active Directory** tool integrated with Netwrix Auditor. The tool finds the information on deleted objects in the product snapshots (this data is stored in the **Long-Term Archive**, local file-based storage of audit data), and in **AD tombstones**.

To be able to restore deleted AD objects, you must adjust the AD tombstone lifetime property (set by default to `60` days in Windows 2003 and to `180` in Windows 2008 and above). Netwrix recommends setting it to 2 years (`730` days). For example, if you change both values to `365` days, you will only be able to restore objects that were deleted within this period. You can specify any number of days, but a selected value should not exceed the Long-Term Archive retention period. Take into consideration that increasing `tombstone` lifetime may affect Active Directory performance and operability.

## To adjust the `tombstoneLifetime` attribute, perform the following steps:

NOTE: To perform this procedure, you will need the ADSI Edit utility. In Windows 2003 systems, this utility is a component of Windows Server Support Tools. If it has not been installed, download Windows Server Support Tools from the official website. On Windows 2008 systems and above, this component is installed together with the AD DS role.

1. Navigate to **Start** -> **Programs** -> **Administrative Tools** -> **ADSI Edit**.
2. Right-click the **ADSI Edit** node and select the **Connect To** option. In the **Connection Settings** dialog, enable the **Select a well-known Naming Context** option and select **Configuration** from the drop-down list.
3. In the left pane, navigate to `Configuration <You_Root_Domain_Name>` -> `CN=Configuration` -> `CN=Services` -> `CN=Windows NT` -> `CN=Directory Service` node. Right-click it and select **Properties**.
4. In the **CN=Directory Service Properties** dialog, in the **Attribute Editor** tab, locate the `tombstoneLifetime` attribute.
5. Select this attribute and click the **Edit** button.
6. Set this attribute to any desired value (in days).

## To modify the Long-Term Archive retention setting, perform the following steps:

1. In Netwrix Auditor, navigate to the **Settings** node and select **Long-Term Archive**.
2. Under **Keep audit data for:** enter the value (in months) that corresponds to your tombstone lifetime attribute setting.

> **NOTE:** All data older than the specified value will be deleted automatically on next data collection.
