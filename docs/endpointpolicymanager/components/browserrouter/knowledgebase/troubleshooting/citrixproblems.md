---
title: "Chrome and Citrix problems"
description: "Chrome and Citrix problems"
sidebar_position: 80
---

# Chrome and Citrix problems

## Symptom:

A user logs into their Citrix desktop and attempts to launch Google chrome but nothing happens.

## Solutions:

A temporary workaround is to manually kill any `Chrome.exe` processes being run by that user before
chrome will launch properly.

The permanent workaround would be to use theNetwrix Endpoint Policy Manager (formerly PolicyPak)
Application Settings Manager Chrome Pak, and on the COMPUTER side, to deliver

UN-check to "Continue running background apps when Google Chrome is Closed) as seen in the
screenshot.

Chrome is keeping itself alive, even though it should not. This will fix the problem.

![253_1_image0015](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/253_1_image0015.webp)


