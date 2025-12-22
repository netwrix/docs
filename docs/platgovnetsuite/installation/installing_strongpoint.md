---
title: "Installing Platform Governance for NetSuite"
description: "Installing Platform Governance for NetSuite"
sidebar_position: 10
---

# Installing Platform Governance for NetSuite

To get Platform Governance for NetSuite up and running, you need to do the following:

1. [Install the bundle](#install-the-bundle) using the correct bundle name and the bundle ID.
2. [Set the number of rows in list segments](#set-the-number-of-row-in-list-segments) to 1,000. This
   is a NetSuite best practice
3. [Assign a Strongpoint License](#assign-a-license).
4. [Run the spider](running_the_spider). The spider scans your account in a standardized manner. A
   series of scheduled scripts is run to document the connections between the customizations.

Starting with Version 6.2.5, queues and priority allocation are deprecated. The bundle is now
installed using processor architecture for scheduled scripts. All deployments are set to low
priority.

## Install the Bundle

The Bundle ID has been updated due to NetSuite changes.

1. Log into your NetSuite account with the administrator role.
2. Open **Customization** > **SuiteBundler** > **Search & Install Bundles**
3. Enter **294336** in **Keywords**
4. Click **Search**

    ![Search for the Strongpoint Bundle](/images/platgovnetsuite/installing_strongpoint/searchandinstallbundles.webp)

5. Click **Strongpoint**
6. Click **Install** to start the bundle installation.
7. Verify the installation is complete. Open **Customization** > **SuiteBundler** > **Search &
   Install Bundles** > **List**
   In the **Installed Bundles** list, the **Strongpoint** bundle is marked with a green check in the
   **Status** column when the bundle is installed.

    ![Verify Strongpoint Bundle Installation](/images/platgovnetsuite/installing_strongpoint/verify_bundle_install.webp)

## Set the Number of Row in List Segments

It is important that you set your NUMBER OF ROWS IN LIST SEGMENTS to 1,000. This is a NetSuite best
practice and critical for the proper spidering of your workflows. If you are unable to edit this
field, refer to
[Cannot Change the Number of Rows in List Segments](/docs/platgovnetsuite/reportabug/list_segments_not_editable.md)

To set the Number of Rows in List Segments:

1. Select **Set Preferences** from **Home** on the NetSuite main menu.
2. Go to **Optimizing NetSuite**.
3. Set the value to **1,000**.
4. Click **Save**.

If the field is grayed out, it should be set as a **Company Preference:**

1. Select **Company Preferences** from **Set Up** > **General Preferences** on the NetSuite main
   menu.
2. Find the field **Number of Rows in List Segments**
3. Set the value to **1,000**
4. Click **Save**

## Assign a License

1. Open **Strongpoint** > **Strongpoint Support** > **License Manager**
2. Click **View**.
3. Click **New Licensed User**.
4. Click **Edit** by your name.
5. Select **Full** for **License Type**.
6. Click **Save**.

**Next Step:** [Running the Spider](running_the_spider)
