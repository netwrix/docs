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
| [Identity repository](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/initial-identities-loading/index.md) (required) New identity data (required) | Updated identity repository |

## Update

Perform multiple updates by proceeding as follows:

1. Click on **Multiple Updates**, accessible from the directory on the home page.

    ![Home Page - Multiple Updates](/img/versioned_docs/usercube_6.1/usercube/user-guide/maintain/identity-data-modification/multiple-update/home_multipleupdates_v523.png)

2. Follow the workflow's instructions to perform the change, assign new entitlements if needed, and
   send the request.

    ![Multiple Updates Form](/img/versioned_docs/usercube_6.1/usercube/user-guide/maintain/identity-data-modification/multiple-update/datamodif_multipleform_v602.png)

    If the workflow has been configured in this way, the update request may require a review. In
    this case, sending the request triggers the display of said request on the **My Tasks** screen
    for the reviewer, while the state of the request is pending. In this case, the requested updates
    will be displayed in Usercube only after the request has been reviewed.

    ![Request - Review Pending](/img/versioned_docs/usercube_6.1/usercube/user-guide/maintain/identity-data-modification/individual-update/datamodif_reviewpending_v523.png)

## Verify Data Update

In order to verify the process:

- Check manually a sample in the `User` directory accessible from the home page. You should verify
  at least your own sheet and the sheets assigned to your hierarchy.

    ![Home - Directory User](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/configure-workflows/home_directoryuser_v523.png)

- Check that every organization still has a manager. Organizations are accessible in the
  `Department` directory on the home page.

    ![Home - Directory Department](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.png)

    ![List of Departments](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.png)

    If the system contains numerous organizations, it is also possible to list them with their
    managers through the
    [Query module](/versioned_docs/usercube_6.1/usercube/user-guide/administrate/reporting/index.md).

- [Create reports](/versioned_docs/usercube_6.1/usercube/user-guide/administrate/reporting/index.md)
  with indicators, for example, on the number of workers per type or per organization (through
  Usercube's predefined reports, the Query module or Power BI), to ensure that Usercube's content
  sticks to reality.
