---
title: "Endpoint Policy Manager on Citrix: You Gotta Try This"
description: "Endpoint Policy Manager on Citrix: You Gotta Try This"
sidebar_position: 30
---
# Endpoint Policy Manager on Citrix: You Gotta Try This

If you need to manage applications, the desktop, Java, the Start Menu and more.. you have to see
this action packed Netwrix Endpoint Policy Manager (formerly PolicyPak) + Citrix demo.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KEOkp-2pimI?si=WxMmP-bBjZVpJPDp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager on Citrix: You Gotta Try This

Great. Thank you very much.

This whole thing is called "PolicyPak on Citrix: You Gotta Try This." We have all these people who
say, "I've heard of PolicyPak. I sort of know about it. I know you've been in business a long time.
What's the story?" Now is your time to try this.

First, I like to get started with what PolicyPak is not. I know it's kind of a weird place to start,
but it's just my favorite place. First, we're not a handy collection of ADM files. You can get those
anywhere. That's not what we do.

We're not a replacement for what you're already doing with Group Policy, Group Policy Preferences or
Citrix "in the box stuff." We're not trying to overlap with something you already have or you've
already invested in.

We're not a replacement for SCCM, LanDesk, KACE, Ghost, whatever. Those tools do a great job with
those things.

We're not a replacement for MDM, Intune, Airwatch or MobileIron. Those guys do a great job with
that.

We're also not sold separately. When you see the demos that I'm going to show you – and this is like
the all demo channel here – if you like anything, you get it all included. You just have to make one
decision, and we'll talk about that around the bend.

We have no databases, no architecture changes. It's just ready to rock. We have a little moving part
called the client-side extension that has to be installed in there. We run right alongside Group
Policy or your MDM service.

We work with desktops, laptops, VDI, Citrix, real and virtual apps. Basically, if it's Windows, we
work with it. It's just that simple.

We also work alongside existing profile management utilities. If you've invested in something like
in FSLogix, we work perfectly alongside it. In fact, those guys are our friends and our partners. So
the point is if you already have something that does profile management, we are a fantastic add-on
to that.

You can see PolicyPak is a suite of stuff. You just have to make the one decision: do you want to do
it on-prem, MDM or cloud? You get all the utilities that are included in one shot, and you'll see
that.

Like I said, the On-Prem Edition is best for Citrix, desktops, VDI, laptops. Basically, if you're
going to use Group Policy, that's the On-Prem Edition. It's so funny, the last presenter talked
about, wouldn't it be amazing if there was some magical Group Policy merge tool? There is. We have
one, and it's included in our On-Prem Edition and works alongside our On-Prem Edition. We will not
have time to talk about that today, but it is awesome and I can help you get to that.

We also have our MDM Edition that works alongside Intune, Airwatch and MobileIron. A lot of people
are trying to get their on-prem Group Policy Objects out there. This is the way to do that. We're
not going to be talking about that in this talk either, in this demo set, but if you have on-prem
GPOs and you want to get them out there using your Intune, we are the only way to do that for all of
Group Policy security, admin templates, preferences and so on. We get everything out there.

PolicyPak Cloud Edition is great for MSPs and also works with non-domain joined machines as well.

We also have a little add-on utility called the Compliance Reporter, which helps you know if your
settings actually made it out there on your endpoints.

When this demo is over, this is how you're going to possibly win a copy of my book. You're going to
tweet "You Gotta Try This! @PolicyPak on #Citrix." When you do, I will reach out to you and pick you
if you are the winner. So you have to tweet "You Gotta Try This! @PolicyPak on #Citrix." I'll give
you a reminder of that when it's time.

Let me show you how it all works. Again, this is the on-prem version. It's basically Group Policy
based. The idea is you can take any given Group Policy Object, give it any name you want like
"PPOP1," and click "Edit" in the GPO here, and we hook right into the Group Policy infrastructure
you already know and love. In other words, you already know how to use it. We just hook right in,
and we're going to be going over demonstrations about how we're going to use these various toolkits
in your Citrix world.

Let me switch over to my Citrix world and show you what I've got here. This is my Citrix server
hanging out, ready for me to use it. This is a typical client. This is a Windows 10 machine. It has
the "Citrix" folder and all the things I run. So if I double click on "Notepad," this is obviously
coming from the Citrix server.

The thing about these applications is that they're important to configure on your real machines and
in your Citrix world. So the very first thing I'm going to show you, and this is where we kind of
got famous, is this idea of managing the heck out of applications configurations.

For instance, if I were to double click on "Firefox" and I was to double click on "Configure Java"
here, again this is coming over from the Citrix world and we're going to see the presentation of
these guys. You might want to set something simple like the Firefox homepage or the Java "Security"
settings and so on. How are you going to do that? You can't bake it into your image and even if you
did that, it would mean that a user could just work around those settings at any time.

Let's go ahead and let me just show you in Firefox land, which is coming from Citrix here. If I go
to "Options" here and I were to take a look at the "Home page," you can see that's not set. If we
take a look at "Privacy & Security," we don't want to "Remember logons and passwords for websites."
That's a terrible idea. We don't want to do that. Let's go ahead and close this out here.

Let's go back over to my GPMC. Just to make things go a little bit smoother, I've got the demos
already staged in policy land, so I'm going to go ahead and select "Link Enabled." But I'm going to
show you what I did so there's no mystery about what's going on here.

Here on the computer side in "PolicyPak" land, I'm starting off with the thing we got famous for,
"Application Settings Manager." You can see I have two entries: one for "Firefox," one for "Java."
In "Firefox" when you double click it, it looks just like Firefox. You can set the "Home Page." You
can right click and lock down configurations so users can't work around them. You can uncheck
checkboxes like "Remember passwords for sites." You can drive in certificates. You can set
bookmarks. You can do everything.

The same thing for "Java." You can do things like uncheck "Check for Updates Automatically." You can
set things like the "Security" settings and guarantee values like "High" value here. You can set the
Java "Exception Site List" and just do just about freaking everything. Here you can set these
individual checkboxes. Whatever you need to make your Java work perfectly.

Let's go over to our Citrix box here. This would naturally occur in the background, but because I'm
doing it real time I have to go over to the Citrix box to run GP Update ("gpupdate"). Again,
normally your Citrix machine would just pull this information down.

Once this has been achieved, we'll go back to our endpoint here and let's see it actually take
effect. Once again, I'll hit "Firefox" first. We'll double click that guy. Again, this is coming
from the Citrix box. This time when Firefox runs, the expectation is, there it is. We got the Citrix
homepage just the way we expect.

Now if we go to "Options" here and we take a look, you can see it's delivered and it's locked down.
If we go to "Privacy & Security," we've unchecked and forcefully made it so that a user cannot
"Remember logons and passwords for websites."

If we were to go over to Java land and get the presented here to us, we're going to go ahead and see
what "Java" looks like on the Citrix server here and see if we've configured that appropriately for
our contingent.

We can see we have no more Update tab. If we were to go over to "Security," we've driven in "High"
security, we've set the Java "Exception Site List." We've set "Advanced" security settings. Just
like that, you are now more secure in your applications themselves than you were ten minutes ago.
You've made it so that users can't work around them, and you are in charge now, not your users.

Let's continue onward and talk about Java. In fact, let's go back to the Citrix server. Let me go
and take a look here in "Control Panel." I want to show you something. You've probably seen this
before but you didn't know why this existed. Notice how you have "Java 7 Update 67," "Java 8 Update
25," "Java 8 Update 131." Basically, Java lets you install multiple versions on the same box.

Why does it let you do this? In the guts of Java somewhere, there's this thing called Java
Deployment Rule Set. The thing is that if you're on your box here and you double click on, say,
"Internet Explorer" – and this is, again, coming from the Citrix server – if you were to ask Java,
"What version of Java do I have?" it's only going to tell you the latest one.

But the thing is that you might have a website that requires a very particular version of Java. So
if I were to go to "java.com" here and I were to take a look and ask "Do I have Java?" this thing is
going to say, "Yes, you sure do. You have the latest version." Yes, I have the latest version as the
Citrix server knows it.

That's not great because you might have some timecard app or some specialty app that requires a
particular version of Java, but then you want the latest version of Java to be the most secure. How
are you going to solve that challenge? That's where PolicyPak Java Rules Manager comes in.

We'll go back over here. I've got a preconfigured policy for this. Let me go ahead and select "Link
Enabled" and click "Edit" here and show you what's going on here. Now under computer side,
"PolicyPak/Java Rules Manager," one of our components here, the idea is that I've just sent two
rules here.

It's as simple as pie. You just simply say whenever I go to this location, "https://www.java.com," I
want to run "Java SE 8 Update 25" "Exact." If I don't see it, that's an error condition because that
means I'm not going to be secure. We're going to say run "Java SE 8 Update 25" specifically for this
website. For another website, "https://javatester.org," we're going to run "Java SE 7 Update 67." So
we're pinning down a particular website to a particular version of Java.

Let's go ahead and reupdate our Group Policy on the Citrix machine. Let's go ahead and see what
happens at that point. Now we're ready to head back over to our client machine that's actually the
guy we're on. Now we're ready to run "Internet Explorer" again. Now let's go over to "java.com."

Again, this is coming from the Citrix box. If we go to "Do I have Java?" here, "Verify Java
version," as far as the browser is concerned, you are using "Version 8 Update 25." Before, you were
using the latest version. Now, you are mapping a particular website to a particular version of Java.

If we were to go to "javatester.org," a different website, let's "Test the version of Java used in
this browser." What does this report? This would have also reported the very latest version, but now
we've mapped it to Version 7 Update 67. That's exactly what we said we wanted to do inside the GPMC.

Just like that, you can have the latest version of Java for security purposes but have an earlier
version of Java for compatibility purposes. Let's keep the good mojo going here. Let me show you
another thing that happens very often in Citrix land or desktop land for that matter.

Let's say you're hanging out in "Firefox" or in "Google Chrome." You know that some browser will
only work perfectly with a certain website. For instance, I've got Chrome here and I've got Firefox
over here. Let's say you're having a good time. You're over here at "citrix.com." Everything is
going great at "citrix.com" here, but you know that the PolicyPak website doesn't work perfectly
unless it's in Internet Explorer.

You can start another tab. Don't blink. Here's the magic: "www.policypak.com." Watch this. We're
going to close the tab and open up the right browser for the right website. Did you see that go?
This is coming from Citrix. This is not local to the desktop. This is happening all on the Citrix
server.  
I can show you that again if you want to here in Chrome land. Don't blink. I'm here on the Citrix
server. I go to "www.policypak.com," and we route you over to Internet Explorer. If you're in
Firefox as well, I've actually set up a couple of routes.

In fact, let me show you what routes I have set up so you can see how easy this is to do. "PP
Browser Router Demo," he's already ready to go. Let me click "Edit" on this guy. It's as simple as
saying when I'm on this wrong website, route me to the right browser.

If I go to "PolicyPak/Browser Router" here, these policies are set up. I have whenever I go to
"www.policypak.com," head on over to "Internet Explorer." Whenever I go to "mozilla," make me use
"Firefox." Whenever I go over to "google," I want to use "Google Chrome." Whenever I go to
"facebook," "Block" it.

Let's see that. Here I am. I'm in Firefox land. Let's say I decide to go to "google.com." Remember,
I'm in Firefox. I'm in the wrong browser. The right browser would be Chrome. What do we do? Close
the wrong browser, open up the right browser.

Now you're in this browser and you decide you want to go over to "mozilla.org." What do we do? Close
the wrong browser and open up the right browser. Then you decide you want to go to some place like
"facebook.com," and that is not allowed.

This is all happening on the Citrix server. Or, of course, it can happen on your local desktops just
like that. We call this PolicyPak Browser Router, and it's built in. You just have to make the
decision if you want to use the on-prem version, the MDM version or the cloud version.

The next thing I want to show is this idea of privileged management. Again, here's an application
that is running from the Citrix box. The thing is I'm just a standard guy. I'm just a regular guy
when I run this thing, but this application only works perfectly when it's being run as an admin.

Not every application is a good candidate for this. In fact, there are more that are on regular
desktops than there are in Citrix land. But I want to show you this idea of elevating the process to
run perfectly as needed can be done not only on the desktop but also on Citrix.

You can see this is being prompted from a Citrix box for UAC prompts, but that is not the best way
to do this. The best way to do this is to create a PolicyPak Least Provilege Manager rule
([https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)),
which I've already got set up here. Let me go ahead and select "Link Enabled." Then I'll go ahead
and click "Edit" just to show you what it looks like here.

This time I've decided to do this on the user side. Whenever this user logs on, I want to use "Least
Privilege Manager" to "Let Treesize free run as admin." I found the digital signature of the vendor,
and I tied it down to the file. As such, it's ready to go. I'm running this process with elevated
privileges. It's just that simple.

If I go back over here, ten seconds ago when I double clicked on "TreeSize Free Administrator," it
didn't play ball. But now that the rule is set up, this time when Citrix goes to run the app the
process is injected correctly with the token that we need in order to get the job done and no more
running with admin rights. He's able to "Select Directory," scan the whole C drive and so on. This
works, again, not just in Citrix but also in VDI land and also for your real desktops as well.

The last thing I want to show you is probably my favorite. You have these applications that are
hanging around in Citrix land. But you know what? This is your real desktop, and it is freaking hard
to get the shortcuts that live here to actually now live in the Windows 10 start menu. You could try
to do it yourself. It's really bloody hard. In fact, if you take a look at the "Target," you can see
that we have the Citrix plug in and it points to the application. Man, what a mess.

We can use the PolicyPak Start Screen and Taskbar Manager. I have a policy here, and it's ready to
go. You have to go with me on this one. Hang tight. Let me show you how this thing works. Here in
the "Start Screen Manager for Windows 10," I have these two little folders.

One folder says do this stuff when I'm on "Normal Desktops." I'm going to show you that one first.
On a normal desktop, I'm going to create a group called "Citrix XenApp Apps." I'm going to shove in
"Chrome," "Firefox" and a link to a "Full Citrix Desktop."

The way you do this is super simple. You simply right click, "Add/New Desktop Application Tile." You
follow the wizard along. You can make it a "Registered application" or a "Custom application." I've
already done this to make this go a little bit faster.

Now this is my real desktop that is going to get these settings. Ten seconds ago, my Citrix apps are
not here. On my real machine, if I run GP Update ("gpupdate"), in fact, you can watch this in real
time. It's pretty badass. Watch this. What's going to happen here is we're going to get a group in
real time on the real machine that's going to be our "Citrix XenApp Apps."

Instead of having a floppy folder that's hanging out on your desktop, now you have a real beautiful
Windows 10 start screen that you can choose and you can pick "Google Chrome." You can pick
"Firefox." That is amazing right there. I just love showing this part off.

Then the last thing I want to show is what happens if you're inside a Citrix desktop. Let me go back
here. Remember I said I had two folders here: one for "Normal Desktops" and one for "When on
TS/Citrix" when I'm inside Citrix land.

How do I determine that? I'm using Group Policy Preferences' item-level targeting. You probably
already know how to use it. You can say whenever I'm in a Terminal Server session, that's when I
want to do these things. I've got a group called my "Inside Citrix Group," and I'm going to shove in
"Firefox" and "Chrome."

Let's see it work. If I'm here in my real desktop and I click into my Citrix desktop, I've
instantiated an RDP connection as a standard user. What's going to happen now? At this point,
PolicyPak is kicking in inside the desktop session and if all goes well here we should see the
"Inside Citrix Group" icons. This is now running locally to the Citrix box. I can click on "Firefox"
and click on "Google Chrome."

All the stuff I showed you earlier of course also works inside. If you're in the browser and you
need to go to the right browser, like I said you want to "policypak.com" here, what are we going to
do? Browser Router kicks in here and so on.

It all is one unified system. No brain power involved. You already know how to use it because you
already know how to use Group Policy. Just like that, you become the rock star that your company
needs.

If you think that was cool and you want to help get the message out, let me go ahead and get that
PowerPoint up one more time here. What are you going to do in order to win the book and also maybe
have a cup of coffee with me? See what I did right there? I'm coming out of the coffee. You tweet
"You Gotta Try This! @PolicyPak on #Citrix." When you do that, I'll see you and then if you're the
winner, I will reach out to you and send you a copy of my book.

I think that's it. I'm 20 seconds under time. With that in mind, I'm going to hand it back over to
my pal, Eric.


