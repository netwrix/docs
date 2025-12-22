---
title: "Installing Compliance Reporter Server and Client"
description: "Installing Compliance Reporter Server and Client"
sidebar_position: 10
---
# Installing Compliance Reporter Server and Client

Learn how to quickly license PPGPCR Endpoints, and Server. Then install both and verify that
everything is working.

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8ONOg2ovzE" title="PPGPCR: Installing Compliance Reporter Server and Client" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## PPGPCR: Installing Compliance Reporter Server and Client

Hi, this is Jeremy Moskowitz, former Group Policy MVP and founder of PolicyPak software and in this
video we're going to go through the walk-through of how to install Group Policy Compliance Reporter
client and server. To get started you will either have one or two license files from our sales team.
You'll have the server piece, which is included with the PolicyPak On-Prem edition and also the
endpoint license. Now the endpoint license is optional. If you don't have the endpoint license we
will report on PolicyPak delivered settings like applications and admin template settings, stuff
that PolicyPak will deliver is automatically licensed.

However, if you have your endpoints license for Group Policy Compliance Reporter, that lights up all
the Microsoft stuff. So all the stuff you might find in a garden variety Group Policy Object, things
like stuff here under, say, policies, admin templates, everything under preferences, everything
under security settings. So if you want to report on this stuff, the stuff that Microsoft ships,
this really important stuff, that's what you're paying for with the Group Policy Compliance
Reporter, okay? So I'm going to assume that you have the endpoint license.

So basically, the best way to get started here is to create a new GPO and we'll call this PPGPCR
endpoint license, okay? And let me go ahead and find that there. PPGPCR endpoint license. So when
you click ‘edit' here, what I'm going to show you how to do is simply import that license directly
into a Group Policy Object. I'll show you how to do that. So on the computer side you'll just click
on the PolicyPak node here. So you gotta left click, then right click, and then click ‘license
management', all right? And at this point, you'll get this window that comes up here and you're
going to import the licenses. So I happen to have my licenses under licensing example, new, sales
only, and I have it under the endpoint license, okay? So I'm consuming this license and you can see
that, well, this is where my endpoints are licensed for. Anywhere in sales is fair game. That's what
I told my sales team. So I'll go ahead and click ‘close'.

And so now that I've got this Group Policy Object, let's link it over to where my endpoints are. So
I'll link it over my desktops, my west sales desktops for instance. So, PPGPCR endpoint license. So
there's my west sales desktops so I'll do my west sales laptops as well while I'm here. PPGPCR end
point license. I'll do my east sales desktops. I'll then finally do my east sales laptops. Okay, so
that gets my endpoints all ready to go.

The second piece of the puzzle though, is the servers – or the server, rather. So for instance, I
said that I wanted my server to live somewhere in sales. In fact, it's going to be living on an east
sales server. So I'll just do the exact same thing. I'll create and link a GPO here and I'll call
this PPGPCR server license, okay. So here's a new Group Policy Object, I'll click ‘edit' here and
then once the GPO comes up, I'll import the license. All right, so we'll go ahead and go to
PolicyPak here, left click first, right click second, license management, and then we will import
the server license, okay. So now, again, the server has to live anywhere underneath sales. We're
good to go and we're done.

So now we've got our licenses all set up and ready to go and now let's go ahead and do the install.
So the install lives in the download, which you get from the portal. We'll go to the Compliance
Reporter, and let's do the server install first, okay. When you install the server, actually, a
whole lot of nothing happened. And what I mean is that you're not going to see any UI or any kind of
icons or anything fancy. So just go ahead and click ‘next' here, be sure to read the ULA, we'll go
ahead and select the install folder here. One of the questions I get sometimes is, is there a
database for the Compliance Reporter server and the answer is yes, but it's an internal database. So
you don't need to configure it or point it toward anything or set up your own secret server or
anything. It's a little database that just lives in app data on this server, okay.

And we do recommend that you install server Compliance Reporter on an actual server. You don't
technically have to, but we do recommend it. Sometimes we also get asked what the minimum
requirements are. They are very, very low so they can live in a VM and that same server can be doing
lots of other tasks. We're very flexible in that way. If you're using something like AGPM, or a
print server, or a file server, all those are good candidates to also run the Compliance Reporter
server. So let me show you what it does. You're not going to find anything in the start menu that's
going to help you here, but if I go to computer manage here, I just want to show you what got
accomplished by installing the server piece. All right, if we take a look at services and we look up
PolicyPak, go ahead and sort here by P, PolicyPak, Group Policy Compliance Reporter server service,
that's it. That's all that happens. The server service gets installed and it's waiting for you to do
something interesting. So that's it.

So the second thing we're going to do is install the Admin Console. Now, there's no restrictions on
where you can install the Admin Console. So I happen to be installing it here on the same machine
which happens to be a server. I can install it on all of my administrator machines. That's not
what's licensed so you have unlimited use to install the Compliance Reporter Admin Console, which is
also known as the client, as far and wide as you want. So that's totally fine because you're not
paying for this, you're paying for work on the endpoints, okay, and that's 90 percent of the battle.

So if you want to at this point you can connect the client to the server. Okay, this is optional,
the client and the server, really the server itself is completely optional but we really recommend
it because when you take a look at how to do push auditing you're going to find that that's
required. So we recommend it so that's what I'm demonstrating here. So here in settings you're going
to then pick multi-user mode, I already have it selected here, and then you'll type in the name of
the machine that you're on or it should automatically find it, which it did here in this case which
is DC, and click ‘okay.' And that's it. You're now using the server addition.

If you want to install the client on some other machine, for instance this is another
administrator's machine, again it's super easy, they can go ahead and themselves run the Compliance
Reporter Admin Console/Client, okay? And when they do this, they'll get a slightly different
experience because it's never been run before here. So we'll go ahead and run the first time
experience here. It asks you, what do you want to do? So since you have a server you'll go ahead and
select multi-user mode, okay? So multi-user mode means I have a server basically. Go ahead and click
‘next'. You can type in the name of the server which would be DC. And even though it says IP it'll
take a name or IP address. We've got the port, it should automatically be open and when we click
‘next' here, click ‘finish'. That should be it. There we go. It made contact to the server and now
your snapshots, your tests, and your results are all shared. There we go. All right.

So one more piece of the puzzle here, to put a fine point on it, on this particular machine I happen
to have the PolicyPak Client Side Extension installed. That's actually optional. We will cheerfully
sell you the Compliance Reporter without selling you PolicyPak On-Prem or PolicyPak Cloud Edition.
That is a perfectly valid thing and in that case you don't need the PolicyPak Client Side Extension.
The Group Policy Compliance Reporter has agent lists auditing so you'll see that in another video if
you want to learn how to set that up.

But again, the Client Side Extension is only required to do PolicyPak work. So for PolicyPak
Application Manager, PolicyPak Preferences, PolicyPak Admin Templates, or PolicyPak Security
Manager, the Client Side Extension is required to do work and that's licensed. But the Compliance
Reporter stuff, that's not required. You don't need the PolicyPak Client Side Extension on every
machine, but you are probably a PolicyPak customer already and therefore you have the Client Side
Extension everywhere. I hope that makes sense.

Okay, thank you. I hope this helps you out to get started. We have this all very, very detailed and
documented in the manuals. If you have ‘how do I' questions, please post them in the forums and
we'll get back to you very, very quickly. And looking forward to getting you started on your
journey. Thanks.

