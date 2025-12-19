---
title: "Editing Existing Reports"
description: "Editing Existing Reports"
sidebar_position: 20
---

# Editing Existing Reports

It is not recommended to edit existing reports unless there are changes to a job’s settings at the
global level, job group level, or job level. Changes to when data is collected, the types of data
collected, and the properties of collected data are not reflected in a report’s configuration. As a
result, generated reports could appear with blank fields or misleading information about the purpose
of the collected data, unless the report is modified to reflect the changes to the job's settings.
To modify a report, use the Report Configuration Wizard.

Follow the steps to modify an existing report.

**Step 1 –** Navigate to the Reports node that contains the report.

![Configure Report](/images/accessanalyzer/11.6/admin/report/configure.webp)

**Step 2 –** Click the **Configure** button next to the report you want to modify.

**Step 3 –** Use the Report Configuration wizard to make any required changes. See the
[Report Configuration Wizard](/docs/accessanalyzer/11.6/admin/report/wizard/overview.md)
topic for instructions.

- You must go through all pages of the wizard, and click **Finish** on the final page to save your
  changes. Skip any sections or pages that do not require changes to the existing configuration. You
  can click **Cancel** on any page to exit the wizard without saving your changes.

Your configuration updates have been saved. To view the updated report you need to first generate
the report or run it's associated job. See the
[Viewing Generated Reports](/docs/accessanalyzer/11.6/admin/report/view.md)
topic for additional information.
