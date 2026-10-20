---
title: "Import Hosts Option"
description: "Import Hosts Option"
sidebar_position: 20
---

# Import Hosts Option

On the Manual Host Entry page of the Host List Wizard, the **Import** option lets you import hosts
from either a CSV file or a database into the host list you're creating.

To import hosts:

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

    - File Name – Click the ellipsis (**…**) to open a browser window and select the CSV file. You
      must store this file on the Enterprise Auditor Console server. Once selected, the preview box
      shows a preview of the file.
    - Includes header row – Select this checkbox if the file contains a header row. Otherwise, the
      import includes the header row (visible within the preview box).

![Import Hosts window for importing from Database](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importhostsdatabase.webp)

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

**Step 4 –** Use either the dropdown menu or click the column in the preview box to select the
column containing the host names. The preview box highlights the selected column.

**Step 5 –** Click **OK** to complete the import.

![Imported hosts added in the Host list box on the Manual Host Entry page of the Host List Wizard](/images/accessanalyzer/11.6/admin/hostmanagement/actions/importhostscomplete.webp)

The Import Hosts window closes, and Enterprise Auditor adds the imported list of host names to the
Host list box on the Manual Host Entry page of the Host List Wizard. Click **Next** to proceed with
configuring the
host list. See the
[Add Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/add.md)
topic for additional information on the Host List Wizard.
