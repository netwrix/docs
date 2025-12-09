---
description: >-
  Explains why Netwrix recommends that Netwrix Privilege Secure servers not be
  joined to a managed domain and outlines the associated security risks.
keywords:
  - Netwrix Privilege Secure
  - PAM
  - domain-joined
  - non-domain-joined
  - server hardening
  - group policy
  - lateral movement
  - audit trail
  - security best practices
products:
  - privilege-secure-access-management
sidebar_label: 'Security Considerations: Non-Domain-Joined Netwrix'
tags: []
title: 'Security Considerations: Non-Domain-Joined Netwrix Privilege Secure Server'
knowledge_article_id: kA04u000000wnksCAA
---

# Security Considerations: Non-Domain-Joined Netwrix Privilege Secure Server

## Question

What is the reasoning behind the recommendation in the Server Requirements that Netwrix Privilege Secure (NPS) servers not be joined to a managed domain?

## Answer

Netwrix recommends considering standard PAM security cogitations when deploying NPS. NPS instances should be installed on standalone servers that are hardened and have limited access rights.

The following risks are posed by joining NPS to a domain:

1. A domain-joined server can have its security compromised through group policy controls, as policy inheritance may not be blocked for the server.
2. If a privileged domain account is compromised, the NPS server is then a potential target for lateral movement attacks.
3. A key use case of NPS is to provide dynamic domain administrator access to users. If a user is provided with domain administrator privileges, the user would then have domain administrator access to the NPS server. This would allow for malicious actions that would compromise the security of the NPS Server, up to and including tampering with the audit trail after performing malicious actions.
