---
title: "Manual Scanners"
description: "Manual Scanners"
sidebar_position: 40
---

# Manual Scanners

When the initial scan is complete, you can run additional on demand scans as required.

When you add or change a specific customization, you can choose to run an on demand scan of only the
Metadata type of the affected customization, instead of scanning the entire environment. This type
of scan reduces the run time. For example if you change a Report, pick reports as the Metadata type
and Platform Governance for Salesforce only scans reports.

:::note
The scanner is only available to Administrators.
:::

To run the scanner:

1. Open **Netwrix Dashboard** > **Scanner** > **Manual Scanners**
2. Use the optional **Search Types** to narrow the focus of the list if you are looking for a
   specific type.
3. You can select + beside one or more types to scan or you can scan the whole environment by
   clicking + on the **Name** row to select all the types.

    ![scanner](/images/platgovsalesforce/installing_strongpoint/scanner.webp)

4. Click **Run Scanner**.
5. The batch runs in the background. You receive an email notification when the scan is complete.

6. From the Netwrix Dashboard: click **Configuration and Stats** in the **Resources** section, or
   open **Settings** > **Configuration and Stats**.

## Creating a Custom View for Scanners

You can create your own Salesforce view for the scanners:

    1. Open Salesforce **Setup**.
    2. Search for **apex jobs** or navigate to **Environments** > **Jobs** > **Apex Jobs**.
    3. Click **Create New View**.
      ![Set up a Strongpoint scanner view](/images/platgovsalesforce/installing_strongpoint/scanner_view.webp)
    4. Enter a **View Name**. The system assigns **View Unique Name**. _Netwrix Jobs1_ is used in this example.
    5. Select **Apex Class** for the **Field**.
    6. Select **starts with** for the **Operator**.
    7. Assign **FLO, Strongpoint, NetPG** for the **Value**.
    8. Click **Save**. You can now see the status of all of the Strongpoint jobs.
      ![Viewing running Netwrix jobs](/images/platgovsalesforce/installing_strongpoint/scanner_view2.webp)

**Next Step:** [Validate the Data ](/docs/platgovsalesforce/installingstrongpoint/validating_data.md)
