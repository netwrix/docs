# Enterprise Auditor Core Installation

Save the organization’s Enterprise Auditor license key, received from your Netwrix Sales
Representative, to the server where Enterprise Auditor is to be installed. Then follow the steps to
install Enterprise Auditor.

**NOTE:** The process explained in this topic assumes that both the downloaded binary and the
license (.lic) file are located on the server which will become the Enterprise Auditor Console.

**CAUTION:** If User Account Control (UAC) is enabled on the server, ensure the installation package
is run in Administrative/privilege mode.

**Step 1 –** Run the **Netwrixaccessanalyzer.exe** executable to open the Enterprise Auditor
Setup Wizard.

![Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![ End User License Agreement](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.webp)

**Step 3 –** On the End-User License Agreement page, read the End User License Agreement, then check
the **I accept the terms in the License Agreement** box and click **Next**.

![Destinations Folder page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/filesystemproxy/destination.webp)

**Step 4 –** On the Destination Folder page, click **Change** to select the folder location to
install Enterprise Auditor. The default destination folder is
`C:\Program Files (x86)\STEALTHbits\StealthAUDIT\`. Click **Next** to continue.

|                                                                                                         |     |                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![License File page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/license.webp) |     | ![License File page with mapped file](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/application/licensemapped.webp) |
| Default License File Page                                                                               |     | Mapped License File                                                                                                                       |

**Step 5 –** On the License File page, click **Browse** and navigate to your **StealthAUDIT.lic**
file. When the path to the file is visible in the textbox, click **Next**.

**NOTE:** The license file must be stored on the Enterprise Auditor Console server before the
installation begins.

![License Features page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/application/licensefeatures.webp)

**Step 6 –** The License Features page displays a list of all features covered by the imported
license. It also displays the name of the organization which owns the license, the expiration date,
and the host limit. These are the features that will be installed. Click **Next**.

![Ready to install Netwrix Access Governance page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.webp)

**Step 7 –** On the Ready to install Enterprise Auditor page, click **Install** to begin the
installation.

![Setup Wizard Completed page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 8 –** When the installation has completed, click **Finish** to exit the wizard.

The Enterprise Auditor Console has been installed, and two desktop icons have been created:
Enterprise Auditor and Published Reports. Launch the Enterprise Auditor application to complete the
initial configuration.
