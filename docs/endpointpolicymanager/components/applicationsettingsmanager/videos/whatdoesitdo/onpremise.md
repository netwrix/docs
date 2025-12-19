---
title: "Endpoint Policy ManagerOn-Premise QuickStart for Endpoint Policy Application Manager"
description: "Endpoint Policy ManagerOn-Premise QuickStart for Endpoint Policy Application Manager"
sidebar_position: 30
---
# Endpoint Policy ManagerOn-Premise QuickStart for Endpoint Policy Application Manager

See how quickly you can get Netwrix Endpoint Policy Manager (formerly PolicyPak) working with your
Active Directory. This video mirrors the Endpoint Policy Manager On-Prem Quickstart Guide for
Endpoint Policy Manager application manager to help you get up and running.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ztf995Ou-fk" title="Endpoint Policy Manager Group Policy Edition: Normal Quickstart (With Active Directory)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak On-Prem QuickStart for PolicyPak Application Manager

Hi. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, we're going to show you how to get PolicyPak On-Prem up and quick started in just a
couple of minutes. Let's make sure you have all the requirements you need. We're going to walk
before we run, so that application is "WinZip." We're going to ask that you download WinZip 14. I
know you probably don't care about WinZip 14, but that's the walk before you run example. Then
you're welcome to try lots of others things: Flash, Firefox, Chrome, Java, Adobe – whatever. Any of
that stuff is fine, but for this quick start please, please, please, we ask that you download and
install old and crusty WinZip 14. We show you how to do that in the manual. I've already done that
here, and it's ready to go.

I also want to point out what you get in your download and where you'll have to install stuff. The
first and most important piece is the "PolicyPak Client Side Extension." The client side extension
is a little moving part that has to be installed on everywhere you want to do PolicyPak magic. All
PolicyPak components magic is contained inside the one client side extension. In this particular
case, I'm on a "Win7Computer-32" machine. We'll work with anything Windows 7 and later. We have an
installer for x86 and also for x64.

This is just a regular old MSI just like you've installed a million times. If you want to get the
PolicyPak client side extension mass deployed out there instead of hand installing it, we have
videos on how to do that. You can use whatever tool you already use to get software installed. If
you already have SCCM, great. If you want to use Group Policy, great. If you want to use a tool like
Specops Deploy or PDQ Deploy, great.

For me right this minute, I'm just hand installing it because that is how I like to do it in the
quick start. That's it. Notice how there's no reboot required? It's just as simple as that.
PolicyPak is ready to use that fast.

Now you might be a customer of PolicyPak or you might be trialing. There are two ways to trial. If
we go to the "Computer" "Properties" here, you'll notice my computer has the "Computer name"
"Win7Computer-32." Now if you have a license, you should have gotten a video on how to install that
license. We're going to assume that you've done that already here.

But if you haven't, you can still get PolicyPak's features all up and running provided you have the
word "computer" in the name. So this is optional. If you don't have a license – a trial license or a
real license – you can just change the "Computer name" to have the word "computer" in the name. Then
it will act as if it's fully licensed. So provided you've done that, you're good to go.

Let's go ahead and go over to our Group Policy management station. This is where you create Group
Policy from. PolicyPak is not "installed" on domain controllers. I just happen to be using a domain
controller as my management station.

This next step I'm about to do, which here in the download is called the "Admin Console MSI for all
On-Prem Products," you're going to install the admin console wherever you have the GPMC. If that's
on your Windows 7 machine, if that's on your Windows 8 machine, if that's on your Windows 10
machine, if that's on your domain controller – wherever you create Group Policy from, that is what
this step does, the "PolicyPak Admin Console" step that I just buzzed right through.

What did that do for us? What that does for us is that any time we "Create a GPO in this domain, and
link it here" – and I'll call this "PolicyPak for WinZip" – as soon as we create a Group Policy
Object here and right click and click "Edit," this is going to give us the "PolicyPak" node. So
without the PolicyPak admin console installed where the GPMC is installed, you won't get the ability
to create and do stuff in a GPO with regards to PolicyPak.

If we were to go to the user side, "PolicyPak/Application Manager" here and go to "New/Application,"
you'll see it says "None" because there are no Paks ready to go out of the box. You have to download
them in the portal and then go ahead and put them in the right place.

Where are the right places? There's what's called the local store. There's a share-based store. And
I'm going to show you what most people do, which is the central store. The idea behind the central
store is the same thing as how it works in Microsoft land, which is on a domain controller in the
"windows/sysvol" folder under "sysvol" again under the domain name under "Policies" where all the
GPOs live, the idea is that here (this is where all the GPOs live) you might have a folder called
"PolicyDefinitions." That's from Microsoft's definitions.

We're going to have our own "PolicyPak" definitions. Inside the "PolicyPak" folder that we just
created, we're going to take our "Preconfigured PolicyPaks," the things we care about and, for
instance just for this warm up here we're going to find "WinZip 14 to 17" because, again, our warm
up application is WinZip 14, even if you don't care about that in real life.

You'll notice that inside the Paks folder, you'll see a DLL. That's really the Pak. That's what
you're going to copy into the central store just like that. There's a "ReadMe" file, and then
there's the source, the XML file that you can use with the PolicyPak Design Studio to open it up and
manipulate it and see what's going on and how we made this Pak.

You can copy in the things that are interesting for you. For instance, if you want to do things like
Mozilla Firefox, you would find "Mozilla Firefox 23 and Later" and find the DLL and copy that in. If
you wanted to do Oracle Java, find the version of Java for you like "Oracle Java version 8u25" and
copy in the DLL and so on. We're just doing WinZip for this because Firefox and Java, while very
powerful, are slightly different and are not included in this warm up.

Here's the "PolicyPak for WinZip" GPO we created earlier that is linked to our "East Sales Users."
Again, for our warm up we want to hit users. On the user side, "User Configuration/PolicyPak" now,
if we go to "Application Manager," which is one of the four components of PolicyPak Suite, if we go
to "New/Application," instead of none you now have the Paks that you put in there.

If I pick the "PolicyPak for WinZip" Pak, you'll see that it tells me that it's in the "Central
Store." Double click it, and now I have the opportunity to manipulate the settings. For instance, I
can click on these four "Password" items here and set the "Minimum password length" to "11."

I can also right click and select "Hide corresponding control in target application" if I want to
hide one of these settings. If I want to disable another setting, I can select "Disable
corresponding control in target application." If I want to disable, for instance, the whole
"Cameras" tab, I can do that as well by selecting "Disable whole tab in target application."

The other two pieces that I want to quickly demonstrate is this idea that you can revert settings
when the Pak no longer applies. You'll see "Minimum password length" will tell you if you right
click over it that it will "Revert this policy setting to 8 when it is no longer applied." I wanted
to talk about that.

I also want to show you how you can "Perform ACL Lockdown" by taking ownership of either the
registry that's involved or the file that's involved for any particular application. So I want to
set that setting as well.

If I click "OK" here, now I've locked and loaded my directive. Just to put a fine point on it, I
have a GPO. It's linked over to my "East Sales Users." On the target machine, I'm logged on as an
East Sales User. I've got the PolicyPak client side extension installed, and I've got the target
application installed already.

Now if I run `GP Update`, that's all I need to do. Notice how I didn't have to reboot the machine.
I'm just going to use Group Policy's natural ability. I could either just log on and get it that way
or run `GP Update `and I'll get the same settings just like that.

Let's take a look at our results. If I take a look at "WinZip" here and go to
"Options/Configuration," go over to "Passwords," you can see that PolicyPak has delivered the right
settings. You can see we've manipulated the UI just like we said we would by removing UI and graying
out UI. Also, we can gray out particular tabs as well.

Remember, PolicyPak has a bunch of superpowers. One of them is that if a user tries to be naughty
and tries to work around your IT configuration changes, at the next time that application is
launched those are put back in.

I also showed you that if you set up PolicyPak ACL Lockdown – so if I go to
"HKEY_CURRENT_USER/Software/Nico Mak Computing/WinZip/Policies" here – you can see PolicyPak has
taken ownership of this portion of the registry so a standard user now cannot work around and be
naughty and try to do things that are outside the scope of your IT directives.

The very last thing I want to show you is reverting settings when they no longer apply. The only
thing we specified to revert back was "Minimum password length" was going to go back from "11" to
"8."

If we were to go back to this Group Policy Object, un-"Link Enable" it or disable it so therefore it
no longer applies to our "East Sales Users," if we then just run `GP Update` and then go ahead and
run "`WinZip`" here, what we're going to see here is it reverted that one setting back because we
said when the policy no longer applies to specify to have that setting revert back. If you wanted
the others to revert back, you could do that as well.

Notice how all the characteristics are now freely available for the user to manipulate, and the UI
configurations that the user had removed are now unrestricted.

That is it. That's the PolicyPak quick start warm up. If you want to try things out like Firefox,
Flash, Java or other applications, we have videos for that and you should definitely watch those.
But please walk before you run. Get WinZip to work exactly like you saw here, and then you can
stretch your wings a little bit and do other things, including don't forget all the other
components.

For instance, if you're looking inside the Group Policy Object Editor, you're going to love
"Administrative Templates Manager." We have a quick start video for the Admin Templates Manager as
well.

With that in mind, I'll sign off. I hope this is very helpful. If you need help, we have the forums
and also support at policypak.com.

Thanks so very much, and welcome to PolicyPak.


