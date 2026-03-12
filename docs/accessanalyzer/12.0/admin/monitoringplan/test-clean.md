# Configure the Monitoring Plan

The monitoring plan defines what Access Analyzer tracks across your environment.

## Prerequisites

Before you configure the monitoring plan, verify the following:

- Access Analyzer is installed and running.
- You have administrative privileges.
- The target systems are accessible from the Access Analyzer server.

## Configure the Plan

1. Open the **Settings** page.
2. Select a monitoring template from the **Template** dropdown.
3. Specify the target systems you want to monitor.
4. Set the monitoring interval in the **Schedule** section.
5. Click **Save**.
6. Restart the **Access Analyzer** service for the changes to take effect.

## Verify the Configuration

After you save the monitoring plan, verify that data collection starts:

1. Navigate to **Dashboard** > **Activity**.
2. Confirm that new events appear for the monitored systems.

:::note
If no events appear within the configured monitoring interval, check the service status and network connectivity to the target systems.
:::
