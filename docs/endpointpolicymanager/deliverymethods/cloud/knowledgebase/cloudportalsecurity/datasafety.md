---
title: "What data is stored in Endpoint Policy Manager Cloud, and how is that data safely communicated and stored ?"
description: "What data is stored in Endpoint Policy Manager Cloud, and how is that data safely communicated and stored ?"
sidebar_position: 10
---

# What data is stored in Endpoint Policy Manager Cloud, and how is that data safely communicated and stored ?

## What is stored:

As expected, a small amount ofdata from your organization is stored within Netwrix Endpoint Policy
Manager (formerly PolicyPak) Cloud after a computer joins Endpoint Policy Manager cloud.

:::note
times At no times are any usernames, passwords, OUs, domain names, or anything else
utilized or stored within Endpoint Policy Manager Cloud.
:::


Below is a detailed list of what is stored within Endpoint Policy Manager Cloud with terms of
endpoint data

:

- Endpoint Policy Manager UUID: This is random, unique ID generated in the cloud at "join time." It
  doesn't contain any computer-specific data, but it helps us to identify the computer when it
  checks in.
- Fingerprint: This is a SHA256 hash of hardware UUID and OS IDs. This is used as a unique computer
  ID in order to generate a unique license.
- MAC address: All physical network adapters MAC addresses are stored in PPCloud.
- BIOS UUID: This is a unique hardware ID assigned to every physical and virtual machine by the
  manufacturer. (For more information on BIOS UUID, see
  [http://searchsoa.techtarget.com/definition/UUID](http://searchsoa.techtarget.com/definition/UUID))
- Last known public IP address: This is stored only for reporting and search on the website.
- OS version and build: This is stored only for reporting. (e.g. Microsoft Windows NT 6.2.9200.0 or
  Microsoft Windows NT 6.1.7601 Service Pack 1)
- Computer name: The FQDN computer name it has been assigned.
- Check in times: First check in date and time and Last check in date and time.

##### Other items which are stored in Endpoint Policy Manager Cloud are:

- XML Data files (Policies) that you upload.
- Group Names you create.
- Reports that you create.
- Names and email addresses of other administrators you have granted rights to use Endpoint Policy
  Manager cloud
- Current licensing status and number of computers licensed.
- Events (if the Endpoint Policy Manager Cloud Event Log Collector is turned on for your tenant.)
  For example Endpoint Policy Manager Least Privilege Manager events which can be stored for a time
  in Endpoint Policy Manager Cloud Service (not enabled for all customers.) Details of this feature
  can be seen
  at[Endpoint Policy Manager Cloud + PPLPM + Events: Collect Events in the Cloud](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/eventing/cloudevents.md)
  and details about specific event types (for example) can be found here:
  [List of Endpoint Policy Manager Event Categories and IDs](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/tipstricksandfaqs/eventcategories.md)

#### How is data is stored at rest with Endpoint Policy Manager Cloud:

All communication to and from the client machines with Endpoint Policy Manager Cloud is always
encrypted.

At rest, we store all the data in SQL Azure, and have Transparent Data Encryption option enabled.

See Microsoft's
article[TDE Azure option information](https://msdn.microsoft.com/library/dn948096?f=255&MSPPError=-2147217396)
for additional information about TDE Azure.

See Microsoft's article More about TDE (in
general):[https://msdn.microsoft.com/en-us/library/bb934049](https://msdn.microsoft.com/en-us/library/bb934049):
"_Transparent Data Encryption (TDE) encrypts SQL Server and Azure SQL Database data files, known as
encrypting data at rest_. "

#### How is data communicated to and from Endpoint Policy Manager Cloud:

All communication to and from the client machines with Endpoint Policy Manager Cloud is always
encrypted. Here is how the client attempts to communicate with Endpoint Policy Manager Cloud:

- Endpoint Policy Manager Cloud client tries HTTPS (secure HTTP) using port 443 first using an
  encrypted Endpoint Policy Manager Cloud certificate the client received at "join" time.
- Endpoint Policy Manager Cloud client then tries HTTP using port 80, but with a message-level
  algorithm suite that uses RSA15 as the key wrap algorithm, SHA256 for the signature digest, and
  256-bit Basic as the message encryption algorithm. In HTTP mode the Endpoint Policy Manager Cloud
  client verifies the identity of the server using a hardcoded certificate.


