---
title: "Google Drive"
description: "Google Drive"
sidebar_position: 60
---

# Google Drive

This section contains information on how to configure exclusions and use tagging for a Google Drive
source.

## Configure Tagging

You can configure the program to write classifications to document properties in the Google Drive repository. Each taxonomy maps to a single property.

:::note
End users can't see custom properties; only other applications using the API can access
them.
:::


By design, Google Drive supports custom properties with the following limitations:

- Maximum of 100 custom properties per file, totalled from all sources
- Maximum of 30 public properties per file, totalled from all sources
- Maximum 124 characters for both the property name and the list of classifications

:::note
See [this article](https://developers.google.com/drive/api/v3/properties) for details.
:::


To overcome these limitations, Google Drive tagging implemented in the solution supports appending a
counter to the field name. So, split classifications across multiple fields if the source system
hits a text limit. For example, the product may write classifications to the
fields “_Agriculture_” and “_Agriculture_1_”.

:::note
Due to the way Google Drive manages document audit information, writing classifications to
a document (i.e. tagging) in this source will affect additional document metadata such as modified
date and/or modified user:
:::


- the product changes modified date information to the time of tagging
- the product changes modified user to the account you configured for crawling this source

You can configure related content source settings at a global level (default), or at a source level.

**To configure tagging on a global level**

1. In the management console, click **Sources** →**Google Drive**, then in the left pane click Write
   Configuration.
2. Select the taxonomy you need and click the **Edit** link for it.
3. In the taxonomy properties, enable writing classification attributes (tags) and specify other
   settings:

| Setting                  | Description                                                                                                                               | Note                                                                                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Enabled**              | Use to enable / disables the writing of classifications for the selected taxonomy.                                                        | Cleared by default                                                                                                                                        |
| **Field Name**           | Defines the attribute name to use when persisting the classifications (metadata property name).                                       |                                                                                                                                                           |
| **Single Value Field**   | If selected, this option writes only the highest scoring classification to the field.                                   |                                                                                                                                                           |
| **Maximum Field**        | Specifies the maximum number of properties to use for writing classifications. Property names use the format 'FieldName_X' | This lets the product write more classifications for sources with a limit on field length, by writing classifications across multiple properties. |
| **Format**               | How to format the classifications.                                                                                              | You can create a custom delimited combination of the labels / GUIDs.                                                                                      |
| **Name/ID** or **Class** | Depending on the format, take the term labels, IDs, or a combination of both                                                              | The corresponding Delimiter must be a string or array type with a maximum length of 3.                                                                    |
| **Prefix/** **Suffix**   | The product appends this to the formatted string of classifications.                                                                              |                                                                                                                                                           |

![googledrivewriteconfiguration_thumb_0_0](/images/dataclassification/5.8/admin/sources/googledrive/googledrivewriteconfiguration_thumb_0_0.webp)

## Configure Exclusions

In the Collection Exclusions window you can set up the following:

- List of file locations that the product ignores when indexing files from a Google Drive source
- Excluding conditions based on the metadata of a document

In the management console, click **Sources** →**Google Drive**, then in the left pane click
**Collection Exclusions**.

1. Click **Filter** tab and in the **Filter** field specify the file locations to exclude from
   crawling.

![gdrive_exclusion_filter_thumb_0_0](/images/dataclassification/5.8/admin/sources/googledrive/gdrive_exclusion_filter_thumb_0_0.webp)

2. You can use wildcards anywhere in the exclusion pattern definition as follows:
    - The asterisk character (\*) - matches any sequence of characters
    - The question mark character (?) - matches any single character

:::note
Exclusions are case-insensitive.
:::


For example, to exclude all Excel files stored in the _corp/Year2020_ folder, enter
_gdrive://corp/Year2020/\*.xlsx_

3. To verify exclusion location, enter its path in the **Test Path** field and click **Test**.
4. If needed, you can use metadata conditions to restrict when the product applies an exclusion
   filter. For that, click **Condition** tab and click **Add**. Then select how the exclusion
   conditions work: they can check whether the document's metadata field has any value, has no
   value, or matches a specific metadata value.

    | Criteria      | Condition                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Comparison    | Compare a value in the document metadata field with the value the condition sets. When you select this criteria, specify: - **Field name** — document metadata field to check - **Comparison** — operator to use (for example, "doesn't contain") - **Value** — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows: - **Field Name** — _DocYear_ - **Comparison** — _equals_ - **Value** — _2018_ |
    | Has any value | Exclude the document if its metadata field has any value. When you select this criteria, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                                   |
    | Has no values | Exclude the document if the metadata field has no value. When you select this criteria, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                              |

    ![gdrive_exclusion_condition_2_thumb_0_0](/images/dataclassification/5.8/admin/sources/box/gdrive_exclusion_condition_2_thumb_0_0.webp)

    When finished, click **Add**.

5. To verify the settings, click **Test**.
6. Finally, click **Save** and close the window.

The product ignores any item that matches the excluding filter.
