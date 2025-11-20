---
title: "Endpoint Policy Manager for Adobe Acrobat"
description: "Endpoint Policy Manager for Adobe Acrobat"
sidebar_position: 30
---
# Endpoint Policy Manager for Adobe Acrobat

Acrobat Reader is on every desktop in your company. Too bad it has 800+ settings for you to deal
with. Let's say you only needed to deal with some key settings to make your company more secure.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qNVCkgWfGDo" title="Endpoint Policy Manager: Manage Acrobat Reader using Group Policy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Ask yourself, how would you manage things like:

- Update behavior (turning it off, so users aren't prompted)
- Turn off dangerous items like Javascript
- Ensure Acrobat "Enhanced Security" is turned on

… or anything else that's important to your company?

Okay. You're right. You're thinking that you've been able to deliver Acrobat Reader settings to
clients with Acrobat's helpful "Customization Wizard X" utility.

In fact, here are the steps you would need to perform:

- First extract the `AdbeRdr1001_en_US.exethe parameters -nos_o"<file_path>" -nos_ne`
- Download Adobe Customization Wizard X, use it, and create your ownMST(Microsoft Transform)file.
- Then, on each system, either run start
  `/wait c:windowssystem32msiexec.exe /i "AcroRead.msi" TRANSFORMS=AcroRead.mst /qn /L* c:windowstempAdobeReader_10_US.log`
  or use Group Policy Software Installation (or your favorite software distribution tool) to deliver
  the MSI and MST combo to all your systems.

Great. You've got a customized version of Acrobat on all your machines with all the settings you
want.

Super! Now what do you do after Acrobat has been deployed and your users change your pre-configured
settings? Or, you realized you need to change some important default?

Answer: Without Netwrix Endpoint Policy Manager (formerly PolicyPak), you're in trouble. Big
trouble. Watch this video to get a handle on the problem and where Endpoint Policy Manager puts the
smack down on this important problem.

Yep, we've seen "ADM templates" out there for Acrobat Reader.

But there's a big problem with those. They can deliver the setting you want, but don't enforce it.

If the user changes a setting, that's it – the user has worked around your desired setting, and now
you've got a help desk call to deal with, or, worse, a virus that got delivered using Adobe Acrobat
when the user turned back on Javascript support.

Don't be that guy !

Our solution isn't a mere "ADM" template, it's a true Group Policy extension, with powerful
management and lockdown capabilities. PolicyPak can deliver, lockdown and revoke Acrobat settings –
the way you need to using Group Policy.

Our PolicyPak software snaps-in to the Group Policy Editor and mimics the user interface of the
Acrobat Reader application itself. You can set key settings (like turning off Acrobat Reader
updates), like what is seen here:

![33_1_acrobat-group-policy-policypak-3](/images/endpointpolicymanager/video/applicationsettings/33_1_acrobat-group-policy-endpointpolicymanager-3.webp)

You can ensure that Adobe's Javascript support is truly disabled, which makes your whole company
more secure, like what is seen here.

![33_2_acrobat-group-policy-policypak-4](/images/endpointpolicymanager/video/applicationsettings/33_2_acrobat-group-policy-endpointpolicymanager-4.webp)

Or ensure your users are forced to use the "big guns" with "Enable Enhanced Security" and ensure
users can't work around it.

![33_3_acrobat-group-policy-policypak-5](/images/endpointpolicymanager/video/applicationsettings/33_3_acrobat-group-policy-endpointpolicymanager-5.webp)

Without PolicyPak, you're on the losing side, because users are going to simply steamroll over you.

Besides, once you're using PolicyPak to manage Acrobat Reader, you'll also get to manage all your
other enterprise desktop applications the same way:Java, WinZip, Firefox, and any custom
applications you have.

They're 100% included – absolutely free.

It's all included when you're a PolicyPak Professional customer.

PolicyPak was designed by former Group Policy MVP Jeremy Moskowitz – who
"[https://www.mdmandgpanswers.com/book](https://www.mdmandgpanswers.com/book)" on Group Policy, runs
[https://www.mdmandgpanswers.com/](https://www.mdmandgpanswers.com/), and lives and breathes Group
Policy and enterprise software deployments and desktop lockdown.

When you're ready to get serious about managing Acrobat Reader today, PolicyPak is ready for you.
Unless you want your users to see this.

![33_4_acrobat-group-policy-policypak-1](/images/endpointpolicymanager/video/applicationsettings/33_4_acrobat-group-policy-endpointpolicymanager-1.webp)

Or this:

![33_5_acrobat-group-policy-policypak-2](/images/endpointpolicymanager/video/applicationsettings/33_5_acrobat-group-policy-endpointpolicymanager-2.webp)

### Manage Acrobat Reader with Group Policy video transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
discussion, we're going to talk about how to configure and lock down Acrobat Reader using Group
Policy and PolicyPak.

It's true, you might have been able to get Acrobat Reader deployed and also a first set of
configuration options available to a user. But they can just go to "Edit/Preferences" – and I
promise I'm just a regular user here – they can just go to "Edit/Preferences," and they can click on
things like "JavaScript" and check or uncheck these settings.

Well, actually, this one you probably want unset, but the idea here is that you want to make sure
that a user has this "Enable Acrobat JavaScript" unchecked. In fact, if they have it clicked, that's
a big problem. Because if they have it clicked and then the bad guys send them a PDF that has a
problem or a virus in it, well then, it could be a big security hazard because that JavaScript is
executing on this machine. I know that they've taken some strides around that, but it would be even
safer if this thing were unchecked.

But a user can just check it if they want to, or they click on "Security" and they uncheck "Verify
signatures when the document is opened." They go to "Security (Enhanced)," and let's – even though
Adobe recommends you leave "Enhanced Security" enabled – let's go ahead and uncheck it. Again, we're
thinking about as if we were a user here.

And "Updater," gosh, these users are constantly being asked to update Acrobat Reader. What happens
if they click on "Do not download or install updates automatically"? Well, actually, they get
prompted for user account control credentials. That's not good. That's not going to stick, but the
other ones are. For instance, if I go back to "JavaScript," that one stuck. In "Security," I
unchecked that guy. I unchecked this other guy here. So that's not good.

What we want to try to do is to ensure that the settings that we deliver, because it's important to
our company, is what happens in our applications. Let's go ahead and close out Acrobat Reader here.
Now we're ready to go to use Group Policy to do this. The first thing we want to do here is let's go
to "`C:Program FilesPolicyPakExtensions`." Like our other videos, the PreConfigured PolicyPaks and
the PolicyPaks you create will live here under the "`C:Program FilesPolicyPakExtensions`" folder.

On the right here, I've got the PreConfigured Paks that I've downloaded from PolicyPak. Here's
Acrobat 10. There it is, the DLL file, the PreConfigured Pak. We're just going to copy that guy in
there. Cool. Then that's it. We've got it locked and loaded.I've got another GPO here locking down
Thunderbird, but that's OK. We'll go ahead and "Create a GPO" and link it here. We'll call this
"Lock Down Acrobat X."

Let's go ahead and edit "Lock Down Acrobat X" here. Dive down under
"PolicyPakApplicationsNewApplication" and there's "Acrobat Reader X" right there. So let's hit these
one-by-one, the things that are important to us. That "JavaScript" guy, gosh, the default actually
is to leave that checked. I think if we're really smart, we're going to uncheck that.

By unchecking it, it actually should gray out these other guys, but it doesn't prevent the user from
rechecking it. So we're going to use PolicyPak superpower and right click over it and "Disable
corresponding control in target application." This would not be a normal thing you could do for
Acrobat Reader.

We'll also go over to that "Security" one here. We want to make sure that "Verify signatures when
the document is opened" is checked. We want to make sure that's true. There's also "Security
(Enhanced)." We want to also make sure that's always checked, even though before you just saw that I
worked around that. Also, while I'm here, let's go to the "Updater" tab. Right now it's configured
for the user to "Automatically install updates." Let's "Do not download or install updates
automatically."

So we're force-feeding in all these settings, and we're doing some superpowers as well. Let's go
ahead back to our user. We'll go ahead and run GPUpdate. They could also log off and log back on to
get these settings as well. They could change job roles, or they could just hang out and wait and
Group Policy will do its thing every 90 minutes or so.

Let's go ahead and see what happens here once `GPUpdate `is finished. Alright, so that's almost done
here. Excellent. So let's go ahead and fire up Acrobat Reader, and see if we can remember all of our
changes.

"Edit/Preferences," let's start off in the "JavaScript." Here we go, JavaScript sure enough. So,
like I said, I unchecked that checkbox and grayed it out so a user can't possibly screw it up, and
these other ones went along for the ride. But the point is that checkbox is not checkable by a user,
which is exactly what we want.

If we go to "Security," we've rechecked that checkbox. If we go to this other "Security (Enhanced)"
– you know, maybe that's super important. Again, it's so important, let's actually remove it from
the user. I'll show you how to do that in just a second. We'll go to the "Updater" tab, and sure
enough we've set it to "Do not download or install updates automatically."

But you know what? I've still got that feeling about this guy, this "Enable Enhanced Security." I
really want to make sure users can't work around that. So let me go ahead and close out Acrobat
Reader again. Let's go back to the Group Policy object here. Let's go back to that "Security
(Enhanced)" right there. Let's right click over that guy, and we're going to totally "Hide
corresponding control in target application" – literally remove it – so a user can't possibly screw
it up. We'll go ahead and hit "OK" there.

Now we'll go back. We'll run `GPUpdate `again. Let's go ahead and see what happens. Again, we're
just changing that one setting. That one thing I really want to make sure users can't possibly work
around. Now that that's done, let's go rerun Acrobat Reader here. Go to "Edit/Preferences" here and
check it out. That checkmark is now gone. I've completely removed it away from the user experience.

So I've been able to deliver the settings I want to underneath the hood. I can either gray it, or I
can completely remove it from the UI. I've set things like the "Updater." I've set things like the
"JavaScript" tab so users can't work around these settings as well. That is what PolicyPak does. If
the user changes job roles, we're going to totally put those settings back the way you expect and
also remove the lockout. You can see how we do that in some of our other videos when we talk about
our superpowers.

Thanks for watching. If you like what you see here with Acrobat Reader, it's available for most
applications. We've got a whole bunch of preconfigured Paks ready to use right now. Thanks so much.
Take care.


