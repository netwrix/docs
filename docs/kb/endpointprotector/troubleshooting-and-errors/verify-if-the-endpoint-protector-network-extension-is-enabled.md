---
description: >-
  Use this article to verify whether the Endpoint Protector network extension is
  enabled. You can check the status via the command line or the Endpoint
  Protector Console.
keywords:
  - Endpoint Protector
  - network extension
  - systemextensionsctl
  - network extension status
  - Filters & Proxies
  - console
  - systemextensionsctl list
  - verify
products:
  - endpoint-protector
visibility: public
sidebar_label: Verify if the Endpoint Protector Network Extension
tags:
  - troubleshooting-and-errors
title: "Verify if the Endpoint Protector Network Extension Is Enabled"
knowledge_article_id: kA0Qk0000002B6TKAU
---

# Verify if the Endpoint Protector Network Extension Is Enabled

## Overview

This article describes how to verify whether the Endpoint Protector network extension is enabled. You can verify the status using either the command line interface or the Endpoint Protector Console.

## Instructions

### Verify Status via Command Line Interface

1. Run the following command in the terminal:

```
```bash
systemextensionsctl list
```
```

2. The Endpoint Protector network extension should display both **Enabled** and **activated** in the output.

### Verify Status via Endpoint Protector Console

1. In the console, navigate to **System Settings** > **Network** > **Filters** > **Filters & Proxies**.
2. Verify that the Endpoint Protector network extension is present and that the status shows **Enabled**.
