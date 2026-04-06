---
title: "Set Up Data Tracking"
description: "Set Up Data Tracking"
sidebar_position: 1
---

# Overview - Data Tracking

Data Tracking allows **Netwrix Platform Governance** to track changes and generate **Change Logs** for any data changes in selected objects.

It is commonly used for **Salesforce CPQ** and other **sensitive records** that require additional visibility or governance.

When Data Tracking is enabled for an object, **Netwrix Platform Governance** automatically:

- Monitors updates to records in that object.
- Creates **Change Logs** whenever a record is created or updated.
- Helps administrators review and audit data changes by using reports.

This helps organizations maintain better **control, transparency, and compliance** over important Salesforce data.

:::info
When Data Tracking is enabled for an object, **all changes to records within that object can be tracked**.

Because of this, it is recommended to review which objects should be monitored before enabling Data Tracking. Work with your **security, compliance, or audit teams** to define a list of sensitive objects before enabling Data Tracking.
:::

## Prerequisites

Here are the requirements to set up Data Tracking:

1. **Enterprise Compliance** license.
2. Access to the **Netwrix Configuration** app. You must have the **Netwrix Administrator** and
   **Netwrix Grant Permissions** permission sets to access the app. 
   Access can be granted to user through the following path:
   **Setup** > **Users** > **Permission Sets Assignments** > **Edit Assignments**

    ![You must have these permissions to open the Configuration tool](/images/platgovsalesforce/change_management/netwrix_permissions_assignment.webp)

# Set Up Data Tracking

1. Open the Salesforce App Launcher.
2. Search **Netwrix Configuration** app and open it.

    ![Review the recommended objects for data tracking](/images/platgovsalesforce/change_management/netwrix_configuration_app.webp)


## Select Objects to Track

In this section, users can apply tracking recommendations to one or more objects in the list. To do this, select the desired objects and click **Apply Recommendations**.

![Review the recommended objects for data tracking](/images/platgovsalesforce/change_management/data_tracking_recommended.webp)

The available tracking options for objects are:

- **Not Tracked**: Changes to data records are not monitored.
- **Tracked, Blocking**: Changes to data records are blocked if there is no approved Change Request.
- **Tracked, Non-Blocking**: Changes to data records are logged. If there is no approved Change Request, the Change Log marks the change as non-compliant.

:::note
While metadata changes in Salesforce can be tracked but not blocked, **Data Tracking** allows you to block most data record changes that are not pre-approved.

Changes to records in **Non-Triggerable objects** cannot be blocked. See the [**Non-Triggerable Objects**](non_triggerable_objects.md) section for more information about how these objects behave.
:::

Users can also choose whether tracking should apply to **Updates Only** for each object.

- **No**: Tracks changes to both new and existing records.
- **Yes**: Tracks changes to existing records only. Changes to new records are not tracked.

If you want to enable tracking for objects that are not included in the recommended list, follow these steps:

1. Click **Show Additional Objects for Tracking (Advanced)**. The **Additional Objects** list appears.
2. Search for the object by typing its name.
3. Set the **Tracking** and **Update Only** values for each object you want to configure.
4. Click **Save All Records**.
5. Wait until the **Deployment Status** is complete, then click **Done**.

    ![Wait for the Deployment Status to complete](/images/platgovsalesforce/change_management/data_tracking_deployment.webp)

:::note
To track objects that support triggers, **Netwrix Platform Governance** automatically creates and deploys a trigger and a test class for each selected object.

For Salesforce objects that do not support triggers, see the [**Non-Triggerable Objects**](non_triggerable_objects.md) section.
:::

:::important
Some **Salesforce standard objects** may cause issues when enabling **Data Tracking**.

If you experience problems while attempting to track certain objects, refer to the [**Troubleshooting**](data_tracking_troubleshooting.md) section for more information about known limitations and possible solutions.
:::

:::tip
We recommend using Data Tracking only for **critical configuration objects**.

Data Tracking is not designed for **high-volume objects** such as Opportunities or Quotes. For these types of objects, Salesforce’s standard **Field History Tracking** feature is a better option for monitoring changes.
:::

## Select Fields to Track

In some cases, users may need to monitor only specific sensitive fields within a tracked object, rather than tracking all changes to the object.

To support this, you can configure which fields should have additional tracking control.

1. Open **Netwrix Lightning** app.
2. Open **Customizations** tab.
3. Select the **CustomField Tracking** list view.

   ![Open CustomField Tracking List View](/images/platgovsalesforce/change_management/data_tracking_customfield.webp)

4. Select a customization and edit the **Data Change Tracking** field.
5. Click **Save** at the bottom of the form to apply your changes.

:::note
## Fields Excluded from Tracking (Default)

By default, **Netwrix Platform Governance** does not track changes in certain field types or standard system fields.

### Field Types Not Tracked

Changes to the following field types are not tracked:

- ADDRESS  
- BASE64  
- EMAIL  
- JSON  
- LOCATION  
- PHONE  
- TIME  
- URL  

### Standard Fields Not Tracked

Changes to the following standard Salesforce fields are also not tracked:

- CreatedDate  
- CreatedById  
- LastModifiedDate  
- LastModifiedById  
- SystemModStamp  
- IsDeleted  
- LastActivityDate  
- LastViewedDate  
- LastReferencedDate  
- Name  
- Description  
- OwnerId  
:::

## Add Tracked Objects to a Policy

By adding the tracked object to a policy, you can define the appropriate change level for it.  
For Data Records, select the change level in the **Application Configuration Changes (Data)** field.

![Application Configuration Changes (Data)](/images/platgovsalesforce/change_management/application_configuration_changes.webp)

1. Open **Change / Approval Policies** and select the **All Policies** list view.
2. Select the policy where you want to track the object.
3. Open the **Related** tab.
4. Click **Add Customizations**.
5. In the **Search Customization** box, type **(Data Records)**.
6. Select the customization for the tracked object that includes **"(Data Records)"** in its name.
7. Click **Add** to move the selection to the **Selected Customizations** pane.
8. Click **Save** to finish.

## Adding Data Records to Change Requests

When creating a Change Request, users can add **Existing Data Records** and **Proposed Data Records**, similar to how metadata components are added.

![Adding Data Records to Change Requests](/images/platgovsalesforce/change_management/add_records_change_request.webp)

1. Click **Add** from the panel.
2. Select the tracked object.
3. Optionally filter by the record name.
4. Select one or more records.
5. Click **Confirm Selection** button.

To add **Proposed Data Records** (for example, new records that will be created), select the object (data record customization). In the **Name** field, enter **"TBD"**. Create one proposed entry for each new record that will be added.

