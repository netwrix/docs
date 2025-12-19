---
title: "Automatic Patching and Updates"
description: "Automatic Patching and Updates"
sidebar_position: 40
---
# Automatic Patching and Updates

Instead of specifying time and time again which computers should update, instead use the auto-update
feature. This video shows how to use the "Always" property to always check for updates. Here's how !

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Z0vb2XXz8A" title="Endpoint Policy Manager Remote Work Delivery Manager: Automatic Patching and Updates" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::note
This technique works with SMB and web-based shares.
:::


Hi, this is Jeremy Moskowitz, and in a previous video, you saw me use Netwrix Endpoint Policy
Manager (formerly PolicyPak) Remote Work Delivery Manager to deploy new software to endpoints. I did
it through standard shares and web shares. What I didn't show you is how to keep that software
automatically upgraded, so in this example, I'm going to take 7-Zip.msi, and I'm going to deploy it
to a machine that's never seen it before, and then I'm going to upgrade it from version 16 to 19.

You've seen this part already. I have it already staged on Amazon. Here's my 7z.msi hanging out on
Amazon S3, and it could be some other web services. It's a file. I'm going to take the defaults.
I'll copy it to c:\temp\. I'll take the defaults here, and I want to set it to Always. Always means
it's going to always check to see if there's a new version, and that's going to come up really handy
really soon.

The process we want to run after it copies it down is going to be msi exec – here we go – /i
%DestinationDir%\7z.msi /qn, so that's going to be quiet, and again, this was in the last video.
Then when the policy no longer applies, we want to revert, and that's going to be this guy msiexec
/x, so we're going to say goodbye to it with msiexec /x quietly when the policy no longer applies. I
already did this in the last video, so this is treading the same ground. Deploy and keep WinZip –
not WinZip – 7zip updated.

Okay, now that we've got that, we'll go over to our target machine. We'll see that we've got no
7-Zip here. We'll then run gpupdate. Let's go ahead and get this going first. Let's see that we in
fact got 7-Zip version 16 installed. Again, I'm doing this with Amazon S3. You could do it with
standard SMB shares as well. I'll go ahead and wait for this to finish, and now what we'll do is
we'll go over and take a look. There it is, 7-Zip, and we'll click on 7-Zip File Manager. Let's
double check the version. Help, About, and we can see it's version 16.

Now I'm going to leave this policy in place, and I'm going to go over to Amazon S3, and I'm using
this program in Amazon S3 that lets me tap into what I have in my Amazon share. I'm going to rename
this 7z.msi here. Let me go ahead and his Rename here. I'm going to rename this to 7z16.msi, and I'm
going to rename 7z19 – I'm going to rename that guy to what it's looking for, which is 7z. See what
I'm doing? I'm doing a little exchange program here. We're moving 7-Zip 16 and exchanging it for 19
doing nothing else.

Let's go back to our endpoint. All we're going to do is run gpupdate or just wait for Group Policy
to kick in, or if you're using Endpoint Policy Manager Cloud or MDM for that to automatically kick
in. Now that that's done, it's downloaded, we should see in the temp folder that it's got the latest
version. If we go to c:\temp, take a look, and there it is. Then let's go ahead and check out 7-Zip
now, and if we go to Help, About, boom, 7-Zip 19. We just leave the policy in place, do a little
exchange program underneath the hood, and you're off to the races.

That's how you can keep software updated and patched all automatically using Endpoint Policy Manager
Remote Work Delivery Manager. Hope this video helps you out. Looking forward to getting you started
real soon with Endpoint Policy Manager. Thanks.


