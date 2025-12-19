---
title: "EWSMailbox FW: Message Conditions"
description: "EWSMailbox FW: Message Conditions"
sidebar_position: 30
---

# EWSMailbox FW: Message Conditions

Use the Message Conditions page to apply filters to the message category part of the search.

![Filter Wizard Message Conditions page](/images/accessanalyzer/11.6/admin/datacollector/ewsmailbox/filterwizard/messageconditions.webp)

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

    :::note
    The conditions that are available in the Select Conditions box depends on the selected
    **Message category**.
    :::


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

- Edit Conditions – Click an underlined value, if present, in the Edit Conditions box to modify any
  of the template conditions

    :::note
    The values present depends on the selections made in the Select conditions box.
    :::


    - Click **specific** to open the MessageClasses Window. See the
      [MessageClasses Window (Message Conditions)](#messageclasses-window-message-conditions) topic
      for additional information.
    - Click **in specific date** to open the Date Range Selection Window. See the
      [Date Range Selection Window](#date-range-selection-window) topic for additional information.
    - Click **search terms** to open the Search Terms Window. See the
      [Search Terms Window (Message Conditions)](#search-terms-window-message-conditions) topic for
      additional information.
    - Click **has attachment(s)** to convert the condition to **has no attachment(s)** and vice
      versa

## MessageClasses Window (Message Conditions)

Use the MessageClasses window to alter criteria related to message class. The Message Classes window
opens if **specific** is clicked in the Edit Conditions box on the Message Conditions page.

![MessagesClasses window](/images/accessanalyzer/11.6/admin/datacollector/ewsmailbox/filterwizard/messageclassesmessage.webp)

Determine MessageClass-related criteria using the following options:

- To add a class, click **Add**
- Enter the desired Message Class in the corresponding textbox
- Click **Exact Match** to reveal a dropdown menu of other search criteria under Matching Strategy
  and select the preferred option:

    - Exact Match
    - Starts With
    - Contains

- To remove a message class, select it and click **Remove**
- Click **Import CSV** to open a file explorer window to select an appropriate CSV file containing
  search terms

## Date Range Selection Window

Use the Date Range Selection window to select a time period or range for the search. The Date Range
Selection window opens if **in specific date** is clicked in the Edit Conditions box on the Message
Conditions page.

![Date Range Selection window](/images/accessanalyzer/11.6/admin/datacollector/ewsmailbox/filterwizard/daterangeselectionmessage.webp)

Determine the time period or range of the search using the following options:

- Over [Number] [Time Period] ago
- Last [Number] [Time Period]
- Before [Date]
- After [Date]
- Between [Date] and [Date]

## Search Terms Window (Message Conditions)

Use the Search Terms window to determine terms for the search. The Search Terms window opens if
**search terms** is selected in the Edit Conditions box.

![Search Terms window](/images/accessanalyzer/11.6/admin/datacollector/ewsmailbox/filterwizard/searchtermswindow.webp)

Determine terms for the search using the following options:

- Type the desired term into the upper text box and click **Add** to add the term to the lower text
  box, which adds the term to the search
- Select a term in the lower text box, and click **Remove** to remove the term from the search
- Click **Clear** to clear all terms from the lower box
- Select the desired qualifier option:

    - Contains ALL of the following search terms (And) – Search only returns results containing all
      of the search terms
    - Contains ANY of the following search terms (Or) – Search returns results containing any one or
      more of the search terms

- Click **Import CSV** to open a file explorer window to select an appropriate CSV file containing
  search terms
