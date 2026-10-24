---
title: "Log files"
description: "Find where Privilege Secure services write log files, read them in the console, download them, and change the minimum log level for a service."
sidebar_position: 60
---

# Log files

Each Privilege Secure service writes a log file. Use the **Log Files** page to read these logs in the console, export them, and download them for support.

To open it, select **Auditing & Reporting** > **Log Files**.

{/* TODO screenshot: Log Files page with a log selected */}

## Log file location and names

Log files are in `C:\ProgramData\Stealthbits\PAM\Log` on the server that runs the service.

Files are named `PAM-<Service><yyyymmdd>.log`, where `<Service>` is the service and `<yyyymmdd>` is the date. For example, `PAM-ActionService20191002.log`.

The page lists logs for these services:

| Service | Log |
|---|---|
| Web | `PAM-Web` |
| Proxy | `PAM-Proxy` |
| SSH client | `PAM-SSHClient` |
| Host Scan | `PAM-HostScanService`, `PAM-HostScanServiceWorker` |
| Action | `PAM-ActionService`, `PAM-ActionServiceWorker` |
| Email | `PAM-EmailService` |
| Security information and event management (SIEM) | `PAM-SiemService` |
| Scheduler | `PAM-SchedulingService` |
| License | `PAM-LicenseService` |
| Installer and maintenance | `PAM-InstallCmd`, `PAM-RotateKey`, `PAM-DbUpdater` |
| PostgreSQL upgrade | `NPS-PGUpgrade`, `NPS-PGUpgradeErr` |

Services keep a limited number of files. By default, a service starts a new file each day and keeps 10 files of up to 100 MB each.

{/* TODO verify: the daily rolling, 10-file, and 100 MB defaults for every service, and whether the Options page shows the same values */}

### Remote Access Gateway hosts

The Remote Access Gateway and Portal write to the same folder on their own hosts:

- `PAM-RagGateway<yyyymmdd>.log` on the gateway server. The file is empty until the first request.
- `PAM-RagPortal<yyyymmdd>.log` on the portal server.
- `nginx-access.log` on the portal server.

{/* TODO verify: whether the console lists logs from the RAG hosts */}

## Read a log

1. Select **Auditing & Reporting** > **Log Files**.
2. Enter text in **Search Log Files...** to filter the list on the left.
3. Select a log file.

For example, to find failed password updates, select the Action Service log and set **Log Level** to a warning or error level.

{/* TODO verify: the Log Level filter values and that failed password updates are written to the Action Service log */}

The right pane shows the log lines in four columns: **LINE**, **DATETIME**, **STATUS**, and **MESSAGE**. It has these controls:

| Control | Description |
|---|---|
| **Search** | Searches the log. |
| **Log Level** | Filters lines by level. |
| **Requested date** | Filters lines by date. |
| **Export as CSV** | Saves the displayed log as a CSV file. |
| **Refresh** | Reloads the log. |

The pane also shows the number of lines.

## Download logs

Click **Download Logs** above the log list to download the logs, for example to send them to support.

{/* TODO verify: what Download Logs downloads (all logs or the selected log, and the file format) */}

## Change the log level

The log level controls how much detail a service writes. Set a more detailed level, such as Debug, only when support asks. {/* TODO verify: whether detailed levels expose sensitive data in every service log (the source states this for the Remote Access Gateway) */}

1. Click **Options** (the gear icon) above the log list.
2. Select a service.
3. Click a field to edit it.
4. Set **Minimum Log Level**, **Retained File Count Limit**, or **File Size Limit Bytes**.
5. Click **Save**. Click **Cancel** to discard your changes.

For example, when support asks for detailed logs, select the Action Service and set **Minimum Log Level** to **Debug**. After you collect the logs, set it back to **Information**.

| Setting | Description |
|---|---|
| **Name** | The short name of the service. |
| **Minimum Log Level** | The lowest level the service logs. See the following levels. |
| **Retained File Count Limit** | The number of log files to keep before the oldest are deleted. |
| **File Size Limit Bytes** | The maximum size of one log file, in bytes. |

The levels, from most to least detailed, are:

- **Verbose**: The most detailed logging. Privilege Secure writes few Verbose messages, so the difference from Debug is small.
- **Debug**: Detailed information for analysis. Support may ask you to enable this level to troubleshoot.
- **Information**: Normal operation. This is the recommended level.
- **Warning**: An unusual condition that the system can recover from.
- **Error**: An unrecoverable condition that may indicate data loss.
- **Fatal**: An error that caused the service to stop.

The Options page lists the Action, Email, Proxy, Scheduler, SIEM, and Web services, and the Host Scan service.

{/* TODO verify: the services listed in the Options dialog, including Host Scan (the lab didn't open the Options dialog) */}

For help with a specific problem, see [Troubleshooting](/docs/privilegesecure/26.07/troubleshooting/overview.md).
