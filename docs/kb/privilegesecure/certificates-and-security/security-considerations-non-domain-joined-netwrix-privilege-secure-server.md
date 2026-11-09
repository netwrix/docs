---
description: >-
  Explains why Netwrix recommends not joining Privilege Secure servers to a
  managed domain and lists the security risks of doing so.
keywords:
  - Netwrix Privilege Secure
  - NPS
  - PAM
  - domain-joined
  - non-domain-joined
  - server hardening
  - group policy
  - lateral movement
  - audit trail
  - security best practices
products:
  - privilegesecure
sidebar_label: 'Security Considerations: Non-Domain-Joined Netwrix Privilege Secure Server'
tags:
  - kb
  - certificates-and-security
title: 'Security Considerations: Non-Domain-Joined Netwrix Privilege Secure Server'
knowledge_article_id: kA04u000000wnksCAA
---

# Security Considerations: Non-Domain-Joined Netwrix Privilege Secure Server

## Question

What is the reasoning behind the recommendation in the Server Requirements that Netwrix Privilege Secure for Access Management servers not be joined to a managed domain?

## Answer

Netwrix recommends considering standard privileged access management (PAM) security cogitations when deploying Privilege Secure. Install Privilege Secure instances on standalone servers that are hardened and have limited access rights.

Joining Privilege Secure to a domain poses the following risks:

- A domain-joined server can have its security compromised through group policy controls, as policy inheritance may not be blocked for the server.
- If a privileged domain account is compromised, the Privilege Secure server is then a potential target for lateral movement attacks.
- A key use case of Privilege Secure is to provide dynamic domain administrator access to users. If a user is provided with domain administrator privileges, the user would then have domain administrator access to the Privilege Secure server. This would allow for malicious actions that would compromise the security of the Privilege Secure server, up to and including tampering with the audit trail after performing malicious actions.
