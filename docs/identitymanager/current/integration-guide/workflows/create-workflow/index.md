---
title: "How To Create a Workflow"
description: "How To Create a Workflow"
sidebar_position: 20
---

# How To Create a Workflow

This guide shows how to create a [Workflow](../../../integration-guide/toolkit/xml-configuration/workflows/workflow) through the XML configuration.

## Process

1. Declare a new [Workflow](../../../integration-guide/toolkit/xml-configuration/workflows/workflow) with
given activities following Identity Manager's activity templates.
2. Configure the input [Form](../../../integration-guide/toolkit/xml-configuration/user-interface/form) with the
right output type according to the purpose of the workflow.
3. Assign the adequate permissions via an
[Access Control Rule](../../../integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule).
4. Add [Menu Item](../../../integration-guide/toolkit/xml-configuration/user-interface/menuitem).
5. Add [Aspects](../../../integration-guide/toolkit/xml-configuration/workflows/aspects), according to the
purpose of the workflow.
6. Add optional elements if needed: [Workflows](../../../integration-guide/workflows); a
[Configure a Homonym Detection](../../../integration-guide/workflows/create-workflow/configure-homonym-test); [Customize Display Tables](../../../integration-guide/ui/custom-display-table)different from Identity Manager's default one.

## Examples

You can also find configuration examples for several types of workflow:

- [For Resource Creation (Mono Record)](../../../integration-guide/workflows/create-workflow/workflow-create-mono)

How to create a workflow to create a new resource with a unique record.

- [For Resource Creation (Multi Records)](../../../integration-guide/workflows/create-workflow/workflow-create-multi)

How to create a workflow to create a new resource with several records.

- [For Resource Update (No Record)](../../../integration-guide/workflows/create-workflow/workflow-update-resource)

How to create a workflow to update an existing simple resource, i.e. to update, within a given existing resource, properties that do not involve records.

- [For Resource Update (Mono Record)](../../../integration-guide/workflows/create-workflow/workflow-update-mono)

How to create a workflow to schedule the replacement of the unique record of an existing resource with a new one.

- [For Resource Update (Multi Records)](../../../integration-guide/workflows/create-workflow/workflow-update-multi)

Create a workflow to update an existing resource through its several records.

- [Configure a Homonym Detection](../../../integration-guide/workflows/create-workflow/workflow-update-multi)

How to configure the homonym search that checks if a resource already exists in the system, preventing duplicates.

