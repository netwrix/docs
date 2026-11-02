Classify each documentation page on two scales.

scope: how many readers depend on the page.
- product: every customer needs it (requirements, install, upgrade, first launch, security hardening, licensing, the landing page).
- feature: setting up or using a core feature of the product.
- sub-feature: one option, setting or subtype inside a feature.
- edge: a rare configuration, a narrow integration or a single error.

consequence: what happens if the page is wrong.
- high: the install or an upgrade can break, data can be lost, security weakens (credentials, permissions, keys, ports), or the license is breached.
- medium: a feature is misconfigured or does not work.
- low: the reader is confused or looks up a wrong value and can recover.

Judge by the page's job for the reader, not its folder. Return one JSON object keyed by the page's "short" path, each value
{ "scope": ..., "consequence": ..., "rationale": "six words or fewer" }. Return only the JSON.

Pages:

[
  {
    "short": "install/silentinstall.md",
    "title": "Silent Installation",
    "action": "NEW",
    "headings": [
      "# Silent Installation",
      "## Install variables",
      "### Install mode",
      "### HTTPS",
      "### PowerShell modules",
      "## Examples"
    ],
    "intro": "# Silent Installation\n\nInstall Threat Manager without the wizard by passing `Name=Value` variables to the installer on the command line.\n\n## Install variables\n\n| Variable | Accepted values | Default | What it does |\n| --- | --- | --- | --- |\n| `ProductInstallSettings_InstallMode` | `AllServices` or `Remote` | `AllServices` | Sets the install mode. The installer ignores it after a first install locks the machine to a mode. |\n| `ProductInstallSettings_EnableAdvancedInstall` | `True` or `False` | `False` | Shows the Advanced Settings page on a first install. |\n| `ProductInstallSettings_RemoteServ"
  },
  {
    "short": "install/actionservice.md",
    "title": "Optionally Install the Action Service on Additional Servers",
    "action": "REWRITE",
    "headings": [
      "# Optionally Install the Action Service on Additional Servers",
      "## Install Remote Services",
      "## Configure a Remote Service to Register with Threat Manager",
      "### Configure a Remote Service from a Console",
      "## Check the Status of a Remote Service",
      "## Configure a Service Account to Run Actions"
    ],
    "intro": "# Optionally Install the Action Service on Additional Servers\n\nThe Action Service and the Integration Service can run on servers other than the Threat Manager server. You install both from the main installer, `NetwrixThreatManager.exe`, as a remote install. The Action Service runs the actions that you define in the console from different locations in your organization.\n\nThe Action Service is an optional feature of the main installer. The installer registers it as the service SBTSDACTION with the display name \"Netwrix Threat Manager Action Service\". The separate Netwrix Threat Manager Action Se"
  },
  {
    "short": "install/exportsigningkeys.md",
    "title": "Export the JWT Signing Key to Another Host",
    "action": "NEW",
    "headings": [
      "# Export the JWT Signing Key to Another Host",
      "## Prerequisites",
      "## Export the key",
      "## Import the key on the new host",
      "## Limits",
      "## Troubleshooting"
    ],
    "intro": "# Export the JWT Signing Key to Another Host\n\nUse the installer's **Export Signing Keys** action to create a single-file `.exe` that carries the JWT signing key, encrypted with a one-time code. Run the file on another host to write the key to that host's registry.\n\n## Prerequisites\n\n- You installed Threat Manager, and a JWT signing key exists. See [JWT Signing Key](/docs/threatmanager/3.4/install/signingkey.md).\n- You have Administrator rights on the host where you import the key.\n- The other host has .NET Framework 4.7.2 or later.\n\n## Export the key\n\n**Step 1 –** Start the installer. The Welc"
  },
  {
    "short": "install/integration/syslogevents.md",
    "title": "Syslog Event Fields",
    "action": "NEW",
    "headings": [
      "# Syslog Event Fields",
      "## Perpetrator name",
      "## Storage accounts"
    ],
    "intro": "# Syslog Event Fields\n\nThreat Manager reads fields in incoming syslog events to set the perpetrator name on the event. Syslog events from Netwrix Access Management (NAM) can carry `upn=` and `ntname=` fields.\n\n## Perpetrator name\n\nThreat Manager takes the perpetrator name from the first field that has a value, in this order:\n\n1. `ntname`\n2. `upn`\n3. `username`\n4. `usrname`\n\nIt skips a blank value. This prevents wrong display names for accounts that aren't synced.\n\n## Storage accounts\n\nA storage account perpetrator with the reserved storage key GUID always shows the reserved storage key name. T"
  },
  {
    "short": "install/signingkey.md",
    "title": "JWT Signing Key",
    "action": "NEW",
    "headings": [
      "# JWT Signing Key",
      "## Where the key is stored",
      "## When the key is missing",
      "## Installer errors"
    ],
    "intro": "# JWT Signing Key\n\nThe Threat Manager services sign login tokens with an RSA private key. The installer generates this JWT signing key on a fresh install. If a signing key already exists in the registry, the installer leaves it unchanged.\n\n## Where the key is stored\n\nThe key is in the registry value `JwtSigningKey` under `HKLM\\SOFTWARE\\STEALTHbits Technologies\\StealthDEFEND\\Security`. DPAPI protects it with the Local Machine scope. Only SYSTEM and Administrators can read it. Grant read access manually to any service account that needs it.\n\nBecause DPAPI binds the key to the machine, copying th"
  },
  {
    "short": "install/secure.md",
    "title": "Secure the Threat Manager Console",
    "action": "REWRITE",
    "headings": [
      "# Secure the Threat Manager Console",
      "## When the Securing Threat Manager page appears",
      "## Choose how Threat Manager is secured",
      "## Generate a self-signed certificate",
      "## Change the certificate after installation"
    ],
    "intro": "# Secure the Threat Manager Console\n\nThe installer has a page titled **Securing Threat Manager**. It sets whether the web console and the services use HTTPS. The page applies to the Web Service in every install mode. It applies to the Integration Service only in a remote install. The installer enables HTTPS by default for remote Integration Service installs.\n\n## When the Securing Threat Manager page appears\n\nThe page appears in these cases:\n\n- **Install** – When a service has no `appsettings.json` file yet, or when you selected **Advanced Installation** on the Welcome page.\n- **Modify** – Alwa"
  },
  {
    "short": "install/upgrade/upgrade3.4.md",
    "title": "Upgrade from 3.3 to 3.4",
    "action": "REWRITE",
    "headings": [
      "# Upgrade from 3.3 to 3.4",
      "## After the upgrade",
      "### Register remote services again",
      "### First Time Location",
      "### Entra ID synchronization"
    ],
    "intro": "# Upgrade from 3.3 to 3.4\n\nThis page covers what changes when you upgrade Threat Manager from 3.3 to 3.4. For the general procedure, see [Upgrade Procedure](/docs/threatmanager/3.4/install/upgrade/upgrade.md).\n\n## After the upgrade\n\n### Register remote services again\n\nA service registered before 3.4 has no status token, so Threat Manager can't verify its connection until you register the service again. Register each remote service that you registered before 3.4. See [Optionally Install the Action Service on Additional Servers](/docs/threatmanager/3.4/install/actionservice.md).\n\n### First Time "
  },
  {
    "short": "threats/entraid.md",
    "title": "Entra ID Threats",
    "action": "UPDATE",
    "headings": [
      "# Entra ID Threats",
      "## Application Permission Change",
      "## Compromised User Activity",
      "## Impossible Travel",
      "## New Applicaton Credentials",
      "## Sensitive Role Changes",
      "## First Time Location",
      "## Authentication Methods Policy Weakening",
      "## Security Policy Weakening"
    ],
    "intro": "# Entra ID Threats\n\nThreat Manager monitors the following threats for Microsoft Entra ID. In the threat configuration list, they appear\nunder the Azure group.\n\n## Application Permission Change\n\nThe Application Permission Change is when someone grants a sensitive or risky permission to an\napplication.\n\n| Application Permission Change |                                                                                                                                                                                                                                                                        "
  },
  {
    "short": "administration/configuration/threatdetection/threatconfiguration.md",
    "title": "Fine Tune a Threat",
    "action": "UPDATE",
    "headings": [
      "# Fine Tune a Threat",
      "### Processing Tab",
      "### Exclusions Tab",
      "### Settings Tab"
    ],
    "intro": "# Fine Tune a Threat\n\nSelecting a threat in the Threats list displays details for that threat. The Threat Description box\ndisplays the name and description of the threat.\n\n![This screensot displays the Threat Details box.](/images/threatmanager/3.0/administration/configuration/threatdetails.webp)\n\nThe Threat Configuration Box contains a Processing tab, an Exclusions tab, and in some cases a\nSettings tab.\n\n### Processing Tab\n\nThe Processing tab contains the configuration options for processing the threat.\n\n![This screenshot displays the Processing tab.](/images/threatmanager/3.0/administration/"
  },
  {
    "short": "administration/configuration/integrations/entraidsync.md",
    "title": "Entra ID Sync Page",
    "action": "UPDATE",
    "headings": [
      "# Entra ID Sync Page",
      "## Add an Entra ID Sync Policy",
      "## Entra ID Sync Policy Details",
      "## Tenant Configuration Tab",
      "## Sync History Tab",
      "### Risky sync behavior",
      "## Modify Entra ID Sync Policy"
    ],
    "intro": "# Entra ID Sync Page\n\nThe Entra ID Sync page within the Integrations interface lists the Entra ID tenants you configured\nthe application to sync. See the\n[Application Permissions for Entra ID Sync](/docs/threatmanager/3.4/requirements/permissions/entraidsync.md) topic\nfor additional information about the permissions that Microsoft Entra ID syncing requires.\n\n![Entra ID Sync Page](/images/threatmanager/3.0/administration/configuration/integrations/entraidsync.webp)\n\nMicrosoft Entra ID Sync schedules the Azure service to collect Microsoft Entra ID data for the\nspecified Microsoft Entra ID tenant"
  },
  {
    "short": "install/application.md",
    "title": "Install the Threat Manager Application",
    "action": "UPDATE",
    "headings": [
      "# Install the Threat Manager Application"
    ],
    "intro": "# Install the Threat Manager Application\n\nThe application can be installed on the same server as the PostgreSQL databases or a different\nserver. If you install it on a different server, provide the location of the database server\nwhile installing the application.\n\nTo install the application:\n\n:::warning\nInstall the PostgreSQL database application before the application.\n:::\n\n\n:::note\nThese steps assume you have launched the installer through the Netwrix Setup Launcher\n(`Netwrix_Setup.exe`). If you aren't using it, right-click `NetwrixThreatManager.exe` and select\nRun as administrator. Then ski"
  },
  {
    "short": "administration/configuration/integrations/apptoken.md",
    "title": "App Tokens Page",
    "action": "UPDATE",
    "headings": [
      "# App Tokens Page",
      "## Generate an App Token",
      "## View and Copy the App Token"
    ],
    "intro": "# App Tokens Page\n\nThe App Tokens page lets you generate and manage the app tokens needed to send data\nto Threat Manager. Threat Manager and the Activity Monitor use an app token to push Active\nDirectory activity data into the Threat Manager database. Access Analyzer uses an app token to\npush a list of files containing sensitive data into the Threat Manager database.\n\n![page](/images/threatmanager/3.0/administration/configuration/integrations/page_1.webp)\n\nGenerate an app token for each product integration. The App Tokens table displays\nthe following information for each generated app token:\n\n"
  },
  {
    "short": "requirements/server.md",
    "title": "Application Server Requirements",
    "action": "UPDATE",
    "headings": [
      "# Application Server Requirements",
      "## Virtual Environment Recommendations"
    ],
    "intro": "# Application Server Requirements\n\n:::warning\nYou can install only one of Netwrix Threat Manager and Netwrix Threat Manager Reporting on a\nmachine. They share one upgrade code.\n:::\n\n\nThe Windows server can be physical or virtual. Threat Manager supports the following Windows server operating systems:\n\n- Windows Server 2022\n- Windows Server 2019\n- Windows Server 2016\n\nAdditionally the server must meet these requirements:\n\n- United States English language installation\n- 64-bit Windows only\n- Administrator rights to run the installer\n- Windows Server 2008 R2 SP1 or later and .NET Framework 4.7.2,"
  },
  {
    "short": "administration/configuration/policies/policiesconfiguration.md",
    "title": "Policy Configuration",
    "action": "UPDATE",
    "headings": [
      "# Policy Configuration",
      "## Configuration Tab",
      "## Hosts Tab",
      "## Deployment Tab",
      "## Deployment Status Window",
      "## History Tab"
    ],
    "intro": "# Policy Configuration\n\nThe Policy Details page displays information about the Honeytoken configuration.\n\n:::note\nTo enable policies for Honeytokens, configure the settings on the Configuration\ntab.\n:::\n\n\n![detailspage](/images/threatmanager/3.0/administration/configuration/policies/detailspage.webp)\n\nThe Policies box displays the name of the Honeytoken policy. The Policy Information box displays the\nHoneytoken policy and a description if specified. Click the Edit button to change the name of the\nHoneytoken policy. If you change the policy name, click the Save button to save the new name. Clic"
  },
  {
    "short": "index.md",
    "title": "Netwrix Threat Manager v3.4 Documentation",
    "action": "UPDATE",
    "headings": [
      "# Netwrix Threat Manager v3.4 Documentation",
      "## Architecture",
      "## Administration",
      "## Supported Platforms",
      "## Threat Manager Threats"
    ],
    "intro": "# Netwrix Threat Manager v3.4 Documentation\n\nThreat Manager detects and responds to abnormal behavior and advanced attacks against Active\nDirectory and File Systems. Threat Manager provides\nprogrammatic and automated response options when it identifies threats. In addition to an extensive\ncatalog of preconfigured response actions, Threat Manager can be configured to integrate with your\nown business processes using integrated PowerShell or webhook facilities.\n\nThreat Manager can also deliver threat data to administrators in their preferred applications,\nincluding Microsoft Teams, Slack, Service"
  },
  {
    "short": "requirements/database.md",
    "title": "Database Server Requirements",
    "action": "UPDATE",
    "headings": [
      "# Database Server Requirements"
    ],
    "intro": "# Database Server Requirements\n\n:::note\nUse this information when the database server is separate from the application server.\n:::\n\n\nThe Windows server can be physical or virtual. Threat Manager supports the following Windows server operating systems:\n\n- Windows Server 2022\n- Windows Server 2019\n- Windows Server 2016\n\nAdditionally the server must meet these requirements:\n\n- United States English language installation\n\n**Additional Considerations**\n\nAccommodate the following considerations:\n\n- When you run antivirus scans against the PostgreSQL 18 or PostgreSQL 14 database, exclude the\n  Postgr"
  },
  {
    "short": "requirements/actionservice.md",
    "title": "Action Service Requirements",
    "action": "UPDATE",
    "headings": [
      "# Action Service Requirements"
    ],
    "intro": "# Action Service Requirements\n\nThe Action Service is an optional feature of the main installer. To install it on another server,\nrun `NetwrixThreatManager.exe` on that server and select **Remote Services Only**.\n\n:::tip\nOn the Threat Manager server, select the Action Service feature during installation.\n:::\n\n\nThe Windows server can be physical or virtual. Threat Manager supports the following Windows server operating systems:\n\n- Windows Server 2022\n- Windows Server 2019\n- Windows Server 2016\n\nAdditionally the server must meet these requirements:\n\n- United States English language installation\n\n"
  },
  {
    "short": "administration/threats/threatdetails/overview.md",
    "title": "Threat Details Page",
    "action": "UPDATE",
    "headings": [
      "# Threat Details Page",
      "### First Time Location Map",
      "### Impossible Travel Map",
      "## Workflow Window",
      "## Threat Response Window",
      "## Event Details Tab",
      "## Related Threats Tab",
      "## Related Activity Tab",
      "## History Tab"
    ],
    "intro": "# Threat Details Page\n\nThe Threat Details page provides details on the selected threat. View the details for a threat by\nselecting the threat from the list on the [Threats Page](/docs/threatmanager/3.4/administration/threats/threats.md) and clicking View Details.\n\n![threatdetails](/images/threatmanager/3.0/administration/threatdetails/threatdetails.webp)\n\nThe top of the page displays a Threat Overview box, a Threat Activity panel, and an Evidence box.\nThe Impossible Travel view doesn't repeat the Evidence box.\n\nThe Threat Overview box that contains the following information:\n\n- Description – D"
  },
  {
    "short": "install/database.md",
    "title": "Install the PostgreSQL Database Application",
    "action": "UPDATE",
    "headings": [
      "# Install the PostgreSQL Database Application",
      "## Optionally Configure the Postgres.conf File"
    ],
    "intro": "# Install the PostgreSQL Database Application\n\nThe PostgreSQL database application can be installed on the same server as the application or a\ndifferent server. If you install it on a different server, provide the location of the database\nserver while installing the application.\n\nTo install the PostgreSQL database application:\n\n:::warning\nInstall the PostgreSQL database application before the application.\n:::\n\n\n:::note\nThese steps assume you have launched the installer through the Netwrix Setup Launcher\n`(Netwrix_Setup.exe`). If you aren't using the launcher, right-click `NetwrixPostgreSQL18.e"
  },
  {
    "short": "requirements/overview.md",
    "title": "Requirements",
    "action": "UPDATE",
    "headings": [
      "# Requirements",
      "## Architecture Overview"
    ],
    "intro": "# Requirements\n\nThis topic describes the recommended configuration of the servers needed to install the application\nin a production environment. Depending on the size of the organization, Netwrix recommends that you review\nyour environment and requirements with a Netwrix engineer before deployment to ensure all\nexceptions are covered.\n\n## Architecture Overview\n\nThe following servers are required for installation of the application:\n\n**Core Component**\n\n- Threat Manager Database Server – This is where you install the Threat Manager PostgreSQL\n  database.\n- Threat Manager Application Server – Th"
  },
  {
    "short": "install/firstlaunch/firstlaunch.md",
    "title": "First Launch",
    "action": "UPDATE",
    "headings": [
      "# First Launch",
      "## Configure MFA for the Bultin Administrator Account"
    ],
    "intro": "# First Launch\n\nThe installer places the following icon on the desktop, which opens the Threat Manager console:\n\n![Desktop icon](/images/threatmanager/3.0/install/desktopicon.webp)\n\n**Step 1 –** Double-click the **Netwrix Threat Manager Dashboard** icon to open the console for the\nfirst time.\n\n![First launch showing fields for setting up the builtin Administrator account](/images/threatprevention/7.5/install/reportingmodule/builtinadminpassword.webp)\n\nThe built-in ADMIN account handles the initial configuration steps and grants user access.\nThe User Name is \"admin\". You will set the password a"
  },
  {
    "short": "install/overview.md",
    "title": "Installation",
    "action": "UPDATE",
    "headings": [
      "# Installation",
      "## Software Download",
      "## Antivirus Exclusions for PostgreSQL",
      "## Installation Process"
    ],
    "intro": "# Installation\n\nBefore installing Threat Manager, ensure that you meet all of the prerequisites in\naccordance with the [Requirements](/docs/threatmanager/3.4/requirements/overview.md) topic. Additionally, the monitoring\nagents must use either Netwrix Threat Prevention or Netwrix Activity Monitor, and you must\nconfigure them to send data to Threat Manager.\n\nThe Threat Manager installer includes the following executable files.\n\n:::warning\nInstall the PostgreSQL database before installing Threat Manager.\n:::\n\n\n**Netwrix_Setup.exe**\n\nThis executable starts a setup launcher containing buttons to in"
  },
  {
    "short": "install/upgrade/upgrade.md",
    "title": "Upgrade Procedure",
    "action": "UPDATE",
    "headings": [
      "# Upgrade Procedure",
      "## Considerations",
      "## Threat Manager Services",
      "## Signing Key",
      "## After the Upgrade",
      "## Upgrade Cases"
    ],
    "intro": "# Upgrade Procedure\n\nThis topic describes the steps needed for upgrading Threat Manager to the latest version.\n\n\n## Considerations\n\nConfigure integration with one or more Netwrix products to feed the type of data you want into Threat\nManager:\n\n- [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)\n- [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)\n- [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)\n\nIf you use Netwrix Activity Monitor to send data to Thr"
  },
  {
    "short": "install/firstlaunch/login.md",
    "title": "User Login After First Launch",
    "action": "UPDATE",
    "headings": [
      "# User Login After First Launch"
    ],
    "intro": "# User Login After First Launch\n\nAfter you install Threat Manager, users with access can log into the console using either of the\nfollowing methods:\n\nLog into Threat Manager locally on the default port using default credentials. For example\n\n- http://localhost:8080\n- http://[MACHINENAME.DOMAIN.COM]:8080\n\nThese addresses apply when you didn't select HTTPS in the installer. When you select HTTPS, the Dashboard\nshortcuts and the launch after installation open `https://<fully qualified host name>:<port>`. The port is the\n`WebService:Port` value, 5000 by default.\n\nThe login, multifactor authenticat"
  },
  {
    "short": "requirements/ports.md",
    "title": "Ports Requirements",
    "action": "UPDATE",
    "headings": [
      "# Ports Requirements",
      "## Data Stream Firewall Rules",
      "## Database Firewall Rules",
      "## Application Console Access Firewall Rules",
      "## Active Directory Domain Controllers Firewall Rules",
      "## Remote Action Service Firewall Rules",
      "## Integration Service Firewall Rules"
    ],
    "intro": "# Ports Requirements\n\nThe following figure shows Netwrix Threat Manager architecture and component interactions.\n\n![threatmanagerserver](/images/threatmanager/3.0/requirements/threatmanagerserver.webp)\n\nConfigure appropriate firewall rules to allow these connections.\n\n## Data Stream Firewall Rules\n\nThe Threat Manager server and applications that provide the data stream need the following firewall\nsettings to communicate:\n\n| Communication Direction | Protocol | Ports | Description                                                                                                                    "
  },
  {
    "short": "install/appsettings.md",
    "title": "Modify Service Configuration Settings",
    "action": "UPDATE",
    "headings": [
      "# Modify Service Configuration Settings",
      "## Configuration Files",
      "## Override Specific Settings",
      "## Apply Configuration Changes",
      "## Troubleshooting"
    ],
    "intro": "# Modify Service Configuration Settings\n\nThreat Manager services are configured through JSON configuration files. Each service reads its\nsettings at startup from `appsettings.json` in the service's installation directory.\n\n## Configuration Files\n\nEach service ships with an `appsettings.default.json` file that contains the default settings used\nwhen no override is present. Every upgrade replaces this file, so don't edit it\ndirectly. Use it as a reference to see what settings are available for a given service.\n\nTo override settings for a service, create an `appsettings.json` file in the same dir"
  },
  {
    "short": "administration/overview.md",
    "title": "Administration",
    "action": "UPDATE",
    "headings": [
      "# Administration",
      "## Home Page",
      "## Threats Page",
      "## Investigate Page",
      "## Interactive Chart Elements",
      "## Preview Windows",
      "## Data Grids"
    ],
    "intro": "# Administration\n\nThe navigation header contains the following links on the top left side of the page:\n\n![headerbarleft](/images/threatmanager/3.0/administration/headerbarleft.webp)\n\n- Threat Manager – Opens the Home page for the Threat Manager Console\n- Threats – Opens the [Threats Page](/docs/threatmanager/3.4/administration/threats/threats.md)\n- Investigate – Opens the [Investigations Interface](/docs/threatmanager/3.4/administration/investigations/overview.md)\n\n:::note\nFor mobile users, the console shows only the icons for the Threats and Investigate links.\n:::\n\n\nThe header bar contains th"
  },
  {
    "short": "administration/playbooks/action/entraid.md",
    "title": "Entra ID Target Actions",
    "action": "UPDATE",
    "headings": [
      "# Entra ID Target Actions",
      "## Entra ID Group Membership",
      "## Flag Entra ID User as Confirmed Compromised",
      "## Disable Entra ID User",
      "## Reset Entra ID Password"
    ],
    "intro": "# Entra ID Target Actions\n\nThe following actions target an Entra ID application.\n\n## Entra ID Group Membership\n\nManages an Entra ID group's membership by adding or removing an object from a group.\n\n![entraidmembership](/images/threatmanager/3.0/administration/playbooks/action/entraidmembership.webp)\n\n- Users – Select the users for whom to alter group membership. If you leave it blank, the action uses the user who\n  triggered the threat.\n    - Perpetrator – The account that initiated the threat\n    - Users Affected – Users the threat affected\n    - Both Perpetrators and Users Affected – The acc"
  },
  {
    "short": "administration/investigations/newinvestigation.md",
    "title": "New Investigation Page",
    "action": "UPDATE",
    "headings": [
      "# New Investigation Page",
      "## Save an Investigation"
    ],
    "intro": "# New Investigation Page\n\nUse the New Investigation page within the Investigations interface to run queries on\navailable data with the filters you want for a specific timeframe.\n\n![Investigations interface on the New Investigation page](/images/threatmanager/3.0/administration/investigations/interface.webp)\n\nTo generate a new investigation report, configure the filters as desired and set the timeframe. See\nthe [Filters Section](/docs/threatmanager/3.4/administration/investigations/options/filters.md) topic for additional information.\n\nThen click **Run Query**. The sections that follow the Filt"
  },
  {
    "short": "administration/investigations/reports.md",
    "title": "Investigation Reports",
    "action": "UPDATE",
    "headings": [
      "# Investigation Reports",
      "## Events Details Section",
      "## Events Over Time Section",
      "## Top Resources Section"
    ],
    "intro": "# Investigation Reports\n\nEvery report generated by an investigation query displays the following information:\n\n- Event Details – Provides a view of all events matching the criteria you specify for the\n  investigation. See the Events Details Section topic for additional information.\n- Events Over Time – Provides a bar graph and pie chart for events matching the criteria you specify\n  for the investigation. See the Events Over Time Section topic for additional information.\n- Top Resources – Provides summary statistics for perpetrators (users) and targets (hosts)\n  associated with the events matc"
  },
  {
    "short": "administration/configuration/systemsettings/licensing.md",
    "title": "Licensing Page",
    "action": "UPDATE",
    "headings": [
      "# Licensing Page",
      "## Import License",
      "## Troubleshoot License Errors"
    ],
    "intro": "# Licensing Page\n\nThe Licensing page of the System Settings interface displays license information. Threat\nManager comes with a temporary trial license.\n\n{/* TODO: confirm the trial license length in code. */}\n\nThreat Manager deletes the bundled trial key file (`{ProductName}_Trial.key`) only after the key\nactivates. If activation fails, the file stays in place, and Threat Manager keeps the existing\nlicense information until the next activation. A ReportOnly install doesn't activate or use the bundled trial key, so a later\nupgrade to Full still gets a trial period.\n\n![System Settings interface"
  },
  {
    "short": "administration/playbooks/action/tag.md",
    "title": "Tag Threat Actions",
    "action": "UPDATE",
    "headings": [
      "# Tag Threat Actions",
      "### Tag Object",
      "### Manage Blocking Policy"
    ],
    "intro": "# Tag Threat Actions\n\nThe following action targets Threat Manager.\n\n### Tag Object\n\nThis action adds tags to objects associated with a threat.\n\n![tagobject](/images/threatmanager/3.0/administration/playbooks/action/tagobject.webp)\n\n- Tags – Select the tags to apply to the object.\n- Action – Specify whether to add or remove tags. If you don't specify one, the action adds the tag.\n- Objects – Select which objects to tag. If you don't specify one, the action uses the user who triggered the threat. For each tagged object, such as the perpetrator, host, client, or affected objects, the\n  action sen"
  },
  {
    "short": "administration/investigations/options/export.md",
    "title": "Export Report",
    "action": "UPDATE",
    "headings": [
      "# Export Report",
      "## Send as Email",
      "## Scheduled Export"
    ],
    "intro": "# Export Report\n\nAn export puts the report results for an investigation into a desired format. The Export option\nprovides choices for how you can export the report results for an investigation. You can export the\nreport in a specified format and download, email, or schedule it as desired.\n\n![Export option in the Investigation interface](/images/threatmanager/3.0/administration/investigations/options/export.webp)\n\nAfter running an investigation query, click **Export**. Then select one of the following from the\ndropdown menu:\n\n- Export as CSV – Generates and downloads the report as a CSV file to"
  },
  {
    "short": "administration/playbooks/action/localhost.md",
    "title": "Local Host Target Actions",
    "action": "UPDATE",
    "headings": [
      "# Local Host Target Actions",
      "## PowerShell Script",
      "## Send Email",
      "## Stop Process",
      "## End User Session"
    ],
    "intro": "# Local Host Target Actions\n\nThe following actions target the Threat Manager server.\n\n## PowerShell Script\n\nThe PowerShell Script action executes a specified PowerShell script. Use this action to\nbuild a custom threat response, using PowerShell, to handle scenarios not covered by other\npreconfigured action steps.\n\n![powershellscriptactionstep](/images/threatmanager/3.0/administration/playbooks/action/powershellscriptactionstep.webp)\n\n- PowerShell Script – Select the PowerShell script to execute. By default, the PowerShell script\n  includes a comment section which includes Threat Manager threat"
  },
  {
    "short": "threats/custom.md",
    "title": "Custom Threats",
    "action": "UPDATE",
    "headings": [
      "# Custom Threats",
      "## Custom Option on the Threat Detection Page",
      "## How Threat Manager Evaluates Custom Threats",
      "### Polling settings",
      "## Create Threat Option on the Investigation Page"
    ],
    "intro": "# Custom Threats\n\nIn additional to pre-configured threats, Threat Manager lets you create custom\nthreats. A user can create a custom threat if they consider certain events to be dangerous in their\nenvironment. For example, when one of the privileged users makes file changes.\n\nCustom threats can be created in one of the following ways:\n\n- Custom Option on the Threat Detection Page\n- Create Threat Option on the Investigation Page\n\n## Custom Option on the Threat Detection Page\n\nTo create a custom threat:\n\n**Step 1 –** Click the gear icon at the top right of the screen.\n\n**Step 2 –** Select **Thre"
  },
  {
    "short": "administration/investigations/options/subscription.md",
    "title": "Add Subscription",
    "action": "UPDATE",
    "headings": [
      "# Add Subscription",
      "## Subscribe to an Investigation"
    ],
    "intro": "# Add Subscription\n\nA subscription sends the report results for an investigation to recipients via email as an\nattachment. Click the Subscriptions link to open the Subscription to window. You can specify\nrecipients to receive this report as an email attachment in a specified format.\n\n![Subscription window](/images/threatprevention/7.5/reportingmodule/investigations/options/subscription.webp)\n\n:::note\nThis option requires you to configure an email server.If you haven't met this requirement, the\nwindow displays a message. See the[Email Page](/docs/threatmanager/3.4/administration/configuration/i"
  },
  {
    "short": "administration/threats/entraidobjects/entraiduser.md",
    "title": "User Details Page",
    "action": "UPDATE",
    "headings": [
      "# User Details Page",
      "## Threats Tab",
      "## Activity Summary Tab",
      "## Group Membership Tab",
      "## Roles Tab"
    ],
    "intro": "# User Details Page\n\nThe Microsoft Entra ID User Details page provides information about the user including threats\ngenerated by the user, user activity, group membership, and role assignments for the user.\n\n![Entra ID User Details Page](/images/threatmanager/3.0/administration/threatdetails/entraidpage.webp)\n\nThe top of the page displays a user profile card which may contain the following information about\nthe user:\n\n- Name\n- UPN\n- Manager\n- Department\n- ObjectID\n- Object Type\n- Tenant\n- On-premises synced accounts (will appear if a synced account exists)\n- Tags, with an option to add additio"
  },
  {
    "short": "administration/troubleshooting/log.md",
    "title": "Log Files",
    "action": "UPDATE",
    "headings": [
      "# Log Files",
      "## Export Logs"
    ],
    "intro": "# Log Files\n\nEach component of Threat Manager has a log file that will report errors, warnings, and debug\ninformation depending on the logging level.\n\nThe log location for Threat Manager logs is:\n\n**C:\\ProgramData\\Stealthbits\\StealthDEFEND**\n\nThreat Manager has the following logs:\n\n- Action Service Log – This is the log for the Action Service which is the actual component that\n  runs PowerShell actions in response to threats. This log is useful for troubleshooting threat\n  response.\n- Active Directory Service Log – This log is responsible for output from the Active Directory\n  Service. The Act"
  },
  {
    "short": "administration/threats/entraidobjects/entraidapplication.md",
    "title": "Application Details Page",
    "action": "UPDATE",
    "headings": [
      "# Application Details Page",
      "## Threats Tab",
      "## Activity Summary Tab",
      "## Group Membership Tab",
      "## Roles Tab"
    ],
    "intro": "# Application Details Page\n\nThe Application Details page provides information about an application registered in Microsoft Entra\nID.\n\n![Entra ID Application Page](/images/threatmanager/3.0/administration/threatdetails/application.webp)\n\nThe top of the page displays a profile card which may contain the following information about the\napplication:\n\n- App ID\n- Object ID\n- Object Type\n- Tenant\n- Add Tag button\n\nThe page has the following tabs:\n\n- Threats Tab\n- Activity Summary Tab\n- Group Membership Tab (hidden for Agent Blueprint, Agent Blueprint Principal, and Agent Identity objects)\n- Roles Tab"
  },
  {
    "short": "administration/threats/threats.md",
    "title": "Threats Page",
    "action": "UPDATE",
    "headings": [
      "# Threats Page",
      "## All Threats",
      "## Historical Events",
      "## Threats List",
      "## Filter Threats",
      "### Type",
      "### Level",
      "### Tags",
      "## Edit Threats"
    ],
    "intro": "# Threats Page\n\nThe Threats page is where end-users and analysts investigate possible threats in their environment.\nThis page displays an historical timeline of the detected threats and advanced filtering to help\nusers find threats.\n\n## All Threats\n\nThe Threats section contains a bar chart and a pie chart. The Threats bar chart displays the number\nof each type of threat by date range increments of one week, over a 13-week time span. The Threats\npie chart displays the total number of threats by type of threat.\n\n![threatspage](/images/threatmanager/3.0/administration/threatspage.webp)\n\nHover ove"
  },
  {
    "short": "administration/threats/activedirectoryobjects/activedirectoryobjects.md",
    "title": "Active Directory Object Details Pages",
    "action": "UPDATE",
    "headings": [
      "# Active Directory Object Details Pages",
      "## Profile Card",
      "## Tabs",
      "## Add Tag Button"
    ],
    "intro": "# Active Directory Object Details Pages\n\nActive Directory Object details pages provide details on Active Directory objects including users,\ngroups,  and hosts (computers). Use these pages to discover more information about the\nvarious resources related to threats and events in Threat Manager. Pages include:\n\n- [User Details Page](/docs/threatmanager/3.4/administration/threats/activedirectoryobjects/user.md)\n- [Group Details Page](/docs/threatmanager/3.4/administration/threats/activedirectoryobjects/group.md)\n- [Host Details Page](/docs/threatmanager/3.4/administration/threats/activedirectoryob"
  },
  {
    "short": "administration/configuration/systemsettings/useraccess.md",
    "title": "User Access Page",
    "action": "UPDATE",
    "headings": [
      "# User Access Page",
      "## Users & Groups",
      "### Roles Defined",
      "### Authentication Types Defined",
      "### Add Console Access",
      "### Edit Console Access",
      "### Edit Built-in Admin Password",
      "## Settings"
    ],
    "intro": "# User Access Page\n\nThe User Access page within the System Settings interface displays users and groups with their\nassigned roles for console access.\n\n![System Settings interface on the User Access page](/images/threatmanager/3.0/administration/configuration/systemsettings/page.webp)\n\nAssign roles using one of the following methods:\n\n- Group Membership – Members of the group receive the assigned role\n\n    :::note\n    If a user belongs to multiple assigned groups, the system assigns the group with the highest privilege level.\n    :::\n\n\n- Direct User Assignment – Assigns a role directly to a use"
  },
  {
    "short": "administration/serviceaccounts.md",
    "title": "Service Accounts",
    "action": "UPDATE",
    "headings": [
      "# Service Accounts",
      "## Summary Charts",
      "## Column Definitions",
      "### Display Name",
      "### Domain",
      "### Type",
      "### Status",
      "### Vulnerable",
      "### Password Age (days)",
      "### Tags",
      "### Auth Protocols",
      "### Encryption Types"
    ],
    "intro": "# Service Accounts\n\nThe Service Accounts dashboard provides visibility into service account usage across the environment. Use it to identify, classify, and assess non-human accounts that operate outside typical user authentication behavior. It includes accounts that have a defined servicePrincipalName, account type reflective of a service account, or repeated authentication patterns. The dashboard uses machine learning to identify pattern-based authentication.\n\n![Netwrix Threat Manager Service Accounts Dashboard](/images/threatmanager/3.3/administration/serviceaccounts/dashboard.webp)\n\nThere a"
  },
  {
    "short": "administration/threats/entraidobjects/entraidobjects.md",
    "title": "Entra ID Object Details Pages",
    "action": "UPDATE",
    "headings": [
      "# Entra ID Object Details Pages",
      "## Profile Card",
      "## Tabs",
      "## Add Tag Button"
    ],
    "intro": "# Entra ID Object Details Pages\n\nThe Microsoft Entra ID Object details pages provide details on Microsoft Entra ID objects including\nusers, groups, applications, devices, and roles. Use these pages to discover more information\nabout the various resources related to threats and events in Threat Manager. Pages include:\n\n- [User Details Page](/docs/threatmanager/3.4/administration/threats/entraidobjects/entraiduser.md)\n\n- [Group Details Page](/docs/threatmanager/3.4/administration/threats/entraidobjects/entraidgroup.md)\n\n- [Role Details Page](/docs/threatmanager/3.4/administration/threats/entraid"
  },
  {
    "short": "administration/investigations/options/filters.md",
    "title": "Filters Section",
    "action": "UPDATE",
    "headings": [
      "# Filters Section",
      "## Timeframe",
      "## Filter Attribute Menu",
      "## Filter Operator Menu",
      "## Build a Filter Statement"
    ],
    "intro": "# Filters Section\n\nThe Filters section provides options to build a filter statement by selecting the Attribute,\nOperator, and Filter value. You also configure a time period for the report data here. If multiple\ndata sources have been configured, there is also a Source dropdown menu. Filter statements can be\nsimple with one value statement or complex with multiple value statements.\n\n![Filters section of an investigation](/images/threatmanager/3.0/administration/investigations/options/filterstm.webp)\n\nThe section has the following options for configuring a filter statement:\n\n- Source – This menu"
  },
  {
    "short": "administration/threats/activedirectoryobjects/user.md",
    "title": "User Details Page",
    "action": "UPDATE",
    "headings": [
      "# User Details Page",
      "## Threats Tab",
      "## Activity Summary Tab",
      "## Group Membership Tab"
    ],
    "intro": "# User Details Page\n\nThe Active Directory User Details page provides information about the user: the threats\nit generated, its activity, and its group membership.\n\n![page](/images/threatmanager/3.0/administration/threatdetails/page.webp)\n\nThe top of the page displays a user profile card which may contain the following information about\nthe user:\n\n- Name\n- DN\n- NT Name (SAM Account Name)\n- Email\n- Object GUID\n- Object Type\n- Domain\n- Tags, with an option to add additional tags\n\nThe page has the following tabs:\n\n- Threats Tab\n- Activity Summary Tab\n- Group Membership Tab\n\n## Threats Tab\n\nThe Thr"
  },
  {
    "short": "administration/configuration/integrations/siem.md",
    "title": "SIEM Page",
    "action": "UPDATE",
    "headings": [
      "# SIEM Page"
    ],
    "intro": "# SIEM Page\n\nThe SIEM page provides configuration settings for forwarding threat information to a SIEM service\nsuch as QRadar or Splunk. Before configuring this page, determine the IP address and Port for the\nSIEM server.\n\nFollow the instructions to enable SIEM notifications.\n\n![siempage](/images/threatmanager/3.0/administration/configuration/integrations/siempage.webp)\n\n**Step 1 –** In the Integrations box, click **SIEM**. The SIEM window opens.\n\n**Step 2 –** Enter the following information:\n\n- Enabled – Sends threat configuration settings to the configured SIEM service when ON. The\n  default"
  }
]
