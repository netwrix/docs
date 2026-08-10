---
sidebar_label: Importing data
---
# Importing Data into PingCastle Enterprise

PingCastle Enterprise allows administrators to consult all report data and make decisions. You can't launch scans directly from the application, so you must run the PingCastle tool in standalone mode and then import the reports it produces.

There are three ways to do so:

**Option 1: Importing the file manually**

From the "Configuration" tab, open "Import one or more reports". On that page, you can drag and drop any file produced by the PingCastle standalone executable, and it uploads to the PingCastle Enterprise solution.

After it's done, the application marks the file with either a success or a failure.

In case of a failure, hovering over the item displays the associated error message to help you upload the file.

Import page:

![](/images/pingcastle/enterpriseuser/image57.webp)

![](/images/pingcastle/enterpriseuser/image58.webp)

**Option 2: Importing the file automatically through Agent mode**

Agent mode lets `PingCastle.exe` upload reports to PingCastle Enterprise automatically over the API, using a scheduled task rather than a manual upload. It's the option to use for domains the PingCastle Scheduler Service can't reach directly. See [Agent deployment](enterpriseagentdeployment.md) for setup steps, including creating the API key and configuring the command line.

**Option 3: Bulk import of entities**

For bulk configuration, use **Configuration** > **Interoperability** to edit the entity hierarchy using an Excel file (compatible with the PingCastleReporting tool format).

## Scheduler

The PingCastle Scheduler Service and credential profiles manage scan scheduling. See [Scheduling](enterprisescheduling.md) for details on configuring credential profiles and scheduled scans.

## Reports

You can view all the reports imported into PingCastle Enterprise, regardless of the method used to import them.

To do so, from the "Configuration" tab, click "View all reports" to reach the page:

![](/images/pingcastle/enterpriseuser/image66.webp)
