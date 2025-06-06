# Manage the Local Question Pool

When you create a new identity store, four questions from the global question pool are added to the identity store’s local pool by default. A local pool is maintained individually by each identity
store. You can modify a local pool by (a) adding questions from the global question pool, (b) adding questions of your choice (questions that are not in the global pool), and (c) by removing questions from it.

To enroll using security questions, identity store users must select a certain number of questions from the local pool and provide answers.

What do you want to do?

- [Add a Question to the Local Pool from the Global Pool](#Add-a-Question-to-the-Local-Pool-from-the-Global-Pool)
- [Add a Question of your Choice to the Local Pool](#Add-a-Question-of-your-Choice-to-the-Local-Pool)
- [Remove a Question from the Local Pool](#Remove-a-Question-from-the-Local-Pool)

## Add a Question to the Local Pool from the Global Pool

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Security Questions__.
4. On the __Security Questions__ page, click in the box at the top and select a security question from the list of global security questions. You can also type a search string to filter the questions containing the string.
   After selecting a question, click __Add__. The question is added to the __Questions__ list.
5. Click __Save__.

## Add a Question of your Choice to the Local Pool

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Security Questions__.
4. On the __Security Questions__ page, click in the box at the top and type a security question. Then click __Add__. The question is added to the __Questions__ list.
5. Click __Save__.

## Remove a Question from the Local Pool

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Security Questions__.
4. On the __Security Questions__ page, click __Remove__ for a security question to remove it from the local pool. To remove all questions, click __Remove All__.
5. Click __Save__.  
   Deleting a question does not impact the users currently enrolled with the question.

__See Also__

- [Manage the Global Question Pool ](/docs/product_docs/groupid/groupid/admincenter/general/globalpool.md)
- [Set up Authentication via Security Questions](/docs/product_docs/groupid/groupid/admincenter/setupauth/securityquestions.md)
