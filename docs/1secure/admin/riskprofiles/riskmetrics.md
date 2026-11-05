---
title: "Risk Metrics"
description: "Manage Risk Metrics"
sidebar_position: 10
---

# Manage Risk Metrics

A risk profile includes a set of risk metrics, each with preconfigured risk thresholds. A risk
metric is a measurable security parameter that helps analyze potential vulnerabilities in an
environment, such as disabled computer accounts, stale direct user permission, inactive user
accounts, etc. When you create a risk profile, risk thresholds are preconfigured for each risk
metric. You can, however, modify the thresholds for a risk metric or even remove a risk metric.

**To view risk metrics within a risk profile:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list. See the
[Risk Metrics List](/docs/1secure/admin/riskprofiles/metrics_list.md) topic for a description of each risk metric.

![Risks Metrics list](/images/1secure/admin/riskprofiles/riskslist.webp)

You can view the following for each risk metric:

- Category – The name of the preconfigured category a risk metric belongs to, which can be Data,
  Identity, Infrastructure, or Overexposed Sensitive Data (Sensitive Data in the Netwrix metric set). The State In Time Risk report generated for this metric can be found
  under this particular category on the Risk reports page, See the
  [State In Time Risks Reports](/docs/1secure/admin/searchandreports/stateintime.md) topic for additional
  information.
- Metric – The name of the risk metric. A risk metric is a measurable security parameter that helps
  analyze potential vulnerabilities in an environment, such as disabled computer accounts, stale
  direct user permission, inactive user accounts, etc.
- Measures in – The measurement type used to calculate risk thresholds for a risk metric.
  Measurement types are Num, Bytes, and Binary. For Num metrics, the threshold units are:

    - Numbers – Indicates that risk thresholds are calculated in absolute numbers (e.g., the number
      of inactive user accounts).
    - Percentage (%) – Indicates that risk thresholds are calculated as a proportion of a total value
      (e.g., the percentage of user accounts with password never expires).

  A Binary metric indicates that risk level is calculated on the basis of a true/false condition (
  e.g., whether third-party applications are allowed or not).

- Low – The low risk threshold for a risk metric.
- Medium – The medium risk threshold for a risk metric
- High – The high risk threshold for a risk metric

## Modify Thresholds For a Number or Percentage Risk Metric

**To modify thresholds for a risk metric measured in numbers or percentage:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click the **Edit** icon for a risk metric. The `<Risk metric name>` pane is displayed.

![Modify risk threshold pane](/images/1secure/admin/riskprofiles/modifyriskthreshold.webp)

**Step 5 –** Select a measurement type to calculate risk thresholds for the metric. Options are:

- Numbers – Indicates that risk thresholds are calculated in absolute numbers (e.g., the number of
  inactive user accounts). This option is selected by default.
- Percentage (%) – Indicates that risk thresholds are calculated as a proportion of a total value (e.g.,
  the percentage of user accounts with password never expires).

**Step 6 –** Specify the **Medium threshold** for the metric. The risk level is low for any value
below the Medium threshold. For example, if you set the Medium threshold for inactive user accounts
to 3, the risk level is considered low as long as the number of inactive user accounts remains
below 3.

Follow these rules when setting the thresholds:

- Threshold values must be positive decimals greater than 0.
- The maximum value of the low risk range is equal to the Medium threshold.
- The maximum value of the medium risk range is equal to the High threshold.
- The Medium and High values must differ by at least 1 (0.01 for percentages) in the direction that
  matches the metric. If they don't, 1Secure shows "The threshold boundaries for this metric are
  invalid - high threshold must be at least `{0}` higher than the value for the medium threshold."
- If you select Percentage (%), values must be from 0 to 100. Otherwise, 1Secure shows
  "Percentage thresholds should be between 0 and 100".
- A metric is Low below the Medium threshold, Medium from the Medium threshold, and High from the
  High threshold. For metrics where lower values are worse, the comparison reverses.

**Step 7 –** Specify the **High threshold** for the metric. For example, if you
set the high risk threshold for inactive user accounts to 10 and above, the risk level is
considered high as long as the number of inactive user accounts exceeds 10.

Follow this rule when setting the high risk threshold:

- The minimum value of the high risk threshold is equal to the maximum value of the medium risk
  threshold.

**Step 8 –** (Optional) Click the **Restore default** button to reset the risk metric to its default
settings. This button is enabled if the default settings have been modified. After the revert, 1Secure shows
"Reverted successfully".

**Step 9 –** Click **Save**.

The risk thresholds have been modified for the metric.

## Modify Severity For a Boolean Risk Metric

Some risks are evaluated based on a true/false condition. For example, if a third party application
isn't allowed and the system doesn't detect any, the risk level is low. However, if the
system detects one, the severity level is set to medium or high, depending on what you set
here.

For a Boolean risk metric, the pane says `Boolean risk. When the risk is not present, it is
categorized as Low.` and asks "Severity when the risk is present:". Set exactly one of the Medium
or High thresholds to 1. Otherwise, 1Secure shows "A boolean metric must have either an error or
warning threshold set to 1."

**To modify severity for a Boolean risk metric:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click the Edit icon for a Boolean risk metric. The `<Risk metric name>` pane is
displayed.

![Modify Boolean metric pane](/images/1secure/admin/riskprofiles/modifyriskseverity.webp)

**Step 5 –** Select a severity level to apply when the risk is detected.

- High – Set the risk severity level to High
- Medium – Set the risk severity level to Medium

:::note
When the risk isn't detected, the severity level is automatically set to Low. Exactly one of the
Medium or High thresholds must be set to 1.
:::


For example, if a third party application isn't allowed and the system doesn't detect any, the
risk level is low. However, if the system detects one, the severity level is set to medium
or high, depending on what you set here.

**Step 6 –** (Optional) Click the **Restore default** button to reset the risk metric to its default
settings. This button is enabled if the default settings have been modified.

**Step 7 –** Click **Save**.

The risk thresholds have been modified for the metric.

## Remove a Risk Metric From a Risk Profile

:::note
When you remove a risk metric from a profile, organizations using that risk profile will
no longer be assessed against this metric.
:::


**To remove a risk metric from a risk profile:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click the Delete icon for a risk metric to remove it. A dialog box is displayed,
prompting you to confirm the removal of the metric.

**Step 5 –** Click **Delete**. The risk metric is removed from the profile.

## Add a Number or Percentage Risk Metric to a Risk Profile

If a risk metric is removed from a profile, you can add it back anytime. Re-adding the metric
ensures that organizations using the profile are once again assessed against that metric.

**To add a risk metric to a profile:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click **Add**. The Add new risk threshold pane is displayed. It has the Metric
("Select a metric..."), Medium threshold, and High threshold fields and the Threshold is percentage
option.

![Add new risk threshold pane](/images/1secure/admin/riskprofiles/addnumberthreshold.webp)

**Step 5 –** In the Risk Metric dropdown, select a number or percentage risk metric you want
to add.

**Step 6 –** Use the Measure in option buttons to select a measurement type and specify risk
thresholds for the metric. See the
[Modify Thresholds For a Number or Percentage Risk Metric](#modify-thresholds-for-a-number-or-percentage-risk-metric) topic,
starting at Step 5 for additional information.

**Step 7 –** (Optional) Click the **Restore default** button to reset the risk metric to its default
settings. This button is enabled if the default settings have been modified.

**Step 8 –** Click **Save**.

The risk metric is added back to the risk profile.

### Add a Boolean Risk Metric To a Risk Profile

If a Boolean risk metric is removed from a profile, you can add it back anytime.

**To add a risk metric to a profile:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click **Add**. The Add new risk threshold pane is displayed.

![Add new risk threshold pane](/images/1secure/admin/riskprofiles/addbooleanriskmetric.webp)

**Step 5 –** In the Risk Metric dropdown, select a Boolean risk metric you want to add.

**Step 6 –** Select a severity level to apply when the risk is detected.

- High – Set the risk severity level to High
- Medium – Set the risk severity level to Medium

:::note
When the risk isn't detected, the severity level is automatically set to Low. Exactly one of the
Medium or High thresholds must be set to 1.
:::


**Step 7 –** (Optional) Click the **Restore default** button to reset the risk metric to its default
settings. This button is enabled if the default settings have been modified.

**Step 8 –** Click **Save**.

The risk metric is added back to the risk profile.
