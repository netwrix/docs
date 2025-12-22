---
title: "Endpoint Policy Manager + FSLogix: Elevating applications when needed (and available by FSLogix)"
description: "Endpoint Policy Manager + FSLogix: Elevating applications when needed (and available by FSLogix)"
sidebar_position: 70
---

# Endpoint Policy Manager + FSLogix: Elevating applications when needed (and available by FSLogix)

Some applications just don't work properly without admin rights. But DONT give them full
administrator access! Instead, use FSLogix to hide/reveal apps users need, and use Netwrix Endpoint
Policy Manager (formerly PolicyPak) to ELEVATE those applications and situations when needed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/a8bq9EejG6U" title="Endpoint Policy Manager + FSLogix: Elevating applications when needed (and available by FSLogix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak + FSLogix: Elevating applications when needed (and available by FSLogix)

Hi. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, I'm going to show you how you can do a better together story with FSLogix and
PolicyPak when it comes to applications that require elevation.

In this example, I've got a program called "TreeSize Free," and it's available to all of my East
Sales Users. This guy is "eastsalesuser1." If I were to "Switch user" to "EastSalesUser2," he's
already logged on actually, you can see it's there. If I were to go to a West Sales User, go to
"Switch user" to "WestSalesUser1," it's not available for the group West Sales Users. If I were to
go to "Control Panel" and look for TreeSize Free, it's not here. It's not a thing that West Sales
Users can see at all.

That's the first part of the equation.Let me go ahead and "Sign out" here. Then let's go ahead and
log back in as "EastSalesUser1." I just want to set the stage of where we're at. The thing about
"TreeSize Free" is that it only works best when it's running as an administrator. It's an installed
application, but it runs best when you can run it as an administrator.

In fact, you get prompted here. If you were to try to go over here and try to run it here, you get
prompted here. If you were to try to go to "Scan," you can't scan the whole hard drive unless you
"Restart as administrator." It won't let you do that. So this is an application that just will not
work as perfectly as expected unless it's running with admin rights. How can we do that? We can use
PolicyPak to the rescue.

For our "Sales" team we can say it doesn't matter where this application is hidden or not hidden
because of FSLogix. We can say "Elevate TSF with PP." We'll right click, click "Edit" on this GPO
here, and we'll dive down under user side, "PolicyPak/Least Privilege Manager." We'll then right
click, "Add/New Executable Policy." We can do this for all sorts of things like "Windows Installer"
and "Script" and "Java (JAR)," all sorts of things. For this example, I'm going to be doing a "New
Executable Policy."

On this machine, I happen to also have the TreeSize Free application preinstalled to make it easier.
I'm going to say based on where it lives, go ahead and let it elevate because it has to be properly
installed in the right "Path" and then I'm going to go ahead and let it elevate.

I'm going to say "Add file." Again, I have it on this machine already. There it is: "TreeSize Free"
in "`%PROGRAMFILES(X86)%\JAM Software\TreeSize Free\TreeSizeFree.exe`." When I try to go to launch
this application, because I'm getting this Group Policy Object, I want to "Run with elevated
privileges."

Now I want to be super clear. This is going to affect everybody who gets this Group Policy Object,
but later I'm going to filter it and I'll show you how I do that. "Let TSF run elevated." I just
want to show you that it works first, so I'll go ahead and run "Command Prompt," run GP Update
("`gpupdate`"). Ten seconds ago you saw that TreeSize Free didn't work properly without admin
rights. Now let's see what happens after GP Update is finished.

Now that that's done, I'll close this out. I'll just go ahead and double click "TreeSize Free." When
I do this, magic occurs instantly. It realizes that the process is elevated. I can now scan the
whole C drive. I don't get prompted for admin anywhere because I am running with admin rights. Now
that part is great. I'll go ahead and close this out.

Let me go ahead and "Switch user" though. Let me switch this to "EastSalesUser2." Maybe we don't
want East Sales User 2 to also get admin rights when running. I actually have to run GP Update
("`gpupdate`") to prove that this is going to get that, so let me go ahead and do that first. This
is a user and I was switching user, not relogging on. I'll go ahead and wait for this to finish.

The point here is that now East Sales User 2 has the same powers as East Sales User 1 where he can
go to "Scan" and select the entire hard drive. He is also running with admin rights. Maybe we don't
want that. Maybe want just East Sales User 1 to run TreeSize Free with admin rights but not East
Sales User 2.

Let me go ahead and "Sign out" of East Sales User 2. Let me go back to the policy we set up earlier.
What I'm going to do next is configure PolicyPak's "Item Level Targeting" and say only do this thing
when it's a specific "Security Group" or in this case I'm going to just name a specific "User." That
user would be "EastSalesUser1," not "EastSalesUser2" or 3 or 4 or whatever, just one guy. This guy
can run TreeSize Free as admin but nobody else. There we go. In fact, I could rename this to "'Let
TSF run elevated' just for eastsalesuser1.'"

What I'm going to do is prove a point here. Now I'll log on as "EastSalesUser2" again. Group Policy
will refresh. This time, East Sales User 2 will not get this policy and, as such, when "TreeSize
Free" goes to run he will not get admin rights and he'll get prompted.

So what we get here is when we "Switch user" back to "EastSalesUser1," he gets to run "TreeSize
Free" with admin rights no questions asked. But when we "Switch user" back to "EastSalesUser2," he
doesn't have admin rights. And when we "Switch user" back to "westsalesuser1," he doesn't have it at
all because the application is being hidden with FSLogix.

So there you go. That's the better together story using PolicyPak to elevate applications when
needed and use FSLogix to hide them for the guys you don't want to see them.  
Thanks so much.

