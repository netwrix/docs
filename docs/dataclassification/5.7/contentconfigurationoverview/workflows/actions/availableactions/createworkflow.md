---
title: "Configure a Workflow using Advanced dialog"
description: "Configure a Workflow using Advanced dialog"
sidebar_position: 30
---

# Configure a Workflow using Advanced dialog

This section contains information on how to add or edit workflows using the **Advanced** dialog
window.

To configure a workflow:

1. On the **Workflow** tab, click **Add** and in the dialog displayed click **Advanced**.
2. Specify **Name** for the workflow.
3. From the **Type** drop-down list, select the type of content your workflow will apply to.
4. Click **Add**.

    ![add_workflows_advanced_name_thumb_0_0](/images/dataclassification/5.7/admin/workflows/advancedwindow/add_workflows_advanced_name_thumb_0_0.webp)

5. Then you need to configure document processing rules. For each rule, you should set up rule
   conditions and rule actions. Also, specify how the workflow should be processed with regards to
   rules.

    - Specifying Rule Conditions
    - Specifying Rule Actions
    - Other Rule Settings

    To apply pre-conditions (they will be used before rule processing starts), see Specifying
    Workflow Conditions

6. Navigate to Content → Sources and select Re-classify for the selected sources in the workflow.

## Specifying Rule Conditions

1. In the corresponding section on the **Rule** tab, click **Edit** on the right. The **Edit Rule
   Conditions** dialog will be displayed.
2. From the **Mode** list, select how the conditions should be applied.

![add_workflows_rule_conditions_thumb_0_0](/images/dataclassification/5.7/admin/workflows/advancedwindow/add_workflows_rule_conditions_thumb_0_0.webp)

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

    :::note
    Multiple selection is not supported: to configure several filter values, you should
    repeat this procedure for each filter value you need.
    :::


    3. **Include Children** - select this option if needed.

3. Finally, click **OK** to save the settings and close the dialog.

4. You can specify what logic should be used when applying the filtering terms:

- To apply AND logic (i.e. the document must match all filters), select **Require all conditions be
  met**.
- Otherwise, OR logic will be used (i.e. the document must meet any of the filtering conditions).

4. Make sure the filtering term is displayed in the **Edit Rule Conditions** window with blue color.
   Click **Save**.

The configured rule condition will appear in the **Rule Conditions** section on the **Rule** tab.

![add_workflows_rules_list_thumb_0_0](/images/dataclassification/5.7/admin/workflows/add_workflows_rules_list_thumb_0_0.webp)

**Example**

If you want to apply the rule to all documents classified as Visa cardholder data using PCI DSS
taxonomy, configure the rule condition as follows:

1. From the **Mode** list select **Specific Conditions**.
2. Select **Classified** option.
3. In the **Select Term**, click the tag icon.
4. In the **Details** window, from the **Taxonomy** list select **PCI DSS**.
5. In the tags hierarchy, select **Visa** and click **OK**.

![add_workflows_advanced_details_thumb_0_0](/images/dataclassification/5.7/admin/workflows/advancedwindow/add_workflows_advanced_details_thumb_0_0.webp)

Make sure the filtering term is displayed in the Edit Rule Conditions window with blue color. Click
**Save**.

The configured rule condition will appear in the **Rule Condtions** section on the **Rule** tab.

## Specifying Rule Actions

1. In the corresponding section on the **Rule** tab, click **Add** on the right. The **Add Action**
   dialog will be displayed.
2. From the **Action Type** list, select the action you want to apply to the documents that match
   rule conditions. For details, see [Workflow Actions](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/actions.md).
3. Click **Save**.

![add_workflows_advanced_action_thumb_0_0](/images/dataclassification/5.7/admin/workflows/advancedwindow/add_workflows_advanced_action_thumb_0_0.webp)

## Other Rule Settings

On the **Rule** tab, you can also manage the rule, as follows:

- Add another rule, clicking the '+' sign.
- Enable or disable this rule, selecting or clearing the **Enabled** check box in the top right
  corner.
- Specify how rule application will affect workflow processing. Possible options are:
    - **Processing stops if this rule is run**
    - **Processing stops if any action fails**
- **Edit** rule conditions.
- **Copy** or **delete** the current rule.
- Copy rule configuration as text, CSV or XLSX file.
- **Add**, **Edit** or **Delete** rule actions.

If multiple rule actions have been configured, they will be processed in the order listed. Use the
red down arrow or green up-arrow to change the processing sequence as required:

![workflowsreorderactions_thumb_0_0](/images/dataclassification/5.7/admin/workflows/advancedwindow/workflowsreorderactions_thumb_0_0.webp)

## Specifying Workflow Conditions

You can narrow the initial workflow scope. For that, specify the conditions that document should
match to be processed by the workflow.

1. Go to the **Conditions** tab. By default, the **Workflow Conditions** list includes none, that
   is, current workflow will consider any document; actual filtering conditions will be applied by
   the rule (rule conditions).

![add_workflows_advanced_wf_conditions_thumb_0_0](/images/dataclassification/5.7/admin/workflows/advancedwindow/add_workflows_advanced_wf_conditions_thumb_0_0.webp)

1. Click **Edit** to open **Edit Workflow Conditions** dialog.
2. Select the option you need from the **Mode** list. The next steps are similar to those described
   in Specifying Rule Conditions
