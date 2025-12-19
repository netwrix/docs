---
title: "Endpoint Policy Manager extends Group Policy to Microsoft App-V"
description: "Endpoint Policy Manager extends Group Policy to Microsoft App-V"
sidebar_position: 10
---
# Endpoint Policy Manager extends Group Policy to Microsoft App-V

If you're using Microsoft App-V to deploy packages to users, you know the benefits of virtualized
applications. But you still have a big problem:

Once the application is deployed, how do you manage, change or configure that application? Microsoft
App-V has NO Group Policy support inside of sequences. So, if you needed to tweak a configuration
file, edit the registry, or otherwise configure your App-V packages, you've got a real problem.

See this detailed blog entry
([https://www.policypak.com/integration/blog-entry-link.html](https://www.policypak.com/integration/blog-entry-link.html))
and example.

Good news for you: We've got that problem totally handled.

Watch this video (exclusively for App-V administrators) to see exactly how to manage App-V sequences
using Group Policy using Netwrix Endpoint Policy Manager (formerly PolicyPak):

<iframe width="560" height="315" src="https://www.youtube.com/embed/9NPOcRjOrvs?si=tCaXFOOd7KjV7CrO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

You're smart. You picked App-V to make application deployment easier.

Now, you can be smarter to make application management easier too.

Microsoft should have baked the ability to use Group Policy into App-V sequences. But they didn't.
So, we did it for them – with Endpoint Policy Manager.

So now, if you need to change a setting, you don't have to re-open and re-sequence that package.

You can create your own Endpoint Policy Manager for your applications to manage all the
application's settings, or use one of our preconfigured Paks for lots of common applications like
Firefox, WinZip, Office 2010 and more.

You'll be managing your App-V sequences' settings using Group Policy – quickly and easily.

There's nothing extra to buy – this functionality is *all* included when you're a Endpoint Policy
Manager Professional customer.

Endpoint Policy Manager was designed by former Group Policy MVP Jeremy Moskowitz – who "wrote the
book" on Group Policy
([https://www.mdmandgpanswers.com/book](https://www.mdmandgpanswers.com/book)),
runs MDMandGPanswers.com ([https://www.mdmandgpanswers.com/](https://www.mdmandgpanswers.com/)), and
lives and breathes Group Policy and enterprise software deployments and desktop lockdown.

When you're ready to manage your App-V packages using Group Policy, Endpoint Policy Manager is here
for you.

Click on Download
([https://www.policypak.com/integration/about-us/contact-us.html](https://www.policypak.com/integration/about-us/contact-us.html))
or Webiar
([https://www.policypak.com/integration/webinar](https://www.policypak.com/integration/webinar)) to
get the software and try it out for yourself.

### Manage App-V applications dynamically with Group Policy video transcript

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how PolicyPak can manage Microsoft App-V 4.0 and 5.0 installations,
including when they're side-by-side like I've got right here.

In this demonstration and example here, these applications on the left are being deployed using
App-V 4.6. Here on the right is App-V 5.0. Just to prove a point, here's "WinZip." You can see it
downloading from the streaming server here. There's WinZip 14. You go to "Options/Configuration" and
nothing is set by default and it's not under any kind of management.

The same thing if we were to run the "AppV5 WinZip14" version here as well. If you go to the App-V
5.0 version, you get prompted with all sorts of questions and nothing is configured the way you
would want or expect.

If we were to go over to our OU that contains our "West Sales Users" here, we can "Create a GPO in
this domain, and link it here." We'll call this "Manage AppV4 and 5 with PolicyPak." The best part
is that PolicyPak makes App-V 4.0 and App-V 5.0 applications first-class citizens, so there's no
thinking involved at all. As soon as you have the Pak that you want – and we ship with over 150
preconfigured Paks; this is just a handful of them that we have here; here is "PolicyPak for WinZip
14" – as soon as you have it ready to go, it treats real applications and App-V applications exactly
the same. The magic is built into PolicyPak.

What we'll do is we'll drive in all four of these checkboxes here, and we'll set our "Minimum
password length" to "11." We'll also do some PolicyPak superpowers by selecting "Hide corresponding
control in target application" and "Disable corresponding control in target application" for certain
controls as well as tabs. We can select "Disable whole tab in target application" or hide or disable
particular UI elements as well. We'll go ahead and we'll click "OK."

We'll go over to our target machine here. Again, because PolicyPak utilizes either Group Policy or
SCCM or your own systems management software, as soon as a directive is on the target machine, it's
going to treat the App-V packages (both 4.0 and 5.0) as first-class citizens.

We'll go ahead and close this out. We'll go ahead and run "WinZip" with App-V 4.0, and we'll go
ahead and see the effect here. If we go to "Options/Configuration" and go over to "Passwords" here,
we can see we've delivered all four checkboxes, we've set the setting to "11" and we've grayed out
and hidden some of the UI, not to mention preventing the "Cameras" tab from being accessed. Again,
this is App-V 4.0.

Here in App-V 5.0 land, if we double click this guy and we go to "Options/Configuration," we've
delivered those exact same settings in as well. If a user tries to work around those settings and
tries to be naughty, the very next time the user reruns the application those settings are redropped
back in just the way you want to, even when the computer is offline.

Let's switch gears and talk about "Firefox." I've got two different versions of Firefox in this
example. Here for App-V 4.0 I have a really old version. I have "version 3.6.2." If I take a look
over at the one that's on App-V 5.0, it's version 27, so quite a ways different here. But it doesn't
matter. PolicyPak will deliver the settings nonetheless. Just to prove a point here, if I go to
"Help/About Firefox," you can see that's version "27.0" for App-V 5.0.

Let's go back to our Group Policy editor. This time we'll do it on the computer side for our "East
Sales Desktops." We'll call this "Manage Firefox for Appv4 and 5" and really anything else. If I
right click and click "Edit" here, we'll do this on the computer side. We'll go to computer side,
"PolicyPak/Applications/New/Application," and we'll pick "PolicyPak for Mozilla Firefox 23.0." We'll
go ahead and use that.

While we're here, let's go ahead and do the "Home Page" and make this "www.policypak.com." We'll
also do some superpowers as well like "Lockdown this setting using the system-wide config file" so
users can't work around it. We'll go to "Security" and we'll check all three of these checkboxes.
We'll also lock down two of them as well, just to be on the safe side.

Now remember, we're using two different versions of Firefox. One is version 6and the other one is
version 27. This is for Firefox 23 and later. So I'm going to change our internal "Predefined
item-level targeting" to "Off." In other words, this will affect now all Firefox versions regardless
of the setting. Now we've set this up. We've got a Group Policy Object. It's affecting all Firefox
types regardless of the version number.

Let's go over to our target machine here. We'll do a quick GP Update once again. There we go. Let me
close this out, and we'll run "Mozilla Firefox," the old version running on App-V 4.0. If we go to
"Tools/Options," you can see the "Home Page" is set and locked down. If we go to "Security,"
remember we've checked all the checkboxes, but we've grayed out two of the checkboxes here. It's
exactly what we wanted.

If I were to close out this version of Firefox and now run the "Appv5 Firefox27," if I go to
"Options," we've delivered the same settings in, locked them down, and set the "Security" exactly
the way you want.

As you can see, PolicyPak treats App-V as a first-class citizen. The application does not need to be
fully installed. We take care of that.

The last thing I wanted to show you here is what happens if you are done using App-V 4.0 and you're
transitioning away from App-V 4.0 and you're only going to continue onward with App-V 5.0. That's
great. PolicyPak keeps on working. There's absolutely nothing you need to do differently except to
continue on with your existing rollout plans of App-V 5.0. The point is that we work correctly
before, during and after your App-V 4.0 to App-V 5.0 transition.

That's what I'm doing now. I'm uninstalling the App-V 4.6 client. I do have to reboot. I'll pause
the video for a minute, and I'll come on back and show you that we keep on working.

Here we are back on the machine. Let's go ahead and go to "Control Panel" just to show you we don't
have the App-V 4.6 client anymore. We only have the App-V 5.0 client now. Here are the App-V 5.0
icons.If we go ahead and take a look at "AppV5 WinZip14," PolicyPak keeps on working. If we go to
"Appv5 Firefox27," we keep on working. Like I said, we work before, during and after your transition
from App-V 4.0 through App-V 5.0. When you wipe away App-V 4.0, PolicyPak keeps on working.

If you have any other questions, we're happy to help. We look forward to helping you our and getting
you started with PolicyPak real soon.

Thanks so much.


