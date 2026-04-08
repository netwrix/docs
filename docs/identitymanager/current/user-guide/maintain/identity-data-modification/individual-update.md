---
title: "Update an Individual Identity"
description: "Update an Individual Identity"
sidebar_position: 10
---

# Update an Individual Identity

How to manage onboarding, position changes and offboarding through the UI, for a single identity.

This part is not about changing the data model, but data itself.

## Overview

Individual changes in identity data can be handled using Identity Manager's predefined workflows to:

- declare a new identity (for an internal as well as an external worker);
- act on existing identities, including modify their data, manage their contract and/or positions,
suspend all accounts linked to them, or reactivate them, repair some data, or delete these identities.

## Participants and Artifacts

A given user's data can be updated occasionally by their manager, but most often by the HR department.

 | Input | Output | 
 | --- | --- | 
 | Identity repository (required) New identity data (required) | Updated identity repository | 

See the [Create the Workforce Repository](../../../user-guide/set-up/initial-identities-loading) topic for additional information.

## Declare a New Identity

Declare a new worker by proceeding as follows:

1. Access the user directory from the home page.

    ![Home Page - Directory User](/images/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. According to the type of the user to be declared, click on the corresponding button.

    ![Workflow - New User](/images/identitymanager/user-guide/maintain/identity-data-modification/individual-update/datamodif_newuser_v602.webp)

3. Follow the workflow's instructions to fill the form with the user's data, choose the user's
entitlements from your role catalog and send the request. See the [Create Roles in the Role Catalog](../../../user-guide/set-up/single-roles-catalog-creation) topic for additional information.

## Act on an Existing Identity

Act on an existing identity by proceeding as follows:

1. Access the user directory from the home page.

    ![Home Page - Directory User](/images/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be modified.

    ![Workflow - User](/images/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **Actions** or **Helpdesk** to select the action to perform.

    ![Workflow - Modify Permissions](/images/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_changeuser_v602.webp)

4. Follow the workflow's instructions.

If the workflow has been configured in this way, the update request may require a review. In this case, sending the request triggers the display of said request on the **My Tasks** screen for the reviewer, while the state of the request is pending. In this case, the requested updates will be displayed in Identity Manager only after the request has been reviewed.

    ![Request - Review Pending](/images/identitymanager/user-guide/maintain/identity-data-modification/individual-update/datamodif_reviewpending_v523.webp)

## Verify Data Update

In order to verify the process, check that the right data is displayed in the directory for the involved user.

![Home Page - Directory User](/images/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

