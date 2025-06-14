# Knowledge Base

See the following Knowledge Base articles for Application Manager.

## General Configuration & Operation

- [What if I am having trouble getting the Licensing GPO installed?](../../troubleshooting/applicationsettings/license/gpo.md)
- [What happens to Application Settings Manager settings when the Endpoint Policy Manager license expires / if my company chooses not to renew?](../../troubleshooting/applicationsettings/gpooutofscope.md)
- [Is there an easy way to back up the GPO's I configured with Application Manager?](../../troubleshooting/applicationsettings/backup/gpos.md)
- [Can I Export my GPO settings so that they can be used in the future to create similar GPOs?](../../troubleshooting/applicationsettings/export/gpos.md)
- [How many Endpoint Policy Manager policies can I create within one Group Policy Object?](../../troubleshooting/applicationsettings/limitations.md)
- [We upgraded our DLL files recently after creating a new Pak with Design Studio. After the implementation we would like to revert back to the original Pak. I have a local copy of the former DLL. Can I downgrade to the curre](../../troubleshooting/applicationsettings/downgrade.md)
- [Application Manager Roles and Responsibilities](../rolesresponsibilities.md)
- [I deselected the Applock feature, Disable whole tab in target application, but the elements are still grayed out. How can I fix this?](../../troubleshooting/applicationsettings/applock/feature.md)
- [I am selecting values for certain settings for the Lync client. On the Alerts tab, I am selecting and deselecting various radio buttons but none of these selections are being underlined. Why is this?](../../troubleshooting/applicationsettings/lyncclient.md)
- [I am configuring the values for some settings for an application. Many of these settings involve checkmarks which are unchecked by default. How can I tell if an unchecked checkbox is being delivered or not?](../../troubleshooting/applicationsettings/checkmarks.md)
- [How can I use the Endpoint Policy ManagerCentral store (if I was already using the Endpoint Policy Manager Local store?)](../centralstore.md)
- [How can I keep abreast of the latest Endpoint Policy Manager updates as they are released?](../../troubleshooting/latestupdates.md)
- [Should I create Endpoint Policy Application Manager policies on the USER or COMPUTER side?](../side.md)
- [What is the difference between running the gp update (Microsoft) and ppupdate (Endpoint Policy Manager) commands?](../../troubleshooting/applicationsettings/updatedcommands.md)
- [Does Application Manager work when the machine is NOT US-English (say, Italian or Russian?)](../../troubleshooting/applicationsettings/language.md)
- [Can Application Manager help me in pushing, assigning or configuring printers?](../printers.md)
- [Can I deploy the Application Manager settings I've configured as a one-time only deployment like Group Policy Preferences does?](../onetime.md)
- [Are there any required permission settings for a Endpoint Policy ManagerAdministrator to store Endpoint Policy Manager Suite DLL Extensions to the central store?](../../troubleshooting/applicationsettings/permissions.md)
- [Should I backup my Pak files?](../../troubleshooting/applicationsettings/backup/files.md)
- [I'm trying to find a particular font setting in one of your Word Paks but I can't find it. Is the setting not supported?](../../troubleshooting/applicationsettings/fontsetting.md)
- [Is there a particular naming scheme I need to use when compiling my Paks within Design Studio?](../../troubleshooting/applicationsettings/designstudio.md)
- [I need to modify the Pak (DLL file) of one of the applications I control with Application Manager. Will I lose my group policy settings after I modify the DLL file](../../troubleshooting/applicationsettings/modifydll.md)
- [I installed Design Studio on a Windows 7 Laptop but there are still some XP and Vista stations in our network. Will the Paks I create work for all three operating system?](../../requirements/support/applicationsettings/designstudiowindows7.md)
- [Should I put lots of Paks (or other PP directives into one GPO?)](../../troubleshooting/applicationsettings/onegpo.md)
- [How-to gain access of a remote computer using built-in Windows Remote Assistance application?](../windowsremoteassistance.md)
- [How do I upgrade Application Manager when I upgrade my DCs / servers?](../upgrade.md)

## Central Store and Sharing

- [Can I store the DLL extensions in a central location AND locally on the machine I create my Paks on and if so which one is utilized?](../dllstorage.md)

## PreConfigured AppSets

- [Admin Console (Item Level Targeting): Why would I want to bypass Internal (pre-defined) Item Level Targeting?](../preconfigured/itemleveltargeting/bypassinternal.md)
- [Chrome: How to Configure Chrome HomePage using Application Manager](../preconfigured/chrome/home.md)
- [Chrome: How do I manage certificates with Google Chrome?](../preconfigured/chrome/certificates.md)
- [Chrome Policies don't appear to work when using Endpoint Policy Manager Cloud.](../../troubleshooting/applicationsettings/chrome/policies.md)
- [Chrome: How do I manage the Proxy settings for Google Chrome?](../preconfigured/chrome/proxysettings.md)
- [Chrome: How do I block Local File access to Google Chrome with Endpoint Policy Manager?](../preconfigured/chrome/localfileaccess.md)
- [Chrome: Why do I have extra tabs appear when I open Chrome on an endpoint?](../preconfigured/chrome/extratabs.md)
- [Chrome: Why Homepage button URL is not working for Google Chrome?](../../troubleshooting/applicationsettings/chrome/homebuttonurl.md)
- [Firefox: How do I make Application Settings Manager work with Firefox 115 and later (and how do I transition existing settings?](../preconfigured/firefox/transition.md)
- [Firefox: How do I troubleshoot adding Certificates with Endpoint Policy Manager and Firefox?](../../troubleshooting/applicationsettings/firefox/certificates.md)
- [Firefox: How can I deliver Certificates to "Certificate Authority" store and select "websites", "mail users" and "software makers"?](../preconfigured/firefox/certificate/authority.md)
- [Firefox: How can I prevent both automatic AND manual updates for Firefox?](../preconfigured/firefox/preventupdates.md)
- [Firefox: How can I use Endpoint Policy Manager to revert Firefox's Options back to the "Old Style" ?](../preconfigured/firefox/revertoptions.md)
- [Firefox: How do I use the NTLM passthru (URIS) settings in the Firefox / about:config AppSets?](../preconfigured/firefox/ntlmpassthru.md)
- [Firefox: What versions of the Endpoint Policy Manager CSE support managing certificates in what versions of Firefox?](../../requirements/support/applicationsettings/firefox/version.md)
- [Firefox: Can I enable / disable add-ons for Firefox?](../preconfigured/firefox/addons.md)
- [Firefox: Can I deliver, manage and/or revoke certificates directly to Firefox?](../preconfigured/firefox/certificate/certificates.md)
- [Can I use Security.enterprise_roots.enabled as an alternate method for FF + Certificates?](../preconfigured/firefox/securityenterpriseroots.md)
- [Firefox (and Java and Thunderbird): Why can't I seem to find (or perform) UI lockdown for Firefox, Java or Thunderbird ?](../preconfigured/firefox/javathunderbird.md)
- [Firefox: Is Endpoint Policy Manager compatible with the Frontmotion packaged MSI version of Firefox?](../../requirements/support/applicationsettings/firefox/frontmotion.md)
- [Firefox: Is Endpoint Policy Manager compatible with Firefox when installed to non-standard (and portable) locations?](../../requirements/support/applicationsettings/firefox/nonstandardlocation.md)
- [Firefox: Is Endpoint Policy Manager compatible with Firefox ESR?](../../requirements/support/applicationsettings/firefox/esr.md)
- [Firefox: How do I set "Allow Now", "Allow and Remember" or "Block Plugin" as plug-ins are requested?](../preconfigured/firefox/allowremember.md)
- [Firefox: How do I stop the "Firefox automatically sends some data to Mozilla so that we can improve your experience" message?](../preconfigured/firefox/stopsenddatamessage.md)
- [Firefox: How can I fix Dark Theme / Firefox 56 when using Endpoint Policy Manager?](../preconfigured/firefox/darktheme.md)
- [Firefox: Why doesn't the Firefox Applications Handler function work as expected?](../../troubleshooting/applicationsettings/firefox/applicationshandlerfunction.md)
- [Firefox: Why don't I see Bookmarks and Pop-Ups settings set when user has NEVER run Firefox before?](../../troubleshooting/applicationsettings/firefox/bookmarkpopups.md)
- [HowTo: What do I do if I find a problem with a preconfigured AppSet?](../../troubleshooting/applicationsettings/issue.md)
- [HowTo: One of my AppSet entry's settings is not getting delivered on target machines. What should be the first thing to look into?](../../troubleshooting/applicationsettings/entrysettings.md)
- [HowTo: Which "side" of GPO should I deploy AppSets to: User or Computer side?](../preconfigured/side.md)
- [Internet Explorer: I'm trying to use IE 11's Enterprise Mode, but it doesn't appear to be working?](../../troubleshooting/applicationsettings/internetexplorer/11enterprisemode.md)
- [Internet Explorer: Can I enable / disable add-ons for Internet Explorer?](../preconfigured/internetexplorer/addons.md)
- [Internet Explorer: Can I deliver, manage and/or revoke certificates directly to Internet Explorer?](../preconfigured/internetexplorer/certificates.md)
- [Internet Explorer: How do I deploy custom settings to zones?](../preconfigured/internetexplorer/customsettings.md)
- [Internet Explorer: When should I use Compatibility mode vs. Enterprise Mode for IE 11?](../preconfigured/internetexplorer/mode.md)
- [Internet Explorer: Why don't HTTP sites get added to the Trusted Site list?](../../troubleshooting/applicationsettings/internetexplorer/httpsites.md)
- [Internet Explorer: Why does IE fail to launch after I apply ACL lockdown or all of the IE AppSet STIG settings?](../../troubleshooting/applicationsettings/internetexplorer/launchfailstig.md)
- [Internet Explorer: Why Internet Explorer is not launching after I apply "Perform ACL Lockdown"?](../../troubleshooting/applicationsettings/internetexplorer/launchfail.md)
- [Java: Using the Pre-configured AppSet for Java, how do I prevent "Java has discovered application components that could indicate a security concern." Pop up?](../preconfigured/java/securitypopup.md)
- [Java: How to disable prompt "Your Java version is out of date."?](../preconfigured/java/versionoutofdate.md)
- [Java: How to disable prompt "You Java version is insecure"?](../preconfigured/java/versioninsecure.md)
- [Java: How to disable Java prompt "Do you want to run this application?"](../preconfigured/java/runapplication.md)
- [Java: How to disable User Account Control prompt for Java Auto Updater?](../preconfigured/java/useraccountcontrol.md)
- [Java: How to disable Task tray notification balloon events?](../preconfigured/java/tasktray.md)
- [Java: I don't see that any changes are working at all. What can I try first?](../../troubleshooting/applicationsettings/java/issue.md)
- [Java: Java Site List Exceptions just stopped working. What can I do to fix this?](../../troubleshooting/applicationsettings/java/sitelistexceptions.md)
- [Other: What is "Internal (pre-Defined)" Item Level Targeting?](../preconfigured/itemleveltargeting/internalpredefined.md)
- [Other: Is "Internal Item-Level Targeting" on by default?](../preconfigured/itemleveltargeting/bydefault.md)
- [Other: I added a AppSet and some items are grayed out / not available. In other AppSets, everything seems available. What's happening?](../../troubleshooting/applicationsettings/itemsunavailable.md)
- [AppSets: Why are there some areas of the pre-configured AppSet greyed out or not accessable?](../../troubleshooting/applicationsettings/appset/unavailable.md)
- [AppSets: Why do some AppSets have pre-defined Item Level Targeting for an EXACT version number, and others say "Version 7 to 99" (or similar)?](../../troubleshooting/applicationsettings/appset/versions.md)
- [AppSets: What is the official support policy for the pre-configured AppSets?](../../troubleshooting/applicationsettings/supportpolicy.md)
- [AppSets: How will I know that an existing AppSet will work with the version of the application I have today (and tomorrow)?](../../troubleshooting/applicationsettings/appset/versionsupport.md)
- [AppSets: How often do the AppSets for specific apps get updated?](../../troubleshooting/applicationsettings/appset/updates.md)

## Virtualized Applications

- [Do I need to do anything special to get Application Manager to deploy settings to Microsoft App-V Sequences?](../../requirements/support/applicationsettings/appvsequences.md)
- [A ThinApp throws an "Exception Error". What can I do to fix it?](../../troubleshooting/error/applicationsettings/exception.md)
- [Which application virtualization platforms are supported?](../../requirements/support/applicationsettings/applicationvirtualization.md)
- [How can I manage a version of Java inside a ThinApp package ?](../thinapp.md)
- [Are there any additional steps required to integrate Endpoint Policy Manager Software with XenAPP applications?](../../requirements/support/applicationsettings/xenapp.md)
- [Can Endpoint Policy Manager deliver settings for applications that are provided by XenAPP?](../xenapp.md)

## Design Studio

- [Besides the installation of Design Studio, are there any additional components I need on my computer in order to create my own AppSets?](../../requirements/support/applicationsettings/designstudioadditional.md)
- [What must I do to prepare for Endpoint Policy Manager Tech Support to assist me with AppSet creation?](../../troubleshooting/applicationsettings/appset/creation.md)

## Troubleshooting

- [Are there any caveats about removing the Endpoint Policy Manager CSE after it is deployed?](../../troubleshooting/applicationsettings/removeclientsideextension.md)
- [I just upgraded my management station to 785. My LOCAL AppSets are now missing. What happened?](../../troubleshooting/applicationsettings/appset/localmissing.md)
- [Troubleshooting Group Policy Replication Problems](../../troubleshooting/applicationsettings/replication.md)
- [It appears that Endpoint Policy Manager is processing AppSet entries from another Group Policy Object. How is this possible?](../../troubleshooting/applicationsettings/appset/other.md)
- [Troubleshooting Application Manager – Basic Steps BEFORE calling or emailing Tech Support](../../troubleshooting/applicationsettings/basicsteps.md)
- [What are the two ways to export AppSet settings and why would I use one over the other?](../../troubleshooting/applicationsettings/export/appset.md)
- [Which log file should I consult in order to troubleshoot when one or more settings are not getting applied to the Computer?](../../troubleshooting/applicationsettings/logs/settings.md)
- [How do I know if Application Manager is not behaving properly versus the target application not behaving properly?](../../troubleshooting/applicationsettings/applicationissue.md)
- [How is Item Level Targeting handled in reports?](../../troubleshooting/applicationsettings/itemleveltargeting/reports.md)
- [I'm using redirected folders and get un-expected results.](../../troubleshooting/applicationsettings/redirectedfolder.md)
- [AppLock (UI lockdown) doesn't seem to work on some applications. Why?](../../troubleshooting/applicationsettings/applock/someapplications.md)
- [Endpoint Policy Manager should be reapplying my settings on application launch time. Why doesn't "reapply on launch" work ?](../../troubleshooting/applicationsettings/reapplylaunch.md)
- [Why does Symantec Endpoint Protection (or SEP for Small business) report that Endpoint Policy Manager is "tampering" ?](../../troubleshooting/applicationsettings/symantecendpointprotection.md)
- [Why does Windows Remote Assistance (MSRA) report "PPAppLockdr64.dll is not designed to run on Windows or it contains an error" 0xc000428 ?](../../troubleshooting/error/applicationsettings/code0xc000428.md)
- [How to use Scripts Manager to workaround the "PPAppLockdr64.dll is either not designed to run on Windows or it contains an error" message when running Microsoft Remote Assistance (MSRA.exe) and the Endpoint Policy Manager CSE is installed on Windows 10 1903](../../troubleshooting/applicationsettings/microsoftremoteassistance.md)
- [How do I turn AppLock off or on based upon the CSE version I'm using?](../../troubleshooting/applicationsettings/applock/disable.md)
- [How do I turn off "Reapply on Launch" for all applications if asked by tech support?](../../troubleshooting/applicationsettings/reapplylaunchdisable.md)
- [When I use Forcepoint, Firefox takes 15 minutes to open. How can I fix this?](../../troubleshooting/applicationsettings/forcepoint.md)
- [I do not have access or ability to create the Central Store. What should the best practice to store AppSets be?](../../troubleshooting/applicationsettings/appset/storage.md)
- [What happens to Application Settings Manager settings when the Endpoint Policy Manager license expires / if my company chooses not to renew?](../../troubleshooting/applicationsettings/gpooutofscope.md)
- [Why does Microsoft 365 Defender report suspicious encoded content in Endpoint Policy Manager Application Settings Manager values?](../../troubleshooting/applicationsettings/microsoftdefender.md)
- [Why do I see "Extra Registry Settings" in Endpoint Policy Manager Application Settings Manager items in the GPMC?](../../troubleshooting/applicationsettings/gpmc.md)
