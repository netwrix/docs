---
title: "Endpoint Policy ManagerScripts .. Deploy Software via VPN or with Endpoint Policy Manager Cloud"
description: "Endpoint Policy ManagerScripts .. Deploy Software via VPN or with Endpoint Policy Manager Cloud"
sidebar_position: 20
---
# Endpoint Policy ManagerScripts .. Deploy Software via VPN or with Endpoint Policy Manager Cloud

If you have remote workers and you want to deploy software to them, it's easy with Netwrix Endpoint
Policy Manager (formerly PolicyPak). Using Endpoint Policy Manager Scripts you can deploy software
to your machines which are domain joined and VPN, or those with Endpoint Policy Manager Cloud.
Here's how to do it!

<iframe width="560" height="315" src="https://www.youtube.com/embed/1j-_J0FTh50" title="Endpoint Policy Manager Scripts .. Deploy Software via VPN or with Endpoint Policy Manager Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can use Endpoint
Policy Manager Scripts to deploy software to remote workers. In this demonstration, this machine,
the one with the green background, that's going to represent my domain joined-machine over VPN to my
Active Directory domain. This machine with the blue background is going to represent that's going to
join Endpoint Policy Manager Cloud. He's not domain-joined, but he is going to get Endpoint Policy
Manager Cloud, and I'm going to show you how to deploy software like Chrome or Firefox or whatever
you want using Endpoint Policy Manager Scripts.

To get started here we have a couple of examples for you to use. We have them in a KB article called
"How to Silently install Firefox ESR, Chrome and WinZip using Endpoint Policy Manager Scripts
Manager." We provide a couple of example scripts. For anything else, you're on your own, but these
should get you off to the races to get started. By way of example, let's go ahead and take this
first script. This is the Firefox install script. I'm going to show you how we do it. I'm going to
copy that script, and again, I'm going to be doing two things here, one for my on-prem world/my VPN
world and the other one for my Endpoint Policy Manager Cloud world, so I'm going to create a GPO
here, and I'm going to call this PP Scripts Software Deploy. It doesn't matter what I call it, of
course. I'll right click and click Edit here.

Then I'm going to go to Computer side Endpoint Policy Manager Scripts. Scripts Manager can work
either on the user or the computer side. These scripts have been tested to work on the computer
side. The scripts will also be delivering to the entire computer, which is also called the systems
side. When you install them on the system, every user gets it, but you can also for some software
might want to apply directly in the user profile. This is being deployed for the entire computer
here. Go ahead and click Next. This is going to be a PowerShell script. We'll go ahead and paste
that. You can see that the script starts and the script ends.

The magic really happens is that there's a download URL from the manufacturer or from another
source. We're going to copy it locally and then execute it and then write some output in case
something doesn't go perfectly well. Go ahead and click Next. We have this idea of a revert script.
Revert script is if the policy no longer applies or if you have something like item level targeting,
which is in the next page, the idea is that you can run maybe a removal script if that's interesting
for you. We suggest that you do these scripts once or when forced. Once will do it one time, but if
you get into trouble, you can have the user run gpupdate /force, and it'll attempt to rerun the
script and therefore reinstall the software. We'll go ahead and call this Firefox install.

Again, optionally, we have item level targeting. This can say do the script when the following is
true like maybe when it's a laptop, only when it's a laptop, or you can say when the machine is on
this IP range or not on this IP range, for instance you want to make sure it's out of the office.
Only when it's out of the office, go ahead and install the software. You can do that if that's what
you want to do. I'm not going to do that now.

The second thing I'm going to do is I'm going to add a new policy here for my Chrome, so I'm just
going to go back to Endpoint Policy Manager Scripts and get that – get the Chrome script that we
have here, and then go back, paste it in. I'll copy it, go back, I'll paste it in. Then I don't want
to run an off script, and I want to do it once or when forced, and I'll call this Chrome install.
Now, you can take these scripts, these same scripts, and in Endpoint Policy Manager Cloud, of which
I am logged onto over here – in Endpoint Policy Manager Cloud land, you might want to on a
particular computer group or on this special group called All, you can create and link a new policy,
so you can go to Endpoint Policy Manager Settings, Scripts Manager, and you can go through the
Scripts Manager. I want to call this Chrome Deploy, and then add a new policy here to the machine
side, and on the Apply we want to make a PowerShell Script and paste that script in. There we go. No
revert action, and we want to do it once or when forced. There we go. It's the exact same thing in
Endpoint Policy Manager Scripts land, same basic gist. You can see it's now linked over to my
special All group.

Another thing you may want to try to do is if you go to the one you created earlier, you can take a
look and view it as an XML in Notepad. You can copy it. I'm going to right click and copy that. Then
I'm going to go over back to Endpoint Policy Manager Scripts, and you can in the All group or
whatever group you want upload and link a new XML here and simply paste in what you did on-prem. You
could do Firefox Deploy. The basic gist is that you can either use the in-cloud editor or you can
use the work you've already done in group policy land to just right click and export. You're off to
the races.

Now we've set it up for both our group policy/VPN and our Endpoint Policy Manager Cloud guy. What
we're going to do is on this machine we're going to run gpupdate. Actually, we don't need a force,
and the idea is that this will just run in the background all automatically, and if I were to go to
this machine that's not domain joined and join him to Endpoint Policy Manager Cloud – let's go ahead
and do that. Remember, this has to be done in advance because you're going to get prompted for admin
credentials, so this has to be done before the machine goes on the road here, and he's going to
download the client-side extension, claim a license, and get automatically joined to that special
All group, and then those policies will come down. I just want to make sure that that happens here
before we continue. There's the special All group. There's a policy that's also linked to the All
group.

At this point, it's a little bit of a waiting game. Most of the time these things happen pretty
fast, so I'm just going to wait for that to finish up here. What I'll do is I'll just pause the
camera and come back, and we'll see in a minute or two what the results are. Okay, and we're back.
You can see there's the Firefox icon and there's the Chrome icon. Again, this is my not-domain
joined Endpoint Policy Manager Cloud machine. If I were to refresh here in program files, I can see
there's Google Chrome and I can see there's Firefox. If I were to go over to my domain joined
machine through VPN, if I just refresh here, again I'll see Chrome and I will see Firefox there, and
then lastly, we – these particular scripts are smart.

If you take a look in the Temp folder, you'll see that there's a folder called Apps, and if you
wanted to, you could take a look at the log files to see what's actually transpired here. For
instance, you could just see ah-ha, everything was successful. If there was any problems or
whatever, you'd see the output here. That's really all there is to it to using Endpoint Policy
Manager Scripts Manager to deploy your software through the internet, through your domain joined
machines and VPN, or to your not domain joined machines with Endpoint Policy Manager Cloud as well.
Hope this helps you out. Looking forward to getting you started with Endpoint Policy Manager real
soon. Take care.


