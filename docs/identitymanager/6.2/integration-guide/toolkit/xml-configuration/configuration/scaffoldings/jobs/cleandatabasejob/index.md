---
title: "Clean Database Job"
description: "Clean Database Job"
sidebar_position: 10
---

# Clean Database Job

Creates the job to clean old tasks and jobs instances with state InProgress.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

**<CleanDatabaseJob />**

```

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<Job Identifier="CleanDatabase" DisplayName_L1="Clean Database">
  <CleanDataBase Identifier="CleanDatabase_CleanDataBase" DisplayName_L1="Clean Database" DisplayName_L2="Nettoyage de la base de données" Level="0" />
</Job>

```
