# Mailbox: Message Conditions

Use the Message Conditions page to customize message search filter conditions. It is a wizard page for the Delete Mailbox Contents operation.

![New Mailbox Action Wizard Mailbox Message Conditions page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/messageconditions.png)

Customize the folder search conditions using the following options:

- Message Category – Use the drop-down menu to select a message category

  __NOTE:__ Each selection may populate various conditions in the Select Conditions section.
- Select conditions – Select the checkbox next to any desired filter conditions to apply them to the search. The selected conditions then show in the Edit conditions box. Message Conditions include:

  - with specific message classes
  - that is created in specific date
  - with search terms in the subject
  - with search terms in the body
  - with search terms in the subject or body
  - with search terms in the message header
  - with search terms in the recipient’s address
  - with search terms in the sender’s address
  - that has an attachment
  - that is received in specific date
  - with specific message ID
  - that occurs in specific date
- Edit conditions – Any selected conditions populate here

  - To edit filter conditions, click the underlined portion of the condition. This opens a corresponding window to configure the condition, with the exception of __has attachment(s)__.

    - Clicking __has attachment(s)__ changes it to __has no attachment(s__ and vice versa

## MessageClasses Window

Use the MessageClasses window to select a message class to apply to the scope of the action. The MessageClasses window opens if __specific__ in __with specific message classes__ is selected in the Edit Conditions box.

![MessageClasses Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/messageclasseswindow.png)

Modify message classes using the following options:

- Click __Add__ to populate a field to add a message class

  ![New class added in MessageClasses Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/messageclasseswindownew.png)
- Click the ellipsis (__…__) or enter the path to the desired folder in the text box
- Matching Strategy auto-populates with __Exact Match__. Click __Exact Match__ to reveal a drop-down menu to select from the following scope options:

  - Exact Match
  - Starts With
  - Contains
- To remove a message class, select it and click __Remove__
- Click __Import CSV__ to open a file explorer and select a CSV file to import

## Data Range Selection Window

Use the Date Range Selection window to determine a time period to scope. The Date Range Selection window opens if __in specific date__ in either the __that is created in specific date__ or __that is received in specific date__ conditions is selected in the Edit condition box.

![Data Range Selection Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/datarangeselectionwindow.png)

To specify a date range, use the following options:

- Select one of the following qualifier options:

  - Over
  - Last
  - Before
  - After
  - Between
- Configure the date range using the textbox or drop-down menus for the selected option

## Search Terms Window

Use the Search Terms window to select terms in messages to run the action against. The Search Terms window opens if __search terms__ in any condition is selected in the Edit Conditions box.

![Search Terms Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/searchtermswindow.png)

Edit the search terms using the following options:

- To add a term to the search, enter the desired term into the upper text box and click __Add__
- To remove a term from the search, select a term in the lower text box and click __Remove__
- Click __Clear__ to clear all terms from the lower box
- Specify a qualifier option:
  - Contains ALL of the following search terms (And) – Search only returns results containing all of the search terms
  - Contains ANY of the following search terms (Or) – Search returns results containing any one or more of the search terms
- Click __Import CSV__ to open a file explorer and select a CSV file to import

## Values Window

Use the Values window to add or remove values to or from the search. The Values window opens if __specific__ in __with specific Message ID__ is selected in the Edit Conditions box.

![Values Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/valueswindow.png)

- To add a term to the search, enter the desired term into the upper text box and click __Add__
- To remove a term from the search, select a term in the lower text box and click __Remove__
- Click __Clear__ to clear all terms from the lower box
- Click __Import CSV__ to open a file explorer and select a CSV file to import
