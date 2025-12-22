---
title: "Exchange Mailbox"
description: "Exchange Mailbox"
sidebar_position: 40
---

# Exchange Mailbox

For the Exchange Mailbox source, you can configure the list of folders/emails to exclude from
processing. Do the following:

1. In the management console, click **Sources** →**Exchange Mailbox**, then Collection Exclusion
   will be displayed.
2. To create an exclusion, click **Add**.
3. ![boxexclusions](/images/dataclassification/5.6.2/sources/database/boxexclusions.webp)
4. In the **Details** window, on the **Filter** tab enter the name of the entity to exclude.
   Consider the following:

    - If you specify a folder name (e.g. “Drafts”) with no special characters, then any folders with
      that specific name will be excluded. Note that adding an exclusion of this type will match any
      folders with the name provided, wherever they are within the mailbox.
    - Wrapping the exclusion in wildcard indicators (e.g. “\*Deleted\*”) will match any folder/email
      with “Deleted” somewhere in the title.

    **NOTE:** You can optionally enter exclusion location in the **Test Path** field to verify the
    new filter, and click **Test**.

5. If needed, you can use metadata conditions to restrict when an exclusion filter should be
   applied. For that, click **Condition** tab and click **Add**. Then select how the exclusion
   conditions will work: it can check if metadata field of the document has any value, is not
   specified, or matches a specific metadata value.

    | Criteria      | Condition                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Comparison    | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify: - **Field name** — document metadata field to check - **Comparison** — operator to use (for example, "does not contain") - **Value** — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows: - **Field Name** — _DocYear_ - **Comparison** — _equals_ - **Value** — _2018_ |
    | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                                   |
    | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                              |

    When finished, click **Add**.

6. Finally, click **Save** and close the window.
