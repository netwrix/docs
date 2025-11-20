---
title: "Enable end-users to install their own fonts"
description: "Enable end-users to install their own fonts"
sidebar_position: 20
---
# Enable end-users to install their own fonts

How do enable users to install their own fonts? With Netwrix Endpoint Policy Manager (formerly
PolicyPak) of course! Check out this video to see how its done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jVvEfx98054?si=KHsyNHk2tzc-3Nrx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Enable end-users to install their own fonts.

Hi, this is Sal from PolicyPak technical support. In this video, I'm going to show you how you can
allow your end users to install Windows fonts on their own.

First of all, I'll show you what the current behavior is. If I double click on the font file on my
"Windows 7" machine as an end user, there's a prompt which we are going to avoid for the end user so
they can install it on their own. Same thing for the Windows 10 machine as well. If they try to do
that, they will get that prompt. But we don't want that to be available for the end users, so we are
going to avoid that.

By going back to the domain controller under user side, that's the target I'm going to set for my
user. I'm going to configure that under user configuration, and we're going to "ADD NEW EXE POLICY."
"Use simple rule," I will click on "Next" and I will choose "Conditions/Path."In here, I'm going to
select "Add/Add folder." That's what we're going to select, or we can select "Add/Add file" as
well.Go back to the file, click on the "Browse."

Whenever you click on the Windows font file, it's going to launch FontView application for Windows 7
and Windows 10 machines. The path is universal. It's going to be under system root, "System32"
folder, and the application it's going to launch is "fontview." We will do that for you, so you just
need to select the executable which is responsible to install the font file. I will click "OK."

Now the "Path Condition" is there. This is the "Action" we can choose: "Run with elevated
privileges." Click on "Next." I will name it "Run the font folder with elevated rights." The state
is "Enabled." That's it, so click "Finish."

Now we will go onto our target machine and run GP Update ("gpupdate") on the Windows 7 and same
thing for the Windows 10 as well. Now the policy is updated successfully.

If we double click on the file, you're going to see that when I click on "Install" that font is
going to install now. If I go back to my Windows 7 machine, if I try to "Install" here as well, I'm
able to install the font here as well.

Okay, I hope it helps.  
Thank you.


