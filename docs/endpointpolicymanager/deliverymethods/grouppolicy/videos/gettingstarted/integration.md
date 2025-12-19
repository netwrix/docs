---
title: "Integration with Group Policy (Basics: Installation, Backup, Restore and Reporting !)"
description: "Integration with Group Policy (Basics: Installation, Backup, Restore and Reporting !)"
sidebar_position: 50
---
# Integration with Group Policy (Basics: Installation, Backup, Restore and Reporting !)

See how PolicyPak installs into Group Policy, backs up and restores with Group Policy, works with GP
Reporting and more!

<iframe width="560" height="315" src="https://www.youtube.com/embed/WY3ljr8NflQ" title="Endpoint Policy Manager: Integration with Group Policy (Basics: Installation, Backup, Restore and Reporting !)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, 15-year group policy and Microsoft endpoint manager MVP, and in this
video I'm going to show you how PolicyPak hooks right into the group policy infrastructure you
already know and love. To set the stage, let's go ahead and create a new GPO here. I'll call this PP
Demo 123, so I've got this new GPO here, and you know how to create them but look: no PolicyPak
node. You've got Microsoft's policies, Microsoft's preferences, but no PolicyPak stuff. How do get
that?

In the download, we've got – here's the full download here. You can see the Admin Console MSI, and
we're going to go ahead and install the admin console, and this is 50% of what you need to get
PolicyPak up and working. Just get the admin console on your management station, and you're off to
the races. It doesn't have to be a domain controller. It can just be a regular machine like a
Windows 10 machine with a GPMC, and you're off to the races.

Ten seconds ago, this machine didn't have the ability to make PolicyPak edicts, and now we click
Edit and boom, we're off to the races. We'll go over and let's go ahead and do a quick sample. This
is just a lay-up demo, one that you might see in some other videos as well. We'll go over to Least
Privilege Manager. Let's overcome a UAC prompt, a superpower that – nothing that Microsoft has in a
box for group policy. I'll create a new executable rule for one of my favorite apps that needs a
little TLC. We'll use a hash to keep it simple for this video, and I'm going to go ahead and pick my
application, which is Procmon over here. I'm going to run it with elevated privileges

I've locked and loaded this group policy directive, this group policy setting, inside the GPO. I'm
going to go ahead and close it for now. I've linked it over to my east sales users, and that's who
this is. This is East Sales User 1, as you can see here, and if I were to run GP Update, it would
normally work but it's not going to because I don't have the PolicyPak client side extension That's
the second half of what you need to make this work.

If I were to go over to the fake CD-ROM here, that one I downloaded the entire tooling. Here if I go
to Client Side Extension, this is the other half of what you need. If we run the client side
extension here, this is the second half of what you need to get PolicyPak working, bing, bing, bing,
Next, Next, Next. Give this a second to wrap up. You could use any kind of software deployment you
want to make this work. You can build this into your image, although we don't really recommend that;
anything you want, PDQ deploy, SECM, however you want to get this thing out there, you get it out
there and you're off to the races.

That's it. It's a hundred percent of what you need to get PolicyPak out and installed and now you're
ready to run, say – before I run GP Update, let's do the before picture and the after pictures, so
here's the before picture, Procmon requires a UAC prompt, and now because PolicyPak is on the
machine, we can just run GP Update and we will get the results we're after. Here we go, give GP
Update a second, and now Procmon, it works perfectly. That's the first part is that we hook right
into the group policy infrastructure you already know and love.

While we're here, why don't we go ahead and back up this GPO and show you how backup and restore
works. We're going to find PP Demo 123 here. I'll go ahead and back this file up. I'm going to back
it up to my desktop and I will give it a new location here. I'll call this Backup 123. There we go,
and I'm going to go ahead and back up this GPO.

Let's go ahead and show how we hook into the backup and restore. This is backing up this GPO. Now
let's go ahead and delete GPO 123. We're actually go ahead and smash it and really delete it. Now
it's really gone. Because of that, if I were to run GP Update here, what's going to happen? Well,
the policy's going to fall out of scope and Procmon is not going to get the juice it needs in order
to get elevated. That will now revert back.

What are we going to do? Time to restore this. So now let's go ahead and restore. We'll go to Group
Policy Objects. We'll click on Manage Backups. Here's the backup we made a minute again. Let's go
ahead and restore here. We'll go ahead and restore that. Now when you do a GPO restore, it doesn't
restore the links; you have to do that yourself. We're going to pick that and that's PP Demo 123. If
we look here, one of my other favorite things that we hook into group policy land is that we hook
into the group policy reporting. Here you can see what we did earlier is now restored. Now we can go
back over here, run GP Update, and we're restored our settings the way we expect. Let's go ahead and
run Procmon and boom, we've restored our settings. PolicyPak hooks into group policy making the
backup and restore you already do with group policy work perfectly. We hook into all the other areas
of group policy as well. If you do a gpresult/r, you're going to see us there. If you do
gpresults/h, you're going to see us there as well. We are everywhere. We hook into absolutely
everything because we are real group policy as if Microsoft themselves had shipped it from the
factory.

You can watch our other videos as well if you want to learn about how we add item-level targeting to
admin templates and everything else, also how we eliminate loopback and how we integrate into
Microsoft ATPM. I hope this first demonstration just shows how deeply integrated we are with group
policy as if Microsoft had shipped it from the factory. We also do a great job with Microsoft
Endpoint Manager as well, and you can see that in our other integrations.

Thanks so very much, and we'll talk to you soon.


