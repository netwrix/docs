---
description: >-
  The affected computer appears greyed out and cannot be selected in the Netwrix
  Endpoint Protector client software upgrade interface because it is already
  assigned to another active upgrade job. This article explains how to identify
  and resolve the issue so you can select the computer for a new upgrade job.
keywords:
  - endpoint protector
  - client upgrade
  - software upgrade
  - greyed out
  - upgrade job
  - troubleshooting
  - agent update
  - client software
  - upgrade interface
products:
  - endpoint-protector
sidebar_label: Greyed Out Computer in the Client Software Upgrade
tags:
  - troubleshooting-and-errors
title: "Greyed Out Computer in the Client Software Upgrade"
knowledge_article_id: kA0Qk0000002B5pKAE
---

# Greyed Out Computer in the Client Software Upgrade

## Symptom

The affected computer is displayed as greyed out and cannot be selected in the Netwrix Endpoint Protector client software upgrade or update interface.

![Example](./../0-images/servlet_image_3f1c3b331cfe.png)

## Cause

This happens when the computer is already assigned to another active upgrade job in the system.

## Resolution

1. Review the list of existing upgrade jobs in the client software upgrade interface and identify any jobs that include the affected computer.  
2. Remove or complete any active or pending upgrade jobs that contain the computer.  
3. Create a new upgrade job and verify that the computer is now available for selection.
