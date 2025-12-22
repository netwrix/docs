---
title: "Mailbox: Message Conditions"
description: "Mailbox: Message Conditions"
sidebar_position: 70
---

# Mailbox: Message Conditions

Use the Message Conditions page to customize message search filter conditions. It is a wizard page
for the Delete Mailbox Contents operation.

![New Mailbox Action Wizard Mailbox Message Conditions page](/images/accessanalyzer/11.6/admin/action/mailbox/messageconditions.webp)

Customize the folder search conditions using the following options:

- Message Category – Use the drop-down menu to select a message category

    :::note
    Each selection may populate various conditions in the Select Conditions section.
    :::


- Select conditions – Select the checkbox next to any desired filter conditions to apply them to the
  search. The selected conditions then show in the Edit conditions box. Message Conditions include:

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

    - To edit filter conditions, click the underlined portion of the condition. This opens a
      corresponding window to configure the condition, with the exception of **has attachment(s)**.

        - Clicking **has attachment(s)** changes it to **has no attachment(s** and vice versa

## MessageClasses Window

Use the MessageClasses window to select a message class to apply to the scope of the action. The
MessageClasses window opens if **specific** in **with specific message classes** is selected in the
Edit Conditions box.

![MessageClasses Window](/images/accessanalyzer/11.6/admin/action/mailbox/messageclasseswindow.webp)

Modify message classes using the following options:

- Click **Add** to populate a field to add a message class

    ![New class added in MessageClasses Window](/images/accessanalyzer/11.6/admin/action/mailbox/messageclasseswindownew.webp)

- Click the ellipsis (**…**) or enter the path to the desired folder in the text box
- Matching Strategy auto-populates with **Exact Match**. Click **Exact Match** to reveal a drop-down
  menu to select from the following scope options:

    - Exact Match
    - Starts With
    - Contains

- To remove a message class, select it and click **Remove**
- Click **Import CSV** to open a file explorer and select a CSV file to import

## Data Range Selection Window

Use the Date Range Selection window to determine a time period to scope. The Date Range Selection
window opens if **in specific date** in either the **that is created in specific date** or **that is
received in specific date** conditions is selected in the Edit condition box.

![Data Range Selection Window](/images/accessanalyzer/11.6/admin/action/mailbox/datarangeselectionwindow.webp)

To specify a date range, use the following options:

- Select one of the following qualifier options:

    - Over
    - Last
    - Before
    - After
    - Between

- Configure the date range using the textbox or drop-down menus for the selected option

## Search Terms Window

Use the Search Terms window to select terms in messages to run the action against. The Search Terms
window opens if **search terms** in any condition is selected in the Edit Conditions box.

![Search Terms Window](/images/accessanalyzer/11.6/admin/action/mailbox/searchtermswindow.webp)

Edit the search terms using the following options:

- To add a term to the search, enter the desired term into the upper text box and click **Add**
- To remove a term from the search, select a term in the lower text box and click **Remove**
- Click **Clear** to clear all terms from the lower box
- Specify a qualifier option:
    - Contains ALL of the following search terms (And) – Search only returns results containing all
      of the search terms
    - Contains ANY of the following search terms (Or) – Search returns results containing any one or
      more of the search terms
- Click **Import CSV** to open a file explorer and select a CSV file to import

## Values Window

Use the Values window to add or remove values to or from the search. The Values window opens if
**specific** in **with specific Message ID** is selected in the Edit Conditions box.

![Values Window](/images/accessanalyzer/11.6/admin/action/mailbox/valueswindow.webp)

- To add a term to the search, enter the desired term into the upper text box and click **Add**
- To remove a term from the search, select a term in the lower text box and click **Remove**
- Click **Clear** to clear all terms from the lower box
- Click **Import CSV** to open a file explorer and select a CSV file to import
