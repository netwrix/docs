---
description: >-
  How to reduce the number of Active Directory and Entra ID licenses used by
  Netwrix Auditor by disabling accounts or excluding OUs and users from
  monitoring.
keywords:
  - Active Directory
  - Entra ID
  - licenses
  - omitUPNlist.txt
  - omitpathlist.txt
  - monitoring scope
  - Netwrix Auditor
  - OUs
products:
  - auditor
sidebar_label: Reducing the Used Active Directory and Entra ID Li
tags: []
title: "Reducing the Used Active Directory and Entra ID License Counts"
knowledge_article_id: kA04u000000PoL7CAK
---

# Reducing the Used Active Directory and Entra ID License Counts

> **IMPORTANT:** Netwrix Auditor is licensed per enabled Active Directory (AD) and Entra ID user object. For additional information on determining the number of enabled users, refer to the following articles: [Determining the Number of Enabled Active Directory User Accounts](/docs/kb/auditor/configuration-and-setup/active-directory-auditing/determining-the-number-of-enabled-active-directory-user-accounts) — [Determining the Number of Enabled Microsoft Entra ID Accounts](/docs/kb/auditor/configuration-and-setup/microsoft-365-integration/determining-the-number-of-enabled-microsoft-entra-id-accounts). Netwrix Auditor only collects data from objects that are not excluded (omitted), which means that any objects that are omitted will not be monitored.

## Question

How can the number of used AD and Entra ID licenses be reduced in Netwrix Auditor?

## Answer

Refer to the following options to reduce the count of used AD and Entra ID licenses:

- Disable the User Objects
- Exclude OUs and User Objects via the Auditor UI
- Exclude an OU via the Omit List
- Exclude Entra ID Users via the omitUPNlist.txt File

### Disable the User Objects

Netwrix Auditor is licensed based on the number of enabled user objects in the AD. Disabled user objects are still tracked for changes, but they do not count towards the license count. Refer to the following steps to view a list of all enabled users:

1. In the main Netwrix Auditor screen, select **Reports** > **Predefined** > **Active Directory** > **Active Directory—State-in-Time** > **User Accounts**.
2. In the filters section, switch the **Status** filter to **Enabled** to get a full list of enabled users. Click **View Report** to update the report.

> **TIP:** Switch the **Sort By** filter to **Name** to sort the list by the organizational unit (OU).

Review the list to determine if any accounts should be disabled.

> **NOTE:** No further actions are required after you disable the user objects—Netwrix Auditor reviews the used AD license count on data collection.

### Exclude OUs and User Objects via the Auditor UI

Refer to the following steps to exclude OUs and user objects from the monitoring scope via the Netwrix Auditor UI to reduce the used license count:

1. In the main Netwrix Auditor menu, click **Monitoring Plans**.
2. Select the relevant AD monitoring plan and click **Edit**.
3. Select the data source and click **Edit data source**.

![Edit data source]./../0-images/ka0Qk000000EIjS_0EMQk00000661ik.png)

4. In the left pane, select the **Objects** tab. Select the **Exclude these objects** checkbox, then click **Add** to exclude objects from the monitoring scope. After adding the objects, click **Save & Close**.

![Exclude these objects]./../0-images/ka0Qk000000EIjS_0EMQk000005FPXt.png)

Refer to the following examples to learn about how the exclusion rules work for **Objects**. The same logic applies to the inclusion rules:

- `domain.local/OU` will exclude the OU itself. However, objects within this OU will not be excluded.
- `domain.local/OU/*` will exclude objects within the OU. However, the OU itself will not be excluded.
- `domain.local/OU*` will exclude the OU itself, all objects within it, and also all objects whose path begins with `domain.local/OU` (like `domain.local/OU_HQ`).

### Exclude an OU via the Omit List

Populate the `omitpathlist.txt` omit list with the OU you would like to omit. Use the exclusion rules provided above. For additional information on AD omit lists, refer to the following article: [Active Directory Monitoring Scope](https://docs.netwrix.com/docs/auditor/10_8).

### Exclude Entra ID Users via the omitUPNlist.txt File

To exclude specific Entra ID users from the license count, populate the `omitUPNlist.txt` file with the user principal names (UPNs) of the users you want to omit. Follow these steps:

1. Locate the `omitUPNlist.txt` file in the Netwrix Auditor installation directory.
2. Edit the file and add the UPNs of the users you want to exclude

`Wildcard *` is supported and can replace any number of characters.

> **IMPORTANT:** Excluding users via the `omitUPNlist.txt` file will reduce the Entra ID user count used for licensing but will also exclude these users from monitoring. For more information, please see [Microsoft Entra ID Monitoring Scope](https://docs.netwrix.com/docs/auditor/10_8).

## Tips

- No special syntax is required for OUs with white-space characters in their names (for example, a space).
- Netwrix Auditor updates the monitoring scope after the next scheduled state-in-time snapshot collection (next day by default). Alternatively, you can manually update your Active Directory monitoring plan to update the monitoring scope.
- When using `omitUPNlist.txt` for Entra ID, ensure that UPNs are entered one per line and that there are no extra spaces or invisible characters.
- Use wildcards in `omitUPNlist.txt` to efficiently exclude groups of users with similar UPN patterns (for example, `*@contoso.com`).
- Netwrix Auditor updates the monitoring scope after the next scheduled state-in-time snapshot collection (next day by default). Alternatively, you can manually update your Active Directory or Entra ID monitoring plan to update the monitoring scope.

## Related Links

- [Determining the Number of Enabled Active Directory User Accounts](/docs/kb/auditor/configuration-and-setup/active-directory-auditing/determining-the-number-of-enabled-active-directory-user-accounts)
- [Determining the Number of Enabled Microsoft Entra ID Accounts](/docs/kb/auditor/configuration-and-setup/microsoft-365-integration/determining-the-number-of-enabled-microsoft-entra-id-accounts)
- [Active Directory Monitoring Scope](https://docs.netwrix.com/docs/auditor/10_8)
- [Microsoft Entra ID Monitoring Scope](https://docs.netwrix.com/docs/auditor/10_8)
