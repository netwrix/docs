---
title: "Upgrade to Directory Manager 11 with the Wizard"
description: "Move identity stores, Synchronize jobs, schedules, and configuration data from Directory Manager 10 to 11.2 by following the Upgrade wizard pages."
keywords:
  - directory manager upgrade wizard
  - upgrade to Directory Manager 11.2
  - upgrade identity stores
  - upgrade Synchronize jobs
  - Microsoft Entra ID certificate upgrade
sidebar_position: 10
---

# Upgrade to Directory Manager 11 with the Wizard

This topic guides you through upgrading to Directory Manager 11.2 from Directory Manager 10.

Step 1 – To launch the Upgrade wizard, click **Next** on the “Directory Manager is successfully configured” page of
the Configuration Tool.

**OR**

Click **Start** > **Netwrix** > **Directory Manager 11.0** > **Directory Manager Upgrade Tool 11.0**.

![Upgrade wizard Welcome page](/images/directorymanager/11.2/install/upgrade/1-welcome.webp)

Step 2 – Read the welcome message and click **Next**.

![Upgrade wizard page for selecting the source version](/images/directorymanager/11.2/install/upgrade/2-select_source_version.webp)

Step 2.1 – Verify SSL/TLS Certificates

**CRITICAL PRE-UPGRADE STEP**

Before you proceed with the upgrade, verify that all SSL/TLS certificates used for LDAP connections and authentication services are configured correctly:

**Verification Steps:**

1. **Verify certificate installation:**
   - Open Certificate Manager: `certlm.msc`
   - Navigate to: **Trusted Root Certification Authorities** → **Certificates**
   - Confirm all required certificates are present in this store

2. **Check certificate validity:**
   - Double-click each certificate
   - Verify "Valid from" and "Valid to" dates
   - Ensure certificates aren't expired

   ![Certificate Valid from and Valid to dates in the certificate details](/images/directorymanager/11.2/install/upgrade/2-1-check_certificate_validity.webp)

3. **Verify certificate chain:**
   - In certificate details, go to **Certification Path** tab
   - Ensure all certificates in the chain show "This certificate is OK"
   - Verify no revocation errors

   ![Certification Path tab showing the certificate status](/images/directorymanager/11.2/install/upgrade/2-1-verify_certificate_chain.webp)

:::warning
- Connections that use self-signed certificates that aren't in the Trusted Root CA store fail after the upgrade.
- Invalid certificates block authentication and LDAP operations.
:::

**If any certificates are missing or invalid:**
- STOP the upgrade process.
- Install or update the certificates.
- Re-verify all certificates before continuing.

Step 3 – From the Select the previous version to upgrade list, select the Directory Manager version
to upgrade from.

:::note
The following steps describe the upgrade process with Directory Manager 10 as the source
version. The process might vary for other source versions.
:::


Step 4 – Click **Next**.

![Upgrade wizard Select Modules to upgrade page](/images/directorymanager/11.2/install/upgrade/3-select_modules.webp)

On the Select Modules to upgrade page, select the type of Directory Manager data for upgrade. You
can choose to upgrade all or selected data of the previous version. Options are:

- Everything – upgrades all data, which covers all options discussed under Custom.
- Custom – choose the data you want to upgrade. When you select it, the wizard lists the following options.

    ![Select Modules page showing the Custom upgrade options](/images/directorymanager/11.2/install/upgrade/3-select_modules-custom.webp)

    :::note
    If you later want to upgrade specific groups and their history using the Upgrade-Group
    cmdlet, you must upgrade the Configuration and History in the first upgrade run. This
    upgrades the history in the database to the Directory Manager 11.2 format and replicates it
    to Elasticsearch. Later, when you upgrade specific groups and their history using the
    Upgrade-Group cmdlet, the upgrade succeeds. See the
    [Upgrade-Group](/docs/directorymanager/11.2/managementshell/smartgroup/upgradegroup.md) cmdlet for additional
    information.
    :::


    If you want to upgrade configurations, history, and all groups using the Directory Manager
    Upgrade wizard, then you must select the Configurations, History, and Groups checkboxes.

Step 5 – Click **Next**.

Step 6 – If you have a Microsoft Entra ID-based identity store in Directory Manager 10, the
following page appears.

![Upgrade wizard Microsoft Entra ID store page](/images/directorymanager/11.2/install/upgrade/entraidstore.webp)

Provide the following information:

- Registered Client Secret on EntraID: Provide the client secret value generated against the
  certificate uploaded to Microsoft Entra Admin Center while registering the Directory
  Manager application.
- PFX Certificate: Click **Browse** to navigate to the folder where the certificate is saved. This
  certificate must be the same one uploaded for the registered Directory Manager app in Microsoft Entra
  ID.
- PFX Certificate Password: Provide the password of the PFX certificate.

Step 7 – Click **Next**.

Step 8 – If the Directory Manager source version has an Office 365 messaging provider configured in
a Microsoft Entra ID-based identity store or in an AD identity store, the Upgrade wizard displays
the following page.

![Upgrade wizard Microsoft Entra ID Messaging System page](/images/directorymanager/11.2/install/upgrade/entraidmessagingsystem.webp)

Provide the following information:

- Client Secret: Provide the client secret value generated against the certificate uploaded to
  Microsoft Entra Admin Center while registering the Directory Manager application.
- PFX Certificate: Click **Browse** to navigate to the folder where the certificate is saved. This
  certificate must be the same one uploaded for the registered Directory Manager app in Microsoft Entra
  ID.
- PFX Certificate Password: Provide the password of the PFX certificate.

Step 9 – If any Synchronize jobs exist in Directory Manager 10 or the version you are upgrading
from, then the wizard checks the destination domain set for them. Suppose you have 5 jobs that
connect to different child domains in a forest with different service accounts and different
messaging providers.

- If an identity store already exists in Directory Manager 10 for the destination domains that the
  jobs connect to, the Upgrade wizard moves the jobs to the respective identity stores in Directory Manager 11.2.
- When there is no identity store in Directory Manager 10 for the destination domain that the jobs
  connect to, the Upgrade wizard reads the FQDN of the destination domains used in the jobs and
  tries to create a forest structure. On identifying one, it proceeds to create an identity store
  for the forest, requiring you to provide a service account. (The wizard automatically populates the user name and password fields,
  but you can change them.) The wizard moves all jobs with a destination provider for that
  forest domain or any of its child domains to the new identity store.

    ![Upgrade wizard page for creating an identity store for a forest](/images/directorymanager/11.2/install/upgrade/synchronize_upgrade.webp)

    :::note
    The service account you provide here should have at least _read_ permission in the entire
    forest, so that all objects from the forest can be replicated to Elasticsearch.
    :::


    The wizard doesn't create a separate identity store for each child domain in the same forest.
    If it can't determine a forest structure, it creates separate identity stores for each
    domain.

Step 10 – For Synchronize jobs that use Office 365 as the messaging provider in Directory Manager 10,
the wizard requires you to provide the PFX certificate. The wizard page lists all Synchronize jobs that use Office
365 as the messaging provider. Expand each job and provide the PFX
certificate along with its password.

![Upgrade wizard Synchronize Messaging System page listing jobs that use Office 365](/images/directorymanager/11.2/install/upgrade/entraidsynmessagingsystem.webp)

Provide the following information:

- Certificate: Click **Browse** to navigate to the folder where the certificate is saved. This
  certificate must be the same one uploaded for the registered Directory Manager app in Microsoft Entra
  ID.
- Password: Provide the password of the PFX certificate.
- Client Secret: Provide the client secret value generated against the certificate uploaded to
  Microsoft Entra Admin Center while registering the Directory Manager application.

Step 11 – Click **Next**.

Step 12 – The Upgrade wizard doesn't upgrade reports. In Directory Manager 10 and earlier versions,
Directory Manager generated reports for the domain that the Directory Manager server was joined to.
Directory Manager 11.2 doesn't attach these reports to an identity store. After the upgrade,
reconfigure the reports manually in Directory Manager 11.2.

Step 13 – During the upgrade, the Upgrade wizard also moves Synchronize schedules to identity stores.
The Upgrade wizard checks the jobs added to a schedule. If the destination in a job is a
directory provider, it automatically moves the schedule to the respective identity store.

:::tip
During the upgrade, the Upgrade wizard creates identity stores for destination directory providers of
Synchronize jobs (that is, for providers that don't have an identity store in the source version).
:::

Consider the following:

- If a schedule has Synchronize jobs where one job uses an Active Directory domain (DomainA) as
  destination and another job uses a file-based provider as destination, then the schedule automatically
  moves to the identity store created for DomainA.
- For schedules with Synchronize jobs that use file-based providers as destination, the Upgrade
  wizard displays the following page, which lists all such schedules. Select an identity store
  for each schedule, so that the schedule moves to that identity store.

    ![Upgrade wizard page for selecting an identity store for each schedule](/images/directorymanager/11.2/install/upgrade/store_selection_for_schedules.webp)

    The preceding rules also apply to schedules with job collections added to them.

Step 14 – Click **Next**.

![Upgrade wizard Summary page](/images/directorymanager/11.2/install/upgrade/5-summary.webp)

This page displays a complete summary of the data to be copied or upgraded for your selected options.
You selected these options on the Select modules to upgrade page.

:::note
If there are any disabled identity stores in the source Directory Manager version, Directory
Manager doesn't upgrade those identity stores. However, data of those identity stores
remains intact in the source Directory Manager version.
:::


Step 15 – Review the summary and click **Next**.

![Upgrade wizard Upgrade Progress page](/images/directorymanager/11.2/install/upgrade/6-upgrade_process_complete.webp)

The Upgrade wizard upgrades Directory Manager while displaying the upgrade progress. On successful
upgrade, Directory Manager displays the Upgrade Completed message above the progress bar.

Step 16 – Click **Next**.

![Upgrade wizard Upgrade Completed page](/images/directorymanager/11.2/install/upgrade/7-upgrade_complete.webp)

The Upgrade Completed page displays the status of features selected for upgrade.

Step 17 – You can click:

- **View Detail** to view the log file generated during the upgrade.
- **Launch Directory Manager** to start using Directory Manager 11.2.
- **Close** to close the Upgrade wizard.
