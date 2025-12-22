---
title: "Manage Internet Explorer Security tab"
description: "Manage Internet Explorer Security tab"
sidebar_position: 80
---
# Manage Internet Explorer Security tab

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage IE Security

<iframe width="560" height="315" src="https://www.youtube.com/embed/RGT7E1b0FMI?si=WTVh46-C4sVh34Lb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage IE Security

Hi. This is Jeremy Moskowitz. In this series of videos, we’re showing how to manage Internet
Explorer using PolicyPak Application Manager.

In this little video, we’re going to learn the various facets of the “Security” tab. The two things
that we’re going to cover are, for instance, how to set up a “Custom level” in your “Local Intranet
Zone” or your other zones, how to set custom items here. You can see that the first two items are
set to “Enable.” Maybe we can change those. And the more daunting task of how to set up “Trusted
sites.” We’re going to go over those two things right now using PolicyPak Application Manager.

Here is a Group Policy Object. We’re going to specify “Microsoft Internet Explorer 8 and Later for
Windows 7 and Later,” so basically all versions of Internet Explorer. We’ll head over to the
“Security” tab.

Let’s do it in the same order we just described. We’ll go to “Local intranet,” and we’ll “Set Level”
here. We can set it as a “Custom,” and maybe we want to pick the first two guys to be “Prompt,”
something like that.

The second thing we want to do is maybe “Site to Zone Assignment.” There are two ways to use this.
One way is to perform what’s called “MODE=REPLACE,” which is if there are any Site to Zone
Assignments, we’re going to take what’s in here in PolicyPak and deliver it to the client machine.
This will delete what they’ve got and replace it with what we’ve got here.

You can see we’ve got some examples, and I’ll be using these. You can see that all the zones are
covered: “intranet,” “trusted,” “internet” and “untrusted.” All four are represented here in this
example.

You can also have, for instance, if “http://twitter.com” were in any of the zones, you can have the
special word of “remove” and it will hunt it down and remove it from whatever zone it’s in. I want
to start off with “MODE=REPLACE.”

I’ll go ahead and click “OK” here and dive down, and on each version of Windows I’m going to run
“gpupdate.” This will work for all versions of Internet Explorer that you have. If you have 8, 9, 10
or 11 and so on, this will work for all versions. I’m just running “gpupdate” on each of my machines
here. This is running Windows 7 with Internet Explorer 8.

If I go ahead and take a look at the result here, if I go to “Tools/Internet Options” and go to
“Security,” remember the first thing we did. We clicked on “Local intranet,” and you can see it’s
set to “Custom.” If we look at the “Custom level,” you can see it has been delivered. Those two guys
are now “Prompt” instead of “Enable” where they were.

If we were to go to each of the zones and look at the sites, you’ll see that we delivered in the
sites that we wanted. I’ll go ahead and click “Close” here. You can see that if I look at
“Restricted sites,” which is untrusted, we’ve delivered “\*.facebook.com” into untrusted. “Local
intranet” has got “https://website.fabrikam.com” and so on.

You can also flip this into what’s called Merge Mode. If you look at this, you can go back here and
select “MODE=MERGE.” Merge Mode says no matter what the user already has – and we’ve now established
some things – go ahead and put in “https://www.policypak.com/.intranet.”

We’re now saying no matter what the user already has, just leave it in place and now just merge what
we’re about to deliver. It will not delete first. It will simply merge this set, whatever this set
is, and put it where we want to. In this case, it’s just “intranet.”

Let’s go ahead and take a look and see if that does what it’s supposed to do. We’ll run “gpupdate”
here. Because we had already put some stuff in there, it should stay behind. Now we’re simply saying
to merge what we’ve done in “Local intranet.” Here we go. You can see that it added
“https://www.policypak.com/” but left behind what the user has already established.

That is how that works. If you have any other questions, then please post them to the forums or open
a support ticket https://www.netwrix.com/sign_in.html?rf=tickets.html#/open-a-ticket. Please
continue on and watch more of those videos.

Thanks. Bye-bye.


