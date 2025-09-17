---
description: >-
  Describes best practices for controlling and monitoring changes to group
  membership in Netwrix Directory Manager, including workflows, access controls,
  Out of Bounds settings, and Management Shell restrictions.
keywords:
  - group membership
  - groups
  - Netwrix Directory Manager
  - Query Designer
  - workflows
  - access control
  - Management Shell
  - out of bounds
  - self-service portal
  - alerts
products:
  - directory-manager
sidebar_label: Best Practices for Controlling Changes to Group Me
tags: []
title: "Best Practices for Controlling Changes to Group Membership"
knowledge_article_id: kA0Qk0000000I4zKAE
---

# Best Practices for Controlling Changes to Group Membership

## Applies To:

- Netwrix Directory Manager 11

## Modules:

- Netwrix Directory Manager Group Management
- Netwrix Directory Manager User Management
- Management Shell

## Business Statement:

Managing directory groups and using them to control access to resources is a critical job for IT administrators. Groups help manage mailing lists and enumerate permissions to resources. For these very reasons, groups should never be out of order and changes to group memberships must be tracked.

In light of this, Netwrix Directory Manager offers some best practices that enable organizations to control changes to group memberships.

## Netwrix Directory Manager Best Practices:

Turns out, Netwrix Directory Manager is equipped with a host of features that allow IT administrators to keep a sharp eye on any changes that may occur in group membership. Controls can be applied at multiple levels, enabling administrators to view tentative membership changes before committing them.

The following best practices act as preemptive and reactive measures to guard group membership:

- Configure the Out of Bounds settings for an identity store.

  These settings enable you to specify the maximum number of members a group can have.

  You can also set up a group membership update threshold, that compares the existing member count to the new member count in order to detect unusual and large changes to group membership. In the event of a threshold violation, Netwrix Directory Manager notifies the group owner or administrator via email, who can approve or deny the change. Click here for more: https://support.imanami.com/knowledgebase/article/KA-01200/en-us?how-to-prevent-massive-changes-to-group-membership

- Define a workflow that is triggered when a user makes a change to the query of a Smart Group or Dynasty.

  In Netwrix Directory Manager, the Query Designer enables you to define membership update queries for Smart Groups and Dynasties. As a proactive measure, create a workflow for an identity store, that routes an approval request to an authorized approver when a user makes a change to this query in the Query Designer. The request must be approved for changes to take effect. Click here for more: https://imanami.microsoftcrmportals.com/knowledgebase/article/KA-01201/en-us

- For a Netwrix Directory Manager portal, use the Visibility and Access controls to restrict user roles from viewing and updating Smart Group and Dynasty queries.

  Individual fields in a Self-Service portal are subject to the following controls:

  - **Visibility level** determines the security roles who can view a field in the portal.
  - **Access level** determines the security roles that can update the value of a field using the portal.

  You can hide the Smart Group query and Dynasty query fields or render them as read-only in the portal for all except an authoritative user role. Click here for more: https://support.imanami.com/knowledgebase/article/KA-01199/en-us?how-to-control-access-and-visibility-on-the-group-query-in-the-self-service-portal

- Allow selective security roles to access Netwrix Directory Manager Management Shell.

  For a security role, you can choose to allow or deny access to a Netwrix Directory Manager client, such as Management Shell. Make sure only selective security roles have access to it for creating and updating groups.

- Restrict access to the Netwrix Directory Manager server.

  To ensure that only authorized users log on to the Netwrix Directory Manager server, create a group with permissions on the Netwrix Directory Manager server and limit its membership to those users.

These practices make use of workflows, access controls, and alerts to offer foolproof security for your groups, which in turn secure your organization.

## References:

- Netwrix Directory Manager Online Help topic: Workflows  
  https://docs.netwrix.com/docs/directorymanager/11_1

- Netwrix Directory Manager Online Help topic: Query Designer dialog box  
  https://docs.netwrix.com/docs/directorymanager/11_1

- Netwrix Directory Manager Online Help topic: Group Membership Settings  
  https://docs.netwrix.com/docs/directorymanager/11_1

- Netwrix Directory Manager Online Help topic: Customize Object Properties  
  https://docs.netwrix.com/docs/directorymanager/11_1

### Related Articles:

- Walkthrough Search Policy - Define Scope and Filter Results  
  /docs/kb/directorymanager/walkthrough_search_policy_-_define_scope_and_filter_results

- How To Enforce Users to Create Groups in a Specific OU  
  /docs/kb/directorymanager/how_to_enforce_users_to_create_groups_in_a_specific_ou

- How To Import Members to a Group Using Self-Service Import Wizard  
  /docs/kb/directorymanager/how_to_import_members_to_a_group_using_self-service_import_wizard

- How to Trigger a workflow When a User Сreates a Group  
  /docs/kb/directorymanager/how_to_trigger_a_workflow_when_a_user_сreates_a_group

- How To Add Message Approvers in Group Properties in Self-Service  
  /docs/kb/directorymanager/how_to_add_message_approvers_in_group_properties_in_groupid_portal

- Best Practices for Preventing Accidental Data Leakage  
  /docs/kb/directorymanager/best_practices_for_preventing_accidental_data_leakage
