# Access Analyzer Core Upgrade Instructions

__CAUTION:__ If Role Based Access has been enabled, a user with the Administrator role must perform the upgrade. Other user roles do not have the necessary permissions to perform upgrades.

Follow the steps to upgrade to Access Analyzer 12.0 on the same server where an older version of Access Analyzer is installed.

__NOTE:__ If any customizations have been done by a Netwrix Engineer, please ensure the custom work is not lost during the upgrade process. While using the Upgrade Wizard, customizations are archived prior to solution upgrades. These archives are available after the solution upgrades have been completed. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional information.

__CAUTION:__ The new global Settings will overwrite any previously configured Sensitive Data criteria. Make a note of any configured Sensitive Data Criteria before upgrading Access Analyzer. Sensitive Data Criteria must be reconfigured after an upgrade. See the [Configure Global Sensitive Data Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/upgrade/solutionconsiderations.md#Configure-Global-Sensitive-Data-Settings) topic for additional information.

![Windows Control Panel Uninstall or change a program window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/controlpaneluninstall.png)

__Step 1 –__ From Programs and Features (__Control Panel__ > __Programs__ > __Programs and Features__), uninstall the previous version of Access Analyzer. Jobs, application configuration files, and reports remain in the installation directory after the uninstall process.

__NOTE:__ If you have the old Netwrix Sensitive Data Discovery Add-On installed, you must uninstall it before continuing with this upgrade. For Access Analyzer 12.0, Sensitive Data Discovery is installed as part of the main installation if your license includes it.

- The ```WebServer.exe.config``` file is automatically retained in a Backup folder created under the Web folder of the installation directory. Any custom application settings contained in this file are kept as part of this upgrade process.

![Setup Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

__Step 2 –__ Install Access Analyzer 12.0. See the [Access Analyzer Core Installation](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/wizard.md) topic for detailed instructions.

- Before installation, ensure the new ```StealthAUDIT.lic``` license file is stored locally on the Access Analyzer Console in order to be referenced during the installation process
- Access Analyzer is installed to the following directory by default: ```…\STEALTHbits\StealthAUDIT```

  If another installation path is designated, please be sure to leave ```STEALTHbits\StealthAUDIT``` as the path suffix in the installation wizard.
- During the installation, any customizations to the settings in the ```WebServer.exe.config``` file are automatically restored from the backup file retained when installing the previous version. The ```../Web/Backup``` folder is deleted after the settings have been restored.

After the installation is completed, the upgrade wizard launches from the Access Analyzer desktop icon.

## Upgrade Wizard

Once the Access Analyzer installation process is complete, it is necessary to go through the Upgrade Wizard. There are three Upgrade options for a solution:

- Full Upgrade – Performs a full synchronization of the directory and file structure of the solution to mirror the Instant Solution
- Upgrade in place – Performs file content updates of jobs matching the Instant Solutions but does not change the Jobs tree structure
- Do not upgrade – No upgrade is performed, leaving the previous version of the solution

The default settings configured within the Advanced Upgrade Options window align with the best practices of the Netwrix Professional Services and Support teams.

The Upgrade Wizard conducts the following actions according to the State identified and whether the Upgrade action is set to __Full Upgrade__ or __Upgrade in place__:

| State | Condition | Action:  Full Upgrade | Action:  Upgrade in place |
| --- | --- | --- | --- |
| Normal | Job exists in Locked state and has matching ID in Instant Solutions | Upgrade | Upgrade |
| New | Job exists in Instant Solutions but not in the Jobs tree for an existing solution | Install | Install |
| Removed | Job exists in Locked state in the Jobs tree but does not exist in Instant Solutions | Delete | Nothing |
| Copied | Original job exists in original location, but multiple instances of the job exists | Delete | Upgrade |
| Moved | Original job exists but in a different location than in the Instant Solutions | Move & Upgrade | Upgrade |
| Renamed | Job found via ID match but was renamed | Rename & Upgrade | Upgrade |
| Conflict | Changes have been made to the job | Overwrite | Overwrite |

Conflicts are identified when customizations have been made by either a user or a Netwrix engineer. Conflicts need to be either resolved prior to the upgrade action or manually applied after the upgrade is complete. Conflict resolution can be done on the Changes window by undoing a customization. However, if the conflict is undone prior to a solution upgrade, then the customization will not be archived.

__CAUTION:__ If Role Based Access has been enabled, a user with the Administrator role must perform the upgrade. Other user roles do not have the necessary permissions to perform upgrades.

Follow the steps to use the Upgrade Wizard.

__Step 1 –__ Launch the Access Analyzer application. The installation wizard placed the Access Analyzer icon on the desktop.

![Configuration Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

__Step 2 –__ The Access Analyzer Configuration Wizard opens. Click __Next__ to continue.

__NOTE:__ When Access Analyzer12.0 is installed on a server where a previous version of Access Analyzer had been installed, the Version Selection page of the Configuration Wizard will not appear.

![Configuration Wizard Solution Set Files page with conflicts](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/upgrade/solutionsetfiles.png)

__Step 3 –__ On the Solution Set Files page, only upgrade conflicts are displayed by default.

___RECOMMENDED:___ Investigate the changes where conflicts have been identified before proceeding.

__Step 4 –__ (Optional) Select an item with the Conflict State and click __View conflicts__ to open the Changes window.

Additional options include:

- Show upgrade conflicts only – Displays upgrade actions for all solutions
- Advanced – Opens the Advanced Upgrade Options window to view or modify the Upgrade option per solution

![View conflicts in the Changes window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/upgrade/changes.png)

__Step 5 –__ (Optional) Conflicts can be resolved on the Changes window, which is opened by the __View conflicts__ button. Remember, if the conflict is resolved prior to a solution upgrade, then the customization will not be archived. To resolve a conflict, select it from the list and click __Undo__.

__Step 6 –__ When the Upgrade options have been set as desired. Click __Next__.

![Configuration wizard Options page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/options.png)

__Step 7 –__ On the Options page, select whether to send usage statistics to Netwrix to help us improve our product. After the Usage Statistics option is set as desired, click __Next__ to continue.

- If selected, usage statistics are collected and sent to Netwrix

  - Upon startup of the Access Analyzer console, the system checks if usage statistics have been sent in the last 7 days. If they have not been, stored procedures run against the Access Analyzer database and gather data about job runs, access times, and environmental details like resource counts, users counts, number of exceptions, and so on. This data is then sent back to Netwrix to help us identify usage trends and common pain points, so that we can use this information to improve the product.
  - Only anonymous statistic-level data is included. No private company or personal data is collected or sent to Netwrix.
- If cleared, no usage statistics are collected or sent to Netwrix

![Configuration Wizard Progress page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/upgrade/progress.png)

__Step 8 –__ The Upgrade Progress page opens and displays the progress of the upgrade actions. When the action completes, click __Finish__.

The Upgrade Wizard closes, and Access Analyzer launches. The archived Jobs directory is in a ZIP file located within the Jobs directory: ```…\STEALTHbits\StealthAUDIT\Jobs```.

The ZIP file name reflects the date and time of the upgrade. For example, the file name for an upgrade performed on June 4, 2023 at approximately 6 PM would be: ```20230604180542.zip```.
