---
title: "SecureRun to block User AND System executables"
description: "SecureRun to block User AND System executables"
sidebar_position: 90
---
# SecureRun to block User AND System executables

Want to really put the smackdown on malware? Use SecureRun on both the User AND System side. See
this video for details.

<iframe width="560" height="315" src="https://www.youtube.com/embed/W9q35n6cgY4?si=j6xA1VAtqUNdKobS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz. in this video, I'm going to show you how you can use the PolicyPak
Least Privilege Manager to dictate how to shore up a security hole on the computer side using
PolicyPak Least Privilege Manager.

To set the stage, it would be helpful if you have watched some our videos on our SecureRun
technology. But if you haven't, that's okay. I'm going to give you the lay of the land here.

Let's review why the bad guys can get into a hole in your environment.

The idea is that a user is tricked into downloading something. When they do, the file that they
download is going to be owned therefore and written as them.

You can see that the "Owner" here is "EastSalesUser1," the guy who is currently logged onto this box
here in the background.

Now if you try to run this as a standard user, Windows will cheerfully oblige. It will actually do
that work, and that makes the ransomware do the thing.

The problem, however, is that you need to shore it up not just for the user perspective. You need to
shore it up also when somebody running as an Admin tries to do it and if somebody nefarious as the
System tries to do it. You can see here it will run in all three cases.

Let me show you the before picture.

That's the very before picture. Let me show you what it looks like with the SecureRun turned on. If
we were to "Add" a "New SecureRun Policy" and "Enable" it, remember EastSalesUser1 is not a member
of the list.

Because he's not one of these four people or somebody you add, then it's not going to work when run
in the user context.

Let's go ahead and just see that and try that on for size. I'm going to run GP Update ("`gpupdate`")
here. You could really run it in any window.

I'm just going to do it here. I'll give this a second to catch up. Okay, now that we've got that,
let's first try to do it as the standard user.

Blue here is my standard user, pink is my Administrator, and gray is my System. If I try to do it as
a user here and try to type the `RansomewareSimulator.exe` that lives in this folder, that's great.

This is what PolicyPak is designed to do. If I were to try to run it here again as a standard user,
double click it, it's being blocked.

So it's being blocked here in Explorer and blocked at the Command line.

Now the problem is that this is a System process. So if I try to run `RansomewareSimulator.exe` as
an Admin, that's going to run. And lastly, if I try to do that same thing as System, that's also
going to run.

So the thing I'm going to show you now is how to shore up the System processes, and it's only one
click.

Now the magic trick can only happen on the computer side. This same SecureRun policy exists on the
user side as well. But in order to use what I'm about to show you, it must be performed on the
computer side.

So "User and System Processes," that's all there is to it.

Let me go ahead and run GP Update ("`gpupdate`") here. We'll give this a second to catch up, and
then we'll rerun the exact same thing.

The first thing we'll do as the user, we'll run `RansomewareSimulator.exe`. Remember, EastSalesUser1
is not a person who is on the SecureRun list, so that doesn't work.

If we go now to Administrator, let's go ahead and run `RansomewareSimulator.exe`.

What happens now once we've introduced the User and System Processes policy scope? There we go. It
has been blocked there.

If we try to do `RansomewareSimulator.exe` as System, once again also blocked.

In this way, you are now shoring up an attack vector in a big, big way.

Hopefully, this helps you out, and then you can continue on to the next video to understand some
more items around the User and System Processes scope policy.

Thank you very much.


