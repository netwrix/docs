---
title: "Understand Enforce Admin Approval for all installers behavior"
description: "Understand Enforce Admin Approval for all installers behavior"
sidebar_position: 50
---
# Understand "Enforce Admin Approval for all installers" behavior

Want to trap and require users to request permission when installing anything? Then use this
setting; plus how to work around the byproduct of this setting.

<iframe width="560" height="315" src="https://www.youtube.com/embed/tE8_hk_X7Jg?si=LL6eSvM2xpS7YdZO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPLPM Admin Approval: "Enforce Admin Approval for all installers" enabled

Hi. This is Jeremy Moskowitz. In this video, we're going to talk about the enforce admin approval
for all installers mode. You've probably been directed to this video by PolicyPak tech support or
you're curious about what that switch does or maybe you read it in the manual. Let me explain it in
excruciating detail.

It starts off when you don't have it set. Here we are in the "Admin Approval Settings." The idea is
that you can see "Installers" is "Not Configured" or it says "Do not enforce Admin Approval for
installers." Either "Not Configured" or "Do not enforce Admin Approval for installers" will have the
same default behavior.

Let me show you what that will look like. By way of example, here's the full package of
"ChromeStandalone." What happens is that we don't detect that it's an installer. If we don't detect
that it's an installer, here's what happens. You get the UAC prompt because for some applications
that call Windows function calls we can't get and create a PolicyPak admin prompt for you at this
point.

What this means is that Google says "Google Chrome can be installed without administrator
privileges. Continue?" "Yes," let's go ahead and do that. Then users start installing stuff, and
that's not good. Let's go ahead and "Cancel Installation."

What we can do instead is turn this on. Now this has a pro and a con. Let's talk about what that is
and how that works. Double click here. Go back to "Installers" and let's say "Enforce Admin Approval
for all installers." In other words, try to detect if something is trying to be an installer.

This gives you an example of something that we can detect is an installer here. There are going to
be a gaggle of them that we can try to detect as installers. This is one of them. Once this is done
and we've changed this method here, some behavior changes happen and we try to detect it. Let's see
what happens now.

If we now try to double click on "ChromeStandalone" as a standard user, look at that. Now the user
can't install Chrome or Firefox or Dropbox or RingCentral or any of these kinds of applications.
They need your approval first because we'll start detecting them as installers. So let's say you
don't want to accept that. Fine. Just don't answer the phone when they ask for a "Request Code."

On the other hand, if you did, you are welcome to at that point accept their "Request Code" here
through admin approval and then give them back a "Response Code" here. Again, I'm doing this as if
they were calling over the phone. This will then work: "roao – tspy." There we go. Chrome will
install at this point because you've given them the admin rights to do so.

That is the pro side of the enforce admin approval for all installers. We're going to trap these
things that try to be installers and force you to get that. In fact, you can see down the lane here
there's another thing that's requiring that. So you're going to have to go through with the user and
you may get several prompts.

Another application that's like this is iTunes. It also will give you several prompts down the lane,
which isn't good or bad. It's just show business. I have to type it in: "roax – o8x8." There we go.
Now it's complete. Now that's good to go.

Now that's the pro side. Again, the pro side is we trap these kinds of installers. Again, another
one would be "iTunesSetup." Again, the same way. We're trapping it now where before it wouldn't be
trapped and you'd get halfway through.

That's the pro side, but there is a con to this and let me show you what that looks like. Let me go
ahead and "Sign out" here. The downside to this function is that when you log on you may see from
time to time applications prompting the user for admin approval. I have two of them on this machine
that will get annoyed when the user logs on every single time.

One of them is going to be Java, and the second one is going to be OneDrive. I'm going to show you.
There you go. Where you see "Windows Live," that's really OneDrive. If I hit "Cancel" here because I
don't have a code yet as a user, here's the other one which is "Java."

What you need is a little map to enable these programs to keep on working anyway. You're going to
have to make a rule for these applications, and I'm going to show you how to do it. The way you're
going to do this is either use the Event Viewer or the PolicyPak logs.

I'm going to use the PolicyPak logs to do it. In "AppData," "Local," "PolicyPak," if we go to
"PolicyPak
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)"
here, what you're looking for is the file "ppUser_operational.log." You're going to see what thing
triggered that prompt.

If we go to the bottom of this log here, we'll work backward. Here is "Java." You have a couple
choices. You could use PolicyPak Application Manager and turn off the prompts for Java altogether.
That's a choice, or you can make a rule. I'll go ahead and make the rule here. What I'm going to say
is any time this "Command Line" is attempted to run, then go ahead and just let it run. That's okay.
Not elevating it. Not doing anything special. I'm just going to go ahead and let it run.

In order to do that, I've got a policy here that I'm going to use on the user side. I could do it on
the computer side too. It really doesn't matter. I'll just do it in the same GPO. That will work
just fine. I'll "Add" a "New Executable Policy" here. I want to "Use combo rule." It has to be a
combo rule even though the only combination I'm using is "Command-line arguments" and "Path."

Actually, it has no "Command-line arguments," so it's just simply a "Path." So that makes sense and,
yes, I will "Apply to child processes." I'm saying when this thing tries to run, go ahead and let
it. Not "Run with elevated privileges." We just want to "Allow and log." Just go ahead and let it
try to run even though it may or may not do anything. We're going to go ahead and "Finish" that
we've got that set.

Let's go ahead and see if that actually worked here. Actually, I'll do both at the same time. The
second one was the "OneDrive" setup. This one is a little bit more complicated. You can see the
"Command Line" is this command ("`C:\WindowsSysWOW64OneDriveSetup.exe`") with this switch
("`/thfirstsetup`"). We're going to create a rule to let that work.

We'll go ahead and go back over here. We're going to "Add" a "New Executable Policy." Again, "Use
combo rule" is what we're after here. I want to make it a "Path" with "Command-line arguments" this
time. What I want to say is this "Path" "`C:\WindowsSysWOW64OneDriveSetup.exe`" with the
"Command-line Arguments" "`/thfirstsetup.`"

We'll do it "Strict equality" which means it has to be just this string. You could also choose some
of these other ones, but I'm going to do this exactly right which is to say guarantee those. With
that in mind, "Allow and log." We should give it a "Name." "Let Onedrive setup run." Okay, there we
go.

Now at this point, let's go ahead and run GP Update ("`gpupdate`"). We'll give this a minute to
finish up here. If we set it up right, we should be good to go because those two guys as you can see
are smacked down. You can see this "Dialog canceled" here. "Process requires administrator
privileges." We're getting blocked on purpose because you said you wanted to trap for anything that
even smells like an installer.

Let's go ahead and "Sign out" and let's go ahead and log on as this guy. Remember, what we're
looking for is nothing special at all, right? Because we've said those applications that are
normally not detected as installers, we are detecting them as installers but we're letting them sail
through anyway. So that's what we should see here. And that's it. There's nothing else to show. It's
just kind of quiet, which is exactly what we expect.

Let's review. The idea is you want to be looking in the "Admin Approval policy" first. What we're
talking about is the "Installers" "Enforce Admin Approval for all installers" which is to try to
detect if something is an installer or not.

On the plus side, it gives you added protection that requires a user to ask you for approval for
things that are going to be installed. The downside is that things may be going on underneath the
hood anyway that you don't even know about, and you might have to enable those things to happen
naturally because now we're going to start trapping for them.

Hope this video helps you out, and looking forward to getting started real soon.

Thanks.


