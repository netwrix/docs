---
title: "Recommendations"
description: "Recommendations"
sidebar_position: 10
---

# Recommendations

This section covers the Recommendations interface that contains detailed guidance on the Auditor
usage patterns. Once you installed the product, configured your IT infrastructure, and prepared
Netwrix Service Accounts, you can start collecting data and review it with Netwrix Auditor. The
recommendations are based on your current product configuration and help you to experience the
Auditor capabilities in earnest.

![recommendations](/images/auditor/10.7/admin/navigation/recommendations.webp)

Follow the steps to review the recommendations provided by Netwrix industry experts.

**Step 1 –** On the Auditor home page, click the **Recommendations** tile.

**Step 2 –** Review the recommendations applicable to your current Auditor configuration and take
required steps.

Once the required steps are done, the recommendation goes to the '**Complete**' list. You can move
it back to the active state any time you want by clicking the **Move to active** link.

## Available Recommendations

Review the list of the recommendations available in Auditor.

### Create Your First Monitoring Plan

To start collecting data with Netwrix Auditor, you need to create a monitoring plan that defines
data collection, notification, and storage settings and add a source-specific item. This
recommendation will appear if you don't have any monitoring plans configured. Clicking the **Add
plan** button opens the New Monitoring Plan wizard. See the
[Create a New Plan](/docs/auditor/10.7/admin/monitoringplans/create.md) topic for additional information about plans
configuration. Once completed, you will be prompted to add an item to your plan, otherwise the
configuration will be incomplete and the product will not be able to collect data. Auditor
automatically suggests item types associated with your data source.

### Start Abandoned Data Source Auditing

If you have a license for several applications, Netwrix suggests enabling each undeployed data
source for each purchased application if they were never deployed before. Clicking the **Add plan**
button opens the New Monitoring Plan wizard. Select the data source you want to monitor with Netwrix
Auditor and see the [Create a New Plan](/docs/auditor/10.7/admin/monitoringplans/create.md) topic for additional
information about further configuration.

### Enable State-in-Time Data Collection

If you want to review the state of your system configuration at a specific moment in time, for
example, account permissions or group membership, you need to enable the State-in-Time data
collection for your data source. See the
[State–in–Time Reports](/docs/auditor/10.7/admin/reports/types/stateintime/overview.md) topic for additional information
about the available reports. Clicking the **Go to data source** button opens the settings page of
the data source to which this recommendation applies to. See the
[Manage Data Sources](/docs/auditor/10.7/admin/monitoringplans/datasources.md) topic for additional information.

**NOTE:** This recommendation will not be shown for to the File Servers data sources (Windows-based
file shares, NetApp Filers, Dell Data Storage, etc.). Navigate to your file server data source and
check the state-in-time data collection settings manually.

### Subscribe to the Health Summary Email

The Health Summary email includes all statistics on the product operations and health for the last
24 hours; it also notifies you about license status. If you have configured monitoring plans with
data sources and items, Netwrix recommends subscribing to Health Summary emails to be notified on
the problems that need your attention. See the
[Health Summary Email](/docs/auditor/10.7/admin/healthstatus/summaryemail.md) topic for additional information.

Clicking the **Go to Notifications** button opens the Netwrix Auditor notifications settings page.
See the [Notifications](/docs/auditor/10.7/admin/settings/notifications.md) topic for additional information.

### Logon Activity: Start Auditing Item

If you have the monitoring plans with configured Active Directory data source and domain item,
Netwrix recommends creating a new monitoring plan for the Logon Activity data source to review
details around interactive and non-interactive logons, including failed logon attempts, and users
logon and logoff activity on domain controllers in the audited domain. Clicking the **Add plan**
button opens the New Monitoring Plan wizard with the Logon Activity as a selected data source. See
the [Create a New Plan](/docs/auditor/10.7/admin/monitoringplans/create.md) topic for additional information about further
configuration.

### Enable Alerts

For the configured monitoring plans, Netwrix recommends enabling alerts to be immediately notified
on the suspicious activity. You can enable predefined alerts or create your custom ones.

Clicking the **Open** settings button opens the All Alerts wizard. See the
[Manage Alerts](/docs/auditor/10.7/admin/alertsettings/overview.md) topic for additional information.

## Manage Recommendations

For active recommendations, you can follow the prompts or move them to the completed state by
clicking the '**Mark as complete**' link.

For completed recommendations, you can configure the retention period to keep them visible and
select their categories for further displaying on the tile. If you want to proceed with a completed
recommendation, click the '**Move to active**' link below the recommendation.

Follow the steps to manage recommendations:

**Step 1 –** On the Auditor home page, click the **Recommendations** tile.

**Step 2 –** Click **Settings** at the bottom.

![managerecommendations](/images/auditor/10.7/admin/navigation/managerecommendations.webp)

**Step 3 –** In the Manage recommendations dialog, do the following:

- Keep completed recommendations: `<30>` days – Specify time period in days to keep the completed
  recommendations visible. The default period is set to 30 days.
- Select the recommendations to fine-tune product configuration – Select recommendations types you
  want to be displayed. When checked, the recommendations of the selected type appear once your
  Auditor configuration meets the recommendation conditions.

    For example, if you selected the 'Enable State-in-Time data collection', this recommendation
    appears for each new monitoring plan with disabled state-in-time option.

**Step 4 –** Click **OK** to save your edits.

To refresh the recommendations list, click the **Refresh** button in the left bottom corner.
