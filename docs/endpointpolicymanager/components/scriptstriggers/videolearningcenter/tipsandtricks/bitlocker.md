---
title: "Implementing BitLocker through Group Policy Using Endpoint Policy Scripts Manager and Administrative Templates Manager"
description: "Implementing BitLocker through Group Policy Using Endpoint Policy Scripts Manager and Administrative Templates Manager"
sidebar_position: 60
---
# Implementing BitLocker through Group Policy Using Endpoint Policy Scripts Manager and Administrative Templates Manager

If you need to encrypt your company data to protect it against prying eyes, Netwrix Endpoint Policy
Manager (formerly PolicyPak) can help configure and implement BitLocker into your existing
environment.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yqZbDBzH7e8" title="Implementing BitLocker through GP Using  Scripts Manager and Administrative Templates Manger" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is John from Endpoint Policy Manager. We're going to look at deploying BitLocker. With more
and more out of the office in potentially less secure locations, protecting data from theft is of
increasing importance. BitLocker offers companies an easy cost effective way of encrypting the data
on laptops and desktops. In this video we'll look at a simple no-touch rollout of BitLocker to a
group of users using Endpoint Policy Manager Application Template Manager and Scripts Manager.

Other than a reboot, the user doesn't have to do a thing. There are two assumptions. One, you must
be using a compatible version of Windows. Two, the TPM or Trusted Platform Module chip must be
installed on the computer. Let's take a look at the work station here.

I'm logged on as a standard user. I have no administrative rights, except I've opened up
administrative command line just so I can check on the status of the BitLocker implementation. If we
take a look, we can see that BitLocker is not installed. It is fully decrypted. Protection is off.
There are no key protectors. Everything is standard computer.

Let's go to our admin server. I've got the GPMC open here. Here's my OU that my computer belongs to.
I'm going to create a group policy object inside here. I'll right click, create a GPO in this
domain. We'll just call it BitLocker Demo.

Let's go in and Edit. On the computer side we're going to expand Endpoint Policy Manager. We're
going to click on Administrative Templates Manager. We're going to create a New Collection. A
collection is there to kind of combine all of our policies together in one.

I can spell BitLocker Configuration. If I had multiple configuration options that I need to employ,
different groups based on security groups are based on computer types where there's laptops,
desktops. I can go in here and add some item level targeting to target those groups and create
different collections for those different groups.

Right now I'm just going to create one. I'm just going to go inside here, create a New Policy. Now
I'm going to expand Windows Components, BitLocker Drive Encryption. The first thing I'm going to do
is I'm going to Restore BitLocker Recovery Information in Active Directory. I'm going to Enable
this. I'm going to Require BitLocker to Backup to the Active Directory, and I'm going to Recovery
Passwords and Key Packages.

Click OK. I'm going to add another one, so Windows Components, BitLocker Drive Encryption. I'm going
to choose Drive Encryption for Windows 10. Enable this. By default it's at 128. That may be fine,
but I want to upgrade it a bit; XTS-AS 256 for the operating system. For any local drives same
thing.

If I'm going to do any removable drives, the best practice is to use AES-CBC. It's the driver we use
in any other devices that are not running Windows 10 Version 1511. Click OK. Click Close, and I'm
done here.

Now I come on down to Scripts Manager. Add a New Policy. There's only one script here, so I don't
need to create a collection, though I can still add item level targeting if I wanted to or if I
needed to. Apply to computer policy. I'm going to put a Batch Script. I have a Batch Script copied
here.

Paste, there we go. This is going to turn the BitLocker on. I'm going to encrypt the system drive.
I'm going to encrypt just the used portion of the system drive, not the entire drive, though that is
an option if you wanted to do that.

There are many other options as well for managed VDE switches. You can take a look and see what you
need for your environment or you want to use. For a basic installation, this is all that's really
required. Click on Next.

If it comes where I no longer want to encrypt the drive, they're moving to a different environment
that requires different encryption, different options, or they're just leaving the company and
they're no longer part of this GPO, we have a revert script that will actually remove BitLocker from
the machine. It will just turn it off on the system drive. Again, I can specify any drive I want
here as well. For now, for this demo, we're just going to do the system drive.

Click on Next. I don't want to always employ this. Once you enforce, you want to be a little safe,
so you have that option of doing GP update/force. This will also cause this to run. One should be
sufficient for you.

Name of policy, so BitLocker Script, very descriptive. That's enabled. Again, I can add Item Level
Targeting here if I had multiple scripts designed for different environments. Click Finish, and I'm
done.

Come over here back to my work station. Now I'm running GP update just to force the hands of time a
little bit. When the user either logs in, this is going to be implemented or just during the course
of the day when GP update runs in the background, it's also going to get employed. I can see over
here it's telling the user that the encryption has begun, but the computer needs to be restarted in
order for this to actually take effect. They don't have to do anything right now. They are not
forced to do anything, but it's an option if they wanted to do it.

If I go here, I can see that now BitLocker 2.0 is installed. It's still fully decrypted, 0%
protection is off. The key protector is installed here. The TPM module is being used to store the
encryption password. It's also saying here that you need to reboot the computer for this to take
effect.

They can either do it now, wait until the end of the day, do it at lunch. The choice is yours or
theirs. I'm just going to restart now. When we come back, this will be fully rebooted and logged in.

Now my computer is rebooted. I can open up the command line again. I'm going to take a look at the
status now. We can see encryption is in progress. It's 70% done.

Encryption method is XDC-AES 256. We're good to go. In a few minutes this will be completely
encrypted, and it's done. The user didn't have to do anything other than reboot the computer, which
they're going to do at the end of the day anyways.

Let's check on the status again; 83%. Let's wait a few minutes. We'll check back in when it's 100%.
We checked back in now. We checked on the status. It is 100% encrypted.

Now the computer is leaving the OU for whatever reason. We no longer want to employ BitLocker. We're
going to unlink the GPO from this OU and thereby from this computer. We're going to run GP update,
accelerate the hands of time a little bit.

Now what's going to happen is the reverse script is going to kick into action. It's going to start
decrypting the data that's there, and it will be back to the way it was before we employed
BitLocker. That's done. It started. We'll check on the status now.

You can see the decryption is in process. Percentage encrypted is down to 26.1%. We'll check back in
a couple minutes when it's all done. Let's see where we stand now.

It's at 0%. BitLocker version is at none. It's fully decrypted. No key protectors. It has been
successfully uninstalled. Thanks for watching. Have yourself a great day.


