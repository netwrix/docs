---
title: "Endpoint Policy Manager and FSLogix Profiles: Better Together"
description: "Endpoint Policy Manager and FSLogix Profiles: Better Together"
sidebar_position: 20
---

# Endpoint Policy Manager and FSLogix Profiles: Better Together

Want to get out of the roaming profile business? FSLogix is awesome. Then Netwrix Endpoint Policy
Manager (formerly PolicyPak) helps you go beyond additional Group Policy to manage Start Screen,
Taskbar, File Associations, Least Privilege, applications, browsers and more ! This isn't a short
video, but it does show the better together story !

<iframe width="560" height="315" src="https://www.youtube.com/embed/xGvWG4JW-WM" title="Endpoint Policy Manager and FSLogix Profiles: Better Together" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak and FSLogix Profiles: Better Together

Hi. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, I'm going to show you the better together story of FSLogix Profiles and PolicyPak.
I'm going to be doing a lot of demos that kind of have the same feel where you're going to see me
log on and then start a stopwatch.

Let me go ahead and do that. Here's "westsalesuser9." I'm going to start this stopwatch, and we're
going to see how long it takes for this "westsalesuser9" to log on. Now westsalesuser9 and
westsalesuser8 are set up to use FSLogix Profiles. What's special about FSLogix Profiles is that
they're not like standard roaming profiles. In fact, they're kind of a pointer to a profile that
lives in a VHD "over there." I'm going to show you where that over there is in just a second.

See how fast that was? About 19 or 17 or 20 seconds or so to get to a responsive desktop. How do
they do that magic? What they do is they have the profile redirected to a VHD file. What's nifty is
that it doesn't matter how big that profile gets. The log on time will always be just about the
same.

To prove that, I'm going to is copy in a bunch of movie files. I have a DVD full of MP4s. I'm going
to make a "New" "Folder" here right on the desktop. I'm going to call this "BIG MOVIE FILES." I'm
going to take the contents of this and I'm going to copy it right there.

Now this is going to take a while. This is almost 3 GB worth of stuff, so I'm going to pause the
video during the copy and then come. Then we'll do some time trials and I'll show you how long it
takes to log on after that. Hold on a second.

Okay, and we're back. So the movie files are now copied to the desktop which will be part of the
profile. Just to prove a point, look how big this folder is. It's a huge 4 GB of stuff. The "BIG
MOVIE FILES" are in there right on the user's desktop and part of the profile.

Now if we were to take a look at the FSLogix Profile, you can see that it has grown to 4.6 GB in
size. But the good news is this will not change the log on time all around. In fact, let me go ahead
and "Sign out" here, and then I'm going to show you two quick tests.

The first test is I'm going to reset the timer here on this clock. Then what I'm going to do is sign
on again on the same machine and we should see very little difference or no difference at all. The
last one was about 17-20 seconds, give or take a couple seconds, and we had a fully responsive
desktop. Let's see what happens even when we add 4 GB of files to what would feel like the roaming
desktop but in reality is the FSLogix Profile desktop.

Okay, let's take a look. There we go. Around 18 seconds that time. The "BIG MOVIE FILES" are there
because, again, they're really over there on the FSLogix Profile. And we can see, of course, we get
the popup to the user because every user loves popups. We'll go ahead and say to "Always use this
app to open .mp4 files." Let's say "Recommended settings." Of course, users love to get popups
because they know how to answer these things perfectly, right? We can see the video is playing.

Okay, great. So long story short, we can see that it didn't add any appreciable time to that log on.
What we want to do now is "Sign out" of this machine. Let me reset the timer and show you this other
machine here. This is my second machine. You can see WestSalesUser9, that same guy we were just
using ten seconds ago, has never logged onto this machine – never, ever logged on before.

Let me go ahead and "Sign out" of this admin user, and now I'm going to log on as this guy. That
same guy, same humongous profile, "westsalesuser9." We're going to log on and hit the stopwatch, and
let's see how long it takes to log on this time. Remember, on the other machine it was about 17, 18,
19 seconds. Let's see what happens now. Remember, this guy has never logged on before, and that's a
little bit different of a situation but it shouldn't be very different. Let's see what we get out of
this result. We're at the 18-second mark. So about another two seconds if you've never logged on
before.

You can see the "BIG MOVIE FILES" are there on the desktop. You can see that it has maintained the
setting that I said before, which was to use the Windows Media Player. If I double click on a video,
that video runs just fine. As far as this computer is concerned, this is like a local profile to it
and it feels pretty great.

What I'm just showing you here is for existing PolicyPak customers to understand why FSLogix
Profiles is a great better together story for your existing investment. Now let's flip it around for
those people who don't know PolicyPak all that well. Let's go ahead and dive in and talk about some
amazing PolicyPak things.

Let me go ahead and "Sign out" here and make sure I'm also signed out here. Yeah, I'm good to go.
Let me go ahead and talk about some PolicyPak things. Let's go ahead and reset the timer. Now let's
go back over to my first computer. We'll log back on as "westsalesuser9." Let's go ahead and start
the timer here.

The first thing I want to talk about with regards to PolicyPak is getting out of the local admin
rights business. You might have some users that used to be local admins and now they're not anymore.
That's good, but they can't do things today that they could yesterday like get into Device Manager
or run an application that throws a UAC prompt or install their own software.

By way of example, here's an application like "Process Monitor" here. Process Monitor when you try
to run it is going to throw a UAC prompt. That makes sense because only an admin can run that. Or
get into something like "Device Manager." Here's "Device Manager." What happens here is that you're
told you can't do what you want to do. "You are logged on as a standard user." You can't upgrade
drivers and things like that.

Or you can't install your favorite application like UPS QuickShip or a Skype install or a PowerPoint
install or whatever. You can see here I'm going to get a UAC prompt in my face, and that's not good.

What I'm going to do is create a Group Policy Object for my "West Sales Users" that's going to get
them out of the local admin rights business. I'm going to do "PPLPM Demo 1" here. I'm going to kill
three birds with one stone here. Actually, again, I'm trying to show you some time trials and show
you that PolicyPak doesn't appreciably increase log in speed, so I'm going to go ahead and "Sign
out" as that user here.

Back in Group Policy land on user or computer side, I'm going to do this on the user side, I'm going
to go to "PolicyPak," go to the "Least Privilege Manager." So you can see all the stuff that
PolicyPak adds to the table. You've got "Policies" that you know and love, "Preferences" you know
and love, and now "PolicyPak." A huge array of features that you can't get any other way.

We'll go ahead and "Add" a "New Executable Policy" here. I'm going to explain how to get Process
Monitor to run. I'm going to "Use simple rule." I'm going to do this by "Hash." A hash is like a
fingerprint to the file. I'm going to "Select reference file." I happen to have a copy of Process
Monitor on my own machine here. There's "Procmon" there. I'll then go ahead and "Run with elevated
privileges." Then we're going to let Procmon run with a hash rule.

The next thing I said I wanted to do was to "Add" a "New Control Panel Applet Policy" to let users
who couldn't get into "Device Manager" now get into "Device Manager." Just like that, click "Next,
"Run with elevated privileges," done.

The last thing I want to do is "Add" a "New Windows Installer Policy" rule. I could do it by name or
by publishers. I'm going to "Use combo rule." I'm going to say when the "Path" is SkypeSetup and the
"Signature" is by the Skype guys. How do we do that? We're going to say when it is called
"SkypeSetup." That's the name I want: "SkypeSetup." Then we're going to select the "Signature
Condition" with the same filed. So called SkypeSetup and signed by the Skype guys. We're going to
"Run with elevated privileges," and we're ready to rock.

Now we've got this one GPO in place. What I'm going to do now is clear the timer out. I'm going to
log back on, and we're going to see that it doesn't add any appreciable time. What we've seen so far
is 17-21 second log on time when FSLogix is there helping with the gigantic roaming profile problem.
Now, PolicyPak is going to be starting to layer on our policies one-by-one on top of this, and the
goal is for you to see how this better together story works and also see that there's not an
appreciable log on time deficit.

We can see now we've logged on. Now let's go ahead and start off with Process Monitor ("Procmon").
Double click that guy, and it works perfectly. Let's go ahead and go to "Device Manager." No more
you're just a lowly user prompt. Now you can update drivers and so on if you needed to do that. And
"SkypeSetup," if you had a particular application you wanted to get installed for a user, it's now
easy to do. You just set the rule using PolicyPak Least Privilege Manager and you are off to the
races just like that.

The next thing I want to show is the idea of managing the Start Screen. This is always kind of a
humongous bear to wrestle, and PolicyPak just makes it two clicks drop-dead easy. Here is the Start
Menu that we currently have. There are two ways to manage the Start Menu. One way is to nuke
whatever is on the Start Menu and add your own stuff, or you can just add your own stuff. I'm going
to nuke what's on the Start Menu and then add my own stuff.

I'm going to show you this by logging off first. That's the goal. I'm going to "Sign out." I'm going
to reset the timer here. Now I'm going to craft the Start Menu. I can create it in the same GPO or a
different GPO. I'll go ahead and "Create a GPO in this domain, and link it here" here. I'll call
this "PPSSM Demo 123."

Now we're going to be crafting the Start Screen. Now you can put any number of things on the Start
Screen. You can do desktop applications. You can do the new Windows universal applications. You can
do shortcuts. I'm going to just stick with the thing most people want to do, which is going to be
putting on Windows desktop applications.

Here's "Start Screen Manager for Windows 10." I'm going to "Add" a "New Collection." A collection is
going to contain our policies and also define what method we want. We said we wanted to nuke
everything. That's called "FULL (REPLACE)," so I'll go ahead and do that here.

Then I'll right click and "Add" a "New Group." I'll call this "Super Duper Apps." We can put all
sorts of things in here. Maybe I'll make a collection that contains our Acrobat Reader and our
Firefox and Chrome, something like that.

So I'll "Add" a "New Desktop Application Tile" here. That's a "Registered application." I've got
"Adobe Reader" on this machine, so I'll go ahead and click "Next" and pick the "Medium" tile. I'll
call this "acro 12." It doesn't matter.

Then I'll go ahead and "Add" a "New Desktop Application Tile." I'm just going to add three things
just to keep it simple. This can get reasonably in-depth if you want, but I'm just keeping it
simple. So I'll use "Google Chrome," and I'll make a "Small" tile for Chrome. So "Chrome 123." The
names don't matter. They're just for you. Then I'll pick the last one which is Firefox. I'll go
ahead and pick "Mozilla Firefox" here. Right there, it's under M. There we go, "Mozilla Firefox."

While we're here as well, one of my other favorite things to show is how you can also do things for
the Taskbar. So why don't we also "Add Collection" for the Taskbar. Maybe this collection we will
also "Replace." We'll nuke whatever is on the Taskbar and just put our interesting things. Maybe
I'll just put Firefox and Chrome on the Taskbar. I'll go ahead and "Add" a "New Desktop Application"
here. I'll go ahead and pick M for "Mozilla Firefox" again. There we go. There's the first one:
"firefox."

Then I'll "Add" a second "New Desktop Application" for Chrome. Again, this is going to be pinning
these puppies right to the Taskbar which is traditionally a very difficult thing to do. We'll say
"Chrome on tb." And that's it. We are ready to go.

Let's go over to our endpoint machine here. Let's go ahead and log on. Let's see how this goes here.
I forgot to start the timer, so we'll start the timer here. Again, now we've got the FSLogix
profile, humongous profile over there. And we've got a couple of policies that we're layering on,
one of them now being the Start Screen Manager, another one being the Taskbar Manager, and another
one being the Least Privilege Manager. When this is all done, these things are just layered on top
and we're ready to rock.

Okay, there we go. Again, no appreciable log on difference. You can see right on the Taskbar right
there it nuked all the things on the Taskbar and put the items that we wanted. There's Firefox and
there's Chrome. I'll go ahead and run Firefox just for the fun of it there. You can see it's never
been run before so it's obviously throwing its first time use stuff.

Then also let's take a look at the Start Menu here. What have we got? Our "Super Duper Apps" as a
group here. If you wanted to add multiple groups, you could certainly do that. You've crafted the
Start Menu, exactly what you want. You could have different groups based on different criteria like
if this app exists, then put this group down or put this app down. You could have different groups
based on who they are or what computers you are and so on. Incredibly detailed and makes things so
much easier.

Last but not least, what I want to cover is this idea of managing the defaults. By way of example,
we have all these movie files here, the "BIG MOVIE FILES" and the "small" movie file. We can see
that Windows Media Player is playing this thing, and maybe we don't want that. Maybe by default we
want it to be VLC media player, which is already installed on the machine.

Or when we open up PDFs, maybe we don't want Edge to kick in for that. What we want to have happen
is we want Acrobat Reader to kick in for that. And for our "mailto" items, maybe we don't want the
Windows internal mailer to kick in. Maybe instead what we want to do is to have Outlook or some
other mailer kick in. I've already got a different kind of mailer installed.

What I'm going to do is craft this experience by doing this on the computer side. For my "West Sales
Desktops" I'm going to "Create a GPO in this domain, and link it here" and call if "PPFAM Demo 123."
This is File Associations Manager, and this happens on the computer side. So this will only kick in,
for now, when the computer is rebooted or when the Group Policy is updated in the background and the
user relogs on.

We're going to do this on the computer side. We'll go to "PolicyPak/File Associations Manager for
Windows 10." This is super great. You can just point and shoot your way to glory. You can say "Add"
a "New Policy" here. If you want, you can say "PDF Rule," and for the "File Extension" you can say
"PDF." We're going to interrogate this machine to see these two things claim they can do PDF reading
on this machine. We can pick "Adobe Reader," and you're done. You now have associated PDF with
Acrobat Reader.

Now actually if you have a complicated situation where you've got Acrobat Reader and Writer on the
same machine and you want to associate PDF with Writer but not Reader, we can do that too. It takes
a little bit of interrogation of the machine with what's called item-level targeting and we can
determine you've got Reader and Writer, then do this thing.

I'm actually going to select "Delete Policy" for the policy I just made because I want to show you
something else. You can do this thing called "Add Policies for Product (wizard)" and you can
interrogate the application for all the file associations that it has. So Acrobat Reader has all
these associations, so I'm going to just say add all those readers for the policy. So Acrobat Reader
has seven different things.

Maybe the next thing I want to do is "Add Policies for Product (wizard)" for VLC media player as
well. VLC media player has a whole gaggle of them, like 200 or something like that. Instead of
having to figure all that out for myself, I'm just going to interrogate the application, click
"Next," and we're off to the races. So those MP4s that before played in the Windows Media Player,
now I'm going to expect them to play in VLC media player.

The last thing I want to do is "Add" a "New Policy" here for my "MAILTO" rule. This is a "Network
Protocol" and this is going to be "MAILTO." I'm going to "Select Program" here. I don't have Outlook
installed because I'm too lazy. I have a couple other mailers. I'm going to use this crazy thing
you've never heard of called "Claws-Mail." We're going to pretend that's my Outlook. It's called
Claws Mail.

That's it. I have my "File Associations Manager" GPO now linked over to my "West Sales Desktops."
Again, this will only kick in if the computer is either rebooted or the Group Policy is updated in
the background and then the user logs on. Now from this point forward, every user who logs on will
get the exact same settings, which is pretty awesome.

We're going to run GP Update ("`gpupdate`"), we're going to log off, we're going to log on, and
we're going to see these changes take effect. That's the goal. Let's go ahead and do that. Here we
go. Let's go ahead and "Sign out." I'll reset the timer here. Now I'll log on and start the timer
here. Here we go.

Again, at this point now we'll have the Least Privilege Manager policies, we're going to have the
Start Screen Manager policies, the Taskbar Manager policies, and now finally the File Associations
Manager policies again with our gigantic profile that isn't really on this machine. It's really over
there because of FSLogix Profiles doing that heavy lifting getting it over there. So you can see
again, not an appreciable difference in logon time.

At this point now you can see right here those three guys are re-associated the way we would expect.
If I double click on this, we get the "Adobe Reader" of our choice here. I have an older version
here, but that's totally fine.

You can see that all of our movie files, those "BIG MOVIE FILES" that before played in Windows Media
Player, now they're going to play twice as fast in VLC media player, which is awesome. It comes
right up, which is incredibly cool.

Then lastly when I clicked on a "mailto" item here, what happened before? What we're going to see is
that when we go ahead and click on this, we're going to get the "Claws Mail" to open up which is,
again, my equivalent of Outlook here just to prove a point.

Let me go ahead and "Sign out" here. Let me go ahead and reset the timer here. Now that we're logged
off of this machine, let's do our final magic trick. We'll log on back to the second computer again
as "westsalesuser9." Now he has logged on before, but he hasn't seen the policy settings that we saw
that we had on the first machine. So he didn't have the Least Privilege Manager policy, he doesn't
have the Start Screen Manager policy, and he didn't have the File Associations Manager policy – but
he will now.

Let's go ahead and see what happens as soon as "westsalesuser9" logs onto the second machine and
you'll see for yourself what we're going to get. Here we go. No appreciable logon differential. You
can see the File Associations Manager stuff is there. The Least Privilege Manager stuff is still
there. It's a new machine, but there we go. Then you can also see that the Start Screen and Taskbar
Manager is also set the way you would expect.

Basically, he gets the full roaming experience, not just the stuff in his profile but also the
policy level stuff as well, not only from Group Policy but also the stuff that we're tacking along
with PolicyPak. So the File Associations Manager, the Least Privilege Manager, the Start Screen –
all that stuff. Not to mention some of the things we haven't talked about yet like Browser Router
and Java rules management.

With that in mind, I hope this video has given you some insight about how PolicyPak and FSLogix
applications profiles work better together. Looking forward to getting you started with both of our
products real soon.

Thanks so very much and see you soon. Bye-bye.

