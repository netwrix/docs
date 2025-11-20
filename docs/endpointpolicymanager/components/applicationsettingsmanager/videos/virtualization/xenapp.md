---
title: "Endpoint Policy Manager & Citrix XenApp"
description: "Endpoint Policy Manager & Citrix XenApp"
sidebar_position: 20
---
# Endpoint Policy Manager & Citrix XenApp

Once your Citrix XenApp streaming application is launched by your users, they can do practically
whatever they want and DECREASE the security you want them to have. With Netwrix Endpoint Policy
Manager (formerly PolicyPak), you can dictate specific settings for each of your applications plus
lock users down so they can't work around your settings. See how Endpoint Policy Manager enhances
Citrix XenApp streaming environments by providing true Group Policy support to any Citrix XenApp
streamed application PLUS lock users down so they cannot work around your settings.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k8GzrHk4snY?si=ubDOTF6bexwK_XHP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager enhances Xenapp Streaming with Group Policy video transcript

Hello, everybody, and welcome. This is Jeremy Moskowitz, former Group Policy MVP and Founder of
PolicyPak Software. In this video, we're going to learn  how you can deploy Group Policy settings to
your Citrix XenApp Streaming applications. Before we go into the demonstration, I just want to set
the stage really fast. It's true that XenApp Streaming can handle proper policies keys. If you have
applications that are already Group Policy aware like Office 2010, that's great. You've made a fine
choice in picking XenApp Streaming, and it will pick up the Group Policy settings there. But the
downside is that actually 99% of applications store their settings somewhere else, like Acrobat
Reader ("Acrobat 10x Stream") or "FileZilla Streaming." In fact, FileZilla doesn't store its stuff
in the registry at all. It stores its stuff in an XML file. Or you take "FoxIT3 Streaming." That
actually stores its stuff in an INI file, or OpenOffice that stores its stuff in a weird file called
an XCU file, or you take "Firefox8 Streaming" that actually stores its stuff in some other wacky
file type, not in the registry. If we take a look at the applications across your environment,
probably the smallest fraction uses the proper policies keys. Therefore, if you want to use Group
Policy to deploy settings and manage your applications, you're going to have to think about
something else. That's where PolicyPak comes in. PolicyPak's job is to deliver settings directly to
your real installed applications and also your Citrix XenApp Streaming apps. Let's go ahead and get
started with a quick demo here. Let's say for all of my "West Sales Users" I wanted to "Lock down
WinZip for all users" here. If I right click and click "Edit…" here, I'm linking a Group Policy
Object working with the Active Directory and Group Policy infrastructure you already have. Dive down
under "PolicyPak/Applications/New/Application." PolicyPak ships with over 35 preconfigured Paks with
pretty much every setting you could possibly imagine to get to inside your applications. For this
quick example, we'll go to "PolicyPak for WinZip 14 and 15" just as our first example here. First,
note that the UI looks exactly like the actual application we want to manage, which is really nice.
Let's set some security settings here and make sure users can't work around it. Let's increase our
security by dictating the "Minimum password length." PolicyPak can also for just about any
application "Disable corresponding control in target application" or "Hide corresponding control in
target application." The idea is that's going to gray out or literally remove the UI in your
application. You've probably seen that for some applications if it's supported, but PolicyPak goes
the extra mile for applications even if it's not built into the application. We're going to right
click over here and click "Disable corresponding control in target application" on that, and we'll
right click over this setting and "Hide corresponding control in target application." I'm making
some manipulations here. Over "Cameras," we're going to right click over "Cameras" and "Disable
whole tab in target application." Now when we click "OK" here, we've now set the policy inside Group
Policy and Active Directory. We'll now go over to our client machine, and let's go ahead and get a
"Command Prompt" here and then run "gpupdate." Now when we run GPUpdate, it's going to pull the
latest, greatest Group Policy settings in. We could, of course, also log off and log back on or
change computers or use a new VDI session or pretty much anything else. As soon as we get the
latest, greatest Group Policy, this is going to stay with us. Let's go ahead and check it out. We've
got two things side-by-side here. We've got the real installed "WinZip" and then we have the "WinZip
Streaming." Let's click on the real "WinZip" first and let's take a look at that. If we go to
"Options/Configuration…" here and go to "Passwords," look at that. It did exactly what we wanted. We
delivered "11," and it's unchangeable for the user. We've delivered the four checkboxes, and we've
literally removed the UI there. If we go to "Cameras," look at that. We can't click on "Cameras"
either. We're increasing the security using Group Policy to our regular applications. Here's the
"WinZip Streaming" version here. Now you'll see that if you hover over it, it's using the "ICA
Client" to do the WinZip offline streaming. The idea is that this is going to be maintained on the
client machine even when we have no network connection, and that's coming down streamed from the
Citrix server. If we take a look, go to "Options/Configuration…" and go to "Passwords," look at
that. We inject exactly the policy settings we want to right into the application dynamically. I'll
show you how we do this in just a little bit, but I want to go over some other examples. But look at
that. We've been able to dictate the exact settings we want. If we want to change these dynamically
by simply going back to the policy and updating "Passwords," we want to go to "15" or something like
that, that's totally great. The next time we get Group Policy, we'll run "gpupdate" and see that
it's updated across the board for all of our applications. There we go. Let's rerun "WinZip
Streaming" here. Now if we go to "Options/Configuration…," go to "Passwords," it's dynamically
delivering the settings. I've seen lots of people use pre-startup scripts to jam in a particular
registry item or something like that. That's great. That's a perfectly fine strategy except it's not
dynamic. That is where PolicyPak not only delivers the settings dynamically about who you are and
what circumstances you want, but also we can do this magic lockdown that only PolicyPak can do. You
can't do that using Group Policy or the Group Policy Preferences. Let's take another example here.
Let's go to Acrobat here. This is another side-by-side example. Here you've got "Acrobat 10x Stream"
and here you have "Acrobat X XenApp" running directly on the XenApp server. Let's go ahead and run
the one on the XenApp server just for fun to show you that. We'll also run the streaming one.
They're going to run side-by-side. One is presented from the XenApp server. The other one is
streamed from the XenApp server. There you go. You can see them both starting up, doing their thing.
There we go. Now they're running side-by-side. If I go to "Edit/Preferences…" on this guy – this is
the one that's presented from the Citrix server – if I'm a user and I click this checkbox, I'm
becoming less secure on my Citrix server. If I uncheck this checkbox, I'm becoming less secure on my
Citrix server. We definitely don't want that. For the streaming version of this, again, you want to
protect your users every way you can. Again, if a user has that checkbox checked, you're probably
going to want it unchecked, which is the "Enable Acrobat JavaScript" checkbox. Same thing with
"Security (Enhanced),"if they uncheck this checkbox, they're putting themselves at risk and we
certainly don't want that. What are we going to do? Let's use the power of Group Policy to dictate
the right settings to every instance of the application from Citrix. What we'll do here is we will
"Lock down Acrobat Reader for all users." We'll right click, click "Edit…" here.Now we'll dive down
under "PolicyPak/Applications/New/Application" and we'll pick "PolicyPak for Adobe Reader X." Again,
what we want to do is for "JavaScript" we want to uncheck "Enable Acrobat JavaScript" here, and
we'll right click and "Disable corresponding control in target application." We're going to uncheck
the checkbox and lock it down so a user can't work around it. Under "Security (Enhanced)," we're
going to ensure that if it was unchecked that we will recheck it. We'll also "Disable corresponding
control in target application." Lastly, for "Updater," unfortunately sometimes we deploy our
packages but we forget to change the right setting. In this case maybe we want to "Do not download
or install updates automatically."While we're here, we also want to once again "Disable
corresponding control in target application." Once we've deployed all of those settings, all we've
got to do is go back to our target machine, run "gpupdate" and, again, because we're running with
the Citrix receiver here, both instances of Acrobat – the one that's deployed from the XenApp
server, presented from the XenApp server, and the one that's streamed from the XenApp server – will
both get exactly the same settings. If I were to have a hand-installed version of Acrobat here, it
would also pick up the exact same settings. I'm going to run the one from the XenApp server first –
"Acrobat X XenApp" – and just show you what that looks like first. If we go to "More information"
here, I might be able to catch it. It says, "Applying registry policy…" and then at the very end
we're going to apply the PolicyPak policy. There it was – "Applying PolicyPak policy…." It went by
super-fast, but it did actually do it. We apply PolicyPak policy directly to the application. We'll
go to "Preferences…" here. Look at that. We've deployed that checkbox and grayed it out so a user
can't work around it. We go to "JavaScript," we've unchecked the checkbox and they can't work around
it. We go to "Updater," and we've turned off automatic updates and they can't work around it.
Excellent. Let's take a look at the streaming version of this now – "Acrobat 10x Stream." The
streaming version is now officially here on the target machine available offline. If we go to
"Edit/Preferences…," look at that. We get the same settings uncheckable. Right there, the same
settings uncheckable. We go to "Updater," the same settings and uncheckable. That's the point.
PolicyPak can deliver applications settings to real installed apps, to applications that live on the
XenApp server and also applications that are streamed from the XenApp server. Last but not least,
let's take a look at Firefox here. Just for fun, I'm going to run "Firefox8 Streaming" first. I just
want to show you the kinds of things that a user can do to mess up your world here. Sure, I'd love
to take on Internet Explorer's settings. We'll go ahead and say "Yes" to all that. Sure, we'll make
it the "Default Browser." Everything's great, so we can close that out. If a user goes to "Options"
here, maybe you want to dictate a guaranteed "Home Page" for them. Maybe for the "Security"
settings, you want to make sure that if they do something nasty like uncheck these very important
"Security" settings, then those settings are redeployed again and again. This is a streamed
application. It lives on this machine. If we were to now target Firefox, we're going to go to
"Create a GPO in this domain, and Link it here…." We're going to "Lock down Firefox for all users."
Click "Edit…" here and once again under "PolicyPak/Applications/New/Application" and we'll go to
"PolicyPak for Mozilla Firefox." Now remember, Firefox doesn't keep its stuff in the registry.
There's no easy-peasy way to say wherever a user roams make sure they get the exact same settings,
until now. We're going to deploy "www.policypak.com" as the "Home Page." We'll also go to "Security"
settings and dictate that, because the user turned off these "Security" settings, we're going to
turn them right back on. It's just that easy. We'll go back to our target machine. We'll run
"gpupdate" and now after GPUpdate succeeds, the very next time we run Firefox from the XenApp
streaming server, we're going to ensure that our settings will dynamically be placed inside Firefox.
If you have a new security concern, you have something that's updated, something you need to make
sure is pushed out to all of your users or computers, you can do it instantly using the Group Policy
infrastructure you already have. Let's go ahead and run "Firefox8 Streaming" again. There it is,
"www.policypak.com." There's the home page. We'll go to "Options" and go to "Security." It's checked
just the way we expect. If they were to uncheck these settings or change the "Home Page" to
"www.google.com" something like that, the very next time Group Policy is updated and then Firefox is
run you will see that we will get it back to "www.policypak.com" and all of the "Home Page" settings
are there and the "Security" settings are there. You might be wondering, how hard is this to set up?
Does it take a lot of infrastructure, a lot of moving parts to make this happen? The answer is no.
It's very, very simple. It is true that PolicyPak does require that on all of your client machines
there's a little MSI called the "PolicyPak Client Side Extension" needs to be installed on all the
target machines that you want to make the magic happen on. Of course, if you want to do it on the
XenApp server itself, that's how we make the magic happen on the XenApp server. I have another video
just for XenApp. We're talking mostly here about streaming. So on the target machine here, you're
going to have to have the "PolicyPak Client Side Extension." The only other thing you need to do is
on your Citrix machine for all of your streaming applications, you're going to use the "Citrix
Steaming Profiler for Windows." You're going to do what's called a prelaunch script. It's under here
under "Pre-launch and Post-exit Scripts." You're going to add a little prelaunch script here. I'll
show you what that script looks like. It's right here. All you need to do is add a little batch
file. This is our little magic bullet that when the application is launched, it launches our
pre-launched script. We pick up the Group Policy settings that we've already deployed. So in other
words, the user has logged on or GPUpdate has occurred. Then just before the application launches,
we inject the Group Policy settings we need directly into the application's bubble right there.
Because of that, we dynamically update the application. If you've ever said, how do I make sure that
my applications are dynamically updated the way it's supposed to work in Group Policy, now you can
do it with Citrix XenApp Streaming and PolicyPak. It's just that easy. I'll go ahead and browse.
I'll just pick that one file off, and then I'll be done here. That's it. You would resave your
application and then redeploy using the app center just like that. It's just that simple. I hope
that enlightens you and now you understand better how you can manage your Citrix XenApp streamed
applications using Group Policy. Because remember, only a fraction, the smallest fraction, use the
proper policies keys. It's great that Citrix XenApp Streaming handles the proper policies keys, but
unfortunately applications like AutoCAD, Acrobat, FileZilla, Firefox, Flash, Chrome, Java, Snagit,
OpenOffice, Thunderbird, WinZip, Lync – none of those use the proper policies keys. So if you ever
wanted to manage any of those guys – Flash, Chrome, Java, Firefox, Thunderbird, Lync, any of those
things – using Group Policy to set settings and lock things out, PolicyPak is your answer. Thank you
so much for watching. If you would like to get the trial bits, all you've got to do is come to
www.policypak.com. Go ahead and click here under "Webinar/Download." Sign up for one of our one-hour
demonstrations, and then afterward we'll send you the bits and you can try it out yourself. Looking
forward to having you as part of the PolicyPak team. Thanks so much, because remember, with
PolicyPak what you set it what they get. Thanks so much. Bye bye.


