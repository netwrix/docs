---
title: "Endpoint Policy Manager Application Settings Manager: Backup, Restore, Export, Import"
description: "Endpoint Policy Manager Application Settings Manager: Backup, Restore, Export, Import"
sidebar_position: 20
---

# Endpoint Policy Manager Application Settings Manager: Backup, Restore, Export, Import

Backing up your Netwrix Endpoint Policy Manager (formerly PolicyPak) GPOs is easy. It uses the
existing GPO backup and restore you already know and love. What’s more, you can export your Endpoint
Policy Manager configuration and share them with friends or other administrators.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lrudKeb-BBw?si=mybm8aSnJJgyjbs5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak:Backup and Restore and Export and Import video transcript

Hi, this is Jeremy Moskowitz from PolicyPak Software. Today, I’m going to show you how to do backup
and restore and also what we call data interchange or import and export.

First things first, you’ll notice that whenever you create a PolicyPak in the Group Policy
Management console, you can easily see the settings for it if the Pak is configured correctly. Here
by way of example, I’ve got Firefox items and also WinZip items. So whenever a setting is changed in
the Pak itself, it gets automatically set inside the Group Policy reports.

Let’s create a new directory here for backups. I’ll make a directory right off root just for fun,
call it “Backups.” What I’ll do is I’ll right click over this Group Policy Object, and you’ll see
that you don’t produce the backup directly over a link. What you do is you right click over the
“Group Policy Objects” node or over the actual Group Policy Object itself, and you can “Manage
Backups…” or “Back Up All…”

What I’ll go ahead and do is I’ll “Back Up All…,” and I’ll browse for that new location that I have
here. This is just Group Policy Backup 101. We’ll go ahead and click on “Backups” here, and we’ll
call this “My Important Backup.” This takes a minute to finish. By the way, this is all scriptable
using not PolicyPak but using regular Group Policy stuff, either through PowerShell or through
Visual Basic. This is all scriptable, something you can do any time you want it.

I’ll wait until this is finished, and then I’ll come on back. OK, well, here we go. It all finished;
it took about 15 seconds. All my GPOs are backed up. You can see that there are a lot of settings in
here, a lot of things about WinZip’s “Passwords” and a lot of things about the “Home Page” value on
Firefox and some other things.

If I were to delete the GPO by clicking here and clicking “Delete” simulating a catastrophic
problem, go ahead and click “Yes,” it’s not really a problem when it comes to PolicyPak, because all
of our data is backed up and restored.

If we were to click “Manage Backups…” over the “Group Policy Objects” node, and pick the Group
Policy Object that we want to restore which is “WinZip and Firefox,” we’ll go ahead and click
“Restore” here. It succeeded. If we go back here, we’ll immediately see that the settings are, in
fact, put right back in. If we were to “Edit…” that Group Policy Object, we should see the items
right there. All the Firefox values, everything that we set, any kind of App Lock settings that we
might have are definitely preserved during backup and restore.

So that’s the first thing is that if you use regular backup and restore for Group Policy, you are
protected when it comes to your PolicyPak data. The second thing is you might have a fantastic
security person at your company, and they may decide that setting various settings inside a
particular application is important for the entire company to use. No problem.

Once you have the settings you want perfectly set – let’s actually use the “Mozilla Firefox” one,
there’s really no reason why not – if you wanted to, you could simply click on the “PolicyPak”
button and click “Export data.” The idea again is inside the configuration that you want – for
instance this particular Group Policy Object has Firefox and WinZip.

So we’ll click on “Mozilla Firefox.” We’ll click on “PolicyPak” “Export data.” I’ll just save this
out to my “Desktop” here. I’ll call this “Firefox-Settings.” So I’ve exported those settings in
Firefox out to my desktop.

If somebody else in the organization decided that they were going to create a new Group Policy
Object regarding Firefox – I’ll call this “FireFox 2” – all they would need to do is the next time
they clicked “Edit…” in a Group Policy Object and they created a “New/Application” for “PolicyPak
for Mozilla Firefox,” all they have to do is to go to “PolicyPak” “Import data.”

Now if they find the Firefox export that they picked – there it is, “Firefox-Settings” –we’ll click
that, and it’s imported successfully. There you can see right there that it put together the Home
Page and any other setting that we had already previously set. It’s exactly the way we expected it
to work.

Of course, if you go back to “FireFox 2” here, the new Group Policy Object, you’ll see that it has
all the data from Firefox that we had. If we were to also restore, say, the export and import of
WinZip we would have that as well. But all we did in this case was export from one person’s Firefox
configuration and import it into another Group Policy Object.

So this gives you the ultimate ability to have a corporate-wide standard and then set it once and
then dictate it to the particular Group Policy Objects you need, no matter what domain that they’re
in. With that in mind, this is Jeremy Moskowitz saying thanks for checking out PolicyPak. Take care.

