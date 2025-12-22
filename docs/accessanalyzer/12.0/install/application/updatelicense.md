---
title: "Update License Key"
description: "Update License Key"
sidebar_position: 60
---

# Update License Key

It is necessary to install a new license key for an existing Access Analyzer installation due to the
following:

- To renew a Access Analyzer license that is due to expire
- To grant access to additional Solutions
- To enable Sensitive Data Discovery

In these situations it is possible to update the license file without going through the full
installation process.

## Install a New License File

Follow the steps to update the Access Analyzer license key without installing a new version of the
Access Analyzer Console.

**Step 1 –** Ensure the new `StealthAUDIT.lic` license file is stored locally on the Access Analyzer
Console server in order to be referenced during the installation process.

![Windows Control Panel Uninstall or change a program window](/images/accessanalyzer/12.0/install/application/controlpaneluninstall.webp)

**Step 2 –** From Programs and Features (**Control Panel** > **Programs** > **Programs and
Features**), select the Access Analyzer application and click **Change**.

![Setup Wizard Welcome page](/images/accessanalyzer/12.0/install/application/welcome_1.webp)

**Step 3 –** On the Welcome page, click **Next**.

![Setup Wizard Change, Repair, or Remove Installation page](/images/accessanalyzer/12.0/install/application/change.webp)

**Step 4 –** On the Change, Repair, or Remove Installation page, click **Change**.

| ![License File page](/images/accessanalyzer/12.0/install/application/license.webp) | ![License File page](/images/accessanalyzer/12.0/install/application/licensemapped.webp) |
| :----------------------------: | :---------------------------------------------------: |
| *Default License File Page*    | *Mapped License File* |

**Step 5 –** On the License File page, click **Browse** and navigate to the **StealthAUDIT.lic**
file. It must be stored on the Access Analyzer Console server before the installation begins. When
the path to the file is visible in the text box, click **Next**. The license will be imported.

![License Features page](/images/accessanalyzer/12.0/install/application/licensefeatures.webp)

**Step 6 –** The License Features page displays a list of all features covered by the imported
license. It also displays the name of the organization which owns the license, the expiration date,
and the host limit. These are the features that will be installed. Click **Next**.

![Setup Wizard Ready to change page](/images/accessanalyzer/12.0/install/application/ready_1.webp)

**Step 7 –** On the Ready to Change Access Analyzer page, click **Change** to begin the update.

![Setup Wizard Completed page](/images/accessanalyzer/12.0/install/application/completed.webp)

**Step 8 –** When the installation has completed, click **Finish** to exit the wizard.

The new license file has been imported. If the license granted access to any additional solutions,
they will now be accessible from within the Access Analyzer Console. If the new license added
Sensitive Data Discovery, the necessary components for Sensitive Data Discovery have been installed.
