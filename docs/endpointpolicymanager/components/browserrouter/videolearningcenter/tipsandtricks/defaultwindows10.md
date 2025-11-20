---
title: "Endpoint Policy Manager Browser Router: Set the Windows 10 Default Browser (once) then drift"
description: "Endpoint Policy Manager Browser Router: Set the Windows 10 Default Browser (once) then drift"
sidebar_position: 10
---
# Endpoint Policy Manager Browser Router: Set the Windows 10 Default Browser (once) then drift

You want to set the users' Default Browser. Great ! But how can you deliver the setting... one
time... then let the user drift from that configuration? Easy !

<iframe width="560" height="315" src="https://www.youtube.com/embed/HJbn69MS6WM" title="Endpoint Policy Manager Browser Router: Set the Windows 10 Default Browser (once) then drift" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, I'm going to show you how you can use Netwrix Endpoint
Policy Manager (formerly PolicyPak) Browser Router to set a default browser policy and let it drift
after that, so apply once and drift. Here's a bunch of Endpoint Policy Manager Browser Router rules
where I've got routes to certain browsers based upon website patterns. We have a couple of special
policies. One is called the New Default Browser policy. When you select the default browser, let's
pretend you wanted it to be Edge and you wanted to apply exactly Once. If you do that, it's going to
be Edge and then the user can change their default and I'll show you what this looks like.

The second thing you may want to consider is this policy called the OS Browser Look & Feel policy.
When you do that, you can actually change what the name of the default browser looks like. You can
say, Managed by your organization and also display the default browser name in parenthesis. Let's go
ahead and click OK here. Now I've got the Default browser set to Edge, applying Once and then we've
got the OS Browser Look & Feel policies. Let's run gpupdate and see what this looks like after we do
that. Give this a second to finish up. Let's see if we hit the goal.

If we open up a WordPad document for instance, then we were to just go to www.abc – actually, I
don't know if I have a route there. Let's do, www.amazon.com. We go to Amazon and I go ahead and
click on it. This is going to open we said to make the default in Edge. Let's see if it actually
happens here. Look at that, Edge magically shows up because that's the default browser we set for
the user to apply one time. Now let's pretend to be the user and change the default browser. What
does that look like? They're going to go here, the operating system and go to default browser.
Choose a default web browser. Again, this is a user doing this. You can see, Managed by your
organization (Microsoft Edge) but let's say they don't like that. They want to change it to Firefox
or Internet Explorer or whatever.

I'm going to change it to Chrome just for the purposes of this particular demo here. I change it to
Chrome. The user is now doing this. We will record what the user feels is a default browser the next
time Group Policy processes. I'm accelerating the hands of time a little bit by running gpupdate but
if you did nothing and they just sat in the background and did their work, about an hour and a half
later, we're going to automatically record this with the next Group Policy update. If you're not
using Group Policy and you're using say Endpoint Policy Manager Cloud or Endpoint Policy Manager
MDM, we should record it in the next hour. Now the user feels that they've changed the default
browser to Chrome.

Let's go ahead and click it. Let's see if that is actually accurate. Let's go ahead and see that.
Sure enough, this is Chrome. Now as the default browser, the user feels that's the default browser
but now let's see what does the operating system see if we were to go to default browser again.
Choose a default browser. What does it look like to the user? Once again, it says, Managed by your
organization, shows (Google Chrome) in there. We see, Managed by your organization (Google Chrome).
If they were to change it to something else like Firefox this time, this is the user who's doing
this themselves. They are making the choice to change it. They get exactly the same behavior. They
get to choose the browser of their choice.

We will record that at gpupdate time. Like I said, we are going to record that at gpupdate time.
Then Endpoint Policy Manager is going to snapback. The operating system is going to see that Browser
Router is in charge but the user is going to feel that they are in charge. This is Endpoint Policy
Manager deploying the default browser one time and then letting the user drift. Now that we set it
up as Firefox, the user rather set it up as Firefox here, what happens when we click Amazon? This
will default the browser to Firefox just like that. If we look again in the operating system as the
default browser here. Choose a default browser. What do we see? We see once again, Endpoint Policy
Manager is in charge. Managed by your organization but the user selected is Firefox.

The last thing I want to talk about is apply always. If we were to go back to the Default browser
here and change this over from Edge Once to Once or when forced. Now we're making this policy change
here to Once or when forced. Let's go back over here. Let's run gpupdate here. What's going to
happen? Give this another second here. Let's take a look at what the operating system sees. If we go
to default browser here, we changed the policy to Edge Once or when forced but notice how it hasn't
updated here. Now let's do a gpupdate/force and see how the operating system reacts now. Give this
one more second to finish up. Now if we were to go back to default browser here, because we used the
/force command, at that point only did it force it back to Edge.

Now if we click on Amazon, what's going to happen? We set up the policy to apply Once and when
forced and in that case, it did exactly what you wanted. One more time, the Default browser. There's
a couple of different choices. The default behavior is Always, so you'll always be selecting the
default browser. That's one choice. The second choice is Once. You could also think of it as Once
and drift, so you can deploy this one time after you've rolled out Windows 10, given them the thing
that they want and then let them make the choice afterward. Then finally, Once or when forced will
snap it back to the thing you say when gpupdate/force is run. Hope this helps you out. Looking
forward to getting started real soon with Endpoint Policy Manager. Thanks.


