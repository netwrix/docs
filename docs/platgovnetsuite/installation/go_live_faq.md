---
title: "Go Live Frequently Asked Questions"
description: "Go Live Frequently Asked Questions"
sidebar_position: 110
---

# Go Live Frequently Asked Questions

Here is a list of common questions customers have asked after they Go Live.

> _How To_: [Create a Change Request for Role Assignment](#create-a-change-request-for-role-assignment)
>
> _How To_: [Add New Customizations to a Change Request](#add-new-customizations-to-a-change-request)
>
> _How To_: [Search for Customizations](#search-for-customizations)
>
> _About_: [Prototype Customizations](#prototype-customizations)
>
> _About_: [Approval Overrides](#approval-overrides)
>
> _Help_: [Change By Field Showing AutoSpider or Could Not Be Determined](#change-by-field-showing-autospider-or-could-not-be-determined)
>
> _Help_: [New Script Deployments on Non-Compliant Changes Report](#new-script-deployments-on-non-compliant-changes-report)
>
> _Help_: [Change Logs Attached to the Wrong Change Request](#change-logs-attached-to-the-wrong-change-request)
>
> _Help_: [Managed Bundle changes showing up as non-compliant changes?](#managed-bundle-changes-showing-up-as-non-compliant-changes)
>
> _Help_: [You do not have a Valid License Message](#you-do-not-have-a-valid-license-message)

## Create a Change Request for Role Assignment

For a Role Assignment (or any role change), you create a Change Request:

1. Open **Strongpoint** > **Change Management Tools** > **ITGC Change Request** > **New**
2. Enter a **Name** and **Change Overview**.
3. Click **Lookup Customization**
4. Select **User Role** for **Type** and click **Lookup**
5. Select one of more user roles.
6. Click **Add Selection Customization**
7. Click **Pending Approval** on the Approval Status bar.

Once the Change Request is approved, you add the employee:

1. In the NetSuite **Search** box, enter **emp:** and start typing the employee's name. Click
   **Edit** by the employee in the Search results.
2. Click Edit on the Employee Record.
3. Open the **Access** tab and assign the new role, or delete an existing role.
4. Click **Save**.
5. Open the Change Request you created for this role change.
6. Click **ReSpider Now**. Once the Spider is complete, you can review your change.
7. Click **Complete** in the Change Request status once you verify your changes.

## Add New Customizations to a Change Request

Customizations can be added to any open Change Request. On the Change Request, click **Lookup
Customization** to launch a window where you can search for customizations, or enter existing
customizations in the **Customizations** field. The **Proposed Customizations** are for new
customizations that do not exist in any account. Refer to
[Creating a Change Request](/docs/platgovnetsuite/changemanagement/creating_change_request.md) for details.

## Search for Customizations

To access a customization quick search, open **Strongpoint** > **Customizations** > **Customization
Quick Search**

You can search using several factors and submit. When looking up by **Name**, using **Contains**
helps if you do not have the exact name.

![custquicksearch](/images/platgovnetsuite/customizations/custquicksearch.webp)

## Prototype Customizations

If a user creates a new customization without using a NetSuite prefix, the system flags it as a
Prototype Customization. When you use Platform Governance for NetSuite to create your
customizations, the prefix is added for you. An example is adding a new field to a form.

To fix this situation:

1. Open the Change Request.
2. If the ScriptID is correct, you can edit the Object and use **Change ID** to fix the object.
3. If the ScriptID is not correct:

    1. Return the Change Request to **In Progress**.
    2. Fix the identifier.
    3. Set the Change Request to**Pending Approval** to restart the Approval process.

## Approval Overrides

Administrators can perform Approval Overrides on a Change Request.

1. Open a Change Request that is **Pending Approval**.
2. Click **Edit**.
3. Select **Approved** from the **Approval Status** list.

    ![Change Status to Approved](/images/platgovnetsuite/installing_strongpoint/golive_approval_override.webp)

The Status bar is set to **Approved (Override)** and the administrator's name is displayed in the
**Approval Override By** field.

## Change By Field Showing AutoSpider or Could Not Be Determined

If the AutoSpider is not run, your Change Logs will be missing the **Changed by** and **Actual
Change Date** fields. When the Change Log is newly created, the fields contain **Pending
AutoSpider**. If too many days go by, the fields change to **Could not be determined**.

Refer to [Setting Up the AutoSpider and Alerts](/docs/platgovnetsuite/installation/running_the_spider.md) for details.

## New Script Deployments on Non-Compliant Changes Report

This situation occurs when you create a script through a Change Request, but do not include the
Deployment Record on the Change Request. To properly add and deploy a script:

1. Create the Change Request to add a new script.
2. Create the script.
3. Create a Deployment Record for the script.
4. Add the Deployment Record to the Change Request.
5. Deploy the script.

If your site uses [Opportunistic Clearance](/docs/platgovnetsuite/changemanagement/opportunisticclearance/opportunistic_clearance.md), the
deployment record is handled automatically. You should make sure you understand all of the
ramifications of Opportunistic Clearance prior to enabling it for your account.

## Change Logs Attached to the Wrong Change Request

This situation occurs if you have multiple open Change Requests referencing the same customization.
The Change Log is attached to the oldest open Change Request.

Best practice is to change the status of completed Change Requests to **Complete**.

## Managed Bundle changes showing up as non-compliant changes?

This situation is generally caused due to a time gap between Spider runs. Managed Bundles are
evaluated after other changes. The Spider adds them to the non-compliant report the first time a
Managed Bundle is encountered. When the Spider is next run, it knows about the Managed Bundle and
removes it from the non-compliant report.

No action is required to fix this situation.

## You do not have a Valid License Message

If a user sees a License message, you need to grant them a license. Refer to the
[License Manager](/docs/platgovnetsuite/installation/license_manager.md) topic.
