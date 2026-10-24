---
title: "SIEM templates and event fields"
description: "Look up the built-in SIEM templates, the fields you can insert into a message, and how to create a custom template."
sidebar_position: 20
---

# SIEM templates and event fields

A SIEM template sets the content and layout of each message that Privilege Secure sends to a SIEM server. You select a template when you [add a SIEM server](siem-servers.md).

Privilege Secure includes two templates, **CEF** and **LEEF**. You can also create custom templates.

:::note
The **CEF** and **LEEF** templates contain the same message body. Don't assume that either template produces a message that follows the CEF or LEEF specification from the SIEM vendor. Test the output in your SIEM before you rely on it.
:::

{/* TODO: SME to confirm the format of the CEF and LEEF message bodies, and whether they follow the vendor specifications. Make no format claims until then. */}

## Create a custom template

1. Select **Configuration** > **SIEM Templates**.
1. Click **+** above the list.
1. Fill in the fields in the table.
1. Click **Save**.

| Field | Description |
|---|---|
| Name | The name of the template. |
| **Description** | A description of the template. |
| **Characters To Escape** | The characters in event text that need an escape character. |
| **Escape Character** | The character that you put before each escaped character. |
| **Format**\* | The message body. Edit it directly, or insert event fields from the field buttons. |

An asterisk (\*) marks a required field.

To insert a field, place the cursor in **Format** and select the plus icon next to the field name.

Placeholders in the built-in templates use the form `%FIELDNAME%` in upper case, for example `%EVENTTYPE%`. The following sample **Format** value uses placeholders:

```text
%SYSLOG_DATE%|%HOST%|EventType=%EVENTTYPE%|EventStatus=%EVENTSTATUS%|EventMessage=%EVENTMESSAGE%
```

{/* TODO verify: the label of the name field, and that a field button inserts %FIELDNAME% in upper case, as the seeded bodies use. */}

{/* TODO screenshot: the SIEM template editor with the Format box and the field buttons */}

Pipe characters (`|`) in the text of an event message are removed before the message is sent.

## Event fields

The editor offers 25 fields. Each field belongs to the event, the session behind the event, or the account and resource involved.

| Group | Fields |
|---|---|
| Event | `EventTimeUTC`, `EventLoggedInUserName`, `EventLoggedInFromIPAddress`, `EventAccessPolicyName`, `EventSourceHost`, `EventServiceType`, `EventType`, `EventStatus`, `EventMessage` |
| Session | `ActivitySessionCreatedByUserName`, `ActivitySessionCreatedFromAddress`, `ActivitySessionCreatedDateTimeUTC`, `ActivitySessionLoginAccountName`, `ActivitySessionStatus`, `ActivitySessionStatusDescription` |
| Account | `ManagedAccountName`, `ManagedAccountType` |
| Resource | `ManagedResourceName`, `ManagedResourceType`, `ManagedResourceHostName`, `ManagedResourceHostDistinguishedName`, `ManagedResourceHostIPAddress`, `ManagedResourceHostOS`, `ManagedResourceHostDnsHostName`, `ManagedResourceHostNetBiosName` |

Fields about a session, account, or resource are empty for events that don't involve one.


:::note
The built-in **CEF** and **LEEF** templates write each field as `key=value`. Some keys differ from the field names in the editor, for example `ActivitySessionSattus`, `ManagedAccounttype`, `ManagedSourceHostName`, `ActivitySessionCreateFromAddress`, `EventTimeUtc`, `ManagedResourceHostDNSHostName`, and `ManagedResourceHostNetBIOSName`. Match these keys exactly in your SIEM parser, or create a custom template with the keys that you want.
:::

### Header placeholders

A message can start with a header made of the following placeholders.

| Placeholder | Description |
|---|---|
| `%SYSLOG_DATE%` | The event date in sortable universal format. |
| `%HOST%` | The host name of the computer that runs the SIEM service. |
| `%TEMPLATENAME%` | {/* TODO verify */} |
| `%TEMPLATEVERSION%` | {/* TODO verify */} |
| `%COMPANY%` | {/* TODO verify */} |
| `%PRODUCT%` | {/* TODO verify */} |
| `%PRODUCT_VERSION%` | {/* TODO verify */} |
| `%LOGLEVELSTATUS%` | {/* TODO verify */} |
| `%LOGLEVEL%` | {/* TODO verify */} |

{/* TODO verify: that session, account, and resource fields are empty for events with no session, and the meaning and value format of each field. */}

## Related topics

- [Forward events to a SIEM](siem-servers.md)
