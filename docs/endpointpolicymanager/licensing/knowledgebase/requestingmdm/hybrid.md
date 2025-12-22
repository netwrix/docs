---
title: "How do I license Endpoint Policy Manager if I use Azure / Azure Active Directory / Azure Active Directory Domain Services / AD Domain Controllers in Azure?"
description: "How do I license Endpoint Policy Manager if I use Azure / Azure Active Directory / Azure Active Directory Domain Services / AD Domain Controllers in Azure?"
sidebar_position: 40
---

# How do I license Endpoint Policy Manager if I use Azure / Azure Active Directory / Azure Active Directory Domain Services / AD Domain Controllers in Azure?

You might want to license Netwrix Endpoint Policy Manager (formerly PolicyPak) when you are using
Azure. The challenge is knowing what you mean and need by Azure.

As such, there are a few scenarios where you could possibly need to license Endpoint Policy Manager
along with Azure.

## No Azure at all, using traditional Active Directory (usually with Server 2016, 2019, etc.)

In this case there is no Azure really involved at all. Instead, you are using the tried and true
Active Directory running Domain Controllers, which comes with Group Policy. Typically, but not
always, these servers are on-prem. We will explore the the idea that they don't have to be on-prem a
little later.

![515_1_image-20191025230525-1](/images/endpointpolicymanager/license/mdm/515_1_image-20191025230525-1.webp)

In this case, you can license Endpoint Policy Manager with Endpoint Policy Manager Group Policy
Edition or Endpoint Policy Manager Cloud Edition.

- See All Things Licensing > [Knowledge Base](/docs/endpointpolicymanager/)
- See Cloud edition: [Endpoint Policy Manager Cloud: QuickStart](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/quickstart.md)
- See[Endpoint Policy ManagerCloud and Endpoint Policy Manager OnPremise – Together using PPCloud Licenses](/docs/endpointpolicymanager/deliverymethods/cloud/videos/usingwithothermethods/onpremise.md)

## Azure Active Directory (also known as AAD) with or without an MDM service.

Azure Active Directory (AAD) is not the traditional AD in the cloud. It is a directory service which
has a job to create identity to services.

![515_3_image-20191025230525-2](/images/endpointpolicymanager/license/mdm/515_3_image-20191025230525-2.webp)

It has no Group Policy and has no real device management. There are two ways you can use Azure AD:
with and without an MDM service.

1 — Using Azure AD alongside an MDM service

You can augment Azure & Azure AAD with an MDM service like Microsoft Intune, WorkSpace ONE or Citrix
CEM to do more Windows management, but it is not Group Policy.

Here is what a machine looks like when it is MDM enrolled and registered in your Azure Active
Directory.

![515_5_image-20191025230525-3](/images/endpointpolicymanager/license/mdm/515_5_image-20191025230525-3.webp)

As such, you might want to add Endpoint Policy Manager to your existing MDM service to give you the
ability to take existing traditional AD Group Policy settings and migrate them to MDM. Additionally,
you get all the Endpoint Policy Manager features as well.

For this method, you are not licensing Azure Active Directory, but rather your MDM service.

- See
  [When licensing Endpoint Policy Managerwith an MDM provider, what do I need to send in to Endpoint Policy Manager? ](/docs/endpointpolicymanager/licensing/knowledgebase/requestingmdm/setup.md)for
  additional information on how to express the UPN and number of licenses needed for licensing your
  MDM service
- [Endpoint Policy Manager and MDM walk before you run](/docs/endpointpolicymanager/deliverymethods/mdm/videos/gettingstarted/testsample.md)
- See Getting Started with MDM > [Video Learning Center](/docs/endpointpolicymanager/deliverymethods/mdm/videos/videolearningcenter.md)

2 — Azure AD with no MDM service

Many Endpoint Policy Manager customers choose to go with Azure AD and no MDM serviceThis is because
Endpoint Policy Manager can provide much of what customers need of an MDM service, without the extra
cost and moving parts.

To do this, you would need to add Endpoint Policy Manager Cloud to your Azure AD by installing the
Endpoint Policy Manager Cloud client on your .

See [Endpoint Policy Manager Cloud: QuickStart](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/quickstart.md) for additional
information on getting started and licensing with Endpoint Policy Manager Cloud edition

## AD Domain Controllers as VMs in Azure

From time to time we see customers who have created an AD Domain Controller in a VM in Azure. This
could be a fresh domain, or a peer domain controller syncing with the other Domain Controllers they
have. You typically need a magic VPN tunnel between your existing (typically on-prem) infrastructure
and your AD Domain Controller as VMs in Azure to make this work.

Again, this would be an extended use case of traditional AD Domain Controllers which use Group
Policy. Clients join the domain, and they're off to the races.

You would typically use Group Policy edition and license a whole domain, OU or OUs.

Alternatively, you can use Endpoint Policy Manager Cloud edition and license each machine.

- See All Things Licensing > [Knowledge Base](/docs/endpointpolicymanager/)
- [Endpoint Policy Manager Cloud: QuickStart](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/quickstart.md)
- See
  [Endpoint Policy ManagerCloud and Endpoint Policy Manager OnPremise – Together using PPCloud Licenses](/docs/endpointpolicymanager/deliverymethods/cloud/videos/usingwithothermethods/onpremise.md)

## Azure AD Domain Services (AS DS)

Azure AD Domain Services is something we rarely ever see at Endpoint Policy Manager, but we will
support it.

The use case for Azure AD Domain Services is, typically, to have some existing on-prem
infrastructure that you want to lift and shift into VMs in Azure. Maybe this is an IIS server, or a
time card server which relies on Kerberos or other "traditional AD" technology.

As such, Azure AD Domain Services is a way to have a function in Azure which pretends to be
traditional AD. Then your VMs (which you lifted and shifted) then have something to join.

After that, this new domain can be taught to trust your original on-prem infrastructure so resources
can be shared.

Endpoint Policy Manager can be used with Azure AD Domain Services, because the servers you have
lifted and shifted are joined to Azure AD Domain Services, just like they would be in a traditional
AD domain.

You need to license the Endpoint Policy Manager Group Policy edition and enumerate the whole domain
and all machines joined (again, typically servers and not laptops or desktops) could make use of
Endpoint Policy Manager.

There are , so be sure to read this important Microsoft entry:
[ Administer Group Policy in a Microsoft Entra Domain Services managed domain](https://learn.microsoft.com/en-us/entra/identity/domain-services/manage-group-policy)

Regardless, Endpoint Policy Manager will work in this setup just fine when you license the Endpoint
Policy Manager Group Policy Edition.

## Additional reading and thinking ahead

See
[Azure Active Directory, Active Directory Domain Services – What’s the difference?](https://netwatch.me/2019/05/azure-active-directory-domain-services-active-directory-whats-the-difference/)
for additional information on all the Azure vocabulary and scenarios.

If there are other cases that you might have which are not covered in this document, please email
support at policypak.com so we can try to express how to license Endpoint Policy Manager with your
scenario.

