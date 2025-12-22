---
title: "Set Up Data Tracking"
description: "Set Up Data Tracking"
sidebar_position: 100
---

# Set Up Data Tracking

Data tracking is used for Salesforce CPQ and any sensitive data fields you want to track. Setting up
data tracking enables Platform Governance for Salesforce to track data and create change logs for
any data changes.

:::note
If you track an object, all changes to the object and fields are tracked. Consult with your security
and audit teams to develop a list of objects before enabling data tracking.
:::

## Prerequisites

Here are the requirements to set up data tracking:

1. Enterprise Compliance license
2. Access to the Configuration app. You must have the **Strongpoint Administrator** and
   **Strongpoint Grant Permissions** assignments to access the app. This access is set through:
   **Setup** > **Users** > **Permission Sets** > **Strongpoint Administrator** > **Manage
   Assignments**

    ![You must have these permissions to open the Configuration tool](/images/platgovsalesforce/change_management/strongpoint_permissions.webp)

## Add Objects to Track

1. Open the Salesforce App Launcher.
2. Click **View All** to expand the app list.
3. Select **Strongpoint Configuration**. The **Recommended Objects** list is displayed.

    ![Review the recommended objects for data tracking](/images/platgovsalesforce/change_management/data_tracking_recommended.webp)

4. Click the checkbox to select each **Recommended Object** to track.
5. Set the **Tracking** for each selected Object:

    - **Not Tracked**: Changes in data records are not tracked.
    - **Tracked, Blocking**: Changes in data records are blocked if there is not an approved Change
      Request.
    - **Tracked, Non-Blocking**: Changes in data records are logged. The Change Logs show the change
      as non-compliant if there is not an approved Change Request.

6. Set the **Update Only** for each selected Object:

    - **No**: Tracks changes to existing and new records.
    - **Yes**: Tracks changes to existing records but does not apply to new records.

7. Click **Apply Recommendations**.
8. Click **Save All Records** if you do not need any additional objects, otherwise continue these
   steps.
9. Click **Show Additional Objects for Tracking (Advanced)**. The Additional Objects list is
   displayed.
10. Click the checkbox to select each **Additional Object** to track. You can search for objects, or
    use the navigation at the bottom of the form to page through the records.
11. Set the **Tracking** and **Update Only** values for each additional selected object.
12. Click **Apply Recommendations**.
13. Click **Save All Records**.
14. Wait until the **Deployment Status** is complete, then click **Done**.

    ![Wait for the Deployment Status to complete](/images/platgovsalesforce/change_management/data_tracking_deployment.webp)

15. Open the App Launcher and return to the **Strongpoint Lightning** app.

## Select Customizations to Track

1. Open **Customizations**.
2. Enter **CustomField** in the **Search** box.

    ![Open CustomField Tracking](/images/platgovsalesforce/change_management/data_tracking_customfield.webp)

3. Select **CustomField Tracking**.
4. Select a customization and edit the Data Change Tracking field.

    ![Edit the Data Change Tracking](/images/platgovsalesforce/change_management/data_tracking_customfield3.webp)

5. Click **Save** at the bottom of the form to save your changes.

## Add Tracked Objects to a Policy

Adding a tracked object to a specific policy facilitates tracking. For example, you can create a
report based on changes of that policy. In your Change Enablement process, you can set a change
level for tracked components by adding them to a specific policy.

1. Open **Change / Approval Policies**. Change the view to **All Policies** instead of **Recently
   Viewed**.
2. Select a policy to track the object.
3. Open the **Related** tab.
4. Click **Add Customizations**.
5. Enter **(Data Records** in the Search Customization box.

    ![Select the customizations](/images/platgovnetsuite/change_management/policy_add_customizations.webp)

6. Select the customization to add. Use Shift-click (contiguous items) or Ctrl-click to select
   multiple customizations.
7. Click **Add** to add your selections to the Selected Customizations pane.
8. Click **Save** when you are done.

## Change Logs

![CPQ Change Log](/images/platgovsalesforce/change_management/cpq_discount_change_log.webp)

**Tracked, Non-Blocking** generates a Compliant Change Log (CL-11674) if there is an approved Change
Request or a Non-Compliant Change Log (CL-11672) for changes made without an approved Change
Request.

**Tracked, Blocking** generates a Compliant Change Log (CL-11672) if there is an approved Change
Request. If a user attempts to save a change to a **Tracked, Blocking** object without an approved
Change Request, an error is generated and the change is not saved.
