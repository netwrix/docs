# Manage Risk Metrics

A risk profile includes a set of risk metrics, each with preconfigured risk thresholds. A risk metric is a measurable security parameter that helps analyze potential vulnerabilities in an environment, such as disabled computer accounts, stale direct user permission, inactive user accounts, etc. When you create a risk profile, risk thresholds are preconfigured for each risk metric. You can, however, modify the thresholds for a risk metric or even remove a risk metric.

Follow the steps to view risk metrics within a risk profile.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ In the left pane, click __Risk profiles__.The Risk profiles page is displayed.

__Step 3 –__ Click a risk profile. The risk metrics for the profile are displayed in a list. See the [Risk Metrics List](/docs/product_docs/1secure/1secure/admin/riskprofiles/metrics_list.md) topic for a description of each risk metric.

![Risks Metrics list](/static/img/product_docs/1secure/1secure/admin/riskprofiles/riskslist.png)

You can view the following for each risk metric:

- Category – The name of the preconfigured category a risk metric belongs to, which can be Data, Identity, or Infrastructure. The State In Time Risk report generated for this metric can be found under this particular category on the Risk reports page, See the [State In Time Risks Reports](/docs/product_docs/1secure/1secure/admin/searchandreports/stateintime.md) topic for additional information.
- Metric – The name of the risk metric. A risk metric is a measurable security parameter that helps analyze potential vulnerabilities in an environment, such as disabled computer accounts, stale direct user permission, inactive user accounts, etc.
- Measures in – The measurement type used to calculate risk thresholds for a risk metric. Measurement types are:

  - Number – Indicates that risk thresholds are calculated in absolute numbers (e.g., the number of inactive user accounts).
  - Percentage – Indicates that risk thresholds are calculated as a proportion of a total value (e.g., the percentage of user accounts with password never expires).
  - Binary – Indicates that risk level is calculated on the basis of a true/false condition ( e.g., whether third-party applications are allowed or not).
- Low – The low risk threshold for a risk metric.
- Medium – The medium risk threshold for a risk metric
- High – The high risk threshold for a risk metric

## Modify Thresholds For a Number or Percentage Risk Metric

Follow the steps to modify thresholds for a risk metric that is measured in numbers or percentage.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ In the left pane, click __Risk profiles__.The Risk profiles page is displayed.

__Step 3 –__ Click a risk profile. The risk metrics for the profile are displayed in a list.

__Step 4 –__ Click the __Edit__ icon for a risk metric. The <Risk metric name> pane is displayed.

![Modify risk threshold pane](/static/img/product_docs/1secure/1secure/admin/riskprofiles/modifyriskthreshold.png)

__Step 5 –__ Select a measurement type to calculate risk thresholds for the metric. Options are:

- Number – Indicates that risk thresholds are calculated in absolute numbers (e.g., the number of inactive user accounts). This option is selected by default.
- Percentage – Indicates that risk thresholds are calculated as a proportion of a total value (e.g., the percentage of user accounts with password never expires).

__Step 6 –__ Specify a range of values to set the low risk threshold for the metric. For example, if you set the low risk threshold for inactive user accounts to 0-3, the risk level will be considered low as long as the number of inactive user accounts remains between 0 and 3.

Follow these rules when setting the low risk threshold:

- The minimum value of the low risk threshold must be equal to 0.
- The maximum value of the low risk threshold is equal to the minimum value of the medium risk threshold.

The medium risk threshold is calculated automatically and you cannot modify it. It follows these rules:

- The minimum value of the medium risk threshold is equal to the maximum value of the low risk threshold.
- The maximum value of the medium risk threshold is equal to the minimum value of the high risk threshold.

__Step 7 –__ Specify a range of values to set high risk threshold for a metric. For example, if you set the high risk threshold for inactive user accounts to 10 and above, the risk level will be considered high as long as the number of inactive user accounts exceeds 10.

Follow this rule when setting the high risk threshold:

- The minimum value of the high risk threshold is equal to the maximum value of the medium risk threshold.

__Step 8 –__ (Optional) Click the __Restore default__ button to reset the risk metric to its default settings. This button is enabled if the default settings have been modified.

__Step 9 –__ Click __Save__.

The risk thresholds have been modified for the metric.

## Modify Severity For a Boolean Risk Metric

Some risks are evaluated based on a true/false condition. For example, if a third party application is not allowed and the system does not detect any, the risk level will be low. However, if the system detects one, the severity level will be set to medium or high, depending on what you set here.

Follow the steps to modify severity for a Boolean risk metric.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ In the left pane, click __Risk profiles__.The Risk profiles page is displayed.

__Step 3 –__ Click a risk profile. The risk metrics for the profile are displayed in a list.

__Step 4 –__ Click the Edit icon for a Boolean risk metric. The <Risk metric name> pane is displayed.

![Modify Boolean metric pane](/static/img/product_docs/1secure/1secure/admin/riskprofiles/modifyriskseverity.png)

__Step 5 –__ Select a severity level to apply when the risk is detected.

- High – Set the risk severity level to High
- Medium – Set the risk severity level to Medium

__NOTE:__ When the risk is not detected, the severity level is automatically set to Low.

For example, if a third party application is not allowed and the system does not detect any, the risk level will be low. However, if the system detects one, the severity level will be set to medium or high, depending on what you set here.

__Step 6 –__ (Optional) Click the __Restore default__ button to reset the risk metric to its default settings. This button is enabled if the default settings have been modified.

__Step 7 –__ Click __Save__.

The risk thresholds have been modified for the metric.

## Remove a Risk Metric From a Risk Profile

__NOTE:__ When you remove a risk metric from a profile, organizations using that risk profile will no longer be assessed against this metric.

Follow the steps to remove a risk metric from a risk profile.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ In the left pane, click __Risk profiles__.The Risk profiles page is displayed.

__Step 3 –__ Click a risk profile. The risk metrics for the profile are displayed in a list.

__Step 4 –__ Click the Delete icon for a risk metric to remove it. A dialog box is displayed, prompting you to confirm the removal of the metric.

__Step 5 –__ Click __Delete__. The risk metric is removed from the profile.

## Add a Number or Percentage Risk Metric to a Risk Profile

If a risk metric is removed from a profile, you can add it back anytime. Re-adding the metric ensures that organizations using the profile will once again be assessed against that metric.

Follow the steps to add a risk metric to a profile.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ In the left pane, click __Risk profiles__.The Risk profiles page is displayed.

__Step 3 –__ Click a risk profile. The risk metrics for the profile are displayed in a list.

__Step 4 –__ Click __Add__. The Add new risk threshold pane is displayed.

![Add new risk threshold pane](/static/img/product_docs/1secure/1secure/admin/riskprofiles/addnumberthreshold.png)

__Step 5 –__ In the Risk Metric drop-down menu, select a number or percentage risk metric you want to add.

__Step 6 –__ Use the Measure in option buttons to select a measurement type and specify risk thresholds for the metric. See the [Modify Thresholds For a Number or Percentage Risk Metric](#Modify-Thresholds-For-a-Number-or-Percentage-Risk-Metric) topic, starting at Step 5 for additional information.

__Step 7 –__ (Optional) Click the __Restore default__ button to reset the risk metric to its default settings. This button is enabled if the default settings have been modified.

__Step 8 –__ Click __Save__.

The risk metric is added back to the risk profile.

### Add a Boolean Risk Metric To a Risk Profile

If a Boolean risk metric is removed from a profile, you can add it back anytime.

Follow the steps to add a risk metric to a profile.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ In the left pane, click __Risk profiles__.The Risk profiles page is displayed.

__Step 3 –__ Click a risk profile. The risk metrics for the profile are displayed in a list.

__Step 4 –__ Click __Add__. The Add new risk threshold pane is displayed.

![Add new risk threshold pane](/static/img/product_docs/1secure/1secure/admin/riskprofiles/addbooleanriskmetric.png)

__Step 5 –__ In the Risk Metric drop-down menu, select a Boolean risk metric you want to add.

__Step 6 –__ Select a severity level to apply when the risk is detected.

- High – Set the risk severity level to High
- Medium – Set the risk severity level to Medium

__NOTE:__ When the risk is not detected, the severity level is automatically set to Low.

__Step 7 –__ (Optional) Click the __Restore default__ button to reset the risk metric to its default settings. This button is enabled if the default settings have been modified.

__Step 8 –__ Click __Save__.

The risk metric is added back to the risk profile.
