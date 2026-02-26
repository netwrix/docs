---
description: >-
  This article provides step-by-step instructions to verify the permissions of the account used in Netwrix Enterprise Auditor for the AD_DomainControllers job.
keywords:
  - Active Directory
  - Netwrix Enterprise Auditor
  - permissions
sidebar_label: Confirm Permissions for AD Domain Controllers
tags:
  - permissions-and-access
title: "How to Confirm Permissions for Active Directory > 5. Domains > 0.Collection > AD_DomainControllers"
knowledge_article_id: kA0Qk0000001hNtKAI
products:
  - onesecure
---

# How to Confirm Permissions for Active Directory > 5. Domains > 0.Collection > AD_DomainControllers

## Question

How can you verify if the account used in Netwrix Enterprise Auditor (NEA) for this job has the correct access?

## Answer

The AD_DomainControllers job for the NEA Active Directory module uses the following permissions for a least privilege model:

- Read access to CN=Servers, %SITEDN% and its children
- Read access to %PARTITIONDNS% and its children
- Read access to %SCHEMADN%
- Read access to %SITESDN% and its children

### General Steps to Start with `ldp.exe`

1. Launch **`ldp.exe`**.
   - Press **`Win + R`**, type **`ldp.exe`**, and hit **`Enter`**.
2. Connect to a **Domain Controller**.
   - Navigate to **Connection > Connect**.
   - Enter the Domain Controller name used by the **AD_DomainControllers job** and port (default is `389` or `636` for LDAPS).
   - Click **OK**.
3. Bind Using the **User Account**.
   - Go to **Connection > Bind**.
   - Enter the **credentials** for the **user account** whose access you want to test.
   - Click **OK**.

### Testing Read Access to CN=Servers, %SITEDN% and Its Children

1. Navigate to **`CN=Servers,%SITEDN%`**.
   - Click **View > Tree**.
   - Enter the Base DN:
     ```
     CN=Servers,CN=<SiteName>,CN=Sites,CN=Configuration,DC=<DomainComponent>,DC=<DomainComponent>
     ```
     - Replace **`<SiteName>`** with the site name (e.g., `Default-First-Site-Name`).
       - If unsure, run **`nltest /dsgetsite`** from AdminPS on the DC to get the SiteName.
     - Replace **`<DomainComponent>`** with your domain components (e.g., `example,DC=com`).
   - Click **OK**.
2. Verify **Access**.
   - Expand **`CN=Servers`** and check if you can browse and view its children.
   - If successful, then the user has **Read access**.

### Testing Read Access to %PARTITIONDNS% and Its Children

1. Navigate to the **Partition DN**.
   - Click **View > Tree**.
   - Enter the Base DN:
     ```
     DC=<DomainComponent>,DC=<DomainComponent>
     ```
     - Use your domain's **distinguished name** (e.g., `DC=example,DC=com`).
   - Click **OK**.
2. Verify **Access**.
   - Expand the **domain node** and check if you can view objects and attributes within it.
   - If you can browse the structure, then the user has **Read access**.

### Testing Read Access to %SCHEMADN%

1. Navigate to the **Schema DN**.
   - Click **View > Tree**.
   - Enter the Base DN:
     ```
     CN=Schema,CN=Configuration,DC=<DomainComponent>,DC=<DomainComponent>
     ```
     - Replace **`<DomainComponent>`** with your domain components.
   - Click **OK**.
2. Verify **Access**.
   - Expand **`CN=Schema`** and check if you can view its objects and attributes.
   - If successful, then the user has **Read access** to the schema.

### Testing Read Access to %SITESDN% and Its Children

1. Navigate to the **Sites DN**.
   - Click **View > Tree**.
   - Enter the Base DN:
     ```
     CN=Sites,CN=Configuration,DC=<DomainComponent>,DC=<DomainComponent>
     ```
     - Replace **`<DomainComponent>`** with your **domain components**.
   - Click **OK**.
2. Verify **Access**.
   - Expand **`CN=Sites`** and check if you can browse through the sites and view their child objects.
   - If successful, then the user has **Read access** to the sites.