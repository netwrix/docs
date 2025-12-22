---
title: "Resource Owners Interface"
description: "Resource Owners Interface"
sidebar_position: 10
---

# Resource Owners Interface

The Resource Owners interface opened by the Resource Owners tab is where Ownership Administrators
perform many operations around assigning and managing ownership.

![Resource Owners Tab in Netwrix Access Information Center](/images/threatprevention/7.5/reportingmodule/interface.webp)

The information displayed in the table includes:

- Resource Name – The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Description – Description or explanation of the resource as supplied by either the Ownership
  Administrator or the assigned owner. See the Notes & Descriptions topic for additional
  information.
- Owner Name – Name of the assigned owner. If there are several owners of a resource, the list is
  comma-separated.
- Status – Indicates whether or not the assigned owner has confirmed ownership of that resource.
  Tool-tips display when hovering over the icons indicating whether the resource ownership has been
  confirmed, declined, pending response, or that a confirmation has not been requested. See the
  [Ownership Confirmation](/docs/auditor/10.7/accessreviews/resourceowners/confirmation/confirmation.md) topic for additional information.
- Notes – Icon indicates a Note has been added. Click on the icon to read the attached note(s).
  Notes can be added by Ownership Administrators or populated with alternative owners by individuals
  who declined ownership. See the [Edit Notes Window](/docs/auditor/10.7/accessreviews/admin/navigate/editnotes.md) and the Notes &
  Descriptions topics for additional information.
- Last Reviewed – Date timestamp when the last review took place for the resource. The hyperlink
  will open the Entitlement Reviews interface to that Review Details page displaying the historical
  review instance. See the
  [Review Details Page](/docs/auditor/10.7/accessreviews/entitlementreviews/interface/interface.md#review-details-page) topic for additional
  information.
- Active Review – Indicates whether or not there is a pending review. The hyperlink will open the
  Entitlement Reviews interface to that Review Details page displaying the active review instance.
  See the [Review Details Page](/docs/auditor/10.7/accessreviews/entitlementreviews/interface/interface.md#review-details-page) topic for
  additional information.

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/auditor/10.7/accessreviews/admin/navigate/datagrid.md) topic for additional information.

The buttons at the bottom enable you to conduct the following actions:

![Action buttons in the Resource Owners Interface](/images/auditor/10.7/access/reviews/resourceowners/interfacebuttons.webp)

| Button               | Function                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Add                  | Launches the Add new resource wizard to add a new resource to the list. This allows you to add one resource at a time and assign an owner. See the [Add New Resource Wizard](/docs/auditor/10.7/accessreviews/resourceowners/interface/add.md) topic for additional information.                                                                                                                                                              |
| Update               | Launches the Update resource wizard for the selected resource. This allows you to make changes to the assigned owners or add/edit the resource description. See the [Update Resource Wizard](/docs/auditor/10.7/accessreviews/resourceowners/interface/update.md) topic for additional information.                                                                                                                                           |
| Remove               | Opens the Confirm removal window to removes the selected resource from being managed through the application. _Remember,_ only resources with an assigned owner will be visible in the table. Removing a resource from this table does not delete the resource from the application database. See the [Confirm Removal Window](/docs/auditor/10.7/accessreviews/resourceowners/interface/confirmremoval.md) topic for additional information. |
| Request Confirmation | Opens the Confirm Ownership wizard. Sends an email to the assigned owner(s) for the selected resource requesting ownership confirmation. See the[Confirm Ownership Wizard](/docs/auditor/10.7/accessreviews/resourceowners/confirmation/confirm.md) topic for additional information.                                                                                                                                                            |
| Edit Notes           | Opens the Edit Notes window for the selected resource and allows free-text editing of the notes. See the [Edit Notes Window](/docs/auditor/10.7/accessreviews/admin/navigate/editnotes.md) topic for additional information.                                                                                                                                                                                                 |

## Notes & Descriptions

A note entered by an Ownership Administrator in the Resource Owners interface is only visible to
those with access to this interface. This note can also be populated with alternative owners
suggested by an individual who declined ownership.

A resource description can be supplied by either the Ownership Administrator or the assigned owner,
and is visible during Resource Review creation.
