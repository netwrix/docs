---
title: "Advantages of Using File Associations Manager"
description: "Advantages of Using File Associations Manager"
sidebar_position: 30
---

# Advantages of Using File Associations Manager

With Endpoint Policy Manager File Associations Manager, you don't have to build the perfect
workstation and then export all the file associations at one time, making sure to get it all correct
the first time, or rebuilding the perfect workstation over and over again. Additionally, if your
organization makes a change, for example, to 7-Zip instead of WinZip, and wants to quickly change
your .zip associations, you don't have to rebuild your perfect workstation and repeat the process
over and over.

With Endpoint Policy Manager File Associations Manager, you only need to:

- deploy your application as you normally would, using Microsoft Endpoint Manager (SCCM and Intune)
  or PDQ Deploy, and
- use Endpoint Policy Manager File Associations Manager to make the association between the
  extension the application.

In addition, it is very easy to have different associations for each computer group by making simple
policies for your associations using Endpoint Policy Manager File Associations Manager. Because
Group Policy creation is distributed (that is, different people can create different GPOs), you can
leverage Endpoint Policy Manager File Associations Manager when different people have different
needs. In the case of a conflict of two associations, the rules of Group Policy precedence will take
effect.

Endpoint Policy Manager File Associations Manager uses the same basic method and policy settings
that the in-box Microsoft method uses. That is, Endpoint Policy Manager File Associations Manager
will create its own associations XML file (one per computer). It works with Microsoft's method
(using the XML file and corresponding Group Policy setting), but adds functionality.

However, both methods have some known limitations. First, after the associations are set, users can
still work around these methods and try to associate different applications to file extensions.
However, those user-created associations will be wiped out the next time they log on and the policy
is applied again. Next, both methods only take effect when the Group Policy is set on the computer
and the user is required to log off and then log on again. Additionally, both methods only work when
the machine is domain-joined. So even though Endpoint Policy Manager MDM and Endpoint Policy Manager
Cloud can deliver a wide variety of settings to non-domain-joined machines, neither the in-box
Microsoft method, nor Endpoint Policy Manager File Associations Manager, can configure machines
unless the machine is domain-joined. Finally, both methods will not affect a user logging onto the
computer the first time. The policy will take effect on the second login after the computer gets the
Group Policy update.

:::note
For a video demonstrating how neither Endpoint Policy Manager File Associations Manager
nor Microsoft's method can affect a user until the second login, see the
[Endpoint Policy Manager File Associations Manager: Understanding the First Login](/docs/endpointpolicymanager/components/fileassociationsmanager/videolearningcenter/tipsandtricks/firstlogin.md)
topic for additional information..

:::


