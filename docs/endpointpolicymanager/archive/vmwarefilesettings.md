---
title: "Endpoint Policy Manager: Manage and lockdown a specific VMware Workstation's VMX file settings"
description: "Endpoint Policy Manager: Manage and lockdown a specific VMware Workstation's VMX file settings"
sidebar_position: 130
---

# Endpoint Policy Manager: Manage and lockdown a specific VMware Workstation's VMX file settings

In this video learn how to use the PP DesignStudio to specify a specific VMware VMX file and then
deliver settings and lock down the settings so users cannot work around them.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xRdB9qoVPWY?si=LCnR0kmTPCj89a_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Lockdown VMware workstation

Hello. This is Sal from PolicyPak technical support. In this video, I’m going to show you how you
can deliver settings for your VMs in a VMware Workstation.

You must know that when you click on “Edit virtual machine settings,” you are going to see these two
tabs: “Hardware” and “Options.” We do have a new Pak to manage these settings, so I’m going to use
that and I’m also going to deliver app locks on these options so your end user cannot change that.
Click “Cancel” and close the app on the target machine.

Now I’m going into my domain controller from where I’m going to deliver the setting. The thing that
you need to look for on the client machine – you need to make sure that you know your data root,
where your configuration files are getting stored for your VMs. We manage VMX file, so you need to
know the data root of your “Configuration file.” In my case, it’s “C:VMsWindows 7.vmx.” I know that,
so now I know what file I need to manage.

You need to download the latest Pak from our custom portal. Once you extract that, you’re going to
see these three files in that folder. The one is DLL, which you need to place on your central local
store. Then the Read Me file, and the last one is XML file. This is the project file which you can
open in the PolicyPak Design Studio and change the data root.

I’ll open that in my PolicyPak Design Studio. In here, the default you are going to see is like
that. The default data root, the Pak we ship does have “Virtual Machine” in the “Data root.” For
example, in my case, I know that my “Data root” is “VMs,” so I will change that part. If you are
targeting any specific file for VMX, like let’s say you are targeting “Windows 8.vmx,” so you need
to change the file name as well.

In my case, I know that it’s in a “VMs” folder on my “SystemDrive” and the VMX file name is “Windows
7.vmx,” so I will change that and then I will save those changes. Then I will go into “Compilation”
option and click on this button to compile it.

I already have that compiled, and I already have that in my central store. So I will open a GPO in
an editor, “VMWare VM Settings.” Here I’m going to see the “Properties.” Let’s say I want it to be
set for “1024” as minimum “Memory.” In “Hardware-Processors” tab, I’m going to try to deliver these
three checkboxes. In “Options-Shared Folders,” I want to deliver “Disabled.” So I select that. Click
“OK.”

Then I will go into my target machine and close the app. I’ll run “GP Update” and we will wait for
it to finish on the user side. Once it is finished, you can open that and now I will see the
changes. Now “Memory” is like what I have set on the Group Policy. We can further go and verify
that. It’s now set to “1024” “MB.” We are delivering these three checkboxes as well. If I go into
“Options” tab, the “Shared Folders” are “Disabled.” So the settings are now delivered on your target
machine.

The last thing which you might want to do is lock down this setting so your users cannot change
that. Right now, they do have ability to change that. Now let me show you how you can do that.
Again, I’m going into my domain controller where I have that policy configured. I’ll open it in an
editor and open the “Properties” for that Pak.

What you need to do is you just need to right click on it and “Perform ACL Lockdown.” When you
select that option, you are actually locking down the whole VMX file on the target machine. You’ll
notice that when I select that option, now even if I now go into “Hardware-Processors” tab, for
these three checkboxes, right click on it and you will see that option is already checked. Same for
the “Options-Shared Folders.” If I right click on it, it is also checked on this option as well. So
we are locking down the whole VMX file on the target machine.

Once it’s set, I will click “OK.” I will quickly go into my target machine and run “GP Update” to
refresh the policy. Once it’s done, I will open “VMware Workstation” again. Let’s open that, and you
will see that now your users cannot change that. If I go into the “Processors” tab, these options
are also disabled. If I go into the “Options” tab and look under the “Shared Folders,” that option
is also disabled.

If you have any questions, please open a support ticket
https://www.netwrix.com/sign_in.html?rf=tickets.html#/open-a-ticket


