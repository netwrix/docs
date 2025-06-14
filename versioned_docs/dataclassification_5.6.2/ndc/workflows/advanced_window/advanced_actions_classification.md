# Apply Additional Classification

You can instruct the program to apply one or more additional classifications to the processed
document. This workflow action is called **Manual Classification** and can be configured via the
**Advanced** UI window.

Alternatively, you can configure a workflow action that permanently removes all existing
classifications on a document and disables future auto-classification for it.

![workflow_actions_man_classify_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/workflow_actions_man_classify_thumb_0_0.png)

To apply additional classification:

In the **Add Action** dialog, from the **Action Type** list select **Manually Classify** under
**Classification**, then configure the necessary terms as described below.

**NOTE:** The terms you select must belong to a single taxonomy / termset.

To remove all classifications:

In the **Add Action** dialog, from the **Action Type** list select **Remove Classifications** under
**Classification**.

[<!-- Image removed: transparent.gif not found -->To configure terms](<javascript:void(0)>)

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

**NOTE:** The additional classification will not trigger other workflows or affect the source item.
