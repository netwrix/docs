---
title: "Licensing"
description: "Licensing"
sidebar_position: 20
---

# Licensing

Licensing Netwrix Endpoint Policy Manager (formerly PolicyPak) is easy. We have one tool to request
information about Active Directory and Intune.

:::note
For a video overview of the process, watch this tutorial:
[How to Request Licenses from Endpoint Policy Manager by Creating a "License Request Key"](/docs/endpointpolicymanager/licensing/videolearningcenter/requestall/licenserequestkey.md)
:::


Here are the basics:

- Endpoint Policy Manager is licensed on a per-client-computer basis. All client computers (desktop,
  laptop, and virtual desktop infrastructure [VDI]) must be licensed if you want Endpoint Policy
  Manager policies to apply and enforce settings.
- Endpoint Policy Manager is also licensed per concurrent-session-connection for your Terminal
  Services (RDS) or Citrix servers. All inbound Terminal Services (RDS) or Citrix XenApp connections
  must be licensed if you want Endpoint Policy Manager to apply and enforce settings.
- Endpoint Policy Manager can also be licensed in conjunction with an MDM service such as Intune,
  Workspace ONE, or MobileIron. This scenario is covered later in this guide and in detail in
  Appendix A: Using Endpoint Policy Manager with MDM and UEM Tools.

:::note
To be in compliance with Endpoint Policy Manager licensing, you must license inbound
Terminal Services (RDS) or Citrix connections. These are simply added to the count of your Endpoint
Policy Manager licenses. For instance, if you want to use Endpoint Policy Manager with 500 desktops,
200 laptops, and 100 concurrent Terminal Services or Citrix session connections, then you will need
800 Endpoint Policy Manager licenses. Full details of how Endpoint Policy Manager licenses Terminal
Services (RDS) or Citrix inbound connections can be found at the following link:
[https://www.policypak.com/purchasing/citrix-licensing-scenarios.html](http://www.policypak.com/purchasing/citrix-licensing-scenarios.html).
:::


In other words, to be fully compliant, you must license the number of computers in Active Directory
plus the inbound Terminal Services (RDS) and/or Citrix connections. If you don't wish to run
Endpoint Policy Manager on your Terminal Services (RDS) or Citrix machines, then these inbound
connections do not need to be declared at purchase time.

Once a computer is licensed, the trial mode restrictions are lifted. (The computer can be named
anything.) Virtual desktops (any VDI, including Windows Virtual Desktops) are licensed the same way
that real desktops and laptops are licensed. In short, we count the number of computer account
records in Active Directory. For most customers, all areas of Endpoint Policy Manager licensing are
handled by the Endpoint Policy Manager licensing tool (named LT.exe), which is included in the
Licensing for All On-Prem Products folder inside the ISO download.

Endpoint Policy Manager licenses themselves can be deployed within Group Policy Objects (GPOs), or
delivered via MSI. Client computers download the GPO with the license file or the MSI with the
license file, and automatically determine if they are licensed. Be aware that the Endpoint Policy
Manager licensing tool (LT) is used with the Active Directory solution method and Intune, and not
other MDM services like VMware Workspace ONE. In those cases, you'll work with your sales team to
demonstrate how many machines are MDM-enrolled.

:::note
To be in compliance with Endpoint Policy Manager licensing on Citrix and Terminal Services
(RDS), you must run LT on a server. When LT is run on a server, it is usually able to count Terminal
Services and Citrix connections and report them. Even if LT does not properly count the Citrix and
Terminal Services licenses, you are still bound by the End User License Agreement to report them for
licensing purposes.
:::


Endpoint Policy Manager's LT utility can also help you minimize costs by finding and disabling
unused computers. For instance, many organizations have dozens or hundreds of computers that have
not been logged onto for months. Since you pay on a per-computer basis with Endpoint Policy Manager
in Active Directory, we don't want you paying for computers you're not actually using. If you'd like
to find and disable unused computers, LT can help you do that before you make your initial license
request. If you want more information on this, jump to the section "Finding and Disabling Unused
Computers."

Licensing occurs in two phases:

- Phase I: Get a License Request Key.In this phase, LT will ask several questions—such as where you
  want to license it—and will then help you generate your license request. This license is usually
  good for one year, depending on your contract with Endpoint Policy Manager.
- Phase II: Re-run and get another License Request Key. Once the initial license year is up, you
  simply re-run the Endpoint Policy Manager LT utility each following year. LT will review existing
  installed licenses and do a count of computers. You need to perform this step every year
  (according to your Endpoint Policy Manager license agreement) to continue to use Endpoint Policy
  Manager. Otherwise, Endpoint Policy Manager will stop functioning on your anniversary date. You
  pay for any overage from the previous year.

## Finding and Disabling Unused Computers

We only want you to pay for the computers you're actually going to use with the Endpoint Policy
Manager. Endpoint Policy Manager's LT has an option, "Find and Disable unused computers," as seen in
Figure 12.

![licensing_policypak](/images/endpointpolicymanager/licensing_endpointpolicymanager.webp)

Figure 12. The option to disable unused computers.

When you select this option, you are led through an wizard that finds any computers that have not
been logged into for 90 days (or any other number of days you select). You can then select the
computers you want to disable and click "Next," as shown in Figure 13.

![licensing_policypak_1](/images/endpointpolicymanager/licensing_endpointpolicymanager_1.webp)

Figure 13. Selecting the unused computers.

Note that you can also choose to include computers that no users have ever logged onto. All
computers that you select will be disabled when you click "Next." By doing so, you will have fewer
computers in your count and thus fewer to pay for.

:::note
Endpoint Policy Manager's LT utility cannot re-enable accounts once they've been disabled.
Also, Endpoint Policy Manager's LT utility cannot move computer accounts after they are disabled.
:::


## Licensing Modes

Licensing with Endpoint Policy Manager involves the following items:

- A license for a component
- The component's capability if applicable (for instance, Least Privilege Manager has Standard and
  Complete capabilities)
- A scope
- For Active Directory: a whole Active Directory Domain or specific organizational units (OUs)
- For MDM: a specific UPN or company name
- For Endpoint Policy Manager Cloud: licensed by Endpoint Policy Manager Cloud
- An enablement method
- Group Policy
- MDM (used with your MDM provider)
- Endpoint Policy Manager Cloud
- XML Method (used alongside a UEM tool, like SCCM)

You can purchase some (or all) Paks, and then choose the enablement methods and dictate the licensed
scopes. In the XML example license file below, the customer has selected the following:

- Specific Paks which entitle them to specific policies and specific capabilities if applicable (for
  instance, Least Privilege Manager and Software Package Manager have specific capabilities)
- A whole domain for the scope (Fabrikam.com)
- Enablement methods "GP-POLICIES" and "XML-POLICIES"

  ```
  <?xml version="1.0" encoding="utf-8"?>
                  <universal_license>                
  <licensee_name>Example (Customertest)</licensee_name>                
  <start_date>2021-03-09</start_date>                
  <expiry_date>2021-03-31</expiry_date>                
  <never_expires>false</never_expires>                
  <scopes>                
  <scope type="AD" value="DC=fabrikam,DC=com" />                
  </scopes>                
  <capabilities>                
  <capability>gp-policies</capability>                
  <capability>xml-policies</capability>                
  <component id="1659c456-08fc-4359-b125-bb70ee34dd55" name="PolicyPak Browser Router" />                
  <component id="3557af76-7192-460b-a80c-393f7ca6220f" name="PolicyPak Java Rules Manager" />                
  <component id="f8357ae4-f4e0-49ec-ae9d-61078938e7cd" name="PolicyPak Application Settings Manager" />                
  <component id="e0088a46-ab54-4fbd-a733-303c58244c5e" name="PolicyPak Administrative Templates Manager" />                
  <component id="608ba33d-af06-46f9-9e6c-62495560024e" name="PolicyPak Preferences" />                
  <component id="342a05c5-2052-4c55-8996-a539707d21f4" name="PolicyPak Security Settings Manager" />                
  <component id="58de0268-6384-49e0-a333-20ec46654b82" name="PolicyPak Least Privilege Manager">                
  <capability>complete</capability>                
  </component>                
  <component id="132503f6-7a0c-4b31-9751-a049d4dd4a41" name="PolicyPak Group Policy Compliance Reporter (Endpoints)" />                
  <component id="ac57fc3e-861f-4425-b9ad-368722549a22" name="PolicyPak Remote Work Delivery Manager" />                
  <component id="993c3d17-e2bf-4562-8d86-14419e52977c" name="PolicyPak Software Package Manager">                
  <capability>appx</capability>                
  </component>                
  <component id="32f17e56-85b0-460f-b029-8eaa332f440b" name="PolicyPak File Associations Manager" />                
  <component id="d60c1153-50a6-469d-a1c1-9f58a35504fe" name="PolicyPak Start Screen And Taskbar Manager" />                
  <component id="a3421ea7-1c42-4c95-9908-4a73062da938" name="PolicyPak Feature Manager for Windows" />                
  <component id="4482335d-8fdd-47ee-b285-556df04f7f2f" name="PolicyPak VPN Manager" />                
  <component id="dacb03df-c80f-4031-99db-b11889ac74df" name="PolicyPak RDP Manager" />                
  <component id="3219bd7b-1a0a-4a49-976c-ce18e0086860" name="PolicyPak Scripts Manager" />                
  </capabilities>                
  <signature>ABCDEF==</signature>                
  </universal_license>                

  ```

The licensing modes are:

- Licensed Mode (temporary). When a computer is licensed (temporarily for 30 days or licensed for
  one year), it is permitted to process all directives intended for it. In Licensed Mode, there is
  no limit to the number of Endpoint Policy Manager directives a client machine will process and
  keep compliant.
- Trial Mode. Trial Mode functions similarly to Licensed Mode. Trial Mode enables you to try
  Endpoint Policy Manager very quickly in your test lab or real Active Directory. Trial Mode is
  enabled when your test computers' names have the word "computer" in them. For instance, a computer
  named "COMPUTER1" would automatically be in Trial Mode and act as if fully licensed. To see an
  example of how and why this works, see this video:
  [Testing and Troubleshooting By Renaming an endpoint Computer](/docs/endpointpolicymanager/deliverymethods/cloud/videos/testlabbestpractices/renameendpoint.md)

We want you to use this Endpoint Policy Manager in your testing similarly to how you would use it in
the real world. So in Trial Mode, we allow you to do the following:

- Deploy the client-side extension (CSE) to all the test machines you want to manage
- Install the GPMC admin console on a management station
- Fully test the software with any number of users and computers (provided the computer name has the
  word "computer" in it)

These restrictions allow you to use your own test lab or Active Directory OU to try the Endpoint
Policy Manager components. You'll be able to see what happens when you make central changes and
watch your clients react.

## Licensing Endpoint Policy Manager with Your Own MDM Service

Endpoint Policy Manager can be used in conjunction with your own MDM service, such as Workspace ONE
or MobileIron. However, licensing Endpoint Policy Manager with these utilities is a bit different
than licensing Endpoint Policy Manager with Active Directory or Intune. In short, you need to work
with your sales team to declare the number of Windows 10 machines you want to license. Typically,
you would use the MDM reporting system to express how many Windows 10 machines you have enrolled and
the number you plan add in the current year. All the details on exactly how to perform a count and
what to send back to Endpoint Policy Manager Sales can be found here:
[When licensing Endpoint Policy Managerwith an MDM provider, what do I need to send in to Endpoint Policy Manager? ](/docs/endpointpolicymanager/licensing/knowledgebase/requestingmdm/setup.md).

An example of an MDM system account with a very low number of machines can be seen in Figure 14.
Note that the company information is obscured in this demonstration, but you would have to provide
it.

![licensing_policypak_2](/images/endpointpolicymanager/licensing_endpointpolicymanager_2.webp)

Figure 14. An example of an MDM system account.

## License Requests

Once you have ensured that your license request contains all computers that you want to license,
save the file, and then deliver this to your Endpoint Policy Manager sales representative to receive
a license file.

:::note
The resulting XML file is tamper-proof and will be invalid if the number of elements is
changed after creation.
:::


## License Files

You may receive multiple license files for Endpoint Policy Manager:

To deploy your licenses, you can use the following:

Use these key installation instructions (which demonstrate Active Directory, SCCM, and MDM methods):
[How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)

## Licensing Endpoint Policy Manager Through Endpoint Policy Manager Cloud

Endpoint Policy Manager Cloud has a licensing mechanism build in. When a computer acquires a
license, it stays licensed unless it becomes unused for an amount of time. (See Appendix E: Endpoint
Policy Manager Cloud Quickstart and User Guide for more details on this.) However, there is one
caveat around a licensing scenario in which an acquired Endpoint Policy Manager Cloud license could
possibly enable the Active Directory method. Below is the breakdown of how this works.

### Legacy Endpoint Policy Manager Cloud monthly or yearly customers:

When clients consume licenses from Endpoint Policy Manager Cloud, they automatically pick up Group
Policy as well (for free). So if you're a Endpoint Policy Manager Cloud customer, you don't need to
also license the machine for Group Policy. Being able to use Group Policy as the settings delivery
mechanism is automatic because the client has consumed the Cloud license. In this way, you get a
free on-premise (Group Policy Edition) license automatically when a client has consumed a license
with Endpoint Policy Manager Cloud (and continues to check in within the check-in period). For
information on how to do this, see this video:
[Endpoint Policy ManagerStart Screen & Taskbar Manager: Manage non-domain joined machines using Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/components/startscreenandtaskbar/videos/methods/nondomainjoined.md).

### Endpoint Policy Manager Professional and Endpoint Policy Manager Enterprise Edition customers:

In this case, your Universal License key will have to be enabled for the Group Policy method. You
will not be able to automatically enable the Group Policy method when being licensed via Endpoint
Policy Manager Cloud.

### Endpoint Policy Manager SaaS/Cloud-only customers:

In this case, you cannot use Endpoint Policy Manager Cloud to enable the Group Policy method. If you
wish to enable the Group Policy method, you need to transition from Endpoint Policy Manager SaaS to
Endpoint Policy Manager Enterprise Edition or Endpoint Policy Manager Professional Edition. You can
still manage Active Directory joined machines, but you must use the Endpoint Policy Manager Cloud
delivery mechanism to perform the operation, and not Active Directory or a GPO.

## Final Licensing Thoughts

Once you've tested Endpoint Policy Manager, you'll be ready to become a part of the licensed
Endpoint Policy Manager family. The following are a few reminders on licensing:

- Endpoint Policy Manager is licensed on a per-computer basis.
- When Endpoint Policy Manager is fully licensed, the restriction on the computer name is lifted.
- The Endpoint Policy Manager client-side extension (CSE) will not function unless it's in Trial
  Mode (the computer name has the word "computer" in it) or the CSE has a time-based licensed where
  the scope is correct.

Note that you only need to install the CSE once on the client machines you want to use. When you are
unlicensed, Endpoint Policy Manager stops working. When you are licensed, it will fully process all
Endpoint Policy Manager directives.

Volume licenses and domain-wide licenses for Endpoint Policy Manager are available.

:::note
For an overview and FAQ of the licensing process, please visit:
[https://www.policypak.com/support-sharing/licensing-faq.html](http://www.policypak.com/support-sharing/licensing-faq.html).

:::


