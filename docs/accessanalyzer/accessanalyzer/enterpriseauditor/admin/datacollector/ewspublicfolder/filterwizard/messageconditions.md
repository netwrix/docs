# EWSPublicFolder FW: Message Conditions

Use the Message Conditions page to apply filters to the message category part of the search.

![Filter Wizard Message Conditions page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/messageconditions.png)

Customize message search filter conditions using the following options:

- Message category – Select a message category using the dropdown menu from the following:

  - Common
  - Email
  - Appointment
  - Schedule
  - Contact
  - Task
  - Journal
  - Note
  - Post
  - RSS Feed
  - Unified Messaging
- Select conditions – To add it to the search, select any of the following conditions:

  __NOTE:__ The conditions that are available in the Select Conditions box depends on the selected __Message category__.

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
  - with specific Message ID
  - that occurs in specific date
- Edit Conditions – Click an underlined value, if present, in the Edit Conditions box to modify any of the template conditions

  __NOTE:__ The values present depends on the selections made in the Select conditions box.

  - Click __specific__ to open the MessageClasses Window. See the [MessageClasses Window](#MessageClasses-Window) topic for additional information.
  - Click __in specific date__ to open the Date Range Selection Window. See the [Date Range Selection Window](#Date-Range-Selection-Window) topic for additional information.
  - Click __search terms__ to open the Search Terms Window. See the [Search Terms Window](#Search-Terms-Window) topic for additional information.
  - Click __has attachment(s)__ to convert the condition to __has no attachment(s)__ and vice versa

## MessageClasses Window

Use the MessageClasses window to alter criteria related to message class. The Message Classes window opens if __specific__ is clicked in the Edit Conditions box on the Message Conditions page.

![MessagesClasses window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/messageclassesmessage.png)

Determine MessageClass-related criteria using the following options:

- To add a class, click __Add__
- Enter the desired Message Class in the corresponding textbox
- Click __Exact Match__ to reveal a dropdown menu of other search criteria under Matching Strategy and select the preferred option:

  - Exact Match
  - Starts With
  - Contains
- To remove a message class, select it and click __Remove__
- Click __Import CSV__ to open a file explorer window to select an appropriate CSV file containing search terms

## Date Range Selection Window

Use the Date Range Selection window to select a time period or range for the search. The Date Range Selection window opens if __in specific date__ is clicked in the Edit Conditions box on the Message Conditions page.

![Date Range Selection window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/daterangeselectionmessage.png)

Determine the time period or range of the search using the following options:

- Over [Number] [Time Period] ago
- Last [Number] [Time Period]
- Before [Date]
- After [Date]
- Between [Date] and [Date]

## Search Terms Window

Use the Search Terms window to determine terms for the search. The Search Terms window opens if __search terms__ is selected in the Edit Conditions box.

![Search Terms window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/searchtermswindow.png)

Determine terms for the search using the following options:

- Type the desired term into the upper text box and click __Add__ to add the term to the lower text box, which adds the term to the search
- Select a term in the lower text box, and click __Remove__ to remove the term from the search
- Click __Clear__ to clear all terms from the lower box
- Select the desired qualifier option:

  - Contains ALL of the following search terms (And) – Search only returns results containing all of the search terms
  - Contains ANY of the following search terms (Or) – Search returns results containing any one or more of the search terms
- Click __Import CSV__ to open a file explorer window to select an appropriate CSV file containing search terms
