---
description: 'Explains how Netwrix Privilege Secure for Discovery determines a host is offline, including the use of FQDN or the last known IP, ping retries, and the resulting Host Offline error.'
keywords: [privilege-secure-discovery, host offline, FQDN, fping, ping timeout, last known IP, CN, IPv4, scanner, worker]
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116aqAAA
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-11'
  knowledge_article_id: kA04u00000110pzCAA
  last_modified_date: '2023-07-11'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: How Netwrix Privilege Secure for Discovery Determi
tags: []
title: "How Netwrix Privilege Secure for Discovery Determines a Host is Offline"
knowledge_article_id: kA04u00000110pzCAA
---

# How Netwrix Privilege Secure for Discovery Determines a Host is Offline

Formerly SecureONE

## Overview

When you reach out to systems for any action, Netwrix Privilege Secure for Discovery will use the `FQDN` (fully-qualified domain name) or the last known IP address. The `CN` (common name, short name) is never used.

## How the scanner and worker services determine offline hosts

The Netwrix Privilege Secure for Discovery scanner and worker services will:

1. Attempt to ping (`IPv4`), then connect using the `FQDN` first, if that fails. Timeout for ping, using `fping`, is `500ms`.
2. Attempt to ping, then connect using the last known IP address.
3. Retry both `FQDN` and the last known IP address one more time.
4. If both ping retries fail, the host is deemed offline and the `Host Offline` error occurs.