---
title: "Endpoint Policy Manager extends Group Policy to Spoon / Novell ZENworks App Virtualization"
description: "Endpoint Policy Manager extends Group Policy to Spoon / Novell ZENworks App Virtualization"
sidebar_position: 60
---
# Endpoint Policy Manager extends Group Policy to Spoon / Novell ZENworks App Virtualization

If you're using Spoon Server or Novell ZENworks Application Virtualization, then you "get it."

You're virtualizing your applications, you've reduced conflicts, and your deploying applications
easier than ever before.

But you still have some big problems:

- Once the application is deployed, how do you mange, change or configure that application? (Think
  about it: Once it's deployed, users are kind of ‘on their own'.)
- How do you deliver settings dynamically into your packages? (Answer: You can't.)
- How do you prevent users from working around your important application security settings?
  (There's no protection from this just because the applications are virtualized.)
- How can you maintain those settings even when the computer is offline and the application is fully
  streamed to the desktop? (Uh oh. Strike four.)

Good news for you: We've got these problems totally handled.

Watch this video (we show Spoon.Net, but this video is also equally valid for Novell ZENworks
Application Virtualization customers.)

What you'll see is how to dynamically manage and lock down your virtualized applications using Group
Policy and Netwrix Endpoint Policy Manager (formerly PolicyPak):

<iframe width="560" height="315" src="https://www.youtube.com/embed/p8ismZANLqc?si=IgQK06roMSdj-xRi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

So, neither Spoon.Net nor Novell ZENworks Application Virtualization can redeploy, adjust, lockdown
or guarantee application or operating system settings.

Only Endpoint Policy Manager can.

And Endpoint Policy Manager works with your real applications and your virtualized applications.

You can use one of our preconfigured Paks for lots of common applications like Firefox, Lync,
Acrobat, Java, Flash, Office and more. Or, you can use our Endpoint Policy Manager DesignStudio and
create your own PolicyPaks for your own applications.

There's nothing extra to buy – this functionality is _all_included when you're a Endpoint Policy
Manager Professional customer.

Endpoint Policy Manager was designed by former Group Policy MVP Jeremy Moskowitz – who "wrote the
book" on Group Policy
([https://www.mdmandgpanswers.com/books](https://www.mdmandgpanswers.com/books))and desktop
management, runs MDMandGPanswers.com
([https://www.mdmandgpanswers.com/](https://www.mdmandgpanswers.com/)), and lives and breathes Group
Policy and enterprise software deployments and desktop lockdown.

When you're ready to manage your Spoon or Novell ZENworks Application Virtualization application,
Endpoint Policy Manager is here for you.

Click on Webinar
([https://www.policypak.com/integration/webinar](https://www.policypak.com/integration/webinar)) to
get the software and try it out for yourself.

### Endpoint Policy Manager extends Group Policy to Spoon / Novell ZENworks App Virtualization video transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how you can manage your Spoon Server or your ZenWorks Application
Virtualization server virtualized applications using PolicyPak.

You can do this either using Group Policy or your own systems management tool.For instance, the
Spoon Server here or Novell ZenWorks or SCCM – anything you want – but we happen to be using Spoon
Server and also Group Policy in this demonstration.

For starters, let's set the stage. The problem is that if your applications are virtualized, then
there's no way for regular Group Policy or your management to get inside the settings and/or lock
down the applications.

For instance, if I go to run "Acrobat with Spoon (PolicyPak)" here – you can see it launches from
the Spoon Server – and go to "Edit/Preferences…,"there is a huge amount of settings we don't want
our users to be able to have access to. For instance, we do want this checkmark checked. We do want
"Enable Enhanced Security," but we also want to ensure that the users have this unchecked, "Enable
Acrobat JavaScript."

Long story short is that if you are not managing your application settings inside your virtualized
applications, then you're not doing the best job you can to keep secure. Let's go ahead and run
"Firefox with Spoon (PolicyPak)" here. Firefox is one of those applications that you're going to
want to make sure is configured exactly the way you want.

You might want to set a "Home Page" and make sure that these important"Security" settings are always
ensured on. Now if we were just to rerun this application, you can see that there's just nothing
that's helping you at this point.

This is where PolicyPak comes in. If we go over to our server world, you can see I've got my "Spoon
Server" here. Nothing about PolicyPak is done on the Spoon Server directly. Everything is either
using Group Policy or your own systems management tool.

What I'm going to do is I'm going to "Create a GPO in this domain, and Link it here…,"and I'll call
this "Deliver and lock down important settings." What I'll do is I'll right click over this Group
Policy Object and click "Edit…" here and link it over to our "East Sales Users." Under our user side
"PolicyPak/Applications/New/Application,"I will pick "PolicyPak for Adobe Reader X" first.

PolicyPak ships with over 35 preconfigured applications ready to go, like Java, Flash, Firefox,
WinZip, Acrobat – the list goes on and on and on. I just happen to have those three ready to go
right now.

Under "JavaScript," let me uncheck that guy, because that makes you more secure when it's unchecked.
I'll right click and do a PolicyPak superpower of "Disable corresponding control in target
application."I'm going to make sure that users literally can't work around this setting.

I go to "Security (Enhanced),"and I want to ensure that "Enable Enhanced Security"is in fact
checked. If I right click over this guy and click "Disable corresponding control in target
application,"once again we're going to ensure that our settings are delivered.

If we go to "Updater," let's go ahead and "Do not download or install updates automatically."Once
again, we'll "Disable corresponding control in target application."

While I'm also here, let me go to "PolicyPak for Mozilla Firefox" and let's take a look at this.
Let's go ahead and set our Firefox settings to "www.policypak.com" and also ensure that our
"Security" settings are always set.

Once we've done that, let's go back over to the target machine. Let's run "gpupdate,"or we could
pretend we're logging off or logging back on or getting a new computer or starting a new Terminal
Services or Citrix session or anything else that would refresh Group Policy.

Now again, we happen to be using Group Policy in these examples, but you don't have to. If you would
like to wrap up your PolicyPak directives and deliver them using Novell ZenWorks or SCCM, you can do
that. We just happen to be using Group Policy in these examples.

Let's go ahead and close that, and now let's go ahead and rerun "Acrobat with Spoon (PolicyPak)"
first. If we go to "Edit/Preferences…"here, you're going to see PolicyPak doing its superpowers and
magic.

The first thing you see here is that the "JavaScript" setting is in fact unchecked and grayed out
and a user can't work around it. If we go to "Security (Enhanced)," once again we've delivered that
setting and also grayed it out. If we go to "Updater," we've delivered "Do not download or install
updates automatically"and also grayed it out.

Let's head over to "Firefox with Spoon (PolicyPak)." If we go to "Options," you can see the
"Security" settings are all set and our "www.policypak.com" is delivered as the "Home Page."If we
make this "www.abc.com" or something we shouldn't do and close this out and rerun the application,
as soon as we rerun the application our settings are redelivered and re-guaranteed.

To recap everything you just saw, you can cheerfully use PolicyPak to deliver your actual
application settings and optionally lock them down so users can't work around them. You want to do
this for both your real applications and your Spoon/Novell ZenWorks application virtualization apps.
The point of the story is once you have your applications deployed, it's super important to manage
those settings so that your IT directives are adhered to.

If you want to figure out how we did this, I'm going to pause the videotape here. Then what we'll do
is I'll show you exactly what's required if you are already a Spoon or Novell ZenWorks Application
Virtualizationcustomer and show you exactly what you have to do to make PolicyPak work with your
already virtualized projects and apps. OK? Stay tuned.

If you want to PolicyPak enable your own Spoon applications, it's really easy to do. By way of
example, I've already got all your project files ready to rock. For instance, here I've got a Spoon
project for Firefox, "FF-Project."

I'm going to go ahead and go and "Open Configuration" there, and I'll go over to the "FF-Project" I
have and open that guy up. There we go. We can see it's being loaded into the "Spoon Virtual
Application Studio 2012" or the Novell ZenWorks Application Virtualization Studio, it's going to do
the same exact thing.

What you're going to want to do is, of course, change the "Project type" to "Component,"becauseif we
want to use this on the server we need to have a component and not a raw application.

In either case, what you're going to do is you're going to go to "Settings" and then "Startup
Settings" right here. What you're going to do is you're going to utilize what's called the "Startup
shim DLL." We here at PolicyPak provide that to you. Again, it's the same exact shim. It's called
"PPSpoonShim.dll." We provide this for you, and it works the same for every Spoon application and
every Novell ZenWorks virtualizedapplication. If you want to PolicyPak enable your applications,
this is what you do.

When you're ready to go, you will simply "Build" it. Once that's done, you will then have a file
that you can then bring and import into your Spoon Server or your Novell ZenWorks
Virtualizationserver.That's it. That's how simple it is.

The secret sauce is what happens is that at launch time for the application, PolicyPak will run this
"PPSpoonShim," perform our PolicyPak magic and because our client side extension is on the target
machine, we will do all the PolicyPak goodness. That's it.

If you are ready to get started and you want to test this all out yourself, we are happy to supply
the PPSpoonShim DLL to any customer or prospect who asks.

Thanks so much, and we'll look forward to talking to you soon. Thanks.


