# SQL: Criteria

The Criteria page is where criteria to be used for discovering sensitive data are configured. It is
a wizard page for the Sensitive Data Collection category.

This page requires the Sensitive Data Discovery Add-On to be installed on the Enterprise Auditor
Console to define the criteria and enable the Criteria Editor. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/accessanalyzer/install/sensitivedatadiscovery/overview.md)
topic for additional information.

![SQL Data Collector Wizard Criteria page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/criteria.webp)

The options on the Criteria page are:

- Use Global Criterion Selection – Select this option to inherit sensitive data criteria settings
  from the **Settings > Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/sensitivedata/overview.md)
  topic for additional information.
- Use the following selected criteria – Select this option to use the table to select which
  sensitive data criteria to scan for

    - Select All– Click **Select All** to enable all sensitive data criteria for scanning
    - Clear All – Click **Clear All** to remove all selections from the table
    - Select the checkboxes next to the sensitive data criteria options to enable it to be scanned
      for during job execution

The table contains the following types of criteria:

**NOTE:** Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    Use the Sensitive Data Criteria Editor in the **Settings > Sensitive Data** to create and edit
    user-defined criteria. See the
    [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/overview.md)
    topic for additional information.

**NOTE:** Adding unnecessary criteria can adversely impact the scanner performance and can cause the
scanning job to take a long time. If performance is adversely affected, revisit the sensitive data
scanning criteria and remove criteria that is not required.
