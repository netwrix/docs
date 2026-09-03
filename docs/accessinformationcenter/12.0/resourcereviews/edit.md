---
title: "Edit Review Wizard"
description: "Edit Review Wizard"
sidebar_position: 40
---

# Edit Review Wizard

Open the Edit Review wizard with the **Edit** button on the Resource Reviews interface. See the
[Manage Reviews Page](/docs/accessinformationcenter/12.0/resourcereviews/interface/interface.md#manage-reviews-page) topic for additional information.

![Edit Review wizard](/images/accessinformationcenter/12.0/resourcereviews/wizard/reviewtype_1.webp)

It contains four pages:

-   **1. Review Type** — Select whether to notify the review creator when the resources have been
       reviewed. You can't change the review type and name.
-   **2. Criteria** — Only applies to Sensitive Data reviews. Update the sensitive criteria to
       review.
-   **3. Resources** — Modify the list of resources included in the review
-   **4. Summary** — Preview of the review selections

See the Edit a Review topic for additional information.

## Edit a Review

Edit an active review.

**Step 1 –** On the Manage Reviews page, click **Edit**. The Edit Review wizard opens.

![Edit Review wizard Review Type page](/images/accessinformationcenter/12.0/resourcereviews/wizard/reviewtype_1.webp)

**Step 2 –** On the Review Type page, configure the notify review creator option as required. The
Review Name and type are shown on the page but can't be edited. For Permissions, Access, and
Sensitive Data reviews, the selection of the include children option is also shown, but can't be
edited.

- Notify the review creator when resources are reviewed — When selected, the application sends an email to the review creator when the resource owner completes the review. If the review contains multiple resources, the application sends an email when each resource is reviewed. See the [Resource Reviewed Email](/docs/accessinformationcenter/12.0/resourcereviews/approvalprocess/resourcereviewed.md) topic for additional information.

:::note
If creating a Sensitive Data review, continue to Step 3. For all other review types, skip
to Step 5.
:::


![Edit Review wizard Criteria page](/images/accessinformationcenter/12.0/resourcereviews/wizard/criteria_1.webp)

**Step 3 –** On the Criteria page, you can modify the selected types of sensitive criteria to
include in the Sensitive Data review as long as no responses have arrived. After reviewers submit
responses for one or more resources, you can't add or remove criteria.

- To add a new criteria, select the criteria to include from the list on the left and click **Add**.
  Select multiple items by using the **Ctrl** or **Shift** key with mouse click combinations. The system adds the selected criteria to the Selected Criteria list.
- To remove a criteria, select the criteria in the Selected Criteria list on the right and click
  **Remove**

:::note
The sensitive data criteria listed is limited to what the Netwrix Access Analyzer (formerly
Enterprise Auditor) data collection scans are configured to collect.
:::


**Step 4 –** Optionally edit the selection of the **Reviewers can see the sensitive data
match if available** option to allow the owner with Console Access roles of Security Team or
Administrator to view potentially sensitive data within the review. Click **Next** to continue.

:::warning
If you check this option but Netwrix Access Analyzer (formerly Enterprise Auditor) hasn't
collected the data with matches stored for all of the resources selected in Step 5, the “One or more
resources selected have not been scanned” error occurs. The Create Review wizard blocks review
creation until you remove those resources or clear the option.
:::


![Edit Review wizard Resources page](/images/accessinformationcenter/12.0/resourcereviews/wizard/resources_1.webp)

**Step 5 –** On the Resources page, modify the list of resources to include in the review.

:::note
If the include child resources option was enabled during the review creation, then adding
or removing parent resources from the review also adds or removes their children.
:::


- The table displays the following information:

    - Resources — The icon indicates the type of resource. The resource name includes its location,
      such as the UNC path for a file system resource, the URL for SharePoint resource, or Group
      name (e.g., [Domain]\[Group]).
    - Description — Description or explanation of the resource as supplied by either the Ownership
      Administrator or the assigned owner
    - Reviewer — Primary owner assigned to the resource
    - Confirmed — Shows whether the assigned owner confirmed ownership of the resource. Hover over
      icons to see whether ownership has been confirmed, declined, is pending a response, or wasn't
      requested.
    - Scan Data — A checkmark indicates the resource has been scanned. Only resources with scan data
      can be included in a review.
    - Active Review — Indicates whether there is a pending review

- Select the resources you want and click **Add**. The **View Selections** button indicates how
  many resources you've selected. Click the button to open the Selected Resources window, where
  you can view and modify the selections. See the
  [Selected Resources Window](/docs/accessinformationcenter/12.0/resourcereviews/interface/selectedresources.md) topic for additional information.
- Alternatively you can import a list of resources from a CSV file. Click the **Import** button and
  then select the CSV file. A message appears if items aren't found or not valid for the review. The
  application selects any valid resources, and you can view them in the Selected Resources window.
  See the
  [Missing Items Window](/docs/accessinformationcenter/12.0/resourcereviews/create/missingitems.md) topic for additional information

    The CSV file must use the following format for the resources:

    - File system: `\\HOST\Share\file`
    - SharePoint: `https://abc/def`
    - Groups: `Domain\GroupName`
    - Distribution lists: `Name@domain.com`

- After you've selected the resources you want, click **Next**.

![Edit Review wizard Summary page](/images/accessinformationcenter/12.0/resourcereviews/wizard/summary_1.webp)

**Step 6 –** On the Summary page, review the updated settings and click **Next**. The Access
Information Center begins to update the review.

![Edit Review wizard update completed message](/images/accessinformationcenter/12.0/resourcereviews/wizard/completed.webp)

**Step 7 –** The page shows the action status. When the review is updated (100%), click **Close**. The Edit Review wizard closes.

The application saves the updates to the review. If you added new resources, the application
notifies the resource owners.
