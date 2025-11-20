---
title: "Endpoint Policy ManagerCloud: Use in-cloud ADMX settings maintained by Endpoint Policy Manager for Windows, Office, Chrome and more"
description: "Endpoint Policy ManagerCloud: Use in-cloud ADMX settings maintained by Endpoint Policy Manager for Windows, Office, Chrome and more"
sidebar_position: 60
---
# Endpoint Policy ManagerCloud: Use in-cloud ADMX settings maintained by Endpoint Policy Manager for Windows, Office, Chrome and more

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q45U2NFY20I" title="Endpoint Policy Manager Cloud: Use Endpoint Policy Manager Cloud to make ANY ADMX policy setting !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Amazing new breakthrough with Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud. Just CLICK
your way to creating any ADMX setting for Windows or Office. Takes about 10 seconds to make your
group policy, then get it deployed to your domain joined or non-domain joined machines. Must see it
to believe it !

### PolicyPak Cloud: Use PolicyPak Cloud to make ANY ADMX policy setting !

Hi. This is Jeremy Moskowitz, founder of PolicyPak. In this video, I'm going to show you how you can
create policies on the fly inside PolicyPak Cloud without having to export them first. If you've
been a longtime PolicyPak Cloud person, you know the deal. You have to create your policies in a
real live world first before you export it, and then it becomes policy settings in PolicyPak Cloud
land. Wouldn't it be more amazing if you could just do it right inside the editor inside PolicyPak
Cloud? We're bringing that to you right now.

The way you do this is you head over to, say, "Computer Groups" and what we'll do here in "Computer
Groups" is you're going to find one of the locations, one of the groups that you want to create your
policy on. For instance, you could do it on the "All" group which would affect absolutely everybody.
Or you could do it on a "Roaming Computers" group or whatever you want. I'm going to do it on the
"All" group just so you can see the work occur.

Then you're going to "Create and link a new Policy." Okay? The action is "Create and link a new
Policy." Right now, we support "Administrative Template Manager," which is all the Microsoft admin
templates. If you're watching this video in the not too distant future, you're going to start seeing
the other types of products. So the PolicyPak products, all of our components, Microsoft security
settings, Group Policy Preferences and so on. They're all going to be here. Right now in this video,
you can see "Administrative Template Manager."

Go ahead and click "OK" here. Here is where you get to create a "Collection" or a "Policy." I'm
going to go simple and call it a "Policy." I'm going to call this "Kill Control Panel for all
Humans." That's going to be the "Policy name."

When I click add a new "Policy," this should look pretty familiar. It looks just like the GPMC.
You'll go ahead and dive down under "Windows/Control Panel" and you can pick "Prohibit access to
Control Panel and PC settings."

If you want to also, you can search for "Keywords" "Within" the "Policy Settings Title" or the "Help
Text." For instance, if you wanted to find just the "control panel" settings, you can click the
little find button and it will show you just the items that deal with the words "control panel" in
the names. We make it super easy for you.

So go ahead and click on that guy right there and let me go ahead and click "Select." Now you can
set it from "Not Configured" to "Enabled." Now you can also, if you want to, put "Item Level
Targeting" right on this policy. So if you wanted to say do this thing when the "Operating System"
is "Windows 10" only, there you go. So you can put it right in there, and you've now done item-level
targeting right on that item in PolicyPak Cloud.

This is the simplest kind of thing, so I'm going to do that right here and just show you how that
works. There's the "Kill Control Panel for all Humans." If you want to see the report, you can click
on "Show Policy Settings" and you can see the report right inside PolicyPak Cloud. So you can see
there are the "Filters." There's the item and so the "Filters" on that particular item.

Let's go over to our endpoint. I'm going to right click and go to "Personalize." This is the Control
Panel just to prove that the Control Panel is still available to me. I am joined to PolicyPak Cloud.
I'm going to just synchronize with PolicyPak Cloud by going to "ppcloud /sync." We're going to get
the latest policy here. Here we go, "Kill Control Panel for all Humans." We've now got the policy
here. You can see that it's ready to go.

Provided the item-level targeting is true now, which is to say I'm on a Windows 10 machine which I
am, this thing will kick in and it should work. So let's right click and go to "Personalize" and
what do we get? No Control Panel. We've created the policy inside PolicyPak Cloud just like that.
And that's it. That's all there is to it.

You can also if you want to, you can "Create and link a new Policy" that have collections in there.
So if you want to create another one, and you can see here is the list of products. Right now it's
only "Administrative Template Manager." You can create a "Collection," and inside the collections
can have policies.

So the idea is that you can have a collection that will evaluate when you're on this IP range,
another one that evaluates on this IP range, another one that evaluates when you're using Windows 7,
Windows 10. So you can put things together in such a way that it will do if-then-else. We'll
probably have some more videos on that real soon.

With that in mind, have fun using this amazing new functionality of being able to "Create and link a
new Policy," and then you'll be able to see new policy types pop in, in the near future.

Thank you very much. Talk to you soon.


