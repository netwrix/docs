---
description: >-
  Instructions to configure Endpoint Protector to allow ChatGPT by adding the
  `openai.com` domain to a Deep Packet Inspection (DPI) allowlist and including
  it in a Content Aware Policy.
keywords:
  - chatgpt
  - deep packet inspection
  - DPI
  - allowlist
  - openai
  - endpoint protector
  - content aware policy
  - denylists
  - allowlists
products:
  - endpoint-protector
sidebar_label: Allowing ChatGPT Access via Deep Packet Inspection
tags:
  - content-aware-protection-and-dpi
title: "Allowing ChatGPT Access via Deep Packet Inspection Allowlist"
knowledge_article_id: kA0Qk0000002B6PKAU
---

# Allowing ChatGPT Access via Deep Packet Inspection Allowlist

## Overview

This article explains how to configure Endpoint Protector to allow access to ChatGPT by adding the `openai.com` domain to a Deep Packet Inspection (DPI) allowlist. In environments where DPI is enabled, web-based AI services like ChatGPT may be blocked by default because security policies restrict access to certain domains.

## Instructions

1. In the Endpoint Protector Console, navigate to **Denylists and Allowlists** > **Allowlists** > **Deep Packet Inspection**.
2. Create a new allowlist dictionary for allowed domains and add the domain using wildcards:
   `*openai.com*`
3. Once the allowlist dictionary is created, include it in the relevant Content Aware Policy.
4. Edit the Content Aware Policy.
5. Expand the **Policy Allowlist** section.
6. Navigate to **Deep Packet Inspection** and select the dictionary you created.
7. Save the policy.
