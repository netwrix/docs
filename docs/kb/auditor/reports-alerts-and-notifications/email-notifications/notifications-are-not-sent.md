---
description: >-
  Troubleshooting steps for when Account Lockout Examiner does not send email
  notifications for account lockouts, including how to verify settings and
  review logs.
keywords:
  - account lockout
  - notifications
  - SMTP
  - ALEService.log
  - telnet
  - Netwrix Support
  - SmtpException
  - SocketException
products:
  - auditor
sidebar_label: Notifications are not sent
tags: []
title: "Notifications are not sent"
knowledge_article_id: kA00g000000H9bKCAS
---

# Notifications are not sent

Account Lockout Examiner does not notify about account lockouts although Notifications are enabled.

An e-mail notification is sent only when an actual lockout security event is tracked.

There are two possible reasons why notifications typically are not sent — either a lockout is not tracked, or there are errors during sending of the notification.

## Verify that a lockout event is tracked

To make sure that an actual lockout event is tracked, verify that the lockout timestamp is correct. If it is not, refer to the following KB article: https://kb.netwrix.com/2763

If the lockout timestamp is correct, then a notification should be sent.

## Verify notification settings

First, make sure all notification settings are correct:

1. Go to **File** > **Settings** > **Notifications**
2. Check mail server address and port.
3. Your mail server should accept anonymous SMTP connections. Test with `telnet` to confirm you can connect on the specified port.
4. Make sure that there is no firewall or antivirus software blocking inbound and outbound connections.

If all the settings are correct, the easiest way to find the error is to review the product log.

NOTE. If you have a valid support contract you can submit a support ticket and send the log to Netwrix Support.

By default the log is located in:
`C:Program Files (x86)NetWrixAccount Lockout ExaminerTracingALEService.log`

Scroll to the very bottom and search for the "NOTIFICATIONS" text in the Up direction.

NOTE. Messages of Notification type are logged only in case an error occurred. If there are no such messages, then either there were no errors during notification sending, or the product did not try to send it at all — there were no lockout events tracked.

When you find the corresponding "NOTIFICATIONS" message, the error message is listed in the second line, for example:

```text
ALEService.exe Warning: 0 : [TID, <timestamp>] NOTIFICATIONS: smtpserver: <IP>, smtpport: <port>, from: <fromemail>, to: <toemail>
System.Net.Mail.SmtpException: Failure sending mail. ---> System.Net.WebException: Unable to connect to the remote server ---> System.Net.Sockets.SocketException: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond
   at System.Net.Sockets.Socket.DoConnect(EndPoint endPointSnapshot, SocketAddress socketAddress)
   at System.Net.ServicePoint.ConnectSocketInternal(Boolean connectFailure, Socket s4, Socket s6, Socket& socket, IPAddress& address, ConnectSocketState state, IAsyncResult asyncResult, Int32 timeout, Exception& exception)
   --- End of inner exception stack trace ---
```
