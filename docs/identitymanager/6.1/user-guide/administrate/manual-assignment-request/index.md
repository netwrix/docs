---
title: "Request Entitlement Assignment"
description: "Request Entitlement Assignment"
sidebar_position: 60
---

# Request Entitlement Assignment

How to send a manual request to add, update or remove an entitlement for an identity.

## Overview

Changes in an identity's entitlements can be handled using Usercube's predefined workflows to:

- view the list of the identity's entitlements, with Usercube's suggestions according to the
  identity's position;
- modify the identity's entitlements (add, update, remove).

## Participants and Artifacts

An assignment can be requested for a user sometimes by said user themselves, most often by their
manager, and on some occasions by the involved application owner.

| Input                                                                                                                                                                                                                                                   | Output               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (required) [Role catalog](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/index.md) (required) | Updated entitlements |

## View Identity's Entitlements

View the identity's entitlements by proceeding as follows:

1. Access the user directory from the home page.

    ![Home Page - Directory User](/images/identitymanager/6.1/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be checked.

    ![Workflow - User](/images/identitymanager/6.1/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **View Permissions** to access the entitlement list.

    ![View Permissions Tab](/images/identitymanager/6.1/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

## Modify Identity's Entitlements

Act on an existing identity by proceeding as follows:

1. Access the user directory from the home page.

    ![Home Page - Directory User](/images/identitymanager/6.1/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be modified.

    ![Workflow - User](/images/identitymanager/6.1/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **Actions** > **Modify Permissions** to launch the workflow for a manual entitlement
   request.

    ![Workflow - Modify Permissions](/images/identitymanager/6.1/user-guide/administrate/manual-assignment-request/datamodif_changeuser_v602.webp)

4. Follow the workflow's instructions to select entitlements and the action to be performed. You
   can:

    - select entitlements to add;
    - modify the potential options of the entitlements you are adding;
    - delete entitlements which were assigned or declined manually;
    - deny entitlements which were assigned automatically;
    - allow denied entitlements by assigning them back manually.

    If the request is about assigning an entitlement via a role which requires at least one
    approval, then sending the request triggers the display of said request on the **Role Review**
    screen.

    ````
    <img
      src="/buttons/LHome_roleReview_V523.webp"  alt="Home Page - Role Review"  style=""/>

    ```In this case, the requested entitlement will be displayed in the user's \*\*View Permissions\*\* tab only after the request is reviewed.
    ````

## Verify Entitlement Request

In order to verify the process, check that the change you made in the user's entitlements is
displayed in their **View Permissions** tab in the directory.

![Home Page - Directory User](/images/identitymanager/6.1/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

![View Permissions Tab](/images/identitymanager/6.1/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)
