---
title: "Using Agent Lookback"
description: "Using Agent Lookback"
sidebar_position: 30
---

# Using Agent Lookback

_Agent Lookback_ gives **Enterprise** license customers the capability to run an agent control from
a specified past date through the current date. The control is run in single day batches, simulating
a daily run.

The Agent Lookback is accessed from the Customization record for the control.

1. Open **Strongpoint** > **Financial Controls** > **Controls**.
2. **Edit** the control to run.
3. Open the **Controls** tab.

    ![New Agent Lookback](/images/platgovnetsuite/financial_controls/agent_lookback.webp)

4. Set **Control Type** to **Lookback Control** or **Lookback Control with Admin Verification**.
5. Click **Go to Record**.
6. In the **Filter** drop down, select **User Fields**. Select a date such as **Date Created**. The
   first date in the filter becomes the lookback start date.
7. Add the details and click **Set**.
8. Click **Add** .
9. Click **Save**.
10. The **Lookback Start Date** and **Lookback Next Date** are now populated on your Customization
    record.
11. **Save** the customization record. The Lookback agent runs single day batches for the specified
    dates.

### Lookback Run

Administrators can initiate and cancel Lookback Runs from the **Controls** tab on a Customization
record. The control search must have at least one date filter set to be used by the Lookback run.
Controls cannot be grouped by run.

![Schedule or initiate a Lookback run.](/images/platgovnetsuite/financial_controls/lookback_run.webp)

- **Run Status** is the status of the last run:

    - **In Queue** set when the **Initiate Run** box is checked
    - **Processing** run in progress.
    - **Done** the last run is complete.
    - **Cancelled** administrator has clicked **Cancel Run** (view) or unchecked the **Initiate
      Run** box (edit).

- **Last Action** displays the last user action.
- **Start Date** is the beginning date to use for the lookback run. Future dates are not allowed.
- **End Date** is the ending date for the lookback run. Future dates are not allowed.
- **Next Date** is a reference field displaying the last lookup date of the lookback run.

The Lookback run checks for existing Control logs to avoid log duplication. The Control record,
Agent Incident Data, Agent Incident Employee and Change Data table are all used as criteria to
detect duplication. Duplicates can occur if the search changed between the Lookback date parameters
and the Lookback Run date.

### Lookback Run History

The **Lookback Run History** tab is available on the **Controls** tab on a Customization record.

![View the Lookback Run history.](/images/platgovnetsuite/financial_controls/lookback_run_history.webp)

### Lookback Run Incidents

You can filter your Control Incidents reports by setting **Log Origin** in the report **Filters**.
**Agent Lookback Run** is available as a filter option.

![Filter Incident Results on Lookback Run](/images/platgovnetsuite/financial_controls/lookback_run_incidents.webp)
