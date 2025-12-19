---
title: "Upgrade to the Latest Version"
description: "Upgrade to the Latest Version"
sidebar_position: 50
---

# Upgrade to the Latest Version

Netwrix recommends that you upgrade from the older versions of Netwrix Data Classification to the
latest version available in order to take advantage of the new features.

## Preparatory Steps

Before you start the upgrade, it is strongly recommended to take the following steps:

1. Make sure you have .NET Framework 4.7.2 installed on the computer where Netwrix Data
   Classification resides. If not, download it from Microsoft website:
   [Download .NET Framework 4.7.2](https://dotnet.microsoft.com/download/dotnet-framework/net472).
2. Back up NDC SQL database. For that:

    1. Start Microsoft SQL Server Management Studio and connect to SQL Server instance hosting this
       database.
    2. In Object Explorer, right-click the database and select Tasks → Back Up.
    3. Wait for the process to complete.

3. Back up the Index files. For that, it is recommended to do the following:
    1. On the computer where Netwrix Data Classification is installed, start Netwrix Data
       Classification Service Viewer tool. Select **Stop** next to each service.
    2. Locate the folder containing index files (default location is _C:\Program
       Files\ConceptSearching\ConceptDB_) and back it up.

**NOTE:** Consider that after the upgrade indexing mode will be set to the Compound Term.

## Upgrade Process

Seamless upgrade to Netwrix Data Classification 5.6.2 is supported for versions 5.5.4 and 5.5.3.

To upgrade your deployment, after taking the preparatory steps described above, run the product
setup and follow the wizard steps. When finished, all solution components will be up and running.

If you need to upgrade from an earlier version, you should perform a staged upgrade, e.g., 5.5.0 →
5.5.1 → 5.5.6.

## After the Upgrade

During the seamless upgrade from previous versions, Netwrix Data Classification preserves its
configuration, so you will be able to classify your data right after finishing the upgrade. However,
there are several steps you may need to take after upgrading:

1. Update taxonomies manually. For that:

    1. In administrative web console, navigate to Taxonomies → Global Settings.
    2. Click Update in the right corner next to each taxonomy

    ![update_taxonomy](/images/dataclassification/5.6.2/deployment/update_taxonomy.webp)

2. After the upgrade, indexing mode will be set to Compound Term mode. Refer to the following
   Netwrix knowledge base article for instructions on how to modify default Index Processing Mode:
   [How to modify Index Processing Mode](https://kb.netwrix.com/5353).
