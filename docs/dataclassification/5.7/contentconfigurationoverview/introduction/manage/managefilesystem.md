---
title: "Manage File System"
description: "Manage File System"
sidebar_position: 50
---

# Manage File System

This section contains information on how to include or exclude files or folders from being crawled,
and how to configure writing classification attributes back to the content files (i.e. "tagging").

## Configure Tagging

You can instruct the program to write classification attributes back to processed files. This
operation is also called "tagging". Tagging is currently supported for the following file types:

- DOC/DOCX
- PPT/PPTX
- XLS/XLSX
- PDF

For Microsoft Office documents, each classification taxonomy is mapped to an advanced (custom)
property in the document’s metadata. See
[this article](https://support.office.com/en-gb/article/view-or-change-the-properties-for-an-office-file-21d604c2-481e-4379-8e54-1dd4622c6b75)
for details.

For Adobe PDF documents, each taxonomy is mapped to custom properties in the document’s metadata.
See [this article](https://helpx.adobe.com/acrobat/using/pdf-properties-metadata.html) for details.

Related content source settings can be configured at a global level (default), or at a source level.

**To configure tagging on a global level**

1. In the management console, click **Sources** →**File**, then in the left pane click Write
   Configuration.
2. Select the taxonomy you need and click the **Edit** link for it.
3. In the taxonomy properties, enable writing classification attributes (tags) and specify other
   settings:

![filewriteconfig](/images/dataclassification/5.7/admin/sources/filesystem/filewriteconfig.webp)

| Setting                  | Description                                                                                        | Note                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Enabled**              | Use this option to enable / disable tagging with attributes included in this taxonomy.             | Cleared by default.                                                                     |
| **Field Name**           | Define the attribute name to be used when persisting the classifications (metadata property name). |                                                                                         |
| **Format**               | How the classifications should be formatted.                                                       | You can create a custom delimited combination of the labels / GUIDs.                    |
| **Name/ID** or **Class** | Depending on the format, take the term labels, IDs or a combination of both                        | The corresponding Delimiter must be a string or array type, with a maximum length of 3. |
| **Prefix/** **Suffix**   | Will be appended to the formatted string of classifications.                                       |                                                                                         |

**Example**

Assume you selected the _Agriculture_ taxonomy; it has _Farming_ (_ClassID: 11_) and _Produce_
(_ClassID: 32_) properties.

If you configure tagging as in the screenshot above, the program will write the following
classifications attributes to the classified documents:

- Property Name: _Agriculture_
- Property Value: _[Farming|11;Produce|32]_

**To configure tagging on a source level**

1. Go to the **Sources** view, select the source you wish to enable classifications for and click the "pencil" symbol on
   the right side of the table.
2. The list of global taxonomy configurations will be displayed. To apply these settings globally,
   select the **Use Global Configuration** checkbox at the top of the page. To configure settings for the selected source specifically, make sure
   this checkbox is unchecked.
3. Select the taxonomy you wish to write back and click **Edit**.
4. In the taxonomy properties, select the **Enabled** checkbox and specify the settings described in
   the table above.

![file_source_write_cfg_thumb_0_0](/images/dataclassification/5.7/admin/sources/filesystem/file_source_write_cfg_thumb_0_0.webp)

## Configure Inclusions

**File inclusions** tab contains the list of file types that will be included in the indexing
process. Any file with a file extension not specified in this list will be ignored.

You can delete, modify, or add the necessary inclusions as explained below.

To specify inclusions, do the following:

1. In the management console, click **Sources** →**File**, then in the left pane click Files
   Included.
2. Select the necessary extensions to be used as including filter when processing files.
3. To modify an extension (for example, add a wildcard), click **Edit**. To add a new one, click
   **Add**.

Two wildcards are supported:
- \* - matches to one or more instances of any character
- . - explicitly includes files with no extension


:::note
Inclusions are case-insensitive.
:::


![nfs_inclusions_thumb_0_0](/images/dataclassification/5.7/admin/sources/filesystem/nfs_inclusions_thumb_0_0.webp)

## Configure Exclusions

You can also configure the list of file locations to exclude from processing.

1. In the management console, click **Sources** →**File**, then in the left pane click Files
   Excluded.
2. In the **Details** window on the **Filter** tab specify the objects (files or folders) to
   exclude.

    To exclude a specific file, enter its full path. For example: _C:\Test Folder\Test Document.docx_

    Wildcards can be used anywhere in the exclusion pattern definition as follows:

    - The asterisk character (\*) matching any sequence of characters
    - The question mark character (?) matching any single character

    For example:

    - _\*/Restricted Folder/\*_ will exclude specific folder in any File source

:::note
Exclusions are case-insensitive.
:::


![file_exclusion_filter_thumb_0_0](/images/dataclassification/5.7/admin/sources/filesystem/file_exclusion_filter_thumb_0_0.webp)

3. Optionally, enter a test path to verify the settings and click **Test**.
4. If needed, you can use metadata conditions to restrict when an exclusion filter should be
   applied. For that, click **Condition** tab and click **Add**. Then select how the exclusion
   conditions will work: it can check if metadata field of the document has any value, is not
   specified, or matches a specific metadata value.

    | Criteria      | Condition                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Comparison    | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify: - **Field name** — document metadata field to check - **Comparison** — operator to use (for example, "does not contain") - **Value** — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows: - **Field Name** — _DocYear_ - **Comparison** — _equals_ - **Value** — _2018_ |
    | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                                   |
    | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                              |

5. When finished, click **Add**.
6. Finally, click **Save** and close the window.
