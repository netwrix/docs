---
title: "Manage the Global Question Pool"
description: "Add or remove security questions in the global question pool that Directory Manager uses for user enrollment and authentication."
keywords:
  - global question pool
  - security questions
  - Directory Manager enrollment
  - Admin Center settings
sidebar_position: 110
---

# Manage the Global Question Pool

Directory Manager provides a list of predefined security questions for enrollment and authentication. You can add questions to this list or remove them.

When you create an identity store, Directory Manager adds four questions from the global pool to the identity store's local question pool. The local pool isn't shared with other identity stores.

## Add a question to the question pool

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Directory Manager Settings** page, click the **Question Pool** tab.
3. Click **Add New Question**.
4. In the **Add New Question** dialog box, enter a security question in the **Question** box and click **Add Question**.

   The new question appears on the **Question Pool** tab. Questions are sorted alphabetically.

**Search for a question in the list:**

To search for a question, enter a search string in the search box and press **Enter**. The list shows the questions that contain the string.

## Remove a question from the question pool

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Directory Manager Settings** page, click the **Question Pool** tab.
3. On the **Question Pool** tab, click **Delete** for the question you want to remove.
4. In the **Delete Question** dialog box, click **Delete**.

   Deleting a question doesn't affect the users enrolled with that question.
