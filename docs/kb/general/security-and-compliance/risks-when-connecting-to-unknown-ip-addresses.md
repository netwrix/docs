---
description: >-
  Explains the security risks of NTLM authentication and how to configure
  Netwrix Account Lockout Examiner to connect to unknown IP addresses by editing
  its launcher configuration.
keywords:
  - NTLM
  - NTLMv2
  - Account Lockout Examiner
  - SkipUnknownIPs
  - unknown IP
  - configuration
  - SMB replay
  - man-in-the-middle
  - security
products:
  - general
sidebar_label: Risks when connecting to unknown IP addresses
tags:
  - security-and-compliance
title: "Risks when connecting to unknown IP addresses"
knowledge_article_id: kA04u000000Pcu2CAC
---

# Risks when connecting to unknown IP addresses

Q: **What are the risks with NTLM authentication?**  
A: Security studies revealed that NTLM and NTLMv2 authentication is vulnerable to a variety of malicious attacks, including SMB replay, man-in-the-middle attacks, and brute force attacks. After such authentication, credentials that had been used might be compromised.

Q: **Why can't Netwrix Account Lockout Examiner connect to untrusted IP address?**
A: Connecting to untrusted IP addresses and authenticating access to them is a potential security risk because NTLM protocol should be used for such authentication.

Q: **How does Netwrix Account Lockout Examiner decide that the target IP address is not trusted?**  
A: Netwrix Account Lockout Examiner tries to resolve the unknown IP addresses using the default local DNS server. If the DNS server resolves IP address successfully, then ALE treats this IP address as trusted and connects to the target machine. If the local DNS fails to resolve the unknown IP address, then ALE considers this IP address untrusted and doesn’t connect to it.

Q: **I understand all risk and I still want to make Netwrix Account Lockout Examiner connect and examine lockout reasons on the unknown and potentially dangerous IP addresses. How can I do this?**  
A: To make Netwrix Account Lockout Examiner connect to the untrusted IP addresses, perform the following steps:

1. Close Netwrix Account Lockout Examiner.
2. Navigate to ` %ProgramData%\Netwrix Account Lockout Examiner`.
3. Edit `Netwrix.ALE.Launcher.exe.config`.
4. Find this section:

```xml
<setting name="SkipUnknownIPs" serializeAs="String">
    <value>True</value>
</setting>
```

5. Change the value to `False` so the section should be:

```xml
<setting name="SkipUnknownIPs" serializeAs="String">
    <value>False</value>
</setting>
```

6. Save the file.  
7. Run Netwrix Account Lockout Examiner.

Additionally, if NTLM was disabled according to the Guide (section 2.4.4), it should be re-enabled: https://www.netwrix.com/download/QuickStart/Netwrix_Account_Lockout_Examiner_User_Guide.pdf
