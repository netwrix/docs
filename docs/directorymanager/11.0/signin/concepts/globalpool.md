---
title: "Manage the Global Question Pool"
description: "Manage the Global Question Pool"
sidebar_position: 90
---

# Manage the Global Question Pool

GroupID provides a list of predefined security questions for enrollment and authentication. You can
update this list by adding or removing questions.

When an identity store is created, four questions from this global pool are automatically added to
the identity store's local question pool. This pool is not shared with other identity stores.

What do you want to do?

- [Add a Question to the Question Pool](#add-a-question-to-the-question-pool)
- [Remove a Question from the Question Pool](#remove-a-question-from-the-question-pool)

## Add a Question to the Question Pool

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **GroupID Settings** page, click the **Question Pool** tab.
3. To add a question, click **Add New Question**.
4. On the **Add New Question** dialog box, type a security question in the **Question** box and
   click **Add Question**."The new question is displayed on the **Question Pool** tab. Questions are
   sorted in alphabetical order.

**Search a question in the list:**

To search for a security question in the list, enter a search string in the search box and press
**Enter**. Questions that contain the string will be filtered.

## Remove a Question from the Question Pool

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **GroupID Settings** page, click the **Question Pool** tab.
3. On the **Question Pool** tab, click **Delete** for a question to delete it.
4. Click **Delete** on the **Delete Question** dialog box.  
   Deleting a question does not impact the users currently enrolled with the question.

**See Also**

- [Set up Authentication via Security Questions](/docs/directorymanager/11.0/signin/authpolicy/setupauth/securityquestions.md)
- [Set a Password Policy ](/docs/directorymanager/11.0/signin/securityrole/policy/password.md)
- [Manage the Local Question Pool](/docs/directorymanager/11.0/signin/identitystore/configure/securityquestions.md)
