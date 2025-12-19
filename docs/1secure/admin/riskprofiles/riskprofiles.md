---
title: "Manage Risk Profiles"
description: "Manage Risk Profiles"
sidebar_position: 60
---

# Manage Risk Profiles

In Netwrix 1Secure, the Managed Service Provider (MSP) can create risk profiles.  A risk profile
consists of a set of risk metrics, each with preconfigured risk thresholds that represent low,
medium, and high risk levels for the metric. You cannot add new metrics but you can change the risk
thresholds for each metric. A risk metric is a measurable security parameter that helps analyze
potential vulnerabilities in an environment, such as disabled computer accounts, stale direct user
permission, inactive user accounts, etc. See the [ Manage Risk Metrics](/docs/1secure/admin/riskprofiles/riskmetrics.md) topic for
additional information.

You can assign a risk profile to one or more organizations. This profile examines the nature and
level of threats faced by an organization. Once a risk profile is assigned to an organization, you
can do the following:

- Generate state-in-time risk reports to get detailed information on specific security aspects of
  your environment. A separate state-in-time report is generated for each risk metric in the
  profile. See the [State In Time Risks Reports](/docs/1secure/admin/searchandreports/stateintime.md) topic for
  additional information.
- Analyze risks for your managed organizations on the Risk Assessment Dashboard page. See the
  [Risk Assessment Dashboard](/docs/1secure/admin/riskprofiles/riskassessmentdashboard.md) topic for additional information.

:::note
An organization can have only one risk profile assigned to it at a time.
:::


## View Risk Profiles

Follow the steps to view the risk profiles created in 1Secure.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

![Risk profiles list](/images/1secure/admin/riskprofiles/riskprofiles.webp)

Risk profiles are displayed in the list with the following information:

- Risk profile – The name of the risk profile. Click a profile name to view risk metrics for that
  profile. See the [ Manage Risk Metrics](/docs/1secure/admin/riskprofiles/riskmetrics.md) topic for additional information.
- Used in organizations – The number of organizations the risk profile is applied to. Click a value
  to navigate to the Profile usage - `<Profile name>` pane that displays the organizations this risk
  profile is applied to.

Click a column header to sort data in the list by that column in ascending order. An arrow appears
next to the column name to indicate the sort order. Click the column header again to sort the data
in descending order.

:::note
The risk profile named Default Profile is available by default and is automatically
applied to all managed organizations. You can assign a different risk profile to an organization if
needed. You can do this when creating a new organization or editing an organization. See the
[Add Organizations](/docs/1secure/admin/organizations/addorganizations.md) topic for additional information.
:::


## Add a Risk Profile

Follow the steps to create a risk profile.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click **Add profile**. The New risk profile pane is displayed.

![New risk profile pane](/images/1secure/admin/riskprofiles/newriskprofilepane.webp)

**Step 4 –** Enter a name for the risk profile in the Name field and click **Save**.

The risk profile is added to the list on the Risk profiles page. You can:

- Assign this profile to an organization. You can do this when creating a new organization or
  editing an organization. See the [Add Organizations](/docs/1secure/admin/organizations/addorganizations.md) topic
  for additional information. Navigate to the configuration page of an organization to see the name
  of the risk profile assigned to it.
- Configure risk thresholds for the metrics in the risk profile. See
  the[ Manage Risk Metrics](/docs/1secure/admin/riskprofiles/riskmetrics.md) topic for additional information.

## Modify the Name of a Risk Profile

Follow the steps to modify the name of a risk profile.

:::note
The risk profile named Default Profile cannot be modified.
:::


**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click the Edit icon for a risk profile. The Edit risk profile pane is displayed.

**Step 4 –** Modify the name of the profile in the Name field.

**Step 5 –** Click **Save**.

## Delete a Risk Profile

:::note
(1) The risk profile named Default Profile cannot be deleted. (2) When a risk profile is
deleted, the Default Profile is automatically assigned to the organizations that were previously
assigned the deleted profile.
:::


Follow the steps to delete a risk profile.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click the Delete icon for a risk profile to delete it. A dialog box is displayed,
prompting you to confirm the deletion.

**Step 4 –** Click **Yes**. The risk profile is deleted from the system.
