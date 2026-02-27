---
title: "Upgrade to the Latest Version"
description: "Upgrade to the Latest Version"
sidebar_position: 50
---

# Upgrade to the Latest Version

Netwrix recommends that you upgrade from the older versions of Netwrix Data Classification to the
latest version available in order to take advantage of new features and fixes.

## Upgrade Prerequisites

Before you start the upgrade, it is strongly recommended to take the following steps:

**Step 1 –** Make sure you have .NET Framework 4.7.2 installed on the computer where Netwrix Data
Classification resides. If not, download it from Microsoft website:
[Download .NET Framework 4.7.2](https://dotnet.microsoft.com/download/dotnet-framework/net472).

**Step 2 –** Back up NDC SQL database. It is recommended to do the following:

- Start Microsoft SQL Server Management Studio and connect to SQL Server instance hosting this
  database.
- In the Object Explorer, right-click the database and select **Tasks** > **Back Up**.
- Wait for the process to complete.

**Step 3 –** Back up the Index files. It is recommended to do the following:

- On the computer where Netwrix Data Classification is installed, start the Netwrix Data
  Classification Service Viewer tool. Select **Stop** next to each service.
- Locate the folder containing index files (the default location is _C:\Program
  Files\Netwrix\Data Classification\Index_) and back it up.

**Step 4 –** For versions of 5.7 prior to 5.7.10, it was necessary to have all NDC services and the NDC
IIS Application Pool running as the same service account. For 5.7.10 onwards this is no longer necessary, but if upgrading
from an earlier version of 5.7 you should complete the upgrade to 5.7.10 _before_ changing the service account
to prevent any possible issues with the upgrade process.

## Upgrade Process

It is only possible to upgrade directly to Netwrix Data Classification 5.7 from versions 5.5 and newer.

To upgrade your deployment, after taking the preparatory steps described above, run the product
setup and follow the wizard steps. When finished, all solution components will be up and running.

If you need to upgrade from an earlier version, you will need to perform a staged upgrade: first upgrade
to version 5.5, then perform a second upgrade to version 5.7.

## Upgrading a DQS environment

When upgrading an NDC environment which utilises the **Distributed Query Server** functionality, the primary server
should be upgraded first before upgrading the secondary instance(s).

If you are upgrading to 5.7.10 or later from an earlier version of 5.7, if possible you should
run the installer as the NDC service account. If this is not done, you will need to perform a DQS
resynchronisation when upgrading each secondary DQS instance. For further details on this process,
see the [DQS Instructions](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md) page.

## After the Upgrade

During the seamless upgrade from previous versions, Netwrix Data Classification preserves its
configuration, so you will be able to classify your data right after finishing the upgrade. However,
there are several steps you may need to take after upgrading.

Follow the steps to update taxonomies manually.

**Step 1 –** In administrative web console, navigate to **Taxonomies** > **Global
Settings**.Settings.

**Step 2 –** Click **Update** in the right corner next to each taxonomy.

![update_taxonomy](/images/dataclassification/5.7/requirements/update_taxonomy.webp)

The upgrade is now complete.
