---
title: "Review Provisioning"
description: "Review Provisioning"
sidebar_position: 10
---

# Review Provisioning

How to review provisioning orders before generation.

## Overview

For security purposes, provisioning orders sometimes need to be reviewed before being computed and actually generated. Then, a user with the right permissions accesses the **Provisioning Review** page. They can either approve provisioning orders that will then be computed, generated and finally ready for actual provisioning, or they can decline orders that will subsequently be ignored. See the [Configure a User Profile](../../../user-guide/set-up/user-profile-configuration) topic for additional information.

### Provisioning states

In an assignment request's lifecycle, provisioning review adds a few steps between the moment when the request is issued and when provisioning orders are computed:

![Provisioning State Schema](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_states_v523.webp)

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of managed systems.

 | Input | Output | 
 | --- | --- | 
 | [Create a Provisioning Rule](../../../user-guide/set-up/provisioning-rule-creation) (required) [Create Roles in the Role Catalog](../../../user-guide/set-up/single-roles-catalog-creation) (required) | Provisioning orders | 

## Implement Provisioning Review

Provisioning review is configured for a given resource type. Therefore, you can decide to force the review of provisioning orders when you [Create a Resource Type](../../../user-guide/set-up/categorization/resource-type-creation). You can choose to:

- Set the number of required approvals via the `Approval Workflow` option.
- Enable a technical approval by the application owner, via the `Block provisioning orders` option.

Provisioning review can also be triggered when a fulfillment error occurs. See the [Identity Management](../../../introduction-guide/overview/identity-management) topic for additional information.

## Review Provisioning Orders

Review provisioning orders by proceeding as follows:

1. On the home page, click on the entity type that you want to manage in the **Provisioning Review**
section.

    ![Home Page - Provisioning Review](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/home_provisioningreview_v523.webp)

    ![Provisioning Review](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_provreview_v602.webp)

2. Click on a line to access details and handle addition, association, update or deletion orders.

Once reviewed, provisioning orders are to be executed by Identity Manager during the next **Fulfill** task, accessible from the corresponding connector's overview page, in the **Resource Types** frame.

Automatic provisioning orders are directly executed, while manual provisioning orders are listed on the **Manual Provisioning** page.

    ![Fulfill Task](/images/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Handle an addition order

Identity Manager shows all the properties of the new resource to be created:

![Addition Order Review](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewaddition_v602.webp)

- `Proposed Value`: value proposed by Identity Manager.
- [Entitlement Assignment](../../../integration-guide/role-assignment/assignments-of-entitlements)
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- `Workflow State`: describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding query rule.

See the [Entitlement Assignment](../../../integration-guide/role-assignment/assignments-of-entitlements) and [Create a Provisioning Rule](../../../user-guide/set-up/provisioning-rule-creation) topics for additional information.

Handle an addition order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

    - Either click on the approval icon to order the property creation with the proposed value.

    ![Addition - Approval Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

    - Or click on the decline icon to refuse the property creation.

    ![Addition - Decline Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

    - Or click on the postponement icon to delay the decision.

    ![Addition - Postponement Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Choose to confirm or ignore the creation.

### Handle an association order

Identity Manager displays a given owner and a given resource to be associated with a given [Classify Resources](../../../user-guide/set-up/categorization/classification)and all resource properties to be verified:

![Association Order Review](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewassociation_v602.webp)

- `Confidence rate of proposed resource`: rate expressing the confidence in this [Correlate Resources](../../../user-guide/set-up/categorization/correlation).
- `Proposed Value`: value proposed by Identity Manager.
- `Current Value`: value currently in the managed system.
- `Provisioning State`
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- `Workflow State`: describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding query rule.

See the [Entitlement Assignment](../../../integration-guide/role-assignment/assignments-of-entitlements) and [Create a Provisioning Rule](../../../user-guide/set-up/provisioning-rule-creation) topics for additional information.

Handle an association order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

    - Either click on the approval icon to validate the proposed property value.

        ![Addition Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

        ![Edition Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconedit_v602.svg)

        ![Deletion Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/reviewrole_icondelete_v602.svg)

    - Or click on the decline icon to refuse the property association.

        ![Addition - Decline Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

    - Or click on the postponement icon to delay the decision.

        ![Addition - Postponement Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Choose to confirm or deny the association.

### Handle an update order

Identity Manager shows a given resource and all resource properties to be verified:

![Edition Order Review](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewedition_v602.webp)

- `Proposed Value`: value proposed by Identity Manager.
- `Current Value`: value currently in the managed system.
- `Provisioning State`
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- `Workflow State`: describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding query rule.

See the [Entitlement Assignment](../../../integration-guide/role-assignment/assignments-of-entitlements) and [Create a Provisioning Rule](../../../user-guide/set-up/provisioning-rule-creation) topics for additional information.

Handle an update order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

    - Either click on the approval icon to order the property update with the proposed value.

        ![Edition - Addition Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

        ![Edition Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconedit_v602.svg)

    - Or click on the decline icon to refuse the property update.

        ![Addition - Decline Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

    - Or click on the postponement icon to delay the decision.

        ![Addition - Postponement Icon](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Click on **Confirm Property Values**.

### Handle a deletion order

Identity Manager shows a given owner and their resources to be deleted:

![Deletion Order Review](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewdeletion_v602.webp)

Handle a deletion order by choosing either to confirm the deletion or to keep the resource.

### Use property view

By default, provisioning orders are listed by resource. It is possible to click on a resource and then access the list of all provisioning orders for that resource.

![Resource View](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_resourceview_v603.webp)

In addition, using resource view enables **bulk unblocking** for provisioning orders with errors.

![Bulk Unblock](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_bulkunblock_v603.webp)

It can be helpful to have the provisioning orders regrouped by property, as some of the changes can be similar, so very likely to be validated by the same user. This is why a property view can be enabled by clicking on the `Property View` toggle at the top right corner.

Once enabled, select a resource type to display all provisioning orders linked to that resource type. In addition, select a property to display only the provisioning orders linked to these resource type and property.

![Property View](/images/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_propertyview_v603.webp)

The review process is similar on both views. However with property view, reviewers don't click on a given line, but choose a decision directly on the left of the property line.

## Verify Provisioning Review

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

    ![Home Page - Directory User](/images/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Follow the [Request Entitlement Assignment](../../../user-guide/administrate/manual-assignment-request) workflow to make a change in one of their permissions, which involves provisioning review.
3. Check that the provisioning state is `Pending` in the user's **View Permissions** tab.

    ![View Permissions Tab](/images/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

4. Click on **Jobs** > **Fulfill** on the corresponding connector's overview page, in the **Resource
Types** frame, to execute the provisioning orders.

    ![Home Page - Job Execution](/images/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

5. The orders using automated provisioning should be automatically handled with their state
switching to `Executed`, while those using manual provisioning should appear on the **Manual Provisioning** page with their state switching to `Transmitted`.

![Home Page - Manual Provisioning](/images/identitymanager/user-guide/administrate/provisioning/manual-provisioning/home_manualprovisioning_v523.webp)

