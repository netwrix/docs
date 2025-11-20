---
title: "Deploy software with Endpoint Policy Manager Cloud"
description: "Deploy software with Endpoint Policy Manager Cloud"
sidebar_position: 10
---
# Deploy software with Endpoint Policy Manager Cloud

Got software to deploy to your work from home machines (domain joined or non-domain joined)? Then
start using Remote Work Delivery Manager to deploy that software! It's easy! Just put your files on
a cloud web service then let Netwrix Endpoint Policy Manager (formerly PolicyPak) do the rest of the
work!

<iframe width="560" height="315" src="https://www.youtube.com/embed/CftQhMqdeFY" title="Endpoint Policy Manager Remote Work Delivery Manager: Deploy software with Endpoint Policy Manager Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz and in this video, I'm going to show you how you can deploy software to
your domain-joined or non-domain joined machines using Endpoint Policy Manager Cloud. To get started
here, what we're going to do is we're going to head over to this thing called the File Box. The File
Box lets you connect to your files that exist somewhere else, for instance on Amazon S4, Azure Blob,
and some other services.

We're going to do an add external link and we're going to pick Amazon S3 or Azure Storage. We do
support some others and this list is increasing all the time. I'll go ahead and call this 7Zip and
I've already got these pre-staged on Amazon here. So I'm going to go ahead and copy in my link here.
You don't have to set an expiration time if you don't want to. I'm going to validate the link and
I'm going to use this in just a second. That's valid and I'm going to hit Save and I'm off to the
races. So there we go. 7Zip will be my first install and the second thing I want to do is Notepad++
installer, so I'll then go ahead and add a new external link and I'll call this Notepad++. Again,
this is Amazon S3 and here's my link. I'm going to validate it and save it, and that's part one,
just getting the links to the software I want to actually install.

Then we're going to go over to computer groups and create our policies. I'm going to do this on the
magical all group because all computers magically go to the magical all group, I'm going to create
and link a new policy here and I'm going to pick a Endpoint Policy Manager Remote Work Delivery
Manager to get this accomplished. I'm going to do this in two stages, so I'll call this Deploy 7Zip.
I'm going to add a new delivery policy, so I'll call this  7Zip install and on install, I'm going to
apply this to all users who log on to the computer. You can also use the computer mode if you want
to do something system-y but in this particular case, this is what I want, all users who log on to
the computer.

The source file is hey, look at that, hanging out on Amazon S3 like we just said, so we going to
just pick that off the chart there. The destination file – we'll it in C-downloads. If you don't
want to do that, you can just change it to something like C:/temp. Then the post copy action, this
is where are you going to actually perform the install. I did a little pre-testing for 7Zip and the
install for it is going to be this, MSIexec/i and then we're going to put in the destination dir.
Take this percent destination dir percent, and we'll go ahead and run that process. Then when it's
time to install, we are going to do something similar. We are going to do MSI exec/x against the
file and uninstall it quietly as well. We're going to install and uninstall quietly as well. Our
overt process will be to run MISexec/x.

If you want to do something fancy pants with PowerShell, you can do that as well. When we're done
with this file, we will also delete the copied file. There we go. So that's an MSI exec file.

If we want to add another – actually I can make this deploy 7Zip and Notepad++ in the same little
bundle here. I want to deliver another one, call this NPP delivery, Notepad++ delivery, I again want
to also do this to all users who log onto the computer. We'll make the source file again. We've got
that staged on Amazon S3. Let's go ahead and pick that. There we go, Notepad++. It's ready to go. I
will also put this in the Temp folder and then for the process, I want to run when we're installing
it is going to be Notepad++ installer/S. On their website, they tell you to use slash-capital-s for
install. Then when it's time to say goodbye, how do we do that? We're going to do a program files –
Notepad++ uninstall/S. That's the magic sauce for that, and I pre-tested that and we're off to the
races.

Then when we're done with this as well, we might as well also delete the copied file. Alright,
that's it. We're locked and loaded. We've got this associated with the magical all group. If I go
over to my endpoint here, you can see my cloud machine is assigned to the all group. This computer
does not yet have Notepad++ or 7Zip. Now if I were to open a command prompt here and do
PPCloud/sync, what we're doing at this point is getting that new directive from Endpoint Policy
Manager Cloud. That directive is then going to go out and perform the install we staged, those files
on Amazon S3 or our other web services. There's the policy right there. It downloads it, and it's
going to put it in C:/Temp. I might have some other things there, too. I do, so there's the file we
just downloaded and here's also the 7Zip, that MSI. We take a look now and boom, Notepad++ and 7Zip.
if we go ahead and go to Notepad, it runs just fine. If we were to go to 7Zip and run that, it's
going to run just fine.

There we go. Now that we've got all that, let's now go to make the policy not apply anymore. Let's
go to our Deploy Policy. We will disable the policy or if the guy moves from sales to marketing or
something like that, the policy falls out of scope. What do we want to do? Well, what we want to do
is have those software packages uninstall. So we do PPCloud/sync, we'll now un-get the policy. When
we un-get the policy, we're going to run the revert script action. There we go, so we don't have the
policy anymore. We're running the revert script action. If we take a look at what's happened here,
boom, we've removed 7Zip and we've removed Notepad++. If we were to go over to the Temp folder and
take a look there, we can see we've also removed the files that dealt with that install.

Just like that, using Endpoint Policy Manager Cloud to deliver software to your domain-joined and
your non-domain joined machines. Hope this video helps you out. Looking forward to getting you
started with Endpoint Policy Manager Cloud and Remove Work Delivery Manager real soon. Thanks so
much.


