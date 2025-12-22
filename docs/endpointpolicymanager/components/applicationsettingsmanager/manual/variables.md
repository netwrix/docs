---
title: "Environment Variables and Shell Folders"
description: "Environment Variables and Shell Folders"
sidebar_position: 60
---

# Environment Variables and Shell Folders

Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Settings Manager can use
environment variables and Shell Folder variables.

First, you can use any environment variable that is already defined on the machine. Simply type set
at a command prompt on a target machine and see what environment variables are already set.
Additionally, you can use Group Policy Preferences' Environment Variables extension to set up
another one if you like.

You can use any value name from the following key and use it as an environment variable:
`SoftwareMicrosoft\Windows\CurrentVersion\Explorer\Shell` Folders. For example, there's no real
environment variable for the Desktop.

But when you're using Endpoint Policy Manager Application Settings Manager, you can specify
`%desktop%\SomeFile.ini` or `%desktop%\SomeFile.rdp`. This is done the same way for Favorites; you
can specify %favorites% (or any other Registry value name from that key) in both the DesignStudio
and the MMC.

As an extra tip, you should use `%{374DE290-123F-4565-9164-39C4925E467B}%` for downloads instead of
%Downloads%. That's because the Registry value name for that folder is actually the odd name of
`{374DE290-123F-4565-9164-39C4925E467B}`.

Endpoint Policy Manager also supports the use of variables such as `%USERPROFILE%\Favorites` or
`%USERPROFILE%\Downloads`. When you use this, the variable will expand to something similar
to` C:\Users\Jake. Therefore`, the paths for `%USERPROFILE%\Favorites` and
`%USERPROFILE%\ Downloads` should resolve (by default) to
`C:\Users\Jake\Favorites and C:\Users\Jake\Downloads`. That being said, there is no guarantee that
the downloads will be redirected to another volume or even to a network share.

Therefore the direct environment variable names such as
`%{374DE290-123F-4565-9164-39C4925E467B}%`,` %Desktop%, and %Favorites%` are safer to use because
they expand to the actual path that client-side extension (CSE) gets from the Registry.



