---
title: "SearchBarPageAccessControl"
description: "Gives access rights to the different navigation elements of the SearchBars of the pages of the role model."
sidebar_position: 2
---

The Scaffolding giving access to the different views of the pages of the role model do not give access rights to the different navigation elements of the SearchBars of these pages.
This Scaffolding allows you to give these rights per page, profile and EntityType.

## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Child Elements
* [SearchBarPage](#searchbarpage) (optional) Adds right for a search bar in a specific page

### SearchBarPage


|Property|Details|
|---|---|
| SearchBarPage <span class="optionalAttribute">default value: None</span> | **Type:** SearchBarPageType **Description:** For the scaffolding arguments `SearchBarPage` and `SearchBarPageAccessControl`, location of the search bar.`0` - None.`1` - ReviewRoles.`2` - ReconciliateRoles.`3` - ReviewProvisioning.`4` - PerformManualProvisioning.`5` - ReconciliateResources.`6` - WorkflowOverview. |


