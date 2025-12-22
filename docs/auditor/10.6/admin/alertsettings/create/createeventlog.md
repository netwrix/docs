---
title: "Create Alerts for Event Log"
description: "Create Alerts for Event Log"
sidebar_position: 10
---

# Create Alerts for Event Log

Alerts are configurable notifications triggered by certain events and sent to the specified
recipients. You can enable or disable, and modify existing alerts, and create new alerts. To do it,
click Configure next to Alerts.

Follow the steps to create new alert.

**Step 1 –** In the Alerts window, click Add to start new alert.

**Step 2 –** On the Alert Properties step, specify the alert name and enter alert description
(optional). Specify the number alerts per email. Grouped alerts for different computers will be
delivered in separate email messages. This value is set to 1 by default, which means that each alert
will be delivered as a separate email message.

**Step 3 –** On the Notifications step, configure email notifications and customize the notification
template, if needed. Click Edit next to Customize notifications template. Edit the template by
deleting or inserting information fields.

The %ManagedObjectName% variable will be replaced with your monitoring plan name.

**Step 4 –** On the Event filters step, specify an event that will trigger the alert.

**Step 5 –** Complete the Event Filters wizard. Complete the following fields:

- In the Event tab:

    | Option      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Name        | Specify the filter name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | Description | Enter the description for this filter (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | Event Log   | Select an event log from the drop-down list. You will be alerted on events from this event log. You can also input a different event log. To find out a log’s name, navigate to Start > Windows Administrative Tools > **Event Viewer** > **Applications and Services Logs** > Microsoft > Windows and expand the required Log_Name node, right-click the file under it and select Properties. Find the event log’s name in the Full Name field. Auditor does not collect the Analytic and Debug logs, so you cannot configure alerts for these logs. You can use a wildcard (\*). In this case you will be alerted on events from all Windows logs except for the ones mentioned above. |

- In the Event Fields tab:

    | Option      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Event ID    | Enter the identifier of a specific event that you want to be alerted on. You can add several IDs separated by comma.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | Event Level | Select the event types that you want to be alerted on. If the Event Level checkbox is cleared, you will be alerted on all event types of the specified log.                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | Computer    | Specify a computer. You will only be alerted on events from this computer. If you want to specify several computers, you can define a mask for this parameter. Below is an example of a mask: - \* - any machine - computer – a machine named ‘computer’ - \*computer\* - machines with names like ‘xXxcomputerxXx’ or ‘newcomputer’ - computer? – machines with names like ‘computer1’ or ‘computerV’ - co?puter - machines with names like ‘computer’ or ‘coXputer’ - ????? – any machine with a 5-character name - ???\* - any machine with a 3-character name or longer |
    | User        | Enter a user’s name. You will be alerted only on the events generated under this account. If you need to specify several users, you can define a mask for this parameter in the same way as described above.                                                                                                                                                                                                                                                                                                                                                                |
    | Source      | Specify this parameter if you want to be alerted on the events from a specific source. If you need to specify several users, you can define a mask for this parameter in the same way as described above.                                                                                                                                                                                                                                                                                                                                                                   |
    | Category    | Specify this parameter if you want to be alerted on a specific event category.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

    ![eventfilters](/images/auditor/10.6/admin/alertsettings/eventfilters.webp)

- In the Insertion Strings tab:

    | Option                                         | Description                                                                                                                                                                        |
    | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Consider the following event Insertion Strings | Specify this parameter if you want to receive alerts on events containing a specific string in the EventData. You can use a wildcard (\*). Click Add and specify Insertion String. |

**Step 6 –** Click OK to save the changes and close the Event Filters dialog.
