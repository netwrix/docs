---
title: "Solution Upgrade Considerations"
description: "Solution Upgrade Considerations"
sidebar_position: 10
---

# Solution Upgrade Considerations

Consider the following items for upgrades:

**Access Information Center**

- Upgrade it at the same time as Enterprise Auditor.

    :::note
    Complete the Enterprise Auditor upgrade first.
    :::


See the Upgrade Procedure for Enterprise Auditor topic in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)[ ](https://www.stealthbits.com/jdownloads/Documentation%20User%20Guides%20PDF/Stealthbits_AIC_InstallConfigGuide.pdf)for
instructions.

**Sensitive Data Discovery Add-on**

- Update it on all servers where you installed it. See the
  [Upgrade Sensitive Data Discovery Add-on](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/upgrade.md)
  topic for instructions.

    :::warning
    The new global Settings will overwrite any previously configured criteria. Make a
    note of any configured Sensitive Data Criteria before upgrading Enterprise Auditor. You must
    reconfigure Sensitive Data Criteria after an upgrade.
    :::

With the new global experience, you configure sensitive data criteria selection globally, and
Enterprise Auditor uses it by default in all solution sets. See the
[Configure Global Sensitive Data Settings](#configure-global-sensitive-data-settings) for additional
information.

**Active Directory Solution Considerations**

- For Activity – Ensure the Netwrix Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

**File System Solution Considerations**

- For Proxy Mode as a Service – Update the File System Proxy Service on the proxy servers.
  See the
  [Upgrade Proxy Service Procedure](/docs/accessanalyzer/11.6/install/filesystemproxy/upgrade.md)
  topic for instructions.
- For Activity – Ensure the Netwrix Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

**SharePoint Solution Considerations**

- For SharePoint Agent – Update the Enterprise Auditor SharePoint Agent on the SharePoint
  server where you installed it. See the
  [Upgrade SharePoint Agent](/docs/accessanalyzer/11.6/install/sharepointagent/upgrade.md)
  section for instructions.
- For Activity – Ensure the Stealthbits Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

The following binary component versions are required for Enterprise Auditor v11.6:

| Component                           | Version |
| ----------------------------------- | ------- |
| Access Information Center           | 11.6    |
| Netwrix Activity Monitor            | 8.0     |
| File System Proxy Service           | 11.6    |
| Sensitive Data Discovery Add-on     | 11.6    |
| Enterprise Auditor SharePoint Agent | 11.6    |

## File System Solution Upgrade

After upgrading to Enterprise Auditor 11.6, run the latest version of the **File System** >
**0.Collection** > **0-Create Schema** job to migrate the File System Solution to the latest
database schema.

Perform this database schema migration before running other jobs in the File System
Solution after upgrading to Enterprise Auditor 11.6.

See the
[File System Solution](/docs/accessanalyzer/11.6/solutions/filesystem/overview.md)
topic for additional information.

## Configure Global Sensitive Data Settings

:::warning
The new global Settings will overwrite any previously configured criteria. Make a note
of any configured Sensitive Data Criteria before upgrading Enterprise Auditor.
You must reconfigure Sensitive Data Criteria after an upgrade.
:::


If you configured Sensitive Data Criteria differently for each solution, re-configure the criteria
selection at the solution level. See the
[Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/sensitivedatadiscovery/overview.md)
topic and the topic for the applicable solution for additional information.

If you use the same Sensitive Data Criteria for all solutions, configure the criteria selection at
the global **Settings** > **Sensitive Data** node; Enterprise Auditor then uses it by default in all
solutions. See the
[Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/sensitivedatadiscovery/overview.md)
topic for additional information.

To configure Sensitive Data Criteria at the global level:

**Step 1 –** The Sensitive Data node provides configuration options to manage sensitive data
criteria and false positive exclusion filters. These settings require the Sensitive Data Discovery
Add-on. See the
[Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/sensitivedatadiscovery/overview.md)
topic for additional information.

![Global Settings Sensitive Data node](/images/accessanalyzer/11.6/install/application/upgrade/sensitivedata.webp)

**Step 2 –** If you use the same Sensitive Data Criteria for all solutions, configure the criteria
selection at the global Settings level; Enterprise Auditor then uses it by default in all solution
sets.
Navigate to the **Settings** > **Sensitive Data** node and click **Add** to open the Select Criteria
window.

![Sensitive Data Select Criteria window](/images/accessanalyzer/11.6/install/application/upgrade/selectcriteria.webp)

**Step 3 –** Select the criteria you want. Use the **Search Criteria** text field to filter the list
using keywords or expand each category to view and select individual Sensitive Data search criteria,
then click **OK**.

By default, Enterprise Auditor applies Sensitive Data Criteria configured at the global Settings
level to the applicable solutions.
