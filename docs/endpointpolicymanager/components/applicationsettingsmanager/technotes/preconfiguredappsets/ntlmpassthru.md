---
title: "Firefox: How do I use the NTLM passthru (URIS) settings in the Firefox / about:config AppSets?"
description: "Firefox: How do I use the NTLM passthru (URIS) settings in the Firefox / about:config AppSets?"
sidebar_position: 140
---

# Firefox: How do I use the NTLM passthru (URIS) settings in the Firefox / about:config AppSets?

The Firefox core AppSet (Mozilla Firefox 23.0 and later) has three very commonly used settings from
the extra about:config AppSets.
We add these as a courtesy to this AppSet because they are used very often.

That being said, they are often used incorrectly.

The goal of these settings is to allow NTLM authentication to passthru to specified websites.

We cannot direct you on WHICH setting to use WHEN. That's up to you and your application vendor
guidelines.
From Mozilla's documentation
[here](https://developer.mozilla.org/en-US/docs/Integrated_Authentication) is the explanation of
each of these settings.

- network.negotiate-auth.trusted-uris lists the sites that are permitted to engage in SPNEGO
  authentication with the browser, and
- network.negotiate-auth.delegation-uris lists the sites for which the browser may delegate user
  authorization to the server.
- network.automatic-ntlm-auth.trusted-uris lists the trusted sites to use NTLM authentication.

For use within Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Manager, the use is
simple.
Each one you wish to use would be a TOP LEVEL domain name list, without HTTP or HTTPS, and separated
by commas.

So, below you can see some examples of how you could use this.

We suggest BEFORE you use Endpoint Policy Manager to DELIVER these settings to first test your
configuration on ONE MACHINE (locally on Firefox) And see if you get the RESULT you want.

Then, if you do, then use Endpoint Policy Manager Application Manager to actually deliver the values
you want to all your machines that you wish to get these values.

![82_1_image001](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/82_1_image001.webp)


