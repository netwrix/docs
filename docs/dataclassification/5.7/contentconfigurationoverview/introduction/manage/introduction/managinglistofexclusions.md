---
title: "Managing list of exclusions"
description: "Managing list of exclusions"
sidebar_position: 60
---

# Managing list of exclusions

When indexing SharePoint files, you can specify the list of file locations that will be ignored. For
that, in the list of sources, select SharePoint, then select **Settings** →**SharePoint Excluded**
on the left, and click **Add**.

1. On the **Filter** tab, in the **Filter** field specify the objects (files or folders) to exclude:

    To exclude a certain document, enter the page URL with no wildcard indicators (e.g.
    _http://test.sharepoint.com/sites/documents/excluded%20document.docx_

    ![manage_managing_list_of_exclusions](/images/dataclassification/5.7/admin/sources/sharepoint/manage_managing_list_of_exclusions.webp)

    You can use wildcards anywhere in the exclusion pattern definition as follows:

    - The asterisk character (\*) matching any sequence of characters
    - The question mark character (?) matching any single character

    For example:

    - _http://test.sharepoint.com/sites/documents/\*_ will exclude all documents in the folder
    - _\*/Restricted Folder/\*_ will exclude such folder in any site

:::note
Exclusions are case-insensitive.
:::


2. Optionally, enter full exclusion URL to verify the settings and click **Test**.
3. If needed, you can use metadata conditions to restrict when an exclusion filter should be
   applied. For that, click **Condition** tab and click **Add**. Then select how the exclusion
   conditions will work: it can check if metadata field of the document has any value, is not
   specified, or matches a specific metadata value.

    | Criteria      | Condition                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Comparison    | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify: - **Field name** — document metadata field to check - **Comparison** — operator to use (for example, "does not contain") - **Value** — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows: - **Field Name** — _DocYear_ - **Comparison** — _equals_ - **Value** — _2018_ |
    | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                                   |
    | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                              |

    ![gdrive_exclusion_condition_2_thumb_0_0](/images/dataclassification/5.7/admin/sources/box/gdrive_exclusion_condition_2_thumb_0_0.webp)

    When finished, click **Add**.

4. Finally, click **Save** and close the window.
