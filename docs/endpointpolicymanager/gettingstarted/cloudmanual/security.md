---
title: "About Security"
description: "About Security"
sidebar_position: 10
---

# About Security

As expected, some data from your organization is stored within Netwrix Endpoint Policy Manager
(formerly PolicyPak) Cloud after it is joined by a computer joins. Below is a list of what is stored
within Endpoint Policy Manager Cloud.

- Endpoint Policy Manager UUID: This is a random, unique ID generated in the cloud when a computers
  joins. It doesn't contain any computer-specific data, but it helps us to identify the computer
  when it checks in.
- Fingerprint: This is a SHA256 hash of hardware UUID and OS IDs. This is used as a unique computer
  ID in order to generate a unique license.
- MAC address: This is the physical network adapter MAC address.
- BIOS UUID: This is a unique hardware ID assigned to every physical and virtual machine by the
  manufacturer. (For more information on BIOS UUID, see
  [http://searchsoa.techtarget.com/definition/UUID](http://searchsoa.techtarget.com/definition/UUID))
- Last known public IP address: This is stored only for reporting and to allow search on the
  website.
- OS version and build: This is stored only for reporting. (e.g., Microsoft Windows NT 6.2.9200.0 or
  Microsoft Windows NT 6.1.7601 Service Pack 1)
- Computer name: This is the FQDN computer name that has been assigned.
- Check-in times: This is the first check-in date and time and last check-in date and time.

:::note
At no time are usernames, passwords, organizational units (OUs), or domain names used or
stored within Endpoint Policy Manager Cloud.
:::


All communication to and from the client machines with Endpoint Policy Manager Cloud is always
encrypted. Below is a description of how the client attempts to communicate with Endpoint Policy
Manager Cloud.

- The Endpoint Policy Manager Cloud client first tries HTTPS (secure HTTP) using port 443 and an
  encrypted Endpoint Policy Manager Cloud certificate that the client received at the time it
  joined.
- If that is unsuccessful, then the Endpoint Policy Manager Cloud client tries HTTP using port 80,
  but with a message-level algorithm suite that uses RSA15 as the key wrap algorithm, SHA256 for the
  signature digest, and 256-bit Basic as the message encryption algorithm. In HTTP mode, the
  Endpoint Policy Manager Cloud client verifies the identity of the server using a hard-coded
  certificate.

:::note
Endpoint Policy Manager Cloud will usually work using proxy servers with either HTTP or
HTTPS and should honor system-wide proxy settings.

:::


