# Installing the SharePoint Agent

The installer will prompt for credentials which are used to set the identity that the SharePoint
Access Auditor Agent service runs as. The agent service does no additional impersonation, so this is
the account used to connect to and enumerate SharePoint. The service account credentials provided
need to be a member of the Log on as a service local policy. Additionally, the credentials provided
for Step 5 should also be a part of the Connection Profile used by the SharePoint Solution within
the Access Analyzer Console. See the
[SharePoint Scan Options](/docs/accessanalyzer/12.0/requirements/solutions/sharepoint/scanoptions.md) topic for detailed
permission information.

Follow the steps to install the SharePoint Agent on the application server which hosts the Central
Administration component of the targeted SharePoint farms.

**Step 1 –** Run the `SharePointAgent.exe` executable to open the Netwrix Access Analyzer (formerly
Enterprise Auditor) SharePoint Agent Setup Wizard.

![SharePoint Agent Setup Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![SharePoint Agent Setup Wizard End-User License Agreement page](/img/product_docs/activitymonitor/activitymonitor/install/eula.webp)

**Step 3 –** On the End-User License Agreement page, select the **I accept the terms in the License
Agreement** checkbox and click **Next**.

![SharePoint Agent Setup Wizard Destination Folder page](/img/product_docs/accessanalyzer/install/filesystemproxy/destination.webp)

**Step 4 –** On the Destination Folder page, click **Next** to install to the default folder or
click **Change** to select a different location.

![SharePoint Agent Setup Wizard Configure Service Security page](/img/product_docs/accessanalyzer/install/filesystemproxy/configureservice.webp)

**Step 5 –** On the Configure Service Security page, enter the **User Name** and **Password** for
the SharePoint Service Account. Click **Next**.

![SharePoint Agent Setup Wizard Ready to install page](/img/product_docs/activitymonitor/activitymonitor/install/ready.webp)

**Step 6 –** On the Ready to install Netwrix Access Analyzer (formerly Enterprise Auditor)
SharePoint Agent page, click **Install** to start the installation.

![SharePoint Agent Setup Wizard Completed page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.webp)

**Step 7 –** When the installation has completed, click **Finish** to exit the wizard.

Now that the SharePoint Agent has been installed on the appropriate application server, it can be
used by the SharePoint Solution. See the
[SharePoint Solution](/docs/accessanalyzer/12.0/solutions/sharepoint/overview.md) topic for instructions on enabling
agent service scans on the Agent Settings page.
