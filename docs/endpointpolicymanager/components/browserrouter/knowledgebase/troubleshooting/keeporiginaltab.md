---
title: "What is the PPBR \"Keep original tab open when routing / Experimental Feature\" checkbox, and why must I turn it OFF for ALL routes if I'm having trouble with ONE website?"
description: "What is the PPBR \"Keep original tab open when routing / Experimental Feature\" checkbox, and why must I turn it OFF for ALL routes if I'm having trouble with ONE website?"
sidebar_position: 150
---

# What is the PPBR "Keep original tab open when routing / Experimental Feature" checkbox, and why must I turn it OFF for ALL routes if I'm having trouble with ONE website?

The "Keep original tab open when routing / Experimental" flag is for a specific use case and is
generally not recommended.

The feature is there to keep an ORIGINAL tab open AND also start a new website on a new tab (instead
of closing the original tab.)

That being said, when you use this feature, every website is touched even if the website is not
involved in a route.

Every website has the HTML re-written to attempt to work for this feature… even if the website is
not related at all to this route.

Therefore, we generally do NOT recommend you use this feature, and you might be asked by support to
turn it off in ALL ROUTES if you're having ANYNetwrix Endpoint Policy Manager (formerly PolicyPak)
Browser Router problems.

Problems which might arise are typically websites with "multiple tabs" like this:

![589_1_img-01_950x137](/images/endpointpolicymanager/troubleshooting/browserrouter/editpolicytemplate/589_1_img-01_950x137.webp)

In these cases, you would need to go through EACHEndpoint Policy Manager Browser Router entry and
UN-check the Experimental flag checkbox.

Then you issues should be resolved.

![589_3_img-02_950x665](/images/endpointpolicymanager/troubleshooting/browserrouter/editpolicytemplate/589_3_img-02_950x665.webp)


