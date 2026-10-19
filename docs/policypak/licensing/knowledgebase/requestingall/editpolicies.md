---
title: "What are the most common questions about editing policies using the PolicyPakCloud policy editor (instead of using the MMC to upload to PolicyPak Cloud?)"
description: "What are the most common questions about editing policies using the PolicyPakCloud policy editor (instead of using the MMC to upload to PolicyPak Cloud?)"
sidebar_position: 50
---

# What are the most common questions about editing policies using the PolicyPakCloud policy editor (instead of using the MMC to upload to PolicyPak Cloud?)

A new feature of Netwrix PolicyPak Cloud where you can create and
edit your own policies inside PolicyPak Cloud without having to pre-create, then
upload them. Here are the most common questions and answers

Q: Is this all of the Admin Templates, Windows, Control Panel, and system stuff / ADMX items I would
see as if I was inside the GPMC?  
A: Yes.

Q: Where are the Security settings?  
A: We have those in PolicyPak Cloud too.

Q: Do I need to update my PolicyPak Cloud client or PolicyPak Cloud
Client Side Extension in any way?  
A: No.

Q: What versions of Office do you have ADMX settings for?  
A: We have the ADMXs there for most versions of Office. When new ones come out, we update them for
you automatically.

Q: How is this kept up to date?  
A: We do it for you. For Windows, Office and PolicyPak ADMX settings. See
[PolicyPakCloud: Use in-cloud ADMX settings maintained by PolicyPak for Windows, Office, Chrome and more](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/admxsettings.md)

Q: Do you have Windows 10 and 11 settings in PolicyPak Cloud?  
A: Yes. See
[How Netwrix PolicyPak Enables Flexibility of Different Group Policy Stores for Windows 10 and Windows 11](https://www.policypak.com/resources/pp-blog/group-policy-stores/)
for additional information.

Q: What about Custom ADMX, like Acrobat and Chrome? Can I upload those myself?  
A: Yes. See
[PolicyPakCloud: Upload and use your own ADMX files to PolicyPak Cloud](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/admxfiles.md)

Q: Why don't you have editors for all the other types: GPPrefs, Security, and PolicyPak Settings?  
A: We have nearly all of them actually at this point.

Q: Will all policy types (eventually) be editable within PP Cloud?  
A: Yes. That's the goal. But one type will never be supported, PP Application Settings manager.
You'll always need some kind of admin station to make those policies, export them, then upload them.

Q: Can I edit previously uploaded PP Admin Template settings using the PP Cloud editor?  
 A: Yes. If you encounter trouble, please open a support ticket so we can fix that.

Q: How are users and groups supported within ILT in cloud?  
A: Basically the same way. If you know the SID of the group or user ,you would place it into the SID
box. If the SID is not known, the ILT engine does its best to evaluate by name, but it's not
guaranteed.

