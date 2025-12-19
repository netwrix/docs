---
title: "Info: What's Different About Domain Controllers?"
description: "Info: What's Different About Domain Controllers?"
sidebar_position: 120
---

# Info: What's Different About Domain Controllers?

Info: What's Different About Domain Controllers?

# Info: What's Different About Domain Controllers?

Domain Controllers operate very differently inside of a network than desktop and server endpoints. 
Because they are the source of truth for essential elements of the directory (users, groups and
computers), they operate uniquely -- which places them outside of the control of Privilege Secure.

Domain Controllers:

- Report their hostname as the domain name and not their actual hostname, so when Privilege Secure
  is attempting to scan this resource it will very likely contain the following error:

```
DOMAIN\Example-Hostname: wrong_host
"System hostname does not match: (u'Example-Hostname', [u'DOMAIN', u'Builtin'])"
```

- Within the "System hostname does not match: (u'Example-Hostname', [u'DOMAIN', u'Builtin'])"
  message, the 'Example-Hostname' refers to the hostname that Privilege Secure thinks it is reaching
  out to at the last known IP, and the 'DOMAIN' at the first index of the subsequent array
  represents the actual hostname that is being returned from that IP.
- Cannot have Protect Mode enabled on them.  Since the only users who show up in the Local Admin
  group on a Domain Controller are the Domain Admins, we generally recommend against scanning them
  as well.  To eliminate this error from an environment, set the Scan Mode to "false" for the Domain
  Controllers.

### Best practice recommendations

- Use domain admin accounts to ONLY administer the domain controller and NOTHING else.
- Keep domain admins to a very tightly controlled group.
