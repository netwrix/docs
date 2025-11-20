---
title: "Endpoint Policy Manager Start Screen Manager: Own the Win10 Start Menu"
description: "Endpoint Policy Manager Start Screen Manager: Own the Win10 Start Menu"
sidebar_position: 20
---
# Endpoint Policy Manager Start Screen Manager: Own the Win10 Start Menu

The Windows 10 Start Menu is a beast to configure. Instead of leaving the Start Menu to users, YOU
be in charge. See this video to get the basics down in minutes !

<iframe width="560" height="315" src="https://www.youtube.com/embed/05p9hGDMxGE" title="Endpoint Policy Manager Start Screen Manager: Own the Win10 Start Menu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Start Screen Manager: Own the Win10 Start Menu

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Netwrix Endpoint Policy Manager
(formerly PolicyPak) Software. In this video, I'm going to show you how you can tame the dreaded
Windows 10 Start Screen. How do we do it? We're going to use our Start Screen Manager program.

You can see, we already have three groups that are here in the
[https://www.policypak.com/pp-blog/windows-10-start-screen](https://www.policypak.com/pp-blog/windows-10-start-screen).
We're going to create our own called Our Important Apps. What are we're going to add there? We're
going to add maybe "Adobe Reader," maybe add the "Calculator" and also add and Edge tile. We'll see
how to do that.

Over here on our "GPMC," these are our "East Sales Users." We'll go ahead and "Create a GPO in this
domain, and link it here." We'll call this "PPSSM ESU Demo." We'll right click over our "East Sales
Users" and click "Edit." Now what we're doing is on the user side. You could also do what we're
about to explain on the computer side. I'm not going to do that.

I'm going to do this here on the user side and go to the "Start Screen Manager for Windows 10" and
right click, "Add/New Collection." Now a collection is where the groups are going to be contained.
You have to make an important decision here, and I'm going to show you both.

"PARTIAL (PRESERVE)" will preserve what's currently there. We're going to start off with that, and
then later I'm going to show you how you can replace – "FULL (REPLACE)" – what's already on the
endpoint. Let's start off with "PARTIAL (PRESERVE)." I'll show you what this looks like here.

Inside this collection, we're going to "Add/New Group." This is the name of the actual group that's
going to show up on the Windows 10 Start Screen Menu. We'll call this "My Important Apps." I'm not
going to worry too much about these extra options for now. I'll just go ahead and click "OK."

Inside here, now we're going to "Add" our icons. We'll start off with a "New Desktop Application
Tile." This machine, the machine I happen to be on, is the "GPMC" running on Server 2016. It has an
application on it that you know and love, and that's "Adobe Reader." I have the same version of the
application on my endpoint that I do here. That makes it easy. I can just point and click my way to
selecting it.

And then I can pick what tile size. Desktop applications have two tile sizes, and the Windows
universal apps have four tile sizes. I'm going to go ahead and pick "Medium." I'll call this "Acro
Reader tile." It doesn't matter what that's called. That's just the policy name. And we've created
our first entry.So we have the collection ("Collection 1"), the group ("My Important Apps") and our
entry ("Acro Reader tile").

Next what we'll do is we'll "Add/New Universal Application Tile." For instance, this is the big
metro-style applications, Windows universal applications. I'll click "Next." But I'm on a server
machine and a server machine doesn't have Windows universal apps on it, so we don't get a complete
list.

But what you can do is "Import from" an "XML file" from a machine that you know and love. In fact,
I've already done this. I have my export from my Windows 10 machine. So all my custom apps and all
the built-in apps and all the Windows universal apps that are already on my machine over here, I've
already got ready to go and I can pick from them here.

I'm going to go ahead and pick Calculator. Let me go ahead and sort by the "Name" here and find
"Calculator." There we go, there's "Calculator" and click "Next." I'll make this big calc, so I'll
go ahead and choose the "Large" and I'll call this "big calc."

Then the last thing I'll do is I'll "Add/New Edge Tile." My Edge tile will let me give it a name.
I'll call this "Get Endpoint Policy Manager Help," and then the "URL" can be
[https://www.policypak.com](https://www.policypak.com); There we go, and click "Next" and I can make
this a "Wide" tile.

You can also change the Desktop "Background" colors if you're so inclined and all that sort of
thing. I'm just going to leave the defaults here. So I have a "Wide" tile here. Click "Next," and
I'll call this "Get Help for PP website." That's it. I've created three entries. Let's go over to
our endpoint.

Let me show you the before picture. I've got three built-in groups from Microsoft. Now we'll go
ahead and go to a "Command Prompt" and run GP Update ("gpupdate"). In this demonstration, you're
seeing me use Group Policy to do the work, but you don't have to. You could use SCCM. You could use
an MDM service or anything else you use to deploy policy, either on-prem or a cloud service. I just
happen to be using Group Policy in this demonstration. Let me go ahead and close out the GP Update
window here.

Now it's time to check it out. If we click on the Start button here, here we go: "My Important
Apps." You can see the little lock icon designating that if you were to try to drag in something
over here, it's a "Locked group."

Now we called this Partial mode. Partial lets users move things around. You can see I'm doing this.
I'm letting users do whatever they want in their playground, but they can't screw up my playground.
They can't unpin it. They can't move stuff in. It's just as simple as that. That's the first thing I
wanted to show.

The second thing is, what if you don't want these built-in groups at all and you don't want any
users to mess with any of the groups that they have. That's called Full mode. Let's go ahead and see
what that looks like.

Actually, you know what I didn't do? I didn't click on all these icons just to prove a point, just
to show that they are working just the way you would expect here. I'll click on that guy ("Adobe
Reader"). That guy's fine. I'll go ahead and click on "Calculator." That guy's fine. I'll go ahead
and click on "Get Endpoint Policy Manager Help," and that guy's fine. So we've deployed all three
icons right to the Start Menu just the way we would expect.

Again, for the next trick, what we want to do is to say let's get rid of all the default stuff and
also anything that a user might have done up until this point, and that's called Full mode. We'll go
back to the "Collection 1" we created earlier here. We'll right click and we'll "Edit Collection,"
and we'll change this to "FULL (REPLACE)" mode.

"Default and User-created Groups are REMOVED. User is prevented from making changes to your defined
groups. Only groups created by Endpoint Policy Manager will remain." That's it. This is not
reversible, so we throw up a "WARNING" just to make sure you understand that this is not reversible.
"ALL GROUPS CREATED BY THE USER (or the OS Defaults) will be DELETED."

Let's go ahead and see the result of that. Let me show you the before picture. We have all four
groups. Then we'll go to a "Command Prompt," we'll run GP Update ("gpupdate"). All this will take
effect also at next logon and also in the background. I just happen to be running GP Update to make
things go a little bit faster here. I'll go ahead and wait for this to finish. Now that that's done,
let's go ahead and close out this window here.

We'll go over to the Start Menu, and just "My Important Apps." Users can no longer create groups,
and they can't mess with the groups you've set down. They can't drag icons in and so on. It's just
the way you would expect.

Now what if you wanted to add something new? It couldn't be easier. You just go back to your group
here. You can right click, "Add/New Desktop Application Tile," "Registered application." I happen to
have "Google Chrome" on this machine here. I'll go ahead and find "Google Chrome" and click "Next."
I'll make it a "Medium" tile and we will call this the "Chrome icon." That's it. We have all four
guys in here.

Let's show you the before picture. Let's go ahead and run GP Update ("gpupdate") one last time here.
We'll go ahead and see this take effect. We'll go ahead and let this finish. Close this out, and now
let's see the after picture.

Just like that, you've added "Google Chrome" to your Start Menu. You can use your software
deployment tool to deploy it and use Endpoint Policy Manager Start Screen Manager to get the icon
right where you want to in the right group of your choice.

Endpoint Policy Manager Start Screen Manager is a real game changer. Continue to watch the other
videos, like how to change
[Endpoint Policy Manager File Associations Manager: Manage Windows 10 & 11 File Associations](/docs/endpointpolicymanager/components/fileassociationsmanager/videolearningcenter/gettingstarted/windows10.md) settings,
to see how you can easily open PDFs, MAILTO and MP4s with the programs you want.

Thanks so much for watching, and talk to you soon.


