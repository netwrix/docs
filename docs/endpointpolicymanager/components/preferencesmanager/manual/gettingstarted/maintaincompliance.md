---
title: "Maintaining Compliance"
description: "Maintaining Compliance"
sidebar_position: 30
---

# Maintaining Compliance

When a computer is off the network and out of contact with a domain controller, Group Policy
Preferences has no way to reapply its settings. Endpoint Policy Manager Preferences Manager fixes
this problem. To see this in action, delete the www.policypak.com icon from the desktop. Then, test
Endpoint Policy Manager Preferences Manager's automatic compliance on the client machine by
unplugging the network cable and then doing one of the following:

- Logging out and back in
- Running PPupdate (command prompt)
- Waiting 60 minutes

Endpoint Policy Manager Preferences Manager will automatically refresh any Group Policy Preference
items that are non-compliant. Remember: Group Policy Preferences does not have this capability out
of the box.

Because we kept the defaults, these Group Policy Preference items will apply to all users on the
system. Therefore, you can also try logging out and logging on again as a different user. You should
see the same result: the Group Policy Preference shortcut item appears on the desktop for every
user.

:::note
You can filter which users will see this shortcut item via Item-Level Targeting or via
Targeting within the MSI itself.

:::


