---
title: "Block PowerShell in General, Open up for specific items"
description: "Block PowerShell in General, Open up for specific items"
sidebar_position: 80
---
# Block PowerShell in General, Open up for specific items

Powershell on desktops? Terrible idea. Except when you need it. Check out this video to see how to
kill PowerShell (generally) but open it up to allow specific. PS1 scripts to run as you need them
to. With Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager, it's easy !

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xzgr1gqekGU?si=ELymDEYKrta-auwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can put the full
smackdown on PowerShell and also open up PowerShell for very specific scenarios.

I've got no policy set up here with PolicyPak at this time. Just to prove a point, if I go to
"Command Prompt," that works. If I type "powershell," that works. If I try to go to "Windows
PowerShell" here, that works. So you can see PowerShell is enabled.

The first thing I want to do is create a policy. In fact, I'm going to create two policies that are
going to put the smackdown on PowerShell. There are a couple ways you can do it. I actually think
both are good. I actually have these pre-staged just to make this demo go a little bit faster.

The first one is denying PowerShell by name. So whenever you try to run anything with "`powersh`" in
the "Name," it's automatically going to "Deny execution." So if it has "powersh" in the name, that
is going to be smacked down. That's thing number one. I have to reenable that guy. Let's go ahead
and go back there and the "State" is going to be back to "Enabled." That's way number one.

A second and additionally powerful way to do it is to say if there's anything "recursive" in the
"WindowsPowerShell" folder, just don't let that run. Just "Deny execution" on that. So that's two
different ways. That way if somebody were to try to copy PowerShell or some other kind of way, long
story short, you have a couple of different angles to turn that off right there. So that's killing
PowerShell there.

Let's just start and just see that that actually worked as expected. If I now run GP Update
("`gpupdate`"), this could happen naturally at logon. You could wait for Group Policy to process in
the background. We just run alongside the Group Policy engine just like everything else runs
alongside the Group Policy engine. Give this a second to finish up.

Now that that's done, let's go ahead and type "powershell" here. What happens? You can see it says,
"This program is blocked by group policy." This is a system message. You might think we have
something to do with AppLocker. We don't. This is just a standard system message.

If I were to try to now go to "Windows PowerShell" here, "This app has been blocked by your system
administrator." If I were to try to run a PowerShell script that could have been malware, right
click over it and select "Run with PowerShell," "This app has been blocked by your system
administrator." That's also blocked just the way we want it to be.

But you might have a scenario where you want a certain specific file or files to work. Here's an
example: "`\\dc2016\share\ITScripts`." With ITScripts I have a good PowerShell that I want to run
but only when I've staged it here in "dc2016 > share." If I right click here and go to "Run with
PowerShell," "This app has been blocked by your system administrator." It's still not going to work.
It has been blocked by my system admin.

So what are we're going to do? We're just going to open that up. I already have a rule staged just
to make this demo go a little faster. We're saying whenever anybody tries to run
"`\\dcshare2016\SHARE\ITScripts\PS – From IT`," then go ahead and "Allow and log." It doesn't have
to be elevated. It just has to run. I already have this "Disabled." Let me go ahead and check
"Enabled" and turn that back on.

That's all there is to it. You saw ten seconds ago that script wouldn't run. Let me go ahead and run
GP Update ("`gpupdate`"). Then we'll finish up and we'll see that script will be bypassed even
though generally PowerShell is shot. Let's go ahead and give this a second to finish up here. Now
let's go ahead and right click over "PS – From IT" and select "Run with PowerShell." There we go.
"Hello From IT Department."

But other items, like I said, if we were to try to go back to "Scripts," here's a random PowerShell
"Malware" that I have. It's not really malware. If I were to "Run with PowerShell," "This app has
been blocked by your system administrator."

Hopefully, this satisfies the case of taking PowerShell out of business but reenabling PowerShell
for very specific scripts that you might want to stage yourself or otherwise have available for
users.

If you're looking to get started with PolicyPak, we want to help you to help you get started real
soon. So give us a buzz or fill out a form, and we'll be in touch and we'll get you started.

Thank you very much, and talk to you soon.


