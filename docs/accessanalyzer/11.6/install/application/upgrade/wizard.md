# Enterprise Auditor Core Upgrade Instructions

**CAUTION:** If Role Based Access has been enabled, a user with the Administrator role must perform
the upgrade. Other user roles do not have the necessary permissions to perform upgrades.

Follow the steps to upgrade to Enterprise Auditor 11.6 on the same server where an older version of
Enterprise Auditor is installed.

**NOTE:** If any customizations have been done by a Netwrix Engineer, please ensure the custom work
is not lost during the upgrade process. While using the Upgrade Wizard, customizations are archived
prior to solution upgrades. These archives are available after the solution upgrades have been
completed. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.

**CAUTION:** The new global Settings will overwrite any previously configured Sensitive Data
criteria. Make a note of any configured Sensitive Data Criteria before upgrading Enterprise Auditor.
Sensitive Data Criteria must be reconfigured after an upgrade. See the
[Configure Global Sensitive Data Settings](/docs/accessanalyzer/11.6/install/application/upgrade/solutionconsiderations.md#configure-global-sensitive-data-settings)
topic for additional information.

![Windows Control Panel Uninstall or change a program window](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/application/controlpaneluninstall.webp)

**Step 1 –** From Programs and Features (**Control Panel** > **Programs** > **Programs and
Features**), uninstall the previous version of Enterprise Auditor. Jobs, application configuration
files, and reports remain in the installation directory after the uninstall process.

- The `WebServer.exe.config` file is automatically retained in a Backup folder created under the Web
  folder of the installation directory. Any custom application settings contained in this file are
  kept as part of this upgrade process.

![Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 2 –** Install Enterprise Auditor 11.6. See the
[Enterprise Auditor Core Installation](/docs/accessanalyzer/11.6/install/application/wizard.md)
topic for detailed instructions.

- Before installation, ensure the new `StealthAUDIT.lic` license file is stored locally on the
  Enterprise Auditor Console in order to be referenced during the installation process
- Enterprise Auditor is installed to the following directory by default:
  `…\STEALTHbits\StealthAUDIT`

    If another installation path is designated, please be sure to leave `STEALTHbits\StealthAUDIT`
    as the path suffix in the installation wizard.

- During the installation, any customizations to the settings in the `WebServer.exe.config` file are
  automatically restored from the backup file retained when installing the previous version. The
  `../Web/Backup` folder is deleted after the settings have been restored.

After the installation is completed, the upgrade wizard launches from the Enterprise Auditor desktop
icon.

## Upgrade Wizard

Once the Enterprise Auditor installation process is complete, it is necessary to go through the
Upgrade Wizard. There are three Upgrade options for a solution:

- Full Upgrade – Performs a full synchronization of the directory and file structure of the solution
  to mirror the Instant Solution
- Upgrade in place – Performs file content updates of jobs matching the Instant Solutions but does
  not change the Jobs tree structure
- Do not upgrade – No upgrade is performed, leaving the previous version of the solution

The default settings configured within the Advanced Upgrade Options window align with the best
practices of the Netwrix Professional Services and Support teams.

The Upgrade Wizard conducts the following actions according to the State identified and whether the
Upgrade action is set to **Full Upgrade** or **Upgrade in place**:

| State    | Condition                                                                           | Action: Full Upgrade | Action: Upgrade in place |
| -------- | ----------------------------------------------------------------------------------- | -------------------- | ------------------------ |
| Normal   | Job exists in Locked state and has matching ID in Instant Solutions                 | Upgrade              | Upgrade                  |
| New      | Job exists in Instant Solutions but not in the Jobs tree for an existing solution   | Install              | Install                  |
| Removed  | Job exists in Locked state in the Jobs tree but does not exist in Instant Solutions | Delete               | Nothing                  |
| Copied   | Original job exists in original location, but multiple instances of the job exists  | Delete               | Upgrade                  |
| Moved    | Original job exists but in a different location than in the Instant Solutions       | Move & Upgrade       | Upgrade                  |
| Renamed  | Job found via ID match but was renamed                                              | Rename & Upgrade     | Upgrade                  |
| Conflict | Changes have been made to the job                                                   | Overwrite            | Overwrite                |

Conflicts are identified when customizations have been made by either a user or a Netwrix engineer.
Conflicts need to be either resolved prior to the upgrade action or manually applied after the
upgrade is complete. Conflict resolution can be done on the Changes window by undoing a
customization. However, if the conflict is undone prior to a solution upgrade, then the
customization will not be archived.

**CAUTION:** If Role Based Access has been enabled, a user with the Administrator role must perform
the upgrade. Other user roles do not have the necessary permissions to perform upgrades.

Follow the steps to use the Upgrade Wizard.

**Step 1 –** Launch the Enterprise Auditor application. The installation wizard placed the
Enterprise Auditor icon on the desktop.

![Configuration Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 2 –** The Enterprise Auditor Configuration Wizard opens. Click **Next** to continue.

**NOTE:** When Enterprise Auditor11.6 is installed on a server where a previous version of
Enterprise Auditor had been installed, the Version Selection page of the Configuration Wizard will
not appear.

![Configuration Wizard Solution Set Files page with conflicts](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/application/upgrade/solutionsetfiles.webp)

**Step 3 –** On the Solution Set Files page, only upgrade conflicts are displayed by default.

**_RECOMMENDED:_** Investigate the changes where conflicts have been identified before proceeding.

**Step 4 –** (Optional) Select an item with the Conflict State and click **View conflicts** to open
the Changes window.

Additional options include:

- Show upgrade conflicts only – Displays upgrade actions for all solutions
- Advanced – Opens the Advanced Upgrade Options window to view or modify the Upgrade option per
  solution

![View conflicts in the Changes window](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/application/upgrade/changes.webp)

**Step 5 –** (Optional) Conflicts can be resolved on the Changes window, which is opened by the
**View conflicts** button. Remember, if the conflict is resolved prior to a solution upgrade, then
the customization will not be archived. To resolve a conflict, select it from the list and click
**Undo**.

**Step 6 –** When the Upgrade options have been set as desired. Click **Next**.

![Configuration wizard Options page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/application/options.webp)

**Step 7 –** On the Options page, select whether to send usage statistics to Netwrix to help us
improve our product. After the Usage Statistics option is set as desired, click **Next** to
continue.

- If selected, usage statistics are collected and sent to Netwrix

    - Upon startup of the Enterprise Auditor console, the system checks if usage statistics have
      been sent in the last 7 days. If they have not been, stored procedures run against the
      Enterprise Auditor database and gather data about job runs, access times, and environmental
      details like resource counts, users counts, number of exceptions, and so on. This data is then
      sent back to Netwrix to help us identify usage trends and common pain points, so that we can
      use this information to improve the product.
    - Only anonymous statistic-level data is included. No private company or personal data is
      collected or sent to Netwrix.

- If cleared, no usage statistics are collected or sent to Netwrix

![Configuration Wizard Progress page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/application/upgrade/progress.webp)

**Step 8 –** The Upgrade Progress page opens and displays the progress of the upgrade actions. When
the action completes, click **Finish**.

The Upgrade Wizard closes, and Enterprise Auditor launches. The archived Jobs directory is in a ZIP
file located within the Jobs directory: `…\STEALTHbits\StealthAUDIT\Jobs`.

The ZIP file name reflects the date and time of the upgrade. For example, the file name for an
upgrade performed on June 4, 2023 at approximately 6 PM would be: `20230604180542.zip`.
