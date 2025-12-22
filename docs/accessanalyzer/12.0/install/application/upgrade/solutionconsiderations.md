---
title: "Solution Upgrade Considerations"
description: "Solution Upgrade Considerations"
sidebar_position: 10
---

# Solution Upgrade Considerations

The following items must be taken into consideration for upgrades:

**Access Information Center**

- Should be upgraded at the same time as Access Analyzer.

    :::note
    The Access Analyzer upgrade should be completed first.
    :::


See the Upgrade Procedure for Access Analyzer topic in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)[ ](https://www.stealthbits.com/jdownloads/Documentation%20User%20Guides%20PDF/Stealthbits_AIC_InstallConfigGuide.pdf)for
instructions.

**Sensitive Data Discovery**

- In Access Analyzer 12.0 the Sensitive Data Discovery features are included in the standard
  installations when your license includes it. If you have the old Sensitive Data Discovery Add-On
  installed from a previous Access Analyzer version, then you must manually uninstall it from the
  Access Analyzer Console server, and any File System proxy and SharePoint Agent servers where it is
  installed, before proceeding with the upgrade.

    :::warning
    The new global settings will overwrite any previously configured criteria. Make a
    note of any configured Sensitive Data Criteria before upgrading Access Analyzer. Sensitive Data
    Criteria must be reconfigured after an upgrade.
    :::


- Sensitive Data Criteria selection is configured globally and used by default in all solution sets.
  See the [Configure Global Sensitive Data Settings](#configure-global-sensitive-data-settings) for
  additional information.

**Active Directory Solution Considerations**

- The Active Directory solution by default upgrades as **Upgrade in Place**. Do not change this
  upgrade option. After completing the upgrade, you need to manually add the new **Active
  Directory** > **7. Certificate Authority** job group from the `InstantSolutions` directory.
- For Activity – Ensure the Netwrix Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

**File System Solution Considerations**

- For Proxy Mode as a Service – File System Proxy Service needs to be updated on the proxy servers.
  See the [Upgrade Proxy Service Procedure](/docs/accessanalyzer/12.0/install/filesystemproxy/upgrade.md) topic for
  instructions.
- For Activity – Ensure the Netwrix Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

**SharePoint Solution Considerations**

- For SharePoint Agent – Access Analyzer SharePoint Agent needs to be updated on the SharePoint
  server where it was installed. See the
  [Upgrade SharePoint Agent](/docs/accessanalyzer/12.0/install/sharepointagent/upgrade.md) section for instructions.
- For Activity – Ensure the Stealthbits Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

The following binary component versions are required for Access Analyzer v12.0:

| Component                        | Version |
| -------------------------------- | ------- |
| Access Information Center        | 12.0    |
| Netwrix Activity Monitor         | 8.0     |
| File System Proxy Service        | 12.0    |
| Access Analyzer SharePoint Agent | 12.0    |

## File System Solution Upgrade

After upgrading to Access Analyzer 12.0, run the latest version of the **File System** >
**0.Collection** > **0-Create Schema** job to migrate the File System Solution to the latest
database schema.

This database schema migration should be performed before running other jobs in the File System
Solution after upgrading to Access Analyzer 12.0.

See the [File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/overview.md) topic for additional
information.

## Configure Global Sensitive Data Settings

:::warning
The new global Settings will overwrite any previously configured criteria. Make a note
of any configured Sensitive Data Criteria before commencing the upgrade Access Analyzer. Sensitive
Data Criteria must be reconfigured after an upgrade.
:::


If Sensitive Data Criteria are configured differently for each solution, re-configure the criteria
selection at the solution level. See the topic for the applicable solution for additional
information.

If the same Sensitive Data Criteria are used for all solutions, configure the criteria selection at
the global **Settings** > **Sensitive Data** node, which will then be used by default in all
solutions. The Sensitive Data node provides configuration options to manage Sensitive Data Criteria
and false positive exclusion filters. See the
[Sensitive Data](/docs/accessanalyzer/12.0/admin/settings/sensitivedata/overview.md) topic for additional
information.

Follow the steps to configure Sensitive Data Criteria at the global level.

![Global Settings Sensitive Data node](/images/accessanalyzer/12.0/install/application/upgrade/sensitivedata.webp)

**Step 1 –** If the same Sensitive Data Criteria are used for all solutions, configure the criteria
selection at the global Settings level, which will then be used by default in all solution sets.
Navigate to the **Settings** > **Sensitive Data** node and click **Add** to open the Select Criteria
window.

![Sensitive Data Select Criteria window](/images/accessanalyzer/12.0/install/application/upgrade/selectcriteria.webp)

**Step 2 –** Select the desired criteria. Use the **Search Criteria** text field to filter the list
using keywords or expand each category to view and select individual Sensitive Data search criteria,
then click **OK**.

By default, Sensitive Data Criteria configured at the global Settings level is inherited down to the
applicable solutions.
