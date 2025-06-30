# Applet Mode Permissions

When File System scans are run in applet mode, it means the File System applet is deployed to the
target host when the job is executed to conduct data collection. However, the applet can only be
deployed to a server with a Windows operating system. The data is collected on the Windows target
host where the applet is deployed. The final step in data collection is to compress and transfer the
data collected in the SQLite database(s), or Tier 2 database(s), back to the Access Analyzer Console
server. If the target host is a NAS device, the File System scans will default to local mode for
that host.

Configure the credential(s) with the following rights on the Windows target host(s):

- Group membership in the local Administrators group
- Granted the “Backup files and directories” local policy privilege
- Granted the “Log on as a batch” privilege
- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local
  Policies > Security Options privilege

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory on the target host/proxy server as well as on the Access Analyzer Console
server. This is required by either the user account running the Access Analyzer application, when
manually executing jobs within the console, or the Schedule Service Account assigned within Access
Analyzer, when running jobs as a scheduled tasks.

_Remember,_ Remote Registry Service must be enabled on the host where the applet is deployed (for
Applet Mode or Proxy Mode with Applet scans) to determine the system platform and where to deploy
the applet.

**CAUTION:** The local policy, “Network access: Do not allow storage of passwords and credentials
for network authentication” must be disabled in order for the applet to start.

Sensitive Data Discovery Auditing scans require .NET Framework 4.7.2 or later to be installed on the
server where the applet is to be deployed in order for Sensitive Data Discovery collections to
successfully occur.

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the [Applet Mode Port Requirements](/docs/accessanalyzer/12.0/requirements/solutions/filesystem/appletmodeports.md) topic for firewall rule information.
