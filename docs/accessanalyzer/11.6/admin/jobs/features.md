# Special Features & Functions

There are several special features and functions available for jobs and job components with which
Enterprise Auditor users should be familiar.

View XML Files

Job, query, analysis, and action property windows all have the **View XML** option. These provide
the ability to edit through an XML text window.

Open Explore Folder

Enterprise Auditor users can directly open a selected job or job group folder from the Jobs tree
using the **Explore Folder** option in the right-click menu.

Publish Reports after Report Generation

Reports that have been generated but not published can be sent to the Web Console using the
**Publish** option in the right-click menu from the selected Jobs tree, job group, or job node. See
the [Publish Reports Window](#publish-reports-window) topic for additional information.

Job Configuration Change Tracking

Jobs configuration changes can be tracked using the **Changes** option in the right-click menu from
the selected Jobs tree, job group, or job node. See the
[Changes Window](/docs/accessanalyzer/11.6/admin/jobs/overview.md#changes-window)
topic for additional information.

Job Export

Jobs can be exported to a ZIP file using the **Export** option in the right-click menu from the
selected job group or job node. See the
[Export Job to Zip Archive Window](#export-job-to-zip-archive-window) topic for additional
information.

See the
[Jobs Tree Right-click Menus](/docs/accessanalyzer/11.6/admin/navigate/pane.md#jobs-tree-right-click-menus)
section for additional features.

## Export Job to Zip Archive Window

The Export Job to Zip Archive window opens from the **Export** option in the right-click menu from
the selected job group or job node.

![Export from Jobs Tree menu](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/export.webp)

Select **Export** from the right-click menu to open the Export Group to Zip Archive window.

![Export Group to Zip Archive window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/exportgrouptoziparchive.webp)

The **Include all job components** option will zip the job’s directory, the reports, the job log,
and the SA_Debug log. The **Select specific components to export** option allows Enterprise Auditor
users to select which components to include in the ZIP file.

There are two options for where to save the ZIP file:

- Save in the exported folder – Saves the file in the job’s directory, for example
  `%sainstalldir%Jobs\GROUP_.Active Directory Inventory\.Active Directory Inventory.zip`
- Save in the following location – Allows you to either type or browse to the desired save location

The **Email this archive**checkbox provides the opportunity to send an email notification with the
attached ZIP file.

![Support Email window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/supportemail.webp)

When the archive has been created, the Enterprise Auditor Support Email window opens. By default,
the recipient is set to [Netwrix Support](https://www.netwrix.com/support.html) but it can be
modified prior to sending. Additional recipients can be added, and the Subject and email body can be
modified.

## Publish Reports Window

The **Publish Reports** wizard allows you to better manage the list of reports published to the Web
Console.

When you right-click on a job group or job and select **Publish**, the Publish Reports wizard opens.
You can choose the list of reports to be published or removed from the Web Console.

Follow the steps to publish the reports.

**Step 1 –** Right-click on a job group or job and select **Publish** from the drop-down list.

![Publish Reports wizard Action Type page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/publishreportsactiontype.webp)

**Step 2 –** On the Action Type page, select the type of action to be performed on the reports and
click **Next**:

- Publish Reports
- Delete Reports

![Publish Reports wizard Report Tree page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/publishreportsreporttree.webp)

**Step 3 –** On the Report Tree page, select the reports to be published or removed (depending on
the Action Type selected in the previous step). Click **Next** to proceed with the action.

**Step 4 –** The Progress page shows you the status of the action. When it has completed, click
**Finish** to exit the wizard.

Published reports can be viewed under the **[Job]** > **Results** node or through the Web Console.
See the
[Reporting](/docs/accessanalyzer/11.6/admin/report/overview.md) topic
for additional information.
