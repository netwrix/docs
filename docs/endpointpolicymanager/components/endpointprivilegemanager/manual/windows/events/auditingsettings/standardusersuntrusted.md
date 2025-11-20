---
title: "Discovery of Untrusted Standard Apps"
description: "Discovery of Untrusted Standard Apps"
sidebar_position: 30
---

# Discovery of Untrusted Standard Apps

The goal of SecureRun™ is to block applications from running when the owner of the file is not on
the SecureRun™ list. When you turn on SecureRun™, this means that some applications will be
automatically blocked that were not blocked before. When you use the **Audit untrusted
applications** discovery item, you enable events that express when an application is automatically
blocked when SecureRun™ is turned on.

Here, you can see an application running when SecureRun™ is not enabled. This would occur if the
user was a Local Admin or a Standard User. When **Audit untrusted applications** is turned on, you
can see Event 6210 is generated, indicating that this application would have been blocked when
SecureRun™ was enabled.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/auditingsettings/discovery_of_untrusted_standard.webp)

The audit is only triggered when one of the following is true:

- The file is owned by the user and is run by that user. This indicates that the user likely
  installed the application himself (or copied the file, etc.). When the user transitions from Local
  Admin to Standard User, you should be prepared for the automatic block to occur.
- The file is owned by anyone not on the standard list of SecureRun™ users: local administrators,
  TrustedINstaller, or System. This indicates that the application was installed in some unusual
  way, not by the Admin user himself or by an IT administrator, and you should be prepared for the
  automatic block to occur.
- SecureRun™ is not actively turned on. That is, these events will not be generated with the user
  is made secure via SecureRun™.

Final thoughts:

- This event will not occur when the file is owned by another administrator, or applications are
  used over the network and not on the local drive.
- These events are not generated when SecureRun™ is not activated.



