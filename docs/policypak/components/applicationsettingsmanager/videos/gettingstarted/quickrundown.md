---
title: "PPGP Quick Rundown: Application Manager"
description: "PPGP Quick Rundown: Application Manager"
sidebar_position: 30
---
# PPGP Quick Rundown: Application Manager

Learn how to get started with Application Settings Manager quickly and easily with this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yYNeVOKtO-s" title="PPGP Quick Rundown: Application Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPGP Quick Rundown: Application Manager Video Transcript

Hi, this is Whitney with PolicyPak Software. In the last video, we looked all of the components and
I mentioned that we would be creating a video that went over the set up and use of the Application
Settings Manager. Well, here we are. This is that video.

What I'd like to do to start off with is do a little show-and-tell. I'll show you first, and then
I'll tell you. Let's go ahead and start off and create the GPO that we're going to eventually be
working with ("Create a GPO in this domain, and link it here.") I'm just going to call it "PPAM
Demo."

I want to "Edit" this and go and look at "Application Settings Manager" component here. When I click
on it, it is "Scanning for available applications." What it is doing is scanning the central store.
We'll talk about this in just a second.

All right, now that it's done doing that, let's open this up a little bit. We don't see anything
right now. Well, when I right click, we're going to see "New Application." We have "ACE Dental
Software" and "Google Chrome" and "Mozilla Firefox." Where the heck did all of this come from? What
is with the random amount of applications I see here? Well, it came from the central store, and it's
actually not random at all.

What I did before this video is, I went to the policypak.com customer portal, and I went to the
Downloads tab and downloaded our Paks. Those Paks are right here, and they're all in folders. Let me
just pick one here. Inside most of the folders, you're going to see three files here. One is a
"Readme" file. It's exactly what you think it is. Just any information that we have that you may
need to know about a particular Pak. We have an "XML Document" that you can use to modify in our
Design Studio. There are other videos for that.

Finally, right here we have a "dll" file. That's what we consider the Pak itself. What happens is we
basically take these and we drop the ones that we're interested in using such as Firefox, Java, and
WinZip which is what we're going to be looking at today and we drop those into our central store.

Let me show you what I mean by that. Now chances are if you've been working with Group Policy, then
you already have a central store created. If not, we've got another video for that. But in this
case, I've already got that created and I actually have a shortcut for it. But you're going to find
it in "Local Disk/Windows/SYSVOL/sysvol" then domain name and then "Policies."

Here are all of my policies that I have here. You may already have "PolicyDefinitions" created.
That's your central store where your ADMX files may be located. Then what you're going to need to do
is create another folder here called "PolicyPak," all one word just like that.

Once you've done that, inside of there you can see I have those "dll" files I just mentioned dropped
into here. So if you notice, I have that same "ACE Dental Software" and "Google Chrome" and "Mozilla
Firefox" and so on, the same thing that I have when I right click and click here. So that's where
all of that came from.

So I already have "PolicyPak for Mozilla Firefox," "PolicyPak for Oracle Java," and "PolicyPak for
WinZip" which is what I'll be working with today. But if I wanted to add something, let's go find
one of the Paks that I was just looking at. Let's go over here. Let's choose "Attachmate Extra
Xtreme." I don't know what that it. It doesn't matter. We're going to grab that and drop it into
here. I like to copy it in.

Then if I come back to my GP editor and I have it "Re-scan for Available Applications," now when I
right click and choose "New Application," there we go. We've got "PolicyPak for Attachmate Extra
Xtreme" right there. That's how you go about adding and populating this menu here.

Before we start noodling around with the applications that I mentioned before which will be Firefox
– which needs to be the ESR version, by the way, that's important to note – we'll look at WinZip and
Java as well, let's go over to my endpoint and look at these settings when they're unmanaged.

Let's come over here and let's look at "WinZip." Let's go to "Options/Configuration." We're going to
play with "Passwords," and we'll look at the "Cameras" tab as well. "Passwords," nothing's going on
here. "Minimum password length" is "8" "characters." I can get to all my tabs, no big deal. So no
settings going on there.

Let's hope over to "Mozilla Firefox." What I'm going to do with this guy is I'm actually going to
set a particular homepage so it doesn't show up right here, and I'm going to tear the knob off of a
"New Private Window" because I want to not allow incognito browsing. So we're going to look at that.

Finally, we'll come over and we'll look at the Java settings ("Configure Java"). What I want is tear
the knob off that "Update" tab. I want to get rid of it altogether. If we come over here to
"Security," it's at "High" security right now. I want to take it to "Very High" security and I want
to gray that out so that users can't mess with that at all. So we'll go ahead and tell that "OK."

So those are my ungoverned, unmanaged settings. Let's hop over here. I am on the user side right
now. So on the user side, I am going to work with the WinZip Pak. So let me go find "PolicyPak for
WinZip International." Notice the "Extension Location" is "Central Storage." That's where we just
looked at. I'll double click on it, and there we go.

All right, so we have a UI that's pretty similar to what we were looking at on the endpoint when we
were looking at our WinZip settings a few minutes ago. What I want to do now is come over to the
"Passwords," and I want the "Minimum password length" to be "11."

Now notice when I made a change there that it got underlined. That means that it's always going to
be applying that setting. That means we are delivering that setting. Right now, you notice these are
not underlined. We're not delivering any settings here. But when I check here, notice it becomes
underlined and that setting is being delivered. Now if you want to deliver an unchecked setting, you
can certainly do that. Now the specific setting we're delivering is that this is unchecked. But I'm
going to go ahead and leave them all four checked.

Now for extra security if I right click, I actually have the option to come over here and "Perform
ACL Lockdown" which takes control of the registry settings. I also have the option to "Hide
corresponding control in target application." So this third one down I'm actually going to hide.
This last one I am going to "Disable corresponding control in target application."

If I come over to the "Cameras" tab, I'm going to right click just in any blank space and I'm
actually going to choose to "Disable whole tab in target application." That will gray that out and
they won't be able to use it. All right, there we go. We've saved these settings by telling it "OK."

Now with Firefox and with Java, I'm actually going to work with that over on the computer side
because we have a system-wide config file that we can use to lock that down, but it only works on
the computer side if we do that. So we're going to come over here to the "Application Settings
Manager" over here on the computer side. We are going to right click and select "New Application,"
and we'll go with "PolicyPak for Mozilla Firefox" first.

Let's get into here. I want to deliver a "Home Page" here. I'll go with "https://www.policypak.com."
Why not? What I want to do is "Show my home page." There we go. This is where I "Lockdown this
setting using the system-wide config file" which means that the user is going to have no way to
change this at any point. It's, like I said, kind of ripping the knob off of it.

If we come over here to "Extras," we're going to do the same thing with private browsing. I am just
going to "Turn off private browsing." I'm going to "Perform ACL Lockdown," and then we're not going
to see that option on the screen at all. It's going to just tear it off. So we'll tell that "OK."

Now I want to do a couple things with "PolicyPak for Oracle Java" here like I mentioned. Let's go
grab that, double click on this. We're going to come over to the "Update." We are going to uncheck
"Check for Updates Automatically." We are going to "Perform ACL Lockdown." That is going to just get
rid of that tab altogether. If I come over here to "Security," I want it to be "Very High" and I
want to "Lockdown this setting using the system-wide config file" and tell it "OK."

So now we have managed WinZip on the user side, and we are managing Mozilla Firefox and Java both on
the computer side so that we can use that system-wide config file to lock it down. So let's hop back
over to our endpoint. We're going to run a quick GP Update ("gpupdate") just to make this happen a
little quicker, and we'll see what we did. All right, let's get rid of this.

Let's go ahead and go in order. We started with "WinZip," so let's see what we've done here.
"Options/Configuration/Passwords," there we go. The "Minimum password length" is "11" "characters."
You can see that we delivered these settings. Well, you can't see this one because we hid it. We
also disabled this one. So there we go. We've done the work we thought we were going to do. Now if
we come over here and try to get into the "Cameras" tab where I could before, nope. It's disabled.
So we disabled that just like we thought we were going to.

Now let's see what we did with "Mozilla Firefox." All right, opening up. There we go. We have
delivered that "https://www.policypak.com" homepage. When I come over here, there we go. The
incognito mode or new private browsing is no longer there. If I try to go to "Options" and I want to
try to change the "Home Page," I can't do anything. I can't change it because we've locked that down
with that system-wide config file. So like I said, no more private browsing, no more changing of
this. We have that setting specifically delivered.

Let's go over here and look at what we did with Java ("Configure Java"). Look at that, that Update
tab is gone now. If we come over to "Security," we have it on "Very High." It's grayed out so I
can't make any changes there because, once again, we locked it down with that system-wide config
file. So that's why we do the Firefox and Java in particular on the computer side.

Now again, the Firefox has to be the ESR. That's the one we support these days, so just make sure
that is the case when you're working with Firefox.

All right, so that's that. We looked at putting the Paks in our central store. We talked about
creating that central store if it wasn't already there. We talked about how to work with WinZip,
Firefox, and Java in particular. But the rest of those 500 applications in general.

So we hope that helps you out and talk to you soon. Thanks.


