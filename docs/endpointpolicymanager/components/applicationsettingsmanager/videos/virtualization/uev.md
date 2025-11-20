---
title: "Microsoft User Experience Virtualization (UE-V) enhanced by Endpoint Policy Manager"
description: "Microsoft User Experience Virtualization (UE-V) enhanced by Endpoint Policy Manager"
sidebar_position: 30
---
# Microsoft User Experience Virtualization (UE-V) enhanced by Endpoint Policy Manager

Microsoft's User Experience Virtualization (UE-V) product is great and it does something Netwrix
Endpoint Policy Manager (formerly PolicyPak) doesn't do. On the other hand Endpoint Policy Manager
does something that Microsoft UE-V doesn't do, too. And that makes a perfect "better together"
story.

Here's the video to show how Endpoint Policy Manager and Microsoft UE-V (or, really, any User
Environment Manager (UEM) tool) can work together seamlessly.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0yIjVqid_A0?si=8bnUOZlCY8setNRe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Okay. Let's review:

- Microsoft UE-V (or any other 3rd party UEM tool) can help when users change their own settings and
  roam from machine to machine.
- Endpoint Policy Manager dictates settings, enforces them and ensures that IT standards are
  delivered and maintained.

So, better together story? You bet !

- UE-V simply doesn't deliver or enforce settings — ever. That's not its job.
- Endpoint Policy Manager doesn't roam users' changed preference settings — ever. That's not its
  job.

Let users roam what they think are important settings (UE-V). You dictate and enforce what you know
are important business and IT settings (Endpoint Policy Manager.)

Like Microsoft U-EV, Endpoint Policy Manager works with regular installed applications and also
Microsoft App-V applications. Both Microsoft U-EV and Endpoint Policy Manager work with real
desktop, laptops, Terminal Services (RDS) and VDI.

When you're ready to manage try out Endpoint Policy Manager with your UE-V, and manage your
applications settings using

Group Policy, Endpoint Policy Manager is here for you.

Click on Webiar/Downdload
([https://www.policypak.com/integration/webinar](https://www.policypak.com/integration/webinar)) on
the right to try it out for yourself.

### Endpoint Policy Manager enhances Microsoft User Experience Virtualization Video Transcript

Hi, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, we're going to learn how PolicyPak and Microsoft's User Experience Virtualization, or
UE-V, work better together. Let's go ahead and understand what Microsoft's UE-V tool does in the
first place. If a user were to go to "Edit/Preferences…" and change something that was important to
them – for instance here in "Acrobat Reader" we have the user changing their "Page Units" from
"Inches" over to "Millimeters."

They click "OK," and then they close the app. Then we're going to assume that they roam from one
machine to another machine. Now that other machine could be a desktop, a laptop, a Microsoft
Terminal RDS session or a VDI machine. It can even actually be a machine that has the same
application installed with Microsoft Application Virtualization, or App-V. In fact, that's how I
have this one running. If you go to "Edit/Preferences…" on this machine, we can see that setting has
roamed with the user, and now the "Page Units" are now changed to "Millimeters" on this machine, as
well. If I were to change it from "Millimeters" over to "Picas" and click "OK" and close this out,
what would happen when I roam to my next machine, which could also in fact be the first machine I
was on? If I roam back there and I click on that same application and go to "Edit/Preferences…," you
can see that setting has roamed.

That's exactly what Microsoft's User Experience Virtualization tool does. Now let's understand the
better together story. The problem is that sometimes you – the person in charge of IT –have
important security and business settings that you want to ensure are delivered to that application.
For instance, how could you be sure that this important checkbox of "Enable Acrobat JavaScript" was
forcefully unchecked? What about this setting, "Security (Enhanced)"?

If a user unchecks "Enable Enhanced Security" and then clicks "OK," that just makes it less secure.
If they roam to another machine and you run that application on the other machine, when you click
"Edit/Preferences…" you've now roamed that insecure setting over to that other machine. That's
exactly what PolicyPak is going to help us eliminate. Let's go ahead, and to alleviate this problem
now is where PolicyPak comes in. We'll go ahead and create a new Group Policy Object against where
our users live. We'll call that "Enforce Important Acrobat Settings." Again, PolicyPak will work in
the same way User Experience Virtualization will work with just about any application, so will we.

PolicyPak ships with 35 applications and more all the time in the box. You can see here that we've
got "PolicyPak for Adobe Reader X" right here. We'll go ahead and double click it, and we'll go
ahead and set our settings. For "JavaScript," we said we wanted to uncheck that setting. Here is yet
another additional PolicyPak superpower. Not only can we deliver the important setting – and in this
case that setting is uncheck –we can also right click and "Disable corresponding control in target
application."We're going to literally gray it out so the user can't work around that setting.

Let's go ahead and take a look at the "Security (Enhanced)." If we were to check this setting, that
would ensure that that setting would be delivered, in fact forcefully guaranteed and re-guaranteed
to our target user. We're just going to right click over that guy and also "Disable corresponding
control in target application."So we're delivering the checkbox and enforcing it on using "Disable
corresponding control in target application." Now that we've locked and loaded our directive inside
Group Policy, let's just go to each of our machines. We'll run GPUpdate on the first machine.

I'll go over to the second machine, and I will do the same thing – run GPUpdate on each of these
machines. We could have logged off or logged back on or just waited a little while and Group Policy
would have kicked in and done the update, but we're just using GPUpdate to accelerate things a
little faster here. Now that that's done, on our first machine let's go over and take a look at
Acrobat Reader ("Adobe Reader X") and go to "Edit/Preferences…" here. Let's go to "JavaScript"
first. PolicyPak has delivered uncheck. This thing was checked; it's now unchecked, therefore making
it more secure. PolicyPak is also enforcing the setting by literally graying the UI out so the user
can't work around it. The same thing with "Security (Enhanced)."

If the user thought that they might want to uncheck this checkbox, now there's no way to do it.
PolicyPak is delivering the enforcement. If we take a look again at "Units,"PolicyPak hasn't
dictated a setting here. If a user decides they want to change this over to "Inches" and click "OK"
and close out their application, that's perfectly allowed. User Experience Virtualization for
Microsoft will take that setting and roam it over to the next machine. Let's go ahead and take a
look at our second machine here.

We'll run "Adobe Reader X" and we'll see that the application is virtualized in Application
Virtualization, Microsoft App-V. We'll go to "Edit/Preferences…" and we'll go over to
"JavaScript."PolicyPak will deliver settings to real and virtualized applications for Microsoft,
VMware ThinApp and Citrix XenApp and XenApp streaming. You can see that PolicyPak has delivered the
setting right here, unchecked the checkbox and guaranteed it to be the way we want it to. The same
thing with "Security (Enhanced)."

We're ensuring that security setting that we really need is really there. If we go over to "Units,"
you can see that Microsoft User Experience Virtualization has roamed that setting from the first
machine over to the second machine. That is the better together story. Let's take it down to the
20-yard line one last time. You use User Experience Virtualization for Microsoft, or UE-V, to ensure
that the settings that are important to users can roam with them from machine to machine. You use
PolicyPak to guarantee and dictate the settings that are most important from a security or the IT
and business perspective to ensure that users, in fact, cannot work around the settings.

We will actually deliver the setting and enforce it, where UE-V does a great job for when users
manipulate the settings and you want those settings to roam from machine to machine. So PolicyPak
for delivery and enforcement and UE-V for users' preferences to roam around with them. If you have
any questions about how these two tools make an awesome better together story, we're here for you,
just reach out. We'd love to get you the bits of PolicyPak and you can try it yourself and see how
wonderful the better together story really is. Thanks so very much, and we'll talk to you soon.


