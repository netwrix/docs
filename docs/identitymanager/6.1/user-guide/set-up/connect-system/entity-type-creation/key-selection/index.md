---
title: "Select Primary Keys"
description: "Select Primary Keys"
sidebar_position: 30
---

# Select Primary Keys

How to choose
[key properties](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
and a
[mapping key](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)
in order to uniquely identify the
[entity type](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)'s
resources at different points in a resource's lifecycle.

## Overview

Here you will learn how to select keys from among the entity type's scalar properties, in order to
ensure the unique identification of resources at different times.

It is important to show caution when choosing the mapping key and key properties for a set of data.
Every extracted resource must have unique keys in order to be uniquely identified in all IGA actions
performed by Usercube.

### Key properties

The key property of an entity type is a property chosen from among scalar properties. A key property
is used only in the XML configuration, but required when working both from the UI or from the XML
configuration.

The purpose of key properties is to uniquely identify a resource from the entity type in the XML
configuration. In particular, some rules need to fetch a resource, by querying the key property's
column in Usercube's database.

> For example a navigation rule involving an AD group can be written:
>
> ```
>
> <NavigationRule Property="memberOf" Resource="CN=SG_APP_AG002,OU=Applications,DC=acme,DC=internal" SingleRole="AG002" />
>
> ```
>
> Usercube needs to know what column to query to find the right resource via `CN=SG_APP_AG002...`.
> In this example we must choose `dn` as a key property because it is the `dn` property we use to
> represent the AD resource.

Key properties must be unique and immutable. They do not have to be immutable but they must enable
resources to be uniquely identifiable at t time.

> The `dn` attribute of a resource in the Active Directory usually depends on the resource's
> position, which often changes during the resource's lifecycle. However, `dn` is unique at a given
> time, and rather useful to define for example
> [query rules](/docs/identitymanager/6.1/user-guide/set-up/provisioning-rule-creation/index.md)
> for `parentdn`.

Only one key property is required, but using several key properties can sometimes help with the
rules in the XML configuration. Usercube will search the columns of each key property, one by one,
until a corresponding resource is found.

> For example, the AD's unique identifier is `objectGuid`. However, integrators may prefer to use
> `dn` because it constitutes a clearer group identification from a user's point of view. Plus,
> `objectGuid` is environment-specific so using it can complexify a situation where we want to move
> the configuration from an environment to another.
>
> Since an `objectGuid` can still be an interesting identifier, we want to have both the `dn` and
> the `objectGuid` as key properties. In this case, Usercube will be able to fetch a resource in a
> rule using said resource's `dn` or `objectGuid`.

### Mapping key

The mapping key is also chosen from among scalar properties, and serves to uniquely identify any
resource during
[synchronization](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md).
It must be unique and immutable, i.e. must not change during the whole lifecycle of the resource.

> A mapping key cannot be based on properties subject to change, such as the display name of any
> object, or users' title which could be renamed.
>
> For example, resources from the AD are usually identified through the `objectGuid` attribute which
> is therefore specified as mapping key.

Commonly used mapping keys are:

- `objectGuid` for the Active Directory
- `objectid` for Microsoft Entra ID
- `entryUuid` for LDAP
- `Identifier` for the directory
- `Login` for SAB
- `sapid` for SAP
- `sys_id` for ServiceNow
- `EmployeeId` for the HR

Since the mapping is able to uniquely identify any resource, NETWRIX recommends that your mapping
key is always part of your key properties.

## Select the Entity Type's Keys

Create an entity type by proceeding as follows:

1. Start by
   [defining the entity type's scalar properties](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/index.md).

    ![Keys](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_keys_v522.webp)

2. In the entity type's **Properties** section, choose the key properties.
3. Choose the mapping key.
4. Click on **Create & Close** > **Create** to save your changes.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

After the entity type is created with its scalar properties and keys, you can
[define navigation properties](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/index.md)
and/or
[set the resources' display name](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/index.md).
