---
title: "Syslog Tab"
description: "Syslog Tab"
sidebar_position: 100
---

# Syslog Tab

The Syslog tab on an output Properties window is where the SIEM integration settings can be
modified. These settings are initially configured when the output is added. For a monitored hosts
output, this tab can also be used for integration with Netwrix Threat Manager.

Select a Syslog output from either the Monitored Domains tab or the Monitored Hosts tab and click
**Edit** to open the output Properties window. The tab varies based on the type of domain/host
selected.

## For Active Directory Domains

The tab contains the following settings:

![syslogactivedirectory](/images/activitymonitor/7.1/admin/outputs/syslogactivedirectory.webp)

- Syslog server in SERVER:PORT format – Server name of the SIEM server and the communication port
  being used between the applications. The format must be SERVER:PORT, e.g. newyorksrv20:10000.

    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used.

- Syslog protocol – Identifies which protocol is used for the Event stream. The drop-down menu
  includes: UDP, TCP, and TLS.
- Message framing – The TCP and TLS Syslog protocols require Message framing to be set. The
  drop-down menu includes: LS (ASCII 10) delimiter, CR (ASCII 13) delimiter, CRLF (ASCII 13, 10)
  delimiter, NUL (ASCII 0) delimiter, and Octet Count (RFC 5425).
- Syslog message template – Template that controls what data is sent in the event stream. The
  ellipsis (…) button opens the Syslog Message Template window. See the
  [Message Template Window](/docs/activitymonitor/7.1/admin/outputs/syslog/messagetemplate.md)
  topic for additional information.
- Enable periodic AD Status Check event reporting – Indicates periodic AD Status Check event
  reporting is enabled, which means the agent will send out status messages every five minutes to
  verify whether the connection is still active.

The Test button sends a test message to the Syslog server to check the connection. A green check
mark or red x will indicate whether the test message has been sent or failed to send. Test messages
vary by Syslog protocol:

- UDP protocol – Sends a test message and does not verify connection
- TCP protocol – Sends test message and verifies connection
- TLS protocol – Sends test message and verifies connection and shows an error if TLS handshake
  fails

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Linux Hosts

The tab contains the following settings:

![sysloglinux](/images/activitymonitor/7.1/admin/outputs/sysloglinux.webp)

- Syslog server in SERVER:PORT format – Server name of the SIEM server and the communication port
  being used between the applications. The format must be SERVER:PORT, e.g. newyorksrv20:10000.

    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used.
    - The default port for Netwrix Threat Manager is 10001.

- Syslog protocol – Identifies which protocol is used for the Event stream. The drop-down menu
  includes: UDP, TCP, and TLS.

    - UPD is the only protocol supported for Threat Manager.

- Message framing – The TCP and TLS Syslog protocols require Message framing to be set. The
  drop-down menu includes: LS (ASCII 10) delimiter, CR (ASCII 13) delimiter, CRLF (ASCII 13, 10)
  delimiter, NUL (ASCII 0) delimiter, and Octet Count (RFC 5425).
- Syslog message template – Template that controls what data is sent in the event stream. The
  ellipsis (…) button opens the Syslog Message Template window. See the
  [Message Template Window](/docs/activitymonitor/7.1/admin/outputs/syslog/messagetemplate.md)
  topic for additional information.
- Add C:\ to the beginning of the reported file paths – Indicates a Windows-style drive path (C:\)
  is added to the beginning of the NAS file paths in the activity data stream, e.g.
  `C:\Folder\file.txt`

The Test button sends a test message to the Syslog server to check the connection. A green check
mark or red x will indicate whether the test message has been sent or failed to send. Test messages
vary by Syslog protocol:

- UDP protocol – Sends a test message and does not verify connection
- TCP protocol – Sends test message and verifies connection
- TLS protocol – Sends test message and verifies connection and shows an error if TLS handshake
  fails

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Microsoft Entra ID, SharePoint Online, and SQL Server Hosts

The tab contains the following settings:

![syslogentraid](/images/activitymonitor/7.1/admin/outputs/syslogentraid.webp)

- Syslog server in SERVER:PORT format – Server name of the SIEM server and the communication port
  being used between the applications. The format must be SERVER:PORT, e.g. newyorksrv20:10000.

    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used.

- Syslog protocol – Identifies which protocol is used for the Event stream. The drop-down menu
  includes: UDP, TCP, and TLS.
- Message framing – The TCP and TLS Syslog protocols require Message framing to be set. The
  drop-down menu includes: LS (ASCII 10) delimiter, CR (ASCII 13) delimiter, CRLF (ASCII 13, 10)
  delimiter, NUL (ASCII 0) delimiter, and Octet Count (RFC 5425).
- Syslog message template – Template that controls what data is sent in the event stream. The
  ellipsis (…) button opens the Syslog Message Template window. See the
  [Message Template Window](/docs/activitymonitor/7.1/admin/outputs/syslog/messagetemplate.md)
  topic for additional information.

The Test button sends a test message to the Syslog server to check the connection. A green check
mark or red x will indicate whether the test message has been sent or failed to send. Test messages
vary by Syslog protocol:

- UDP protocol – Sends a test message and does not verify connection
- TCP protocol – Sends test message and verifies connection
- TLS protocol – Sends test message and verifies connection and shows an error if TLS handshake
  fails

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For NAS Device Hosts

The tab contains the following settings:

![syslognas](/images/activitymonitor/7.1/admin/outputs/syslognas.webp)

- Syslog server in SERVER:PORT format – Server name of the SIEM server and the communication port
  being used between the applications. The format must be SERVER:PORT, e.g. newyorksrv20:10000.

    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used.
    - The default port for Netwrix Threat Manager is 10000.

- Syslog protocol – Identifies which protocol is used for the Event stream. The drop-down menu
  includes: UDP, TCP, and TLS.

    - UPD is the only protocol supported for Threat Manager.

- Message framing – The TCP and TLS Syslog protocols require Message framing to be set. The
  drop-down menu includes: LS (ASCII 10) delimiter, CR (ASCII 13) delimiter, CRLF (ASCII 13, 10)
  delimiter, NUL (ASCII 0) delimiter, and Octet Count (RFC 5425).
- Syslog message template – Template that controls what data is sent in the event stream. The
  ellipsis (…) button opens the Syslog Message Template window. See the
  [Message Template Window](/docs/activitymonitor/7.1/admin/outputs/syslog/messagetemplate.md)
  topic for additional information.
- Add C:\ to the beginning of the reported file paths – Indicates a Windows-style drive path (C:\)
  is added to the beginning of the NAS file paths in the activity data stream, e.g.
  `C:\Folder\file.txt`
- Resolve UNC paths

The Test button sends a test message to the Syslog server to check the connection. A green check
mark or red x will indicate whether the test message has been sent or failed to send. Test messages
vary by Syslog protocol:

- UDP protocol – Sends a test message and does not verify connection
- TCP protocol – Sends test message and verifies connection
- TLS protocol – Sends test message and verifies connection and shows an error if TLS handshake
  fails

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Windows File Server Hosts

The tab contains the following settings:

![syslogwindows](/images/activitymonitor/7.1/admin/outputs/syslogwindows.webp)

- Syslog server in SERVER:PORT format – Server name of the SIEM server and the communication port
  being used between the applications. The format must be SERVER:PORT, e.g. newyorksrv20:10000.

    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used.
    - The default port for Netwrix Threat Manager is 10001.

- Syslog protocol – Identifies which protocol is used for the Event stream. The drop-down menu
  includes: UDP, TCP, and TLS.

    - UPD is the only protocol supported for Threat Manager.

- Message framing – The TCP and TLS Syslog protocols require Message framing to be set. The
  drop-down menu includes: LS (ASCII 10) delimiter, CR (ASCII 13) delimiter, CRLF (ASCII 13, 10)
  delimiter, NUL (ASCII 0) delimiter, and Octet Count (RFC 5425).
- Syslog message template – Template that controls what data is sent in the event stream. The
  ellipsis (…) button opens the Syslog Message Template window. See the
  [Message Template Window](/docs/activitymonitor/7.1/admin/outputs/syslog/messagetemplate.md)
  topic for additional information.
- Resolve UNC paths

The Test button sends a test message to the Syslog server to check the connection. A green check
mark or red x will indicate whether the test message has been sent or failed to send. Test messages
vary by Syslog protocol:

- UDP protocol – Sends a test message and does not verify connection
- TCP protocol – Sends test message and verifies connection
- TLS protocol – Sends test message and verifies connection and shows an error if TLS handshake
  fails

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.
