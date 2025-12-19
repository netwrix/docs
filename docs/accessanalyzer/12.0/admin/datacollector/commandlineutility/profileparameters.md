---
title: "CLU: Profile Parameters"
description: "CLU: Profile Parameters"
sidebar_position: 20
---

# CLU: Profile Parameters

The Profile Parameters page provides settings to configure the parameters for the profile. It is a
wizard page for the **Edit Profile** or **Create a New Profile** selections on the Profile Type
page.

![Command Line Utility Data Collector Wizard Profile Parameters page](/images/accessanalyzer/12.0/admin/datacollector/commandlineutility/profileparameters.webp)

Profile parameters include:

- Profile Name – Name of the profile. If **Edit Profile** was selected on the Profile Type page,
  then this is the name of an existing profile to be edited. If **Create a New Profile** was
  selected, then this is the name of a new profile.
- Path – Path of the utility (.exe) from the local or remote machine. If stored on the local
  machine, give the local path. If the utility is located on multiple paths in the same machine,
  each can be entered on a new line in this field. If the .exe file is present in the installed CLU
  directory, then enter the utility name rather than the full path.
- Start in path for task (Optional) – Working directory for the command line that executes the
  program or script. This should be either the path to the program or script file, or the path to
  the files that are used by the executable file.
- Command Line – Command that the utility executes. If the utility is self-executable and does not
  need a command, leave this field blank.
- Output File Name – Enter the desired name for the output file. By default, the output file name
  matches the profile name.
