---
title: "Manage the Global Question Pool"
description: "Add or remove security questions in the global question pool that Directory Manager uses for user enrollment and authentication."
keywords:
  - global question pool
  - security questions
  - Directory Manager enrollment
  - Admin Center settings
sidebar_position: 90
---

# Manage the Global Question Pool

Directory Manager provides a list of predefined security questions for enrollment and authentication. You can
update this list by adding or removing questions.

When you create an identity store, Directory Manager automatically adds four questions from this global pool to
the identity store's local question pool. This pool isn't shared with other identity stores.

What do you want to do?

- [Add a Question to the Question Pool](#add-a-question-to-the-question-pool)
- [Remove a Question from the Question Pool](#remove-a-question-from-the-question-pool)

## Add a Question to the Question Pool

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **GroupID Settings** page, click the **Question Pool** tab.
3. To add a question, click **Add New Question**.
4. On the **Add New Question** dialog box, enter a security question in the **Question** box and
   click **Add Question**.  
   The new question is displayed on the **Question Pool** tab. Questions are sorted in
   alphabetical order.

**Search for a question in the list:**

To search for a security question in the list, enter a search string in the search box and press
**Enter**. Questions that contain the string are filtered.

## Remove a Question from the Question Pool

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **GroupID Settings** page, click the **Question Pool** tab.
3. On the **Question Pool** tab, click **Delete** for a question to delete it.
4. Click **Delete** on the **Delete Question** dialog box.  
   Deleting a question doesn't impact the users enrolled with the question.

**See Also**

- [Set Up Security Question Authentication in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/setupauth/securityquestions.md)
- [Configure a Password Policy for a Security Role ](/docs/directorymanager/11.0/signin/securityrole/policy/password.md)
- [Manage the Local Security Question Pool](/docs/directorymanager/11.0/signin/identitystore/configure/securityquestions.md)
