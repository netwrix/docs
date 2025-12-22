---
title: "Define Scalar Properties"
description: "Define Scalar Properties"
sidebar_position: 20
---

# Define Scalar Properties

How to define the simple, or scalar, properties of an
[entity type](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)'s
resources.

## Overview

Here you will learn how to define scalar properties, which contain scalar values, mostly based on
the properties from the corresponding managed system.

> For example: `DisplayName`; `Email`; `Identifier`; `StartDate`; etc.
>
> ![Scalar Properties](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarex_v600.webp)

Most often, properties inside Usercube are each linked to a property from the managed system. This
way, data from the managed system can be imported into Usercube and stored in the corresponding
property. These properties are mapped from the source (see step 2).

If the property to be created does not exist in the external source, it is impossible to map the
property, but it can still be created with **+ Add a scalar property**.

This can be used to store data needed for assignment management, but which you cannot write to the
connected system. Since these properties do not exist in the connected system, they cannot be
written or read.

For example, we may need to create in the AD the property `isUnused` to spot unused accounts. It
would be configured with a C# expression based on other properties from the same entity type. These
properties, such as `accountExpires` and `lastLogonTimestamp`, are each linked to a property from
the AD, while `isUnused` is for governance and surveying AD accounts.

Such properties do not exist in the AD, and thus will never be written to the AD, nor overwritten by
any property from the AD, but will be recalculated based on the other properties.

## Define the Entity Type's Scalar Properties

Define the entity type's scalar properties by proceeding as follows:

1. Start by
   [declaring the entity type](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/index.md).
2. In the entity type's **Properties** section, click on **Map scalar properties** to display
   existing columns from the external source, and select the properties to be used in the entity
   type.

    ![Map from source](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarpropertiesmap_v602.webp)

    You need to configure at least one property to be able to define primary keys later, and thus
    create an entity type.

3. Fill in the information fields.

    ![Scalar properties](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarproperties_v603.webp)

    - **APPLICATION METADATA**: fields about the future display of the properties inside Usercube.

        - `Identifier`: must be unique among properties, without any whitespace, and be
          C#-compatible.
          [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
        - `Name`: will be displayed in the UI to indicate the property.

            Entity properties' names and identifiers cannot be "Id".

        - `Format`: format used for the property's display in Usercube, for search tools and
          computation based on said property. Do not keep the default string format if the property
          is not a string.
          [See more details on available formats](/docs/identitymanager/6.1/integration-guide/connectors/entitypropertymapping-format/index.md).

            > For example, dates, booleans, integers, etc.

            For one entity type, Usercube can store up to 128 scalar properties of any format, and
            an unlimited number of binaries which are stored differently. Among these 128
            properties, only 4 can be formatted as more-than-443-character strings (with a limit of
            4,000 characters), and 124 as less-than-443-character strings.

    - **EXTERNAL SYSTEM**: fields about the corresponding properties inside the connected system.

        - `Source Column`: column in the external system where the property data comes from.
          Advanced settings can be configured according to the description below.
        - `Format`: for mapped properties, format used to convert a value during export and fulfill
          from Usercube to the connected system, whenever different from a string.
            > To continue with the `AD - Entry` entity type, we map all the properties we need:
            >
            > `accountExpires`; `c`; `cn`; `comment`; `company`; `department`; `description`;
            > `displayName`; `division`; `dn`; `employeeId`; `employeeNumber`; `employeeType`;
            > `extensionAttribute10`; `extensionAttribute11`; `givenName`; `groupType`;
            > `homeDirectory`; `homeDrive`; `initials`; `l`; `lastLogonTimestamp`; `mail`; `mobile`;
            > `objectCategory`; `objectGuid`; `objectSid`; `ou`; `pwdLastSet`; `rdn`;
            > `sAMAccountName`; `scriptPath`; `sn`; `st`; `telephoneNumber`; `thumbnailPhoto`;
            > `title`; `uid`; `userAccountControl`; `userPrincipalName`; `whenCreated`.
            >
            > We create the properties that do not exist in the external system: `AppName`;
            > `businessCategory`; `isUnused`; `thumbnailPhotoTag`.
            >
            > Some of them have a specific format in case of provisioning to the managed AD like
            > `thumbnailPhoto` of format `Binary` or `objectCategory` as `RDN` or `pwdLastSet` as
            > `1601 Date`.
            >
            > ![AD Entity Type - Scalar Properties](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_examplead2_v602.webp)

4. Click on the Gear symbol to add advanced settings if needed.

    ![Advanced Settings](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_propertiessettings_v602.webp)

    - `Icon`: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and
      will be displayed with the property among users' data.
    - **Source Expression**: expression that defines the property based on at least one source
      object. Can be defined by a property path and/or an
      [expression](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/index.md).

        > For example, `isUnused` is created to spot unused accounts via a combination of
        > `accountExpires` and `lastLogonTimestamp`:
        >
        > ![Advanced Settings](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_sourceexpressionexample_v60.webp)

    - `Flexible Comparison Expression`: expression that inserts adaptable
      [comparison flexibility](/docs/identitymanager/6.1/user-guide/set-up/provisioning-rule-creation/index.md)
      when using a searchbar for the property.
    - `History Precision`: time period over which Usercube historically records only one value.

        > For example, the `lastLogonTimestamp` property of an AD resource is modified every time
        > the user connects to the application. Every modification triggers the historization of all
        > properties for said resource inside the database. Hence, the database can quickly become
        > full of data. In order to lighten the database, we can set the `History Precision` option
        > to one week (10080 minutes) so that resources are historized once a week at most
        > (concerning changes on `lastLogonTimestamp`). In the meantime, in case of a change,
        > instead of historizing resources with all their properties, only `lastLogonTimestamp` is
        > updated with the new value.

    Clicking on **Continue** closes the pop-up window so that you can continue the configuration of
    the entity type. But it does not save anything.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

Before saving, you must first
[choose the entity type's keys](/docs/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/key-selection/index.md)
from among scalar properties.

## Troubleshooting

#### If the Format column is not displayed in the External System part, then�

![Scalar properties](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarpropertieswithoutformat_v522.webp)

Refresh the connections' schemas.
