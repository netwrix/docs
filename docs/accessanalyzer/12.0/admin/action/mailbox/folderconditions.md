---
title: "Mailbox: Folder Conditions"
description: "Mailbox: Folder Conditions"
sidebar_position: 60
---

# Mailbox: Folder Conditions

Use the Folder Conditions page to customize folder search filter conditions. It is a wizard page for
the **No, the query results do not contain a mailbox identification** column option on the Folder
Identification page.

![New Mailbox Action Wizard Folder Conditions page](/images/accessanalyzer/12.0/admin/action/mailbox/folderconditions.webp)

Customize folder search conditions using the following options:

- Select conditions – Select the checkbox next to any of the following filter conditions to apply
  them to the search and add them to the Edit conditions box. Folder Conditions include:

    - With specific folder type
    - With search terms in the folder name
    - With specific folder(s) to include/exclude

- Edit conditions – Any selected conditions populate here. To modify filter conditions, click the
  underlined portion of the condition, which opens a corresponding window.

## Folder Type Window

Use the Folder Type window to select which folder types to run the action against. The Folder Type
window opens if **specific** in **with specific folder type** is selected in the Edit Conditions
box. .

![Folder Type Window](/images/accessanalyzer/12.0/admin/action/mailbox/foldertypewindow.webp)

Select the checkbox next to any desired folder type to include it in the search criteria, including:

- Calendar
- Contact
- Journal
- Mail
- Notes
- Task
- Reminder
- RSS Feed

## Search Terms Window

Use the Search Terms window to select terms contained in folder names to run the action against.The
Search Terms window opens if **search terms** is selected in the Edit Conditions box.

![Search Terms Window](/images/accessanalyzer/12.0/admin/action/mailbox/searchtermswindow.webp)

Edit the search terms using the following options:

- To add a term to the search, enter the desired term into the upper text box and click **Add**
- To remove a term from the search, select a term in the lower text box and click **Remove**
- Click **Clear** to clear all terms from the lower box
- Select a qualifier option:

    - Contains ALL of the following search terms (And) – Search only returns results containing all
      of the search terms
    - Contains ANY of the following search terms (Or) – Search returns results containing one or
      more of the search terms

- Click **Import CSV** to open a file explorer and select a CSV file to import

## Folder Inclusion/Exclusion Window

Use the Folder Inclusion/Exclusion window to select individual folders to add to or remove from the
action. The Folder Inclusion/Exclusion window opens if **specific** in **with specific folder(s) to
include/exclude** is selected in the Edit Conditions box.

![Folder Inclusion/Exclusion Window](/images/accessanalyzer/12.0/admin/action/mailbox/folderinclusionexclusionwindow.webp)

Include/Exclude folders using the following options:

- Click **Add** to populate a field to add a folder path

    ![New field added on Folder Inclusion/Exclusion window](/images/accessanalyzer/12.0/admin/action/mailbox/folderinclusionexclusionwindownew.webp)

- Click the ellipsis (**…**) or enter the path to the desired folder in the text box
- Scope auto-populates with **This folder**. Click **This folder** to reveal a drop-down menu to
  select from the following scope options:

    - This folder
    - This folder and subfolders
    - Subfolders only

- The Remove button becomes enabled once a folder is added to either section. To remove a folder
  from the scope, select it and click **Remove**.
