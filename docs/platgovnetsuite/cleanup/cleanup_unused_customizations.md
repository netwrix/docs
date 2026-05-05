---
title: "Clean Up Unused Customizations"
description: "Clean Up Unused Customizations"
sidebar_position: 10
---

# Clean Up Unused Customizations

Platform Governance for NetSuite has tools to analyze, organize, and delete unused customizations safely.

Cleaning up fields directly affects system performance. Larger records load slower than smaller ones. When a record loads in NetSuite, the system formulates the SQL request, retrieves the data from the database, assembles the interface, and retrieves any related list data or builds the corresponding interface element (in edit mode), among other steps. Although these are all highly optimized, records with large field sizes load slower. Alerts and other searches applied on demand when data is saved can also affect system performance, especially when custom SQL formulas are involved. The impact depends on the extent of the change and other sources of performance lag.

You can organize clean up activities by record types to start with larger groups of customizations
before progressing to individual customizations. For example you could progress in the following
order:

- **Bundles**: Removing unused bundles eliminates large groups of records and other customizations
- **Records**: Removing records eliminates large groups of customizations
- **Forms/Scripts**: Depending on your requirements, you can move unused forms, scripts, fields, and
  associated customizations to progress through your account

Cleaning up fields makes the account more understandable and reduces the likelihood of confusion.

The basic clean up process:

1. Analyze Unused Customizations and Identify Dependencies
2. Create Change Requests
3. Archive Field Data
4. Back Up Searches, Scripts, and Workflows
5. Delete Customizations
6. Close the Change Request

## Analyze Unused Customizations and Identify Dependencies

1. Open **Strongpoint** > **Clean Up** > **Unused Customizations**
2. Enter filtering information to streamline your search. Searching on all unused customizations can
   take a long time to load and can time out.

    ![Enter criteria before searching for unused customizations](/images/platgovnetsuite/clean_up/customizations_cleanup_unused_filters.webp)

3. Click **Search**.
    The results display a flag in the first column and the text in either blue (Inactive owner)
   or black.
   ![Cleanup Key](/images/platgovnetsuite/clean_up/customizations_cleanup_key.webp)
    You can hover over the flag to see the flag description. If the text is blue, **Inactive Owner** is
   displayed regardless of the flag color.

    ![customizations_cleanup_list](/images/platgovnetsuite/clean_up/customizations_cleanup_list.webp)

4. Click **View** next to each Customization to investigate. You can right-click **View** and
   select **Open in a new tab or window** to keep your results page available.

    ![View the Customization Record](/images/platgovnetsuite/clean_up/customizations_cleanup_view_record.webp)

5. Use the **ERD**, **Base Record** and **Related Objects** links to review the dependencies.
   If you have a **Documentation and Optimization** license:

    1. Click **Edit** if you decide it is safe to delete the customization.
    2. Select **Actions** > **Delete**
    3. Click **Save**
    4. Return to your Results page and continue your investigations. If you have an **Intelligent
       Change Management** or **Enterprise** license, continue with these steps using the Change
       Management features.

## Create Change Requests

You can group the customizations you are considering to delete and create a change request that
includes those customizations. You can do this by editing the **Create Customizations** or open an
existing change request and add the customizations in the **Impacted Customizations** under
**Scope**.

The Impact Analysis is available in the Advanced Change Management Module. This appears as **Clean
Up** or **Impact Analysis** as a tab at the bottom of the Change Request. It provides specific
warnings and status for each customization attached to the Change Request.

![cleanupimpactanalysis](/images/platgovnetsuite/clean_up/cleanupimpactanalysis.webp)

The **Impact Analysis** tab has the following elements:

**Can be safely deleted or modified**: A list of the customizations linked to the change request
that don't trigger any of the warnings below.

**Archiving Status**: Users can set the archiving status for fields to be deleted. Archive status
can have the following values:

- Pending
- Complete
- Skip
- Manually Complete

**Can't Be Safely Deleted or Modified**: A list of the customizations linked to the change request
that have triggered one of the following warnings:

- **Active Processes**: this customization is linked to an active process.
- **Critical Searches:** this customization is used in a formula or filter of a search and could
  cause the search to break if modified or deleted. Fields that are only in criteria or results of
  searches don’t trigger this warning since the search would still function. Searches that haven’t
  been used in over a year don’t trigger this warning.
- **Dependent Scripts**: this customization is used in a script.
- **Recently Used**: this customization has been used in the last 6 months.
- **Dependent Workflows**: this customization is used in a workflow.
- **Dependent Integrations**: this customization is used in an integration with another system.

Follow your organization’s change management policies and procedures as well as NetSuite's best
practices to determine if it is appropriate to delete any of the customizations.

## Archive Field Data

After approvers approve a Change Request, the **Archive Customizations** button becomes available. When you click it, the system archives any fields in the change request and stores them in the **File Cabinet**.

![archive](/images/platgovnetsuite/clean_up/archive.webp)

The status of those fields changes to **Archived**. The customization moves to the **Can Be Safely
Deleted or Modified** tab.

## Back Up Searches, Scripts, and Workflows

No mass un-delete functionality exists, but the Customization Record preserves critical information about scripts, searches, and workflows.

- **Searches**: All fields, filters, criteria, and other search elements are documented in the
  Searches tab.
- **Scripts:** A script archive file is attached to the customization record.
- **Workflow:** Workflow actions, states, fields, conditions, and other elements are documented in
  the Related Workflows tab.

The customization records of deleted customizations are inactive and accessible for future reference.

## Delete Customizations

There are two choices for deleting customizations:

- You can go to the customization record and delete it manually
- If you have the Advanced Change Management Module, you can use the go to the **Can be safely
  deleted or modified tab** at the bottom of the change request to delete the customizations.

## Close the Change Request

After all activities are complete, mark the change request as complete.
