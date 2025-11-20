---
title: "Endpoint Policy Manager 3.5 Applock Update Behavior Change"
description: "Endpoint Policy Manager 3.5 Applock Update Behavior Change"
sidebar_position: 250
---

# Endpoint Policy Manager 3.5 Applock Update Behavior Change

Prior to Netwrix Endpoint Policy Manager (formerly PolicyPak) 3.5, it was necessaryto forcefully
display previous AppLock (TM) elements. In this video you can see how to quickly and easily restore
the element within the GPO.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k_5-Os9Ai5g?si=2X8ELCYS8XephKX-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak 3.5 Applock Update Behavior Change video transcript

Hi, everyone. This is Jeremy Moskowitz. In this quick video, I'm going to show you a small behavior
change between PolicyPak 3.0 and 3.5.

Here in this example of WinZip, you can see I've disabled this particular entry, and here I've also
hidden a particular entry. Let's go to the actual definition in the Group Policy Object and see what
I'm talking about here. This is inside the Group Policy Object itself. Here you can see that I've
right clicked and selected "Hide corresponding control in target application"for this guy and I've
right clicked over and selected "Disable corresponding control in target application"for this guy.

Prior to PolicyPak 3.5, the behavior would be if you were to uncheck "Hide corresponding control in
target application" for this guy and also to uncheck "Disable corresponding control in target
application" for this guy, unfortunately those things would stick around.

The rationale would be we wanted you to specifically "Force display of this control in target
application" if you wanted to return it, but we've got some feedback that said that's not what
people wanted. So we've removed that behavior and now updated it so that a simple uncheck of the
"Hide corresponding control in target application" or "Disable corresponding control in target
application" will re-reveal, thus removing the lockout mechanism.

Now that I've unselected the checkmark on either of these guys so this one is no longer hidden and
this one is no longer disabled, let's go ahead and click "OK." I don't have to forcefully ensure
that's going to view. I'm just going to go over to my target machine again, run "gpupdate" and get
the latest setting here.

Now that that's done, we'll go ahead and run "WinZip," go to "Options/Configuration…," go over to
"Passwords" and there we go. Very quickly and easily you can now specifically simply in the Group
Policy Object un-unlock the thing you want. Just uncheck the checkbox of the lockout mechanism that
you don't want anymore, and it will immediately take effect on the next Group Policy refresh.

That is a behavior change that you should be aware of. You no longer are required to manually
specify for a particular setting that you would want to, for instance, "Force display of this
control in target application." We have removed that requirement.

I hope that helps you out. We're here for you if you need us.

Thanks so much.


