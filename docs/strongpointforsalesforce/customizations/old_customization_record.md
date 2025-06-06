# Old Customization Record

This topic details the old-style customization record. Refer to [Understanding the Customization Record](/docs/product_docs/strongpointforsalesforce/customizations/understanding_customization_record.md) for the updated Platform Governance for Salesforce Lightning customization record.

The customization detail contains general information about the customization record. The customization name appears in the banner with function buttons:

- __Save__: saves the customization record.
- __Rescan__: runs the scanner on the record. You are prompted to refresh the page.
- __Go To Record__: brings up the customization record for editing or to view additional details.
- __Update Description and Help Text__: editor to add or modify the __Description__ and __Help Text__ fields.

Customization record fields include:

- __Base Record__: Link to the base record for the customization.
- __Owner ID__: Link to the current owner.
- __Description__: Details added to the record. Click __Update Description and Help Text__ to update.
- __Salesforce Type__: Customization type.
- __API Name:__ APIs associated with the record.
- __Help Text__: Helpful information detailing function and use of each customization. Click __Update Description and Help Text__ to update.
- __Related Objects__: Links to related objects.
- __Details__: Tabs to access details about the customization. Tabs include __Metadata__, __Improvement__, __Permissions__, __Control__, __DRD__, __Raw Data__ and __Related Lists__.

![customization_record](/static/img/product_docs/strongpointforsalesforce/customizations/customization_record.png)

## Customization Record Tabs

These are the tabs inside a customization record:

> [Metadata](#Metadata)
>
> [Improvement](#Improvement)
>
> [Permissions](#Permissions)
>
> [Health Settings](#Health-Settings)
>
> [Data Classification](#Data-Classification)
>
> [Control](#Control)
>
> [DRD](#DRD)
>
> [Raw Data](#Raw-Data)
>
> [Related Lists](#Related-Lists)

### Metadata

The metadata tab provides the metadata information about the customization, including:

- __Date Last Used__: date the customization was last used. Refer to [DLU](/docs/product_docs/strongpointforsalesforce/clean_up/date_last_used.md) for more information.
- __Data type__: data type of the custom field.
- __Last Modified Date__: last date the customization was modified.
- __Active__: indicates whether the customization is a active.
- __Package__: indicates the package (if any) of the customization.
- __List__: Custom/Standard list used as a data source by the customization.
- __Last Modified File Date__: last date the file was modified
- __Customization Created By__: user who created the customization.
- __Customization Created Date__: date the customization was created.
- __Customization Last Modified By__: user who last modified the customization.
- __Script File Date__: date the script file was last modified.
- __Script File__: primary script file for a script customization.
- __Functions__: functions used in the script.
- __Script Fields__: fields used in the script file.
- __Attempt #__: number of times the script has tried to execute.
- __# of Lines__: number of lines in the script.
- __Manageable State__: the current state if it is from a managed/unmanaged package.

### Improvement

The improvement tab provides information about improvements that can be made on a customization such as clean up:

- __Clean Up Status__: This is the clean-up status of customizations that are to be deleted.
- __Change/Approval Policy__: This field designates the approval policy related to a customization.
- __Clean-up Classification__: This field shows an overview of the clean-up classification.
- __Add to Change Request__: Lookup tool to associate the clean up to an existing change request.

### Permissions

The permissions tabs displays the Read and Edit status for the roles.

### Health Settings

The Salesforce _Security Health Check_ is available in almost all versions of Salesforce. If you are not already using it to monitor critical permissions and security settings, our blog [Maintaining Org Security with the Salesforce Health Check](https://www.strongpoint.io/en/blog/what-is-salesforce-health-check) walks you through how it works and why it’s important.

There are new customization records for each Health Check group (session settings, file upload and security settings), so you can track and report on current settings. Based on your policy, Platform Governance for Salesforce can require advance approval for changes to these settings, effectively closing a potential security loophole and building more transparency (and auditability) into the system.

The Health Settings tab is located on the customization pages for the Salesforce Health Check, such as Session Settings, Password Policies and Certificates. This example shows the __Health Settings__ tab for the __PasswordPolicies__ customization.

![Example of the PasswordPolicies Health Settings tab](/static/img/product_docs/strongpointforsalesforce/customizations/health_settings_tab_example.png)

### Data Classification

The __Data Classification__ tab in the __Custom Field__ customization record gives you an at-a-glance look at all classified fields in the Object — who owns them, their compliance category, sensitivity level, and other important details. You also have access to custom reports showing you where your classified data can be found.

### Control

The control tab describes assigned controls on a customization record for example controls assigned on a financial report.

- __Control__: determines if the customization is a control.
- __Control Frequency__: frequency at which a control should be checked.
- __Track Duplicates__: specifies whether duplicate issues are to be tracked or not.
- __Control Type__: select count to record numbers, issues, tasks etc.
- __Control Assignee__: assign tasks, issues or alerts to someone other than the owner, if blank the control alerts the owner of the customization.
- __Controlled Process__: process this customization controls.
- __Control Count__: custom field created for the account.
- __Alert Control Owner__: check box to alert owner of the control.
- __Next Control Date Time__: notes the date and time when to start monitoring.
- __Risk/Requirement__: risk associated with the customization.
- __Last Control Run Date__: This is the last date the control was run.
- __Alert Process Owner__: check box to alert the process owner whenever an incident is detected.
- __Alert/Task Message__: The message that will be sent to the assignee on tasks or recipients of alerts.
- __Instructions for Resolution__: instructions for resolving the issue.
- __Control Error/Warning__: errors or warnings encountered when control was last run. Blank indicates no errors/warnings.

### DRD

Dependency Relationship Diagram ([DRD](/docs/product_docs/strongpointforsalesforce/tools/viewing_drd.md)) displays objects, customizations and their relationships and dependencies.

### Raw Data

This tab describes and list the XML code contained in a customization.

- __Last Scanner Date__: Last date in which the scanner ran and evaluated the current customization.
- __Rescanner__: information for rescanning the customization and evaluating progress of Apex Batches to show __In Progress__.
- __Make Join Date__: date customization was last passed to Make Join script.
- __Incomplete Object__: checked if the object is incomplete.
- __Suppress Changelog__: prevent changes from being made.
- __Script Fields (Raw)__: fields in the relevant script file.
- __Scripts (Raw)__: scripts used by other customizations.
- __Workflow/Approval Fields (Raw)__: data workflow fields.
- __Workflow Scripts (Raw)__: data workflow scripts.
- __Extended Types Fields (Raw)__: CSV of fields used by a customization.
- __Report/Search Fields (Raw)__: fields used in filter criteria or columns for a search.
- __Layout (Raw)__: custom field to hold custom fields of ListView, visual pages and layouts.
- __List (Raw)__: references related to this field.
- __Scanner Read__: check box to indicate if the retrieve and the customization was executed and read.
- __Folder File Name__: name of the folder and file where Salesforce has the Metadata component.
- __Encoded API Name__: field to note the retrieve with encoded API name.
- __XML/Code__: XML/code representation of the page for a customization.

### Related Lists

Links to related lists: Change Logs, Notes & Attachments and Customization History.
