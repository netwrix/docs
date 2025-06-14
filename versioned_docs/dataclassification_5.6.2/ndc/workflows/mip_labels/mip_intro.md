# Understanding MIP Labels

Microsoft Information Protection (MIP) is the unification of Microsoft's classification, labeling,
and protection services:

- Unified administration is provided across Office 365, Azure Information Protection, Windows
  Information Protection, and other Microsoft services.
- Third parties can use the MIP SDK to integrate with applications, using a standard, consistent
  data labeling schema and protection service.

MIP technology integration allows adding labels to documents. The label may have any security policy
assigned, for example, the policy to restrict access to sensitive documents.

Netwrix Data Classification for Files and Folders supports MIP labels as a Workflow action. After
you run the classification procedure, you would want to mark your documents with the labels. For
example, you use the protection label to be available by the person from the domain organization. In
this case, it will require authentication, such as password.

You can apply the MIP labels to the file share and ShareЗoint sources. Specify this information
using the
[Create a Workflow using Add Workflow Wizard](/versioned_docs/dataclassification_5.6.2/ndc/workflows/workflow_add_workflow_wizard.md).
Review the following for additional information:

- [Set Up MIP Integration](/versioned_docs/dataclassification_5.6.2/ndc/workflows/mip_labels/mip_configure_infrastructure.md)
- [MIP Labels Configuration](/versioned_docs/dataclassification_5.6.2/ndc/workflows/mip_labels/mip_configure_ndc.md)
- [Modify MIP Label](/versioned_docs/dataclassification_5.6.2/ndc/workflows/mip_labels/mip_workflow_action.md)
