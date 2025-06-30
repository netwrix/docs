# Install the Netwrix Threat Manager Reporting Module

The application can be installed on the same server as the PostgreSQL databases or a different
server. If installed on a different server, the location of the database server must be provided
while installing the application.

Follow the steps to install the application.

**CAUTION:** The PostgreSQL database application must be installed before the application is
installed.

**NOTE:** These steps assume you have launched the installer through the Netwrix Setup Launcher
(`Netwrix_Setup.exe`). If you are not using it, right-click on `NetwrixThreatManagerReporting.exe`
and select Run as administrator. Then skip to Step 2.

![postgresqlcheck](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/postgresqlcheck.webp)

**Step 1 –** Click **Netwrix Threat Manager Reporting**. The Netwrix Threat Manager Reporting Setup
wizard opens.

![Netwrix Threat Mannager Reporting Setup wizard on the Install page](/img/versioned_docs/threatprevention_7.4/threatprevention/install/upgrade/install.webp)

**Step 2 –** Click **Install**.

![Netwrix Threat Mannager Reporting Setup wizard on the End User License Agreement page](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.webp)

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement
checkbox. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Install Folder page](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/folder.webp)

**Step 4 –** By default, the installation directory is set to:

- Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the **Browse** button to modify as desired. Click Next.

![Netwrix Threat Mannager Reporting Setup wizard on the Database page](/img/versioned_docs/threatprevention_7.4/threatprevention/install/database.webp)

**Step 5 –** On the Database page, ensure the host and port are set correctly. If installing on the
same server where the PostgreSQL database application was installed, this information will be
accurate by default. The default database name is stealthdefend; however, it can be modified as
desired. Click **Test** to validate the connection information.

![Warning message that the database does not exist, Create?](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/databasecreatemessage.webp)

**Step 6 –** If a successful connection is made, a message window displays confirming the database
does not exist and you want to create it. Click **OK** and the window closes.

![Netwrix Threat Mannager Reporting Setup wizard on the Database page showing Ready for installation message](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/databaseready.webp)

**Step 7 –** A "Ready for installation" message appears on the Database page of the wizard and the
Next button is enabled. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Firewall Rules page](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/firewallrules.webp)

**Step 8 –** By default, the **Create Inbound Windows Firewall Rules** checkbox is selected,
indicating that the installer will create these. Deselect the checkbox if you do not want the
installer to automatically create these rules because you have already created them. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Completed page](/img/product_docs/accessanalyzer/11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 9 –** The installation process will begin and the Setup wizard will display the progress.
Click Exit when the installation completes successfully. The Netwrix Threat Manager Reporting Setup
wizard closes.

![Netwrix Setup Launcher showingThreat Manager Reporting Setup completed](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/applicationcheck.webp)

**Step 10 –** Now that both components have been installed, close the Netwrix Setup Launcher.

The Netwrix Threat Manager Reporting Module application is now installed and the database has been
created. There are several post-installation tasks that you may need to complete, depending on your
environment.

- [Secure the Reporting Module Console](/docs/threatprevention/7.4/install/reportingmodule/secure.md)
- During the first launch, you will set up the built-in Administrator account. See the
  [First Launch](/docs/threatprevention/7.4/install/reportingmodule/firstlaunch.md)
  topic for additional information.
