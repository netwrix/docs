---
title: "Server Mode"
description: "Server Mode"
sidebar_position: 40
---
# Server Mode

Why do you need PPGPCR Server mode? Because all your computers' GP Results will be stored in one
place, and you can quickly test to see if you are in compliance or not. Without PPGPCR Server, you
simply don't know what's going on with ALL of your users or computers.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iVIWRr_oxBI" title="PPGPCR: Server Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPGPCR: Server Mode

In the last video, we talked about the Compliance Reporter Standalone Edition. We interrogated all
of our computers in a set and made a snapshot. If those computers were on, that's great. But if any
of my computers were off when I made that snapshot, then that would have been a problem since they
wouldn't be online and wouldn't be there to interrogate.

Compliance Reporter Server changes all that. Compliance Reporter Server enables what's called
Auditing Mode. You set it up by going to "Settings" and clicking on "Audit Setup." I've already done
that to make this go a little faster.

Now your endpoints don't have to be online at the same time you are for you to know what's going on
or what previously happened on the machine. You can simply click on any of these preconfigured
reports that demonstrate exactly what's happening everywhere in your whole domain.

For instance, you can see that "Win8Computer32" was previously logged on by the "Administrator."
Then you can click on that settings report right here and get the Group Policy results report right
here. All this data is being fed in real time across your network, and the best part is there's no
client side agent or software installed.

The way this works is that on any given machine – I'll go ahead and show you how this works – if you
go to "Computer/Manage," we deliver a scheduled task using Group Policy right here. There's our
scheduled task called the "PolicyPak GP Compliance Reporter Auditor." Whenever Group Policy
triggers, for instance, if I were to go on this machine and run GP Update or log off or log back on,
after Group Policy applies, automatically in the background after a user logs on about a minute
later that data shows up right here in our Compliance Reporter Server.

Now that the data is here on the server, it's super easy to continue with the stuff you already know
how to do. You simply click on "Tests." You create the tests that you want to. You click on
"Results," and you can pick a test that's important to you, pick an "RSOP Source," which can be a
"Snapshot" if you want it to or it can be a preconfigured report that has all the computers in it,
and you can interrogate all of your computers at once against what's happening in real time.

In this case, you can see that all of my computers are compliant, but two of my users are compliant
and two of them aren't. If I take a look, I can see that I've got a problem and I can easily fix it.

The Group Policy Compliance Reporter Server's goal is to, without any agents at all or anything
installed on your endpoint computers, throw the data to the server for you to figure out what's
going on, on all of your machines, define what compliance looks like for you and automatically
determine which computers and users are compliant or not.

If you want to get started with the Group Policy Compliance Reporter Server, it's easy to do. Just
go ahead and connect with us, and we'll get you the bits and you can try it real soon.

Thanks so much, and we'll talk to you soon.

