---
title: "Configure Onboarding Workflows"
description: "Configure Onboarding Workflows"
sidebar_position: 40
---

# Configure Onboarding Workflows

How to adjust the validation process and homonym detection of onboarding
[Workflows](/docs/identitymanager/saas/integration-guide/workflows/index.md).

## Overview

Onboarding workflows are the processes that users follow in order to add in Identity Manager a new
user, as a new employee has arrived in the company.

The most common situation consists in having two onboarding workflows: one for employees and one for
contractors. The Workforce Core Solution module provides these two workflows.

Usually, using one of these workflows means:

1. filling a form containing the new user's information, such as their name, first name, contract
   type, job title, etc;
2. if needed, sending the request of user creation for review by a knowledgeable user.

See how to
[Update an Individual Identity](/docs/identitymanager/saas/user-guide/maintain/identity-data-modification/individual-update/index.md)in
Identity Manager.

### User Creation Review

Identity Manager provides the review step as optional, for its necessity depends on the situation.

To perform the review of a user creation, one should have the right permissions.

![Review Permissions](/images/identitymanager/saas/user-guide/set-up/configure-workflows/workflows_reviewpermissions_v601.webp)

When a review is needed, a notification appears on the **MY TASKS** tab at the top.

![My Tasks Tab](/images/identitymanager/saas/user-guide/set-up/configure-workflows/home_topbar_v601.webp)

The reviewer can then complete the creation request and finally approve it.

### Homonym Detection

User creation often benefits from a homonym detection that checks if the resource already exists in
the system, preventing duplicates.

Identity Manager provides a homonym detection, whose parameters can be adjusted.

See the [Workflows](/docs/identitymanager/saas/integration-guide/workflows/index.md) topic for additional information.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards the expected validation
process and homonym detection during users' onboarding.

| Input                          | Output                        |
| ------------------------------ | ----------------------------- |
| Identity repository (required) | Adjusted Onboarding Workflows |

See the [Create the Workforce Repository](/docs/identitymanager/saas/user-guide/set-up/initial-identities-loading/index.md) topic for
additional information.

## Configure Onboarding Workflows

Configure onboarding workflows by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section, then on **Workforce** >
   **Onboarding Workflows** in the left menu.

    ![Home - Settings](/images/identitymanager/saas/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. For each workflow, choose whether a review step is required.

    ![Workflows Review Steps](/images/identitymanager/saas/user-guide/set-up/configure-workflows/workflows_reviewsteps_v601.webp)

    Netwrix Identity Manager (formerly Usercube) recommends enabling the review for the onboarding
    of employees, and disabling the review for contractors.

    From experience, in most use cases, the onboarding of new workers is done by their managers, and
    HR people review the creation of employees and not contractors. It also happens that HR people
    are in full charge of employees, in which case they do the onboarding and don't need a review.

3. Configure the homonym detection.

    ![Workflows Homonym Detection](/images/identitymanager/saas/user-guide/set-up/configure-workflows/workflows_homonyms_v601.webp)

    Netwrix Identity Manager (formerly Usercube) recommends enabling the birth name comparison to
    detect user duplicates due to name changes, when the GDPR supports it.

    The other parameters for homonym detection should be enabled/disabled according to your needs.

4. Click on **Save** at the top of the page.

    ![Save Icon](/images/identitymanager/saas/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

## Verify Workflow Configuration

Validate the process by proceeding as follows:

1. Access the user directory from the home page.

    ![Home Page - Directory User](/images/identitymanager/saas/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Execute the workflows for a new employee and a new contractor.
3. Make sure that the homonym detection works in accordance with the specified options.

    > For example, if the inversion comparison is enabled between the first and last names:
    >
    > ![Workflows Homonym Detection](/images/identitymanager/saas/user-guide/set-up/configure-workflows/workflows_verifyhomonyms_v601.webp)

4. Make sure that the potential validation steps are in accordance with the specified options.

## Next Steps

Once onboarding workflows are configured, integrators can start configuring a connector.
