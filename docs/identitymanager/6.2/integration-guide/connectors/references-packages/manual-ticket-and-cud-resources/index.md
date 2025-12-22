---
title: "Manual Ticket and CUD Resources"
description: "Manual Ticket and CUD Resources"
sidebar_position: 180
---

# Manual Ticket and CUD Resources

Opens manual provisioning tickets in Identity Manager.

| Package Characteristics | Value                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| Display Name            | Ticket/identitymanager And Create/Update/Delete resources                                        |
| Identifier              | Usercube.UpdateManualProvisioningTicket@0000001                                           |
| Export                  | NONE                                                                                      |
| Fulfill                 | `Usercube-UpdateManualProvisioningTicket.dll` and `Usercube-Update-FulfillmentStates.dll` |
| Has Incremental Mode    | False                                                                                     |
| Publisher               | Identity Manager                                                                          |

## Virtual Resources

This package allows to create tickets in the Manual Provisioning screen.

After the validation of the ticket, the state of the resource will be `Executed`.  
If a synchronization is available for the system manually fulfilled, the state could change to
`Verified` if the synchronized data are the ones expected.  
If the external system cannot be synchronized, Identity Manager offers the possibility to create
virtual resources. It means that the data is not provided by a synchronization, but we trust the
validation of the ticket in the manual provisioning screen. The resources are created accordingly as
if they were coming from an external system.

## Rights for CUD Resources

If this package is used from the interface, the necessary rights will be automatically added.  
If this package is used from the XML configuration, some rights will need to be added to allow the
creation, update or deletion of virtual resources.

### Example

Here is an example for an entity type called `MyTicketEntity`:

```

<AccessControlRule Profile="Administrator" EntityType="MyTicketEntity" Identifier="Administrator_MyTicketEntity" DisplayName_L1="Administrator_MyTicketEntity">    <Entry Permission="/Custom/Resources/MyTicketEntity/Query" CanExecute="true" />    <Entry Permission="/Custom/Resources/MyTicketEntity/Create" CanExecute="true" />    <Entry Permission="/Custom/Resources/MyTicketEntity/Update" CanExecute="true" />    <Entry Permission="/Custom/Resources/MyTicketEntity/Delete" CanExecute="true" /></AccessControlRule>

```
