---
title: "Update the Directory Manager Signing Key"
description: "Update the application signing key in single-instance and clustered Directory Manager environments, and fix schedules that stop working afterward."
keywords:
  - directory manager signing key
  - update signing key
  - directory manager configuration tool
  - signing key utility
  - directory manager cluster
sidebar_position: 40
---

# Update the Directory Manager Signing Key

While configuring the Directory Manager machine, the Configuration Tool checks the status of the application's
Signing Key. The following scenarios are possible for the Signing Key:

- Single Directory Manager instance
- Multiple Directory Manager instances with a single cluster
- Multiple Directory Manager instances with multiple clusters

## Single Directory Manager instance

If you run the Configuration Tool on a machine that had a prior Directory Manager version and the
Signing Key utility wasn't applied to it, the Configuration Tool changes the Signing Key and
displays a disclaimer message on the Directory Manager is successfully configured page, as follows:

![Directory Manager is successfully configured page showing the Signing Key disclaimer](/images/directorymanager/11.1/install/configure/signkeydisclaimer.webp)

:::tip
After the Signing Key update, your existing schedules won't work because their
authentication mechanism is no longer valid. Update the authentication mechanism
for schedules using one of the following methods:
:::

- Signing Key Utility – See the Signing Key Utility guide for information on how to download the
  utility and update the schedules.
- Admin Center – See the Schedules topic and go to the respective schedule page to update its
  Authentication information.

## Multiple Directory Manager instances with a single cluster

In an environment with multiple Directory Manager instances in a single cluster (with a primary
node and a secondary node), where the instances had a prior Directory Manager version and the
Signing Key utility wasn't applied to them, complete the following steps to change the Signing Key on all the
instances:

Step 1 – Run the Configuration Tool on the primary node of the cluster. It changes the Signing
Key on the primary node and displays a disclaimer message on the Directory Manager is successfully
configured page as shown in the Single Directory Manager instance section.

Step 2 – Export the Signing Key so that the secondary node has the same Signing Key as the
primary node. See the
[Export a Signing Key](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md#export-a-signing-key) section
of the [Directory Manager Signing Key Utility](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md) topic for
information on how to export the Signing Key.

Step 3 – On the secondary node, copy the exported Signing Key file into a folder.

Step 4 – Run the Configuration Tool on the secondary node until you reach the Import Signing Key page of
the wizard:

![Import Signing Key page](/images/directorymanager/11.1/install/configure/importkey.webp)

1. Click **Browse** next to the Select file box to browse to the folder where you copied the
   Signing Key file.
2. Enter the password of the Signing Key file in the **Password** box.
3. Click **Next**.

Step 5 – The Configuration Tool displays the Directory Manager is successfully configured page
without the disclaimer.

![Directory Manager is successfully configured page without the disclaimer](/images/directorymanager/11.1/install/configure/success.webp)

:::tip
After the Signing Key update, your existing schedules won't work because their
authentication mechanism is no longer valid. Update the authentication mechanism
for schedules using one of the following methods:
:::

- Signing Key Utility – See the Signing Key Utility guide for information on how to download the
  utility and update the schedules.
- Admin Center – See the Schedules topic and go to the respective schedule page to update its
  Authentication information.

## Multiple Directory Manager instances with multiple clusters

Suppose you have an environment with multiple Directory Manager instances in multiple clusters (a
primary node and a secondary node in each cluster), for example:

- Cluster A (instance 1 is the primary node and instance 2 is the secondary node)
- Cluster B (instance 3 is the primary node and instance 4 is the secondary node)

To change the Signing Key on all four Directory Manager instances:

Step 1 – Run the Configuration Tool on the primary node of Cluster A (instance 1). It
changes the Signing Key on the primary node and displays a disclaimer message on the Directory Manager
is successfully configured page as shown in the Single Directory Manager instance section.

Step 2 – Export the Signing Key so that the secondary nodes of both the clusters also have the same
Signing Key as the primary node of Cluster A. See the
[Export a Signing Key](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md#export-a-signing-key) section
of the [Directory Manager Signing Key Utility](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md) topic for
information on how to export the Signing Key file.

Step 3 – On the secondary nodes of Cluster A and Cluster B (instances 2 and 4), copy the exported
Signing Key file into a folder.

Step 4 – Run the Configuration Tool on instances 2 and 4 until you reach the Import Signing Key page
of the wizard:

![Import Signing Key page](/images/directorymanager/11.1/install/configure/importkey.webp)

1. Click **Browse** next to the Select file box to browse to the folder where you copied the
   Signing Key file.
2. Enter the password of the Signing Key file in the **Password** box.
3. Click **Next**.

Step 5 – The Configuration Tool displays the Directory Manager is successfully configured page
without the disclaimer.

Step 6 – Run the Configuration Tool on the primary node of Cluster B (instance 3). The
Configuration Tool displays the Directory Manager is successfully configured page with the
disclaimer as shown in the Single Directory Manager instance section.

Step 7 – On the primary node of Cluster B (instance 3), run the
[Directory Manager Signing Key Utility](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md) and import the
copied Signing Key file using the cmdlet given in the
[Import a Signing Key](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md#import-a-signing-key) section
of the [Directory Manager Signing Key Utility](/docs/directorymanager/11.1/admincenter/service/securityservice/signkeyutility.md) topic.

:::tip
After the Signing Key update, your existing schedules won't work because their
authentication mechanism is no longer valid. Update the authentication mechanism
for schedules using one of the following methods:
:::

- Signing Key Utility – See the Signing Key Utility guide for information on how to download the
  utility and update the schedules.
- Admin Center – See the Schedules topic and go to the respective schedule page to update its
  Authentication information.

All Directory Manager instances now have the same Signing Key.
