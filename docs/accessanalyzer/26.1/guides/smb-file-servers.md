---
title: Scan SMB file servers
description: Connect a Windows, NetApp, Dell PowerScale, or Nutanix Files server over SMB, run an Access scan and a Sensitive data scan, and find the results.
sidebar_position: 1
---

Connect one SMB file server to Access Analyzer and run the two scans that matter for file data: an Access scan that inventories shares, folders, and permissions, and a Sensitive data scan that classifies the files the Access scan found. At the end you'll have data in the Data security dashboard and the File system reports.

In the UI the source type is called **File Server**. It covers Windows file servers, NetApp, Dell PowerScale (formerly Isilon), and Nutanix Files over SMB 2 or SMB 3.

## Before you start

You need three things: an account that can read the shares, a network path to the server, and the Admin role in Access Analyzer.

**The account.** Access Analyzer only reads. Give the account NTFS **Read** on every folder and file you want to inventory; the specific rights it needs are List folder / Read data, Read attributes, and Read permissions. The Sensitive data scan reads file contents, which the same Read right covers.

Making the account a member of the file server's local **Administrators** or **Backup Operators** group lets the scan read folders whose permissions would otherwise lock it out. Without administrative rights the scan still lists every share, but it can't record each share's local path, and it logs any folder it can't open as an error.

**The network.** The Access Analyzer server, or the agent that runs the scan, needs TCP 445 to the file server. The connection uses SMB 2 or 3 with signing; Access Analyzer doesn't support SMB 1. Authentication uses NT LAN Manager (NTLM).

| Direction | Port | Purpose |
|-----------|------|---------|
| Access Analyzer or agent to file server | TCP 445 | SMB for share enumeration, permission collection, and file content |

:::warning

Keep **Port** at 445. Sensitive data scans read file contents only over port 445, so a File Server source on any other port can run Access scans but not Sensitive data scans.

:::

**Names in reports.** The Access scan records permissions as security identifiers (SIDs). To see account and group names in reports, and to expand group membership, add the domain as an Active Directory source and run an Identity sync. The [Scan Active Directory](./active-directory.md) guide covers it; you can do it before or after this guide.

## 1. Create the service account

File Server sources use a **Username/password** service account.

1. Go to **Configuration > Service accounts** and click **Add service account**.
2. In **Name**, enter a unique name, for example `svc-fileserver-scan`.
3. Leave **Service account type** set to **Username/password**.
4. In **Username**, enter the account as `DOMAIN\username`.
5. In **Password**, enter the password.
6. Click **Add account**.

![Add service account drawer with the Username/password type selected](/images/accessanalyzer/26.1/service-accounts/add-username-password.webp)

:::tip

The field accepts `username@domain` too, but Sensitive data scans read only the `DOMAIN\username` form. Use that form for any account that runs both scan types.

:::

The [Username and password](../service-accounts/username-password.md) page has the full field reference.

## 2. Add the source

1. Go to **Configuration > Sources** and click **Add source**.
2. In **Source type**, select **File Server**.
3. Under **Details**, enter a **Name** for the source.
4. Optionally, add a **Description** and **Labels**. A label is a `key=value` pair such as `env=production`; it lets you target scans at groups of sources later.
5. Under **Connection**, in **Host**, enter the hostname or IP address of the server, for example `fileserver.example.com`.
6. Leave **Port** at 445.
7. In **Domain**, enter the Windows domain or workgroup name. Access Analyzer uses it only when the username doesn't carry a domain, so leave it empty if the service account's username is in the `DOMAIN\username` form.
8. Under **Access**, in **Service account**, select the service account you created earlier.
9. Click **Test connection**. Access Analyzer opens an SMB session and enumerates the shares. Success shows a **Connection successful** message; failure shows a **Connection failed** alert with the reason.
10. Click **Add source**.

![Add source drawer with File Server selected, showing the Details, Connection, and Access sections](/images/accessanalyzer/26.1/sources/add-file-server.webp)

To add many servers at once, [import sources from a CSV file](../sources/import-sources.md) instead. Field details and the connection checks are on the [SMB file servers](../sources/smb-file-servers.md) source page.

## 3. Create the Access scan

Run the Access scan first. The Sensitive data scan you create in [Create the Sensitive data scan](#5-create-the-sensitive-data-scan) works from the file inventory this scan builds, so there's nothing for it to classify until an Access scan has completed.

1. Go to **Configuration > Scans** and click **Create scan**.
2. On the **Type** step, select **Access** and click **Next**.

   ![Create scan Type step with the Access, Sensitive data, and Identity sync cards](/images/accessanalyzer/26.1/scans/create-scan-1-type.webp)

3. On the **Target** step, keep **Specific sources** and select the file server you added. The step lists only sources that support Access scans. For a group of servers, select **Sources matching labels** instead and enter the label; the scan picks up any source that carries it at run time.

   ![Create scan Target step with one File Server source selected](/images/accessanalyzer/26.1/scans/create-scan-2-target-selected.webp)

4. On the **Configure** step, leave **Use default configuration** selected. The defaults are **Workers** 3, **Exclude system shares** on (the scan skips shares whose names end in `$`), **Maximum scan depth** 50, and **Enable File-Level Permission Scanning** off, which means the scan collects permissions for shares and folders but not for individual files. Change these later, after you've seen a first run; [Scan types](../scans/scan-types.md) explains each setting.
5. On the **Schedule** step, leave **Manual — run on demand** for the first run. When the first run looks right, edit the scan and switch to **On a schedule**; the default is **Daily** at 02:00. Leave the agent set to **System agent** unless you have deployed an [agent](../agents/index.md) closer to the file server.
6. On the **Review** step, enter a **Name** such as `Finance file server - access` and check the summary.
7. Click **Create & run now**.

![Create scan Review step with the scan named and the summary shown](/images/accessanalyzer/26.1/scans/create-scan-5-review-named.webp)

**Create scan** saves the scan without running it. You can start it any time from **Configuration > Scans** with **Run** in the row's actions menu.

## 4. Watch the execution

Go to **Configuration > Scan executions** and find the row for your scan. The list refreshes on its own.

![Scan executions list showing a completed File Server Access scan](/images/accessanalyzer/26.1/scans/executions-list.webp)

The status moves from **Pending** to **Running** and ends at **Completed**, **Completed with errors**, or **Failed**. The **Objects** and **Duration** columns fill in as the scan works. To follow along, open the row's actions menu and click **View logs**: the **Overview** tab shows milestones such as when the scan started and how long it took, and the **Detailed logs** tab shows every message.

![Execution logs dialog on the Overview tab](/images/accessanalyzer/26.1/scans/execution-logs-overview.webp)

**Completed with errors** means the scan couldn't read some objects, most often folders the account has no rights to. Access Analyzer keeps the data it did collect, and the next run uploads the rest. Check **Detailed logs** for the paths, fix the permissions or add the account to **Backup Operators**, and run the scan again from **Configuration > Scans**.

[Scan executions](../scans/scan-executions.md) lists every status and the pause, resume, and stop controls.

## 5. Create the Sensitive data scan

After the Access scan shows **Completed**, create the second scan. It classifies files from the Access scan's inventory against sensitive data patterns. By default the scan skips files larger than 10 MB and files with excluded extensions; both limits are in [Application settings](../settings/application.md).

1. Go to **Configuration > Scans** and click **Create scan**.
2. On the **Type** step, select **Sensitive data** and click **Next**.
3. On the **Target** step, select the same file server.
4. On the **Configure** step, under **Sensitive data classification**, select the pattern groups to look for. With **Inherit from global configuration** on, the scan uses the groups marked **Scanned by default** at **Configuration > Sensitive data patterns**. Turn it off to select groups for this scan only, such as **PCI DSS**, **PII**, and **Credentials**, under **Sensitive Data Pattern Groups to Classify**.

   ![Create scan Configure step for a Sensitive data scan showing the classification settings](/images/accessanalyzer/26.1/scans/create-scan-sensitive-3-configure.webp)

5. Leave the File Server settings at their defaults: **Workers** 3, **Differential scan** off, and **Exclude System Shares** on. Turn **Differential scan** on later so scheduled runs classify only files that changed since the last run.
6. On the **Schedule** step, leave **Manual — run on demand**.
7. On the **Review** step, enter a **Name** such as `Finance file server - sensitive data`.
8. Click **Create & run now**.

:::note

On a fresh install, no pattern group carries **Scanned by default**. A scan that inherits the global configuration with no groups enabled, or that has no groups selected, classifies against every pattern group, built-in and custom. Select groups when you want the findings limited to the categories you care about.

:::

Follow the run in **Configuration > Scan executions**, as described in [Watch the execution](#4-watch-the-execution). [Sensitive data patterns](../sensitive-data-patterns/index.md) describes the built-in groups and how to add your own patterns.

## 6. Check the dashboards and reports

Dashboards and reports don't refresh on their own. Open one and click **Refresh** after a scan completes.

**Dashboards > Data security** fills in after the Access scan: **Total Data Repositories**, **Total Objects Scanned**, **Permissions Analyzed**, **File Server Objects by Host**, and **Data Source Inventory**. After the Sensitive data scan, **Sensitive Data Findings** and **Sensitive Data by Source** show counts too. The **Data Source** filter narrows the view by source type, **File Servers** or **SharePoint Online**, not to a single server.

![Data security dashboard with file server data](/images/accessanalyzer/26.1/dashboards-reports/data-security-dashboard.webp)

**Reports > Data**, on the **File system** tab, has the reports that matter for file servers:

| Report | Needs | What it shows |
|--------|-------|---------------|
| **Open Access** | Access scan | Shares that Everyone or Domain Users can reach without restriction |
| **High Risk ACLs** | Access scan | Shares and folders with overly permissive ACLs |
| **Broken Inheritance** | Access scan | Folders with broken inheritance and explicit permissions |
| **Share Audit** | Access scan | Effective permissions on one share; select a **Share** in the filters first |
| **Sensitive Data Overview** | Sensitive data scan | Findings across the scanned locations, filtered by host, share, pattern group, or pattern |

**Activity Investigation** appears in the same tab but stays empty until you connect [Netwrix Activity Monitor](../integrations/netwrix-activity-monitor.md). **Reports > Compliance** arranges the same reports by framework, so the **GDPR** or **PCI DSS** tabs populate from these two scans as well.

If the permission reports show SIDs instead of names, follow [Scan Active Directory](./active-directory.md) and run an Identity sync for the domain. [Data reports](../dashboards-reports/reports/data.md) describes every report and its filters.
