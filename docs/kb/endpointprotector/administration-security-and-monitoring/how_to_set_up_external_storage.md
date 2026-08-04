---
description: >-
  This article outlines how to configure external storage to conserve hard drive space on the server by directing shadows and backups to a remote location.
keywords:
  - external storage
  - server performance
  - storage management
sidebar_label: Set Up External Storage
tags:
  - administration-security-and-monitoring
  - kb
title: "How to Set Up External Storage"
knowledge_article_id: kA0Qk0000002B7LKAU
products:
  - endpointprotector
---

# How to Set Up External Storage

## Overview

This article outlines how to configure external storage to conserve hard drive space on the server. External storage in Endpoint Protector is the **File Shadow Repository** — it directs File Shadows (copies of files transferred by monitored endpoints) to a remote location instead of storing them on the appliance's local disk, which helps conserve server disk space and centralizes shadow storage.

:::note
System Backups are not affected by this setting. They are stored on and downloaded from the appliance itself; Endpoint Protector has no external storage destination for backups.
:::

Endpoint Protector supports the following repository types: FTP, Samba (smbv1), Azure File Storage and Samba (smbv2), and S3 Bucket. For the full configuration reference, including field requirements for each repository type and S3 Bucket-specific setup (regions, artifact retrieval methods, and domain whitelisting), see [File Shadow Repository](/docs/endpointprotector/admin/systemmaintenance/shadowrepository).

## Instructions

1. In the **Endpoint Protector Console**, navigate to **System Maintenance > File Shadow Repository**.
2. Click **Add**, then assign one or more **Departments** to the repository.

:::note
In Endpoint Protector, a Department defines a collection of entities that share the same attributes. Don't confuse it with a department from an organizational chart.
:::

3. Select the **Repository Type**: **FTP**, **Samba (smbv1)**, **Azure File Storage and Samba (smbv2)**, or **S3 Bucket**.
4. Complete the fields required for the selected repository type — Repository IP Address, Port, Folder Path, Username, and Password for FTP and Samba types, or the S3-specific fields for S3 Bucket. See [File Shadow Repository](/docs/endpointprotector/admin/systemmaintenance/shadowrepository) for the full field list per type.
5. Save your settings.
6. Wait a few minutes, then click **Test** to verify that the server can connect to the external storage and copy or create files.

:::note
The **Test** button only supports FTP and S3 Bucket (Indirect Artifact Retrieval) repositories. It isn't supported for Samba v1, Samba v2, Azure File Storage, or S3 Bucket (Direct Artifact Retrieval), due to additional third-party requirements such as IP whitelisting.
:::

7. Successful access is confirmed by the creation of three folders and a .txt file in the external storage location.