---
title: "Getting the helper tools as desktop shortcuts"
description: "Getting the helper tools as desktop shortcuts"
sidebar_position: 30
---
# Getting the helper tools as desktop shortcuts

Here's how to get all the PPLPM "Helper tools" affixed to the desktop using GPPrefs. (Also works for
PP Cloud and MDM when you export the settings.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/t8MQe-kg-b4" title="Endpoint Policy Manager Least Priv: Getting the helper tools as desktop shortcuts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Getting the helper tools as desktop shortcuts

Hi. This is Jeremy Moskowitz, Founder of PolicyPak Software. In this video, I'm going to show you
how you can pin the Netwrix PolicyPak Least Privilege Manager helper tools to the Desktop. Instead
of having your Least Privilege Manager helper tools using the Start Screen and Taskbar Manager, you
might want to put it nice and friendly here on the Desktop and just have all the tools floating here
on the Desktop.

Now this doesn't have any interesting names. That's okay. We'll make them have interesting names in
a second. But the general gist is, here it is right on the Desktop. You just tell users click on
your little toolbox and then click on the add/remove programs tool and get the thing that you want
them to do. So I'm going to show you how to use Group Policy Preferences to pin these files there.

In order to get started, I'm going to delete this so that way there's nothing up my sleeve here. Now
this took me a little while to figure out how to do. I'm actually in the same Group Policy Object
the you might have seen in the previous videos. But instead of on the computer side, I'm actually
going to do this on the user side. So what I'm about to do should affect the user.

I'm going to drag and drop this XML in place and then walk you through what's going on here. This is
the "Printers" one. This is a little weird, so follow along with me here. for the "Location" you're
going to select the "Desktop." And then the "Name" you can chuck in a folder and that folder, if it
doesn't exist, it will be created. So the "Desktop" we're going to create a folder automatically
called "PPTOOLS\PRINTERS MODIFICATIONS" or whatever you want to call it.

The "Target Path" is the thing that lives on the endpoint in the client-side extension. So
"C:\Program Files\PolicyPak\Least Privilege Manager\Tools\" and then each of the tools. You've got
the network tool, the printer tool, and the remove programs tool. You just click on the three little
dots and select it exactly. Remember to select the .exe and not the .exe XML which is not the right
thing. You can only, obviously, point toward the .exe.

Then you can pick the "Icon." I'm going to pick a little thing that looks like a printer here, and
you're off to the races. The hard part for this was, like I said, selecting "Desktop" here and then
putting the folder name that you want here. That's the trick. So I'll go ahead and click "OK" here.

Let's just see it go one at a time. I'll run GP Update ("gpupdate") here. What should happen is that
it should create the folder and then put the printers item right inside it, and it did. There's
"PPTOOLS," and you can see "PRINTERS MODIFICATIONS" and we're ready to rock. If I wanted to change
this and "Set as Default Printer" or any of these other items that I want to do here like "Add a
printer" or "Print server properties," I'm ready to rock.

Let's do another one together so you can see how to do this all the way through end to end. Again,
if you want them all in the same folder, you just call it "PPTOOLS." In fact, what I'm going to do,
you can do this. You can right click, drag, and "Copy Here" the Group Policy Preferences item. Then
you can call this "Network Modifications" or whatever. Instead of this time picking the "PRINTERS
MODIFICATIONS" folder, I'll call this "NETWORK MODIFICATIONS."

Then this guy, I'm going to pick "This PC," "C," "Program Files," "PolicyPak," "Least Privilege
Manager," "Tools," and pick the "PolicyPak Tools Network Connections" one. Now you've got to be
really careful. Don't pick the wrong one. This one looks tempting, but it's really an "XML" file.
No, you have to pick the executable one. I know, it's confusing. We'll go ahead and hit "Select"
here. Just double check you've got it right. Yes, you've got the ".exe."

So you're going to put this shortcut called "NETWORK MODIFICATIONS" in this folder on the "Desktop."
Man, I know, it's complicated. Don't forget to have "Target type" "File System Object." While we're
here, let's pick something that looks like a network. If the icons don't match up exactly, you can
just create the policy from a machine that has the icons. I'm doing this on a server. You could do
this on Windows 10 or whatever. "OK."

And then we'll copy the last one which would be the add/remove programs, so I'll "Copy Here." I'll
hit F2. I'll call this add – well, it's really not add/remove. It's just remove, so "Remove Programs
Mod." We'll call this "PROGRAMS MODIFICATIONS."

We'll go ahead and pick the right thing, so again pick "This PC," "C," "Program Files," "PolicyPak,"
"Least Privilege Manager," "Tools," and that's the guy. Not the "XML." Got to pick the right guy.
Now we're here. This "Target path" is going to be called "PROGRAMS MODIFICATIONS" in the folder
called "PPTOOLS" on the "Desktop." Okay, last let's change the icon. We'll maybe make it this little
guy, whatever that is. Make it look like programs. Okay, great, and that's it.

Now if we go here, we'll go ahead and just close that out for a second. Actually, it doesn't matter
if it's open or closed, I don't think. So we'll leave it open, let GP Update ("gpupdate") run in the
background. If all goes well, we should see our two other guys pop right in place. Awesome. So
that's the deal.

Now the actual applications themselves are already ready to rock. So if we wanted to go to "NETWORK
MODIFICATIONS" here and we wanted to "Disable" the network card, that's disabled. If you wanted to
reenable it, network cards require a little refresh. We tell you that right here. You just click
"Enable," and you're back in the chips. Same thing for the "PROGRAMS MODIFICATIONS." You're ready to
go there, and you can uninstall applications.

And that's it. That gives you the ability to use Group Policy Preferences shortcuts to get the right
thing at the right time. I hope this helps you out. Looking forward to getting you started with
PolicyPak Least Privilege Manager real soon.

Thanks. Bye-bye.


