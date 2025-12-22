---
title: "Company Details"
description: "Company Details"
sidebar_position: 50
---

# Company Details

The **Company Details** tab has several sections. Some sections involve settings related to the look
and feel of things, but many others are security related.

For an overview of the major Endpoint Policy Manager Cloud security features (2FA, admin roles,
notifications, IP block restrictions, etc.) check out this video:
[Endpoint Policy Manager Cloud: Security Features](/docs/endpointpolicymanager/deliverymethods/cloud/videos/security/features.md).

![web_interface_and_controls_70_624x296](/images/endpointpolicymanager/cloud/interface/companydetails/web_interface_and_controls_70_624x296.webp)

In the sections that follow,we cover the following items:

- Company Details: name, time zone, and computer registration mode
- Login restrictions: external IPs that are allowed to connect to Endpoint Policy Manager Cloud
- Company administrators: admins who can participate in your instance of Endpoint Policy Manager
  Cloud and their roles
- Downloads: additional information on downloads that was not covered in the Quickstart

Additionally, we'll explore the actions available to us in the **Company Details** tab:

- Add company admin
- Revoke company's certificate
- Edit notification configuration
- Customer log
- Edit customer-level portal policies
- User Requests
- Export company certificate as .PFX
- Configure Azure AD Access

## Company Details Section

Video: For an overview of this section, see this video:
[Endpoint Policy Manager Cloud: Strict vs. Loose Computer Registration Mode](/docs/endpointpolicymanager/deliverymethods/cloud/videos/upkeepanddailyuse/registrationmode.md).

The **Company Details** section under the **Company Details** tab allows you to change your company
display name and time zone, which is used for reporting on log files. However, the most important
setting in this section is the **Computer registration mode**, which has four options.

![web_interface_and_controls_71_624x518](/images/endpointpolicymanager/troubleshooting/cloud/underhood/web_interface_and_controls_71_624x518.webp)

This setting directs Endpoint Policy Manager Cloud on how to act when an endpoint computer is
already joined to Endpoint Policy Manager Cloud and attempts to re-register or claim another
license. This can occur when the client machine is wiped and reloaded with another operating system,
or when the Endpoint Policy Manager Cloud client is unloaded and then re-loaded.

Here is how the four modes operate:

- **Strict (always register a new computer)**- Even if Endpoint Policy Manager Cloud has seen the
  hardware UUID or MAC address of the client machine before, it will always create a new secure
  certificate connection, and treat the computer as if it has never been seen before. The computer
  then loses any existing group membership and is always (only) assigned back to the built-in
  **Unassigned** and **All** groups.
- **Loose (allow computers to recovery access by UUID)**- If a computer account already exists (and
  matches by hardware UUID only) then use that existing account. If a computer is already a member
  of company groups, that membership is maintained.
- **Loose (allow computers to recovery access by UUID or MAC Address)**- If a computer account
  already exists (and matches by hardware UUID only, or MAC address) then use that existing account.
  If a computer is already a member of company groups, that membership is maintained.
- **Advanced (always register a new computer and keep existing records)**- If a computer account
  already exists (and matches by hardware UUID or MAC address) then create a new record in Endpoint
  Policy Manager Cloud just as you would do in strict mode. The difference is that the record for
  the previous computer is not deleted. Thus multiple computers with the same hardware can be
  registered, each with their own unique record in Endpoint Policy Manager Cloud. This scenario is
  useful for VDI, where the machines act identical, but you need to register each one in a new way.

The default behavior is strict mode because it is the most secure.

:::note
Even in loose mode, Endpoint Policy Manager Cloud still verifies the client using the x509
certificate embedded into the MSI. Therefore, guessing the UUID or MAC address is not enough for an
unrelated person to join your Endpoint Policy Manager Cloud.

:::


