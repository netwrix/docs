---
title: "Modify MIP Label"
description: "Modify MIP Label"
sidebar_position: 20
---

# Modify MIP Label

Netwrix Data Classification is integrated with Microsoft Information Protection (MIP) to enable you
to better track and secure sensitive data on your file servers.
[See Understanding MIP Labels for more information.](/docs/dataclassification/5.6.2/contentconfigurationoverview/workflows/mip_intro.md)

- [Modifying MIP Label via Workflow Wizard](#modifying-mip-label-via-workflow-wizard)
- [Modifying MIP Label via Advanced UI](#modifying-miplabel-via-advanced-ui)

**NOTE:** To apply or remove MIP label, a MIP application configuration must be specified. See
[Set Up MIP Integration](/docs/dataclassification/5.6.2/deployment/configinfrastructure/mip_configure_infrastructure.md)
for more information.

## Modifying MIP Label via Workflow Wizard

1. Launch the Add Workflow wizard as described in the
   [Create a Workflow using Add Workflow Wizard](/docs/dataclassification/5.6.2/contentconfigurationoverview/workflows/managingworkflows/workflowaddworkflowwizard/workflow_add_workflow_wizard.md)
   section.
2. On the What do you want to do? step, select Modify MIP Label.
3. Complete the following fields:

    | Option                                                                                              | Description                                                                                                     |
    | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
    | Which label configuration should be used?                                                           | Select configuration in the dropdown list.                                                                      |
    | Do you want to apply or remove a MIP label?                                                         | Check Apply or Remove.                                                                                          |
    | Which MIP label should be applied? **NOTE:** For adding MIP label only.                             | Provide a label ID from existing MIP policy of your organization.                                               |
    | What justification should be given if this operation results in downgrading a document's sensivity? | If your MIP labels policy requires justification when removing or downgrading a label, provide it in the field. |

## Modifying MIP Label via Advanced UI

1. In administrative web console, navigate to Workflows and select the workflow you want to apply
   MIP labels to.
2. Click the workflow and click Add next to Rule Actions.
3. In the Add Action dialog, select Apply MIP Label.
4. Complete the following fields:

    | Option                                        | Description                                                                                                     |
    | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
    | Action Type                                   | Select Apply MIP Label or Remove MIP Label.                                                                     |
    | MIP Configuration                             | Select configuration in the dropdown list.                                                                      |
    | Label ID **NOTE:** For adding MIP label only. | Provide a label ID from existing MIP policy of your organization.                                               |
    | Justification                                 | If your MIP labels policy requires justification when removing or downgrading a label, provide it in the field. |
