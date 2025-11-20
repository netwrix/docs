---
title: "Determine the Azure AAD Group Membership for User or Computers"
description: "Determine the Azure AAD Group Membership for User or Computers"
sidebar_position: 10
---
# Determine the Azure AAD Group Membership for User or Computers

If you want to know which GROUPS your Users or Computers are in within Azure AD, then use Netwrix
Endpoint Policy Manager (formerly PolicyPak) and these scripts. Then after that, you can use Item
Level Targeting to check group membership and trigger actions and policies.

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how to use a couple of scripts in
order to figure out which Azure AD groups the user or computer is a member of.  
Now I'm going to stress a couple of things right at the front of this video. These scripts are
completely unsupported. If you have trouble with them, I'm sorry. If they work, that's great. That's
the first thing. The second thing is there are a bunch of little moving parts here, and I'll go over
those.

There's also a second video for using this in Endpoint Policy Manager Cloud, but don't do that one
unless you've actually watched this video first because a lot of the pregame setup is in here.  
This is what you'll see in the download. You'll see that there are four things. One is a thing that
will encrypt a password ("EncryptPassword2"). Second is a think that will get the user side
("AzureADInformationUser"). Third is a thing that will get the computer side
("AzureADInformationComputer"). And fourth is a thing that is sort of a prerequired item
("InstallAzureADModule").  
Before all this happens, the very first thing you need to do is to go to Azure AD and to create what
is really called a read-only user. You just go ahead and click on "New user" in Azure. Then you give
them a "Name," give them a password. Now you have to log on as that guy one time to then change the
password to something complicated. You can't just set it up and use the default password that Azure
gives you. You actually have to log on one time first.

Now I've already done all this. I called my guy "Lookup." So my guy is called
"lookup@fabrikam1000.com." He doesn't have Office. He doesn't have anything else. He's just a guy
called "Lookup," and this is required.

Now if you take a look at the "AAD Scripts," you'll see that inside the scripts we give you if we
take a look at the user side there is the "usernameinformation" and what's called the
"encryptedcredentials." The user information, you're going to have to jam that in and make it
"lookup@fabrikam1000.com" or whatever yours is.

Then how do you get the encrypted password? That is what "EncryptPassword2" is all about. Let me go
ahead and show you what this looks like in PowerShell land. Let me go over here then "powershell."
Okay, so the idea is that once this guy has a password, you're going to know what that password is.
Let's take a look at our scripts.

The one we want is the "EncryptPassword2." Let me just do a quick "get-help" on this guy to remember
how it works. So all you need to do is to do the "EncryptedPassword2" script, and then give it
"-passwordinformation" and then the password whatever that is ("p@ssw0rd").

When you do this, an encrypted string pops out. If you want to write it to a file, you can just pipe
it to "out-file passwordenc1.txt" or something like that. Okay, so now it's hanging out in a
file-based form. Here we go. Here's the password encrypted. We'll take this guy, and we're going to
shove it right between the little dashes here and you'll save it out. You'll do exactly the same
thing on the computer side. I've already done this to make this go a little faster.

Now remember, these scripts are unsupported and they are technically not secure. Why are they not
secure? Well, let's take a look at the first one. Because you can see, here's the login information
for this guy, here's the password, and then here's the key to decrypt it. If you knew what you were
doing, if you were a smart and savvy person as a user, you could in fact find the script hanging out
in Endpoint Policy Manager and Group Policy land, read the key, do some magic, and pull back out the
Lookup password.  
Again, not a lot that can go wrong here, but I don't want you to think that this has actually got a
firewall level of security on it. Again, this script is use at your own risk, and you should know by
using it that it is not technically secure.

Okay, so you've jammed in your user "UPN" name, lookup@yourwhatever.com, and you're encrypted
password in both of those guys. The next thing you're going to do is you're going to use PP SCRIPTS.
Now I've already got this set up to make this go a little faster. I have a GPO called "AAD Group
Enumerate Script via PP."

Now, again, if you only care about Endpoint Policy Manager Cloud, you can maybe pause the video at
this point and jump to the next video, but you probably want to watch it all the way through.  
In this first example I'm going to use a machine that is both domain joined and Azure joined which
is called "DJ++." So he has a foot in both camps. Let's take a look at what I'm doing on the
computer side first. If I go to computer side, "Endpoint Policy Manager," "Scripts Manager," what
you do here is "Add" a "New Policy" here. Even though it's already done, I'm just going to walk
through.  
You're going to "Appy this policy to computer." Then you're going to  paste in "PowerShell script."
The one that you want to paste in first in order is the "InstallAzureADModule" script. You're going
to take this guy, jam it in here and paste it in, Next/Next/Next, and you're done.

I've already done that. It's hanging out right here: "Install AAD module." I've already done that
stuff. It's hanging out right here. You're going to do that exact same thing right here with the
computer script, so you're going to get the computer side as well. You're going to do the exact same
thing. You're just going to jam that right in there. You're going to make that an "Apply action."
You can see there are my credentials and so on. There's no "Revert action" required. Again, you're
just going to "Apply this policy to computer."

In this same GPO, provided this Group Policy Object will hit both the computer and the user—this is
linked to my Sales team so it has that ability—but if you need to do another Group Policy Object,
that's fine. What we're going to do is on the user side in "Endpoint Policy Manager" "Scripts
Manager" this is where you're going to jam in the user side script.  
Remember, I've already done this and it's ready to rock. I've already got this ready to go here.
You're going to make "Run script as user" goes here, not "Run interactively." You're just going to
copy and paste the whole script in just like that.

When this is all over, here is what happens. If I go over to this machine here, I've already done
it. I've already logged on. Let me show you the result of what has happened here. Now first things
first is that it may not happen the very first time you reboot the computer or the first time the
guy logs on. Sometimes this takes two shots to work.  
When this is over, if you type "set" at a "Command Prompt," what you're looking at is the
environment variables. You can see here "AzureADComputerGroups" are this group and that group. And
"AzureADUserGroups" are this group, that group, and this other group. So you can see here that you
can query the environment variable to figure out if somebody is a member of a group or not now. You
couldn't do that before, and now you can.

The last part of this is, how do you use this in item-level targeting? How do you take a Group
Policy Preferences or an Admin Templates item or a Endpoint Policy Manager item, how do you take
these things and make sure it only hits when somebody is in a particular group? I'm going to show
you that right now.

Actually, let me go back to the material that you'll be downloading. Maybe what I'll also do here is
I will create a new file. So by the time you see this video, there will be a file here called "WMI
FILTER EXAMPLE." I'll go ahead and paste this in. The idea here is that you're going to use this in
a minute inside of Group Policy Preferences land. I'll actually create this one and create that one:
"AzureADUserGroups" and "AzureADComputerGroups." I'll explain how this works in two seconds.

So the idea here is that you're going to then be reading that string and you're going to say if the
guy as a "User" is in a group called "Support," that means we have a hit. And if the "Computer" is
in a group called "Laptops," then you've got a hit. So this is on the "Computer side" and this is on
the "User side."

Now let me show you how you would use this thing. I'm going to go ahead and "Copy" this string. I
already have a Group Policy Preferences item that ready to go here. I want to create a Group Policy
Preferences shortcut item when I know the guy is on the Sales team. Let's figure out how to do that.

If I go to "Preferences" here and I go to "Windows Settings" "Shortcuts" here, I always like to use
shortcuts because it's very easy to do. If I go to "Shortcuts" here, all I'm doing is creating a URL
called "www.helloworld.com" on the "Desktop" when I know the guy is on the Sales team.

I've got "Item-level targeting," and you can click on "Targeting" here. There's a special query.
I'll go ahead and delete that just to get started. There's a special query. There's no way to look
at the environment variable. You can see there is a thing called "Environment Variable" here, but
there's no way to pull out information from that environment variable. It's sort of a bummer. I'd
love to use that, but I can't.

So instead, you're going to use this other guy called "WMI Query." The thing is you're going to
actually nuke this "Namespace item." I don't know why. You just do. Nuke that first. Then take what
I have in the text file and jam that into  "Query." Let's look at it again: "select \* from
win32_environment where Name='AzureADUserGroups'"—that's the name of the environment variable that's
now on the machine—has the thing I'm looking for.

Let's go back to the machine. Let's see. How about "EastSalesUsers"? Let's see if he's a member of
"EastSalesUsers." Okay, great. So we'll go back over here and type that in. So not "LIKE %Support%"
but let's look for "EastSalesUsers." Okay, so this shortcut for a user is now only going to fire off
when the guy is a member of the "EastSalesUsers" user group in Azure AD.

Now that we've done that, let's go ahead and run GP Update ("gpupdate"). Remember, this computer is
domain joined and Azure AD joined. Because of that, it's getting the Group Policy Object but reading
the evaluation that has occurred from Azure AD. If all goes well, this shortcut wouldn't normally be
there but because we're querying for that value, there's our "www.helloworld.com" shortcut just like
what we expect.

You can also see this happen in reverse as well, which is to say if you change this over and the
condition no longer applies, like maybe that user isn't in Azure AD anymore. For instance, if I take
a look at "Azure Active Directory" and take a look at "Groups" to take a look at my group
membership, I can look at "EastSalesUsers" real quick.

I can see that there are "9 Users" in there. I can take a look at the "Members" and there's
"EastSalesUser1." That guy is a member. So the point of the story is maybe this guy is not a member
anymore. This will evaluate to false, and then that shortcut can go away if that's something you
wanted to do.

Now just to put a fine point on it, this whole idea of the "Item-level targeting" can be used not
just in "Preferences," of course, but anywhere in Endpoint Policy Manager land. So if you wanted to
say kill the Control Panel when the guy has whatever, you can just use "Administrative Templates
Manager" or you could do something nifty with "Browser Router" or "Least Privilege Manager." It's
all the same thing.

You just "Add" a "New Policy" here, all the same stuff. Maybe I want to do something like "Prohibit
access to Control Panel and PC settings." That's the guy right there. Then I want to only do this
when an Azure AD group thing is true. How would I do that? "New Item," "WMI Query," nuke the
"Namespace," paste the example I gave you into "Query."

And if you want to say he's in "EastSalesUsers." Again, you're going to check that first and make
sure he's really a member of that thing here in "AzureADUserGroups." "EastSalesUsers," yes, sure
enough. So if you wanted to do this thing, "Prohibit access to Control Panel and PC Settings" only
when that Azure AD group has got the thing, you can see we light up as orange and you're ready to
go. That's all there is to it.

Okay, so that ends this first video. If you want to do this in Endpoint Policy Manager Cloud, you
can move on to the next video and you're off to the races. Again, this is all unsupported, and we
know that it inherently is not a secure mechanism. But it does get you to the goal to enumerate what
groups a user or a computer has in Azure Active Directory and then take an action upon them if
that's what you want to do.

Hope this helps you out. Thank you very much and talk to you soon.


