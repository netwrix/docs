---
title: "Create the Entity Type"
description: "Create the Entity Type"
sidebar_position: 10
---

# Create the Entity Type

How to create the technical container of an [Entity Type](../../../../integration-guide/toolkit/xml-configuration/metadata/entitytype).

## Overview

Here, you will learn how to create an [Entity Type](../../../../integration-guide/toolkit/xml-configuration/metadata/entitytype): the shell that harbors the (scalar and navigation) properties which describe a given set of resources related to one managed system.

## Create the Entity Type

Create the entity type by proceeding as follows:

1. Access the connector's page by clicking on the **Connectors** button on the home page in the
**Configuration** section, then on the relevant connector.

    ![Home page - Connectors](/images/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the connector's page, in the **Entity Types** frame, click on the addition button.

    ![Addition Icon](/images/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

3. Fill in the information fields.

    ![Entity type creation](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_entitytypecreation_v602.webp)

    - `Identifier`: must be unique among entity types, without any whitespace, and be C#-compatible.
[See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure). NETWRIX recommends using `<connector>_<notion>` in the singular.
    - `Name`: will be displayed in the UI to identify the entity type.
    - `Icon`: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and
will be displayed with the entity type in the left menu of the home page.
    - `Auto Complete in Pickers`: can be set once properties are created (and saved) so that, when
using a searchbar for selected properties, Identity Manager suggests existing entries.

4. In the entity type's **Properties** section, choose a source so that the connection provides the
source's data structure.

    ![Properties' source](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_propertiessource_v522.webp)

    > Let's use the example of an AD connector. We create an entity type `AD - Entry` to gather the
    > valuable information from the AD, i.e. all the AD entries (groups and accounts) which we want
    > to classify, with the properties that are useful for assignment management.
>
    > The AD connector uses as a source `Connection Active Directory - entries`. Its structure was
    > retrieved when we refreshed the schemas of the `Active Directory` >
    > [Create a Connection](../../../../user-guide/set-up/connect-system/connection-creation), thus retrieving the attributes from
    > the Active Directory and storing them temporarily on the agent side, inside CSV files.

## Next Steps

To continue, [Define Scalar Properties](../../../../user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition)for this entity type.

## Troubleshooting

If there are no connection tables available in the **Source** dropdown list of an entity type, then:

![Properties' source](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_propertiessource_v522.webp)

Ensure that there are existing connections:

- if this is the case, then click on **Refresh all schemas** on the connector page, and verify that
there is no error. See the [Create a Connection](../../../../user-guide/set-up/connect-system/connection-creation) topic for  additional information.
- if not, then you must create at least one connection.

If there is a message stating to refresh the connection's schema, then:

![No Connection Table Error](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_troubleshootingschema_v603.webp)

Start by making sure that the connection's schema is refreshed by clicking on **Refresh all schemas** on the connector page, and verify that there is no error.

If the message is still displayed, then it means that the previously selected connection table no longer exists in the managed system. In this case, either the table's name simply changed, or the table is not relevant anymore. Then you should find a relevant table in the **Source** dropdown list.

