---
title: "SIEM Server Page"
description: "SIEM Server Page"
sidebar_position: 10
---

# SIEM Server Page

The SIEM Server page is accessible from the Navigation pane under Configuration > SIEM. Privilege
Secure can output events to third-party SIEM solutions for reporting, correlation, and notification.
The SIEM Servers page define the SIEM endpoint, the method of connection, and the SIEM template to
be used.

SIEM Servers define where to send the event data, how the connection should be established, and the
template to define the format/data to be sent.

**Step 1 –** Navigate to the **Configuration** > **SIEM** > **SIEM Templates** page.

![siemservers](/images/privilegesecure/4.2/accessmanagement/admin/configuration/page/siemservers.webp)

**Step 2 –** Enter the following information:

- SIEM Host – Enter the address of the SIEM Server
- Server Type – Select TCP or UDP protocol for the connection
- Port- Enter the port for the connection
- Protocol - Select the protocol to secure the connection: TLS, TLS 1.1 or TLS 1.2
- Template – Select the SIEM template to define the data and format
- Use SSL - Check to enable SSL for the connection
- Enabled – Check to enable the SIEM Server. Uncheck to disable the SIEM Server.

### SIEM Service

Events destined for SIEM Servers are sent to a queue. The SIEM service is responsible for pulling
events out the queue and processing them. Multiple SIEM services may be used to process high volumes
of events.

![SIEM Serivce Page](/images/privilegesecure/4.2/accessmanagement/admin/configuration/page/siemservice.webp)

Events processed may be viewed by selecting the SIEM service in the Service Node page.

- Sent Time – When the event was processed
- Sent – Successful processing of the event
- Message – The SIEM event to be processed
- SIEM Host – The SIEM Server the event is destined for
- Resource – The Resource associated with the event, If appropriate
- Account – The Account associated with the event, if appropriate
- Activity – The Activity associated with the event, if appropriate
- User Name – The User Name associated with the event, if appropriate
