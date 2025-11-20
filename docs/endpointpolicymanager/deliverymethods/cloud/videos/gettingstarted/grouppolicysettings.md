---
title: "Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud"
description: "Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud"
sidebar_position: 40
---

# Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud

Using Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud? Great. Now you'll get 100%
coverage of your real GPOs to all your machines. Here's the quickstart on how to do that: By
creating policies with the in-cloud editors, and also creating a directive inside the console and
uploading. Remember: There's also the method to import a whole GPO and make PP Cloud policies, but
that's another video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_ivWHTrUo8M?si=iL5ayk3KsjRn-Rqr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video I'm going to show you how you can use PolicyPak Cloud to
deliver real Microsoft Group Policy settings through PolicyPak Cloud. We have another video
expressly for how to do similar stuff, which is PolicyPak settings through PolicyPak Cloud. This
video is just and only about Microsoft settings through PolicyPak Cloud.

The way you do this, there's two ways. One is to use our in-cloud editors. You just pick the Group
where your computer is. I'm going to pick the special All group. This is going to affect all
computers.

You simply Create and Link a New Policy. You can see we've got the in-cloud editors. This is from
Microsoft Admin Templates. These are from most of the Group Policy Preferences; not all of them, but
most of them. Then here's Microsoft Security Settings. Like I said, the PolicyPak settings are down
here.

Just to get started, we'll do each category one by one. Here's our Admin Templates Manager. We'll go
ahead and click OK. Let's say we wanted to do Kill Control Panel, something that every admin can do.
We'll just go ahead and go to New Policy here.

Then here are all the ADMX settings. We keep most of the big stuff up to date for you. You don't
even have to think about it. If you want to go to Windows Control Panel Prevent Access to the
Control Panel in PC Settings, just like Microsoft in Group Policy land, you just go ahead and click
Select and say you want to make it Enabled.

We have an extra superpower here, which is that you can use Item Level Targeting and then limit
where this is going to take effect. If you wanted to say only do this for my laptops or my desktops
or for my roaming machines on certain IP ranges or when a computer name has a particular match, you
can do that as well. I'm not going to do that here, but it gives you an extra superpower.

Kill the Control Panel is set to Enabled and click OK. Click OK again. Now this policy, the Kill
Control Panel, I've got two of them here because I've got one from a previous demo, is linked here.
If you go to Show Policy Settings, you can see Prohibit Access to Control Panel is set to Enabled.
Let's head over to our endpoint here.

He's already joined to PolicyPak Cloud. Let's just do ppcloud/sync. When we do this, it's going to
grab the latest policies from PolicyPak Cloud. You can see there's the admin Templates Manager Kill
Control Panel edict. You just count to ten or so, and then we can go try this out.

We go to Control Panel and this operation has been cancelled. Please contact your system admin.
Therefore, we are, in fact, delivering a good old-fashioned Admin Template through PolicyPak Cloud.
When you're done using it, you can click here again and disable the policy link and put a little red
X. That means don't do it anymore.

Then to resync through PolicyPak Cloud Sync, you can see we don't get that policy setting anymore.
If we count to ten, we can just try to see what happens after that. We'll go back to Control Panel
here and Control Panel is now available. Just like when your domain-joined and on-prem, PolicyPak
Cloud will do the exact same mechanism for delivering and undelivering real Group Policy settings.
That is the Admin Template stuff.

Let's go ahead and do another one by clicking on our group. We'll then Create and Link a New Policy
here. Let's go ahead and do a Shortcut item. This is a Group Policy Preferences Shortcut item or
Registry or Local Users and Groups, Scheduled Tasks, and so on. I'm not going to go into all these
things. Shortcut is a really easy one for us to just sort of demonstrate together.

If I want to call this PP Cloud Link, I can go ahead and create a new Shortcut here. Then if I want
to give this a name like www.gpanswers.com, I want to make this a URL on the Desktop. I want to make
this same name. I'll give it the target URL of www.GPanswers.com. Then the icon index path here,
this is a little bit of a guess because we don't show all the graphics here.

I can show you how to do this on-prem. You can carry it over. The idea is that you can just put an
icon index here and get the icon you wanted. Then after that you can click on the Common items to
see if you want to do any special processing.

You can also, of course, add a description. Not to mention, item level targeting. Once again, if you
want to just dictate it to specific computers, IP ranges, and so on, you could do that.

I'll go ahead and click OK. I've got my directive locked and loaded here. I'll go ahead and click OK
here. It's linked over to my special All group. Let's go ahead and see if I run ppcloud/sync, there
it is. I got my Shortcut coming.

I'm just going to wait for it. I'm looking for GP answers to magically pop up on the Desktop here.
There you go, gpanswers.com, double-click on it, and you're off to the races. The point of the story
is that it's very easy to perform Group Policy preferences operations as well.

Before I forget, I want to talk about how to remove items that are from Group Policy preferences. If
we click on the item that we had earlier and click on Edit, if we double-click on this guy, if we
take a look inside Common, let's go ahead and click on Common here, what we need to do is to have
this thing remove the item when it's no longer applied. When we do this, remove the item when it's
no longer applied, then we will know that when you don't want the policy setting anymore to whomp
it.

Let's go back over to our endpoint here. Just to prove a point, I'll take this item and throw it in
the trash. Then I'll run ppcloud/sync. We're going to see it come back. Then we'll know that we're
locked and loaded for when it's time to remove the policy to then automatically have it removed.
There we go.

We're ready to go. Now we'll go back over here. We'll go to our PP Cloud Link, the one that we were
just working with. Let's go ahead and Disable Policy Link. Now that it's disabled, we'll go back to
our endpoint and we can see there's two, PP Cloud Link and PP Shortcut on Desktop.

Let's go ahead and rerun the sync here. Now we're down to one policy; that's this guy. Ten seconds
later this guy should be removed because we taught Group Policy preferences to remove the item when
it's no longer applied. There we go.

Last but not least, let's do something in the security space. Let's go ahead and click on All. We'll
go ahead and Create and Link a New Policy here. Let's do Microsoft Security Setting to rename the
admin account. We'll call this Rename Admin.

There's Restricted Groups and also Other Policies. For instance, if you wanted to go to Account
Policy, Password Policy, Kerberos, or Account Policy, you can change any of those guys. You can set
anything in the Event Log and also the Local Policies, which is where I'm headed right now.

If we go to Security Options, there is Accounts Rename Admin Account here. I'll go ahead and select
it. I will configure it, and then I'll call this thing Admin 123 just so we can see that it's
changed. I'll go ahead and click OK. I'll click OK again.

I'll go back over to my endpoint. I'll run ppcloud/sync. Make sure I got the policy here. I don't
see it yet. Oh, there it is. Yes, there it is, Security Manager Rename Admin. That's it.

Now all we've got to do is count to ten in order to validate this. We're going to cheat a little bit
and run as administrator because there's no real way to see this otherwise. If we then go to
gpedit.msc and we go to Windows Settings, Security Settings, Local Policies, Security Options, there
it is, Rename the Admin Account to Admin 123. We've done the thing.

To put a fine point on it here, if you were to take this same policy and now remove it, Rename
Admin, Disable Policy here, we'll remove it – actually, I'll just go ahead and unlink it and say
goodbye to it entirely. Let's see the behavior. This is an important understanding here. You can see
that it's currently not available to be manipulated. Let's go now to ppcloud/sync and see the
behavior here.

I no longer have that policy anymore. I'll go back to gpedit.msc. Let's go ahead and take a look at
what's changed. Go to Windows, Security Settings, Local Policies, Security Options. You can see
Rename the Admin Account is back the way you would expect. This is not going to be the case for
every security setting.

You should know that not every security setting will know what to fall back to. Just be aware of
that. Some things will be maintained and don't have anything to fall back to. That's the basic gist
here.

I mentioned there were two ways to get Microsoft Group Policy Settings into PolicyPak Cloud. I
showed you the in-cloud editor way. There is the other way, which is how to export settings. You've
probably seen it on other videos. We recommend that you have a little offline test lab where you've
got a domain controller and an editor and a domain-joined machine to do some basic testing on.
That's great. This is how you do that.

You basically create your directive. Let's say you want to create a Group Policy Preferences item or
an Admin Template Setting. Let's call this PP GPO 123. It doesn't really matter what it is. You're
going to use PolicyPak in-MMC editors to create the directives or you can use Microsoft stuff.

Let's say you wanted to create another Shortcut item or complex Registry or something that we don't
have in the cloud editor. It's not a problem. For instance, Devices is not something we have in the
in-cloud editor. You could use New, Device.

If you wanted to Disable all CD-ROMs by clicking on that, this is a valid entry. This is an item
type that we will support in PolicyPak Cloud, but we don't have a cloud editor for. What are you
going to do? All you need to do, and I'm trying to get to my Desktop here, is you can take the item
and drag it to the Desktop and create an XML.

Once you have it as an XML, you can open it in Notepad. You can then copy it, go to PolicyPak Cloud,
and for your All you can Upload and Link a New Policy here and paste it right in. There we go. We
now have a way to edit it in cloud, but it's not a problem if you want to go GPPREFS Kill All Evil
CD ROMS. This will work, and you're off to the races.

This item type you can see will do the thing, and it will work for your cloud machines, just to
prove a point. I have a CD-ROM. Let's see what happens if I want to kill my evil CD-ROMs. If I were
to run ppcloud/sync, you can see there's a Group Policy Preferences item, Kill All Evil CD ROMS. If
all goes well and I count to ten, the evil CD-ROM will die a horrible death. No more evil CD-ROMs
just like that.

The point is that if there's not an in-cloud editor, again, what I would typically do is actually
make sure that that policy worked by running GP Update on this domain-joined machine and then export
it to cloud. I kind of went a little fast there. That's how you can export a Group Policy
Preferences item.

For Admin Template items, we have an Exporter utility. I have a whole video just on that Exporter
utility. You can also use our Admin Template Manager here to right-click Add New Policy here. This
is going to use everything and anything you have in your central store. If you have something really
weird in your central store like Citrix HDMX Media Stream, whatever the heck this thing is, who
cares, some unusual policy, you can set it here in PolicyPak land.

The screen is a little big, but you get the idea. You can set it here in PolicyPak Land and then
once you've got all your configuration you want, you can right-click View as XML in Notepad, take
this unusual configuration that you can only do on-prem, copy it, go to PolicyPak Cloud. We'll go to
our group here, Upload and Link a New XML here, paste, and you're off to the races. We'll call this
PPATM Special On-Prem ADMX. It doesn't really matter. There we go. You've got that setting.

Last but not least would be the security settings. Sometimes it's going to be easier to manipulate
the Group Policy settings directly in the Group Policy Editor. If you go to Policies, Windows
Settings here, you've got some configuration that you want to do here in the security settings that
we don't currently have an editor for, that's totally fine. Many things are supported. Some things
are not. We'll show you how to deal with that.

If I were to just do some event log settings to make this go a little faster here, I'll do this guy
and I'll do this guy here. It doesn't really matter for the sake of what I'm doing here. How do you
export it? Can you right-click and click Export? No, that's not a thing.

What you can do is under PolicyPak GPO Reduction and Transition, you can click on Security Settings
Manager Wizard, which will read this GPO security site contents and tell you you're clear for lift
off to export those particular settings. We'll go ahead and click Next here. We'll put this on the
Desktop PPSEC-EXPORT here. Go ahead and click Next, and we're done.

Once we have those settings dropped to XML, here we go, I'll Edit it in Notepad++. You can see these
are the Event Log settings that we just said we wanted. We'll copy those. We'll go back to PolicyPak
Cloud.

We will then Upload and Link a New XML here. We'll just drop it right in place, and there it is,
PPSEC-EXPORT, and click Add. If we take a look at the actual values in here, you can see those are
the same values that we would have gotten.

Once again, if we don't have an in-cloud editor, if you go to Create and Link and New Policy here,
you're looking for a thing and we don't have an editor, that's why you need to have a fall back plan
to use your PolicyPak fake domain controller and domain-joined machine do a small-scale test, give
it the old thumbs up, and then export the real GPO setting into PolicyPak Cloud. I hope this video
helps you out. Once you get the hang of this and you're ready to do PolicyPak Settings, same idea;
we're going to use the PolicyPak in-cloud editors first. If that doesn't work, you can fall back to
use any of our MMC editors and take those settings and upload those to PolicyPak Cloud, basically
the same gist. I hope this video helps you out. Looking forward to getting you started with
PolicyPak Cloud real soon. Thanks.


