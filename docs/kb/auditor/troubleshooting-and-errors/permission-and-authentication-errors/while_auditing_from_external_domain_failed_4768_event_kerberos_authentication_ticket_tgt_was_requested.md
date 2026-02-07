---
description: >-
  This article discusses the failed 4768 events logged in the Security log when auditing from an external domain and provides insights into the causes and resolutions.
keywords:
  - Kerberos
  - Netwrix Auditor
  - Event 4768
products:
  - auditor
sidebar_label: Failed 4768 Event Resolution
tags: []
title: While Auditing From External Domain Failed 4768 Event 'A Kerberos Authentication Ticket (TGT) was Requested' Logged on DCs of That Domain
knowledge_article_id: kA0Qk0000002sVlKAI
---

# While Auditing From External Domain Failed 4768 Event 'A Kerberos Authentication Ticket (TGT) was Requested' Logged on DCs of That Domain

## Symptom

- Netwrix Auditor is installed on a computer in the **dom1.local** domain.
- Netwrix Auditor is configured to audit the **dom2.local** domain using appropriate credentials in UPN format (for example, **administrator@dom2.local**).
- Failed 4768 events are written in the Security log of the domain controller **dc1.dom1.local** in the **dom1.local** domain.
- The event has a **Result Code** of **0x6 KDC_ERR_C_PRINCIPAL_UNKNOWN** ("The username does not exist").
- Event 4768 (S, F): A Kerberos authentication ticket (TGT) was requested.

## Cause

Netwrix Auditor, running on a computer in **dom1.local**, uses the Microsoft `activeds.dll` to bind to Active Directory with the provided credentials.

- Although the computer’s own domain controller (**dc1.dom1.local**) logs a failed Event 4768 (0x6), the bind to Active Directory succeeds and Netwrix Auditor works correctly.
- This behavior is due to the standard [RFC 6806: Kerberos Principal Name Canonicalization and Cross-Realm Referrals ⸱ IETF 🡥](https://datatracker.ietf.org/doc/html/rfc6806). According to RFC 6806, an Active Directory UPN is interpreted as an NT-ENTERPRISE Kerberos name type.
- With an NT-ENTERPRISE (UPN) name, the Windows Kerberos client sets the canonicalize bit and sends its first AS-REQ to canonicalize **administrator@dom2.local**. For example, "request may specify a client name of 'bob@EXAMPLE.COM' as an NT-ENTERPRISE name with the 'canonicalize' KDC option set" (RFC 6806 §6).
- You can verify that the failed 4768 event was caused by a canonicalize Kerberos ticket. The failed event’s **Ticket Options** field will have bit **0x00010000** set, which corresponds to the "canonicalize" bit 15 (big-endian style) in the Kerberos documentation (RFC 4120).
- Per RFC 6806 §7: "the client machine will send the AS-REQ to a convenient realm… for example, the realm of the client machine."
- Because **dc1.dom1.local** does not hold that user, it replies with error 6 and gives the client a referral ticket pointing at **dom2**. This exchange is part of the normal referral flow and is not a fatal error.

## Resolution

> **NOTE:** Netwrix Auditor continues to function correctly. The failed events described above do not cause any issues and are part of normal Kerberos operation for canonicalization and cross-realm referrals.

### Workaround 1: Filter Security Log Events

Filter the Security log for Event 4768 where **Status** is **0x6** and the **Ticket Options** field includes the canonicalize bit (**0x00010000** mask).

### Workaround 2: Use NetBIOS Format for Username

Use the username in the **NetBIOS domain name\username** format (for example, **DOMAIN\username**).

### Why Is a Failed 4768 Event Not Generated When Using DOMAIN\username Format?

The **NetBIOS domain name\username** format is not a Kerberos principal name; it is a NetBIOS identifier. Microsoft’s “User Name Formats” page distinguishes between the User Principal Name (**name@example.com**) and the Down-Level Logon Name (**DOMAIN\username**), which uses the NetBIOS domain.

When a NetBIOS name is supplied, LSASS uses DC-Locator (DNS or NetBIOS locator). "When an application requests a DC but specifies a short NetBIOS-style domain name, DC location always tries to map that short domain name to a DNS domain name. If DC location can map the domain names successfully, it uses DNS-based discovery with the mapped DNS domain name" (Microsoft source).

Before Kerberos can proceed, Windows first discovers which DNS realm owns the NetBIOS name (for example, **DOM2**).

The `DsGetDcName` function is called with **DS_KDC_REQUIRED**, guaranteeing a KDC. The API that Netlogon uses can be told to return only controllers that are running the Kerberos service: "DS_KDC_REQUIRED – Requires that the returned domain controller be currently running the Kerberos Key Distribution Center service." (Microsoft source)

Therefore, the function returns **dc2.dom2.local**, which is both a domain controller and a KDC.

Because the client already has the target domain KDC’s address, it does not communicate with its own domain’s KDC, so no 4768 event is logged on **dc1.dom1.local**.

## Related Link

- [RFC 6806: Kerberos Principal Name Canonicalization and Cross-Realm Referrals ⸱ IETF 🡥](https://datatracker.ietf.org/doc/html/rfc6806)