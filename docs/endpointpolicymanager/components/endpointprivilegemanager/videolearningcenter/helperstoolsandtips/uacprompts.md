---
title: "Overcome Network Card, Printer, and Remove Programs UAC prompts"
description: "Overcome Network Card, Printer, and Remove Programs UAC prompts"
sidebar_position: 10
---
# Overcome Network Card, Printer, and Remove Programs UAC prompts

Very often, users need to be able to manage their own network cards, printers with drivers, and
remove software which is installed on the machine. With Netwrix Endpoint Policy Manager (formerly
PolicyPak) Least Priv Manager, you can do all three, super duper easy. Check it out here.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lOmDtVNtgvM" title="Endpoint Policy Manager Least Priv Helper Tools: Overcome Network Card, Printer, and Remove Programs UAC prompts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Overcome Network Card, Printer, and Remove Programs UAC prompts

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can help users overcome
three big challenges: letting them modify their own network adapters, letting them modify their own
printers, and helping them modify their own add or remove programs.

Let's show what can happen if you don't have Endpoint Policy Manager Least Privilege Manager. First
thing, if they try to go to "Open Network & Internet settings" here and go to "Change adapter
options" – for instance, they're roaming and they need to go from a particular IP address to DHCP or
they want to turn off IPv6 or there's something that you need them to do here – if they go to
"Properties" here, they get thrown with a big old UAC prompt in their face. Or if they try to
"Disable" the network card, they get a big old UAC prompt. Can't do that.

Let's say they want to go and give themselves a new printer. Maybe there's a special printer with a
driver that they need. No problem. They'll go ahead and "Add a printer or scanner." We'll go ahead
and wait for Windows to prompt us here. Here's is "The printer that I want isn't listed."

Let's go ahead and give it a driver. I have a regular garden-variety driver here. I'll go ahead and
click "Have Disk." I have it in "c:\DEMOS1." Here we go. I have this Canon printer "Driver" here. I
go to install it and it looks like it's going to work. Then as soon as you get here, you get a big
old UAC prompt in your face. That does not help you.

Lastly, let's say you decide you want to "Remove Some of Your Apps" or go to "Add or remove
programs" here and you decide it's perfectly fine for that user to get rid of some application that
maybe is old and crusty and should be uninstalled. Well, they go ahead and try to go click
"Uninstall" and what happens? They get a big old UAC prompt in their face.

Now I've already got the Endpoint Policy Manager Least Privilege Manager helper utilities all set up
and ready to rock. We have a different video to explain how that works. Let me just show you how
quick and easy though it is for your end users.

I've already got a little group here on the Start Screen called "PPLPM Helper Tools." You can call
it whatever you want, or you don't have to do this at all. You could just pin it to the Desktop like
I've got over here. So you've got some options. Long story short, I think this is the best way right
here on the Start Screen.

Let's do it in the same order. Let's say they want to manage their network card ("Manage Your Net
Card"). No problem. Here in network card land, you just right click, go to "Properties," and you can
do things like not use IPv6 or change the IP address. Whatever you need to do here, it's all valid
and all works. You go ahead and click "OK" and life is good. In order to see these changes though,
just for the record, you may need to come back into it and see those changes. That's the first
thing, and we have a little "NOTE" to that effect.

The second thing was about printers, so let's go ahead and try to do that. Again, instead of using
the Microsoft way to do it though, you're going to use our link, the "Manage Your Printers" link. If
you want to go "Add a printer," no problem. We'll add a printer. Pick "The printer that I want isn't
listed" because you have the driver. You know it's not going to be listed.

"Add a local printer or network printer with manual settings." There's the port and so on. "Have
Disk," we'll browse for, there's the same driver. Double click, "OK," "Next." Before we would have
gotten a UAC prompt. We click "Next," and we are good to go. "Do not share this printer." No need
for that. Click "Next" and you are done. It couldn't be simpler.

Last on the docket is add or remove. If you want to enable your users to "Remove Some of your Apps,"
you can absolutely do that. By default, every application on the machine that's a Win32 app will
show up here, including our stuff by the way. So you probably want to limit this, and we have a
quick and easy way to limit the things that users can uninstall.

I'm going to show you both things right now. By way of example, if you wanted to let a user
uninstall absolutely anything at all, they just simply right click, "Uninstall," and go to town on
it. No UAC prompt involved. It just enables them to remove the application that you want.

If you wanted to only show specific applications, you can do this with an ADMX item. You can show
either items that have a particular "Name" in them or a particular "Publisher." So you can either
whitelist or blacklist by either "Name" or by "Publisher." It's incredibly powerful.

By way of example, if I only want to show items that are from "Microsoft," it's very easy to do.
I'll go over to my Group Policy Object here. Here is the GPO I used in order to get it all set up.
Let me show you how quick and easy this is to do.

We'll just go to "Policies/Administrative Templates/PolicyPak/Client-Side Extensions/Least Privilege
Manager." And you can do this, again, by name or by publisher. I want to include ("Enable") and
"Show" only the ones that are by Microsoft. I could say "Value name" is "\*Microsoft\*" and set it
to "1." This is going to show me only these specific publishers. You can do it by name or by
publisher. You can hide or you can show. I'm going to close this.

I'll do a quick run of GP Update ("gpupdate"), and then I'll show you what it looks like after GP
Update finishes up. Okay, we'll go ahead and close this out.

Now we'll go ahead and rerun our utility "Remove Some of your Apps," and here are the items
specifically that are only from Microsoft. If you want to let a user uninstall this item, right
click, "Uninstall," and you are ready to go. You can say only Sally in the shipping department can
see the items that are for shipping and so on. And just like that, you're off to the races.

Hope this helps you out and you're ready to get started with Endpoint Policy Manager Least Privilege
Manager real soon.

Thanks so much for watching.


