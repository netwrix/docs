---
title: "PP Start Screen and Taskbar manager with Citrix XenApp and XenDesktop"
description: "PP Start Screen and Taskbar manager with Citrix XenApp and XenDesktop"
sidebar_position: 40
---
# PP Start Screen and Taskbar manager with Citrix XenApp and XenDesktop

Got icons from Citrix, and want to dynamically get them onto your REAL and VIRTUAL desktop Start
Menus and Taskbars? Good luck… if you don't have Netwrix Endpoint Policy Manager (formerly
PolicyPak) Start Screen and Taskbar manager. Here's the video to show you how to manage XenApp and
XenDesktop icons on the Start Menu and Taskbar.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YH7qWV_o9Ik?si=fYgnVCLycfs2_OGP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PP Start Screen and Taskbar manager with Citrix XenApp and XenDesktop

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can use Endpoint Policy Manager Start Screen
Manager in conjunction with your Citrix world.

You probably have this scenario, which is this is a standard desktop over here. You might even have
a little folder called "Citrix." In Windows 10, it's freaking hard to get these icons. For instance,
if you launch "Firefox," it's going over there to the Citrix machine and, as you can see, kicking
off "Firefox" right there.

It's really hard to get the icons that are here in Citrix land over to a little group here on your
real Windows 10 start screen. I'm going to show you how to do that. Then I'm going to also show you
when you're inside a virtual desktop or a remote desktop, how to configure the icons in there. So
this is a two-part video.

The first thing we're going to do is let's say you wanted to get "Firefox" and "Internet Explorer,"
the ones that are over there on Citrix as icons over here on your real desktop. However are we going
to do that?

What you'll do is you'll right click over and go to "Properties" here in Citrix land and you'll take
this "Target" location and "Copy" it. Then here in Endpoint Policy Manager Start Screen Manager,
this is for our "East Sales Users." So you're saying wherever the user logs on, they're going to get
these settings.

I'm going to say "PP SSM Citrix Demo 1" here. I have some other unrelated things that are not linked
here. We'll go ahead and click "Edit" here and we'll dive down under user side "Endpoint Policy
Manager." We'll go to "Start Screen Manager for Windows 10."

We'll "Add" a "New Collection." The collection is going to dictate the style of how we're going to
be doing this. We can either nuke everything that the user already has ["FULL (REPLACE)"], or we can
simply add more to what they already have ["PARTIAL (PRESERVE)"]. I'm going to go ahead and do that.
I'll call this "Collection 1."

Now inside the collection is where you create that actual group name. Maybe the group name I'll
create here is called "Remote XenApp apps." We'll click "OK" here. Then we want to put our first
icon in there. Like I said, you have to right click over the icon in Citrix land and copy the
"Target" in.

We'll go ahead and right click, "Add" a "New Desktop Application Tile." This is going to be
considered a "Custom application" because it's not registered. You're going to simply paste it in.
You can see it's taking the information that we've already got here as the "Target Application" for
the Citrix receiver. This is Firefox here. You can see it's doing the "Firefox" stuff there.

We'll go ahead and click "Next" here, and actually the rest of it doesn't matter. It all comes from
Citrix land. You have to give it a name, but it doesn't really matter: "Firefox." We'll go ahead and
give it a "Medium" icon and click "Next." We'll call this "Firefox app."

Once we've done this, let's go ahead and do one more here. Let's go ahead and take "Internet
Explorer" here. We'll right click, go to "Properties," and we'll "Copy" the "Target" thing. Again,
you can see it has that specially formatted Citrix idea here.

We'll "Add" a "New Desktop Application Tile," "Custom application," and we'll paste it in. Again,
the "Shortcut Name" doesn't matter. It grabs that. We'll call this "IE." We'll go ahead and go to
"Medium" here and click "Next." We'll call this "IE from xenapp."

All right, now that we've done that, let's see it work. We'll go over here. We can see there's
nothing up my sleeve here. I don't have those groups right now. When I go to a "Command Prompt" and
run GP Update ("gpupdate"), we can actually watch this in real time.

We'll go ahead and watch that. We'll be adding another group or merging that group that we just
created right there. Here's our "Remote XenApp apps" right there. When we run "Firefox" now, it's
not running it locally. No, it's getting it all the way from the Citrix server and presenting it to
us through XenApp and we could do the same thing with Internet Explorer.

That is beautiful thing number one. Beautiful thing number two is what if you click here and you
decide you want to launch. Actually, let me do that. Let me go ahead and take that "Desktop" app.
Let me grab that guy, and we'll "Copy" that in too. Why not?

We'll copy that guy here and we'll go ahead and "Add" a "New Desktop Application Tile," "Custom
application." I'll paste this. This is a full remote desktop, a full RDP remote desktop. Give it a
name: "Remote 123." Again, the name doesn't matter. It's pulled from Citrix. We'll go ahead and pick
"Medium" tile here and we'll call this "Remote Desktop."

All right, I meant to do that earlier. Let's go ahead and see that that takes effect. Then when we
click in it, that's where I want to show you something that's interesting. There we go. Perfect. Now
that we have our applications and our remote desktop, let's go ahead and click into there and see
what happens.

Now we're going in remotely. When we're going in remotely, what's it going to do? It tells you if
you want to get out of that, hit "SHIFT+F2." That's totally fine. Here we are. Now we're on the
inside of the Citrix server. Now again, mine is not totally set up so you're going to see some
server stuff and my apps.

That's great, but wouldn't it be amazing here inside the Citrix world that I could make my own
groups? The question is, how do you distinguish between inside the Citrix world and outside the
Citrix world? In fact, let me go ahead and "Disconnect" here. We actually "Sign out" here.

Let's think about this one more time. This is my real desktop here. Then inside is my RDP desktop.
Here's what I'm going to do to correct for that. Let me rename this first collection. That might
actually make it smarter. I'll "Edit Collection" and I'll call this "Stuff for REAL desktops." Then
I'll create another collection called "Stuff for inside RDP desktops." Does that make sense? I want
to make this maybe "FULL (REPLACE)." I'll nuke whatever is out there and I'll put just the things I
want to in this particular case.

But the question is, how do I make the distinction between "Stuff for REAL desktops" and "Stuff for
inside RDP desktops"? That's where item-level targeting comes in. Let's do the "Stuff for inside RDP
desktops" first.

We'll go ahead and "Change Item Level Targeting" here. We will say only do the "Stuff for inside RDP
desktops" when it's a "Terminal Session." So the RDP session type is "Any." Great, so we light this
up as orange here.

Let's go ahead and create some icons. We'll "Add" a "New Group." We'll call this "inside Apps."
Let's do something a little bit different. We'll go ahead and do Chrome and maybe Firefox this time.
We'll "Add" a "New Desktop Application Tile" here, "Registered application."

We'll pick "Google Chrome," go ahead and pick "Medium." We'll call this "Chrome." Again, these are
the icons that we're going to see inside the remote desktop. Now we'll go ahead and do another one
here for "Mozilla Firefox." We'll call this "Firefox."

Great, but we still haven't made the distinction for how to describe "REAL desktops" versus "RDP
desktops." Well, we did for RDP but not for real desktops. You know what a real desktop is? Anything
that's not an RDP session.

We'll "Change Item Level Targeting" on the "Stuff for REAL desktops" by making a new check to see is
it a "Terminal Session." We don't want it to be to be yes. We want it to be whenever it "Is Not" a
Terminal Session. See what I'm doing there?

So I have "Stuff for REAL desktops." Only when it's real desktops is it going to evaluate this and
do these icons. Then I have "Stuff for inside RDP desktops." It's only going to evaluate that when
it's an RDP desktop.

Let's see it all work. If I go back over here, just to prove a point, if I run GP Update
("gpupdate") here, this is my real machine. My real machine shouldn't change at all. It should
maintain these three icons just the way we said. Nothing changes. Everything is great.

But now when I go inside "Desktop1," this is going to be a full RDP session. We said nuke the
existing icons and slap in just the icon group that I want. Let's see if it works. Click in here.
Here are the "Inside Apps," and you can see we have "Google Chrome" and "Firefox." If we launch
"Google Chrome," it's getting it right here locally to the Citrix box as far as it's concerned
because it's running there on the full remote desktop. There you go.

In this way you are autosensing. You're making a collection. The collection senses if you're on a
"REAL" desktop and it will do these things. Another thing that will sense are you in "RDP" desktop
land and, if so, do these things.

With item-level targeting plus Start Screen Manager, you're able to manage your real machines. Let's
go back to your real machine by selecting "Sign out" here. What we're seeing is on our real machine
we're able to add items to the start menu.

For our remote desktops when we log on we're able to manipulate and correctly solve the challenge
for the remote desktop problem. When we click into it, we're going to see, like I said, the "Inside
Apps." We said nuke all those icons and just put the things that are important to us.

Let's do one last thing since I'm thinking about it which is the actual taskbar. Let me go ahead and
"Disconnect" here. Let's pin something to the taskbar. Maybe we could do it for all cases. So maybe
in all cases we'll have a "Collection" here. We want to say always pin Firefox and we want to do it
everywhere.

We'll "Add" a "New Desktop Application" for the "Taskbar Manager for Windows 10." It's a "Registered
application." We'll pick "Mozilla Firefox." We want to call this "Firefox" here. This "Collection"
has no item-level targeting on it, so it should work for our "REAL desktops" and our XenApp "inside
RDP."

In order to see this work, we have to run GP Update ("gpupdate") on the real computer. Then we're
going to log off and log back on and see it take effect. The taskbar thing only works after you get
the Group Policy and after you log on. So we're going to run GP Update ("gpupdate") first. We going
to log off, log back on, and then we'll check inside the Citrix box too and see how that shakes out.

Let's go ahead and "Sign out" here. We'll go ahead and sign back on. There we go. This is our real
machine. We can see Firefox is there. Now if I were to go into the remote desktop here, here I am in
the remote desktop now. If we take a look, there's Firefox in the remote desktop and it launches
just like that.

Of course, Firefox wants to be updated. That's what Firefox likes to do. But you get the gist. The
point is that we've pinned the taskbar icon in real life and also in RDP life because we didn't say
do different things for different circumstances.

I hope this helps you out and you're ready to get started with Endpoint Policy Manager Start Screen
and Taskbar Manager in your real world and also in your Citrix world.  
Thanks so much for watching.


