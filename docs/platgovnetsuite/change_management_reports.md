---
title: "Change Management Reports"
description: "Change Management Reports"
sidebar_position: 90
---

# Change Management Reports

To access change management reports:

Open **Strongpoint** > **Change Management Reports** and one of the available reports:

- Policy Changes
- Open Non-Compliant Changes
- Resolved Non-Compliant Changes
- Compliant Changes
- Approval Override
- Managed Bundle/App Updates
- Platform Changes
- Non-Material Changes
- Deployed Changes
- What Changed

## Policy Changes

This report displays policy changes. This is used by change managers to monitor policies.

The criteria for this report includes:

- System Notes Type is Change

## Open Non-Compliant Changes

This report displays non-compliant changes that have not been resolved. This is used by change
managers to track changes that require action.

The criteria for this report includes:

- Non-Compliant Changes
- Status - Not Closed
- Manual changes and changes using a Bundle/App initiated by user

The criteria for this report excludes:

- Non-material changes
- Managed Bundle/App Changes

## Resolved Non-Compliant Changes

This report displays non-compliant changes that have been resolved. This is used by change managers
and auditors to review non-complaint changes that have been resolved.

The criteria for this report includes:

- Non-Compliant Changes
- Status is Closed
- Manual changes and changes using a Bundle/App initiated by user

The criteria for this report excludes:

- Non-material changes
- Managed Bundle/App Change

## Compliant Changes

This report displays changes that the system has automatically cleared as compliant. Compliant
changes are automatically marked as closed. This is used by Change Managers and auditors to review
changes that have been automatically cleared as compliant.

The criteria for this report includes:

- Compliant Changes
- Manual changes and changes using a Bundle/App initiated by user

The criteria for this report excludes:

- Non-material changes
- Managed Bundle/App Change

## Approval Override

This report displays changes with an Approval Override. This is used by Change Managers and auditors
to review changes that have been approved outside of the specified approval process.

The criteria for this report includes:

- System Notes: Context is UI
- System Notes: Field is Approval Status
- System Notes: New Value is Approved
- Status Bar State: None or Approved(Override)

The criteria for this report excludes:

- Managed Bundle/App Change

## Managed Bundle/App Updates

This report displays changes that have been initiated by managed or third-party Bundle or App
updates.

- _Managed Bundle/Apps_ are pushed to target accounts by a third-party provider.
- _Third-Party Bundle/Apps_ are third-party products that can be updated on demand for target
  accounts. These components have the same change evaluation as managed bundle/apps. Unmanaged
  third-party bundles or apps must meet these conditions:

    1. Installed from a **Production** account.
    2. Have a valid **Abstract Description**.
    3. Have a valid **Version Number**.

The criteria for this report includes:

- Compliant and Non-Compliant Changes
- Only changes with objects associated with Managed Bundles

The criteria for this report excludes:

- Non-material changes

## Platform Changes

This report displays platform changes to objects.

The criteria for this report includes:

- Non-material platform changes

The criteria for this report excludes:

- Non-material changes other than platform changes

## Non-Material Changes

This report displays changes to non-material objects. **Non-Material Object Changes** are changes
detected in the object definition not caused by human intervention and do not have any functional
impact. Examples include NetSuite internal IDs, object XML structure or JSON representation or
reordering values in a list.

The criteria for this report includes:

- Non-material changes

The criteria for this report excludes:

- Non-material Platform changes

Here is the criteria for non-material changes:

- System generated changes.
- XML changes that do not directly affect the object definition. For example, Script Deployment
  where it shows all related scripts that are deployed to the same record.
- Customization record changes that sets references to other customizations but there is no change
  in actual record definition. For example, the list customization is added as dependency to the
  field customization.
- When the **Internal Id** changes for a **Script Deployment** that belongs to a **Bundle with
  Update Deployment** settings which deletes the original deployment and creates a new deployment
  record on bundle updates. This **Internal Id** change is flagged as non-material because a
  deletion log is created.
- Initial setting of **Bundle Id** to a customization record because some customizations (for
  example, **custom record field**) do not have the bundle information within their metadata.
- **Scripting/Workflow to Field Update** when a script/workflow is added as reference in the field
  customization record. The valid change is documented on the **Script** or **Workflow** instead of
  the field.
- Change log is flagged as duplicate after confirming the actual change date and changed by for that
  customization already exists. Duplicates can occur as changes are captured from different sources
  such as object metadata, audit trail, history, and system notes
- Create logs of customization where duplicated customizations (same type, name, scriptid, and
  name).
- **Script File Date** has changed because of bundle update but there is no change found in the file
  contents and hash.

## Deployed Changes

This report displays the deployed changes.

The criteria for this report includes:

- Non-material changes

The criteria for this report excludes:

- Non-compliance changes
- Managed Bundle/App Update

## What Changed

This report is used by Change Managers to view a complete listing of all changes in the system
excluding non-material changes.

The criteria for this report includes:

- Compliant and Non-Compliant Changes
- User driven and managed Bundle/App initiated changes

The criteria for this report excludes:

- Non-material changes
