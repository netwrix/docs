---
sidebar_position: 6069
title: "FSAA:\_Scoping Options"
---

# FSAA: Scoping Options

The Scoping Options page is where scan settings, file details, and file properties settings can be configured for a specified resource in the targeted environment. It is a wizard page for the following categories:

* File System Access/Permission Auditing Scan
* Sensitive Data

![FSAA Data Collector Wizard Scoping Options page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/ScopingOptions.png "FSAA Data Collector Wizard Scoping Options page")

The Scoping Options buttons have the following:

* Add – Add a resource to be included or excluded in the scan. Opens the Scoping Configuration window.
* View/Edit – Make changes to a previously added resource. Opens the Scoping Configuration window.
* Remove – Deletes the resource from the table and therefore the scan
* Increase Priority – Sets a lower numerical value to the resource, which sets a higher priority when conflicting settings occur with one resource
* Decrease Priority – Sets a higher value to the resource, which sets a lower priority when conflicting settings occur with one resource
* Import – Import scoping options from a `.fsaascope` file.

  * If a conflict arises between an existing configured scoping option and an option that is being imported, the user will be prompted to resolve the conflict by either keeping the existing configuration or importing the new one, which will overwrite the scoping option.
* Export – Take the currently configured scoping options in the job and export it to a `.fsaascope` file

By default, priority is assigned in the order it is added to the table. Priority can also be manually assigned with the Increase Priority and Decrease Priority buttons or in the [Scoping Configuration Window](#_Scoping_Options:_Scan "Scoping Configuration Window"). If there is a conflict between an inclusion scoping option and an exclusion scoping option with the same priority, the inclusion takes precedence.

See the [Common Scoping Scenarios](#_Common_Scoping_Scenarios "Common Scoping Scenarios") section for example configurations of scoping options and the expected results.

## Scoping Configuration Window

The Scoping Configuration Window allows a specific share or folder to be included or excluded from the scan. Only included resources require additional scoping. Remember, these settings override the default scoping settings for the selected resource.

![Scoping Configuration Window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/ScopingConfigurationWindow.png "Scoping Configuration Window")

Set the Resource Name and Host Name:

* Resource Name – Specify a local path or individual share to the target folder or the share name
* Host Name – Apply scoping options to a specific target host. If a host name is not supplied, all hosts targeted by the job have the scoping options applied.

Both the Resource Name and Host Name textboxes support regular expressions and pattern matching.

* For wildcards – Use the `?` or `*` as the share or folder name. Example of Wildcard Support: You have three shares named `Share1`, `Share2`, and `MyShare`. You want to include `Share1` and `Share2`. You can enter into this field:

  * `share*`
  * `share?`
  * `Share*`
  * `SHARE?`
* For regular expressions – Use the prefix `RE:` and escape the backslash characters. Example of Regular Expression: To provide an expression that would include all shares or files that start with the letter `A`:

  **NOTE:** This option is case sensitive.

  * `RE:\\\\[^\\[+\\A`

Then set Scoping Type and Priority:

* Scoping Type – Choose from the dropdown menu the type of resource to scan:

  * Share Include – Provided share name is included in the scan. All scoping options must match or it is excluded.
  * Share Exclude – Provided share is excluded from the scan
  * Folder Include – Provided folder name is included in the scan. All scoping options must match or the scan ignores the resource.
  * Folder Exclude – Provided folder is excluded from the scan. All scoping options must match or it is excluded.

  **NOTE:** Any included files or folders inherit all options previously checked in the [FSAA: Default Scoping Options](DefaultScopingOptions "FSAA: Default Scoping Options") page. Manually apply new options if the default ones are not desired in this scan.

* Priority – Numerical value that determines which options are used in the case of more than one scoping option overlaps for a particular resource. Lower numerical values have a higher priority for this scan. When multiple scoping options are added to a single resource, and there is no conflict, the scoping options are merged. However, in some instances, the settings conflict. Below are some known conflicts and their results:
  * Conflict between two options for a single resource – Higher priority takes precedence
  * Folder scoping option conflicts with a share scoping option – Folder takes precedence
  * Conflict between two scoping options with the same priority – Path determines which option is used. The scoping option with the child takes precedence over the parent.
* Enable Button – Adds the scoping option to the scan criteria

See the [Scan Settings Tab](DefaultScopingOptions/ScanSettings "Scan Settings Tab"), [File Details Tab](DefaultScopingOptions/FileDetails "File Details Tab"), and [File Properties (Folder Summary) Tab](DefaultScopingOptions/FileProperties) Tab") tabs for more detail on these scoping options.

## Common Scoping Scenarios

The following examples show some common configurations of scoping options and the expected results.

Scenario 1

Scan for all shares except one.

![Common Scoping Options example Scenario 1](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/CommonScopingOptionsScenario1.png "Common Scoping Options example Scenario 1")

All shares included except for the ProbableOwner share.

Scenario 2

Scan for one share and exclude all others.

![Common Scoping Options example Scenario 2](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/CommonScopingOptionsScenario2.png "Common Scoping Options example Scenario 2")

The ProbableOwner Share is included. All other shares are excluded. Share Inclusion must have a priority that is greater than or equal to the Share Exclusion.

Scenario 3

Scan all folders except one.

![Common Scoping Options example Scenario 3](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/CommonScopingOptionsScenario3.png "Common Scoping Options example Scenario 3")

All Shares are scanned and all folders are included except for C:\ProbableOwner\DifferentOwner.

Scenario 4

Scan one folder and exclude all others.

![Common Scoping Options example Scenario 4](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/CommonScopingOptionsScenario4.png "Common Scoping Options example Scenario 4")

The ProbableOwner Share is included and all other shares are excluded. Within the ProbableOwner Share, Folder path C:\ProbableOwner\DifferentOwner is included. All other folder paths are excluded.

Scenario 5

Scan one folder and all of its children and exclude all others.

![Common Scoping Options example Scenario 5](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/CommonScopingOptionsScenario5.png "Common Scoping Options example Scenario 5")

The ProbableOwner Share is included and all other shares are excluded. Within the ProbableOwner Share, Folder path C:\ProbableOwner\DifferentOwner is included along with all of its children (Notice the \\* at the end of folder include path). All other folder paths are excluded.

Scenario 6

Scan for all content within a folder except one sub-folder.

![Common Scoping Options example Scenario 6](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/CommonScopingOptionsScenario6.png "Common Scoping Options example Scenario 6")

The ProbableOwner Share is included and all other shares are excluded. Within the ProbableOwner Share, Folder path C:\ProbableOwner\DifferentOwner is included along with all of its children (Notice the \\* at the end of folder include path). Within the DifferentOwner folder the path C:\ProbableOwner\DifferentOwner\Test2 is excluded (Notice the higher priority for the exclusion). All other folder paths are excluded.

Additional Considerations

The scoping options listed above can be used to scope for SMB shares and NFS exports but NFS exports are enumerated differently. The include/exclude logic outlined above should be the same for both, but when scoping for NFS exports the Resource Name should be the full path to the export.

For example, in the scenario below, the NFS export named NFS\_Export is included. All other exports are excluded. Within the NFS\_Export export, folder path \ifs\NFS\_Export\Test\_Folder is included. All other folder paths are excluded.

![FSAA Scoping Options NFS export example](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/FSAA/CommonScopingOptionsNFSExports.png "FSAA Scoping Options NFS export example")

Note the different slash types for exports compared to folders.