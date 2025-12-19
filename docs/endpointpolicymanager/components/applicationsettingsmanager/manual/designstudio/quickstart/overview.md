---
title: "Quick Start"
description: "Quick Start"
sidebar_position: 10
---

# Quick Start

Netwrix Endpoint Policy Manager (formerly PolicyPak) DesignStudio is where you can create your own
AppSets or edit AppSets that we provide to you. PolicyPak DesignStudio can scrape the interfaces
from your existing applications, such as WinZip, and bring them into the Endpoint Policy Manager
format for later use inside Group Policy Objects (GPOs).

Video: To see an overview of how to use Endpoint Policy Manager DesignStudio, watch this video:
[Creating Your First Pak using Endpoint Policy Manager Design Studio](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/designstudio/firstpak.md).

:::note
The Endpoint Policy Manager format is properly called "pXML" format. You most likely will
never need to edit any pXML files by hand, but you're welcome to open up and explore the files that
are produced by the wizard.
:::


In this guide, you will be creating an AppSet for PuTTY, and open source SSH and telnet client.
You'll be doing the work on your Endpoint Policy Manager creation station. You'll also be using the
pre-configured AppSet for WinZip as a demonstration for other examples throughout this guide.

Tip: We recommend that your Endpoint Policy Manager creation station have the same operating system
(and version) that your target machine does, if possible. Having a Endpoint Policy Manager creation
station that is a Server 2016 machine and a target machine that is a Windows 10 machine, for
example, may work fine. However, for ideal application compatibility, it's best if your Endpoint
Policy Manager creation station is as close as possible to your target machine.

To keep things simple, we'll assume you'll be creating your AppSets from the same machine you used
to create GPOs. However, note that it is common to separate out these two roles, and Endpoint Policy
Manager makes it easy to do so. In this discussion, we'll assume you're using a Windows 10 machine
with the RSAT tools and the GPMC enabled. This will now be your Group Policy management station and
your Endpoint Policy Manager creation station.



