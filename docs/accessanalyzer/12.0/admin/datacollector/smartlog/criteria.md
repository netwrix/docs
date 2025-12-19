---
title: "SMARTLog: Criteria"
description: "SMARTLog: Criteria"
sidebar_position: 50
---

# SMARTLog: Criteria

The Criteria page is used to specify the search criteria. A test query can be run with the sample
host entered on the Sample Host page to confirm the results that will be returned by the query. It
is a wizard page for all log types.

![SMART Log DC Wizard Criteria page](/images/accessanalyzer/12.0/admin/datacollector/smartlog/criteria.webp)

The **Limit number of records to** setting has a default of `1000`.

Follow the steps to configure the search criteria.

![Filter button on Criteria page](/images/accessanalyzer/12.0/admin/datacollector/smartlog/criteriafilter.webp)

**Step 1 –** Click **Filter** to add a condition or a group to the root of the query.

- Click the ellipsis (**…**) to add a new condition or group under an existing group

![Configure search](/images/accessanalyzer/12.0/admin/datacollector/smartlog/criteriarecordnumber.webp)

**Step 2 –** Click **RecordNumber** to configure the search to look for specific events or a range
of events.

**Step 3 –** Click **equals** and **`<empty>`** to further configure the condition as required.

**Step 4 –** (Optional) At the root or group level, click **AND** to change the logical operator for
that level. The available options are **AND**, **OR**, **NOT AND**, and **NOT OR**.

**Step 5 –** Repeat steps 1 to 4 to configure all necessary criteria.

- To remove a row (condition or group), click the ellipsis (**…**) on the row and select **Remove
  Row**
- To remove all currently configured criteria, click **Filter** and select **Clear All**

**Step 6 –** Click **Show data** to run a test query and sample the data that will be returned that
is connected to a target log based upon the configured criteria. The data is displayed in the
Records found table.

The search criteria has now been configured and the results it returns tested. Configure the
criteria further if the returned results are not as expected, or click **Next** to continue to the
next wizard page.
