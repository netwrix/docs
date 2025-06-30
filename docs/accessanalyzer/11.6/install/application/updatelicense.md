# Update License Key

It is necessary to install a new license key for an existing Enterprise Auditor installation due to
the following:

- To renew a Enterprise Auditor license that is due to expire
- To grant access to additional Solutions

In these situations it is possible to update the license file without going through the full
installation process.

## Install a New License File

Follow the steps to update the Enterprise Auditor license key without installing a new version of
the Enterprise Auditor Console.

**Step 1 –** Ensure the new `StealthAUDIT.lic` license file is stored locally on the Enterprise
Auditor Console server in order to be referenced during the installation process.

![Windows Control Panel Uninstall or change a program window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/controlpaneluninstall.webp)

**Step 2 –** From Programs and Features (**Control Panel** > **Programs** > **Programs and
Features**), select the Enterprise Auditor application and click **Change**.

![Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 3 –** On the Welcome page, click **Next**.

![Setup Wizard Change, Repair, or Remove Installation page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/change.webp)

**Step 4 –** On the Change, Repair, or Remove Installation page, click **Change**.

|                                                                                                         |     |                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![License File page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/license.webp) |     | ![License File page with mapped file](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/licensemapped.webp) |
| Default License File Page                                                                               |     | Mapped License File                                                                                                                       |

**Step 5 –** On the License File page, click **Browse** and navigate to the **StealthAUDIT.lic**
file. It must be stored on the Enterprise Auditor Console server before the installation begins.
When the path to the file is visible in the text box, click **Next**. The license will be imported.

![License Features page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/licensefeatures.webp)

**Step 6 –** The License Features page displays a list of all features covered by the imported
license. It also displays the name of the organization which owns the license, the expiration date,
and the host limit. These are the features that will be installed. Click **Next**.

![Setup Wizard Ready to change page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.webp)

**Step 7 –** On the Ready to Change Enterprise Auditor page, click **Change** to begin the update.

![Setup Wizard Completed page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 8 –** When the installation has completed, click **Finish** to exit the wizard.

The new license file has been imported. If the license granted access to any additional solutions,
they will now be accessible from within the Enterprise Auditor Console.
