---
title: "Troubleshooting routing between browsers."
description: "Troubleshooting routing between browsers."
sidebar_position: 10
---

# Troubleshooting routing between browsers.

This guide will help you troubleshoot problems routing from browser to browser. For instance, if you
are inside Internet Explorer and expect Firefox or Chrome to automatically be opened, but it
doesn't, then this is the guide for you.

:::note
Firefox version must be Firefox ESR and not Firefox RR (rapid release). For more details,
[https://www.policypak.com/pp-blog/policypak-will-soon-only-support-firefox-esr](https://www.policypak.com/pp-blog/endpointpolicymanager-will-soon-only-support-firefox-esr).
:::


**Step 1 –** This troubleshooting guide assumes you have already performed the steps in this initial
troubleshooting guide: Browser Router >
[Knowledge Base](/docs/endpointpolicymanager/). This will demonstrate that you are:

- Getting the GPOs involved in Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router
  and
- Licensing is working for Endpoint Policy Manager Browser Router
- Endpoint Policy Manager Browser Router is set as the OS Default Browser for HTTP and HTTPS
- Routes are being created in `ppBRResults.xml` file in the user's AppData.

If you haven't pre-confirmed ALL of these aforementioned steps, then STOP.

ONLY continue if you see `ppBRResults.xml` and are sure Endpoint Policy Manager Browser Router is
correctly licensed.

**Step 2 –** First, test the Endpoint Policy Manager Browser Router is routing "natural" links. Use
WORDPAD (not notepad!) to create a simple document which will open up the browser based upon your
rules (routes.)

![267_1_img1](/images/endpointpolicymanager/troubleshooting/browserrouter/267_1_img1.webp)

Does clicking on each link open the correct expected browser?

YES: Continue onward.

No: Stop, and update your GPO / routes / rules until you get the expected result.

**Step 3 –** Browser Router installs extensions inside of:

- Internet Explorer
- Firefox
- Chrome
- Edge

Those helper applications will only install when:

- The browser has already been opened before (this creates a profile for the browser inside the
  user's profile)
- The user has logged in after this or `GPupdate` has run

Therefore, if you have a brand new user profile, and FF, IE and Chrome have never ever been launched
before, then Endpoint Policy Manager Browser Router will not work immediately.

Again, the browser needs to be:

- Launched and its first-time wizard complete
- Closed
- THEN running` GPupdate` (or logoff and back on)

…will install the Endpoint Policy Manager Browser Router helper applications inside each browser on
the endpoint.

So, some examples where Endpoint Policy Manager Browser Router will not work instantly:

![267_2_img2](/images/endpointpolicymanager/troubleshooting/browserrouter/267_2_img2.webp)

![267_3_img3](/images/endpointpolicymanager/troubleshooting/browserrouter/267_3_img3.webp)

To ensure each browser is ready to route BETWEEN BROWSERS, you are looking for the following.

Inside IE: (Gear | Manage Add-ons)

![267_4_img4-1024x325](/images/endpointpolicymanager/troubleshooting/browserrouter/267_4_img4-1024x325.webp)

FF: The Firefox plugin for Endpoint Policy Manager Browser Router will ONLY install into Firefox
ESR. When using Firefox ESR, you can then see this after you launch Firefox ESR and then press
Ctrl+Shift+J . Then look for the text the following entry:

![267_5_pp-ff-img-01](/images/endpointpolicymanager/troubleshooting/browserrouter/267_5_pp-ff-img-01.webp)

If you are ATTEMPTING to use Firefox RR, then it will not work and you will get the following
(expected) error.

![267_6_image_1000x626](/images/endpointpolicymanager/troubleshooting/browserrouter/267_6_image_1000x626.webp)

Chrome: (Gear | Extensions)

Chrome's helper app is automatically installed over the Internet. So if routing from Chrome TO
Another Browser is not functioning, you need to ensure you have Internet connectivity (at least one
time) to get the Endpoint Policy Manager Browser Router Chrome Extension automatically downloaded
and installed on your machine.

![267_7_img6](/images/endpointpolicymanager/troubleshooting/browserrouter/267_7_img6.webp)

If you don't see the Extension listed, try:

**Step 1 –** Closing Chrome.

**Step 2 –** Verifying Internet connectivity.

**Step 3 –** Try installing any Chrome extension manually (not ours, just one .. any one .. thru the
webstore): [https://chrome.google.com/webstore/category/extensions?hl=en-US](https://chrome.google.com/webstore/category/extensions?hl=en-US)

**Step 4 –** Again; make sure you have SOME Endpoint Policy Manager Browser Router policies.

**Step 5 –** Run GPupdate /force

**Step 6 –** Did our Chrome extension appear?

**Step 7 –** Related.. If you see ONLY Chrome, and not any FORCED extensions,
[Endpoint Policy Manager Browser Router removes other Chrome ‘force installed' extensions. How can I work around this?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/forceinstall.md)


