---
title: "Creating Your First Pak using Endpoint Policy Manager Design Studio"
description: "Creating Your First Pak using Endpoint Policy Manager Design Studio"
sidebar_position: 10
---
# Creating Your First Pak using Endpoint Policy Manager Design Studio

Creating packs for your own applications is fun and easy. Watch this how-to video to see how quickly
you can create your own Paks for the software you use within your company. Goodbye ADM and ADMX
files, hello Netwrix Endpoint Policy Manager (formerly PolicyPak)!

<iframe width="560" height="315" src="https://www.youtube.com/embed/QiPSIhPa0pE?si=t6fWsV_PuogRtDkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Creating Your First Pak using Endpoint Policy Manager Design Studio video transcript

Hi, there. This is Jeremy Moskowitz from PolicyPak Software. Today you're going to learn how to
create your first PolicyPak. Well, first things first, you've got to have the application you want
to manage on your machine. You can see here I've got "WinZip" and "Acrobat Reader" and "Firefox."
You probably generally want to have the most clean machine possible, but since this is my demo
station I have a couple of applications.

So, for instance, if we take a look at an application like "WinZip,"you can see if we go to the
"Options/Configuration…" that there are a lot of possibilities in here. The good news is it doesn't
really take very long to get these started and going. We're only going to do a handful of them
today, and we'll leave the rest to you. In fact, actually, I already have a preconfigured WinZip
Pak, but it's actually still a good example for us to use to get you started creating our first
PolicyPaks.

So the first thing again, have the application you want to manage already on your machine, as you
can see right here. The second piece you need, I already have preinstalled. That's this part from
Microsoft called the"Microsoft Visual C++ 2008 Express Edition."

The bad news is this is kind of huge and takes a while to download and install. Let me show you what
the webpage looks like when you find it. It changes every so often, so if by the time you're
watching this video it doesn't quite look like what you expect, that's fine. But you do need to have
the "Visual Studio 2008 Express Edition," the C++ one specifically, so "Microsoft Visual C++ 2008
Express Edition with SP1." You can click on "FREE DOWNLOAD" for "English." It takes a while to do
its thing.

There is also a way to download the "All-Offline Install ISO image file" as well. I've had it work
perfectly where the C++ Express Edition will install fine on my Creation Station. But sometimes I've
had to download the entire ISO file. When you do get it, be sure to install just the C++ 2008
Express Edition. We don't need anything else, like C# or anything else. It should also be noted that
PolicyPak is not compatible with Visual Studio 2010, only compatible with Visual Studio 2008, and
the Express Edition is what we're after, the C++.

Now I've already got that installed on here. I've already preinstalled my application that I want to
manage, and I've also preinstalled my C++ Express Edition, as you can see here. What's next for me
though is I want to show you where the PolicyPak Creation Station utilities are.

Those live here on the download that you have. It's called the "PolicyPak Design Studio."I'm not
going to bore you with the install. It's quite simple and painless. You just double click it.The
idea is that utility will be found here, called the "PolicyPak Design Studio 3.0," so
"PolicyPak/PolicyPak Design Studio 3.0."

Now that we've got the Design Studio launched, it does take a minute to initialize. Then it will ask
you what application we want to manage. While that's going, we'll go ahead and also double click
"WinZip" again, get that guy going. I happen to be using WinZip 14. I do suggest that if you're
going to start a new PolicyPak just for your first time, I do recommend that you use WinZip 14 or 15
as opposed to other applications which could be harder. This is a really good first one.

Again, the page that we want is the "Options/Configuration…" page here. We're not going to worry too
much about all of them, but I'm going to walk you through a couple of examples here. You'll also
find examples that are similar to these. I don't know if I'll be using the exact same examples that
we have in the Quick Start Guide, but it should give you a feel for how it works.

What I want you to do first is, we've got the Design Studio up here, so we're going to "Start a new
project." The way the Design Studio works is that you click on the application and you see the
windows that are up. If the window happens to be closed, well then, we can't get to it. So we'll go
back to "Options/Configuration…" and we'll see that the configuration window is there.

We'll click "Next" and it's going to capture that window. This is a registry-based application. Now
if you're wondering how do I know it's a registry-based application, well, I looked in the registry
and I found everything I needed right there. It was kind of obvious, but we'll talk in other
demonstrations about how to find and track down where your applications keep their data. But WinZip
is a well-behaved app, and it keeps its stuff in the registry.

Notice how there are other project types. We'll go over other project types in other videos, but for
now WinZip "Project type: Registry" is what we're after. Actually, I'm also going to give this a
different name. I'll call this "Project name: WinZip Live Demo." The reason why is that because we
also ship with a preconfigured WinZip, I don't want to get confused in case there's another WinZip
PolicyPak on my machine, like there could be on yours if you followed my other videos.

Here we'll pick "WinZip Live Demo," and we'll click "Next." The next thing we need to do is to
describe where in the registry this application lives. We default to the most likely place for you
to get started, which is "HKEY_CURRENT_USERSoftware." But it turns out we can actually get closer to
the source.

All of WinZip's stuff happens to live under "Nico Mak Computing." You notice how there's also a
"WinZip Computing" one here? It turns out it doesn't store hardly any settings there. So what we're
going to do is we're going to focus in on the place that most of the settings are stored, which is
"Nico Mak Computing," and we'll click "Finish" here.

Now it's going to go ahead and, like I said, capture that first window, and there it is. Let's go
ahead and also capture some more windows here. We'll go ahead and capture the "Cameras" tab and also
the "Passwords" tab.You can see here this is the actual application. This is our package inside the
Design Studio. What you're looking for is this button right here that says "Capture another tab."

So we'll "Capture another tab." We'll click "OK" here. We'll go over to "Passwords." Then we'll
click back in the window, and we recognize that we've pushed back. We'll press "OK," and we've
brought it in. Let me show you another one. I'll go ahead and click on the "Capture another tab"
button here. "Configuration will become active." We'll go ahead and click on "Cameras." We'll click
back in, and we'll click "OK" and that's it.Like I said, you could click through all those tabs if
you wanted to, but we're just going to focus in on some items right here for fun.

Now that we've got everything here that we need, the first thing we want to do is we actually want
to trick WinZip a little bit. In fact, just by clicking any of these items and clicking "OK," we've
tricked WinZip to actually flush a lot of possible items that it might write on first run.
Therefore, we're not going to be fighting lots of values being written by the application.

So I've clicked. I've said "OK" to one value, and I'm unclicking it and clicking "OK" and we're
back. The point of the story is WinZip has now written a bunch of default settings to the registry,
and that gives us a good baseline to get started.

What we're going to do is right click over, say, "at least one symbol character" here in our Design
Studio and click on "Configuration Wizard," and we just do what the wizard asks us to do. The first
screen asks us is it still a "Registry" project. Yep, so we just click "Next" to confirm that. Is
everything we want to grab under "Nico Mak Computing?" Yep.

Now "Indicating the Current Checkbox State," is it checked or unchecked? Well, let's go ahead and
take a look. We know that all four of these guys are unchecked, so we'll leave it unchecked. If it
was checked, we could check it. But it's not, so we'll leave it unchecked.

"Now go to the Application again and change the setting to be ‘checked' as indicated below and then
save changes using the ‘Apply' or ‘OK' button." So we'll click there. There is no "Apply" button but
there is "OK," so we'll go ahead and click that. That under most circumstances is all you need to do
for that checkbox.

We'll click "Next," and we just learned something. We've learned that when you click that checkbox
"On," it sets "passwordreqsymbol" to the value of "1." Now we're pretty sure when you click it
"Off," it's going to `<delete>` it, but we're not positive. We actually don't know that until we
literally check it off. You could if you want to bypass that and save a little bit of time, but the
default behavior is to continue onward and actually double check that.

In other words, "Now go to the Application again and change the setting to be ‘unchecked' as
indicated below and then save changes using the ‘Apply' or ‘OK' button." So we'll go to
"Options/Configuration…," we'll uncheck the checkbox, click "OK" and let's see what we learned. We
just learned that for sure when it's "On" it's "1" and when it's "Off" it's `<delete>`. Some
applications will set things to 0, others will delete,others will do other weird things, but this
one is pretty simple.We'll go ahead and click "Next."

"Choosing the Default State," we learned already that's unchecked. "Choosing the Revert State," you
may want to change this, but by default we suggest that you leave it in the state that we found it,
which is also unchecked. So when you get the policy, it'll be checked; when you lose the policy,
it'll be unchecked. Then that's it.

Let's just do another one. Let's see how easy this is. We'll go to another right click,
"Configuration Wizard…" "Registry" "Nico Mak Computing," yep, sounds good. We'll go ahead and go
back to the application, check it out, "Options/Configuration…" It says "at least one numeric
character (0-9)." Is it checked or unchecked? We can see it's unchecked. We'll go ahead and click
"Next." Now we'll go ahead and check it, click "OK," click "Next."

Cool. Well, we just learned a similar thing, "passwordreqnumber," when it's "On" it's "1," when it's
"Off," well, we're not quite sure. So let's go ahead and uncheck it, click "OK" and we'll click
"Next." Excellent. We've definitely learned that, in fact, "On" is "1," "Off" is `<delete>`. We'll
leave the "Default" as unchecked, the "Revert" as unchecked, and we're done with that one.

Let's do this little spinner guy. We have a wizard for every type. For instance, we can see here
that we can just right click over this guy, go to the "Configuration Wizard…" and actually we get
asked a couple of different questions now. So "Registry" "Nico Mak Computing."

Now it asks us what is the "Minimum Value"? Let's go to the application and click "1" and click "OK"
and we'll click "Next." It discovered that we made the change, so it says, "Finding the Step Value."
In other words, go up by one. Not every application goes up necessarily by one, this one happens to
go up by one, so we'll click "OK."

Now "Finding the Max Value," maybe this application's maximum value was 10. Maybe it's 15. But this
application, if you go to "Options/Configuration…" and here's what I like to do. Type "99999." Oh,
just two 9s, great. Click "OK," and that was what our guess would be.

We'll click "Next" here. Sure enough, the "Min" value, the "Max" value and the "Min + Step" value
are all discovered, and that's it. The "Default," well, we just saw that was "8." We suggest that.
The "Revert" value, what happens when the policy doesn't apply anymore, again also "8" is a good
idea.

Then we get to this idea called the "Linked Label Selection."This helps with Group Policy reporting
and the GPMC reports. Basically we're asking what thing are we really working on? What text is
closest to that? The text that's closest to that is "Minimum password length." So when the GPMC
reports, if you set the minimum password length to 12, you'll see "Minimum password length: 12" in
the reports, which is nice. So you pick on the label link that makes the most sense. That's it;
you're finished.

Let's do another one, hanging out in "Cameras" just for fun. Let's do "AutoPlay options." This is
very similar. You right click over the group, click on "Configuration Wizard…" and you do whatever
the wizard asks. Go to the "Registry" "Nico Mak Computing," and it's saying "Indicating the
Currently Selected Radio Button." Let's go take a look. If we go over to "Cameras," well, that first
one is in fact selected. Fantastic.

Now go to the next value and click "OK," click "Next." Go to that last value, click "OK" and great.
Look what we learned. We learned that this one is "1," that one is "2" and that middle one is "0."
Interesting. OK, cool.

Then the "Default" is this top one. We can choose to make that our default value. If we just select
it and enable it on, it'll set that as the default value. We could also choose the "Revert" value if
we're so inclined to something totally different. You get the policy, you get this, whatever we set
it to. When we don't get the policy anymore, we can have it revert back to a particular setting as
you wish. Again, the "Linked Label," what's closest? Well, "AutoPlay options" makes the most sense
here. Now we'll go ahead and click "Finish."

Now when you're done playing and configuring your PolicyPak, just for fun I'm going to go to
"File/Save As" here. I'll go ahead and call this "WinZip-Live-Demo." There are a couple ways to
continue on here. What we're going to do is we're going to click on the "Compilation" tab, and we're
going to "Show test PolicyPak when complete." You can see what the PolicyPak name is going to be
right there. We'll go ahead and do this.

At this point, the Pak is actually actively "Compiling…" Then when it's done, you'll get to see a
representation of what that Pak would look like in the Group Policy Editor. "Compilation was
successful!" We'll go ahead and click "OK" here. Now we get to play with it in real time.

Again, this isn't active. It's not actively doing anything, but I do want to point out something
real quick. Notice we only configured two of those checkboxes. So if we were to click on the other
guys, they're not going to do anything, but we did click this guy. So underline means we can
configure it, and if it doesn't underline that means we didn't do anything to it.Same thing here
with "AutoPlay options." We did, in fact, configure that guy.

The last piece of the puzzle is you now need to get the Pak, which is now in "C:Program
FilesPolicyPakExtensions," over to your Management Station. From you Management Station, you can
manage that PolicyPak. We've talked about that in other videos.

So with that in mind, I hope you've enjoyed "How to Create Your First PolicyPak." Thanks so much.
I'll talk to you soon.


