# Knowledge Base

See the following Knowledge Base articles for information regarding Endpoint Policy Manager
licensing.

## Licenses FAQ for Active Directory (GPO and SCCM)

- [Will I need a license server to manage my Endpoint Policy Manager licenses?](../activedirectory/server.md)
- [What if we license one OU, say, Sales Computers OU, then during the year we also want to license a peer OU, like Marketing Computers OU?](../activedirectory/ou.md)
- [We purchased our Endpoint Policy Manager license for a parent OU in our Active Directory structure. What happens if we need to add additional sub-OUs inside of the parent one? How will this affect our licensing?](../activedirectory/ousub.md)
- [We purchased our Endpoint Policy Manager license for a parent OU in our Active Directory structure. What happens if we need to add additional sub-OUs inside of the parent one? How will this affect our licensing?](../activedirectory/ousub.md)
- [I'm an OU admin and not a domain administrator. Can I use Endpoint Policy Manager in my OU and not the whole domain?](../activedirectory/domainou.md)
- [I can only EDIT GPOs and not create them. Can I still use Endpoint Policy Manager?](../activedirectory/gpoedit.md)
- [I want to license the whole domain (or main OU), but I don't want to pay for every computer in that domain (or main OU)](../activedirectory/domain.md)
- [I have multiple domains. How is that licensed?](../activedirectory/domainmultiple.md)
- [Why does License Tool ask Who am I and Where do I want to use Endpoint Policy Manager?](../activedirectory/scope.md)
- [Does the Licensing Tool (LT.exe) count disabled Active Directory computer accounts ?](../activedirectory/disabledcomputer.md)
- [Does LT count users?](../activedirectory/users.md)
- [The License Tool (LT) isn't permitting me to install License Files (or I am using AGPM, GPA, or GPOAdmin.) What should I try?](../activedirectory/wizard.md)
- [Licence Tool recommends I enforce the links on the licensing GPOs. Should I do this, and why is this recommended?](../activedirectory/enforced.md)

## Licensing FAQ and Troubleshooting: Endpoint Policy Manager Cloud

- [How do I license machines to work on-premise if I'm an Endpoint Policy Manager Cloud Customer?](../cloud/onpremise.md)
- [How do I stop getting emails which say : "You have less than X% of your Endpoint Policy Manager licenses available for your company"](../cloud/notifications.md)
- [How do I understand my cloud licenses?](../cloud/licensestatus.md)
- [How exactly does monthly billing work with Endpoint Policy Manager SaaS Edition?](../cloud/billing.md)
- [ What happens if PPCloud computers are offline for more than 7 days?](../cloud/reclaimed.md)

## Requesting Licenses FAQ and Troubleshooting (all Methods)

- [What is the fastest way to get started in an Endpoint Policy Manager trial, without running the License Request Tool?](../trial.md)
- [Why do I have to run the licensing tool / what information is gathered and sent to Endpoint Policy Manager for my trial (or becoming a customer?)](../tool.md)
- [What Logs do I need to send for troubleshooting LT (License Tool) or other MMC / .Net related functions?](../../troubleshooting/license/logs.md)
- [How do I manually count the number of computers in Intune, and manually acquire the Intune "Company Name?"](../mdm/intune.md)
- [What are the most common questions about editing policies using the Endpoint Policy ManagerCloud policy editor (instead of using the MMC to upload to Endpoint Policy Manager Cloud?)](../../cloud/policy/edit.md)

## Requesting Licenses FAQ and Troubleshooting (Virtualization, Citrix, WVD, etc.)

- [How are Terminal Services and/or Citrix connections licensed?](../virtualization/terminalservices.md)
- [How do I license my Citrix, RDS, WVD, VDI or other multi-session Windows version with Endpoint Policy Manager Cloud ?](../virtualization/multisession.md)
- [Why must I run LT from a Windows Server if I want to properly count Citrix / Terminal Services / RDS connections?](../virtualization/tool.md)
- [What must I show to prove my current RDS and/or Citrix, or other Multi-Session windows concurrent license count for Endpoint Policy Manager Cloud (or if on-prem LT cannot auto-discover them)?](../virtualization/count.md)
- [Are there any special Endpoint Policy Manager licensing issues for virtual desktops?](../virtualization/desktops.md)

## Licensing: Requesting Licenses: MDM

- [When licensing Endpoint Policy Managerwith an MDM provider, what do I need to send in to Endpoint Policy Manager? ](../mdm/setup.md)
- [If I have both Azure joined and Hybrid Azure AD joined machines, how do I count the exact number of licenses I need?](../mdm/entraid.md)
- [What if I have multiple domain names within the MDM I want to license?](../mdm/domainmultiple.md)
- [How do I license Endpoint Policy Manager if I use Azure / Azure Active Directory / Azure Active Directory Domain Services / AD Domain Controllers in Azure?](../mdm/hybrid.md)
- [How are BYOD "Workplace Joined" (aka Intune Registered) counted toward licensing?](../mdm/jointype.md)
- [I'm having trouble running the Licensing Tool (LT) and counting computers with Intune. What troubleshooting information can I send Endpoint Policy Manager support?](../mdm/tool.md)
- [What is the difference if I license my MDM machines' CSE using COMPANY NAME vs. UPN name?](../mdm/name.md)
- [Why does the Endpoint Policy Manager Licensing Tool (LT.EXE) require admin rights to query for Intune / Azure data?](../mdm/adminrights.md)

## Licensing: Installing Licenses: All Methods

- [What is the best way to roll out New Universal licenses if I already have Original licenses?](../universal.md)
- [I received multiple license files back from the Sales team (one for each Endpoint Policy Manager component.) Should I install all of them?](../filemultiple.md)

## Licensing Troubleshooting: All Methods

- [How can I tell how a machine is licensed (by GPO, MDM, or XML file), and also know for what components it is licensed?](../../troubleshooting/license/components.md)
- [I have a pop-up saying "License expires soon" or "Licenses expire in X days" when editing a GPO. What do I do?](../../troubleshooting/license/expires.md)
- [How do I turn on MMC Snap in Logs (for troubleshooting MMC Editing or Licensing Import)?](../../troubleshooting/license/mmcsnapinlogs.md)
- [I unlicensed my machine by removing a universal license, my machine still appears licensed. Why is this?](../../troubleshooting/license/universal.md)
- [Action Required for Endpoint Policy Manager Customers using Legacy Licenses](../../troubleshooting/license/legacy.md)
- [How do I make the Grace Period licensing pop-up go away?](../../troubleshooting/license/graceperiod.md)
- [Action Recommended Endpoint Policy Manager Customers to transition from "Enterprise" Licenses to "Enterprise Full" licenses.](../../troubleshooting/license/enterprisefull.md)
- [Gathering License Tool logs (LT.exe)](../../troubleshooting/license/toollogs.md)

## Licensing Troubleshooting and Un-Licensing: Active Directory (GPO and SCCM)

- [What happens to each component when Endpoint Policy Manager gets unlicensed or the GPO or policy no longer applies?](../unlicense/components.md)
- [My organization doesn't permit me to run the LT (Endpoint Policy Manager Licensing Tool) or provide the XML information it produces. What are my other options?](../unlicense/options.md)
- [What if I want to unlicense specific components via ADMX or Endpoint Policy Manager Cloud?](../unlicense/componentscloud.md)
- [I just installed new license files / new GPOs. Should I keep or delete the old license files / GPOs?](../unlicense/fileold.md)
- [How do I specifically exclude or prevent a component from performing processing by modifying the license file?](../unlicense/componentsexclude.md)
- [How can I verify, test and/or reset my Domain Join (aka SecureChannel) from the endpoint to domain controller?](../unlicense/reset.md)
- [Why is Endpoint Policy Manager Preferences (original version) "forced disabled" by default?](../unlicense/forceddisabled.md)

## Misc Licensing Questions

- [When and why would I license Endpoint Policy Manager on servers?](../whenwhy.md)
- [What items and components are licensed, and what components are free?](../components.md)
- [Why must I transition from Legacy to Universal licenses (and what are the differences?)](../transition.md)
