---
title: "Set Resources' Display Names"
description: "Set Resources' Display Names"
sidebar_position: 50
---

# Set Resources' Display Names

How to change the value of the display name for resources of an [Entity Type](../../../../integration-guide/toolkit/xml-configuration/metadata/entitytype).

## Overview

Here you will learn how to change a **resource's display name**, which is the name used by the UI to identify a resource of an entity type. Its value is computed from existing properties. For example for the entity type `HR - User`, integrators may set the display name to: `<Employee_Id> - <Last_name> <First_name>`.

![Display Name - Example](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_displaynameexample_v600.webp)

If you do not set your own display name, Identity Manager provides a default value based on the first scalar property after alphabetizing all the properties whose name contains `name`.

## Set the **resource's display name**

Set the **resource's display name** by proceeding as follows:

1. Start by creating the entity type with its calar properties and keys. See the [Define Scalar Properties](../../../../user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition) and [Select Primary Keys](../../../../user-guide/set-up/connect-system/entity-type-creation/key-selection) topics for additional information.
2. Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the top right corner.
3. On the entity type's definition page, click on the **Settings** tab.

    ![Display Name - Property Path](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_displayname_v603.webp)

4. Set the display name. As a display name, you can use either the value of an existing property, or compute [Expressions](../../../../integration-guide/toolkit/expressions) based on existing properties.

    > A resource from `AD - Entry` can be displayed using its `userPrincipalName` with predefined
    > functions.
>
    > ![AD Entity Type - Display Name](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplead4_v602.webp)
>
    > ![AD Entity Type - Display Name Result](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplead4-result_v602.webp)

    > Another example from the HR connector (User entity type):
>
    > ![HR User Entity Type - Display Name](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplehr_v602.webp)
>
    > ![HR User Entity Type - Display Name Result](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplehr-result_v602.webp)

5. Click on **Save & Close**.

Changes inside connectors won't take effect until the next [Synchronize Data](../../../../user-guide/set-up/synchronization). More specifically, changes in display names won't take effect until the next [Update Entity Property Expressions Task](../../../../integration-guide/toolkit/xml-configuration/jobs/tasks/server/updateentitypropertyexpressionstask) runs.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you should reload the schema to implement the changes. You do not need to click on the button every time. It is essential though to reload after the final changes are made.

![Reload](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Troubleshooting

If no property appears in the display name auto-completion, then:

![No Property](/images/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_troubleprop_v602.webp)

Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the top right corner of the screen.

