---
sidebar_position: 3839
title: Why do I see "Extra Registry Settings" in Endpoint Policy Manager Application
  Settings Manager items in the GPMC?
---

# Why do I see "Extra Registry Settings" in Endpoint Policy Manager Application Settings Manager items in the GPMC?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Settings Manager writes a lot of data to Endpoint Policy Manager Application Settings Manager policies keys in the event that the setting no longer applies. Sometimes these settings will revert out changes, be left alone or do something else.

Settings you generate will have nice GPMC reporting via ADM settings reporting like what's seen here.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/ApplicationSettings/943_1_image001_950x624.png)

But items which control other settings will not have any reporting and will appear as "Extra Registry Settings" like what's seen here.

This is expected Endpoint Policy Manager Application Settings Manager behavior and is not changeable.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/ApplicationSettings/943_2_image002_950x758.png)