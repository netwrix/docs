---
title: "Step 3. Specify Conditions for Processing"
description: "Step 3. Specify Conditions for Processing"
sidebar_position: 30
---

# Step 3. Specify Conditions for Processing

At this step, you can specify whether workflow actions should be performed with the classified
documents only, or with any documents from the content source, etc.

![workflow_step3_condition](/images/dataclassification/5.6.2/workflows/workflow_step3_condition.webp)

The following options are available:

- **Any Document** — with this option selected, the workflow will be applied to all documents in the
  specified content source
- **Any Classified Document** — with this option selected, the workflow will be applied to the
  documents in the specified source if they were tagged by any classification
- **Specific Classification** — with this option selected, you need to specify whether to apply the
  workflow to the classified or non-classified documents

    - To process only documents classified by specific classification, select **Classified** (this
      will act as including filter)
    - To process only non-classified documents, select **Not Classified**.

    If you have selected any of the **Specific Classification** variants, you should then specify
    taxonomy terms that will be applied to filter out the documents for your workflow.

**To configure terms**

1. In the **Select Term** field, click the tag icon.
2. In the **Details** dialog, specify filter settings to use when filtering out the documents:

    1. **Taxonomy** - select what classification taxonomy from the existing ones should be used.
    2. **All Terms** - select this option if you want to filter by all terms in the taxonomy. If
       this option is cleared, then after selecting the necessary taxonomy, you will be presented
       the list of its terms. Select the one you plan to use for filtering.

    **NOTE:** Multiple selection is not supported: to configure several filter values, you should
    repeat this procedure for each filter value you need.

    3. **Include Children** - select this option if needed.

3. Finally, click **OK** to save the settings and close the dialog.

Then verify that configured filters are displayed properly:

- Including filters (i.e. instructing to include documents with classification tag you selected) are
  colored blue:

![workflow_step3_filter_blue_thumb_0_0](/images/dataclassification/5.6.2/workflows/workflow_step3_filter_blue_thumb_0_0.webp)

- Excluding filters (i.e. instructing to include documents without classification tag you selected)
  are colored red:

![workflow_step3_filter_red_thumb_0_0](/images/dataclassification/5.6.2/workflows/workflow_step3_filter_red_thumb_0_0.webp)

If you have selected more than one filter, you will be prompted what logic should be used when
applying the filters:

- To apply AND logic (i.e. the document must meet all filtering conditions), select **All**.
- To apply OR logic (i.e. the document must meet any of the filtering conditions), select **Any**.

## Example 1. Include All Files Classified as PDF

For example, you want your workflow to process all PDF files from the selected content source. Do
the following:

1. Select **Specific Classification** option.
2. Select **Classified**.
3. Click the tags icon in the **Select Term** field on the right.
4. In the **Details** dialog, from the **Taxonomy** list select **File Type**.
5. Then from the list of file types select **PDF** and click **OK**.

![workflow_step3_example_thumb_0_0](/images/dataclassification/5.6.2/workflows/workflow_step3_example_thumb_0_0.webp)

After you get back to the wizard, the PDF filter will appear under the **Classified** option,
colored blue (indicating this filter is including).

## Example 2. Exclude HTML and XML Files

For example, you want your workflow to process all classified documents from the selected content
source, except HTML and XML files. Do the following:

1. Select **Specific Classification** option.
2. Select **Not Classified**.
3. Click the tags icon in the **Select Term** field.
4. In the **Details** dialog, from the **Taxonomy** list select **File Type**.
5. Then from the list of file types select **HTML** and click **OK**.
6. After you get back to the wizard, check that the PDF filter is shown colored red (indicating this
   filter is excluding).
7. Repeat steps 3-5 for the XML file type.
8. Under the **Require all conditions?** prompt select **Any** — for OR logic to be applied, so that
   any HTML or XML file should be excluded (in other words, the workflow will be applied only to the
   files not classified as HTML or XML).
9. Finally, click **Next** to proceed.

![workflow_step3_example2_thumb_0_0](/images/dataclassification/5.6.2/workflows/workflow_step3_example2_thumb_0_0.webp)
