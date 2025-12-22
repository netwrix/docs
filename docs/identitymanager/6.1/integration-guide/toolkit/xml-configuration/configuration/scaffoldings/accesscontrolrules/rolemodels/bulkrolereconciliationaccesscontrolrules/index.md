---
title: "BulkRoleReconciliationAccessControlRules"
description: "BulkRoleReconciliationAccessControlRules"
sidebar_position: 50
---

# BulkRoleReconciliationAccessControlRules

Generates the permissions to perform bulk validations on the **Role Reconciliation** page.

The scaffolding generates the following scaffoldings:

- [ReconciliateRolesAccessControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/reconciliaterolesaccesscontrolrules/index.md):
  Generates the permissions to access the role reconciliation pages for a given entity type and
  profile.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
