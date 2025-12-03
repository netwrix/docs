---
description: >-
  This article explains how the File Copy event functions on various Linux distributions, detailing its compatibility and logging specifics.
keywords:
  - File Copy event
  - Linux distributions
  - file transfer
sidebar_label: File Copy Event on Linux
tags:
  - documentation-and-reference
title: "How Does the File Copy Event Work on Linux Distributions?"
knowledge_article_id: kA0Qk0000002B7hKAE
products:
  - general
---

# How Does the File Copy Event Work on Linux Distributions?

## Overview

Starting with client version 1.7.1.2, the File Copy event is supported on all Linux distributions that have available clients, such as Ubuntu 18.04 LTS, Ubuntu 20.04 LTS, RHEL 8.1, and RHEL 8.3. This functionality works regardless of the kernel version used by the distribution; events will be created even if the kernel is lower or higher than 5.1.

## Details

- **Event Direction:** The File Copy event is recorded only when transferring files from a PC to a USB device.
- **Logging:** The logs will report only the file that was copied. The source and destination paths are not displayed.