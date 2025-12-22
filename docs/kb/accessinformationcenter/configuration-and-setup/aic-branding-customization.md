---
description: >-
  Instructions to apply a custom logo and change the banner background color for
  the AIC. Includes exact file paths and filenames to update for AIC in Netwrix
  Auditor 9.0.
keywords:
  - AIC
  - branding
  - logo
  - banner color
  - branding.css
  - product-logo.png
  - Netwrix Auditor
  - Sb-branding.css
  - SMPC-5582
  - 270x60
products:
  - access_info_center
sidebar_label: AIC Branding Customization
tags: []
title: "AIC Branding Customization"
knowledge_article_id: kA04u0000000ITECA2
---

# AIC Branding Customization

## Summary
*Instructions on how to apply a custom logo and banner color for the AIC.*

## Issue
Customers sometimes request to provide their own logo for the AIC since it is available to their end users who may not be familiar with Netwrix. Branding customizations are done on an as-needed basis and are not generally provided to customers currently. In our 9.0 release we support the ability to change the background color of the banner as well as the supplied logo.

## Instructions

### Logo
1. Navigate to the following location: `C:\inetpub\wwwroot\StealthAUDIT Compliance\Content\extras\images`
2. Backup the `product-logo.png` file by renaming it to: `Sb-product-logo.png`
3. Place customer's logo in the directory with the name `product-logo.png`
4. Refresh the AIC

The `product-logo.png` is `270x60` pixels.

### Banner Color
1. Navigate to the following location: `C:\inetpub\wwwroot\StealthAUDIT Compliance\Content`
2. Copy the `branding.css` file and rename it to `Sb-branding.css` to backup the existing banner color
3. Open and update the `background` value to correspond to the color of choice.
4. Refresh the AIC
