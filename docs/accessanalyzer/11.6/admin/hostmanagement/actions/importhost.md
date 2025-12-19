---
title: "Import Hosts Option"
description: "Import Hosts Option"
sidebar_position: 20
---

# Import Hosts Option

On the Manual Host Entry page of the Host List Wizard, the **Import** option allows hosts to be
imported from either a CSV file or a database into the host list being created.

Follow the steps to import hosts.

![Import option on the Manual Host Entry page of the Host List Wizard](/images/accessanalyzer/11.6/admin/hostmanagement/actions/hostlistwizardimport.webp)

**Step 1 –** On the Manual Host Entry page of the Host List Wizard, click **Import**. The Import
Hosts window opens.

![Import Hosts window](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importhosts.webp)

**Step 2 –** On the Import Hosts window, use the **Import from** dropdown to select the source as
either **CSV File** or **Database**.

**Step 3 –** Configure the source file. The necessary fields depend on the selection in the previous
step.

![Import Hosts window for importing from CSV File](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importhostscsv.webp)

- CSV File

    - File Name – Click the ellipsis (**…**) to open a browser window and select the CSV file. This
      file needs to be stored on the Enterprise Auditor Console server. Once selected, a preview of
      the file is shown in the preview box.
    - Includes header row – Select this checkbox if the file contains a header row. Otherwise, the
      header row will be included in the import (visible within the preview box).

![Import Hosts window for importing from Database](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importhostsdatabase.webp)

- Database

    - Data source – Identify the database. Click the ellipsis (**…**) to open the Data Link
      Properties window. Provide the required information on the Connection tab of the Data Link
      Properties window, and then click **OK**. See the
      [Import From a Database](/docs/accessanalyzer/11.6/admin/hostdiscovery/wizard/database.md)
      topic for additional information.

        :::note
        The Provider, Advanced, and All tabs of the Data Link Properties window should not
        be modified.
        :::


    - Table – Use the dropdown to select the table that contains the hosts to be imported. A preview
      of the selected table is displayed in the preview box.

**Step 4 –** Use either the drop-down menu or click on the column in the preview box to select the
column containing the host names. The selected column is highlighted in the preview box.

**Step 5 –** Click **OK** to complete the import.

![Imported hosts added in the Host list box on the Manual Host Entry page of the Host List Wizard](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importhostscomplete.webp)

The Import Hosts window closes, and the imported list of host names is added in the Host list box on
the Manual Host Entry page of the Host List Wizard. Click **Next** to proceed with configuring the
host list. See the
[Add Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/add.md)
topic for additional information on the Host List Wizard.
