---
title: "Create a Category"
description: "Create a Category"
sidebar_position: 20
---

# Create a Category

How to structure roles into categories. See the
[Category](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/category/index.md)
topic for additional information.

## Overview

A category is usually created to:

- reflect the validation process, i.e. represent groups of roles that follow the same validation
  process with the same validator(s);
- help users find intuitively the entitlement that they are looking for.

> For example, creating one category per application often fulfills both requirements.

There is usually one validator per category.

There can be several category levels. For example, integrators can choose to create one category per
department, then one per position, and finally one per application. They usually gather roles by
application. Here are a few examples of categories: `AD`, `HR` , `SAP`, `IT Administration`,
`Test Environments`, etc. Some of these "application categories" are gathered into larger categories
by theme as long as their role owner is identical.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                   | Output     |
| ----------------------- | ---------- |
| Role Catalog (optional) | Categories |

See the [Create Roles in the Role Catalog](/docs/identitymanager/6.2/user-guide/set-up/single-roles-catalog-creation/index.md) topic for additional information.

## Create a Category

Categories are not mandatory to create roles, but they are highly recommended to organize single
roles.

Create a category by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Access Roles** to access the roles
   page.

    ![Home Page - Access Roles](/images/identitymanager/saas/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

2. All existing categories are shown in the menus on the left. To create a new category, click on
   **+**.

    ![Add a New Category](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/category-creation/singlerolescatalog_newcategory_v602.webp)

3. Fill in the fields.

    ![Create a Category](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/category-creation/singlerolescatalog_createcategory_v602.webp)

    - `Identifier`: must be unique among categories and without any whitespace.
    - `Name`: will be displayed in the UI to identify the created category.
    - `Collapsed in the role tree`: option that enables a collapsed view of the category in the role
      tree.
    - `Parent category`: optional link to an existing category that would contain the created
      category.

4. Click on **Create** and see the category added in the menus.

    When creating a category, you must be cautious about the associated validators that are not yet
    defined.

## Verify Category Creation

In order to verify the process, check on the **Access Roles** screen that the category is created
with the right parameters.

![Verify Category](/images/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/category-creation/categorycreation_test_v602.webp)
