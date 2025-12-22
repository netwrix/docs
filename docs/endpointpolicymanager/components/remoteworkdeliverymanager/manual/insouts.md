---
title: "Ins and Outs of Remote Work Delivery Manager"
description: "Ins and Outs of Remote Work Delivery Manager"
sidebar_position: 10
---

# Ins and Outs of Remote Work Delivery Manager

Endpoint Policy Manager Remote Work Delivery Manager (PPRWDM) solves several huge Windows 10 issues.
Its basic goal is to deliver files and folders from either SMB shares or HTTP(S) sources, and if the
connection is unstable or breaks and comes back, the file(s) will continue to be downloaded. You can
think of PPRWDM as Robocopy on steroids for Group Policy and the web. And as a bonus, after the file
is copied, you can run a script to perform an action, such as install an application you just
copied.

## Managing File Copies with Group Policy without Endpoint Policy Manager

There is an in-box method of copying files with Group Policy Preferences but it does have some
limitations.

The File Copy settings are found in the Group Policy Editor under User Configuration > Preferences >
Files node and Computer Configuration > Preferences > Files node.

![about_policypak_remote_work](/images/endpointpolicymanager/remoteworkdelivery/about_endpointpolicymanager_remote_work.webp)

Using Group Policy Preferences will copy exactly one file and place it where you want it. You can
also add an asterisk (\*) in the source file entry, which changes the Destination File field to a
Destination folder field.

![about_policypak_remote_work_1](/images/endpointpolicymanager/remoteworkdelivery/about_endpointpolicymanager_remote_work_1.webp)

When you add the asterisk (\*), Group Policy Preferences will attempt to copy all the files from
that source folder down to the client. Note that this file copy is not recursive, making it a common
problem that administrators would like to overcome. There's also no way to copy only changed files,
or to make other exceptions.

## Delivering Files with an MDM Service without Endpoint Policy Manager

On any MDM service, there is no way to easily push files. The only current way to do this is to wrap
up your files into an MSI with a third party MSI tool (like AdvancedInstaller or similar) and then
use the MDM service's MSI file deployment ability. Even though it works, and would copy the file one
time, this is not a great system when you need to update one or more files on a regular basis,
because the process becomes tedious and error-prone. With Endpoint Policy Manager, you'll see how to
quickly copy files to endpoints and keep them updated on a regular basis.


