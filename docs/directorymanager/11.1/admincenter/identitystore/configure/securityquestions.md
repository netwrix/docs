---
title: "Manage the Local Question Pool"
description: "Manage the Local Question Pool"
sidebar_position: 130
---

# Manage the Local Question Pool

When you create a new identity store, four questions from the global question pool are added to the
identity store’s local pool by default. A local pool is maintained individually by each identity
store. You can modify a local pool by (a) adding questions from the global question pool, (b) adding
questions of your choice (questions that are not in the global pool), and (c) by removing questions
from it.

To enroll using security questions, identity store users must select a certain number of questions
from the local pool and provide answers.

## Add a Question to the Local Pool from the Global Pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Security Questions**.
4. On the **Security Questions** page, click in the box at the top and select a security question
   from the list of global security questions. You can also type a search string to filter the
   questions containing the string. After selecting a question, click **Add**. The question is added
   to the **Questions** list.
5. Click **Save**.

## Add a Question of your Choice to the Local Pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Security Questions**.
4. On the **Security Questions** page, click in the box at the top and type a security question.
   Then click **Add**. The question is added to the **Questions** list.
5. Click **Save**.

## Remove a Question from the Local Pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Security Questions**.
4. On the **Security Questions** page, click **Remove** for a security question to remove it from
   the local pool. To remove all questions, click **Remove All**.
5. Click **Save**.  
   Deleting a question does not impact the users currently enrolled with the question.