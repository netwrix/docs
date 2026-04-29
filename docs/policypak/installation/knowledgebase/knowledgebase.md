---
title: "Knowledge Base"
description: "Knowledge Base"
sidebar_position: 10
---

# Knowledge Base

See the following Knowledge Base articles for all things installation and upkeep.

## Method GPO: Initial Install

- [Does PolicyPak admin console need to be installed on Domain Controller (DC)?](/docs/policypak/installation/knowledgebase/gpoinitialinstall/adminconsole.md)
- [I installed the Admin Console MSI, but I don't see the PolicyPak node when I go to edit a GPO. Why?](/docs/policypak/installation/knowledgebase/gpoinitialinstall/node.md)
- [What are the two ways that can I install the GPMC on my Admin Station (Server or Windows 10) machine?](/docs/policypak/installation/knowledgebase/gpoinitialinstall/methods.md)
- [When I edit the GPO, the settings don't seem to "stick"](/docs/policypak/installation/knowledgebase/gpoinitialinstall/savesettings.md)

## Method SCCM: Initial Install (or other systems)

- [How do I deploy the PolicyPak CSE via SCCM (or other systems management system) ?](/docs/policypak/installation/knowledgebase/sccminitialinstall/sccm.md)

## Method PDQ Deploy (recommended)

- [Managing Group Policy using PolicyPak and PDQ Deploy](/docs/policypak/installation/knowledgebase/methodpdqdeploy/pdqdeploy.md)

## AntiVirus and other System Software

- [I want to use PolicyPakwith Citrix App Layering (aka Unidesk). At which layer should I implement the PolicyPak Client Side Extension?](/docs/policypak/upgrademaintenance/antivirussystemsoftware/citrixapplayering.md)
- [How must I configure my Anti-virus or system-level software to work with PolicyPak CSE?](/docs/policypak/upgrademaintenance/antivirussystemsoftware/antivirus.md)
- [Why am I prompted about a Digitally Signed Driver for PolicyPak CSE (and how do I work around it)?](/docs/policypak/upgrademaintenance/antivirussystemsoftware/digitallysigneddriver.md)
- [Why won't the PolicyPak services start, with an error like (or similar to) "Verify that you have sufficient privileges to start system services."?](/docs/policypak/upgrademaintenance/antivirussystemsoftware/sufficientprivileges.md)

## Performance Related Questions

- [I see many instances of the PolicyPak Watcher (ppWatcher) service running on my clients, is that normal? And how can I check memory usage?](/docs/policypak/upgrademaintenance/performancequestions/watcherservicememoryusage.md)
- [How would I verify if PolicyPak Client Side Extension is / is not causing high or CPU disk slowdowns?](/docs/policypak/upgrademaintenance/performancequestions/cpuslowdown.md)

## Install and Upgrade Troubleshooting

- [The CSE won't uninstall or allow in-place upgrade. What should I do?](/docs/policypak/installation/knowledgebase/installandupgrade/uninstall.md)
- [How do I troubleshoot slow logins (or other login problems), user profile issues, explorer.exe or other Windows problems? What if I'm having problems on ONE (or very few PCs)?](/docs/policypak/installation/knowledgebase/installandupgrade/slowlogins.md)
- [What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)](/docs/policypak/installation/knowledgebase/installandupgrade/newversionissues.md)
- [How do I enable a STANDARD USER to see the COMPUTER SIDE RsOP ?](/docs/policypak/installation/knowledgebase/installandupgrade/computersidersop.md)
- [I am getting an error about "GPSVC failed at sign-in". This error occurs exactly one time. What does this mean?](/docs/policypak/installation/knowledgebase/installandupgrade/gpsvcfailed.md)
- [The removal of the assignment of application PolicyPak Client-Side Extension (32bit) from policy failed](/docs/policypak/installation/knowledgebase/installandupgrade/assignmentremovalfailed.md)

## Misc Installation questions

- [What if I accidentally install the 32 bit version of PolicyPak on a 64 bit machine or vice versa?](/docs/policypak/installation/knowledgebase/miscquestions/bitversion.md)
- [Why does PolicyPak require a CSE / client installation piece? I want to do it all using what Microsoft ships in the box but don't want to install anything else.](/docs/policypak/installation/knowledgebase/miscquestions/why.md)
- [How can I fix Outlook To-Do bar flashing when GP or PolicyPak does a background refresh?](/docs/policypak/installation/knowledgebase/miscquestions/outlook.md)
- [What must I install on Windows 7 to make PolicyPak work as expected?](/docs/policypak/installation/knowledgebase/miscquestions/windows7.md)

## Best Practices / Keeping up to Date with releases

- [Using Rings to Test and Update the PolicyPak Client-Side Extension and/or Cloud Client (And How to Stay Supported)](/docs/policypak/upgrademaintenance/bestpractices/rings.md)
- [What are the PolicyPak Build and Version numbers?](/docs/policypak/upgrademaintenance/bestpractices/versions.md)
- [When should I upgrade or not upgrade the PolicyPak CSE?](/docs/policypak/upgrademaintenance/bestpractices/frequency.md)
- [How often is PolicyPak updated? And, must I update to the latest version? Are all versions supported?](/docs/policypak/upgrademaintenance/bestpractices/frequency_1.md)
- [How to trigger an update of the PolicyPakClient Side Extension and Cloud Client via command line using PolicyPak Cloud versus Group Policy (OnPrem) Edition](/docs/policypak/upgrademaintenance/bestpractices/commandline.md)

## Updating PolicyPak with Active Directory / GPOs

- [How can I roll out the latest PolicyPak CSE with Active Directory in a controlled manner using Rings ?](/docs/policypak/installation/knowledgebase/updating/ringsupgrade.md)
- [CSE Autoupdate Update.Config file Usage and Parameters (before CSE 2725)](/docs/policypak/installation/knowledgebase/updating/config.md)
- [How can I use the PolicyPakPowerShell module to know which GPOs have any PolicyPak data or directives?](/docs/policypak/installation/knowledgebase/updating/datadirectives.md)

## Backup and Restore

- [PolicyPak details with GPO contents appear deleted. How can I restore them?](/docs/policypak/installation/knowledgebase/backupandrestore/restoredetails.md)

## Uninstallation or Rollback of PolicyPak

- [How do I uninstall PolicyPak?](/docs/policypak/installation/knowledgebase/uninstallation/uninstall.md)
- [How to Rollback CSE version from newer to older using PowerShell](/docs/policypak/installation/knowledgebase/uninstallation/rollback.md)
- [How can I uninstall the Least Privilege Manager client for MacOS?](/docs/policypak/installation/knowledgebase/uninstallation/uninstall_1.md)

