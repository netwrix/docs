---
title: "IT Risk Assessment Dashboard"
description: "IT Risk Assessment Dashboard"
sidebar_position: 10
---

# IT Risk Assessment Dashboard

To access the Risk Assessment dashboard, click the corresponding tile in the main window.

You can add any elements (a dashboard, report, alert, risk, etc.) to the Auditor Home screen to
access them instantly. See the
[Navigation](/docs/auditor/10.6/admin/navigation/overview.md) and
[Customize Home Screen](/docs/auditor/10.6/admin/navigation/customizehome.md)
topics for additional information.

The IT risks are grouped into the following categories:

- Users and Computers
- Permissions
- Data
- Infrastructure

Within each category there are several key metrics identified by Netwrix industry experts who also
suggested formulas for calculating metrics values. Risks are assessed against these metrics and
displayed with the color indicators in accordance with the level:

- High — red
- Medium — yellow
- Low — green

![dashboard_main](/images/auditor/10.6/admin/riskassessment/dashboard_main.webp)

After reviewing general risks assessment results in each category, you can drill-down to details
covered in the underlying report— for that, double-click the selected metric or use the View Report
button.

## Customizing Metrics for Your Organization

Default threshold values for risk levels are set in accordance with recommendations of Netwrix
industry experts, as described in
[How Risk Levels Are Estimated ](/docs/auditor/10.6/admin/riskassessment/levels.md).
They can be, however, easily customized to reflect your organization's internal security policies
and standards. For that, do the following:

1. In the dashboard pane, select the metric you need and in the **Actions** section on the right
   click Modify thresholds.
2. In the dialog displayed, specify new threshold values for risk levels.
3. Click OK to save the settings and close the dialog.

    ![modify_thresholds](/images/auditor/10.6/admin/riskassessment/modify_thresholds.webp)

Also, for several metrics the Customize risk indicators command is available.

| For metric...                                     | Use Customize risk indicators command to...                                                                                                          |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| _File and folder names containing sensitive data_ | Edit the list of words you consider to be indicators of sensitive content if detected in the file or folder name.                                    |
| Potentially harmful files on file shares          | Edit the list of extensions you consider to be indicators of potentially harmful files detected in the file share.                                   |
| _Servers with inappropriate operating systems_    | Edit the whitelist of permitted OS versions. Any other OS version will be considered a risk factor.                                                  |
| _Servers with unauthorized antivirus software_    | Edit the whitelist of permitted antivirus tools. Any other antivirus will be considered a risk factor.                                               |
| _Administrative group membership sprawl_          | Edit the whitelist of permitted accounts that can be the members of local administrative groups. Any other account will be considered a risk factor. |

New settings will be applied/risk level thresholds will be refreshed after the next data collection
session.

## Delivering Assessment Results as a File

You can create a subscription to periodically receive IT risk assessment results by email or using a
file share. For that, in the dashboard window click Subscribe and configure the necessary settings.
[Create Subscriptions](/docs/auditor/10.6/admin/subscriptions/create.md)

You can also save current results to a PDF file, using the Export button in the dashboard window.
