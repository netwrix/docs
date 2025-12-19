---
title: "Installing User Access Review"
description: "Installing User Access Review"
sidebar_position: 10
---

# Installing User Access Review

The User Access Review app must be installed and licensed before it can be used.

- Installing the Bundle
- Licensing New Users for the UAR App
- Licensing Existing Users for UAR
- Adding UAR Center Tab to Custom Roles

## Installing the Bundle

1. Log into your NetSuite account with the administrator role.
2. Open **Customization** > **SuiteBundler** > **Search & Install Bundles**
3. Enter **433078** in **Keywords**.
4. Click **Search**.

    ![Search for the UAR bundle](/images/platgovnetsuite/uar/bundle_uar.webp)

5. Click **Strongpoint UAR**.

    ![Select the bundle](/images/platgovnetsuite/uar/bundle_uar2.webp)

6. Click **Install** to start the bundle installation.
7. Verify the installation is complete. Open **Customization** > **SuiteBundler** > **Search &
   Install Bundles** > **List**
8. In the **Installed Bundles** list, the **Strongpoint UAR** bundle is marked with a green check in
   the **Status** column when the bundle is installed.

A Strongpoint administrator grants users access to the UAR app. Continue with Licensing New Users
for the UAR App or Licensing Existing Users for UAR.

## Licensing New Users for the UAR App

This procedure is used to add a UAR license to an existing NetSuite user who is not licensed for
Platform Governance for NetSuite.

1. Open **Strongpoint** > **Strongpoint Support** > **License Manager**.
2. Click **View**.
3. Set the **View** to **Strongpoint Licensed Users**.

    ![Set View to Strongpoint Licensed Users](/images/platgovnetsuite/uar/licensing_uar.webp)

4. Click **New Licensed User**.

    ![UAR Licensed User](/images/platgovnetsuite/uar/app_access.webp)

5. Select the **User**.
6. Set **License Type** to **Full**.
7. Assign one or more UAR roles:

    - **UAR Owner** reviews Role Permissions and/or Role Membership.
    - **UAR Auditor** read-only access.
    - **UAR Additional Reviewer** performs assigned Role Membership reviews.
    - **UAR Admin**manages the UAR process, assigns Role Owners to a role, creates Reviews, and views
  Reviews.

8. Click **Save**.

## Licensing Existing Users for UAR

1. Open **Strongpoint** > **Strongpoint Support** > **License Manager**.
2. Click **View**.
3. Set the **View** to **Strongpoint Licensed Users**.

    ![Set View to Strongpoint Licensed Users](/images/platgovnetsuite/uar/licensing_uar.webp)

4. Click **Edit** beside the User name.

    ![UAR Licensed User](/images/platgovnetsuite/uar/licensing_uar2.webp)

5. Set **License Type** to **Full**.
6. Assign one or more UAR roles:

    - **UAR Owner** reviews Role Permissions and/or Role Membership.
    - **UAR Auditor** read-only access.
    - **UAR Additional Reviewer** performs assigned Role Membership reviews.
    - **UAR Admin**manages the UAR process, assigns Role Owners to a role, creates Reviews, and views
  Reviews.

7. Click **Save**.

## Adding UAR Center Tab to Custom Roles

Determine the **Roles** and **Center Types** that need access to UAR.

1. Open **Setup** > **Users/Roles** > **Manage Roles** to review your roles. The **Center Type** is
   listed for each **Role**. For example, if you are adding UAR to the **Controller** role, you can
   see the **Center Type** is **Accounting Center**.

    ![Find the Center Type for each Role](/images/platgovnetsuite/uar/role_review.webp)

2. Open **Customization** > **Centers and Tabs** > **Center Tabs**
3. Click **Edit** by **User Access Review**.
4. Select the **Center**. This example shows the **Accounting Center**.

    ![Assign the Center](/images/platgovnetsuite/uar/center_tab.webp)

5. Open the **Audience** tab.
6. Select the **Role**. This example show the **Controller - Basic** role.

    ![Add the role](/images/platgovnetsuite/uar/center_tab_audience.webp)

7. Select **Save** > **Save a Copy**.
8. Repeat for each **Center Type** and **Role**.
