---
title: "Create a Resource Type"
description: "Create a Resource Type"
sidebar_position: 10
---

# Create a Resource Type

How to create the container for future correlation and classification rules inside a given managed
system.

## Overview

A
[resource type](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md)
is created to highlight differences in intent between resources. It materializes the organization's
profiles. In a given managed system, different types of resources have different security needs.

> For example, can usually be found:
>
> - nominative accounts for basic user accounts with low privileges;
> - administrator accounts for accounts with higher privileges, on several administration
>   entitlements levels;
> - generic accounts, i.e. shared by a group of users (often for testing use);
> - old in opposition to new accounts because of potentially evolving naming conventions;
> - service accounts owned by applications instead of users.

In practice, a specific resource type is created for a given resource when there are differences in:

- the owner type (for example worker, partner, customer, application, robot, etc.);
- the required set of
  [classification](/docs/identitymanager/6.1/user-guide/set-up/categorization/classification/index.md)
  and/or
  [correlation](/docs/identitymanager/6.1/user-guide/set-up/categorization/correlation/index.md)
  rules;
- the approval circuit for a resource's modification or assignment, i.e. the number of required
  approvals, validators, etc.;
- the type of
  [provisioning](/docs/identitymanager/6.1/user-guide/administrate/provisioning/index.md)
  (manual or automatic).

### Source vs. target resource

Resource types are the vessel for ownership relationships. They involve the definition of source and
target objects chosen from among the properties of existing
[entity types](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/index.md).
The source (usually identities) is the owner of the target (usually resources from your managed
systems, such as a nominative AD account). This relationship is the basis for
[correlation](/docs/identitymanager/6.1/user-guide/set-up/categorization/correlation/index.md)
as much as for future
[provisioning](/docs/identitymanager/6.1/user-guide/administrate/provisioning/index.md).

[Read more about ownership relationships](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                                                                                                                                                                                                                                                                                                         | Output        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (optional) [Target connector](/docs/identitymanager/6.1/user-guide/set-up/connect-system/index.md) (required) [Synchronized data](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md) (optional) | Resource type |

## Create a Resource Type

A new resource type requires an existing
[entity type](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/index.md).

Create a resource type by proceeding as follows:

1. On the relevant connector page, click on the addition button in the **Resource Types** frame.

    ![Addition Icon](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/iconadd_v602.svg)

    Resource types can also be created through the **Access Roles** screen (accessible from the home
    page, in the **Configuration** section), using the **+ New** button and selecting
    `Resource Type` in the first field called `Type`.

    ![Home - Access Roles](/images/identitymanager/6.1/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

2. Fill in the fields.

    ![New Resource Type](/images/identitymanager/6.1/user-guide/set-up/categorization/resource-type-creation/resourcetype_newresourcet_v603.webp)

    - `Identifier`: must be unique among resource types, without any whitespace, and be
      C#-compatible.
      [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
    - `Name`: will be displayed in the UI to identify the resource type.
    - `Policy`:
      [policy](/docs/identitymanager/6.1/user-guide/optimize/policy-creation/index.md)
      in which the resource type exists.
    - `Source Entity Type`: entity type (from any existing connector) used to fill the target entity
      type.
    - `Target Entity Type`: entity type (part of the connector) to be filled with the source entity
      type.
    - `Category`: category assigned to the resource type. It can be chosen from among the existing
      categories or
      [created](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/index.md)
      directly from the categories list by clicking on the **+ Category** button.
    - `Approval Workflow`: represents the number of validations required to assign a resource from
      this type to an identity.
    - `Approve Role Implicitly`: relevant only for workflows with at least a simple approval
      process. `Implicit` mode bypasses the approval step(s) if the person who issues the role
      request is also the
      [role officer](/docs/identitymanager/6.1/user-guide/set-up/role-officer-management/index.md).
      `Explicit` refuses said bypass. `Inherited` follows the
      [policy](/docs/identitymanager/6.1/user-guide/optimize/policy-creation/index.md)
      decision to approve role implicitly or not.
    - `Prolongation without a new approval workflow`: enables the resource type to have its
      assignment's end date postponed without any validation. `Inherited` follows the
      [policy](/docs/identitymanager/6.1/user-guide/optimize/policy-creation/index.md)
      decision to enable this option or not.
    - `Hide in Simplified View`: hides the role from the users' **Simplified View** in **View
      Permissions** dialog. This setting does not apply to roles which are either inferred or have
      workflow states which require manual action.
    - `Arguments Expression`: when using a connection for automatic provisioning, C# expression used
      to compute a dictionary of strings in order to compute the arguments of
      [provisioning](/docs/identitymanager/6.1/user-guide/administrate/provisioning/index.md)
      orders, such as the identifier of the workflow to launch within Usercube, or the identifier of
      the user's record to copy.
      [Find examples](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md).
    - `Allow Addition`: enables Usercube to automatically create new resources in the managed system
      when their owners are given the right entitlements. Otherwise, resource managers must create
      resources manually directly in the managed system.

        > Consider a role `SAP` which assigns an SAP account to a user. Consider also that SAP
        > accounts are configured with `Allow Addition` disabled. In this case, if we give the role
        > `SAP` to a user, then said user doesn't automatically receive an SAP account. The relevant
        > resource manager must create an account for said user in the SAP application.

    - `Allow Removal`: enables Usercube to automatically deprovision resources in the managed system
      when their owners are deprived of the right entitlements. Otherwise, Usercube is able to
      delete resources in the managed system only with a manual approval on the **Resource
      Reconciliation** screen.

        > Consider a role `SAP` which assigns an SAP account to a user. Consider also that SAP
        > accounts are configured with `Allow Removal` disabled. Finally, consider a given user who
        > has the role `SAP` and the corresponding SAP account. In this case, if we deprive said
        > user from the role `SAP`, then the SAP account isn't automatically deleted. Usercube
        > displays this assignment as non-conforming on the **Resource Reconciliation** page, and
        > the relevant resource manager must confirm the account deletion.

        **Allow Addition / Allow Removal:**

        These options set to `No` are interesting especially in testing mode when the role model
        isn't entirely reliable yet.

    - `Remove If Orphaned`: enables Usercube to automatically deprovision resources when their owner
      is deleted. Otherwise, said resources are displayed on the
      [**Resource Reconciliation**](/docs/identitymanager/6.1/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md)
      screen. Can be activated only if `Allow Removal` is activated too.
    - `Require Provisioning Review`: forces an additional mandatory review of all
      [provisioning](/docs/identitymanager/6.1/user-guide/administrate/provisioning/index.md)
      orders for the resource type (on the
      [**Provisioning Review**](/docs/identitymanager/6.1/user-guide/administrate/provisioning/provisioning-review/index.md)
      screen).

        > Consider AD accounts. While nominative accounts can be provisioned without specific
        > precautions (option set to `No`), administrator accounts sometimes require an additional
        > review (option set to `Yes`).

        This option can be bypassed when computing the role model by clicking on the **Compute Role
        Model, no provisioning review** job in the **Resource Type** frame on the connector's
        overview page.

    - `Discard Manual Assignments`: allows the provisioning of a new value computed by a
      provisioning rule for a property, based on a change in the source data, no matter the
      property's current workflow state.

        Set to `No`, any manual change of a property's value made directly in the target system will
        be "protected" (only after the change is approved in Usercube in **Resource
        Reconciliation**). It means that a future change in the source data will not trigger the
        provisioning of the new value. Instead, Usercube will keep the value of the manual change,
        and state the value as `Questioned`.

        > Consider an HR system (source) whose data isn't often synchronized into Usercube. Let's
        > say that a user marries and changes their name. In this case, the value in Usercube needs
        > to be updated (via workflows) so that all managed systems are updated too with the new
        > name. However, `Discard Manual Assignments` should be enabled because the HR system should
        > still be the authoritative source in case of another change.
        >
        > [See a full example](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md).

    - `Correlate Multiple Resources`: enables Usercube to link a single owner to several existing
      target objects from this resource type.

        > Consider records, representing users' positions in the resource type
        > `User Record (from HR)`. In some organizations, one user can have several records at once,
        > or have several records that overlap, and these records can be created either via
        > Usercube's workflows or via the upload of an HR file. Thus, on the one hand it is complex
        > to anticipate the number of records created for an identity, on the other hand there
        > shouldn't be records without an owner. In other words, when creating a new record via a
        > workflow, we want the record to be linked to the right user, whether or not a record is
        > already linked to the user's HR sheet. Therefore, the correlation of multiple resources
        > (of the same resource type) to a single owner should be permitted.

    - `Transmitted State Validity`: The period in minutes during which fulfillment orders can stay
      in Transmitted/Executed state. When the time is exceeded the orders are set in error state.
    - `Depends On Resource Type`: potential resource type (other than the one presently created)
      which must be provisioned for a given identity before this resource type can be created for
      said identity.

        > This option can be used so that a user must have an AD account before they can own an
        > Exchange account, because the Exchange account needs the AD account's address.
        > [Find a full example](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md).

    - `Depends On Owner Property`: potential properties which must be filled for a given identity
      before this resource type can be created for said identity.

        > This option can be used so that a user must have a ServiceNow identifier before they can
        > own an AD administrator account, because the AD administrator account needs this random
        > identifier computed by ServiceNow in order to be able to perform manual provisioning in
        > ServiceNow.
        > [Find a full example](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md).

3. Fill the **Fulfill Settings** arguments according to the selected
   [package](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/index.md).

    Integrators need to know the required
    [provisioning](/docs/identitymanager/6.1/user-guide/administrate/provisioning/index.md)
    connection, especially whether the connection is about manual or automated provisioning.
    Automatic provisioning means that Usercube writes in the managed system. Manual provisioning
    means that Usercube isn't allowed to write directly inside the managed system, and thus it
    creates tickets so that resource managers perform the needed changes.

4. Click on **+ Create & Close** > **Create**.

## Verify Resource Type Creation

In order to verify the process, check that the resource type has been added with the right options
to the list on the **Access Roles** page, accessible from the home page in the **Administration**
section.

![Home - Access Roles](/images/identitymanager/6.1/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

![Test Connector](/images/identitymanager/6.1/user-guide/set-up/categorization/resource-type-creation/resourcetype_test_v602.webp)
