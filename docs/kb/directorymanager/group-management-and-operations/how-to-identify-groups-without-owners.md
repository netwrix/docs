---
description: >-
  This article shows how to use the Reports module in Netwrix Directory Manager
  11 to identify groups that lack a primary owner, additional owners, or any
  owners.
keywords:
  - Netwrix Directory Manager
  - groups
  - owners
  - reports
  - LDAP
  - Group Reports
  - Groups with no owner
  - Groups without additional owners
products:
  - directory-manager
sidebar_label: How to Identify Groups Without Owners
tags:
  - group-management-and-operations
title: "How to Identify Groups Without Owners"
knowledge_article_id: kA0Qk0000002CjRKAU
---

# How to Identify Groups Without Owners

## Overview

This article shows how to use the Reports module in Netwrix Directory Manager 11 to identify groups that lack a primary owner, additional owners, or any owners.

## Instructions

1. In the Directory Manager application portal, click the **Reports** tab on the left side of the dashboard page.

   ![Directory Manager application portal with Reports tab highlighted on the dashboard](./../0-images/ka0Qk000000Dxof_0EMQk00000BSZAz.png)

2. When the Reports module opens, click the **Group Reports** tab on the left side of the page.

   ![Group Reports tab selected in the Reports module](./../0-images/ka0Qk000000Dxof_0EMQk00000BSZ69.png)

3. To find groups without a primary owner, run the report titled **Groups with no owner**.

   ![Groups with no owner report selected in Group Reports](./../0-images/ka0Qk000000Dxof_0EMQk00000BSZ9N.png)

4. To find groups without additional owners, run the report titled **Groups without additional owners**.

   ![Groups without additional owners report selected in Group Reports](./../0-images/ka0Qk000000Dxof_0EMQk00000BSZ7l.png)

5. To find groups without both primary and additional owners, run either of the above reports. In the **Report Generation** wizard, replace the LDAP query with your custom query as needed.

   ![Report Generation wizard with LDAP query field](./../0-images/ka0Qk000000Dxof_0EMQk00000BSXh5.png)

6. Complete the wizard. The generated report will show groups that do not have a primary owner or additional owners.
