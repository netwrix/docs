---
title: "Import Location"
description: "Import Location"
sidebar_position: 80
---

# Import Location

Use the **Import Location** option to import the physical location data for hosts and opens a
customized version of the Import Hosts window. Add host locations from a CSV file or SQL Server
database without creating a new host list. See the
[Host Inventory Data Grid](/docs/accessanalyzer/11.6/admin/hostmanagement/datagrid.md)
topic for information on the Location column of host inventory.

To import physical location data for hosts:

**Step 1 –** Ensure the import source file has columns for both the host name as it is identified
within Enterprise Auditor and the location.

:::note
When a host name doesn't match any existing hosts within the Host Master Table, Enterprise Auditor
can add it as a new host.
:::


![Import Location option on Activities pane](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importlocation.webp)

**Step 2 –** Select the host list and click **Import Location**.

![Import Hosts window for importing location](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importlocationwindow.webp)

**Step 3 –** On the Import Hosts window, use the **Import from** dropdown to select the source as
either **CSV File** or **Database**.

**Step 4 –** Configure the source file. The necessary fields depend on the selection in the previous
step.

- CSV File

    - File Name – Click the ellipsis (**…**) to open a browser window and select the CSV file. You
      must store this file on the Enterprise Auditor Console server. Once selected, the preview box
      shows a preview of the file.
    - Includes header row – Select this checkbox if the file contains a header row. Otherwise, the
      import includes the header row (visible within the preview box).

- Database

    - Data source – Identify the database. Click the ellipsis (**…**) to open the Data Link
      Properties window. Provide the required information on the Connection tab of the Data Link
      Properties window, and then click **OK**. See the
      [Import From a Database](/docs/accessanalyzer/11.6/admin/hostdiscovery/wizard/database.md)
      topic for additional information.

        :::note
        Don't modify the Provider, Advanced, and All tabs of the Data Link Properties window.
        :::


    - Table – Use the dropdown to select the table that contains the hosts to be imported. The
      preview box displays a preview of the selected table.

**Step 5 –** Use either the dropdown menu or click the column in the preview box to select the
column containing the host names. The preview box highlights the selected column.

![Import Hosts window Location column selection](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importlocationcsv.webp)

**Step 6 –** Use the **Import column** dropdown menu to select the column containing the location
information. The preview box highlights the selected column in a lighter color.

**Step 7 –** Click **OK** to complete the import.

![Imported Location column data in the data grid](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importlocationcomplete.webp)

The Location column now contains the imported information. If any of the hosts included in the
import file aren't already in the Host Master Table, Enterprise Auditor prompts for confirmation on
whether to import the host. Selecting **Yes** or **Yes to All** adds the new hosts to the
Host Master Table but not to any individual host lists.

:::note
Enterprise Auditor adds any new hosts that match dynamic host list criteria to the appropriate
dynamic host lists.

:::
