---
title: "Understanding MIP Labels"
description: "Understanding MIP Labels"
sidebar_position: 10
---

# Understanding MIP Labels

Microsoft Information Protection (MIP) is the unification of Microsoft's classification, labeling,
and protection services:

- Unified administration is provided across Office 365, Azure Information Protection, Windows
  Information Protection, and other Microsoft services.
- Third parties can use the MIP SDK to integrate with applications, using a standard, consistent
  data labeling schema and protection service.

MIP technology integration to add labels to documents. Labels can have any security policy
assigned, such as policies to restrict access to sensitive documents.

Netwrix Data Classification for Files and Folders supports MIP labels as a Workflow action. After
you run the classification procedure, you can mark your documents with the appropriate labels. For
example, you can apply a protection label that requires authentication from members of your domain organization. 
You can apply the MIP labels to file share and SharePoint sources. Specify this information
using the
[Create a Workflow using Add Workflow Wizard](/docs/dataclassification/5.6.2/contentconfigurationoverview/workflows/managingworkflows/workflowaddworkflowwizard/workflow_add_workflow_wizard.md).
Review the following for additional information:

- [Set Up MIP Integration](/docs/dataclassification/5.6.2/deployment/configinfrastructure/mip_configure_infrastructure.md)
- [MIP Labels Configuration](/docs/dataclassification/5.6.2/systemconfigurationoverview/configuration/mip_configure_ndc.md)
- [Modify MIP Label](/docs/dataclassification/5.6.2/contentconfigurationoverview/workflows/actions/actionsbysources/advancedactionsfiles/mip_workflow_action.md)
