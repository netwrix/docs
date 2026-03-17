---
title: "Why does PolicyPak require a CSE / client installation piece? I want to do it all using what Microsoft ships in the box but don't want to install anything else."
description: "Why does PolicyPak require a CSE / client installation piece? I want to do it all using what Microsoft ships in the box but don't want to install anything else."
sidebar_position: 20
---

# Why does PolicyPak require a CSE / client installation piece? I want to do it all using what Microsoft ships in the box but don't want to install anything else.

You want to do more with Group Policy, but you don't want to add anything to every client system?

Bad news: You cannot have it both ways.

Let's think about it. Microsoft also wants you to do more with Group Policy too. So they have
steadily added more Group Policy CSEs (Client-Side-Extensions, which are the things you can do) in
every version of Windows. You just didn't know it.

Here's the breakdown of CSEs / things you can do in Group Policy from Microsoft:

- Windows 2000: 10 CSEs.
- Windows XP: 13 CSEs.
- Vista: 18 CSEs.
- Group Policy Preferences: 21 CSEs (which is an add-on for XP or Vista, and built-in to Win 7 and
  later)
- Windows 7: 23 CSEs + 21 Group Policy Preferences CSEs (total of 44)
- Windows 8: 28 CSEs + 21 Group Policy Preferences CSEs (total of 49)

Netwrix PolicyPak installs one more CSE. And it works completely
alongside the existing Microsoft ones.

We act like Group Policy because we ARE Group Policy. So, if you want to do more with Group Policy,
you need to add CSEs.

PolicyPak's CSE is required to do the magic that only PolicyPak can
bring.

But PolicyPak's CSE is not an agent, but a CSE or proper Group Policy
client-side-extension.

Agents usually have deployment consoles, monitoring stations, huge memory footprints, asks questions
/ pop-ups to the user, cause slowdowns at login, and on and on.

PolicyPak's CSE (or any of the Group Policy CSEs) don't do that. They are basically
dormant until Group Policy runs (at login, in the background or when manually called using
GPupdate). Then the GP CSEs do something if needed, and then quietly go away.

The PolicyPak CSE ships as an MSI, and can be deployed using any method (including
Group Policy itself), or SCCM, or installing it into your core image.

Once deployed to clients, PolicyPak's CSE starts working and embraces PolicyPak directives.

