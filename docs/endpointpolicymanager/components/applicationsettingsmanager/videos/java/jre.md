---
title: "Manage Java JRE Control Panel applet with Group Policy"
description: "Manage Java JRE Control Panel applet with Group Policy"
sidebar_position: 30
---
# Manage Java JRE Control Panel applet with Group Policy

Ah, Java. You love it, you hate it. You know you need it, but don't know how you can manage it for
all the computers in your enterprise. Thank goodness for Netwrix Endpoint Policy Manager (formerly
PolicyPak). Endpoint Policy Manager has a pre-configured pak for Java JRE which makes configuring
the Java client on your desktops super duper easy. You want to prevent it updating on a collection
of users? Bam! Done.  
Need to set security options for one group of users different than another group (users vs.
developers)? That's Cake! Check out this video to see how it's done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aJOp02QxK8M?si=nlBEvGqGqEFOnjiX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Java JRE with Group Policy Video Transcript

Hi, everyone. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.In
this video, I'm going to show you how to manage Java using PolicyPak.

Here in my little demo station here I've got a "Win7Computer" and he's running "Java 6," and I've
got a "Win8Computer" station and he's running "Java" "Version 7." The point here actually is that it
doesn't matter what version of Java you run, old or new or yet to be created, PolicyPak is going to
be able to manage, control it and lock it down.

Let's talk about some of the settings that are pretty important here. There are some not so
important settings like "Debugging." I'm just a regular user here. I'm logged on as a guy called
"eastsalesuser4," but you probably don't want users clicking on these three checkmarks and clicking
"OK." That's just not OK, and it doesn't make any sense. They really shouldn't have any access to
these debugging items.

The same thing with the "Java console." You probably want to "Hide console," but how are you going
to do that and deploy that to all of your machines? That's what PolicyPak is going to do. Let's go
down to "JRE Auto-Download." The default is to "Always Auto-Download." I'm guessing you want to make
it "Never Auto-Download" and also ensure that users can't work around the settings. That's what
we're going to accomplish here. There are a lot of other settings here in terms of"SSL" and "TLS"
and things like that. You're welcome to play with these on your own, but those are the ones that I'm
going to go through in my examples.

Just to prove a point here in the slightly older version of Java, it's kind of the same thing.
You've got the same basic bells and whistles here, same general concerns, same security holes and
same thing for me here. I'm just a guy, "eastsalesuser4," on my Windows 7 machine, and you wouldn't
want me to check these checkmarks and do these things. You don't want to leave this up to the user.
You are in charge, so make sure you are in charge.

Long story short, let me go ahead and click "OK" here. Let's go over to my management station, and
I'm going to use Group Policy to deploy the directive. Let me go over to my "East Sales Desktops." I
will "Create a GPO in this domain, and Link it here…"and I'll call this "Manage and Lock Down Java."

I'll right click. I'll click "Edit…" here. Under "Computer Configuration," under
"PolicyPak/Applications/New/Application,"I'll pick "PolicyPak for Java Control Panel (Windows 7)."
There are a lot of other applications that PolicyPak has preconfigured Paks for – over 50 – but some
of my favorites are here like "Adobe Reader X," "Adobe Reader XI," "Flash," "Lync," "Firefox,"
"Thunderbird" and, of course, the good old "WinZip." There are more than 50 preconfigured Paks ready
to rock for you on the PolicyPak website.

Let me go ahead and click on the "Java Control Panel" applet here. You can see here we look pretty
much like Java. The first thing I want to do is I want to head over to that "Advanced" button. You
saw that I checked these as a user, these "Debugging" guys. I want to deliver uncheck, so if they
are checked by default, I want to make sure I can uncheck them. I want to do more than just uncheck
them. I actually also want to "Lockdown this setting using the system-wide config file."I'll go
ahead and lockdown all those three guys so users can't work around those.

For this "Java console,"of course we want to "Do not start console" and once again "Lockdown this
setting using the system-wide config file."I'll go over to "Advanced 2" and I will also "Never
Auto-Download" the "JRE Auto-Download." Once again while I'm here, I will perform the "Lockdown this
setting using the system-wide config file."

That's it. I'm locked and loaded. Let's go over to my target machines here. Let me go ahead and run
a good old "gpupdate" on each of these machines. Again in these examples, I happen to be using Group
Policy to deliver the PolicyPak directives, but you don't have to. You could be using SCCM or
LANDesk or Kase or your own systems management utility. It doesn't matter. I just happen to be using
Group Policy in these examples.

Let me go ahead and close this out. I'll go ahead and close this out, and now I'm ready to run
"Java." Let's go ahead and run it on my first machine here. Let's go over to "Advanced," go over to
"Debugging" and remember those things were checked. Now I've delivered uncheck and also grayed it
out and locked it down so a user can't work around the setting.

If I go to "Java console," it was set to "Show console." It has now been delivered to "Do not start
console," and once again it's locked down. My regular user who is not running with admin rights
can't work around that setting.If I go over to the "JRE Auto-Download," once again I can make it
"Never Auto-Download," and you can see I've grayed it out so the user can't work around the setting.

Let's just make sure it all took effect on my "Win8Computer," which happens to be running a slightly
newer version of Java here. Sure enough, you can see all those checkmarks are checked just the way
we expect. "Java console" is grayed out and set to "Do not start console." Lastly, "JRE
Auto-Download" is set to "Never Auto-Download."

There you go. PolicyPak is doing exactly what it's supposed to do: delivering settings, performing
lockdown and doing exactly what you need to make your world more secure. If you're looking to get
more information on PolicyPak and also a free trial, go ahead and click on the "Webinar/Download"
button on the right, and we'll get you started as soon as we see you there.

Thanks so much, and we'll talk to you soon.


