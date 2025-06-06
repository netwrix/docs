# ExchangePS: Filter by Message

The Filter by Message page is used to define the filter conditions of the search. It is a wizard page for the category of:

- Mailbox Search

![ExchangePS Data Collector Wizard Filter by Message Conditions page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/filtermessage.png)

In the Select Conditions section, choose the filter logic:

- All Conditions – All selected conditions must be met
- Any condition – Any of the selected conditions must be met

Available conditions to select from include:

- date when message expires according to policy – If selected, specify date range through the Date Range Selection window
- with specific words in the retention policy – If selected, specify words through the Words window
- with specific words in the subject – If selected, specify words through the Words window
- with specific words in the body – If selected, specify words through the Words window
- with specific words in the subject or body – If selected, specify words through the Words window
- with specific words in the recipient’s address – If selected, specify words through the Words window
- with specific words in the sender’s address – If selected, specify words through the Words window
- that was received in a specific date range – If selected, specify date range through the Date Range Selection window
- with specific words in the attachment – If selected, specify words through the Words window

See the [Date Range Selection Window](#Date-Range-Selection-Window) and [Words Window](#Words-Window) topics for additional information.

In the Select Search Mailbox Parameters section, select the desired filter parameters:

- Do not Include Archive
- Include Unsearchable Items
- Search Dumpster
- Search Dumpster Only

#### Date Range Selection Window

The Date Range Selection window is opened by the __Specify Date Range...__ option for a date related filter on the Filter by Message page.

![Date Range Selection window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/daterangeselectionwindow.png)

Select the range category on the left and configure the range setting in the enabled fields:

- Over – Select the number and time units. The available time units are: __Days__, __Months__, or __Years__.
- Last – Select the number and time units. The available time units are: __Days__, __Months__, or __Years__.
- Before – Drop-down menu opens a calendar selection view, choose the end date
- After – Drop-down menu opens a calendar selection view, choose the start date
- Between (Date) – Drop-down menus open calendar selection view, choose the start and end dates
- Between – Select the numbers for the lower and upper range boundary, and the desired time units. The available time units are: __Days__, __Months__, or __Years__.

When the date range is specified, click __OK__. The selected date range shows as a filter on the Filter by Message page. Click the filter to open the Date Range Selection window to modify the date range.

#### Words Window

The Words window is opened by the __Specify words...__ option for a word related filter on the Filter by Message page.

![Words window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/wordswindow.png)

In the Search property section, choose the filter logic:

- All Words – All selected word filters must be met
- Any Words – Any of the selected word filters must be met

Then, configure the required words in the filter list. Enter the word in the textbox and click __Add__. To delete a word from the filter list, select the word and click __Remove__.

When the word list is complete, click __OK__. The specified words show as a filter on the Filter by Message page. Click the filter to open the Words window to modify the list.
