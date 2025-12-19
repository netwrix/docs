---
title: "How does Endpoint Policy Manager support (and not support) Windows 7?"
description: "How does Endpoint Policy Manager support (and not support) Windows 7?"
sidebar_position: 50
---

# How does Endpoint Policy Manager support (and not support) Windows 7?

First, Windows 7, Server 2008 R2, Windows 8 and Server 2012 R2 are not supported by Microsoft and
not supported with Netwrix Endpoint Policy Manager (formerly PolicyPak) installed.

Endpoint Policy Manager only supports versions of the operating system which are actively supported
by Microsoft. This is covered in this
FAQ:[Which Windows Client and Server are currently supported by Endpoint Policy Manager?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/tipstricksandfaqs/windows.md)

That being said, Endpoint Policy Manager and unsupported operating systems are BEST EFFORT.

However, thefinal buildwe produced that is expected to install (at all) on unsupported operating
systems is 23.8.

Additionally Endpoint Policy Manager requires drivers which are signed and work only with Windows 10
and later. As such, the following features are EXPECTED to be non-functional even if the CSE
installs properly on unsupported operating systems:

- Endpoint Policy Manager Least Privilege Manager : Block DLLs
- Endpoint Policy Manager Least Privilege Manager: Open/Save Dialog with Low User Rights
- Endpoint Policy Manager Least Privilege Manager: COM Elevation
- Endpoint Policy Manager Device Manager: All of it.

There could be more pieces which are expected not to work in Endpoint Policy Manager, but these are
the known items.

Note for best functionality you should add some additional Microsoft .Net software.

There are basically two major versions of .Net CLR: v2 and v4.

- The latest version of v2 is 3.5.
- The latest of v4 is 4.8

It is recommended to have both installed (3.5 + 4.8).

:::note
there is never any reason to install outdated versions of .Net, so we recommend clients
continue to have the most recent .NET installed with all security updates, and keep installing and
updated all the time.
:::


More details about .Net framework versions can be found here:
[https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies](https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies)

