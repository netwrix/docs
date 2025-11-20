---
title: "Knowledge Base"
description: "Knowledge Base"
sidebar_position: 10
---

# Knowledge Base

See the following Knowledge Base articles for all things installation and upkeep.

## Method GPO: Initial Install

- [Does Endpoint Policy Manager admin console need to be installed on Domain Controller (DC)?](/docs/endpointpolicymanager/installation/knowledgebase/gpoinitialinstall/adminconsole.md)
- [I installed the Admin Console MSI, but I don't see the Endpoint Policy Manager node when I go to edit a GPO. Why?](/docs/endpointpolicymanager/installation/knowledgebase/gpoinitialinstall/node.md)
- [What are the two ways that can I install the GPMC on my Admin Station (Server or Windows 10) machine?](/docs/endpointpolicymanager/installation/knowledgebase/gpoinitialinstall/methods.md)
- [When I edit the GPO, the settings don't seem to "stick"](/docs/endpointpolicymanager/installation/knowledgebase/gpoinitialinstall/savesettings.md)

## Method SCCM: Initial Install (or other systems)

- [How do I deploy the Endpoint Policy Manager CSE via SCCM (or other systems management system) ?](/docs/endpointpolicymanager/installation/knowledgebase/sccminitialinstall/sccm.md)

## Method PDQ Deploy (recommended)

- [Managing Group Policy using Endpoint Policy Manager and PDQ Deploy](/docs/endpointpolicymanager/installation/knowledgebase/methodpdqdeploy/pdqdeploy.md)

## AntiVirus and other System Software

- [I want to use Endpoint Policy Managerwith Citrix App Layering (aka Unidesk). At which layer should I implement the Endpoint Policy Manager Client Side Extension?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/citrixapplayering.md)
- [How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/antivirus.md)
- [Why am I prompted about a Digitally Signed Driver for Endpoint Policy Manager CSE (and how do I work around it)?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/digitallysigneddriver.md)
- [Why won't the Endpoint Policy Manager services start, with an error like (or similar to) "Verify that you have sufficient privileges to start system services."?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/sufficientprivileges.md)

## Performance Related Questions

- [I see many instances of the Endpoint Policy Manager Watcher (ppWatcher) service running on my clients, is that normal? And how can I check memory usage?](/docs/endpointpolicymanager/upgrademaintenance/performancequestions/watcherservicememoryusage.md)
- [How would I verify if Endpoint Policy Manager Client Side Extension is / is not causing high or CPU disk slowdowns?](/docs/endpointpolicymanager/upgrademaintenance/performancequestions/cpuslowdown.md)

## Install and Upgrade Troubleshooting

- [The CSE won't uninstall or allow in-place upgrade. What should I do?](/docs/endpointpolicymanager/installation/knowledgebase/installandupgrade/uninstall.md)
- [How do I troubleshoot slow logins (or other login problems), user profile issues, explorer.exe or other Windows problems? What if I'm having problems on ONE (or very few PCs)?](/docs/endpointpolicymanager/installation/knowledgebase/installandupgrade/slowlogins.md)
- [What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)](/docs/endpointpolicymanager/installation/knowledgebase/installandupgrade/newversionissues.md)
- [How do I enable a STANDARD USER to see the COMPUTER SIDE RsOP ?](/docs/endpointpolicymanager/installation/knowledgebase/installandupgrade/computersidersop.md)
- [I am getting an error about "GPSVC failed at sign-in". This error occurs exactly one time. What does this mean?](/docs/endpointpolicymanager/installation/knowledgebase/installandupgrade/gpsvcfailed.md)
- [The removal of the assignment of application Endpoint Policy Manager Client-Side Extension (32bit) from policy failed](/docs/endpointpolicymanager/installation/knowledgebase/installandupgrade/assignmentremovalfailed.md)

## Misc Installation questions

- [What if I accidentally install the 32 bit version of Endpoint Policy Manager on a 64 bit machine or vice versa?](/docs/endpointpolicymanager/installation/knowledgebase/miscquestions/bitversion.md)
- [Why does Endpoint Policy Manager require a CSE / client installation piece? I want to do it all using what Microsoft ships in the box but don't want to install anything else.](/docs/endpointpolicymanager/installation/knowledgebase/miscquestions/why.md)
- [How can I fix Outlook To-Do bar flashing when GP or Endpoint Policy Manager does a background refresh?](/docs/endpointpolicymanager/installation/knowledgebase/miscquestions/outlook.md)
- [What must I install on Windows 7 to make Endpoint Policy Manager work as expected?](/docs/endpointpolicymanager/installation/knowledgebase/miscquestions/windows7.md)

## Best Practices / Keeping up to Date with releases

- [Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/rings.md)
- [What are the Endpoint Policy Manager Build and Version numbers?](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/versions.md)
- [When should I upgrade or not upgrade the Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/frequency.md)
- [How often is Endpoint Policy Manager updated? And, must I update to the latest version? Are all versions supported?](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/frequency_1.md)
- [How to trigger an update of the Endpoint Policy ManagerClient Side Extension and Cloud Client via command line using Endpoint Policy Manager Cloud versus Group Policy (OnPrem) Edition](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/commandline.md)

## Updating Endpoint Policy Manager with Active Directory / GPOs

- [How can I roll out the latest Endpoint Policy Manager CSE with Active Directory in a controlled manner using Rings ?](/docs/endpointpolicymanager/installation/knowledgebase/updating/ringsupgrade.md)
- [CSE Autoupdate Update.Config file Usage and Parameters (before CSE 2725)](/docs/endpointpolicymanager/installation/knowledgebase/updating/config.md)
- [How can I use the Endpoint Policy ManagerPowerShell module to know which GPOs have any Endpoint Policy Manager data or directives?](/docs/endpointpolicymanager/installation/knowledgebase/updating/datadirectives.md)

## Backup and Restore

- [Endpoint Policy Manager details with GPO contents appear deleted. How can I restore them?](/docs/endpointpolicymanager/installation/knowledgebase/backupandrestore/restoredetails.md)

## Uninstallation or Rollback of Endpoint Policy Manager

- [How do I uninstall Endpoint Policy Manager?](/docs/endpointpolicymanager/installation/knowledgebase/uninstallation/uninstall.md)
- [How to Rollback CSE version from newer to older using PowerShell](/docs/endpointpolicymanager/installation/knowledgebase/uninstallation/rollback.md)
- [How can I uninstall the Least Privilege Manager client for MacOS?](/docs/endpointpolicymanager/installation/knowledgebase/uninstallation/uninstall_1.md)

