---
title: "Update Multiple Identities"
description: "Update Multiple Identities"
sidebar_position: 20
---

# Update Multiple Identities

How to perform a same change in data for several identities simultaneously.

This part is not about changing the data model, but data itself.

## Overview

When a same change is needed by a high number of users, then Usercube provides a UI workflow to
perform this change for all selected identities simultaneously.

> For example, if a whole department in the company is moved to a new working site, then all users
> working in said department must have their `Site` attribute updated.

## Participants and Artifacts

Given users' data can be updated occasionally by their managers, but most often by the HR
department.

| Input                                                                                                                                                      | Output                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (required) New identity data (required) | Updated identity repository |

## Update

Perform multiple updates by proceeding as follows:

1. Click on **Multiple Updates**, accessible from the directory on the home page.

    ![Home Page - Multiple Updates](/images/identitymanager/6.1/user-guide/maintain/identity-data-modification/multiple-update/home_multipleupdates_v523.webp)

2. Follow the workflow's instructions to perform the change, assign new entitlements if needed, and
   send the request.

    ![Multiple Updates Form](/images/identitymanager/6.1/user-guide/maintain/identity-data-modification/multiple-update/datamodif_multipleform_v602.webp)

    If the workflow has been configured in this way, the update request may require a review. In
    this case, sending the request triggers the display of said request on the **My Tasks** screen
    for the reviewer, while the state of the request is pending. In this case, the requested updates
    will be displayed in Usercube only after the request has been reviewed.

    ![Request - Review Pending](/images/identitymanager/6.1/user-guide/maintain/identity-data-modification/individual-update/datamodif_reviewpending_v523.webp)

## Verify Data Update

In order to verify the process:

- Check manually a sample in the `User` directory accessible from the home page. You should verify
  at least your own sheet and the sheets assigned to your hierarchy.

    ![Home - Directory User](/images/identitymanager/6.1/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization still has a manager. Organizations are accessible in the
  `Department` directory on the home page.

    ![Home - Directory Department](/images/identitymanager/6.1/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

    ![List of Departments](/images/identitymanager/6.1/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

    If the system contains numerous organizations, it is also possible to list them with their
    managers through the
    [Query module](/docs/identitymanager/6.1/user-guide/administrate/reporting/index.md).

- [Create reports](/docs/identitymanager/6.1/user-guide/administrate/reporting/index.md)
  with indicators, for example, on the number of workers per type or per organization (through
  Usercube's predefined reports, the Query module or Power BI), to ensure that Usercube's content
  sticks to reality.
