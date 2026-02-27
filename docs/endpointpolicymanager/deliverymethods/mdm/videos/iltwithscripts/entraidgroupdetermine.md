---
title: "Use PP MDM to determine the Azure AAD Group Membership for User or Computers"
description: "Use PP MDM to determine the Azure AAD Group Membership for User or Computers"
sidebar_position: 30
---
# Use PP MDM to determine the Azure AAD Group Membership for User or Computers

If you want to know which GROUPS your Users or Computers are in within Azure AD, then use Netwrix
Endpoint Policy Manager (formerly PolicyPak) and these scripts with your MDM service like Intune,
Workspace ONE or MobileIron.. Then after that, you can use Item Level Targeting to check group
membership and trigger actions and policies.

<iframe width="560" height="315" src="https://www.youtube.com/embed/w5HXpv4F4DY" title="Use PP MDM to determine the Azure AAD Group Membership for User or Computers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz. This is part three of how to use Endpoint Policy Manager Scripts to
query Azure AD to then do interesting things like apply Group Policy Preferences or Endpoint Policy
Manager items depending on if a user or a computer is a member of an Azure AD group.

In this video, we're going to assume that you have nothing but MDM. This is the Endpoint Policy
Manager MDM solution, and you don't have Endpoint Policy Manager Group Policy and you don't have
Endpoint Policy Manager Cloud. You've only got Endpoint Policy Manager MDM.

Now if you only have Endpoint Policy Manager MDM, we still recommend that you do what I showed you
in the first video which is to do and in fact use Group Policy as a small scale test before doing
what you're about to do here.

So in our small scale test we set up the "Install AAD module," the "Get Computer Groups" script, and
the user side "Scripts Manager" all in one Group Policy Object. We then applied it to our endpoint
which was Group Policy joined and also Azure AD joined. And, hey, look at that. It worked perfectly.

So once you know that works, now you're ready to do what's next which is you can take the scripts
and you're just going to drag them one at a time into a folder. We'll talk about what we do with
that folder next.

As you do this, I would suggest you also rename them to have the order you're doing it in. So "01"
is going to be the first one. That's the "Install AAD module" script. Let's go to the second one
here, and we'll do "02." That's going to get the computer side stuff ("Get Computer Groups").

The third thing we're going to do is to grab the "Get User Creds" script that we already produced.
It's already wrapped up nicely in Endpoint Policy Manager format. Then the last thing we want to do
is let's just go right for it and take the Group Policy Preferences for Endpoint Policy Manager item
that we wrapped up earlier and shove it in there as well. I'll show you how we're going to do this.

Remember what I showed you before. I like using Group Policy Preferences "Shortcuts" just as a
little tester item because "Shortcuts" are really easy. You can see a "Desktop" shortcut. But
everything we're about to do once you know what Azure AD group somebody is in, with "Item-level
targeting" you can do item-level targeting everywhere and anywhere in Endpoint Policy Manager land.
You just use the "WMI Query" and use the "Query" that I provided in the first video for either the
user side or the computer side.

Once you've taken your Group Policy settings and you've translated them down to XML settings, what
we're going to do then is use the "Endpoint Policy Manager Exporter Tool." Endpoint Policy Manager
Exporter will be on machines that you also have the MMC console.

Here's the exporter utility. We're going to "Create a new MSI installer." We're going to "Add
Existing Files." We're going to add the files from this folder. We'll select all of them, but notice
how the order is what we wanted: "01," "02," "03," and "04." Hey, look, "1," "2," "3," and "4." So
that's good. We can see that the order matches.

The one thing you have to change here is you don't want it to hit "Users & Groups" because we're not
targeting users really. We want to say to do this user side script thing for every user on a
"Computer." See how it says "All Users." So we're changing it that even though this is a user side
script, we're forcing it to go for every user on the "Computer." Same thing here. This Group Policy
"Preferences" item that's really a user side item, we're forcing it to go for every user on the
"Computer." We'll go ahead and click "Next" here and we'll call this "[Endpoint Policy Manager ] MDM
and Azure AD Check." So that's the name of our MSI. And "File name" "Endpoint Policy Manager Azure
AD Group Demo." There it is.

At this point, I'm going to pause the video for two seconds and get this MSI over to my Azure AD
joined machine. Hang tight for two seconds while I do that. Okay, we're back.

This machine is Azure AD joined only. The idea is that he already has the "Endpoint Policy Manager
Client-Side Extension" using your MDM service. He has "Endpoint Policy Manager MDM Licenses"
delivered using your MDM service. You did this before in the Walk Before You Run video and also your
Getting Started with Endpoint Policy Manager MDM. You've already done this.

Now what we're doing is we're going to use our imagination just so I don't have to wait for Azure,
Intune, MobileIron, or AirWatch. I'm just going to run this by hand. But again, in the real world
this just happens naturally when you use you're MDM service. I'm just accelerating the hands of time
here.

Type "set." Do I see it? If I don't see it right away, that might mean I have to log off and log on.
Let's go ahead and do that. That was one of the caveats. We'll go ahead and "Sign out" here and log
back on as my Azure AD only guy here. This will trigger the script once again. We'll give this a
second to settle in, and then let's take a look here.

We'll type "set" in the Command Prompt, and there we go. We can see "AzureADUserGroups" is here, but
where's the computer side stuff? That's going to require a reboot, so I'm going to pause once again.
Actually, I don't want to pause yet because the Group Policy Preferences item is coming down also.
There we go, as I spoke. That comes down also and evaluates to see if the group membership that you
set through the WMI query is in fact there. You can see it certainly did ("EastSalesUsers"). It
actually took effect right there.

Let me go ahead and restart the machine and I'll come back and when I log back on after rebooting
we'll see the computer side. Hang tight. Okay, I've now rebooted. I'm logging on again as my Azure
only guy. By this point, the computer has already run the script, looked to Azure to see what's the
story and performed the work. Let's go ahead and log on and take a look at it and see what happens.

Okay, here we go. If I were to take a look and go to a Command Prompt and type "set" in the Command
Prompt here, what do we see? There it is: "AzureADComputerGroups." You can see this computer is part
of the group called "Computers with ‘Computer' in the Name."

The point of the story is it's just that easy. All three of these videos started with doing the
Group Policy version first, doing your small-scale test and making sure it works. Once you know it
works, then you're off to the races. You just export and get it into an MSI. Then you can get it
over to your MDM service to download and you're off to the races. It may take a log off and a log on
for the user side to kick in, and it definitely takes a reboot for the computer side to kick in. And
at that point, you're good to go.

I hope this helps you out and you're looking to get started with Endpoint Policy Manager MDM real
soon.

Thanks. Bye-bye.


