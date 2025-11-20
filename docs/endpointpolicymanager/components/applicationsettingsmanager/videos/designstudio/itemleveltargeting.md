---
title: "Predefined ILTs (Internal Filters)"
description: "Predefined ILTs (Internal Filters)"
sidebar_position: 40
---
# Predefined ILTs (Internal Filters)

Using build 545 and later, you can use "Internal Filters" to specify when your Pak should work on
specific machines. For instance, you might only want an applications settings to hit the machine
\*WHEN\* the application is actually on the machine. This video is for Pak designers only. For
normal "Item Level Targeting"
([https://www.policypak.com/pp-blog/item-level-targeting](https://www.policypak.com/pp-blog/item-level-targeting))filters,
see our Video on that function (for day to day Endpoint Policy Manager administration.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/xJH4MJxMhOo" title="Endpoint Policy Manager: Using Item Level Targeting with Applications Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Predefined ILTs (Internal Filters) Video Transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video I'm going to show you a feature that we have for Pak creator folks called internal filters.

Basically, the way it works is that you can, if you want to, tie your particular package and ensure
that it will only run under certain conditions. Again, the nickname is called internal filters. If
you look under "Project Properties," you'll see they're also called "Predefined Item-Level
Targeting" filters.

By way of example, let's say I was noodling around with this mouse properties Pak that I was
creating, and I really only wanted to make sure that these settings only ever worked on Windows 7.
If I wanted to do that, I can prebake in item level targeting filters as filters that, like I said,
are predefined inside the Pak.

All I have to do inside the design studio is "Enable predefined item-Level Targeting" and then "View
and Edit ILT Conditions." The "Targeting Editor" shows up, and you can use any conditions you want.
The popular ones might be you may want to say that this Pak only works when the "Operating System"
is whichever version you want. That is a perfectly normal thing to want to do here.

You may also want to do things like only make sure that this Pak will operate when a particular
"Registry Match" is true to see if a particular key, like in this particular case it's got a
fictitious example, "HKEY_CURRENT_USER/Control Panel/Mouse/Beep" even exists. If it doesn't exist,
then there's no mouse installed. Does that make sense? I know I'm using mouse as a fictitious
example. You could use this for any application.

You may also want to do it based on "MSI Query" or "File Match." The idea is that you can see, is a
particular product installed? If you were creating a Pak for Dog Food Maker 12, you could ensure
that the Pak will only ever, ever deliver settings with these preconfigured item-level targets when
the product code of whatever exists.

I could pick some application here just for fun, like "Microsoft Silverlight." This Pak would only
apply when this MSI product code existed. You could also use, by way of example like I said, "File
Match." You can see, in this case, if "the file exists" – you can just dictate a particular file
here – and if XYZ file exists, then this Pak will go.

Let's go ahead and see what happens in the log files. Let's go ahead and make sure I've left this
set as when "the operating system is Windows 7." This will only take effect when the operating
system is Windows 7.

Also, internal filters will only be honored when the client side extension is version 545 and later.
If you have something like 461 or 537, all of these internal filters will not be honored and will
evaluate to true. In other words, it won't know if you are running on Windows 7 or the file is
matched or anything like that. Long story short, you must have version 545 on the client side
extension or later for this to work.

Let's go ahead and select "Compilation" and "Save pXML and Compile" this. Then we will do some
testing, and then we'll look at the logs. Let's see what's going on and see what actually happens in
the log files. We're all compiled and ready to go.

Let's go ahead and go to our "East Sales Users" here. We'll do a "PP Mouse with Internal Filters
Test." If we go to user side, "PolicyPak/Applications/New/Application" and there's "PolicyPak for
Mouse Properties." Now again, if we look here where it says "Targeting," it says "No" because
they're internal filters. If we wanted to put regular/"normal" filters on top of these, we can
certainly do that.

Let's go ahead and click on this guy, go to "Properties." Again, there is no item-level targeting
set for the administrator. We set it internally for the Pak. Let's go ahead and set this to "768" or
something and also lock it down by selecting "Disable corresponding control in target application."

Now that we've done that, we'll go over to our client machine. I'm logged on as "eastsalesuser1."
Let's look at what build number we have. If we look at "ppupdate" just to look at the build, "545"
so we should be OK.

We'll run "gpupdate" to get the latest, greatest Group Policy settings that this guy should get now
for eastsalesuser1. There we go. Now let's go ahead and run "Mouse" on this machine, and there we
go. We can see that it actually did its thing. If we go to "regedit," let's take a look at
"HKEY_CURRENT_USER/Control Panel/Mouse." Yep, there it is, "768."

Now the important part is, let's look at the logs. If we go to "cd AppData" "cd Local" "cd
PolicyPak" "dir" and we look at the "ppUser.log," let's go to the end. We can see inside of our logs
here. What we're looking for is "Evaluating."

See, this is the "GPO: "PP Mouse with Internal Filters Test," "Evaluating entry Mouse Properties"
and then we are "Evaluating Predefined Item-Level Targeting." It evaluated to "true" because we have
"WIN7" on our machine, so the "Pak Entry will be APPLIED." It does predefined targets first, and
then it does regular item-level targeting second.

Alright, so let's review. The whole point of internal filters/predefined item-level targets is that
if you're working on a particular application in the design studio and you want to make sure that
its functions only ever occur if certain conditions are true – like the application actually exists
on the machine or if a registry punch exists or any number of things – you can set, if you want to,
"Predefined Item-Level Targeting" filters inside your Paks.

Starting soon, some of our preconfigured Paks, the ones we provide from PolicyPak central here, will
have conditions in them already. By way of example – we haven't done it yet – but let me show you a
quick example of what I'm talking about.

If we go to the Paks like "Java," there are two. There's one for "XP" and one for "Windows 7." We
are going to set these up real soon where, say, the "XP" version will only work with an internal
filter where the "Operating System" is "Windows XP." That makes sense. We don't ever want these
settings to hit a machine where it's not XP, and now we can pre-dictate that.

If you have any questions about item-level targeting filters, or predefined item-level targeting
filters, I'm looking forward to seeing your question in the PolicyPak forums.

Thanks so much.


