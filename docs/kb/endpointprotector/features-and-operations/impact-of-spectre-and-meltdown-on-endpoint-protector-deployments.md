---
description: >-
  Explains how the Spectre and Meltdown processor vulnerabilities affect Netwrix
  Endpoint Protector deployments and provides guidance for appliances, virtual
  appliances, and endpoints.
keywords:
  - Spectre
  - Meltdown
  - CVE-2017-5753
  - CVE-2017-5754
  - Ubuntu
  - VMware ESXi
  - patches
  - Endpoint Protector
  - hypervisor
products:
  - endpoint-protector
visibility: public
sidebar_label: Impact of Spectre and Meltdown on Endpoint Protect
tags:
  - features-and-operations
title: "Impact of Spectre and Meltdown on Endpoint Protector Deployments"
knowledge_article_id: kA0Qk0000002B93KAE
---

# Impact of Spectre and Meltdown on Endpoint Protector Deployments

## Overview

Spectre (CVE-2017-5753, CVE-2017-5715) and Meltdown (CVE-2017-5754) are processor vulnerabilities that can be exploited by malicious applications running locally on affected systems. As of February 9, 2018, there have been no reported cases of these vulnerabilities being exploited in the wild.

As a Netwrix Endpoint Protector user, you may be indirectly affected by Spectre and Meltdown. The Netwrix Endpoint Protector server typically runs as a Virtual Appliance or as a Hardware Appliance.

## Instructions

- Netwrix Endpoint Protector Hardware Appliance: Contact Netwrix Support to apply the latest patches to the Ubuntu operating system.
- Netwrix Endpoint Protector Virtual Appliance: Patch your hypervisor (such as VMware ESXi) to address these vulnerabilities.
- Endpoints running the Netwrix Endpoint Protector Agent/Client: Follow the update procedures provided by your operating system vendor to address these vulnerabilities.

Operating systems like Ubuntu have released and continue to release patches to address these vulnerabilities. For more information on how Ubuntu is addressing Spectre and Meltdown, see:

Meltdown, Spectre and Ubuntu: What You Need to Know ⸱ Ubuntu — https://ubuntu.com/blog/meltdown-spectre-and-ubuntu-what-you-need-to-know

New Netwrix Endpoint Protector Hardware Appliances ship with the latest patches. For older appliances, please contact Netwrix Support for assistance.
