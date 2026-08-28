---
title: "AutomationRule"
description: ""
sidebar_position: 1
---

Automation rules make automatic decisions instead of the reviewer on assignments that still need to be reviewed after a given waiting period.

There are distinct types of automation rules:

* a composite role automation rule targets the assigned composite roles corresponding to a given composite role.

    `CompositeRoleAutomationRule` is equivalent to `AutomationRule` with its `Type` set to `CompositeRole`, and requires specifying the `CompositeRole` property;

* a single role automation rule targets the assigned single roles corresponding to a given single role.

    `SingleRoleAutomationRule` is equivalent to `AutomationRule` with its `Type` set to `SingleRole`, and requires specifying the `SingleRole` property;

* a resource type automation rule targets the assigned resource types corresponding to a given resource type.

    `ResourceTypeAutomationRule` is equivalent to `AutomationRule` with its `Type` set to `ResourceType`, and requires specifying the `ResourceType` property;

* a category automation rule targets the assigned roles and resource types corresponding to a given category and a given entity type.

    `CategoryAutomationRule` is equivalent to `AutomationRule` with its `Type` set to `Category`, and requires specifying the `Category` and `EntityType` properties;

* a policy automation rule targets the assigned roles and resource types corresponding to a given policy and a given entity type.

    `PolicyAutomationRule` is equivalent to `AutomationRule` with its `Type` set to `Policy`, and requires specifying the `Policy` and `EntityType` properties.

:::note
NETWRIX recommends always using the typed syntax.

For example, you should always use `SingleRoleAutomationRule`, rather than `AutomationRule` with `Type` set to `CompositeRole`.
:::

All these rules target the assignments which have a specific workflow state which is specified in the rule.

Automation rules can also specify dimensions.

One assignment should be involved in the decision of only one automation rule. However, one assignment can easily be targeted by several automation rules. In this case, the Provisioning Policy algorithm prioritizes the most specific rule.

> For example, considering an assigned composite role, Identity Manager's algorithm prioritizes a composite role automation rule, before a category automation rule, before a policy automation rule.

After this prioritization, when an assignment is still targeted by several rules due to dimensions, then Identity Manager prioritizes a rule implying a decline decision.


## Examples
In the following example, the two first rules are equivalent (except for the workflow state's value), but the second one shows the preferred syntax.

```xml
    This rule approves all the assignments of the "FCT0070" composite role, which are waiting for the first of two required approvals for more than one hour:
    <AutomationRule Type="CompositeRole" CompositeRole="FCT0070" WorkflowState="PendingApproval1" HoursToWait="1"  Decision="Approve"/>

    This rule approves all the assignments of the "FCT0070" composite role, which are waiting for the second of two required approvals for more than one hour:
    <CompositeRoleAutomationRule CompositeRole="FCT0070" WorkflowState="PendingApproval2" HoursToWait="1" Decision="Approve"/>

    This rule approves all the assignments of the "BO028" single role, which are waiting for their required approval for more than one hour:
    <SingleRoleAutomationRule SingleRole="BO028" WorkflowState="PendingApproval" HoursToWait="1" Decision="Approve"/>

    This rule approves all the assignments of the "SAB_User_NominativeUser" resource type, which are waiting for their required approval for more than one hour:
    <ResourceTypeAutomationRule ResourceType="SAB_User_NominativeUser" WorkflowState="PendingApproval" HoursToWait="1" Decision="Approve"/>

    This rule declines all the assignments to the entity type "Directory_User" concerning the "IT Administration" category, which are waiting for the first of two required approvals for more than one hour:
    <CategoryAutomationRule Category="IT Administration" WorkflowState="PendingApproval1" HoursToWait="1" Decision="Decline" EntityType="Directory_User"/>

    This rule declines all the assignments to the entity type "Directory_User" concerning the "Default" policy, which are found during a synchronization without a linked automatic rule, for more than one hour:
    <PolicyAutomationRule Policy="Default" WorkflowState="Found" HoursToWait="1" Decision="Decline" EntityType="Directory_User"/>

    This rule declines all the assignments to the entity type "Directory_User" concerning the "Default" policy, which are found during the first synchronization without a linked automatic rule, for more than one hour:
    <PolicyAutomationRule Policy="Default" WorkflowState="Historic" HoursToWait="1" Decision="Decline" EntityType="Directory_User"/>
```


## Properties

|Property|Details|
|---|---|
| Category optional | **Type:** Int64 **Description:** Identifier of the category targeted by the rule. |
| CompositeRole optional | **Type:** Int64 **Description:** Identifier of the composite role targeted by the rule. |
| D0 optional | **Type:** Int64 **Description:** Value of the dimension 0 (up to 127) that filters the assignments targeted by the rule. |
| Decision <span class="optionalAttribute">default value: 0</span> | **Type:** AutomationRuleDecision **Description:** Decision to apply on the targeted assignments. `0` - Approve. `1` - Decline. |
| EntityType required | **Type:** Int64 **Description:** Identifier of the entity type targeted by the rule. This property shouldn't be specified when writing an automation rule among the following: composite role automation rule; single role automation rule; resource type automation rule. These rules imply the entity type. |
| HoursToWait <span class="optionalAttribute">default value: -1</span> | **Type:** Int32 **Description:** Waiting period (in hours) from the most recent change in the workflow state of the assignments, before the decision can be applied. |
| L0 <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to indicate that the rules targets the assignments with not only the dimension 0 (up to 127), but also this dimension's child elements. |
| Policy optional | **Type:** Int64 **Description:** Identifier of the policy that the rule is part of. |
| ResourceType optional | **Type:** Int64 **Description:** Identifier of the resource type targeted by the rule. |
| SingleRole optional | **Type:** Int64 **Description:** Identifier of the single role targeted by the rule. |
| Type required | **Type:** AutomationRuleType **Description:** Object type targeted by the rule. `0` - CompositeRole. `1` - SingleRole. `2` - ResourceType. `4` - Category. `5` - Policy. |
| WorkflowState <span class="optionalAttribute">default value: 0</span> | **Type:** WorkflowState **Description:** Workflow state of the assignments targeted by the rule. See the detailed list of [workflow states](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/provisioning/automationrule#workflow-states) and their meanings for complete reference. |
