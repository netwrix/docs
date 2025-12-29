---
description: >-
  Security best practices for operating Netwrix Threat Prevention, aligned with
  the protection level of domain controllers. This article lists recommendations
  to reduce risk and secure the Threat Prevention server and its related
  components.
keywords:
  - Netwrix Threat Prevention
  - security best practices
  - server hardening
  - domain controllers
  - SQL Server security
  - privileged access
  - Network Level Authentication
  - PAM
products:
  - threat-prevention
sidebar_label: Threat Prevention Security Best Practices
tags: []
title: "Threat Prevention Security Best Practices"
knowledge_article_id: kA04u0000000HwoCAE
---

# Threat Prevention Security Best Practices

Because of its purpose and capabilities, Netwrix Threat Prevention should be operated at the same security level as the domain controllers it protects. This collection of best practices is intended to supplement customers' own security judgement and highlight risks and recommendations.

## Best Practices

### Restrict access to the Netwrix Threat Prevention application server
- Priority: High
- Description: Individuals with administrative access to the Netwrix Threat Prevention server are implicitly administrators of Netwrix Threat Prevention and through its capabilities may be able to become administrators on domain controllers. Limit access to the least possible.

### Operate Netwrix Threat Prevention at the same security level as you operate domain controllers
- Priority: High
- Description: This one principle should guide decisions made about the management and operation of Netwrix Threat Prevention. Because Netwrix Threat Prevention protects domain controllers, its implementation should be as protected as they are. Consider deploying Netwrix Threat Prevention within the same credential boundary as domain controllers to limit the potential for privilege escalation.

### Protect Netwrix Threat Prevention's SQL Server operating system and databases
- Priority: High
- Description: Netwrix Threat Prevention's SQL Server database contains sensitive configuration data. The same controls applied to the Netwrix Threat Prevention server should be applied to the SQL server as well.

### Use the Protected Users group to secure accounts that login to the Netwrix Threat Prevention server
- Priority: Medium
- Description: Adding users to the Protected Users group in Active Directory automatically protects the account by forcing it to only use secure authentication techniques

### Periodically review Netwrix Threat Prevention console permissions
- Priority: Medium
- Description: Periodically review holders of the Netwrix Threat Prevention Administrators and Console Operators roles to ensure only authorized individuals hold those roles.

### Protect, randomize, and periodically rotate Windows local administrator account passwords
- Priority: Medium
- Description: Local administrator credentials are frequently targeted by attackers, whether through password guessing or pass-the-hash attacks. Ensure these credentials are randomized, stored securely, and periodically changed using a solution like Microsoft LAPS.

### Ensure Microsoft security updates are applied to the Netwrix Threat Prevention server
- Priority: Medium
- Description: Rapidly applying Windows security updates is essential to protecting the Netwrix Threat Prevention server from the exploitation of known vulnerabilities.

### Install and regularly update antivirus and endpoint protection products
- Priority: Medium
- Description: Antivirus and endpoint detection and response solutions help protect servers and applications from malware and adversarial techniques. Install your standard solutions and ensure they are regularly updated.

### Install only required applications on the Netwrix Threat Prevention server
- Priority: Medium
- Description: Installing unnecessary software on the Netwrix Threat Prevention server increases its attack surface and the amount of threats that must be defended against. Only install absolutely necessary software.

### Ensure only server administrators can access the Netwrix Threat Prevention installation directory
- Priority: Medium
- Description: By default, Netwrix Threat Prevention uses the permissions granted to program files which only allows SYSTEM, Administrators and, when Windows authentication is used, the service account will be applied directly with full control and other accounts. Granting additional privileges creates additional risks to Netwrix Threat Prevention and should be avoided.

### Use a Privileged Access Management (PAM) solution to protect administrative access to Netwrix Threat Prevention
- Priority: Medium
- Description: A PAM solution allows administrators to securely connect to Netwrix Threat Prevention and can provide an audit trail for activities taken on the server and within the product.

### Ensure Network Level Authentication (NLA) is enabled on the Netwrix Threat Prevention server
- Priority: Low
- Description: Network Level Authentication improves the security of the Remote Desktop Protocol connection used to administer the Netwrix Threat Prevention server.

## Revision History

| Date | Comments |
| --- | --- |
| October 6, 2021 | Collected practices from various other sources |
