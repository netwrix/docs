---
title: "Why do I have to run the licensing tool / what information is gathered and sent to Endpoint Policy Manager for my trial (or becoming a customer?)"
description: "Why do I have to run the licensing tool / what information is gathered and sent to Endpoint Policy Manager for my trial (or becoming a customer?)"
sidebar_position: 20
---

# Why do I have to run the licensing tool / what information is gathered and sent to Endpoint Policy Manager for my trial (or becoming a customer?)

When you run the Netwrix Endpoint Policy Manager (formerly PolicyPak) Licensing tool, we only
acquire the following information:

- Name of domain.
- OUs you want to use it in.
- Number of users in there. Which we don't actually use, this is from our old licensing technique.
- Number of computers in there. This is what we actually use.
- Number of Terminal Services sessions. This is also used.

Here's an example file you would send to us:

![197_1_licensing_faq_pic](/images/endpointpolicymanager/license/197_1_licensing_faq_pic.webp)

Without this file, we cannot know what your computer and Terminal Services count is, and hence, how
much to quote you or where to license you.

To be clear, we are not getting the following from your domain:

- Your whole OU structure. We only get the names of the OUs you want to license.
- Any user names or passwords.
- Any computer names.
- Any IP information.

Or anything else.

If during your testing / trialing, you don't want to send us a License Request Key, that's fine,but…

- We cannot make you a real quote without it.
- We cannot generate a real license key for you if you become a purchaser.

That being said, if you rename a target / endpoint computer to have the word Computer in the name,
the Endpoint Policy Manager client side extension acts as if its fully licensed.

You are welcome to rename a handful of machines for your tests to test out Endpoint Policy Manager
but eventually you will need to run the Licensing Utility so we can know your count and create your
real keys.

Email your Endpoint Policy Manager Sales team member for more information if you have licensing
questions.

