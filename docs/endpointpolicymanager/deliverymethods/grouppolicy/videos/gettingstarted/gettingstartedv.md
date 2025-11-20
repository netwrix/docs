---
title: "Endpoint Policy Manager with Group Policy Method: Getting Started"
description: "Endpoint Policy Manager with Group Policy Method: Getting Started"
sidebar_position: 30
---
# Endpoint Policy Manager with Group Policy Method: Getting Started

This video gives you a basic rundown of what our components do, where to find them, and how to get
more in-depth information on our website. This is great if you're just getting started and want to
get some brief information on all of our PolicyPak components.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5-C4szQA75o" title="PPGP Quick Rundown: Getting Started" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPGP Quick Rundown: Getting Started Video Transcript

Hi, this is Whitney with PolicyPak Software. In the last video, we looked at how and where to
download and install the bits that you need in order to make PolicyPak software work. We installed
the Admin Console MSI on the management station. We got the client-side extension on the endpoint.
And we made sure our license files were all in order.

Now what we're going to look at is a few of the components to PolicyPak software and how they work.
I'll discuss some of the others. And then we'll talk about where you can go to get deeper
information about each of the components that I'm going over today and all of the ones that I don't.

What we'll be looking at today is the Admin Templates Manager, which allows you to reduce the raw
amount of GPOs that you have in your system by using item-level targeting and collections and things
like that. It also has a super-secret loopback without loopback process as we like to call it. We're
not going to get into all of that today, but that's some of the superpowers that it has.

We're also going to look at Least Privilege Manager, which allows you to let standard users run
certain applications, scripts, and Control Panel applets as an admin even though they're still a
standard user. It also has the ability to put the smackdown on ransomware, unknownware, malware, as
well as some other things as well. Again, not getting into all of that today, but that's what it
does.

We'll also look at Browser Router, which allows you to choose a default browser and route the right
website to the right browser. So if YourCompany.com works best in Firefox but everybody is using
Chrome, we can make sure that YourCompany.com opens in Firefox regardless of where your user typed
in that address. It also allows you to put the smackdown on naughty websites as well. Once again, we
won't get into it all, but I'll start by showing you what it looks like when we don't have any of
this in place.

With the Admin Templates Manager, I'm going to use it to set a particular screensaver. If I come
down here to my "Lock screen," let's look at my "Screen saver settings." I've got no particular
"Screen saver" "(None)" and I'm waiting "999" "minutes" for no screen saver. So we'll change eh
"Screen saver" and we'll actually set a particular amount of minutes as well. We'll do that with the
Admin Templates Manager.

Now let's look at the Device Manager because we're going to be using Least Privilege Manager to
elevate that. If I come to "Device Manager" here, I'm going to get a popup. It says, "You are logged
on as a standard user." It's basically telling me you can look but you can't touch. So it has opened
up but if I try to do anything, all I'm getting is "Properties" and that's never going to do.

Finally, with Browser Router I want to make it so that any URL with the word "Google" in it will
open in Chrome regardless of where we started. So let's go look at Browser Router here. I'm going to
open up "Mozilla Firefox" and see what happens when I go to "google.com." Well, of course, we stayed
in Firefox. Of course. We haven't put any routes in place yet.

So now that we've looked at what it looks like when this is not governed by anything, let's hop over
here to the management station and let's "Create a GPO in this domain, and link it here." I'm going
to go with "ATM SS Settings." I'll come over here and I'm going to "Edit." In this case, I'm coming
over to the user side because that's where those settings are. We have the option to drive user side
settings into the computer side, but that's 400-level stuff and we're not going to get into that
today.

I am going to select "ADD NEW POLICY." You may notice once this pops up that the policies here look
like the same stuff you see when you're in Group Policy land. These look like the same policies that
you see under this folder here. Why is that? It's because they are all the same policies. You're
seeing that we're using the same central store as Group Policy land. So this is all real Group
Policy stuff. It's just in PolicyPak land.

I am going to come over to "Control Panel," "Personalization." Let's "Force specific screen saver."
I want to select "Enabled." Let's do "Mystify.scr" and tell it "OK." It went ahead and added that:
"Force specific screen saver." It's giving me the option to do something else, so "Screen saver
timeout." It's a Windows 10 machine. Why don't I have it time out in "10" minutes just to help us
remember? All right, now we're going to close that out.

So we have "Force specific screen saver" and "Screen saver timeout." Now if I wanted to target any
of these to a particular OS, to a particular security group, or any of a number of different
criteria, I could choose to "Edit Item Level Targeting" here. I can choose any of this criteria to
target this policy based on.

If you're familiar with Group Policy Preferences item-level targeting, it's exactly the same thing
so you'd be familiar with this here. I can choose to only target this to a Windows 10 "Operating
System" machine. I could choose to target it to a "Security Group" or a "User" or an "IP Address
Range," any of a number of different criteria. I'm not going to get into that today, but that's an
option that you can use to target that. And you can do this in just about everything we have here in
PolicyPak land.

Now that I've done that and we've created some screen saver settings, let's go do that Least
Privilege Manager business where we "LPM Allow DM to run elevated" and we tell it "OK." This can be
done on the computer side or the user side. I'm just going to go with user side just for fun. I'll
go over to "Least Privilege Manager."

While there are a number of different things we can do here, we're going to go with "ADD NEW CPL
POLICY." That's what's going to allow us to choose the Device Manager. I'll click "Next." I'm going
to choose "Device Manager" right there. I'll choose "Next." I want to "Run with elevated
privileges." That's the first thing that gets selected, so it's already there. So I'll just choose
"Next." We'll "Allow DM elevated" and "Finish" up there. I could have added item-level targeting
while I was doing this, or I can "Edit Item Level Targeting" after the fact. Again, item-level
targeting is everywhere.

Finally, let's go look at Browser Router. We're going to have Chrome open anything that says
"Google." So we'll say "Google to Chrome." Let's "Edit." Once again, computer or user side, up to
you. I'm going to do this on the user side once again.

With "Browser Router" you have to start with creating a new collection, so you click "ADD NEW
COLLECTION." I'm just going to leave that "Collection 1" name. That's fine. I could add "Item Level
Targeting" here so that every policy within this particular collection or folder would be targeted
to a particular OS or user group or whatever like we saw before. When I go into my collection and I
"ADD NEW POLICY," you'll notice "Item Level Targeting" right here too. So it's all over the place.
You have lots and lots and lots of options.

We'll do "Google to Chrome." I'm going to use a "Wildcard" which means that I'm going to type
"\*google\*." That basically means if the URL contains the word Google at all, it will open in
whatever I choose here, "Google Chrome" in this case. So I'll tell it "OK," and there we go.

Now I did these all in three separate GPOs. You don't have to. It's up to you whatever you think is
best practice. But I decided to go ahead and give them descriptive names and give them each a
separate GPO.

So now that we've done all that, let's go back over to our endpoint, run a GP Update ("gpupdate")
and see what we've done. Here we go. Let's run that GP Update ("gpupdate"). Just moving forward the
hands of time just a little bit. There we go.

All right, so we started off by looking at the screen saver settings, so let's check out and see
what we've done there. See if we've done the work. All right, let's go look at "Screen saver
settings." Sure enough, we've created a "Mystify" "Screen saver." We've forced that specific "Screen
saver." And we're telling it to "Wait" "10 minutes." Notice it's grayed out, so I'm not able to
click on this or make any changes because this is being governed by PolicyPak now.

So we've got that done. Let's go see if we can get into "Device Manager" instead of having it give
us that pop-up. Sure enough, here we are. If I come over to "Keyboards," now I can "Update driver"
or do any of a number of different things instead of only getting "Properties."

Finally, if I open up something in "Mozilla Firefox" and go to "google.com," what do you think is
going to happen? I bet we're going to close down and open up in Chrome. So let's check this out.
There we go. We closed that tab, and we opened up in Chrome just like we wanted to do. That's great.
We've done all the work we though we were going to do.

Let me just hop back over here to talk about a couple of other different things before I show you
how to get more information about these components, and then we can call it a day. Let me open back
up my Admin Templates Manager GPO because I added a couple of different policies to that one. Let me
go back to where that was. I just want to talk to you about precedence order for a second.

If we come back over here, you're going to see that I have the "Force specific screen saver" and
"Screen saver timeout." If I were to "ADD NEW COLLECTION," which I'll just go ahead and do, that's
going to come underneath that. So what happens is, it processes this one first and then this one
second.

Then whatever is inside "Collection 1," it will start processing it the same way. It will process
Number 1 first, Number 2 second, Number 3 third, and so on and so forth. So if you have something
that conflicts, whichever one processes last is going to be the one that takes precedence because
that's how it processes that. So that's how the precedence order works here.

The last thing I want to talk about before giving you some information about how to get more
information is just roughly what all the rest of these things do. The "Application Settings
Manager," I'll have another video on how to do that, how to set it up, how to work with it. But that
is how you're going to do just what it says, manage your application settings. So if you want to
manage your WinZip or set a particular homepage on Firefox or manage any of about 500 different
applications and all of their settings, you'll do that using this.

The "Preferences Manager" and "Security Settings Manager" both work the same way. They are both
specifically designed to be able to export existing preferences and security settings as XML so that
you can then upload them to the cloud or wrap them up in an MSI and deploy them using an MDM
service. This is designed specifically for non-domain joined machines or machines that are being
governed specifically by cloud or MDM services rather than using the Group Policy method.

We talked briefly about "Browser Router" and about "Least Privilege Manager." The "Start Screen
Manager for Windows 10" and "Taskbar Manager for Windows 10" do just what they say again. They allow
you to manage both the Start Screen and the Taskbar quickly, easily, and dynamically without having
to get into the in-the-box golden image business.

"File Associations Manager for Windows 10" actually does the same thing as well. It allows you to
associate file extensions and network protocols with particular applications so that your PDFs
aren't opening in Edge and your MAILTOs aren't opening in Windows Mail. So you can change that up
without, again, getting into the golden image business.

"Java Rules Manager" maps the right version of Java to the right website. So if you have an old and
crusty timecard app that has to use an older version of Java, you can map that version of Java to
that web app and then allow everything else to run the most secure version. So you can run for both
compatibility and security at the same time.

The "Scripts Manager" allows you to deliver scripts to your machines whether through Group Policy,
the cloud, or MDM service. It allows you to specify an on script and an on script. The on script is
do this when the GPO is in scope, is true. And then you do something else when the GPO falls out of
scope or if something is not true anymore. It allows you a lot more control than some other delivery
mechanisms.

Now that I have given you the rough rundown of what all of our components do, I want to come over
here and go to "www.policypak.com" and I want to show you the "Video Learning Center." If you come
to the "SUPPORT" tab right here and go to "Video Learning Center," then you're going to choose if
you're working with the "Group Policy Edition/Cloud Edition/MDM Edition" or if you're working with
specifically the "GP Compliance Reporter."

If you're working with the components that we were looking at before, you choose this section
("Group Policy Edition/Cloud Edition/MDM Edition." Then you have a lot of different options. You can
go with "Getting Started" which is going to give you some of the basics, which is where this video
is here.

And then you have all of the components available right here. So if you need to know more about how
your "Preferences Manager" works or what else can you do with "Least Privilege Manager," what can
you do with "Scripts Manager," and so on, you can go there.

If you go to "File Associations Manager," you would choose "File Association Manager (All Videos)"
and then you're going to have several different videos here showing you all kinds of different tips
and tricks and understanding how it all works.

If you wanted to just go get a really big overwhelming list, you can go look at "ALL AVAILABLE
VIDEOS" and see them all here. We have somewhere in the neighborhood of 300-and-something. Yep, 326
now as of this filming. There will be more coming right up.

So that's where you're going to want to go to the "Video Learning Center" and check that out if you
want to get more information about the components that I have talked about today or the ones that I
wasn't able to show you.

In the next video, I'll be talking more about the Application Settings Manager, how to set that up
and how to work with it. So thanks for watching, and I'll see you there.


