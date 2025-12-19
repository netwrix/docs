---
title: "Create Alerts for Non-Owner Mailbox Access Events"
description: "Create Alerts for Non-Owner Mailbox Access Events"
sidebar_position: 20
---

# Create Alerts for Non-Owner Mailbox Access Events

If you have a monitoring plan configured to audit Exchange, you can configure alerts to be triggered
by non-owner mailbox access events (e.g., opening a message folder, opening/modifying/deleting a
message) using the event log alerts. To enable monitoring of non-owner mailbox access events, you
need to create a monitoring plan for auditing event logs.

## Create Alerts for Non-Owner Mailbox Access Events

The procedure below describes the basic steps, required for creation of a monitoring plan that will
be used to collect data on non-owner mailbox access events. See
[Event Log Manager](/docs/auditor/10.6/tools/eventlogmanager/eventlogmanager.md) topic for
additional information.

Follow the steps to create alert for non-owner mailbox access events.

**Step 1 –** Create a monitoring plan in Netwrix Auditor Event Log Manager.

**Step 2 –** Make sure that the Enable event log collection checkbox is selected. Specify the name
for the new plan, for example, "_Non-owner mailbox access auditing_".

**Step 3 –** Navigate to the Monitored computers list and add a server where your Exchange
organization resides.

**Step 4 –** On the General tab, click Configure next to Alerts. Make sure the predefined alerts are
disabled. Click Add to create an alert for non-owner mailbox access event.

**Step 5 –** In the Alert Properties wizard, specify the alert name and enter alert description
(optional). Specify the number alerts per email. Grouped alerts for different computers will be
delivered in separate email messages. This value is set to 1 by default, which means that each alert
will be delivered as a separate email message.

**Step 6 –** Specify alert recipient if you want the alert to be delivered to a non-default email.

**Step 7 –** Navigate to Event Filters and click Add to specify an event that will trigger the
alert.

**Step 8 –** Complete the Event Filter dialog.

- In the Event tab, specify the filter name and description. In the Event Log field enter _"Netwrix
  Non-Owner Mailbox Access Agent"_.

- In the Event Fields tab, complete the following fields:

    - Event ID—Enter the identifier of a specific event that you want to be alerted on. You can add
      several IDs separated by comma. Review the event IDs available in the Netwrix **Non-Owner
      Mailbox Access Agent** event log:

        | ID  | Description                                 | Access Type (as displayed in XML view of event details) |
        | --- | ------------------------------------------- | ------------------------------------------------------- |
        | 1   | A folder was opened                         | actFolderOpen                                           |
        | 2   | A message was opened                        | actMessageOpened                                        |
        | 3   | A message was sent                          | actMessageSubmit                                        |
        | 4   | A message was changed and saved             | actChangedMessageSaved                                  |
        | 5   | A message was deleted                       | actMessageDeleted                                       |
        | 6   | A folder was deleted                        | actFolderDeleted                                        |
        | 7   | The entire contents of a folder was deleted | actAllFolderContentsDeleted                             |
        | 8   | A message was created and saved             | actMessageCreatedAndSaved                               |
        | 9   | A message was moved or/and copied           | actMessageMoveCopy                                      |
        | 10  | A folder was moved or/and copied            | actFolderMoveCopy                                       |
        | 14  | A folder was created                        | actFolderCreated                                        |

    - Source—Enter _"Netwrix Non-Owner Mailbox Access Agent"_.

- In the Insertion Strings tab, select Consider the following event Insertion Strings to receive
  alerts on events containing a specific string in the EventData. Click Add and specify the
  Insertion String.

**Step 9 –** Click OK to save the changes and close the Event Filters dialog.

**Step 10 –** In the Netwrix Auditor Event Log Manager wizard, navigate to Notifications and specify
the email address where notifications will be delivered.

**_RECOMMENDED:_** click **Send Test Email**. The system will send a test message to the specified
email address and inform you if any problems are detected.

**Step 11 –** Click Edit next to Audit Archiving Filters step, in the Inclusive Filters section
clear the filters you do not need, click Add and specify the following information:

- The filter name and description (e.g., Non-owner mailbox access event)
- In Event Log, enter _"Netwrix Non-Owner Mailbox Access Agent"_.
- In Write to, select Long-Term Archive. The events will be saved into the local repository.

**Step 12 –** Click Save. If an event occurs that triggers an alert, an email notification will be
sent immediately to the specified recipients.

## Review Event Description

Review the example of the MessageOpened event in the XML view:

![eventmessageopen](/images/auditor/10.6/admin/alertsettings/eventmessageopen.webp)

Depending on the event, the strings in the description may vary. The first eight strings are common
for all events:

| String  | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| String1 | The event type: info or warning                                             |
| String2 | The event date and time in the following format: YYYY_MM_DD_hh_mm_ss_000    |
| String3 | The name of the user accessing mailbox                                      |
| String4 | The SID of the user accessing mailbox                                       |
| String5 | The GUID of the mailbox being accessed                                      |
| String6 | Shows whether the user accessing mailbox is the owner: it is always _false_ |
| String7 | The IP of the computer accessing the mailbox                                |
| String8 | The access type                                                             |

The following strings depend on the non-owner access type, represented by different Event IDs:

| Event ID | Access type (String 8)                                              | Strings       | Description                                                                                    |
| -------- | ------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------- |
| 1        | actFolderOpen                                                       | String9       | The internal folder URL                                                                        |
| 2        | actMessageOpened                                                    | String9       | The internal message URL                                                                       |
| String10 | The message subject                                                 |               |                                                                                                |
| String11 | The message type: IPM.Note—Email, IPM.Contact – contact, etc.       |               |                                                                                                |
| 3        | actMessageSubmit                                                    | String9       | The internal message URL                                                                       |
| String10 | The message subject                                                 |               |                                                                                                |
| String11 | Email addresses of the message recipients, separated by a semicolon |               |                                                                                                |
| String12 | The message type: IPM.Note—Email, IPM.Contact – contact, etc.       |               |                                                                                                |
| 4        | actChangedMessageSaved                                              | String9       | The internal message URL                                                                       |
| String10 | The message subject                                                 |               |                                                                                                |
| String11 | The message type: IPM.Note – Email, IPM.Contact – contact, etc.     |               |                                                                                                |
| 5        | actMessageDeleted                                                   | String9       | The internal message URL                                                                       |
| String10 | The message subject                                                 |               |                                                                                                |
| String11 | The message type: IPM.Note—Email, IPM.Contact – contact, etc.       |               |                                                                                                |
| 6        | actFolderDeleted                                                    | String9       | The internal folder URL                                                                        |
| 7        | actAllFolderContentsDeleted                                         | String9       | The internal folder URL                                                                        |
| 8        | actMessageCreatedAndSaved                                           | String9       | The internal message URL                                                                       |
| 9        | actMessageMoveCopy                                                  | String9       | The message being moved/copied—the final part of the message URL, e.g., /Inbox/testMessage.EML |
| String10 | The action – copy or move                                           |               |                                                                                                |
| String11 | The folder URL the message is copied/moved from                     |               |                                                                                                |
| String12 | The destination folder URL                                          |               |                                                                                                |
| String13 | The message type: IPM.Note—Email, IPM.Contact – contact, etc.       |               |                                                                                                |
| 10       | actFolderMoveCopy                                                   | Strings 9 -13 | The string descriptions for the folder are similar to those for messages.                      |
| 14       | actFolderCreated                                                    | String9       | The new folder URL                                                                             |

With different Exchange versions and/or different email clients, the same non-owner action (e.g.,
copying a message) may generate different events: e.g., actMessageMoveCopy with one server/client or
actMessageCreatedAndSaved with another.

You can add the required strings contained in % symbols for your own custom alert separated by
a` <br>` tag in `<b>Event Parameters:</b>`. Event parameter descriptions can also be added.

In the example below, the following information has been added:

- The description for String 3—User accessing mailbox
- String 8 with the description
- String 9 with the description

![editnotificationtemplate](/images/auditor/10.6/admin/alertsettings/editnotificationtemplate.webp)
