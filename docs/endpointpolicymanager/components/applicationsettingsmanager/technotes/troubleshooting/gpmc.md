---
title: "Why do I see \"Extra Registry Settings\" in Endpoint Policy Manager Application Settings Manager items in the GPMC?"
description: "Why do I see \"Extra Registry Settings\" in Endpoint Policy Manager Application Settings Manager items in the GPMC?"
sidebar_position: 210
---

# Why do I see "Extra Registry Settings" in Endpoint Policy Manager Application Settings Manager items in the GPMC?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Settings Manager writes a lot of
data to Endpoint Policy Manager Application Settings Manager policies keys in the event that the
setting no longer applies. Sometimes these settings will revert out changes, be left alone or do
something else.

Settings you generate will have nice GPMC reporting via ADM settings reporting like what's seen
here.

![943_1_image001_950x624](/images/endpointpolicymanager/troubleshooting/applicationsettings/943_1_image001_950x624.webp)

But items which control other settings will not have any reporting and will appear as "Extra
Registry Settings" like what's seen here.

This is expected Endpoint Policy Manager Application Settings Manager behavior and is not
changeable.

![943_2_image002_950x758](/images/endpointpolicymanager/troubleshooting/applicationsettings/943_2_image002_950x758.webp)


