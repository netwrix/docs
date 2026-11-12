---
title: "SharePoint Online"
description: "Connect SharePoint Online so AI Security can read the sites your agents reach, their site permissions, and how widely each site is shared."
sidebar_position: 22
---

# SharePoint Online

Connect SharePoint Online so AI Security can read the SharePoint sites your agents reach, with their site permissions and how widely each is shared. It reads site metadata, never file contents. You add Microsoft Graph permissions to the app registration that connects Microsoft Entra ID, and connect the source in AI Security.

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. You need its three values. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Have a Global Administrator or Privileged Role Administrator grant the admin consent.
* Sign in to the Microsoft Entra admin center at entra.microsoft.com.

## Connect SharePoint Online

### Add the permissions in Microsoft Entra

1. Create the app registration and its client secret as steps 1 to 8 of "Create the app registration in Microsoft Entra" on the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md#create-the-app-registration-in-microsoft-entra) page describe, or reuse the one you have.
2. Select **Entra ID > App registrations**, select the registration, and then select **API permissions**.
3. Click **Add a permission**, select **Microsoft Graph**, and then select **Application permissions**.
4. Add Sites.Read.All, Reports.Read.All, SharePointTenantSettings.Read.All, Group.Read.All, and InformationProtectionPolicy.Read.All.
5. To read which apps reach which sites, add Sites.FullControl.All as well.
6. Click **Grant admin consent for** your tenant, and then click **Yes**. Every row's status turns to "Granted".

### Let AI Security do it

Where Entra ID is connected with Microsoft and the SharePoint Online source was connected with Microsoft too, the **SharePoint site permissions** card under **AI Security > Sources** asks how to grant: **All sites** or **Selected sites**.

* **All sites** is Sites.FullControl.All on every site. **Let 1Secure do it** signs a Global Administrator or Privileged Role Administrator in once more, and AI Security grants itself Sites.FullControl.All. The card then says "Every site granted by" who signed in and the date, and SharePoint reads in full on the next scan. **Do it yourself** is steps 5 and 6 of the previous procedure.
* **Selected sites** grants the 1Secure registration Sites.Selected with the role full control, one site at a time, as scans find agents using each. **Let 1Secure do it** records the choice with no sign-in and lists no site. Each site a scan finds agents using then waits for your approval, as [The Sites tab](#the-sites-tab) describes. Full control is what reading a site's permissions needs. Sites you don't approve are untouched.

A source on your own app registration keeps Do it yourself alone, because the grant names the 1Secure registration.

In the Get started wizard, **Connect Microsoft** records **Selected sites** as part of connecting, where SharePoint Online is among the sources chosen, Microsoft Entra ID reads with your Microsoft sign-in, and no site choice is recorded yet. It's the same record as **Let 1Secure do it** for Selected sites: no Microsoft window opens and nothing is tested. The sites the first scan finds agents using then wait under [The Sites tab](#the-sites-tab). The wizard has no SharePoint site permissions row. To grant every site instead, choose **All sites** on the **SharePoint site permissions** card under **AI Security > Sources**. See [Add additional permissions](/docs/1secureaisecurity/configuration/add-additional-permissions.md).

The card shows while a test of SharePoint Online is refused a site's permissions, and also on a source that tests clean and reads as the 1Secure registration, until you grant All sites or choose Selected sites. When you choose Selected sites, a test refused on a site not yet approved shows no card. Approve the site instead.

The 1Secure registration must hold the Sites.Selected application permission for the grant to take effect. The one-click Connect with Microsoft registration carries it.

1. Select **Selected sites**, and click **Let 1Secure do it**. No Microsoft window opens and no site is listed. 1Secure records the choice. Nothing is tested again, because the choice grants nothing yet.
2. Read the card. It says "Sites.Selected. You approve each site an agent uses."
3. Scan SharePoint Online. Each site the scan finds agents using and 1Secure can't read is listed on the **Sites** tab of the SharePoint Online source, where you approve it.

As you approve sites, the card names them, with who approved them and when. The same line shows on the SharePoint Online source's drawer on the **Sources** page and on its edit drawer. It names up to three sites and counts more. A site a later scan of SharePoint Online was refused on is left out of the line.

### The Sites tab

The SharePoint Online source's drawer on the **Sources** page has two tabs, **Details** and **Sites**. The **Sites** tab says "Approve a site so 1Secure can read who has access to it." and "Microsoft approves each site separately, and 1Secure only reads. Root site first, then sites agents use."

A scan of SharePoint Online that finds agents using a site 1Secure has no access to lists that site there as **Awaiting approval**, with the date it was first seen. When you choose Selected sites, the tenant's root site is always listed, regardless of whether a scan has run, because the test and the scan read its permission list before any other site. A site the scan knows only by its ID is listed as "A site". When you grant All sites, no site waits, because approving a site grants nothing that All sites doesn't.

**Show sites** filters the list by **All**, **Awaiting**, **Approved**, and **Ignored**, each with its count. Each row gives the site, its state, and when it was decided. Under the site's name, the row says why it's asked: "The root site. Every scan reads it first.", "A scan couldn't read it." or **Used by** and the agents using it, linked. The source's row on the **Sources** page counts the sites waiting, for example "2 sites awaiting approval".

Tick the sites to decide, then use one of these actions:

* **Approve selected** gives 1Secure full control on each site you ticked, up to 25 at a time, through one Microsoft sign-in. It tries first with the Microsoft session your browser holds, and opens a small Microsoft sign-in window where Microsoft must ask something. Microsoft asks you to accept two delegated Microsoft Graph permissions for the 1Secure registration: Sites.Read.All, to find the site among those your account can see, and Sites.FullControl.All, which is the permission Microsoft requires to grant an app access to a site. Both need an administrator who can consent for the directory. AI Security never keeps the token. The tab then says the sites were approved and that the next scan reads them, and names any site that wasn't approved with why.
* **Ignore selected** stops asking about those sites. An ignored site stays under **Ignored**, and **Reopen** under its name puts it back to awaiting approval.

:::warning
The test and the scan try the root site's permission list first, and where Microsoft refuses it no site's grants are read, the approved sites included. Approve the root site first, where it's listed on the **Sites** tab, or choose All sites.
:::

If the Microsoft window closes without an answer, as it does when an account that can't consent sees "Approval required" and closes it, the card says "The Microsoft sign in window closed before it finished." and "Ask a Global Administrator or Privileged Role Administrator to select Let 1Secure do it." On **Approve selected**, the tab says only "The Microsoft sign in window closed before it finished." Ask an administrator who can consent for the directory to approve the site.

A delegated permission acts only where the account itself can. Microsoft grants on a site only where the account that signed in has full control of it, as the site's owners have. Where it doesn't, Microsoft refuses that site, and the tab says it wasn't approved and to ask an owner of the site to approve it. Delegated Sites.Selected can't do this: it reaches only sites you already granted the app, so it can neither list the others nor make the first grant.

Nothing else changes in the tenant beside Microsoft's record that you accepted the two delegated permissions for the 1Secure registration: no other app, user, or site is touched. AI Security still only reads with what it's granted.

To undo it on a site:

1. List the site's permissions with `GET /sites/{site-id}/permissions`.
2. Find the one that names the 1Secure registration.
3. Delete it with `DELETE /sites/{site-id}/permissions/{permission-id}`.

A SharePoint Administrator can also remove it with PnP PowerShell's Revoke-PnPAzureADAppSitePermission. To remove the accepted delegated permissions, select **Entra ID > Enterprise apps**, select the 1Secure registration, select **Permissions**, and revoke them.

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "SharePoint Online".
3. In the SharePoint Online row, click **Connect**. The **Connect SharePoint Online** dialog opens.
4. Where Microsoft Entra ID is connected, the dialog says "Uses your Microsoft app registration", and there's nothing to enter: go to step 8. To enter other values, click **Use different credentials**.
5. In **Directory (tenant) ID**, enter the Directory (tenant) ID.
6. In **Application (client) ID**, enter the Application (client) ID.
7. In **Client secret value**, paste the client secret's Value.
8. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
9. Click **Done**.

Select the SharePoint Online row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when AI Security read the sites and Microsoft refused the per-application grants, which is what a registration without Sites.FullControl.All shows. |
| Last scanned | "Never", then "Succeeded", with anything it couldn't read listed as skipped, such as a grant that was missing, or a site whose permissions and sharing weren't read because Microsoft described it without an ID. "Partly scanned" when a list was cut short. On a source connected with Microsoft that has neither All sites nor an approved site, a scan that read nothing of its own says "Succeeded, nothing to read yet", and its read line says "Nothing to read until a site is approved". |

The test reads the tenant's root site, then tries its permission list. Where that list reads, it also reads the permission list of the sites the scan reads and the sites approved for Sites.Selected. The first read decides the test. The others only turn it to "Warning", naming the sites that refused.

A scan of this source reads every Microsoft source the three values unlock, not only SharePoint. Where the registration lacks another Microsoft platform's grants, that platform's own source lists what it skipped, or reads "Failed" where it read nothing. That doesn't change this source's "Last scanned".

## What this connector reads

* The root site and the sites your agents reach: the sites SharePoint agents are grounded in, and the sites Copilot Studio knowledge sources and Agent 365 agents name. AI Security doesn't read other sites and doesn't sweep the tenant's site list, so the Sites scanned limit doesn't apply here. The scan counts OneDrive sites and doesn't inspect them.
* Each inspected site's per-application permission grants, which is how an app holding Sites.Selected reaches a named site. The scan reports an app granted Sites.Selected on a site no agent reaches as reaching unknown sites.
* Sharing on each site's default document library root: Anyone links, organization links, and whether it's shared with an organization-wide group such as Everyone except external users. AI Security doesn't keep the names of the people and groups it's shared with.
* The tenant's SharePoint sharing settings. An issue about Anyone sharing for the tenant appears on **Microsoft tenant settings**, as the Microsoft Entra ID tenant settings do, with no owner.
* Each site's owner, file count, and last activity date, from Microsoft's site usage report.
* The owners of group-connected sites, where the usage report names none.
* The directory identity behind each application a site grant names. Where Microsoft doesn't answer that lookup for an application, the scan treats its grants as without Application.Read.All for this scan, still reads the other sites, and says so once.

Microsoft doesn't publish the site usage report in the GCC High, DoD, or 21Vianet clouds, so no permission closes that gap there. By default Microsoft 365 conceals site names in its usage reports. The scan reads that as expected: those sites have no owner or file count from the report, and nothing needs changing.

### Sensitivity labels

AI Security reads the Microsoft Purview sensitivity labels on the files of the SharePoint sites agents reach. The scan reads a site when an agent is grounded in it, when a Copilot Studio knowledge source or an Agent 365 manifest names it with its site ID, or when an app holding Sites.Selected is granted it. The scan doesn't read one by one a site an agent reaches only through a tenant-wide permission such as Sites.Read.All.

* **What it reads.** The tenant's label catalog once per scan: each label's name and its rank. Then, for each site, the number of files per label. AI Security never opens files: the label is the verdict Purview already put on the file.
* **What it keeps.** For each site, how many files carry each label, the most sensitive label found, and whether the count covers the whole site. File names stay out of the scan's results.
* **The permission.** InformationProtectionPolicy.Read.All, an application permission, with admin consent. Sites.Read.All, which the site inventory already needs, covers the site search. Without the label permission the scan raises a warning that names it, reads no label, and leaves every site's label cells empty rather than showing no labels.
* **Delays.** Microsoft's search picks up a new or changed label minutes to hours after you apply it, so a scan counts the labels as search last saw them.
* **A partial read.** Where Microsoft search refuses the app, the scan reads only part of a site's files and raises a warning. The **Permissions** tab marks those labels as read on part of the site, and the counts are a minimum, not the site's total.
* **Not readable.** Microsoft answers no default label for an Exchange mailbox. A scan whose agents reach mailboxes raises one warning saying so, and no mailbox shows a label. The scan reads no OneDrive across the tenant either: it reads a OneDrive only where agents reach it as a site.

The scan also reads each site for the labels set on it rather than on its files:

* The default label of the site's default document library, or of the OneDrive where the site is one. This needs Sites.Read.All.
* The container label of the site, its Microsoft 365 group, and its team. This needs Group.Read.All.

AI Security keeps each label's ID and its name from the catalog. A Teams channel has no label of its own: it carries its team's, which is the group's. A site with no group has no container label. A library or group the scan can't read raises one warning per scan with how many sites it affected, and those labels stay unknown rather than none.

An agent that reaches a site holding a file labeled with one of the two most sensitive labels in the catalog, leaving out one called Public, or with any label whose name contains Confidential, raises the finding "Agent reaches files carrying a high sensitivity label". It's high where the site holds the catalog's most sensitive label and medium otherwise.

### What it never touches

* AI Security never writes to SharePoint.
* File contents. AI Security reads site, library, and permission records, never a document's contents.
* A sharing link's address and share ID, which are the link itself. AI Security drops both before it stores anything.
* Audit activity and mail.
* When SharePoint throttles the scan, it stops the site pass and reports how far it got.

## Permissions

| Microsoft Graph application permission | What AI Security reads with it | Scan without it |
|----------------------------------------|--------------------------------|-----------------|
| Sites.Read.All | The site inventory and library root sharing, where Files.Read.All also answers the sharing read. | Nothing is read and the test fails. Where a Sites.Selected grant answers the root site, the test warns and names Sites.Read.All, and the scan reads only the sites granted one by one. |
| Sites.FullControl.All | Each site's per-application grants on every site. Sites.Selected with full control on a site reads that site's grants. | The scan reports apps holding Sites.Selected as reaching unknown sites, never none, and inventory and sharing are unaffected. |
| Reports.Read.All | Site owner, file count, and last activity. | Those read as unknown, never 0. |
| SharePointTenantSettings.Read.All | The tenant's external sharing settings. | The tenant sharing posture is unknown. |
| Group.Read.All | Owners of group-connected sites, and the sensitivity label on the group behind a site agents reach. | Those sites have no owner where the usage report names none, their group label stays unknown, and a warning names the permission. |
| Application.Read.All | The apps and agent identities the site grants name, so each grant is joined to its app in the directory. | Which app holds each site grant is unknown, so the scan leaves those grants out, and names the permission to grant. |
| InformationProtectionPolicy.Read.All | The tenant's Purview sensitivity labels, so the scan can name and rank the labels on the files of the sites agents reach. | The scan reads no label, a warning names the permission, and the rest of the scan is unaffected. |

The one-click Connect with Microsoft registration carries every permission in this table except Sites.FullControl.All. It carries Sites.Selected in its place, so on that path the scan reads the per-application grants on the sites you approve, as [Let AI Security do it](#let-ai-security-do-it) says.

:::info
Sites.FullControl.All is a high-privilege grant. AI Security uses it for one read, the site permission list, and only reads with it. Declining it costs the per-application grants and nothing else. Microsoft offers no read-only role for the site permission list.
:::

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | One of the three values isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter the three values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the sign-in: the secret is wrong or expired, or an ID belongs to another directory. | Check the secret under **Certificates & secrets** and both IDs on **Overview**. |
| "The credential works, but access was denied. A permission is missing." | The sign-in worked and Microsoft refused the root site, or it answered without naming itself. The test says: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Sites.Read.All as an application permission and grant admin consent." | Add Sites.Read.All as an application permission, not a delegated one, and grant consent. |
| "The credential works, but SharePoint Online refused part of what the scan reads." | AI Security read sites and Microsoft refused the per-application grants. The test says: "Approve the site on the Sites tab of the SharePoint Online source, or choose All sites on the SharePoint site permissions card." On the one-click registration this also shows where the root site has no Sites.Selected full control grant. | Approve the site on the **Sites** tab of the SharePoint Online source, or choose **All sites** on the SharePoint site permissions card, or accept that app-to-site grants are unknown. |
| "The credential works, but SharePoint Online refused part of what the scan reads." | AI Security read the root site's grants and a site the scan reads, or a site you approved, refused its permission list. The test counts those sites and says: "These sites are awaiting approval. Open the SharePoint Online source in 1Secure and approve them; the full list is under Details." Details names every site by its address, and a site known only by its ID as one whose name couldn't be read. | Where Selected sites isn't chosen yet, select it on the **SharePoint site permissions** card and click **Let 1Secure do it**. Then approve each site the test lists under Details as it appears on the **Sites** tab after a scan. |
| "The platform didn't answer, or said it is down or busy." | Microsoft didn't answer. | Click **Test again**. If it repeats, confirm that AI Security can reach Microsoft Graph. |
| "The platform didn't answer in time." | Microsoft didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact support. |

### If the scan skips something or warns

A scan that read to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with a skipped item naming the permission, for example "The owner, file count and last activity of each SharePoint site, because the app registration lacks Reports.Read.All." | Microsoft refused a read. The line under it says where to add the permission, for example "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Reports.Read.All as an application permission and grant admin consent, outside US government and China clouds." | Add the permission the line names, from the table in [Permissions](#permissions). |
| Skipped reads "App grants and sharing on [n] SharePoint sites, because SharePoint refused the scanner." | Sites an agent reaches refused their read. The line says what to do: "Check these sites are not locked in the SharePoint admin center." | Nothing is missing a permission. The scan names the sites it couldn't read. |
| Skipped reads "App grants and sharing on [n] SharePoint sites, because 1Secure has no access there." | Sites an agent reaches answered that the app holds no grant on them. The line names the first few sites by their addresses after what wasn't read, for example "1Secure has no access to 2 sites: a and b.", and counts the rest, and counts a site known only by its ID as one whose name couldn't be read. The line says what to do: "Approve these sites on the Sites tab of the SharePoint Online source, or choose All sites on the SharePoint site permissions card." Where you already granted All sites, it says instead "All sites was granted after this scan started. Scan again to read the site." for a scan that started before the grant, or "1Secure already has All sites, so the site refused for a reason of its own. In the SharePoint admin center, check that the site still exists and is not locked or limited to certain apps, then scan again." | Approve the sites the line names, then scan again. Where you granted All sites, do what the line says. |
| Skipped reads "The rest of the SharePoint sites your agents reach, because SharePoint Online slowed the scanner down." | SharePoint throttled the pass. The line says what to do: "Scan outside busy hours." | Nothing is missing a permission. Coverage fills in on later scans. |
| Skipped reads "A SharePoint site that Microsoft listed incompletely, so it could not be read." | Microsoft described a site without an ID, so its permissions and sharing are unknown this run, not absent. The line says what to do: "Scan again, and if it happens again, send Copy for support to Netwrix support." | Nothing is missing a permission. Scan again. |

## Security notes

* AI Security stores the three values when you click **Connect** and never shows them again.
* A source connected with **Sign in with Microsoft** never receives the registration's secret.
* AI Security sends the secret and the token only to Microsoft.
* To revoke, remove the permissions and their consent under **API permissions**, or delete the client secret. **Disconnect** on the source removes the stored credential from AI Security.
