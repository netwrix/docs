---
title: "Customization Reports"
description: "Customization Reports"
sidebar_position: 70
---

# Customization Reports

Flashlight provides a set of useful reports to help you ensure that your account customizations
follow NetSuite best practices. It is recommended to regular review these reports and take
corrective action so that your customizations are aligned with NetSuite best practices.

The following reports can be accessed from Flashlight main menu under the **Customizations** menu:

- Customizations with Standard Script Ids
- Customizations with Missing Descriptions
- Customizations with Missing Active Owner
- Fields with Missing Help
- Deleted Customizations

## Customizations with Standard Script Ids

It is a best practice to use Script IDs that are unique, short, and descriptive. Users often set
Script IDs that do follow these best practices, or they do not set any Script IDs which causes
NetSuite to apply a default value.

This report provides a list of all customizations in the system that have Script IDs not aligned
with NetSuite's best practices.

![Customizations with Poor Script IDs](/images/platgovnetsuiteflashlight/using_flashlight/poorscriptids_800x284.webp)

To correct this issue on a specific customization record:

1. Click **Edit** for the customization to fix.
2. Enter an appropriate **SCRIPTID** .
3. Click **Save**

## Customizations with Missing Descriptions

Each object in NetSuite should have a Description that explains what the object is and how it is
used in the system. This report provides a list of all customizations in your account that have no
description.

![Customizations with Missing Descriptions](/images/platgovnetsuiteflashlight/using_flashlight/missingdescriptions_800x339.webp)

To correct this issue on a specific customization record:

1. Click **Edit** for the customization to fix.
2. Enter an appropriate **DESCRIPTION**
3. Click **Save**

## Customizations with Missing Active Owners

It is very common for a record owner to be inactive in the system due to employees departing from
the organization. If an inactive employee is the owner of a field or record in the system, it could
be harmful for your account. This report displays a list of all customizations in the system that
currently have inactive employees as owners.

![Customizations with Missing Active Owner](/images/platgovnetsuiteflashlight/using_flashlight/activeowners_800x314.webp)

To correct this issue on a specific customization record:

1. Click **Go To Record** to open the actual record in NetSuite.
2. Click **Edit**
3. Select a new **Owner**
4. Click **Save**

## Fields with Missing Help

It is a best practice to include help text on your fields so that your employees can better
understand what the field does and how to use it. This report displays a list of all the fields in
the system that are missing help text.

![Customizations with Missing Help](/images/platgovnetsuiteflashlight/using_flashlight/missinghelp_800x316.webp)

To correct this issue on a specific customization record:

1. Click **Go To Record** to open the actual record in NetSuite.
2. Click **Edit**
3. Update the help.
4. Click **Save**

## Deleted Customizations

This report displays a list of all customizations in your account that were deleted. This enables
you to easily spot undesired removals and resolve them quickly.

![Deleted Customizations](/images/platgovnetsuiteflashlight/using_flashlight/deletedcustos_800x309.webp)
