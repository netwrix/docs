---
title: "Manage the Local Security Question Pool"
description: "Add questions from the global pool or your own questions to an identity store's local pool, or remove questions that users no longer need."
keywords:
  - local question pool
  - global question pool
  - security questions
  - identity store
  - security question enrollment
sidebar_position: 130
---

# Manage the Local Security Question Pool

When you create an identity store, Directory Manager adds four questions from the global question pool to the identity store's local pool by default. Each identity store maintains its own local pool.

You can modify a local pool in these ways:

- Add questions from the global question pool.
- Add questions of your choice that aren't in the global pool.
- Remove questions from the local pool.

To enroll using security questions, identity store users must select a certain number of questions from the local pool and provide answers.

## Add a question to the local pool from the global pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**. Then click **Security Questions**.
4. On the **Security Questions** page, click in the box at the top and select a question from the list of global security questions. To filter the list, enter a search string. After you select a question, click **Add**. The question is added to the **Questions** list.
5. Click **Save**.

## Add a question of your choice to the local pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**. Then click **Security Questions**.
4. On the **Security Questions** page, click in the box at the top and enter a security question. Then click **Add**. The question is added to the **Questions** list.
5. Click **Save**.

## Remove a question from the local pool

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**. Then click **Security Questions**.
4. On the **Security Questions** page, click **Remove** for a security question to remove it from the local pool. To remove all questions, click **Remove All**.
5. Click **Save**.

Deleting a question doesn't affect the users enrolled with the question.
