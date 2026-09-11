---
sidebar_label: Troubleshooting
---
# Troubleshooting PingCastle Enterprise

## Troubleshooting

### Viewing Application Logs and Errors

To diagnose problems with PingCastle Enterprise, view its error messages and logs.

:::tip
See [Collecting Support Logs](enterprisesupportlogs.md) for where to find and how to download application, CloudAPI, and scheduler logs, and how to capture installer logs.
:::

### Editing the appsettings.Production.json File

Some troubleshooting steps require editing the `appsettings.Production.json` file directly. This file is in the PingCastle Enterprise installation directory. The CloudAPI service has its own separate copy in its `CloudAPI` subfolder.

Open the file with a plain text or code editor, such as Notepad or Visual Studio Code. Don't use Word or another rich-text editor, since these can introduce hidden formatting that breaks the JSON syntax.

`appsettings.Production.json` uses standard JSON syntax:

- Keys and string values use double quotes: `"Key": "Value"`
- Colons separate a key from its value, and commas separate entries
- The last entry in an object or array doesn't have a trailing comma
- Curly braces `{}` must open and close in matching pairs
- Escape backslashes as `\\` (for example, in connection strings or file paths)

After editing the file, check it for syntax errors before restarting the application. A single misplaced comma or brace prevents the application from starting.

- In PowerShell, run `Get-Content appsettings.Production.json | ConvertFrom-Json`. This returns the parsed content if the JSON is valid, or a specific error if it isn't.
- Alternatively, paste the file contents into an editor-integrated JSON validator, or an online tool such as [jsonlint.com](https://jsonlint.com/).

:::warning
Before pasting file contents into any online JSON validator, redact passwords, connection strings, and API keys. Third-party sites can log pasted content.
:::

Only restart the PingCastle Enterprise application pool or service after the file passes validation.

### Common Errors and Solutions

Here are common errors, their causes, and how to fix them.

<details>
<summary>Incorrect ASP.NET Core Middleware Version</summary>

These error messages appear when you install the wrong version of ASP.NET Core:

![ASP.NET Core error - HTTP 502.5](/images/pingcastle/enterpriseinstall/image90.webp)

![ASP.NET Core error in browser](/images/pingcastle/enterpriseinstall/image91.webp)

![ASP.NET Core error details](/images/pingcastle/enterpriseinstall/image92.webp)

![Event log ASP.NET Core error](/images/pingcastle/enterpriseinstall/image93.webp)

![Event viewer error message](/images/pingcastle/enterpriseinstall/image94.webp)

Command line error messages:

![Command line ASP.NET Core error](/images/pingcastle/enterpriseinstall/image95.webp)

![Missing KB error message](/images/pingcastle/enterpriseinstall/image96.webp)

**Solution:**

Identify the correct version of the ASP.NET Core framework and install it. If you're deploying to IIS, install the ASP.NET Core Hosting Bundle.

:::note
The last error relates to the missing update KB2533623
:::

</details>

<details>
<summary>Missing web.config</summary>

If the web.config file is missing or doesn't load the .NET module correctly, the web server will treat the application as a static file and return a 404 error.

![Missing web.config error in IIS](/images/pingcastle/enterpriseinstall/image97.webp)

![404 error from missing web.config](/images/pingcastle/enterpriseinstall/image98.webp)

**Solution:**

Download the correct web.config file from the PingCastle website and replace the existing one.

</details>

<details>
<summary>Application Startup Errors</summary>

When the application fails to start, generic error messages appear in the browser and event logs:

![HTTP Error 500.0 in browser](/images/pingcastle/enterpriseinstall/image99.webp)

![Event log error 1000](/images/pingcastle/enterpriseinstall/image100.webp)

You can find more detailed error messages in the event log or by running the application manually:

![Event log error 1026 - license invalid](/images/pingcastle/enterpriseinstall/image101.webp)

**Common causes:**

- Invalid license key
- Missing or misconfigured application settings
- Missing runtime dependencies

**Solution:**

Check the detailed error message and correct the issue. If you see a license error, verify the license key on **Configuration** > **Settings** > **Licensing** and update it if needed.

</details>

<details>
<summary>Database Permissions</summary>

The application requires database permissions to create tables and modify data. If you don't grant these permissions, the application will fail to start.

![SQL Server authentication error](/images/pingcastle/enterpriseinstall/image102.webp)

**Requirements:**

- Permission to create tables (required on first run)
- Permission to insert, update, and delete records
- TCP/IP connectivity enabled on SQL Server
- Firewall configured to allow remote connections (if SQL Server is on a different machine)

**Important:** The application pool identity needs these permissions, not your user account. When the application runs under IIS, the identity is typically `IIS APPPool\AppName`.

**Solution 1: Change Application Pool Identity**

Configure the IIS application pool to run as an Active Directory user that has database permissions:

![IIS Application Pool Advanced Settings](/images/pingcastle/enterpriseinstall/image104.webp)

![Application Pool Identity dialog](/images/pingcastle/enterpriseinstall/image105.webp)

![Custom account credentials dialog](/images/pingcastle/enterpriseinstall/image106.webp)

**Solution 2: Use SQL Server Authentication**

Add SQL Server credentials to the connection string in `appsettings.Production.json`. See [Editing the appsettings.Production.json File](#editing-the-appsettingsproductionjson-file) for syntax rules and how to validate the file before restarting the application.

```
;User ID=sa;Password=pass123
```

![Connection string in appsettings.Production.json](/images/pingcastle/enterpriseinstall/image107.webp)

![SQL Server connection with authentication](/images/pingcastle/enterpriseinstall/image108.webp)

**Alternative:** If you prefer not to grant table creation permissions, contact support to obtain a SQL script that creates the required tables manually.

</details>

<details>
<summary>Entra Scan Config Missing</summary>

If Entra ID scanning isn't available, the Enterprise and CloudAPI services aren't integrated correctly. Check for either of these signs:

- **Entra Scan Config** isn't available in the **Configuration** dropdown menu.
- **Configuration** > **Settings** doesn't show any Entra configuration settings.

This usually means Enterprise and CloudAPI are out of sync, often because the `CloudServiceAPIKey` doesn't match between the two services.

**Step 1: Check that CloudAPI is running**

Browse to `<PingCastleEnterprise_URL>/cloudapi/health/live`. A healthy service returns `Healthy`.

If the response isn't `Healthy`, or the page doesn't load, the CloudAPI service isn't running or isn't reachable. Check the CloudAPI application pool in IIS and its logs under the `CloudAPI` subfolder of the installation path.

**Step 2: Restart both app pools with IISRESET**

Open PowerShell as Administrator and run `IISRESET`. This restarts both the Enterprise and CloudAPI application pools and can resolve a sync issue between them.

**Step 3: Collect logs and contact support**

If the Entra Scan Config or settings are still missing after the restart, collect logs from both the Enterprise application and the CloudAPI service and send them to support for review.

</details>

<details>
<summary>Installer Fails Before Setup Runs</summary>

`PingCastle-Enterprise-Installer-<version>.exe` is a wrapper that extracts an embedded MSI and passes it to `msiexec`. If it fails before `msiexec` starts, no MSI log exists yet, because only `msiexec` writes install logs. Check for these symptoms:

- **"Another installation is already running" dialog** — a prior `msiexec` process is still running, or a stale mutex or lock remains. Check Task Manager for a lingering `msiexec.exe` process.
- **UAC prompt declined or dismissed** — `PingCastle-Enterprise-Installer-<version>.exe` requires elevation. Nothing runs until you accept the prompt.
- **Embedded MSI missing or extraction failure** — verify `%ProgramData%\PingCastle\Installer\<version>\` exists and is writable. If it's a reparse point or symlink, the wrapper refuses to use it.
- **msiexec failed to start** — verify `msiexec.exe` is present and confirm Group Policy or antivirus software doesn't block it.

**Solution:**

None of these failures produce a log file. They only appear as a message box at the time of the failure. If you run the installer with `/l*v` and no log file appears at all, the failure happened before `msiexec` launched. Capture a screenshot of the message box instead of a log, and use it to identify which of these causes applies.

</details>

<details>
<summary>Diagnosing a Failed Installation with Verbose Logging</summary>

If the installer reaches `msiexec` but the install still fails, a verbose log gives you the detail you need to diagnose it. See [Installer Logs](enterprisesupportlogs.md#installer-logs) for the exact syntax.

**Custom actions to check:**

Every custom action writes to the MSI session log, so search the log for these action names to find where the install failed:

- `DetectServerOS`
- `TestDbConnection`
- `ValidateManualConnectionString`
- `BuildAutoConnectionString`
- `InstallIIS`
- `InstallHostingBundleUI`
- `ExtractHostingBundle`

:::note
PingCastle Enterprise scrubs sensitive values, such as connection strings and keys, before writing them to the log. Even so, review the log for other configuration details before sharing it outside your organization.
:::

**General troubleshooting checklist:**

1. Re-run the install with `/quiet /l*v "<path>"` (or `/passive /l*v "<path>"` if you want to see progress) to capture full detail.
2. If no log file appears at all, the failure occurred in the installer wrapper before `msiexec` started. See **Installer Fails Before Setup Runs**.
3. If the log shows a custom action failure, check that action's logged exit code and output instead of treating the failure as a generic MSI error.
4. Confirm the properties you passed, such as install path, connection string mode, and authentication providers, match what you expected. The installer wrapper doesn't validate these values itself, so a malformed property only surfaces when the corresponding custom action runs.

</details>

## Emergency Procedures

### Reset Administrator Password

If no administrators are available (for example, someone forgot the password or the administrator has left the company), you can reset PingCastle to Initialization mode to create a new administrator account.

**Steps:**

1. Open your database management tool and navigate to the `AspNetUsers` table.

2. Locate the administrator account (use the email address to find it) and delete that row.

![](/images/pingcastle/enterpriseinstall/image109.webp)

3. Restart the PingCastle Enterprise application.

4. On the next visit to the web portal, the application will detect that no administrator exists and automatically switch to initialization mode.

5. Follow the prompts to create a new administrator account.

:::note
This procedure only removes the administrator account. All other data (users, domains, reports) remains intact in the database.
:::
