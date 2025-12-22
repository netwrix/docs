---
title: "Mining Rule"
description: "Mining Rule"
sidebar_position: 80
---

# Mining Rule

After roles are assigned to users, Identity Manager can use mining rules to perform role mining.
Role mining means that Identity Manager analyzes existing assignments in order to suggest
[Single Role Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md) which will assign
[Single Role](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/singlerole/index.md) to certain users matching given criteria.

The [Build Role Model Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/buildrolemodeltask/index.md) replaces the
existing single role rules in the specified rule policy with the new generated ones.

## Examples

The following example set of mining rules targets the roles owned by users from `Directory_User`.
These mining rules are part of the `Default` policy while the role assignment rules are to be
generated to be part of the `Mining` policy.

The following rules have a different impact whether they are applied individually, or all together.
Indeed, during role mining, the first mining rule of type `Required` applies to given roles with a
given precision, then the second mining rule applies to a larger group of roles but only to those
still with no linked single role rules.

- The first rule will generate required rules (i.e. automatic assignments) for sensitive assignments
  that require 2 or 3 validations, with a high precision (via `PrecisionMinPercentage` and
  `FalsePositiveMaxPercentage`).

    ```

      <MiningRule EntityType="Directory_User" RulePolicy="Mining" Policy="Default" IncludeNoValidation="false" IncludeSimpleValidation="false" FalsePositiveMaxPercentage="0.03"  PrecisionMinPercentage="97.0" RuleType="0" Priority="10" />

    ```

- The second rule will generate required rules (i.e. automatic assignments) for all assignments,
  with a lower precision.

    ```

      <MiningRule EntityType="Directory_User" RulePolicy="Mining" Policy="Default" FalsePositiveMaxPercentage="0.05" PrecisionMinPercentage="95.0" RuleType="0" Priority="1" />

    ```

- The third rule will generate suggested rules (i.e. assignments listed as suggested in users'
  permission baskets) for all assignments, with an even lower precision.

    ```

      <MiningRule EntityType="Directory_User" RulePolicy="Mining" Policy="Default" FalsePositiveMaxPercentage="20.0" PrecisionMinPercentage="80.0" RuleType="2" Priority="1" />

    ```

## Properties

| Property                                      | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Category optional                             | **Type** Int64 **Description** Identifier of the category containing the roles targeted by role mining's analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| EntityType required                           | **Type** Int64 **Description** Identifier of the entity type that represents the owners of the roles targeted by role mining's entitlement analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ExcludeRole default value: false              | **Type** Boolean **Description** `true` to ignore the specified roles during the mining process triggered by the next mining rules (in terms of priority).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| FalsePositiveMaxPercentage default value: 0.0 | **Type** Float **Description** Maximum authorized percentage of false positive assignments, i.e. roles that are assigned to users who should not have them. Netwrix Identity Manager (formerly Usercube) recommends around 1%, to be lowered when working on a sensitive application and/or a large user population, and vice versa.                                                                                                                                                                                                                                                                                                               |
| IncludeDoubleValidation default value: true   | **Type** Boolean **Description** `true` to include in role mining's analysis the roles requiring two validations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| IncludeNoValidation default value: true       | **Type** Boolean **Description** `true` to include in role mining's analysis the roles requiring zero validations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| IncludeSimpleValidation default value: true   | **Type** Boolean **Description** `true` to include in role mining's analysis the roles requiring one validation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| IncludeTripleValidation default value: true   | **Type** Boolean **Description** `true` to include in role mining's analysis the roles requiring three validations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Policy required                               | **Type** Int64 **Description** Identifier of the policy that the mining rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| PrecisionMinPercentage default value: 100.0   | **Type** Float **Description** Minimum authorized percentage of correct role assignments, considering both the roles that are assigned to users who should have them, and the roles that are not assigned to users who should not have them. NETWRIX recommends around 99.5%, to be lowered when working on a sensitive application and/or a large user population, and vice versa.                                                                                                                                                                                                                                                                |
| Priority default value: 0                     | **Type** Int32 **Description** Priority order of the mining rule. Identity Manager applies mining rules one after the other in descending order. **Info:** a mining rule can generate single role rules only for the single roles that were not already associated with a single role rule by another mining rule during the same role mining task.                                                                                                                                                                                                                                                                                                |
| RulePolicy optional                           | **Type** Int64 **Description** Identifier of the policy that the generated single role rules are to be part of. **Note:** NETWRIX recommends using a policy dedicated to role mining in order not to remove existing assignment rules.                                                                                                                                                                                                                                                                                                                                                                                                             |
| RuleType default value: 0                     | **Type** Int32 **Description** Represents the type of the generated single role rules. `0` - **Required**: the role is automatically assigned to users matching the criteria. `1` - **RequestedAutomatically**: the role is listed in the permission basket of new workers. These assignments can still be modified. For existing workers, the rule's type is `Suggested`. `2` - **Suggested**: the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request. Suggested assignments must be selected manually to be requested, and will go through the validation process. |
