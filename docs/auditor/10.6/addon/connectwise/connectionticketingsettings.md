---
title: "Connection and Ticketing Settings"
description: "Connection and Ticketing Settings"
sidebar_position: 40
---

# Connection and Ticketing Settings

It is recommended that you use configuration wizard to specify connection and ticketing settings.
However, you can adjust them manually, using the information provided in this section.

## Settings for ConnectWise Ticket Creation

Specify how data arriving from Auditor should be used to fill in ConnectWise ticket fields. For
that, review `<TicketParameters>` section of the ConnectWiseSettings.xml file. The parameters inside
this section correspond to ConnectWise ticket fields and use the same naming (e.g., priority,
urgency).

Each `<TicketParameter>` includes the `<Name></Name>` and `<Value></Value>` pair that defines a
ConnectWise ticket field and a value that will be assigned to it. For most parameters, default
values are provided. Add more ticket parameters or update values if necessary.

| `Name`             | `Value`                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Summary            | [Netwrix Auditor] %AlertName%                                                                                                                                                                                                                                                    | Instructs the system to fill in the Summary ticket field with the Auditor alert name (e.g., _[Netwrix Auditor] Password Reset)_.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| InitialDescription | Alert Details: Who: %Who% Action: %Action% Object type: %ObjectType% What: %What% When: %When% Where: %Where% Workstation: %Workstation% Details: %Details% Data source: %DataSource% Monitoring plan: %MonitoringPlanName% Item: %Item% Sent by Netwrix Auditor from %Computer% | Instructs the system to fill in the InitialDescription ticket field with the Auditor activity record data. To read more about activity records, see the [Reference for Creating Activity Records](/docs/auditor/10.6/api/activityrecordreference.md) topic for additional information. You may need to fill in the internal description intended for use by MSP only (this description will not be visible to managed clients), perform the following steps: **Step 1 –** Run the configuration wizard (or modify _ConnectWiseSettings.xml_) to specify the settings you need. **Step 2 –** Then open _ConnectWiseSettings.xml_ for edit. **Step 3 –** Locate the **InitialDescription** parameter and change the Name attribute to _initialInternalAnalysis_. |
| Impact/Urgency     | Medium                                                                                                                                                                                                                                                                           | Instructs the system to set ticket Impact/Urgency to _Medium_.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Parameters for Handling Related Tickets

Review the `<CorrelationTicketFormat>` section. It shows what information about related tickets will
be included in your current ticket. Update the template if necessary.

| CorrelationTicketFormat                             | Description                                                                                               |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Previous incident for the same alert type: Id: %id% | The service will automatically substitute parameters from this section with values from a related ticket. |

## Parameters for Reopening Tickets

Review the `<ReopenTicketOptions>` section. It defines the tickets the add-on can reopen
automatically.

| Name                           | Description                                                                                                                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClosedTicketStates TicketState | Lists closed ticket statuses. By default, resolved, closed, and canceled tickets can be reopened. To specify a new status, provide its ID in the `<TicketState>` tag (e.g., 8 for canceled). |
| NewState                       | Defines a ticket status once it is reopened. By default, is set to _new_. To specify another status, provide its ID in the `<NewState>` tag (e.g., _1_ for _new_).                           |

When finished, save your changes to configuration file.

Remember to restart the add-on service every time you update any of configuration files.

## Review Other Parameters

You can update other parameters with your own values if necessary; however, it is recommended that
you contact Netwrixbefore modifying this section.

| Name                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IgnoreUploadAttachmentError | Instructs the add on to ignore the attachment upload errors. - If false, a corresponding error message will be displayed. - If true, the file that failed to upload will be stored to the **MissingAttachments** subfolder in the add-on folder. Error message will not appear on the screen; instead, the following record will be written to the add-on log: `Attached files for ticket id: {0} dumped: '{attachmentPath}'` Default parameter value is **true**. |

You can also review the `<TicketParameterRefs>` section. It shows information related to ConnectWise
Manage objects.

Example:

```xml
<TicketParameterRefs>
  <TicketParameterRef>
    <Name>company</Name>
    <TicketParameters>
      <TicketParameter>
        <Name>id</Name>

        <!--My.Sample.Company-->
        <Value>42</Value> <!-- enter ID of the company-ticket originator -->
      </TicketParameter>
    </TicketParameters>
  </TicketParameterRef>

  <TicketParameterRef>
    <Name>board</Name>
    <TicketParameters>
      <TicketParameter>
        <Name>id</Name>
        <!--Professional Services-->
        <Value>1</Value> <!-- enter ID of the service board for the tickets -->
      </TicketParameter>
    </TicketParameters>
  </TicketParameterRef>

  <TicketParameterRef>
    <Name>priority</Name>
    <TicketParameters>
      <TicketParameter>
        <Name>id</Name>
        <!--Priority 3 - Normal Response-->
        <Value>4</Value>
      </TicketParameter>
    </TicketParameters>
  </TicketParameterRef>

  <TicketParameterRef>
    <Name>team</Name>
    <TicketParameters>
      <TicketParameter>
        <Name>id</Name>
        <!--Service Team-->
        <Value>25</Value> <!-- enter ID of the service team responsible for resolution -->
      </TicketParameter>
    </TicketParameters>
  </TicketParameterRef>
</TicketParameterRefs>
```
