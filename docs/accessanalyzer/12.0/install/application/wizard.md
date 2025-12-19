---
title: "Access Analyzer Core Installation"
description: "Access Analyzer Core Installation"
sidebar_position: 20
---

# Access Analyzer Core Installation

Save the organization’s Access Analyzer license key, received from your Netwrix Sales
Representative, to the server where Access Analyzer is to be installed. Then follow the steps to
install Access Analyzer.

:::note
The process explained in this topic assumes that both the downloaded binary and the
license (.lic) file are located on the server which will become the Access Analyzer Console.
:::


:::warning
If User Account Control (UAC) is enabled on the server, ensure the installation package
is run in Administrative/privilege mode.
:::


**Step 1 –** Run the **Netwrixaccessanalyzer.exe** executable to open the Access Analyzer Setup
Wizard.

![Setup Wizard Welcome page](/images/accessanalyzer/12.0/install/application/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![ End User License Agreement](/images/accessanalyzer/12.0/install/application/eula.webp)

**Step 3 –** On the End-User License Agreement page, read the End User License Agreement, then check
the **I accept the terms in the License Agreement** box and click **Next**.

![Destinations Folder page](/images/accessanalyzer/12.0/install/application/destination.webp)

**Step 4 –** On the Destination Folder page, click **Change** to select the folder location to
install Access Analyzer. The default destination folder is
`C:\Program Files (x86)\STEALTHbits\StealthAUDIT\`. Click **Next** to continue.


 |![License File page](/images/accessanalyzer/12.0/install/application/license.webp)|![License File page](/images/accessanalyzer/12.0/install/application/licensemapped.webp)|
|:-------------------------:|:-------------------:|
| *Default License File Page* | *Mapped License File* |

**Step 5 –** On the License File page, click **Browse** and navigate to your **StealthAUDIT.lic**
file. When the path to the file is visible in the textbox, click **Next**.

:::note
The license file must be stored on the Access Analyzer Console server before the
installation begins.
:::


![License Features page](/images/accessanalyzer/12.0/install/application/licensefeatures.webp)

**Step 6 –** The License Features page displays a list of all features covered by the imported
license. It also displays the name of the organization which owns the license, the expiration date,
and the host limit. These are the features that will be installed. Click **Next**.

![Ready to install Netwrix Access Governance page](/images/accessanalyzer/12.0/install/application/ready.webp)

**Step 7 –** On the Ready to install Access Analyzer page, click **Install** to begin the
installation.

![Setup Wizard Completed page](/images/accessanalyzer/12.0/install/application/completed.webp)

**Step 8 –** When the installation has completed, click **Finish** to exit the wizard.

The Access Analyzer Console has been installed, and two desktop icons have been created: Access
Analyzer and Published Reports. Launch the Access Analyzer application to complete the initial
configuration.
