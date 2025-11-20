---
title: "Printers won't come back once removed by user"
description: "Printers won't come back once removed by user"
sidebar_position: 80
---

# Printers won't come back once removed by user

What should you do when Printers won't come back when someone removes it from a managed computer?

## Summary:

You're using Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud (PPC) Preference object to
deploy TCP/IP printers and it is working fine until someone removes that printer. You waited for
default PPC refresh, tried with running `"ppcloud /sync" `and log off and log back in and even tried
a reboot, but the required printer won't come back.

## Reason:

PPC doesn't see any update in a destination computer's object so it will not execute the next step,
which is to install the Printer. You need to do a little change -nothing configuration related- in
that Printer's PPC

Pref Object. It will enable the destination computer to identify the change for that object in the
cloud and sync it locally. Then PPC will be able to install that Printer back on the computer.

## Workaround:

We've edited the value for Printer's location in the PPC Pref Object.

![747_1_front-desk-retry](/images/endpointpolicymanager/troubleshooting/cloud/747_1_front-desk-retry.webp)


