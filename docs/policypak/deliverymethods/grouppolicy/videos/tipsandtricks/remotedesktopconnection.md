---
title: "Prevent a Remote Desktop Connection Drop During GP Update"
description: "Prevent a Remote Desktop Connection Drop During GP Update"
sidebar_position: 50
---
# Prevent a Remote Desktop Connection Drop During GP Update

Microsoft MVP Jeremy Moskowitz shows you how to prevent disconnect during GP update / force using
registry settings.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VXeylj9vqss?si=UJY02cKo2R_S4bwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### How to Prevent a Remote Desktop Connection Drop During GP Update

Hi, everybody. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak
Software. In this super short video, I'm going to show you how to work around the most annoying
thing. You've seen this. You've had this problem. We're going to fix it together.

Let me show you this problem. You've used RDP and connected as some standard user or as an admin to
some endpoint machine. You decide you're going to do something in Group Policy land, and you want to
check to see if it's working. So you go to run a Command Prompt and you run "gpupdate /force."
You've seen this. What happens? The connection drops. That's no fun.

It turns out there's a garden-variety pack of ways you can solve this. One way is you can walk up to
the machine, or you could use Group Policy. For this demonstration, I'm going to just walk up to the
machine and show you the registry punch you would need to do to make this problem go away.

Let me reconnect to my to my computer here. I'm going to log on as an admin here. That's "trixie."
Now that I'm logged on, you see the session is still there. Let's just run "regedit" here. I'm the
local admin. I need to find this setting. This is "HKEY_LOCAL_MACHINE" under "SYSTEM," and we dive
down under "CurrentControlSet."

Once we're on "CurrentControlSet," we're going to just "Find" the value. The value we're looking for
is kind of weird. It's called fDenyTSConnections. If we just search for "fDeny" here, there it is.
You're looking for "fDenyTSConnections."

If you've ever had this problem where you're trying to remote into a machine, run GP Update to test
something, and for the love of Pete it's not working, just remember you can use that registry
setting. And you can blast that same registry setting out using Group Policy Preferences or
PolicyPak or any number of items and get it out there and you'll be ready to go.

I hope this video helps you out. Talk to you soon.


