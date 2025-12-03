---
description: >-
  Shows how to restrict end users from accessing the Netwrix Directory Manager
  Admin Center by modifying a security role’s Identity Store criteria.
keywords:
  - Netwrix Directory Manager
  - Admin Center
  - Admin Portal
  - restrict access
  - security role
  - Identity Store
  - Add Criteria
  - Show Advanced
products:
  - directory-manager
sidebar_label: Restrict Users from Accessing the Admin Portal
tags:
  - security-permissions-and-access-control
title: "Restrict Users from Accessing the Admin Portal"
knowledge_article_id: kA0Qk00000018A1KAI
---

# Restrict Users from Accessing the Admin Portal

## Question
Is it possible to restrict end users from accessing the Netwrix Directory Manager Admin Portal/Center?

## Answer
Yes, you can limit access to the Admin Portal/Center. To prevent end users from accessing the Admin Center and reduce the risk of unauthorized access, follow the steps below:

1. Log in to the **Netwrix Directory Manager Admin Center** and navigate to the **Identity Store** tab.
2. Open the settings for the Identity Store and go to the **Security Roles** section.
3. Edit the security role for which you want to restrict access.
4. Click the **Add Criteria** button then the **Show Advanced** button to display advanced filtering options.
5. Click **Add Criteria** again and configure the following:

| Field       | Condition | Value |
|-------------|-----------|-------|
| Client Name | is not    | `Admin Center` |

6. Click **Save** 3 times to apply your changes.

After completing these steps, users assigned to that security role will no longer be able to access the Admin Center.
