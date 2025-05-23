---
sidebar_position: 3592
title: Knowledge Base
---

# Knowledge Base

See the following Knowledge Base articles for Application Manager.

## General Configuration & Operation

* [What if I am having trouble getting the Licensing GPO installed?](../../Troubleshooting/ApplicationSettings/License/GPO)
* [What happens to Application Settings Manager settings when the Endpoint Policy Manager license expires / if my company chooses not to renew?](../../Troubleshooting/ApplicationSettings/GPOOutOfScope)
* [Is there an easy way to back up the GPO's I configured with Application Manager?](../../Troubleshooting/ApplicationSettings/Backup/GPOs)
* [Can I Export my GPO settings so that they can be used in the future to create similar GPOs?](../../Troubleshooting/ApplicationSettings/Export/GPOs)
* [How many Endpoint Policy Manager policies can I create within one Group Policy Object?](../../Troubleshooting/ApplicationSettings/Limitations)
* [We upgraded our DLL files recently after creating a new Pak with Design Studio. After the implementation we would like to revert back to the original Pak. I have a local copy of the former DLL. Can I downgrade to the curre](../../Troubleshooting/ApplicationSettings/Downgrade)
* [Application Manager Roles and Responsibilities](../RolesResponsibilities)
* [I deselected the Applock feature, Disable whole tab in target application, but the elements are still grayed out. How can I fix this?](../../Troubleshooting/ApplicationSettings/AppLock/Feature)
* [I am selecting values for certain settings for the Lync client. On the Alerts tab, I am selecting and deselecting various radio buttons but none of these selections are being underlined. Why is this?](../../Troubleshooting/ApplicationSettings/LyncClient)
* [I am configuring the values for some settings for an application. Many of these settings involve checkmarks which are unchecked by default. How can I tell if an unchecked checkbox is being delivered or not?](../../Troubleshooting/ApplicationSettings/Checkmarks)
* [How can I use the Endpoint Policy ManagerCentral store (if I was already using the Endpoint Policy Manager Local store?)](../CentralStore)
* [How can I keep abreast of the latest Endpoint Policy Manager updates as they are released?](../../Troubleshooting/LatestUpdates)
* [Should I create Endpoint Policy Application Manager policies on the USER or COMPUTER side?](../Side)
* [What is the difference between running the gp update (Microsoft) and ppupdate (Endpoint Policy Manager) commands?](../../Troubleshooting/ApplicationSettings/UpdatedCommands)
* [Does Application Manager work when the machine is NOT US-English (say, Italian or Russian?)](../../Troubleshooting/ApplicationSettings/Language)
* [Can Application Manager help me in pushing, assigning or configuring printers?](../Printers)
* [Can I deploy the Application Manager settings I've configured as a one-time only deployment like Group Policy Preferences does?](../OneTime)
* [Are there any required permission settings for a Endpoint Policy ManagerAdministrator to store Endpoint Policy Manager Suite DLL Extensions to the central store?](../../Troubleshooting/ApplicationSettings/Permissions "Are there any required permission settings for an Endpoint Policy Manager Administrator to store Endpoint Policy Manager Suite DLL Extensions to the central store?")
* [Should I backup my Pak files?](../../Troubleshooting/ApplicationSettings/Backup/Files)
* [I'm trying to find a particular font setting in one of your Word Paks but I can't find it. Is the setting not supported?](../../Troubleshooting/ApplicationSettings/FontSetting)
* [Is there a particular naming scheme I need to use when compiling my Paks within Design Studio?](../../Troubleshooting/ApplicationSettings/DesignStudio)
* [I need to modify the Pak (DLL file) of one of the applications I control with Application Manager. Will I lose my group policy settings after I modify the DLL file](../../Troubleshooting/ApplicationSettings/ModifyDLL)
* [I installed Design Studio on a Windows 7 Laptop but there are still some XP and Vista stations in our network. Will the Paks I create work for all three operating system?](../../Requirements/Support/ApplicationSettings/DesignStudioWindows7)
* [Should I put lots of Paks (or other PP directives into one GPO?)](../../Troubleshooting/ApplicationSettings/OneGPO)
* [How-to gain access of a remote computer using built-in Windows Remote Assistance application?](../WindowsRemoteAssistance)
* [How do I upgrade Application Manager when I upgrade my DCs / servers?](../Upgrade)

## Central Store and Sharing

* [Can I store the DLL extensions in a central location AND locally on the machine I create my Paks on and if so which one is utilized?](../DLLStorage)

## PreConfigured AppSets

* [Admin Console (Item Level Targeting): Why would I want to bypass Internal (pre-defined) Item Level Targeting?](../Preconfigured/ItemLevelTargeting/ByPassInternal)
* [Chrome: How to Configure Chrome HomePage using Application Manager](../Preconfigured/Chrome/Home)
* [Chrome: How do I manage certificates with Google Chrome?](../Preconfigured/Chrome/Certificates)
* [Chrome Policies don't appear to work when using Endpoint Policy Manager Cloud.](../../Troubleshooting/ApplicationSettings/Chrome/Policies)
* [Chrome: How do I manage the Proxy settings for Google Chrome?](../Preconfigured/Chrome/ProxySettings)
* [Chrome: How do I block Local File access to Google Chrome with Endpoint Policy Manager?](../Preconfigured/Chrome/LocalFileAccess)
* [Chrome: Why do I have extra tabs appear when I open Chrome on an endpoint?](../Preconfigured/Chrome/ExtraTabs)
* [Chrome: Why Homepage button URL is not working for Google Chrome?](../../Troubleshooting/ApplicationSettings/Chrome/HomeButtonURL)
* [Firefox: How do I make Application Settings Manager work with Firefox 115 and later (and how do I transition existing settings?](../Preconfigured/Firefox/Transition)
* [Firefox: How do I troubleshoot adding Certificates with Endpoint Policy Manager and Firefox?](../../Troubleshooting/ApplicationSettings/Firefox/Certificates)
* [Firefox: How can I deliver Certificates to "Certificate Authority" store and select "websites", "mail users" and "software makers"?](../Preconfigured/Firefox/Certificate/Authority)
* [Firefox: How can I prevent both automatic AND manual updates for Firefox?](../Preconfigured/Firefox/PreventUpdates)
* [Firefox: How can I use Endpoint Policy Manager to revert Firefox's Options back to the "Old Style" ?](../Preconfigured/Firefox/RevertOptions)
* [Firefox: How do I use the NTLM passthru (URIS) settings in the Firefox / about:config AppSets?](../Preconfigured/Firefox/NTLMPassthru)
* [Firefox: What versions of the Endpoint Policy Manager CSE support managing certificates in what versions of Firefox?](../../Requirements/Support/ApplicationSettings/Firefox/Version)
* [Firefox: Can I enable / disable add-ons for Firefox?](../Preconfigured/Firefox/Addons)
* [Firefox: Can I deliver, manage and/or revoke certificates directly to Firefox?](../Preconfigured/Firefox/Certificate/Certificates)
* [Can I use Security.enterprise\_roots.enabled as an alternate method for FF + Certificates?](../Preconfigured/Firefox/SecurityEnterpriseRoots)
* [Firefox (and Java and Thunderbird): Why can't I seem to find (or perform) UI lockdown for Firefox, Java or Thunderbird ?](../Preconfigured/Firefox/JavaThunderbird)
* [Firefox: Is Endpoint Policy Manager compatible with the Frontmotion packaged MSI version of Firefox?](../../Requirements/Support/ApplicationSettings/Firefox/Frontmotion)
* [Firefox: Is Endpoint Policy Manager compatible with Firefox when installed to non-standard (and portable) locations?](../../Requirements/Support/ApplicationSettings/Firefox/NonStandardLocation)
* [Firefox: Is Endpoint Policy Manager compatible with Firefox ESR?](../../Requirements/Support/ApplicationSettings/Firefox/ESR)
* [Firefox: How do I set "Allow Now", "Allow and Remember" or "Block Plugin" as plug-ins are requested?](../Preconfigured/Firefox/AllowRemember)
* [Firefox: How do I stop the "Firefox automatically sends some data to Mozilla so that we can improve your experience" message?](../Preconfigured/Firefox/StopSendDataMessage)
* [Firefox: How can I fix Dark Theme / Firefox 56 when using Endpoint Policy Manager?](../Preconfigured/Firefox/DarkTheme)
* [Firefox: Why doesn't the Firefox Applications Handler function work as expected?](../../Troubleshooting/ApplicationSettings/Firefox/ApplicationsHandlerFunction)
* [Firefox: Why don't I see Bookmarks and Pop-Ups settings set when user has NEVER run Firefox before?](../../Troubleshooting/ApplicationSettings/Firefox/BookmarkPopUps)
* [HowTo: What do I do if I find a problem with a preconfigured AppSet?](../../Troubleshooting/ApplicationSettings/Issue)
* [HowTo: One of my AppSet entry's settings is not getting delivered on target machines. What should be the first thing to look into?](../../Troubleshooting/ApplicationSettings/EntrySettings)
* [HowTo: Which "side" of GPO should I deploy AppSets to: User or Computer side?](../Preconfigured/Side)
* [Internet Explorer: I'm trying to use IE 11's Enterprise Mode, but it doesn't appear to be working?](../../Troubleshooting/ApplicationSettings/InternetExplorer/11EnterpriseMode)
* [Internet Explorer: Can I enable / disable add-ons for Internet Explorer?](../Preconfigured/InternetExplorer/Addons)
* [Internet Explorer: Can I deliver, manage and/or revoke certificates directly to Internet Explorer?](../Preconfigured/InternetExplorer/Certificates)
* [Internet Explorer: How do I deploy custom settings to zones?](../Preconfigured/InternetExplorer/CustomSettings)
* [Internet Explorer: When should I use Compatibility mode vs. Enterprise Mode for IE 11?](../Preconfigured/InternetExplorer/Mode)
* [Internet Explorer: Why don't HTTP sites get added to the Trusted Site list?](../../Troubleshooting/ApplicationSettings/InternetExplorer/HTTPSites)
* [Internet Explorer: Why does IE fail to launch after I apply ACL lockdown or all of the IE AppSet STIG settings?](../../Troubleshooting/ApplicationSettings/InternetExplorer/LaunchFailSTIG)
* [Internet Explorer: Why Internet Explorer is not launching after I apply "Perform ACL Lockdown"?](../../Troubleshooting/ApplicationSettings/InternetExplorer/LaunchFail)
* [Java: Using the Pre-configured AppSet for Java, how do I prevent "Java has discovered application components that could indicate a security concern." Pop up?](../Preconfigured/Java/SecurityPopup)
* [Java: How to disable prompt "Your Java version is out of date."?](../Preconfigured/Java/VersionOutOfDate)
* [Java: How to disable prompt "You Java version is insecure"?](../Preconfigured/Java/VersionInsecure)
* [Java: How to disable Java prompt "Do you want to run this application?"](../Preconfigured/Java/RunApplication)
* [Java: How to disable User Account Control prompt for Java Auto Updater?](../Preconfigured/Java/UserAccountControl)
* [Java: How to disable Task tray notification balloon events?](../Preconfigured/Java/TaskTray)
* [Java: I don't see that any changes are working at all. What can I try first?](../../Troubleshooting/ApplicationSettings/Java/Issue)
* [Java: Java Site List Exceptions just stopped working. What can I do to fix this?](../../Troubleshooting/ApplicationSettings/Java/SiteListExceptions)
* [Other: What is "Internal (pre-Defined)" Item Level Targeting?](../Preconfigured/ItemLevelTargeting/InternalPredefined)
* [Other: Is "Internal Item-Level Targeting" on by default?](../Preconfigured/ItemLevelTargeting/ByDefault)
* [Other: I added a AppSet and some items are grayed out / not available. In other AppSets, everything seems available. What's happening?](../../Troubleshooting/ApplicationSettings/ItemsUnavailable)
* [AppSets: Why are there some areas of the pre-configured AppSet greyed out or not accessable?](../../Troubleshooting/ApplicationSettings/AppSet/Unavailable)
* [AppSets: Why do some AppSets have pre-defined Item Level Targeting for an EXACT version number, and others say "Version 7 to 99" (or similar)?](../../Troubleshooting/ApplicationSettings/AppSet/Versions)
* [AppSets: What is the official support policy for the pre-configured AppSets?](../../Troubleshooting/ApplicationSettings/SupportPolicy)
* [AppSets: How will I know that an existing AppSet will work with the version of the application I have today (and tomorrow)?](../../Troubleshooting/ApplicationSettings/AppSet/VersionSupport)
* [AppSets: How often do the AppSets for specific apps get updated?](../../Troubleshooting/ApplicationSettings/AppSet/Updates)

## Virtualized Applications

* [Do I need to do anything special to get Application Manager to deploy settings to Microsoft App-V Sequences?](../../Requirements/Support/ApplicationSettings/AppVSequences)
* [A ThinApp throws an "Exception Error". What can I do to fix it?](../../Troubleshooting/Error/ApplicationSettings/Exception)
* [Which application virtualization platforms are supported?](../../Requirements/Support/ApplicationSettings/ApplicationVirtualization)
* [How can I manage a version of Java inside a ThinApp package ?](../ThinApp)
* [Are there any additional steps required to integrate Endpoint Policy Manager Software with XenAPP applications?](../../Requirements/Support/ApplicationSettings/XenApp)
* [Can Endpoint Policy Manager deliver settings for applications that are provided by XenAPP?](../XenApp)

## Design Studio

* [Besides the installation of Design Studio, are there any additional components I need on my computer in order to create my own AppSets?](../../Requirements/Support/ApplicationSettings/DesignStudioAdditional)
* [What must I do to prepare for Endpoint Policy Manager Tech Support to assist me with AppSet creation?](../../Troubleshooting/ApplicationSettings/AppSet/Creation)

## Troubleshooting

* [Are there any caveats about removing the Endpoint Policy Manager CSE after it is deployed?](../../Troubleshooting/ApplicationSettings/RemoveClientSideExtension)
* [I just upgraded my management station to 785. My LOCAL AppSets are now missing. What happened?](../../Troubleshooting/ApplicationSettings/AppSet/LocalMissing)
* [Troubleshooting Group Policy Replication Problems](../../Troubleshooting/ApplicationSettings/Replication)
* [It appears that Endpoint Policy Manager is processing AppSet entries from another Group Policy Object. How is this possible?](../../Troubleshooting/ApplicationSettings/AppSet/Other)
* [Troubleshooting Application Manager – Basic Steps BEFORE calling or emailing Tech Support](../../Troubleshooting/ApplicationSettings/BasicSteps)
* [What are the two ways to export AppSet settings and why would I use one over the other?](../../Troubleshooting/ApplicationSettings/Export/AppSet)
* [Which log file should I consult in order to troubleshoot when one or more settings are not getting applied to the Computer?](../../Troubleshooting/ApplicationSettings/Logs/Settings)
* [How do I know if Application Manager is not behaving properly versus the target application not behaving properly?](../../Troubleshooting/ApplicationSettings/ApplicationIssue)
* [How is Item Level Targeting handled in reports?](../../Troubleshooting/ApplicationSettings/ItemLevelTargeting/Reports)
* [I'm using redirected folders and get un-expected results.](../../Troubleshooting/ApplicationSettings/RedirectedFolder)
* [AppLock (UI lockdown) doesn't seem to work on some applications. Why?](../../Troubleshooting/ApplicationSettings/AppLock/SomeApplications)
* [Endpoint Policy Manager should be reapplying my settings on application launch time. Why doesn't "reapply on launch" work ?](../../Troubleshooting/ApplicationSettings/ReapplyLaunch)
* [Why does Symantec Endpoint Protection (or SEP for Small business) report that Endpoint Policy Manager is "tampering" ?](../../Troubleshooting/ApplicationSettings/SymantecEndpointProtection)
* [Why does Windows Remote Assistance (MSRA) report "PPAppLockdr64.dll is not designed to run on Windows or it contains an error" 0xc000428 ?](../../Troubleshooting/Error/ApplicationSettings/Code0xc000428)
* [How to use Scripts Manager to workaround the "PPAppLockdr64.dll is either not designed to run on Windows or it contains an error" message when running Microsoft Remote Assistance (MSRA.exe) and the Endpoint Policy Manager CSE is installed on Windows 10 1903](../../Troubleshooting/ApplicationSettings/MicrosoftRemoteAssistance)
* [How do I turn AppLock off or on based upon the CSE version I'm using?](../../Troubleshooting/ApplicationSettings/AppLock/Disable)
* [How do I turn off "Reapply on Launch" for all applications if asked by tech support?](../../Troubleshooting/ApplicationSettings/ReapplyLaunchDisable)
* [When I use Forcepoint, Firefox takes 15 minutes to open. How can I fix this?](../../Troubleshooting/ApplicationSettings/Forcepoint)
* [I do not have access or ability to create the Central Store. What should the best practice to store AppSets be?](../../Troubleshooting/ApplicationSettings/AppSet/Storage)
* [What happens to Application Settings Manager settings when the Endpoint Policy Manager license expires / if my company chooses not to renew?](../../Troubleshooting/ApplicationSettings/GPOOutOfScope)
* [Why does Microsoft 365 Defender report suspicious encoded content in Endpoint Policy Manager Application Settings Manager values?](../../Troubleshooting/ApplicationSettings/MicrosoftDefender)
* [Why do I see "Extra Registry Settings" in Endpoint Policy Manager Application Settings Manager items in the GPMC?](../../Troubleshooting/ApplicationSettings/GPMC)