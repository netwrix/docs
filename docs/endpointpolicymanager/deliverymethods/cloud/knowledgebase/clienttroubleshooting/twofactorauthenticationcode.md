---
title: "Two-factor Authentication: You're not receiving code for email-based two-factor authentication"
description: "Two-factor Authentication: You're not receiving code for email-based two-factor authentication"
sidebar_position: 140
---

# Two-factor Authentication: You're not receiving code for email-based two-factor authentication

We're assuming that you are able to receive emails from other third-party applications or external
sources.

This has been observed that when you have NoScript add-on for Mozilla Firefox enabled, or similar
extension enabled for Google Chrome. Netwrix Endpoint Policy Manager (formerly PolicyPak) email
service will unable to send the email-based two-factor authentication code via email.

To be sure, this highlighted function on PP website doesn't work when NoScript is enabled for either
Mozilla Firefox or Google Chrome.

![674_1_kb-problem](/images/endpointpolicymanager/troubleshooting/cloud/674_1_kb-problem.webp)

## Reason:

This is a screenshot of NoScript plug-in Mozilla Firefox as on October-2019. It may look different
now.

![674_2_kb-reason](/images/endpointpolicymanager/troubleshooting/cloud/674_2_kb-reason.webp)

## Resolution:

Add URL Endpoint Policy Manager.com website in the trusted site section of NoScript plug-in.

![674_3_kb-resolution](/images/endpointpolicymanager/troubleshooting/cloud/674_3_kb-resolution.webp)


