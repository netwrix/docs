# Add a Custom Alert Rule

Custom alert rules let you define specific conditions that trigger notifications in Access Analyzer.

## Prerequisites

Before you create a custom alert rule, verify the following:

- A monitoring plan is configured and active.
- You have administrative privileges.
- At least one notification channel (email or webhook) is configured in **Settings** > **Notifications**.

## Create the Rule

1. Navigate to **Alerts** > **Rules**.
2. Click **New Rule**.
3. Enter a name for the rule in the **Rule Name** field.
4. Select the event type from the **Trigger** dropdown.
5. Define the condition that triggers the alert. For example, select **Failed login attempts** and set the threshold to `5` within `10` minutes.
6. Choose a notification channel from the **Notify** dropdown.
7. Click **Save**.

The rule activates immediately after you save it.

## Test the Rule

After you create the rule, verify that it triggers correctly:

1. Simulate the condition you defined. For example, attempt five failed logins to a monitored system.
2. Navigate to **Alerts** > **History**.
3. Confirm that a new alert entry appears with the correct rule name and timestamp.

:::tip
Start with a low threshold during testing, then adjust it to match your production requirements.
:::

## Disable or Delete a Rule

To disable a rule without deleting it:

1. Navigate to **Alerts** > **Rules**.
2. Toggle the **Enabled** switch next to the rule name.

To permanently delete a rule:

1. Navigate to **Alerts** > **Rules**.
2. Select the rule and click **Delete**.
3. Click **Confirm** in the dialog.

:::warning
Deleting a rule also removes its alert history. Export the history first if you need to retain it.
:::
