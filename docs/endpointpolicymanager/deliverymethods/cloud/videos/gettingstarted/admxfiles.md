---
title: "Endpoint Policy ManagerCloud: Upload and use your own ADMX files to Endpoint Policy Manager Cloud"
description: "Endpoint Policy ManagerCloud: Upload and use your own ADMX files to Endpoint Policy Manager Cloud"
sidebar_position: 70
---
# Endpoint Policy ManagerCloud: Upload and use your own ADMX files to Endpoint Policy Manager Cloud

<iframe width="560" height="315" src="https://www.youtube.com/embed/oUTjeGSdb6o" title="Endpoint Policy Manager Cloud: ADMX thru the cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Using Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud and want to use your own custom
ADMX files? Here's how to do it.

### Endpoint Policy Manager Cloud: ADMX thru the cloud video transcript

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of PolicyPak Software. In
this video, I'm going to show you how you can take your own ADMX files and get them uploaded into
PolicyPak Cloud.

To get started, I've already downloaded a couple of common ADMX files. Now to set the stage, we
don't support ADM files, so you have to have it in ADMX and ADML format. The two that I've
downloaded here for our example are "Foxit" reader and "GoogleChromeEnterprise."

Let me start off by using the "Foxit" one because this one actually is pretty easy. This one is kind
of almost ready to go, and it's actually in the exact format we need. Let's look at this zip. This
zip has a folder, and in this folder it has one "admx" and one "adml." That's basically what we're
looking for.

You can't have multiple languages right now in PolicyPak Cloud. You have to pick one. So this file
is actually ready to rock, so it's a perfect example to get started. Then I'm going to go over a
little more complicated one with "GoogleChromeEnterprise" and show you how that one we're going to
have to manipulate first in advance.

So let's get started. What I'm going to do is just "Copy" this location and keep it handy. Inside
PolicyPak Cloud, we have this thing called the "File Box." File Box is also used for uploading files
that you can deploy through one of our other components. But for the purposes of this, I'm going to
show you how you can "Upload ADMX Files."

Notice before I do this that you can see we've already got "Office (2016, 2019 and 365)" templates,
our built-in "PolicyPak (Latest)" templates in case you need to do some manipulations in PolicyPak
land, and we also always have the latest "Windows Update." So you don't have to do those. Let me say
that again: you never should have to upload Office, the PolicyPak ADMXs, or Windows own built-in
ADMX files. We do that for you.

Okay, so for the ones that we don't do, that's where you're going to click on the "File Box" and
"Upload ADMX Files." Now "ADMX files must be ZIPPED to a .ZIP format," and "You should have ONLY
ADMX and ADML files in the .ZIP file to upload." Let me "Select file." Again, the "FoxitPhantom"
reader is in a perfect format here, so I'll go ahead and just click it.

It has to be zipped. You can see that it's going through and doing its think here. This will take a
second, and it will turn green which will show that it's all validated. Hang tight for a second, and
there we go. We're ready to go. It's green. We can give this a name that makes sense to us. I'll
call this "Foxit Phantom PDF92." That's good. We don't need this other stuff here. The "Comment"
could be "Uploaded by Jeremy." There we go. Then go ahead and click "Save." That's it. So now you
can see these are files that you've uploaded.

Let's see how we would immediately use that. What we'll do is we'll go over to "Computer Groups."
Then you're going to pick a group, like for instance your "Roaming Teacher Laptops," of course. Then
we can "Create and link a new Policy" here. You're going to pick "Administrative Template Manager."
Coming soon, you're going to see other types of editors like Group Policy Preferences editors. They
might be there by the time you watch this video.

We're going to click on "Administrative Template Manager" here. Then we'll call this "Fox IT 123."
It doesn't really matter what the "Policy name" is right now. We'll click on "+ Policy." What we're
going to see are the templates that we've already got preloaded: "Office," "PolicyPak," and all the
"Window" settings are all here. But there's your "Foxit" on right there, and you can make some
choices.

Now these particular ADMX files have stuff on both the user and the computer side. That's what this
little symbol means. If you look at some of the other ADMX items, you'll see that there's stuff on
the user side and also stuff on the computer side. You can see those icon differences. But here in
"Foxit Phantom" land, you can see that all of these actually are good on both the user and the
computer side.

Let me go ahead and select "Enable Safe Reading Mode." Let's say that's something you want to do. Go
ahead and click "Select" here. What scope do you want? Well, if you want it to affect everybody on
the "Machine," you could do that. Or you could affect on the "User" side. Then if you wanted to, you
could trim it based on item-level targeting. I'm going to go ahead and select "User" here.

I'm going to select "Enabled." You could optionally put "Item Level Targeting" on it and say only do
this when that guy is on a laptop, so on a "Portable Computer." There we go. So this particular item
is only going to take effect when the guy is on a laptop, and we're good to go. There we go. I've
saved my "Fox IT" reader setting.

When I click on it here, if I go ahead and "Show Policy Settings," you can see there's the name of
the policy ("Fox IT 123"). I'm going to "Enable Safe Reading Mode." I'm doing it on the "USER" side,
and I've got my item-level targeting ("Filter").

Okay, that's the easy case. Now let me show you a slightly harder one, which would be Chrome. There
are a couple of reasons why I want to use this one. The first one is when you download it, if you
take a look at the "Configuration," they have "adm." We don't use that. They have "admx." That's
what we use. But look, you can see all these languages and all the "ADMX" files. You don't want all
that. You are going to need to pre-stage that.

I'm going to create a "New/Folder" called "Google Chrome Zip Me." Okay, so it's just a folder right
this second. What I want to do is take the "en-US" folder, because that's the U.S. language, and
copy that there because we need all of those guys. And then take all of the "ADMX" files at the
bottom. We need those guys. Go ahead and copy all those guys in.

Now you've pre-staged it. Now we're ready to go short of zipping it. I'm going to just right click
this folder now and select "WinZip/Add to Google Chrome Zip Me." I don't care about any of that
stuff, and I don't care about any of that. There we go. Now I've got my zip file because, remember,
when we go back to PolicyPak Cloud we have to upload the zip file.

So now I'm ready to go back to PolicyPak Cloud. Go to the "File Box" here. Now I'm ready to "Upload
ADMX Files." Now I'm going to go ahead and "Select file." Here it is: "Google Chrome Zip Me."

While it's cooking, I want to talk through a little bit about specifically "Google Chrome ADMX." Now
Chrome "is supported." But in order for you to see results on the endpoint with Chrome, Chrome has a
self-imposed limitation that it will only honor ADMX settings "when the machine is ALSO domain
joined or MDM enrolled."

There is nothing we can do about this. This is not a thing we can fix. So I'm telling you this in
this video so that it's super clear that if you want to attempt to do Google Chrome ADMXs with
PolicyPak Cloud, that's great. We will totally support you but only "when the machine is ALSO domain
joined or MDM enrolled." I know what you want. I know that you want to use Google Chrome ADMX with
non-domain joined machines. That is not a thing that can be handled at this time. So I just want to
point that out here.

So "Comment," "Chrome ADMX uploaded by Jeremy." Okay, so "Google Chrome." Here we go, and now you're
ready to click "Save." Now you're ready to use it like we did earlier. If we were to go back to our
"Computer Groups" and go back to our "Roaming Teacher Laptops," we can "Create and link a new
Policy" here. Pick "Administrative Template Manager."

We're ready to call this "Chrome Settings ADMX." Then we can select "+ Policy" here, and now there's
your "Google Chrome." "Google/Google Chrome," and it depends on the item. Some of them are on both
sides as you can see here. The little chain link shows that they're on both sides. Some items are
only on one side. I'm trying to find one that would account for that. A lot of them are on both
sides. That's why you would see that here. It doesn't really matter.

I'll go ahead and click on here, whatever, "Startup pages/Action on startup." Double click this guy
and click "Select." I'll do this on the "User" side. You can go ahead and select "Enabled." "Action
on startup" you want to "Restore the last session" or whatever the thing is that you want to do.

You can also set the "Item Level Targeting" and say only when the guy is in a particular "Security
Group." With regards to security groups, you're going to need to copy the "SID" from the domain in
order to use item-level targeting there. Or you could say when the guy is on a particular "IP
Address Range" or whatever you wanted to do. I'm not going to do that here.

The point is you can see we've got the ADMX file uploaded, ready to go. Go ahead and click "OK."
When we go back in to take a look at the "Chrome Settings ADMX" here by clicking on the settings
report, "Show Policy Settings," you can see the settings report show up perfectly right there.

That, my friends, is how you upload ADMX and ADML files into the "File Box." Remember, we've already
done the hard ones. You do not have to do "Office." You do not have to do "PolicyPak." You do not
have to do "Windows." If you think that you need to, ask us first because chances are you don't.

All right, that's it. I hope that this feature helps you out and you're looking to get started with
PolicyPak Cloud real soon.

Thanks. Bye-bye.


