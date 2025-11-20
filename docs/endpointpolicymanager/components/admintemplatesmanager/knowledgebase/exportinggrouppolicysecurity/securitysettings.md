---
title: "Why Won't my Windows Security Settings Export using GPO Export Manager"
description: "Why Won't my Windows Security Settings Export using GPO Export Manager"
sidebar_position: 20
---

# Why Won't my Windows Security Settings Export using GPO Export Manager

First, check to see if you're creating your Windows security settings on your local machine.

![617_1_ppsec-kb-01-img-01](/images/endpointpolicymanager/troubleshooting/gpoexport/617_1_ppsec-kb-01-img-01.webp)

If you are working with your local group policy editor, and then you try to export your settings
using Netwrix Endpoint Policy Manager (formerly PolicyPak) Security Settings Manager, you're going
to get this error message:

![617_2_ppsec-kb-01-img-02](/images/endpointpolicymanager/troubleshooting/gpoexport/617_2_ppsec-kb-01-img-02.webp)

Instead, manage your Windows security settings using the GPMC within a domain-based GPO as seen
here:

![617_3_ppsec-kb-01-img-03](/images/endpointpolicymanager/troubleshooting/gpoexport/617_3_ppsec-kb-01-img-03.webp)

Then use Endpoint Policy Manager Security Settings Manager to export your settings as XML for use
with the cloud or MDM service, as seen here.

![617_4_ppsec-kb-01-img-04](/images/endpointpolicymanager/troubleshooting/gpoexport/617_4_ppsec-kb-01-img-04.webp)

You'll be managing your Windows Security Settings through the cloud or MDM service in no time!


