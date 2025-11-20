---
title: "Working with Technical Support for Enhanced Client Logging"
description: "Working with Technical Support for Enhanced Client Logging"
sidebar_position: 30
---

# Working with Technical Support for Enhanced Client Logging

Technical support may ask you to turn on enhanced client logging if the normal logs aren't producing
enough troubleshooting information. Only enable these logs when working with technical support.

Go to `HKLM\SOFTWARE\Policies\PolicyPak\Config\CSE\` and create a` REG_DWORD` named `ExtendedLogs`
to a value of 1. An example can be seen In the figure shown.

![troubleshooting_policypak_624x284](/images/endpointpolicymanager/troubleshooting/applicationsettings/support/troubleshooting_endpointpolicymanager_624x284.webp)

The figure shown. The creation and naming of `REG_DWORD`.



