---
description: >-
  If Japanese characters are missing or displayed incorrectly in PDF reports,
  install the Japanese Supplemental Fonts on the client or server. This article
  explains how to add the optional font feature on Windows 10 and Windows Server
  2016 and newer.
keywords:
  - Japanese
  - PDF
  - fonts
  - Windows Server 2016
  - Windows 10
  - Japanese Supplemental Fonts
  - TTF
  - locale
products:
  - auditor
sidebar_label: Japanese Characters Missing or Displayed Incorrect
tags: []
title: "Japanese Characters Missing or Displayed Incorrectly in PDF Reports"
knowledge_article_id: kA04u00000110hCCAQ
---

# Japanese Characters Missing or Displayed Incorrectly in PDF Reports

## Symptom

When exporting a report in the .PDF format, Japanese characters appear missing or displaying improperly.

## Cause

Starting Windows Server 2016, Japanese TTF files are optional for installations with system locale different from Japanese.

## Resolution

For Windows 10 clients and newer, refer to the following steps:

1. Open **Settings** > **Apps** > **(Manage) Optional features** > **Add a feature** > type **Japanese Supplemental Fonts** > check the checkbox and click **Install**.

For Windows Server 2016 and newer, refer to the following steps:

1. Open **Settings** > **Apps** > **(Manage) Optional features** > **Add a feature** > type **Japanese Supplemental Fonts** > check the checkbox and click **Install**.
2. In case no online option is possible, refer to the following step in the Microsoft article: [Cannot configure a language pack for Windows Server 2019 — Use LPKSetup](https://learn.microsoft.com/en-US/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience#method-2-use-lpksetup).
