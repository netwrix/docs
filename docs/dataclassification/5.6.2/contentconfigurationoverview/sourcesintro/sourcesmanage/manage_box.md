---
title: "Box"
description: "Box"
sidebar_position: 10
---

# Box

This section contains information on how to exclude Box files or folders from being crawled, and how
to configure writing classification attributes back to the content files (i.e. "tagging").

## Configure Exclusions

You can define the list of file locations that will be ignored when indexing files in Box, i.e.
excluded from processing. For that, do the following:

1. In the management console, click **Sources** → **Box**, then in the left pane click Collection
   Exclusions.
2. Click **Add**.

![boxexclusions](/images/dataclassification/5.6.2/sources/database/boxexclusions.webp)

3. Click **Filter** and in the **Filter** field specify the objects (files or folders) to exclude:

    To exclude a certain file, enter `box://<your_box_enterprise_ID>/<full_path>`. For example:
    _box://26298724/Test Folder/Test Document.docx_

    Wildcards can be used anywhere in the exclusion pattern definition as follows:

    - The asterisk character (\*) matching any sequence of characters
    - The question mark character (?) matching any single character

    For example:

    - _box://26298724/Test Folder/\*_ will exclude all documents in the folder
    - _\*/Restricted Folder/\*_ will exclude specific folder in any Box source

**NOTE:** Exclusions are case-insensitive.

4. To verify exclusion location, enter its path in the **Test Path** field and click **Test**.
5. If needed, you can use metadata conditions to restrict when an exclusion filter should be
   applied. For that, click **Condition** tab and click **Add**. Then select how the exclusion
   conditions will work: it can check if metadata field of the document has any value, is not
   specified, or matches a specific metadata value.

    | Criteria      | Condition                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Comparison    | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify: - **Field name** — document metadata field to check - **Comparison** — operator to use (for example, "does not contain") - **Value** — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows: - **Field Name** — _DocYear_ - **Comparison** — _equals_ - **Value** — _2018_ |
    | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                                   |
    | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                              |

    ![gdrive_exclusion_condition_2_thumb_0_0](/images/dataclassification/5.6.2/sources/gdrive_exclusion_condition_2_thumb_0_0.webp)

    When finished, click **Add**.

6. To verify the settings, click **Test**.
7. Finally, click **Save** and close the window.

## Configure Tagging

To enable the management of metadata for any document type, Box provides the ability to configure
Metadata Templates with collections of attributes (see
[this article](https://community.box.com/t5/Organizing-and-Tracking-Content/Using-Metadata/ta-p/30765)
for details) ).

In addition to metadata, Box supports the concept of “Tags” to enhance the search experience (see
[this article](https://community.box.com/t5/Organizing-and-Tracking-Content/Using-Tags/ta-p/29001)
for details).

Netwrix Data Classification supports both of these mechanism: each registered taxonomy can be mapped
to a metadata property. Related settings can be configured at a global level (default), or at a
source level, as described below. Consider the following:

- To write tags, the program will use the crawling user account, so ensure that this account has
  permissions to create tags.
- To create missing Metadata Templates and attributes, ensure that the crawling user account has
  permissions to create and manage Metadata Templates.

Refer to Box documentation for information on user account permissions.

To configure tagging

1. In the management console, click **Sources** →**Box**, then in the left pane click Write
   Configuration.
2. Select the taxonomy you need and click the **Edit** link for it.
3. In the taxonomy properties, enable writing classification attributes (tags) and specify other
   settings:

| Setting                  | Description                                                                                             | Note                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Enabled**              | Use to enable / disables the writing of classifications for the selected taxonomy.                      | Cleared by default                                                                                                                                                                     |
| **Field Name**           | Defines the attribute name to be used when persisting the classifications (metadata property name).     | By default, Classification fields will be used. To use the Metadata Template as well, enter its name and attribute name in the following format: _MetadataTemplateName!!AttributeName_ |
| **Single Value Field**   | If selected, this option will cause only the highest scoring classification to be written to the field. |                                                                                                                                                                                        |
| **Format**               | How the classifications should be formatted.                                                            | You can create a custom delimited combination of the labels / GUIDs.                                                                                                                   |
| **Name/ID** or **Class** | Depending on the format, take the term labels, IDs or a combination of both                             | The corresponding Delimiter must be a string or array type with a maximum length of 3.                                                                                                 |
| **Prefix/** **Suffix**   | Will be appended to the formatted string of classifications.                                            |                                                                                                                                                                                        |

![box_tagging_thumb_0_0](/images/dataclassification/5.6.2/sources/box/box_tagging_thumb_0_0.webp)

Finally, click **Save**.
