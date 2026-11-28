---
title: "Upgrade to GroupID 11 with the Wizard"
description: "Move identity stores, Synchronize jobs, schedules, and reports from GroupID 9 or 10 to GroupID 11 by following the Upgrade wizard pages."
keywords:
  - GroupID upgrade wizard
  - upgrade to GroupID 11
  - upgrade identity stores
  - upgrade Synchronize jobs
  - Microsoft Entra ID certificate upgrade
sidebar_position: 10
---

# Upgrade to GroupID 11 with the Wizard

:::note
GroupID 11.0 supported upgrade from GroupID 9 and GroupID 10. As of Directory Manager
11.2, you can upgrade only from GroupID 10 SR2. This page is kept for archive purposes. When you plan
an upgrade, use the
[Directory Manager 11.2 upgrade documentation](https://docs.netwrix.com/docs/directorymanager/11_2/install/upgrade/).
:::

This topic guides you through upgrading to GroupID 11 from GroupID 9 and 10.

1. To launch the Upgrade wizard, click **Next** on the **GroupID Successfully Configured** page of
   the Configuration Tool.

    **OR**

    Click the Windows **Start** menu > **Imanami** > **GroupID Upgrade Tool 11.0**.

    ![Upgrade wizard Welcome page](/images/directorymanager/11.0/install/upgrade/1-welcome.webp)

2. Read the welcome message and click **Next**.

    ![Upgrade wizard page for selecting the source version](/images/directorymanager/11.0/install/upgrade/2-select_source_version.webp)

3. From the **Select the previous version to upgrade** list, select the GroupID version to
   upgrade from.

    :::note
    The following steps describe the upgrade process with GroupID 10 as the source
    version. The process might vary for different source versions.
    :::

4. Click **Next**.

    ![Select modules to upgrade page](/images/directorymanager/11.0/install/upgrade/3-select_modules.webp)

    On the **Select Modules to upgrade** page, select the type of GroupID data to
    upgrade. You can choose to upgrade all or selected data of the previous version. The options
    are:

    - **Everything** – Upgrades all data, which covers all options described under **Custom**.
    - **Custom** – Lets you choose the data to upgrade. When you select it, the wizard lists the
      following options.

        ![Select modules to upgrade page with the Custom option selected](/images/directorymanager/11.0/install/upgrade/3-select_modules-custom.webp)

5. Click **Next**.
6. If you have a Microsoft Entra ID based identity store in GroupID 10, the following page
   appears.

    ![Microsoft Entra ID Store Upgrade page](/images/directorymanager/11.0/install/upgrade/entraidstore.webp)

    Provide the following information:

    - **Registered Client Secret on EntraID** – Provide the client secret value generated against
      the certificate uploaded to the Microsoft Entra admin center while registering the GroupID
      application.
    - **PFX Certificate** – Click **Browse** to navigate to the folder where the certificate is
      saved. This certificate must be the same one uploaded for the registered GroupID
      app in Microsoft Entra ID.
    - **PFX Certificate Password** – Provide the password of the PFX certificate.

7. Click **Next**.
8. If the Office 365 messaging provider is configured in a Microsoft Entra ID based identity store
   or in an Active Directory identity store in the source version, the Upgrade wizard displays the
   following page.

    ![Upgrade wizard Microsoft Entra ID Messaging System page](/images/directorymanager/11.0/install/upgrade/entraidmessagingsystem.webp)

    Provide the following information:

    - **Client Secret** – Provide the client secret value generated against the certificate
      uploaded to the Microsoft Entra admin center while registering the GroupID
      application.
    - **PFX Certificate** – Click **Browse** to navigate to the folder where the certificate is
      saved. This certificate must be the same one uploaded for the registered GroupID
      app in Microsoft Entra ID.
    - **PFX Certificate Password** – Provide the password of the PFX certificate.

9. If any Synchronize jobs exist in GroupID 10 or the version you are upgrading from, the
   wizard checks the destination domain set for them. For example, assume you have five jobs that
   connect to different child domains in a forest with different service accounts and different
   messaging providers.

    - If an identity store already exists in GroupID 10 for the destination domains that
      the jobs connect to, the jobs move to the respective identity stores in GroupID 11.
    - When no identity store exists in GroupID 10 for the destination domain that the
      jobs connect to, the Upgrade wizard reads the FQDN of the destination domains used in the jobs
      and tries to create a forest structure. When it identifies one, it creates an identity store
      for the forest and requires you to provide a service account. (The user name and password
      fields are populated automatically, but you can change them.) All jobs with a destination
      provider for that forest domain or any of its child domains move to the new identity store.

        ![Upgrade wizard page for creating an identity store for Synchronize jobs](/images/directorymanager/11.0/install/upgrade/synchronize_upgrade.webp)

        :::note
        The service account you provide here must have at least _read_ permission in the entire
        forest, so that all objects from the forest can be replicated to Elasticsearch.
        :::

        The wizard doesn't create a separate identity store for each child domain in the same
        forest. If it can't determine a forest structure, it creates separate identity stores for
        each domain.

10. For Synchronize jobs that use Office 365 as the messaging provider in GroupID 10, the
    wizard requires you to provide the PFX certificate. The wizard page lists all Synchronize jobs
    that use Office 365 as the messaging provider. Expand each job and provide the PFX certificate
    along with its password.

    ![Upgrade wizard Synchronize Messaging System page](/images/directorymanager/11.0/install/upgrade/entraidsynmessagingsystem.webp)

    Provide the following information:

    - **Certificate** – Click **Browse** to navigate to the folder where the certificate is saved.
      This certificate must be the same one uploaded for the registered GroupID app in
      Microsoft Entra ID.
    - **Password** – Provide the password of the PFX certificate.
    - **Client Secret** – Provide the client secret value generated against the certificate
      uploaded to the Microsoft Entra admin center while registering the GroupID
      application.

11. Click **Next**.
12. In GroupID 10 and earlier versions, reports were generated for the domain that the
    GroupID server was joined to. During upgrade, the wizard checks whether an identity
    store for that domain exists.

    - If an identity store for that domain exists, or if the upgrade process is creating one for a
      Synchronize job, GroupID binds the reports to it.
    - If an identity store for that domain doesn't exist, you must create one for it. It must be an
      Active Directory identity store. The wizard binds the reports generated in GroupID
      10 to the identity store, so you can view them in GroupID 11.

      ![Upgrade wizard page for binding reports to an identity store](/images/directorymanager/11.0/install/upgrade/reports_upgrade.webp)

    :::note
    If no report was generated in GroupID 10, the page related to reports upgrade isn't
    displayed.
    :::

13. During upgrade, Synchronize schedules also move to identity stores. The Upgrade wizard checks
    the jobs added to a schedule. If the destination in a job is a directory provider, the wizard
    automatically moves the schedule to the respective identity store.

    During upgrade, the wizard creates identity stores for the destination directory providers of
    Synchronize jobs, that is, for providers that don't have an identity store in the source
    version.

    Consider the following:

    - If a schedule has Synchronize jobs where one job uses an Active Directory domain (DomainA) as
      the destination and another job uses a file-based provider as the destination, the schedule
      automatically moves to the identity store created for DomainA.
    - For schedules with Synchronize jobs that use file-based providers as the destination, the
      Upgrade wizard displays the following page, which lists all such schedules. Select an
      identity store for each schedule, so that the schedule moves to that identity store.

        ![Upgrade wizard page for selecting an identity store for each schedule](/images/directorymanager/11.0/install/upgrade/store_selection_for_schedules.webp)

    - The same rules apply to schedules with job collections added to them.

14. Click **Next**.

    ![Upgrade wizard Summary page](/images/directorymanager/11.0/install/upgrade/5-summary.webp)

    This page displays a complete summary of the data to be copied or upgraded for your selected
    options. You selected these options on the **Select modules to upgrade** page.

    :::note
    GroupID doesn't upgrade disabled identity stores in the source version. However, the
    data of those identity stores remains intact in the source version.
    :::

15. Review the summary and click **Next**.

    ![Upgrade wizard Upgrade Progress page](/images/directorymanager/11.0/install/upgrade/6-upgrade_process_complete.webp)

    The wizard upgrades GroupID while the Upgrade Process page displays the progress. When
    the upgrade succeeds, the **Upgrade Completed** message appears above the progress bar.

16. Click **Next**.

    ![Upgrade wizard Upgrade Completed page](/images/directorymanager/11.0/install/upgrade/7-upgrade_complete.webp)

    The **Upgrade Completed** page displays the status of the features selected for upgrade.

17. You can click:

    - **View Details** – Opens the log file generated during the upgrade process.
    - **Launch GroupID** – Starts GroupID 11.
    - **Close** – Closes the Upgrade wizard.

See Also

- [Install GroupID](/docs/directorymanager/11.0/about/installer/install.md)
- [Run the GroupID Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)
- [Uninstall GroupID](/docs/directorymanager/11.0/about/installer/uninstall.md)
- [Upgrade Notes and Limitations for GroupID 11](/docs/directorymanager/11.0/about/upgrade/notes.md)
