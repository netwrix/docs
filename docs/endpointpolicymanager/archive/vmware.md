---
title: "Endpoint Policy Manager: Manage VMware Workstation Hardware and Options"
description: "Endpoint Policy Manager: Manage VMware Workstation Hardware and Options"
sidebar_position: 120
---

# Endpoint Policy Manager: Manage VMware Workstation Hardware and Options

You can specify any particular VM’s hardware and options settings plus lock down the user interface.
Here’s how to do it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/L18VVKKy4qs?si=bNVQtSHXga-nSc1r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### VmWare Workstation hardware

Hi. This is Sal from PolicyPak technical support. In this video, I’m going to show you how you can
deliver different settings in Hardware and Options tab for your VMware Workstation specific VMs.

The first thing that you need to do is to open the XML file, which we ship along with the Pak in the
PolicyPak Design Studio. When you download the latest Pak from our customer portal, you’re going to
get these three files. The one is XML as well. That’s the one that you need to open in PolicyPak
Design Studio and change the “Data root” according to your own VMX file.

So how you can know that? – you need to go into your target machine where you have installed or
where you want to manage VMware Workstation, that specific setting, and note down the “Configuration
file” data root. In my case, it is under “C:VMsWindows 7.vmx.”

Once I have that information, I can change it by going into the “PolicyPak Design Studio.” Now I can
change it to “VMs.” That’s now done. I need click on Save button and then “Save pXML and Compile.”
Once the compile is done, you can place the DLL file according to your own configuration
requirement. You can place them on a central store or a local store. In my case, I’m using a central
store so I have that file already placed on my central store.

Now time to go into your “Group Policy Management” console. Open the GPO in the “Editor.” In
“Editor,” I’m using a user side. In “Application Manager,” I’m going to deliver a policy for VMware
Workstation Hardware and Options tab.

Let’s first verify what we have on our client machine. Let’s go in there. Right now, the “Memory” is
“2 GB.” Let’s open it in our “Virtual Machine Settings” as well. It’s “2 GB,” and there are no
checkboxes under “Virtualization engine.” I’m also able to change that as well. If we go into the
“Options” tab, we can select “Shared Folders” as well and my users can change that setting.

We will try to deliver these settings. I’ll close it down, and I’m going into my management station
where I’m going to deploy that policy. I’ll change the “Memory” to 1 GB. Let’s deliver these three
checkboxes under “Virtualization engine.” In our “CD/DVD” drive, let’s “Disable corresponding
control in target application” completely. I will select “Always reapply this setting” as well.
Let’s make sure we have that in here, yes, and in the memory as well. Okay.

The last thing which I want to do now, on the “Options-Shared Folders” tab, I want to select
“Disabled” for the shared folder for my users. Select that and then I will gray out that option on
the target machine by deploying the app lock (“Disable corresponding control in target
application”). Once it’s done, I will click “OK.”

Now time to go on to your target machine and run “GP Update.” Once that’s done, I will “Open” it.
Now we can see our changes right in here as well. “Memory” is “1 GB,” and we delivered these three
checkboxes. If we go into the “CD/DVD” drive, you can see that option is now disabled. If we go into
the “Options” tab, “Shared Folders” is now delivered and it is grayed out as well.

I hope it helps. If you have any questions, you can put those questions on our support forum or you
can open a support ticket here https://www.netwrix.com/sign_in.html?rf=tickets.html#/open-a-ticket.
Thanks.


