---
title: "Endpoint Policy Manager and WinGet: Overcome UAC prompts when standard users use Windows Package Manager"
description: "Endpoint Policy Manager and WinGet: Overcome UAC prompts when standard users use Windows Package Manager"
sidebar_position: 10
---
# Endpoint Policy Manager and WinGet: Overcome UAC prompts when standard users use Windows Package Manager

Learn how you can use Application Manager in your MDM environment to manage a myriad of settings for
commonly used applications such as Firefox and Java!

<iframe width="560" height="315" src="https://www.youtube.com/embed/kgp0dKhHuew" title="Endpoint Policy Manager and WinGet: Overcome UAC prompts when standard users use Windows Package Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, I'm going to show you how you can use Netwrix Endpoint
Policy Manager (formerly PolicyPak) with winget. Winget is also known as the Windows Package Manager
and gives you the ability to quickly download pre-wrapped up applications and get them installed
very quickly on a bunch of endpoint machines. The problem is that standard users can't use the tool
because everything from winget requires local admin rights. I'm going to show you how you can work
around that. To get started with Windows Package Manager or winget, because it's so new, it's not
part of the operating system at least in times of this video that I created. You'll have to get it
installed as an admin. You go to github.com/microsoft/winget-cli/releases. You'll download the
appxbundle and then install it as a local admin.

When you do, the very next PowerShell you open will enable you to do winget and you could give it a
quick test run. You could do winget show and you can see all the applications that are here. I'll
just do a winget install vim which is a VI editor. This takes a minute or two downloading from the
internet and then you get a UAC prompt. Remember, you can install it as an admin but it won't
install as a standard user which is what we're going to fix next. I'm just giving it a quick test
run and making sure it all works before we move on to the next step. By the time it's done, you
should have a couple of icons. Here we go, right there, recently added. You should be able to run
your utility, whatever the thing is that you chose to do. There you go.

I know how to use VI because I cut my teeth in the ‘90s on this, so I remember VI pretty well, so
long story short. Is that how it works? Let me go to Control Panel and try to uninstall it which
remember, as of this writing, there's no way to uninstall packages using winget. I'm going to go
ahead find that package here. Installed on today and let's go ahead and uninstall it. Again, I'm
just walking before I'm running, making sure I can get winget to work.  I'm going to go ahead and
continue this. The big problem is that if you try to do what I just tried to do as a standard user,
it's not going to work because standard users can't install software. Let me go ahead. In fact, let
me show that to you real fast as soon as this is done.

Once this is uninstalled here, what I'm going to do is I'm going to switch gears over to my
WestSalesUser2 guy here, WestSalesUser2. Give him a second to log on. This is my standard user. He's
logged on. If he tries to do a winget here, if he tries to do winget install – actually, let's do
winger show again. He can at least do that part. Get the packages that are available. If he wants to
do winget install vim, here's what it will do. It will download it which is great, but then when it
tries to run it, what happens, that shouldn't work. Now we're logged on as WestSalesUser2 and he
also has winget. What's actually interesting is even though I don't have Notepad, even though I
don't have vim installed anymore, if he tries to do winget install vim, it actually oddly succeeds
but actually won't perform the install.

I don't know what that's all about but that's how it works. It's not there and nothing to see,
nothing to do. However, if he does try to install an application like winget install Notepad ++,
this is not going to work. It will download it and aha, he gets a prompt with a UAC prompt and this
is what we're going to overcome. Now in this first part of the demonstration, if you want to just
blanket, let anyone who's a standard user just install anything from winget, that's easy to do. You
have to know a little something about where they're being downloaded but I do.

If you go to app data local packages, Microsoft Desktop Installer and then TempState and then
WinGet, you can see there is the Notepad ++ that was downloaded but it couldn't actually run.
Everything that happens, happens here in the user's profile, AppData, Local, Packages, Microsoft
Desktop Installer, TempState, WinGet. In order to overcome that, I've got a Group Policy object that
I've created already called Let my East Sales Users install absolutely anything using winget. I've
got this GPO that has these two values in them. One for executables and one for Windows Installer
policy. Again, I'm not recommending this. I'm just showing you one way to do this. What I'm doing is
I'm making – I'm using for an executable rule that would do the entire folder for %user profile%,
AppData, Local, Packages, Microsoft Desktop Installer\_ 8weky, whatever that is /TempState/WinGet.

I'm doing that one for executables and one for Windows Installer policies. I'm letting those things
run with elevated privileges. I've got these rules set up and I've got it linked over. Let me go
ahead and run gpupdate to just get that from Endpoint Policy Manager land. Give this a second to
settle in. Now what I'll try to do is just rerun the same command. Here we go. Winget install,
Notepad ++. Same command. Here we go. Try to download, try to run, bingo, bango, bongo, no UAC
prompt. We're off to the races and let's go ahead and see the application. We head over to take a
look. Here we go. Notepad ++ installed. This should install absolutely anything now. If you do
winget show again, we want to pick a different thing. We now blanketed the ability for them to
install anything they want. I don't even know what half these things are.

Spotify, I know Spotify, but if I wanted to do a winget install Spotify, all right. This will do
that. No questions asked. By the time it's over, we should have Spotify. Let's just go ahead and
take a look. Installer hash verification fail. Yeah, let's go ahead and say yes to that and see if
we get Spotify. There we go. If you wanted to be more specific about what these things are instead
of the blanket that I have given you here, let me turn off the rules and show you the trick on how
to be more specific. Let me go ahead and take these two rules. I'm just going to unlink the GPO here
and uncheck Link Enabled. Then we're going to go back to the way we were with that gpupdate. I've
removed the rules. Now we're back to just group policy and Windows by itself. Shouldn't be able to
install any application.

Now even though I have just done that, there actually are going to be some applications that will
let you install as a non-admin. For instance, Zoom works. I just tested that. That works. You can
install Zoom not being an admin, but most things are going to require an admin. You want to be
specific. We know that this is the folder where things happen. If we were to do a winget – let's do
one more, let's do show one more time. Let's find another package that we haven't used yet. Let's do
wire shark. Winget install wireshark. Now what's going to happen here with wireshark is that it will
download which is great. It will try to run as a local admin and then it's going to bomb out because
we're not a local admin and if you don't have Endpoint Policy Manager, then you can't do this magic.

We'll go ahead and just wait for a quick second here and then we can use it to our advantage. Here's
the UAC prompt where again, we know that it's published by the wireshark guys and we actually know
what the name is, what the actual executable is. We can be very specific. We can do is take the file
that got downloaded here and I'm going to copy it over to my management station or you could create
the rule right from here if that's what you wanted to do too. I'm just going to net use, star over
two, dc, share, dc2016 share, dc2016 share. I'm going to copy that over to my management station
basically. Now that I have it over here on my management station, I actually have everything I need
to do. I could do PPLPM Let Wireshark install via Endpoint Policy Manager and WINGET.

All right. I'll go ahead and click Edit here. Then I'll dive down under User side, PolicyPak. Go to
Least Privilege Manager and I can make a combo rule just like I've done in a million other videos. I
can make a New Executable Policy because we saw it as a .exe. I'll use a combo rule and I'm just
going to point over to that file. I'm going to go to the Signature and the File Info for that file.
I'm going to Select a reference file and pick in my share. I have Wireshark that I just got. Bang.
You can see it's signed by the Wireshark guys and the File Info Condition I can say higher than –
higher or equals that version number which it will be, and then I'm off to races. I can run that
application installer with elevated privileges and I am done. Let's go ahead and try this out again.
Now I've got a rule in Endpoint Policy Manager land that should let this kick off and winget is
doing the kicking off part. Let's go ahead and see that it runs after this.

Now the gpupdate is done. Let me go ahead and rerun that command winget install wireshark. It's
going to try to redownload it and re-kick it off. This time Endpoint Policy Manager is on the case
and we've now overcome that UAC prompt. No UAC prompt with winget. There we go. It's all the way
installed. The standard user can now run Wireshark and then they're off to the races. That's
basically it. If you want to see how we do uninstalls by the way, Endpoint Policy Manager has a
little sidecar utility. Look up the video on the helper tools. The helper tools will enable you to
use control panel applet idea where you can uninstall things and you can limit what they can
uninstall through Endpoint Policy Manager Least Privilege Manager.

The other way that you can do what I'm showing you here is through Endpoint Policy Manager Scripts
Manager. For instance, if I wanted to use Endpoint Policy Manager's Scripts Manager to – let's pick
another application real fast. Pick another application we don't have. We'll go back to winget show.
Let's pick one more application. Let's pick Ghostwriter. I don't even know what that is. Let's go
ahead and say Ghostwriter. We can do is we can create a Scripts manager item, add a new policy here
and all we got to do is do a PowerShell Script with elevated rights. That's going to be winget
install ghostwriter. I think that's what that was. Let's take a look one more time. Ghostwriter,
yeah. I don't know what that is. We're going to find out together, winget install ghostwriter.
That's it. We're going to run Once in Endpoint Policy Manager land and we'll call this install
ghostwriter and then let's go ahead and run gpupdate here. Give this a second to settle in.

Now that that's done, there we go. Let's take a look. It will take a little while. There we go.
There is ghostwriter. I don't know what ghostwriter is but maybe you do and you love it. Anyway,
there's your application. Like I said, if you want to do uninstalls and stuff, you have to check out
the video called setting up the Endpoint Policy Manager Least Privilege Manager Helper Tools.
Hopefully, in this video you got three great ideas on how to use Endpoint Policy Manager to either
use the Scripts manager, the Least Privilege Manager with a particular rule or the blanket rules if
you want to go bananas and let users install anything with winget and overcome UAC prompts. Hope
this helps you out. Thank you very much and talk to you soon.


