---
title: "CleanDatabaseJob"
description: "Creates the job to clean old tasks and jobs instances with state InProgress"
sidebar_position: 1
---

Creates the job to clean old tasks and jobs instances with state InProgress



## Examples


```xml
  <CleanDatabaseJob />
```



## Generated XML

This example generates the following configuration:

```xml
<Job Identifier="CleanDatabase" DisplayName_L1="Clean Database">
  <CleanDataBase Identifier="CleanDatabase_CleanDataBase" DisplayName_L1="Clean Database" DisplayName_L2="Nettoyage de la base de données" Level="0" />
</Job>

```