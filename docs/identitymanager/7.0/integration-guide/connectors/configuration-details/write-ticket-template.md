---
title: "Write a Template for a Ticket Connector"
description: "Write a Template for a Ticket Connector"
sidebar_position: 90
---

# Write a Template for a Ticket Connector

This guide shows how to write a template that will be used by a Ticket connector to complete the title and the description of the ticket. The information which will be written in the ticket will come from the generated provisioning order and from literal strings written in the template.

## Attributes

 | Name | Details | 
 | --- | --- | 
 | Username | **Type** String **Description** Is the name of the user for which the ticket is created. | 
 | ResourceType | **Type** String **Description** Is the identifier or the resource type. | 
 | UsercubeProfileLink | **Type** String **Description** Is the link allowing to access the user profile. | 
 | AddedLinkedEntities | **Type** List **Description** Is the list of links to add in the system. | 
 | RemovedLinkedEntities | **Type** List **Description** Is the list of links to remove in the system. | 
 | DisplayAdd | **Type** Boolean **Description** True if there are any links to add. | 
 | DisplayRemove | **Type** Boolean **Description** True if there are any links to remove. | 
 | Entity | **Type** Dictionary **Description** Is the list of values to assign to the resource. | 
 | ProvisioningOrder.ChangeType | **Type** String **Description** Corresponds to the action of the provisioning order (Added, Deleted, Modified). | 
 | ProvisioningOrder.Changes | **Type** Dictionary **Description** Is the list of changes. | 
 | ProvisioningOrder.Resource | **Type** Dictionary **Description** Is the current state of the resource. | 
 | ProvisioningOrder.Owner | **Type** Dictionary **Description** Is the owner of the resource. | 

## Operations

The template uses the [Mustache](https://mustache.github.io/mustache.5.html) syntax. Several operations are already provided, but you can find more on this [page](https://handlebarsjs.com/guide/builtin-helpers.html).

Identity Manager also provides a way of using conditions with Mustache for the following operations:

- `>`: superior to
- `<`: inferior to
- `==`: equal to
- `!=`: different from

### Example

```json
{{#each ProvisioningOrder.Changes}}
    {{#ifCond this '==' 'INTERNAL'}}
        This account is for an internal employee.
    {{else}}
        This account is for an external employee.
    {{/ifCond}}
{{/each}}
```

This template goes through all the changes provided by the provisioning order. If any one of them meets the condition for an internal employee, we display the internal employee message. Several messages can be shown if several changes meet the condition.

## Template example

```json
Please create a resource "{{ResourceType}}" for user {{Username}}.

**For more information on the user, see: {{UsercubeProfileLink}}**

{{#ifCond ProvisioningOrder.ChangeType '==' 'Deleted'}}
  To delete the account, please contact the IT team.
{{/ifCond}}

{{#each ProvisioningOrder.Changes}}
  This is a change: {{this}}
{{/each}}

The resource must have the following values:
{{#Entity.GetEnumerator}}
	- {{Key}}: {{Value}}
{{/Entity.GetEnumerator}}

{{#DisplayAdd}}
Add the following links:
{{/DisplayAdd}}
{{#AddedLinkedEntities}}
	- {{Name}}
{{#Values.GetEnumerator}}
		- {{Value}}: {{Key}}
{{/Values.GetEnumerator}}
{{/AddedLinkedEntities}}
```
