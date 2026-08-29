---
title: "What data is stored in PolicyPak Cloud, and how is that data safely communicated and stored ?"
description: "What data is stored in PolicyPak Cloud, and how is that data safely communicated and stored ?"
sidebar_position: 10
---

# Data stored in PolicyPak Cloud and how it's safely communicated and stored

## What is stored:

Netwrix PolicyPak Cloud stores a small amount of data from your organization after a computer joins PolicyPak Cloud.

:::note
PolicyPak Cloud never uses or stores usernames, passwords, OUs, domain names, or anything else.
:::


The following list details what PolicyPak Cloud stores in terms of endpoint data:

- PolicyPak UUID: This is random, unique ID generated in the cloud at "join time." It
  doesn't contain any computer-specific data, but it helps identify the computer when it
  checks in.
- Fingerprint: This is a SHA256 hash of hardware UUID and OS IDs. PolicyPak Cloud uses this as a unique computer
  ID to generate a unique license.
- MAC address: PolicyPak Cloud stores MAC addresses for all physical network adapters.
- BIOS UUID: This is a unique hardware ID assigned to every physical and virtual machine by the
  manufacturer. See the
  [TechTarget UUID definition](http://searchsoa.techtarget.com/definition/UUID) for background on
  BIOS UUID.
- Last known public IP address: PolicyPak Cloud stores this only for reporting and search on the website.
- OS version and build: PolicyPak Cloud stores this only for reporting. (e.g. Microsoft Windows NT 6.2.9200.0 or
  Microsoft Windows NT 6.1.7601 Service Pack 1)
- Computer name: The FQDN computer name it has been assigned.
- Check in times: First check in date and time and Last check in date and time.

##### Other items which are stored in PolicyPak Cloud are:

- XML Data files (Policies) that you upload.
- Group Names you create.
- Reports that you create.
- Names and email addresses of other administrators you have granted rights to use PolicyPak cloud
- Current licensing status and number of computers licensed.
- Events (if you turn on the PolicyPak Cloud Event Log Collector for your tenant.)
  For example, PolicyPak Cloud Service can store PolicyPak Least Privilege Manager events for a time (not enabled for all customers.) See
  [PolicyPak Cloud + PPLPM + Events: Collect Events in the Cloud](/docs/policypak/components/leastprivilegemanager/videolearningcenter/eventing/cloudevents.md)
  for details of this feature, and see
  [List of PolicyPak Event Categories and IDs](/docs/policypak/misc/knowledgebase/tipstricksandfaqs/eventcategories.md)
  for details about specific event types.

#### How is data is stored at rest with PolicyPak Cloud:

PolicyPak Cloud always encrypts all communication to and from the client machines.

PolicyPak Cloud stores customer data exclusively in USA datacenters. To ensure availability if there is an outage, PolicyPak Cloud distributes redundant copies of data between East and West coast USA datacenters. You can't select an alternative data residency region — locations such as Ireland or Germany aren't available at this time.

PolicyPak Cloud stores all data at rest in SQL Azure with the Transparent Data Encryption option enabled.

See Microsoft's
article[TDE Azure option information](https://msdn.microsoft.com/library/dn948096?f=255&MSPPError=-2147217396)
for additional information about TDE Azure.

See Microsoft's article More about TDE (in
general):[https://msdn.microsoft.com/en-us/library/bb934049](https://msdn.microsoft.com/en-us/library/bb934049):
"_Transparent Data Encryption (TDE) encrypts SQL Server and Azure SQL Database data files, known as
encrypting data at rest_. "

#### How is data communicated to and from PolicyPak Cloud:

PolicyPak Cloud always encrypts all communication to and from the client machines. Here is how the client attempts to communicate with PolicyPak Cloud:

- PolicyPak Cloud client tries HTTPS (secure HTTP) using port 443 first using an
  encrypted PolicyPak Cloud certificate the client received at "join" time.
- PolicyPak Cloud client then tries HTTP using port 80, but with a message-level
  algorithm suite that uses RSA15 as the key wrap algorithm, SHA256 for the signature digest, and
  256-bit Basic as the message encryption algorithm. In HTTP mode the PolicyPak Cloud
  client verifies the identity of the server using a hardcoded certificate.


