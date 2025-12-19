---
title: "Installing the SharePoint Agent"
description: "Installing the SharePoint Agent"
sidebar_position: 10
---

# Installing the SharePoint Agent

The installer will prompt for credentials which are used to set the identity that the SharePoint
Access Auditor Agent service runs as. The agent service does no additional impersonation, so this is
the account used to connect to and enumerate SharePoint. The service account credentials provided
need to be a member of the Log on as a service local policy. Additionally, the credentials provided
for Step 5 should also be a part of the Connection Profile used by the SharePoint Solution within
the Enterprise Auditor Console. See the
[SharePoint Scan Options](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/scanoptions.md)
topic for detailed permission information.

:::note
If utilizing the SharePoint Agent to scan for Sensitive Data, the 64-bit
`SensitiveDataAddon.msi` needs to be installed after the SharePoint Agent has been installed on the
SharePoint server. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
topic for additional information.
:::


Follow the steps to install the SharePoint Agent on the application server which hosts the Central
Administration component of the targeted SharePoint farms.

**Step 1 –** Run the `SharePointAgent.exe` executable to open the Netwrix Enterprise Auditor
SharePoint Agent Setup Wizard.

![SharePoint Agent Setup Wizard Welcome page](/images/accessanalyzer/11.6/install/sharepointagent/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![SharePoint Agent Setup Wizard End-User License Agreement page](/images/accessanalyzer/11.6/install/sharepointagent/eula.webp)

**Step 3 –** On the End-User License Agreement page, select the **I accept the terms in the License
Agreement** checkbox and click **Next**.

![SharePoint Agent Setup Wizard Destination Folder page](/images/accessanalyzer/11.6/install/sharepointagent/destination.webp)

**Step 4 –** On the Destination Folder page, click **Next** to install to the default folder or
click **Change** to select a different location.

![SharePoint Agent Setup Wizard Configure Service Security page](/images/accessanalyzer/11.6/install/sharepointagent/configureservice.webp)

**Step 5 –** On the Configure Service Security page, enter the **User Name** and **Password** for
the SharePoint Service Account. Click **Next**.

![SharePoint Agent Setup Wizard Ready to install page](/images/accessanalyzer/11.6/install/sharepointagent/ready.webp)

**Step 6 –** On the Ready to install Netwrix Enterprise Auditor SharePoint Agent page, click
**Install** to start the installation.

![SharePoint Agent Setup Wizard Completed page](/images/accessanalyzer/11.6/install/sharepointagent/completed.webp)

**Step 7 –** When the installation has completed, click **Finish** to exit the wizard.

Now that the SharePoint Agent has been installed on the appropriate application server, it can be
used by the SharePoint Solution. See the
[SharePoint Solution](/docs/accessanalyzer/11.6/solutions/sharepoint/overview.md)
topic for instructions on enabling agent service scans on the Agent Settings page.
