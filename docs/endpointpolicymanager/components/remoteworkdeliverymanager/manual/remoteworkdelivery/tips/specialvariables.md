---
title: "About Special Variables"
description: "About Special Variables"
sidebar_position: 20
---

# About Special Variables

For running processes after the file is copied (called post copy) or when the policy no longer
applies (called revert action) we have the variables `%DestinationFile%` and `%DestinationDir%`. The
ideal format is to use these variables inside straight quotes, for example "%DestinationFile%" and
"%DestinationDir%", so filenames and directory names with spaces will correctly unfurl and evaluate
correctly. For running PowerShell commands in these post copy or revert action scenarios, we have
the variables `$Env:DestinationDir` and `$Env:DestinationFile`. For these variables, you do not need
to use quotes. We'll see how to use these variables in following sections.

## Using Special Variables by Running a Process

You can use special variables in a variety of situations. Here are some examples for standard
policies only:

- Run a process to install software after the software is delivered:

  `msiexec.exe /i "%DestinationFile%"/qn`

- Run a process to install specific software in a specific directory:

  `msiexec.exe /i %DestinationDir%\7zip.msi /qn`

- Run a process to count the lines in a file (The examples counts the lines in the file that don't
  have the unlikely string "ZZZZZYYYXX"):

  `%DestinationFile% | file /v /c "ZZZZZYYYXX"> %DestinationDir%\numlines.txt`

- Run a process to count the number of files in the destination folder:

  `attrib.exe "%DestinationDir%"/s ./*.xml | find /v "File not found - " | find /c /v "" > numfiles.txt`

## Using Special Variables by Running a PowerShell Command

If you want to use PowerShell commands to install files (which is required for the Endpoint Policy
Manager Remote Work Delivery Manager Lite Endpoint Policy Manager Cloud policies and optional in web
or standard policies), here are some examples that can be used with standard policies and Endpoint
Policy Manager Cloud:

- Create a new file in the destination directory:
  `New-Item $Env:DestinationDir\new_file.txt -type file -force -value "Hello world"`
- Install an MSI file immediately and quietly after downloading it
  `: msiexec.exe /i $Env:DestinationFile /qn`
- Install a non-MSI application, like Notepad++ setup installer immediately after downloading it
  (with its own switches, such as capital /S for silent, in the case of Notepad++ setup routine):
  `npp.7.5.6.Installer.exe $Env:DestinationFile /S`


