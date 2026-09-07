---
title: Scan Active Directory
description: Add a domain as an Active Directory source, run an Identity sync, and use the results in the Active Directory dashboard and in file server permission reports.
sidebar_position: 2
---

Add one Active Directory domain as a source and run an Identity sync, which reads the domain's users, groups, organizational units, and memberships. The results feed the Active Directory dashboard and the AD Users report, and they let file server permission reports show account and group names instead of security identifiers (SIDs).

One source covers one domain. If you have several domains, repeat the guide for each.

## Before you start

### Account

The Identity sync only reads. A regular domain user with the default read access to the domain is enough.

### Network

The Access Analyzer server, or the agent that runs the scan, needs one Lightweight Directory Access Protocol (LDAP) port open to a domain controller. The port you choose decides how the connection is secured.

| Port | Protocol | Notes |
|------|----------|-------|
| 389 | LDAP with DIGEST-MD5 authentication and StartTLS | Enter the domain controller's fully qualified domain name (FQDN) in **Host**; DIGEST-MD5 authentication requires an FQDN and doesn't work with an IP address. Works with domain controllers that require LDAP signing. |
| 636 | LDAP over TLS (LDAPS) | The server or agent that runs the scan must trust the domain controller's certificate unless you turn on **Ignore SSL errors**. |

When a connection uses TLS, it uses TLS 1.2. On port 389, Access Analyzer first tries DIGEST-MD5 with encryption over StartTLS; if that attempt fails, it retries with DIGEST-MD5 signing without TLS, and then with a simple bind. Access Analyzer doesn't use Kerberos or the Global Catalog ports (3268 and 3269).

:::note

Adding a domain as a source has nothing to do with how people sign in to Access Analyzer. Sign-in with Active Directory credentials is a separate setup task; see [Single sign-on](../settings/single-sign-on.md).

:::

## 1. Create the service account

Active Directory sources use a **Username/password** service account.

1. Go to **Configuration > Service accounts** and click **Add service account**.
2. In **Name**, enter a unique name, for example `svc-ad-sync`.
3. Leave **Service account type** set to **Username/password**.
4. In **Username**, enter the account's user name only, for example `svc-ad-sync`, without a `DOMAIN\` prefix or `@domain` suffix. Access Analyzer supplies the domain from the source's **Domain** field.
5. In **Password**, enter the password.
6. Click **Add account**.

![Add service account drawer with the Username/password type selected](/images/accessanalyzer/26.1/service-accounts/add-username-password.webp)

If you already created a **Username/password** account for a file server in the same domain and its **Username** is a plain user name with no domain prefix, you can reuse it here; the [Username and password](../service-accounts/username-password.md) page covers the details.

## 2. Add the source

1. Go to **Configuration > Sources** and click **Add source**.
2. In **Source type**, select **Active Directory**.
3. Under **Details**, enter a **Name** for the source, such as the domain name.
4. Under **Connection**, in **Host**, enter a domain controller, for example `dc01.example.com`. Use the FQDN if you connect on port 389.
5. In **Port**, leave 389 or enter 636 for LDAPS.
6. Leave **Ignore SSL errors** clear. Turn it on only for a lab domain controller with a self-signed certificate on port 636.
7. In **Domain**, enter the DNS name of the domain, for example `corp.example.com`.
8. Under **Access**, in **Service account**, select the service account you created earlier.
9. Click **Test connection**. Access Analyzer binds to the domain controller and reads its root directory entry. Success shows the **Connection successful** message; failure shows a **Connection failed** alert with the reason, including a hint when the port and protocol don't match.
10. Click **Add source**.

![Add source drawer for an Active Directory source](/images/accessanalyzer/26.1/sources/add-active-directory.webp)

The [Active Directory](../sources/active-directory.md) source page describes each field and the connection checks in more depth.

## 3. Create the Identity sync

Click **Next** to move from one step to the next.

1. Go to **Configuration > Scans** and click **Create scan**.
2. On the **Type** step, select **Identity sync**.

   ![Create scan Type step with the Access, Sensitive data, and Identity sync cards](/images/accessanalyzer/26.1/scans/create-scan-1-type.webp)

3. On the **Target** step, keep **Specific sources** and select the domain's checkbox. The list shows only sources that support Identity sync.
4. On the **Configure** step, leave **Use default configuration** selected. The default turns on **Enable differential scan**: the first run reads the whole domain; later runs read only the objects that changed since the previous run.
5. On the **Schedule** step, select **On a schedule**.
6. Keep the default **Daily** at 02:00 so group memberships stay current for the reports that depend on them.
7. Leave the agent set to **System agent**.

   ![Create scan Schedule step with a daily schedule selected](/images/accessanalyzer/26.1/scans/create-scan-4-schedule-daily.webp)

8. On the **Review** step, enter a **Name** such as `corp.example.com - identity sync`.
9. Click **Create & run now**.

[Schedules](../scans/schedules.md) explains the frequency options and what the **Schedule Status** column shows.

## 4. Watch the execution

Go to **Configuration > Scan executions** and find the row for the new scan. The list refreshes on its own and shows the execution's **Status** and its **Objects** count.

![Scan executions list](/images/accessanalyzer/26.1/scans/executions-list.webp)

When the sync itself finishes, the execution moves to **Post processing** while Access Analyzer expands nested group memberships in a step named **Refresh Effective Memberships**. The step appears as a child row under the execution; click the arrow at the start of the row to show it. The execution reaches **Completed** once that step is done.

If the status is **Failed**, open the row's **Actions** menu and click **View logs**. Authentication problems appear in the **Detailed logs** tab. If the message asks for an FQDN, **Host** holds an IP address and the port is 389; enter the domain controller's name instead.

## 5. Check the dashboard and reports

Go to **Dashboards > Active Directory** and click **Refresh**. In the **Domain** filter, select the domain you synced. The dashboard opens with counts for **Domains**, **Users**, **Enabled Users**, **Groups**, and **Direct Memberships**, followed by **Users**, **Groups**, and **All Risks** sections that end in the **Active Directory Risks** table. The [Active Directory dashboard](../dashboards-reports/dashboards/active-directory.md) page describes each card.

![Active Directory dashboard with Domains, Users, Groups, and risk tiles](/images/accessanalyzer/26.1/dashboards-reports/active-directory-dashboard.webp)

Under **Reports > Identity**, the **Active Directory** tab has the **AD Users** report: every user account with its status, password age, and last logon. The [Identity reports](../dashboards-reports/reports/identity.md) page describes each column.

![AD Users report](/images/accessanalyzer/26.1/dashboards-reports/report-ad-users.webp)

The sync also improves reports you may already be using. After it completes, the reports on the **File system** tab under **Reports > Data** resolve SIDs to names, expand group membership, and recognize open access granted through groups such as Domain Users. If you haven't scanned a file server yet, [Scan SMB file servers](./smb-file-servers.md) is the next guide.
