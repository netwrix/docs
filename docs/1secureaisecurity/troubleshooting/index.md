---
title: "Troubleshooting"
description: "Find a failure sentence AI Security shows, what it means, and what to do about it."
sidebar_position: 1
---

# Troubleshooting

This page lists every failure sentence AI Security can show you, what it means and what to do. Find the sentence you see, grouped by where it appears: the connection test, the return from Microsoft sign-in, the scan drawer and the Sources page.


:::info
Each connector page under [Sources](/docs/1secureaisecurity/configuration/sources/index.md) has an "If the test fails" section with what each answer means for that platform. Start there when the test names a platform.

:::

## Connection test

A test reads the first thing a scan reads, with the stored credential. Its outcome is **Succeeded**, **Warning** or **Failed**, with one of these sentences.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| The credential works. | The credential works and reaches what the scan reads first. | Nothing. Read any warning on the card as well. |
| [platform] refused part of the read. Grant the permissions below and test again. | Part of what the scan reads was refused. The test lists each missing permission under the sentence. Where it has none to list, the sentence reads "The credential works, but [platform] refused part of what the scan reads." | Grant each listed permission, or the one the connector page names for this platform, then test again. |
| Knowledge not read. Add the app as an application user with Agent Viewer. | The test read the Copilot Studio agents, and an environment doesn't admit the app as an application user. | Add the app as an application user with a role in each environment. On a source connected with Microsoft, use **Let 1Secure do it** on the "Power Platform application users" card in the Microsoft Copilot Studio drawer. |
| Your tenant consented to an older permission list. Reconnect with Microsoft to grant the rest. | The source is connected with Microsoft, and the registration asks for a permission your tenant has not consented to, for example one added since you connected. The permissions are named under it. | Open the Microsoft Entra ID source, click **Sign in with Microsoft** again and accept the permissions, then test again. |
| The app registration doesn't ask for a permission this platform needs. | The source is connected with Microsoft, and a permission a platform needs wasn't granted by the consent, because the registration doesn't ask for it. The line under it says "The registration doesn't ask for [permissions]. Its owner adds them with admin consent." Signing in again grants nothing more, so no **Reconnect** is offered. | Ask the registration's owner to add the permissions it names, then test again. |
| No credential is stored for this source. | No credential is stored for this source. | Open the source, click **Edit** and enter its settings. |
| The credential is missing settings this platform needs. | A setting the platform needs is missing. | Open the source, click **Edit** and add the missing setting. |
| The stored credential can't be used. Enter it again. | The stored credential can't be read. | Enter the credential again. |
| This source uses the Microsoft Entra ID app registration. Connect Microsoft Entra ID first. | The source reads with the Microsoft Entra ID app registration, and no Entra ID source is connected. | Connect Microsoft Entra ID first. |
| No GitHub organization named [login]. Use the name from its address. | GitHub answered that no organization has that login. | Open the source, click **Edit** and enter the organization's login, the part after github.com/ in its address. |
| That is the console address. Add -api after the instance name. | The Tanium address answered with a redirect to the console's sign in. | Open the source, click **Edit** and enter the API host. |
| A live connection test isn't available for this platform. All required settings are entered. | No live test exists for this platform. The settings are complete. | Run a scan to prove the connection. |

On Microsoft Entra ID, Azure AI Foundry, Azure RBAC, Azure Logic Apps, Azure Bot Service, Copilot Studio, Agent 365, Defender for Endpoint and Power Platform, a server error from Microsoft on the test's first read gives a **Warning**, not a failure: "The platform didn't answer, or said it is down or busy." Test again later.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "The test failed on our side. Try again." | The test couldn't be run to an answer. | Test again. If it fails again, contact Netwrix support. |
| The test couldn't finish. If it repeats, send the Technical details to support. | The test couldn't be run to an answer, and has no sentence of its own. | Test again. If it fails again, send the **Technical details** to Netwrix support. |
| The connection test couldn't finish. Test again, and if it fails again, contact Netwrix support. | The test couldn't be run to an answer, and left no details. | Test again. If it fails again, contact Netwrix support. |
| A connection test is already running for your organization. Test again in 10 seconds. | Another test for your organization has not finished. | Wait 10 seconds, then test again. |
| The service is running as many connection tests as it can at once. Test again in 10 seconds. | 1Secure is busy with other tests. | Wait 10 seconds, then test again. |
| The platform refused the credential. It is wrong, expired, or revoked. | The platform refused the credential itself. | Create a new credential in the platform, and enter it with **Edit**. |
| The credential works, but access was denied. A permission is missing. | The platform accepted the credential and refused the read. | Grant the permission the connector page names, then test again. |
| The platform returned a response the scanner doesn't support. | The platform answered in a form AI Security can't read. | Contact Netwrix support. |
| The platform didn't answer, or said it is down or busy. | No answer, or the platform said it is down or busy. | Check the address and that the platform is up, then test again. |
| The platform slowed down the test. Wait a few minutes and test again. | The platform is slowing AI Security down because it asks too often. The credential and its permissions are fine. | Wait a few minutes, then test again. Don't change the credential or its permissions. |
| This Salesforce org has used its API allowance for the day. The allowance resets daily, so test again tomorrow, or ask Salesforce to raise it. | The Salesforce org has spent its daily API allowance. The credential and its permissions are fine. | Test again the next day, or ask Salesforce to raise the allowance. |
| The platform didn't answer in time. | The first read didn't finish within the test's time. | Test again. A busy platform can answer slowly. |
| A setting is invalid. Addresses must start with https:// on the platform's domain. | A setting can't be used as given, for example an address that isn't https, is off the platform's own domain, or names a local, private, or internal host. | Correct the address in **Edit**, so it starts with https:// and names a public host. |
| This platform isn't supported. | AI Security can't read this platform. | Contact Netwrix support. |
| No connection test exists for this platform. Run a scan to check access. | No connection test exists for this platform. | Run a scan to check access. |
| Access denied because of the platform's plan or license. Changing permissions won't fix it. | The platform refused because of its plan or license. | Upgrade the plan or license with the vendor. |
| Agent 365 refused access. Grant admin consent to CopilotPackages.Read.All again, then test again shortly. | The registration 1Secure reads with asks for the Agent 365 grants, and the tenant has not granted them admin consent, or has no Microsoft Agent 365 license. | Grant admin consent to the 1Secure registration again under **Enterprise applications**, where it shows under the name your directory gave it, then test again in a few minutes. |
| Agent 365 refused access despite consent to CopilotPackages.Read.All. Check the license, or test again shortly. | The app holds the permission, and Microsoft still refused the catalog. Most often the tenant has no Microsoft Agent 365 license, or Microsoft has not yet applied the consent. Technical details carry the error code and message Microsoft returned. | Check the tenant's Microsoft Agent 365 license, and test again in a few minutes. If it fails again, send the Technical details to Netwrix support, or connect Microsoft Defender for Endpoint, which lists the same agents. |
| The tenant has no Microsoft Agent 365 license. | Microsoft opens the catalog only on a licensed tenant. | Get a Microsoft Agent 365 license. No permission fixes it. |
| The Agent 365 catalog didn't respond. Test again later. | The catalog didn't answer. | Test again later. |
| Microsoft retired the Agent 365 catalog address 1Secure uses. Contact Netwrix support. | Microsoft moved the catalog. | Contact Netwrix support. |


:::info
A role granted in Microsoft takes a few minutes to apply, so a test right after a grant can still be refused. Test again after a couple of minutes.

:::

## Connect with Microsoft

These sentences appear when you come back from the Microsoft sign-in, during **Connect with Microsoft** or **Let 1Secure do it**.

| What you see | What to do |
|--------------|------------|
| Microsoft didn't grant the permissions, so nothing was connected. If you canceled, sign in with Microsoft again. If Microsoft said an administrator must approve, a Global Administrator or Privileged Role Administrator must sign in. | Sign in again, as a Global Administrator or Privileged Role Administrator. |
| Nothing connected because this tenant has no Defender for Endpoint. Use an app registration without it. | Click **Use an app registration instead** and connect your own app registration with the Microsoft Graph permissions only. Microsoft's own answer is under **Technical details**. |
| Nothing connected. Ask a Global Administrator or Privileged Role Administrator to grant this. | Ask a Global Administrator or Privileged Role Administrator to sign in, or click **Request approval**. |
| Request sent to your administrators. Return to Sources once approved. | Wait for an administrator to approve, then open **Sources**. No request button is offered, as the request is already sent. |
| The app is disabled. Ask an administrator to set Enabled for users to sign in. | Ask an administrator to turn the app back on, then sign in again. |
| "Nothing connected because of a fault on our side. Send the Technical details to Netwrix support." | Contact Netwrix support with the **Technical details**. |
| Nothing connected because you aren't assigned to the app. Ask an administrator to assign you. | Ask an administrator to assign you to the app, or to sign in themselves. |
| Conditional Access blocked the sign in. Ask your administrator which device or place is allowed. | Sign in again from a device or location the policy allows. |
| Nothing connected because a needed service is missing. Use an app registration without it. | Click **Use an app registration instead** and leave out the permissions of the service **Technical details** names. |
| Nothing connected because your tenant blocks user consent. Ask a Global Administrator or Privileged Role Administrator. | Ask a Global Administrator or Privileged Role Administrator to sign in, or click **Request approval**. |
| Nothing connected: this tenant has no [service]. Connect with an app registration instead. | Microsoft refused the sign in because the tenant doesn't have Dynamics 365, Power Apps or Azure Service Management, which the page names. Click **Use an app registration instead** and leave out that service's permissions. |
| Nothing connected. 1Secure connects to the worldwide Microsoft cloud only. | The account belongs to another Microsoft cloud, such as a government or China cloud. Sign in with an account of the worldwide cloud. |
| Nothing connected because your account isn't in this tenant. Guests enter the tenant domain first. | Sign in with an account of the directory you mean to connect. A guest account types the tenant's domain first. |
| Nothing connected because the permissions weren't granted. Sign in with Microsoft again to grant them. | Sign in again and accept the permissions. |
| The Microsoft administrator declined the permissions, so nothing was connected. | Sign in again and accept the permissions. |
| Microsoft requires this sign in to come from a device your organization has registered, so nothing was connected. Sign in with Microsoft again from a registered device. | Sign in again from a registered device. |
| Microsoft requires multifactor authentication for this sign in and it wasn't completed, so nothing was connected. Sign in with Microsoft again and complete the verification. | Sign in again and complete the verification. |
| Microsoft couldn't complete the sign in, so nothing was connected. Sign in with Microsoft again. | Sign in again. |
| Microsoft didn't grant the permissions, so nothing was connected. Sign in with Microsoft again. | Sign in again. |
| Nothing connected. You can sign in with Microsoft again. | Sign in again and accept the permissions. |
| Microsoft granted the permissions, but nothing was connected yet. Select Sign in with Microsoft again to connect. | An administrator approved the request. Click **Sign in with Microsoft** again to connect. |
| This step of the consent was already completed, so nothing more was done. Start again from Sources. | Start again from **Sources**. |
| The sign in didn't finish. Select Try again to start it again. | Click **Try again** in the sign-in window. |
| Microsoft didn't say which directory consented, so nothing was connected. Start again from Sources. | Start again from **Sources**. |
| Microsoft didn't say which directory the account belongs to, so nothing was connected. Start again from Sources. | Start again from **Sources**. |
| The directory that consented isn't the one the administrator signed in to, so nothing was connected. Start again from Sources. | Start again from **Sources**, and accept the permissions in the directory you signed in to. |
| Microsoft didn't sign the administrator in, so nothing was connected. Sign in with Microsoft again. | Sign in again. |
| Microsoft returned no sign in, so nothing was connected. Sign in with Microsoft again. | Sign in again. |
| The Microsoft window closed early, so nothing connected. Sign in again. | Click **Sign in with Microsoft** again. |
| Not connected because sign in started in another tab. Sign in with Microsoft again from Sources. | Start again in one browser tab. |
| Consent was revoked in Microsoft. Sign in with Microsoft again. | Open Microsoft Entra ID on **Sources** and click **Sign in with Microsoft** again. |
| Your browser blocked the sign in window. Allow pop-ups for this site, then try again. | Allow pop-ups for this site, then try again. |
| The administrator didn't accept the permission, so the AI Reader role wasn't granted. Everything else keeps working. | On the **Entra AI Reader role** line of Connect Microsoft, click **Grant again** and accept the permission; later, **Let 1Secure do it** on the card under **Sources**. |
| Microsoft returned no sign in, so the AI Reader role wasn't granted. Start again from Sources. | Start again from **Sources**. |
| The administrator didn't accept the permission, so Azure Reader wasn't granted. Everything else keeps working. | On the **Azure Reader roles** line of Connect Microsoft, click **Grant again** and accept the permission; later, **Let 1Secure do it** on the card under **Sources**. |
| Microsoft returned no sign in, so Azure Reader wasn't granted. Start again from Sources. | Start again from **Sources**. |
| A subscription: your account isn't Owner or User Access Administrator here, so it was skipped. | Sign in with an account that holds Owner or User Access Administrator on that subscription. |
| A subscription: Azure didn't accept the assignment, so it was skipped. Try again. | Try again. |
| A project: your account isn't Owner or User Access Administrator on this project, so Foundry User wasn't assigned. | Ask an owner of the project to assign Foundry User, as steps 9 to 11 of [Azure AI Foundry](/docs/1secureaisecurity/configuration/sources/azure-ai-foundry.md) describe. |
| A project: Azure didn't accept the Foundry User assignment, so it was skipped. Try again. | Try again. |
| Your account sees no Azure subscriptions in this directory. | Sign in with an account that can see the subscriptions to cover. |
| Your account sees no Azure subscriptions in this directory, so Azure Reader wasn't granted. | Sign in with an account that can see the subscriptions to cover. |
| Azure Reader wasn't granted: your account isn't Owner or User Access Administrator on any subscription it sees. Sign in with one that is. | Sign in with an account that holds Owner or User Access Administrator on the subscriptions. |
| Azure didn't accept the Reader assignments, so Azure Reader wasn't granted. Try again in a few minutes. | Try again in a few minutes. |
| The administrator didn't accept the permission, so 1Secure wasn't registered as a Power Platform management application. Everything else keeps working. | On the **Power Platform application user** line of Connect Microsoft, click **Grant again** and accept the permission; later, **Let 1Secure do it** on the card under **Sources**. |
| Microsoft returned no sign in, so 1Secure wasn't registered as a Power Platform management application. Start again from Sources. | Start again from **Sources**. |
| The administrator didn't accept the permissions, so 1Secure wasn't added as an application user. Everything else keeps working. | Try again and accept the permissions: click **Finish Power Platform setup** on the "Power Platform policies" card, or **Let 1Secure do it** on the "Power Platform application users" card, on the **Sources** page. |
| Microsoft returned no sign in, so 1Secure wasn't added as an application user. Start again from Sources. | Start again from **Sources**. |
| An environment: your account isn't a System Administrator of this environment, so 1Secure wasn't added. | Do one of these for each environment named. In the Power Platform admin center, open the environment, then **Membership**, **System Administrators**, and click **Add me**, then click **Finish Power Platform setup** on the "Power Platform policies" card on the **Sources** page, select the environment and click **Add 1Secure**. Or add 1Secure there yourself with the steps shown under the names, which are steps 2 to 6 of [Create the application user in Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md#create-the-application-user-in-power-platform). |
| An environment: Dataverse didn't accept the application user, so it was skipped. Try again. | Try again. |
| Your account sees no Power Platform environments with a Dataverse database. | Nothing to add. Only an environment with a Dataverse database takes an application user. |
| The administrator didn't accept the permissions, so Sites.Selected full control wasn't granted. Everything else keeps working. | Click **Approve** on the site again and accept the permissions. |
| Microsoft returned no sign in, so Sites.Selected full control wasn't granted. Start again from Sources. | Start again from **Sources**. |
| The account that consented doesn't hold a role approved for it. Sign in as a Global Administrator or Privileged Role Administrator and try again. | Sign in as a Global Administrator or Privileged Role Administrator, with the role active rather than only eligible. |
| The 1Secure registration doesn't hold RoleManagement.Read.Directory in this directory, so the roles of the account that consented couldn't be read and the consent wasn't recorded. Start again from Sources in a few minutes. | Wait a few minutes, then start again from **Sources**. |
| Microsoft Graph didn't answer the read of the roles of the account that consented, so the consent wasn't recorded. Start again from Sources in a few minutes. | Wait a few minutes, then start again from **Sources**. |
| Microsoft's sign in answer didn't name the account, so the consent wasn't recorded. Start again from Sources. | Start again from **Sources**. |
| The account that signed in belongs to a different directory from the one that consented, so nothing was connected. Sign in with an administrator of the directory you consented for. | Sign in with an administrator of the directory you consented for. |
| Microsoft didn't accept the sign in ([error]), so nothing was connected. Start again from Sources. | Start again from **Sources**. |
| Microsoft's sign in answer wasn't the one this consent asked for, so nothing was connected. Start again from Sources. | Start again from **Sources**. |
| Microsoft's sign in answer carried no identity, so nothing was connected. Start again from Sources. | Start again from **Sources**. |
| Microsoft's sign in answer couldn't be read, so nothing was connected. Start again from Sources. | Start again from **Sources**. |
| The Microsoft sign in window closed before it finished. Ask a Global Administrator or Privileged Role Administrator to select [button]. | Ask a Global Administrator or Privileged Role Administrator to click the button the sentence names, **Let 1Secure do it** or **Finish Power Platform setup**. |
| Microsoft didn't let the account that signed in assign directory roles, so the AI Reader role wasn't granted. Sign in as a Global Administrator or a Privileged Role Administrator and accept the permission Microsoft asks for. | Sign in as a Global Administrator or Privileged Role Administrator and accept the permission. |
| Microsoft Graph refused the role assignment, so the AI Reader role wasn't granted. Try again, or assign AI Reader to the Netwrix app in the Entra admin center. | Try again, or assign AI Reader to the Netwrix app in the Microsoft Entra admin center. |
| The Netwrix app isn't in this directory, so the AI Reader role wasn't granted. Select Sign in with Microsoft for this directory first, then finish setup. | Open Microsoft Entra ID on **Sources**, click **Sign in with Microsoft** for this directory, then finish setup. |
| Microsoft Graph didn't answer, so the AI Reader role wasn't granted. Try again in a few minutes. | Try again in a few minutes. |
| Microsoft's sign in answer carried no access to Microsoft Graph, so the AI Reader role wasn't granted. Start again from Sources. | Start again from **Sources**. |
| Microsoft Graph didn't let 1Secure read its app in this directory, so Azure Reader wasn't granted. Select Sign in with Microsoft for this directory again, then try again. | Open Microsoft Entra ID on **Sources**, click **Sign in with Microsoft** again, then try again. |
| Microsoft didn't let 1Secure sign in to the directory ([error]), so Azure Reader wasn't granted. Select Sign in with Microsoft for this directory again, then try again. | Open Microsoft Entra ID on **Sources**, click **Sign in with Microsoft** again, then try again. |
| Microsoft's answer carried no access to Microsoft Graph, so Azure Reader wasn't granted. Try again. | Try again. |
| Microsoft's sign in answer carried no access to Azure, so Azure Reader wasn't granted. Start again from Sources. | Start again from **Sources**. |
| Azure didn't answer, so Azure Reader wasn't granted. Try again in a few minutes. | Try again in a few minutes. |
| Azure didn't list the subscriptions the account can see, so Azure Reader wasn't granted. Sign in again and accept the permission Microsoft asks for. | Sign in again and accept the permission. |
| Pick at least one subscription to grant Azure Reader on. | Select at least one subscription, then click **Apply**. |
| Azure Reader is granted only on the subscriptions the sign in listed. Pick from that list. | Pick from the listed subscriptions. |
| Foundry User is assigned only on the AI Foundry projects the sign in listed under the subscriptions picked. Pick from that list. | Select the project's subscription too, or pick from the listed projects. |
| The account that signed in isn't a Power Platform administrator or a Global Administrator, so 1Secure wasn't registered as a Power Platform management application. Sign in with one of those roles. | Sign in as a Power Platform administrator or Global Administrator. |
| Power Platform refused the registration ([status]), so 1Secure wasn't registered as a Power Platform management application. Try again, or register it yourself with New-PowerAppManagementApp. | Try again, or follow **Do it yourself** on the card. |
| Power Platform didn't answer, so 1Secure wasn't registered as a Power Platform management application. Try again in a few minutes. | Try again in a few minutes. |
| Microsoft's sign in answer carried no access to Power Platform, so 1Secure wasn't registered as a Power Platform management application. Start again from Sources. | Start again from **Sources**. |
| The account that signed in isn't a Power Platform administrator or a Global Administrator, so 1Secure wasn't added as an application user. Sign in with one of those roles. | Sign in as a Power Platform administrator or Global Administrator. |
| Power Platform didn't answer, so 1Secure wasn't added as an application user. Try again in a few minutes. | Try again in a few minutes. |
| Power Platform didn't list the environments, so 1Secure wasn't added as an application user. Try again. | Try again. |
| Microsoft's sign in answer carried no access to Power Platform, so 1Secure wasn't added as an application user. Start again from Sources. | Start again from **Sources**. |
| Pick at least one environment to add 1Secure to. | Select at least one environment, then click **Add 1Secure**. |
| 1Secure is added only to the environments the sign in listed. Pick from that list. | Pick from the listed environments. |
| The 1Secure registration's id isn't set here, so 1Secure wasn't registered as a Power Platform management application. Contact Netwrix support. | Contact Netwrix support. |
| Microsoft Graph didn't list the SharePoint sites the account can see, so Sites.Selected full control wasn't granted. Sign in again and accept the permission Microsoft asks for. | Sign in again and accept the permissions. |
| Microsoft Graph didn't answer, so Sites.Selected full control wasn't granted. Try again in a few minutes. | Try again in a few minutes. |
| Microsoft's sign in answer carried no access to Microsoft Graph, so Sites.Selected full control wasn't granted. Start again from Sources. | Start again from **Sources**. |
| Microsoft didn't let the account that signed in assign app permissions, so 1Secure wasn't given Sites.FullControl.All. Sign in as a Global Administrator or a Privileged Role Administrator, or use Do it yourself. | Sign in as a Global Administrator or Privileged Role Administrator, or follow **Do it yourself** on the card. |
| Microsoft Graph refused the permission, so 1Secure wasn't given Sites.FullControl.All. Try again, or use Do it yourself. | Try again, or follow **Do it yourself** on the card. |
| The account that signed in isn't a Power Platform administrator or a Global Administrator, so the Power Platform policies weren't read. Sign in with one of those roles. | Click **Finish Power Platform setup** on the Power Platform policies card again, and sign in with one of those roles. |
| Power Platform refused the read ([status]), so the Power Platform policies weren't read. Try again. | Try again. |
| Power Platform didn't answer, so the Power Platform policies weren't read. Try again in a few minutes. | Try again in a few minutes. |
| Power Platform answered in a shape 1Secure doesn't read, so the Power Platform policies weren't read. Try again. | Try again, and contact Netwrix support if it repeats. |
| The directory isn't known here, so the Power Platform policies weren't read. Start again from Sources. | Start again from **Sources**. |
| The grant was made, and Microsoft takes a few minutes to apply it, so it isn't recorded yet. Select Test again shortly. | Wait a few minutes, then click **Test again**. |
| Microsoft can take minutes to apply a role. You can continue while 1Secure checks. | Shown on a permission's card on **Connect Microsoft** while the role granted applies, with the line reading **Applying**. Wait, or carry on: 1Secure tests the sources it opens again for five minutes. |
| Registered. A System Administrator must add the app as application user per environment. | The registration worked, and an environment admits no application user for the app registration. Have a System Administrator of each environment add it, as the steps under the sentence say, or use **Finish Power Platform setup** on the Power Platform policies card. |
| This directory blocks the app, or you aren't its administrator. | Shown on Microsoft Entra ID in the Connecting window, after "Refused each time for 45 seconds. Testing stopped." The other sources read "Not tested". Click **Sign in again** and sign in as an administrator of the directory you mean to connect. |
| Entra ID isn't connected with a Microsoft sign in here, so there is nothing to finish. | The Microsoft sign in isn't offered here. Grant the permission yourself, as **Do it yourself** on the card describes. |
| Connect Microsoft Entra ID with Microsoft first, so 1Secure can be granted this site. | Connect Microsoft Entra ID with **Sign in with Microsoft**, then click **Approve** again. |
| The account that signed in doesn't see this site in SharePoint, so it wasn't granted. Sign in as an owner of the site and approve it again. | Click **Approve** again and sign in as an owner of the site. |
| Your account doesn't have full control of this site, so it wasn't granted. Ask an owner of the site to approve it. | Ask an owner of the site to click **Approve**. |
| Microsoft didn't accept the grant for this site. Try again. | Click **Approve** again. |

Where Microsoft didn't sign the administrator in, the sentence can name Microsoft's error code in brackets. The page also shows Microsoft's own answer under **Technical details**. A refusal with a code that has no sentence of its own keeps the general sentence and adds "Microsoft error code: [code]" after it.

**Request approval** is offered where an administrator's approval can help: you canceled, you aren't an administrator, or the tenant blocks people from consenting to apps. It isn't offered where the request was already sent, the app is disabled, the app has no reply address, you aren't assigned to the app, Conditional Access blocked the sign in, or a service isn't in the tenant.

On a permission's card, "The account that signed in is not a Global Administrator or a Privileged Role Administrator of the directory" also shows, with that card's ending. A sentence that ends "so nothing was connected" on the first sign in ends instead "so the AI Reader role was not granted", "so Azure Reader was not granted", "so 1Secure was not registered as a Power Platform management application", "so the Power Platform policies were not read", "so 1Secure was not added as an application user", "so 1Secure was not given Sites.FullControl.All" or "so Sites.Selected full control was not granted" on that permission's card. Where a sentence shows [error] or [status], it names Microsoft's code there.

## Scan drawer

### The scan's sentence

Under its times, the drawer can show one sentence for the scan as a whole. After **Scan all**, the **Sources** page shows the same sentence, or the first two rows where the scan was refused at the start.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| A scan is already running for your organization. Wait for it to finish, then scan again. | Your organization runs one scan at a time. | Wait for the running scan to finish, then scan again. |
| Scans can't start right now, because their results couldn't be saved. Contact Netwrix support. | 1Secure can't save scan results at the moment, so no scan was started. | Contact Netwrix support. |
| "The scanner couldn't be started, so nothing was scanned. Something went wrong on our side. It has been recorded; try again." | The scan didn't start. | Scan again. If it fails again, contact Netwrix support. |
| "The scan didn't finish. Something went wrong on our side. It has been recorded; try again." | The scan stopped with an error. | Scan again. If it fails again, contact Netwrix support. |
| The scan didn't start, because a setting of [platform] is missing or can't be used. Open the source in Sources, correct the setting it marks, then scan again. | AI Security refused a source's settings before it read anything. | Open the source, correct the setting it marks, then scan again. |
| The scanner was still running after [time] and was stopped. Nothing was imported from this run. | The scan ran past its time limit, which the sentence gives in minutes. | Raise **Time per source** on **Settings**, then scan again. |
| 1Secure lost track of the scan before it finished. Scan again. | The scan was interrupted a second time, for example by a second restart of 1Secure, or a person stopped it. A scan a restart stops the first time is put back and runs again on its own, so it shows no sentence, and its row and drawer say "Started again after a restart". | Scan again. |
| The scan was abandoned. Nothing reported what became of it for longer than a scan can take, which is what a restart in the middle of one leaves behind. Start another. | The scan stopped reporting, usually after a restart. | Scan again. |
| "The scan read nothing. Something went wrong on our side. It has been recorded; try again." | The scan ran to the end and read nothing. | Scan again. If it fails again, contact Netwrix support. |
| The scan read nothing, because every platform it was asked to read refused it. Grant what each platform names, then scan again. | Every platform refused the scan. | Grant what each source names, then scan again. |
| No source is connected. Connect a source and scan again. | Nothing is connected to scan. | Connect a source, then scan again. |
| Every connected source is disabled, so nothing was scanned. Enable a source and scan again. | Every source is turned off. | Turn a source on, then scan again. |
| No source this scan was asked for is connected for this organization, so nothing was scanned: [sources]. | The sources asked for are no longer connected. | Scan from **Sources** again. |
| These sources the scan was asked for aren't connected for this organization and weren't scanned: [sources]. | Some sources asked for are no longer connected. The rest were scanned. | Nothing, unless you want them scanned. Then connect them again. |
| No connected source could be scanned. Each source says why on its own status, and a credential that is missing, incomplete, or can't be opened is entered again there. | No source could be launched. | Read each source's result, and enter any credential it names again. |
| No connected source was read, because each one refused what the scan asked for. Each source says what to grant on its own status; grant it, then scan again. | Every source was refused. | Grant what each source names, then scan again. |
| No connected source was read, so nothing was imported from this run. Each source says why on its own status. | No source finished. | Read each source's result. |
| Every connected source was read, but part of [sources] couldn't be. Its status says what is missing and what to do. | The named sources were read in part: their read stopped short. A source that only skipped things isn't named here. | Read their "Not scanned:" and "To fix:" lines. |
| Every connected source was read, but part of [n] sources couldn't be read. Each one's status says what is missing and what to do. | More than three sources were read in part, so the sentence counts them and the list of sources names them. | Read their "Not scanned:" and "To fix:" lines. |
| [n] of [total] connected sources were read. The counts come from those [n]. Open the source that wasn't read to see why. | Some sources weren't read. | Read the result of each source that wasn't read. |

Where several sources were read in part, the sentence says "Each one's status" instead of "Its status". After the count of sources read, it can add "Part of [sources] could not be read" and what their status says.

### The source's result

Each source in a scan ends with one of these sentences.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| Scan complete. | The scan read the source. | Nothing. |
| [N] agents found, [M] read, [K] items skipped | The scan read the source to the end and skipped things it couldn't read, such as an item the platform refused or a permission not granted. The source reads Succeeded. | Click the count to see each thing skipped and what to do. **Export** downloads the list. |
| Part of [platform] wasn't read. If it repeats, use Copy for support. | The scan read the source in part, and no "Not scanned:" line says what it missed. Where such lines are shown, the drawer shows them in place of this sentence. | Scan again. If it repeats, click **Copy for support** and send it to Netwrix support. |
| Part wasn't read. If it repeats, send Copy for support to Netwrix. | The scan left no reason for what it missed. | Scan again. If it repeats, click **Copy for support** and send it to Netwrix support. |
| [platform] refused the scan before anything was read. | The platform refused the scan before anything was read. | Grant or fix what it names, then scan again. |
| "Failed on our side. Try again." | The scan stopped before finishing. | Scan again. If it fails again, send the details to Netwrix support. |
| The scan didn't finish. If it repeats, use Copy for support. | The scan stopped with an error and left no reason. | Scan again. If it happens again, click **Copy for support** and send it to Netwrix support. |
| The [Platform] read couldn't sign in. Check the source's credential, then scan again. | AI Security couldn't sign in to the platform. | Check the source's credential with **Edit**, then scan again. |
| Results weren't saved because of a 1Secure fault. Scan again shortly. | The scan read the source, and 1Secure couldn't save its results. Where 1Secure recorded the reason, the source drawer shows it behind **Details**, the scan drawer under the source's sentence, and the **Scans** row's outcome tooltip as a support line. | Scan again in a few minutes. If it repeats, send that reason to Netwrix support. |
| Results weren't saved because of a 1Secure fault. Contact Netwrix support. | 1Secure didn't accept this scan's results for your organization. | Contact Netwrix support. |
| Results weren't saved. Scan again in a few minutes. | The results didn't reach 1Secure. The recorded reason, where there is one, is behind **Details** as for the previous row. | Scan again in a few minutes. If it fails again, contact Netwrix support. |
| Out of memory. Scan again, and contact support if it repeats. | The scan ran out of memory. | Scan again. If it happens again, contact Netwrix support. |
| The scan couldn't start because of a fault in 1Secure. Contact Netwrix support. | The scan's own settings couldn't be read. | Contact Netwrix support. |
| Results weren't saved because of a 1Secure fault. Scan again shortly. | 1Secure didn't accept the scan's results. | Scan again in a few minutes. |
| The scan took too long and was stopped. Nothing was saved from it. | The scan ran past its time limit. | Raise **Time per source** on **Settings**, then scan again. |
| The scan was interrupted. Scan again. | The scan was stopped, for example by a restart of 1Secure. | Scan again. |
| Interrupted by a service update, runs again at the next scan | A 1Secure update or restart stopped the scan. | Nothing. The next scan reads the source again. |
| The scan was stopped before this source was scanned. No results were saved. | A person stopped the scan before it read this source. | Scan again when you are ready. |
| The scanner couldn't start. | The scan couldn't be started. | Scan again. If it fails again, contact Netwrix support. |
| Scanning this platform isn't supported. | AI Security doesn't read this platform. | Nothing. The source stays listed. |
| Not scanned because the credential was refused. Fix it and test again. | The scan left the source out, because its last test, or the last scan, was refused on the credential itself. A scan of every source tests it again first. | Enter the credential again with **Edit**, then test again. The next scan reads the source after the test passes. |
| Not set up, followed by the reason | The tenant has nothing for this source to read: no Azure subscription, no license for the product, the product not set up on the tenant, or no Power Platform environment with a Dataverse database. The source counts as read, not failed, and its test reads **Not set up** too. Its last test isn't marked passed, so a scan of every source tests it again first. An Azure source reads this only where the administrator's Azure Reader sign in saw no subscription. | Nothing, unless you mean to add what the reason names. |
| Not scanned because the last test found nothing to read. | The scan left the source out, because its last test found no Power Platform environment. | Make the 1Secure registration a Power Platform management application, or name the environments in the source's settings, then test again. |
| Not scanned because the Microsoft Entra ID source is disabled. Enable it and scan. | The Microsoft Entra ID source this source reads with is turned off. | Turn it on and scan again. |
| [Platform] refused the read. | The platform refused one of its reads, or didn't accept the credential. | Grant the permission or enter the credential named under it, then scan again. A refused source alone doesn't offer **Retry failed sources**, because only a grant fixes it. |
| "[platform] failed on our side. The rest was read." | The read of one platform failed in 1Secure; the rest was read. | Scan again. If it fails again, contact Netwrix support. |
| Scanning is disabled, so nothing was scanned. The request was recorded. | Scanning isn't turned on, so no scan runs. | Nothing. The request was recorded. |

Where a sentence shows [Platform], the drawer names the platform, for example "Okta refused the read."

A source that was never launched because of its credential shows the same sentence as the connection test, under [Connection test](#connection-test).

### What wasn't scanned

A partly read source, one whose read stopped short, lists what it didn't read after "Not scanned:" and what to do after "To fix:". A source read to the end lists the same things as its things skipped, and still reads Succeeded. Each thing skipped shows as one short bullet with the thing and what to do, for example "File labels on a site: check Sites.Read.All". The tables in this section list the full sentences, what wasn't read and what to do, which are behind its **Details**. Where there is nothing to do, such as a limit the platform or 1Secure sets, no To fix line is shown, and the table says None. These are every pair a scan can show, grouped by platform. Where a source's read stopped with an error and 1Secure recorded why, the first row gives way to one that says why. [address] is Microsoft Graph, or the address the read was sent to, and otherwise the platform's name.

On a source connected with your own app registration, every sentence that names the 1Secure registration names the app registration instead, for example "open App registrations, the app registration, then API permissions". Where the scan ran out of time on a source, that is one line. A read the deadline cut partway and results it left unsent aren't listed beside it, and their details go with the details for Netwrix support.

**Every platform**

| Not scanned | To fix |
|-------------|--------|
| Anything from this source, because the scanner stopped with an error. | Scan again, and if it fails again, send Copy for support to Netwrix support. |
| Anything from this source, because [address] didn't answer the scanner. | Scan again. |
| Anything from this source, because [address] refused the scanner's read. | Open the source's permission list in 1Secure, grant each permission it marks missing, then scan again. |
| Anything from this source, because [address] answered with an error, HTTP [status]. | Scan again. |
| Anything from this source, because [address] gave an answer the scanner didn't expect, HTTP [status]. | Scan again, and if it fails again, send Copy for support to Netwrix support. |
| Anything from this source, because [Platform] didn't answer in time. | Scan again. |
| Anything from this source, because [Platform] couldn't be reached. | Scan again. |
| Anything from this source, because [Platform] sent an answer the scanner couldn't read. | Scan again, and if it fails again, send Copy for support to Netwrix support. |
| Anything from this source, because the scanner hit a fault of its own, not one in the source's settings or permissions. | Scan again, and if it fails again, send Copy for support to Netwrix support. |
| The rest of this source, because the scan ran out of time. | Raise Time per source under Settings, then scan again. |
| The activity on this source, because the scan ran out of time after reading what the source holds. | Raise Time per source under Settings, then scan again. |
| The activity on this source, because the scanner stopped with an error after reading what the source holds. | Scan again, and if it fails again, send Copy for support to Netwrix support. |
| The rest of this source, because it stopped answering in time. | Scan again to read the rest. |
| The activity on this source, because it stopped answering in time after reading what the source holds. | Scan again to read the rest of the activity. |
| The rest of one read, because the platform asked the scanner to slow down for longer than a scan allows. | Wait for the next scan, which reads the rest. |
| Activity after [moment], which the next scans read. | None. The read reached the most it reads in one scan, and the next scans read on from there. The source still reads Succeeded. |
| The rest of the activity, because the last two follow on scans read nothing new. | Scan again later. The next scan reads on from where the last read stopped. |
| The rest of a long list, because the scanner reached the most it reads in one scan. | Set Run scans to Every day under Settings, Scan schedule, so each scan reads a shorter span. |
| Part of the results, which were read but didn't reach 1Secure in time. | Raise Time per source under Settings, then scan again. |
| Anything from this source, because it didn't answer. | Check that the source is reachable, then test the connection again. |
| How many files each agent can reach, which shows as unknown. | None. |
| The Azure resources under a subscription or resource group an agent holds a role on. | Give the app registration the Reader role on the subscriptions it scans. |

**A read the platform refused**

A platform that refuses a read with no pair of its own names who refused and what. [Who] is Microsoft for a Microsoft read and the platform's address otherwise. A read with no permission on record is said as part of the source, and the source's permission list in 1Secure marks what is missing. In the activity pass the first sentence starts "The activity on this source" instead.

| Not scanned | To fix |
|-------------|--------|
| Anything from this source, because [Who] refused one of its reads. | [Who] refused [the read]: [the grant that covers it], then scan again. |
| Anything from this source, because Microsoft refused one of its reads. | Microsoft refused the list of delegated permission grants: grant DelegatedPermissionGrant.Read.All with admin consent, then scan again. |
| Part of this source, because [Who] refused a read. | Open the source's permission list in 1Secure, grant each permission it marks missing, then scan again. |
| Anything from this source, because [Who] didn't accept its credential. | [Who] didn't accept the credential: enter the secret again, then scan again. |
| Anything from this source, because Microsoft didn't accept its credential. | Microsoft didn't accept the credential: enter the secret again, or sign in with Microsoft again if the source was connected that way, then scan again. |

**Microsoft Entra ID, SharePoint, Purview and Agent 365**

| Not scanned | To fix |
|-------------|--------|
| One Microsoft read, because Microsoft slowed the scanner down. | Wait for the next scan, which reads it again. |
| One Microsoft read, because Microsoft didn't answer. | Scan again later. |
| One Microsoft read, because Microsoft no longer answers the scanner's request. | Send Copy for support to Netwrix support, because 1Secure needs an update. |
| Anything from Microsoft Entra ID, because the app registration lacks Application.Read.All to list the directory's apps and agent identities. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Application.Read.All as an application permission and grant admin consent. |
| The app roles and owners of the directory's apps and agent identities, because the app registration lacks Application.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Application.Read.All as an application permission and grant admin consent. |
| The tenant's consent and app registration settings, because the app registration lacks Policy.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Policy.Read.All as an application permission and grant admin consent. |
| The tenant's permission grant policies, the conditions users may consent to apps on, because the app registration lacks Policy.Read.PermissionGrant. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Policy.Read.PermissionGrant as an application permission and grant admin consent. |
| The secrets and certificates on the tenant's app registrations, because the 1Secure registration lacks Application.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Application.Read.All as an application permission and grant admin consent. |
| The directory's people, because the app registration lacks User.Read.All, so owners can be chosen only from people an agent already names. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add User.Read.All as an application permission and grant admin consent. |
| Some of the directory's people, because the directory holds more than one scan reads. | None. |
| The directory roles held by agent identities and people, which show as unknown because the app registration lacks RoleManagement.Read.Directory. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add RoleManagement.Read.Directory as an application permission and grant admin consent. |
| The organization's verified domains, because the app registration lacks Organization.Read.All, so the hosts an agent calls can't be told inside the company from outside it. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Organization.Read.All as an application permission and grant admin consent. |
| The sponsor of each agent identity and the user account paired with it, because the app registration lacks User.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add User.Read.All as an application permission and grant admin consent. |
| The owners and sponsors of each agent identity blueprint, because the app registration lacks User.Read.All, so its agents read as unowned. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add User.Read.All as an application permission and grant admin consent. |
| The owners of each app registration, because the 1Secure registration lacks User.Read.All, so an agent owned only there reads as unowned. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add User.Read.All as an application permission and grant admin consent. |
| The department, job title, account state and manager of each owner, because the app registration lacks User.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add User.Read.All as an application permission and grant admin consent. |
| When each agent identity last signed in, because the app registration lacks AuditLog.Read.All, so stale agents aren't found. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLog.Read.All as an application permission and grant admin consent, on a tenant with Microsoft Entra ID P1. |
| When each agent identity last signed in, because Microsoft no longer answers the scanner's request. | Send Copy for support to Netwrix support, because 1Secure needs an update. |
| Who consented to each app, because the app registration lacks AuditLog.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLog.Read.All as an application permission and grant admin consent. |
| Part of who consented to each app, because Microsoft slowed the scanner down. | Wait for the next scan, which reads it again. |
| Who disabled an identity, gave it a role or added a secret to it, and when, because the app registration lacks AuditLog.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLog.Read.All as an application permission and grant admin consent. |
| Part of who disabled an identity, gave it a role or added a secret to it, because Microsoft slowed the scanner down. | Wait for the next scan, which reads it again. |
| People's sign ins to AI apps, because the app registration lacks AuditLog.Read.All, so those apps have no count of people using them. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLog.Read.All as an application permission and grant admin consent, on a tenant with Microsoft Entra ID P1. |
| Part of people's sign ins to AI apps, because Microsoft slowed the scanner down. | Wait for the next scan, which reads it again. |
| Sign ins by agents and other identities, because the app registration lacks AuditLog.Read.All, so none reaches the Activity tab. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLog.Read.All as an application permission and grant admin consent, on a tenant with Microsoft Entra ID P1. |
| Part of the sign ins by agents and other identities, because Microsoft slowed the scanner down. | Wait for the next scan, which reads the same days again. |
| Sign ins by agents and other identities, because Microsoft turned away the scanner's request. | Send Copy for support to Netwrix support, because 1Secure needs an update. |
| People's sign ins to agent apps, because the app registration lacks AuditLog.Read.All, so none reaches the Activity tab. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLog.Read.All as an application permission and grant admin consent, on a tenant with Microsoft Entra ID P1 or P2. |
| Part of people's sign ins to agent apps, because Microsoft slowed the scanner down. | Wait for the next scan, which reads the same days again. |
| People's sign ins to agent apps, because Microsoft turned away the scanner's request. | Send Copy for support to Netwrix support, because 1Secure needs an update. |
| People's Microsoft 365 Copilot use, because the app registration lacks Reports.Read.All, so none reaches the Activity tab. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Reports.Read.All as an application permission and grant admin consent, outside U.S. government and China clouds. |
| Sign ins by people and agents, because this directory has no Microsoft Entra ID P1. | Add Microsoft Entra ID P1 to this directory, because no permission is missing. |
| The rest of a sign in or audit log read that stopped partway, which keeps what it read before. | Wait for the next scan, which reads the same days again. |
| Sign ins after [date and time], which the next scans read. | None. |
| The [sign in or audit log] after the [days] this scan read, which the next scans read. | None. |
| The [sign in or audit log] before the [days] this scan read, newest first, which the next scans read. | None. |
| The sign in activity, because a newer scan started and reads it instead. | No action is needed, because the newer scan reads on from there. Only a newer scan that reads this source, or every source, sets the read aside; a scan of other sources leaves it to go on. |
| The sign in log read didn't finish. | Scan again. |
| Any SharePoint site, because the app registration lacks Sites.Read.All, so each agent's SharePoint reach stays every site in the tenant. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Sites.Read.All as an application permission and grant admin consent. |
| The list of SharePoint sites, which came back empty although the root site answered, because the app registration lacks Sites.Read.All as an application permission. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Sites.Read.All as an application permission, not a delegated one, and grant admin consent. |
| Some SharePoint sites, because each scan searches part of the tenant and keeps agents found earlier. | Raise Sites scanned under Scan settings on the source card. |
| What data some SharePoint agents are grounded in, because their files couldn't be read. | Scan again, and if the same agents stay unread, send Copy for support to Netwrix support. |
| Who can open some SharePoint agents or the data they are grounded in. | Scan again, and if the same agents stay unread, send Copy for support to Netwrix support. |
| Some files inside the largest libraries agents are grounded in, because each scan lists part of a very large library and the next scan lists on from there. | None. |
| Which files inside some agents' knowledge sources carry an Anyone link, an organization link or a sensitivity label, because those sources couldn't be listed. | Scan again, and if the same knowledge sources stay unread, send Copy for support to Netwrix support. |
| The sensitivity labels of the files inside agents' knowledge sources. | Scan again, and if the labels stay unread, send Copy for support to Netwrix support. |
| [n] libraries wait for the next scan. | None. |
| The Restricted Content Discovery setting of the sites that hold agents. | None. |
| Any SharePoint agent, because the app registration lacks Sites.Read.All, so no site let the scanner list its document libraries. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Sites.Read.All as an application permission and grant admin consent. |
| Agents on 2 SharePoint sites, because they are locked. The count and the reason are the scan's own. | Check in the SharePoint admin center that these sites aren't locked. |
| The rest of the search for SharePoint agents, because SharePoint Online slowed the scanner down. | Scan outside busy hours, or lower Sites scanned under Scan settings on the source card. |
| A SharePoint site, library, or agent file that couldn't be fully read. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| Which apps hold a grant on each SharePoint site. | Approve the site on the Sites tab of the SharePoint Online source, or choose All sites on the SharePoint site permissions card. |
| The app grants on SharePoint sites, because Microsoft didn't answer. | Scan again, and check the Microsoft 365 service health dashboard if it keeps failing. |
| The app grants on the remaining SharePoint sites, because Microsoft stopped answering partway. | Wait for the next scan, which reads them again. |
| App grants and sharing on 2 SharePoint sites, because SharePoint refused the scanner. The count is the scan's own. | Check these sites aren't locked in the SharePoint admin center. |
| App grants and sharing on 2 SharePoint sites, because 1Secure has no access there. The count is the scan's own. | Approve these sites on the Sites tab of the SharePoint Online source, or choose All sites on the SharePoint site permissions card. |
| The app grants on the SharePoint sites that refused the scanner. | Check in SharePoint that those sites aren't locked or restricted. |
| Which agent holds each SharePoint site grant, because the app registration lacks Application.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Application.Read.All as an application permission and grant admin consent. |
| The sharing links on SharePoint sites, because the app registration lacks Sites.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Sites.Read.All as an application permission and grant admin consent. |
| The sharing links on SharePoint sites, because Microsoft accepted neither of the scanner's requests. | Send Copy for support to Netwrix support, because 1Secure needs an update. |
| The rest of the SharePoint sites your agents reach, because SharePoint Online slowed the scanner down. | Scan outside busy hours. |
| Every site but the root site, because no other source in this scan named a site. | Scan SharePoint Online together with SharePoint agents, Copilot Studio or Agent 365. |
| The owner, file count and last activity of each SharePoint site, because the app registration lacks Reports.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Reports.Read.All as an application permission and grant admin consent, outside U.S. government and China clouds. |
| The owner and file count of sites whose names Microsoft 365 hides in reports. | None. |
| The owner, file count and last activity of each SharePoint site, because no entry of Microsoft's usage report matched a site. | Send Copy for support to Netwrix support. |
| The tenant's external sharing settings, because the app registration lacks SharePointTenantSettings.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add SharePointTenantSettings.Read.All as an application permission and grant admin consent. |
| The owners of group connected SharePoint sites whose report owner is hidden or missing, because the app registration lacks Group.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Group.Read.All as an application permission and grant admin consent. |
| The owners of some group connected SharePoint sites, because each scan looks up a limited number of groups. | None. |
| A SharePoint site that Microsoft listed incompletely, so it couldn't be read. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| Microsoft agent and Copilot runs from the Purview audit log, because the app registration lacks AuditLogsQuery.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLogsQuery.Read.All as an application permission and grant admin consent, and turn on Purview Audit. |
| Microsoft agent and Copilot runs from the Purview audit log, because Purview Audit is off or not licensed for this tenant. | Turn on Purview Audit in the Microsoft Purview portal, on a plan that includes Audit (Standard), such as Microsoft 365 E3 or E5. |
| AI use events, because Purview auditing appears to be off in this tenant. | Turn on auditing in the Purview portal. |
| Part of the Microsoft agent runs, because Microsoft slowed the audit search down. | Wait for the next scan, which searches the same days again. |
| Microsoft agent runs, because this tenant's allowance of audit searches is used up for now. | Wait for the next scan, which searches the same days again. |
| Microsoft agent runs, because the audit search failed or didn't finish in time. | Wait for the next scan, or scan more often so each search covers fewer days. |
| Microsoft agent runs, because Microsoft turned away the scanner's audit search. | Send Copy for support to Netwrix support, because 1Secure may need an update. |
| Any sensitivity label, because the app registration lacks InformationProtectionPolicy.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add InformationProtectionPolicy.Read.All as an application permission and grant admin consent. |
| Any sensitivity label, because Microsoft didn't answer. | Wait for the next scan, which reads the labels again. |
| The sensitivity labels on the files of a site an agent reaches, because the site refused a read that needs Sites.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and check that Sites.Read.All is added as an application permission with admin consent. |
| The labels on some files of a site, because search couldn't count them. | Ensure Microsoft Search is available to the app registration. |
| The default label of some sites' document libraries and their groups, because the app registration lacks Sites.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and check that Sites.Read.All is added as an application permission with admin consent. |
| The labels on the Microsoft 365 groups behind the sites agents reach, because the app registration lacks Group.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Group.Read.All as an application permission and grant admin consent. |
| The Azure resources under the subscriptions and resource groups agents hold roles on. | Give the app registration the Reader role on the subscriptions or management groups it should read. |
| The Azure resources in one subscription. | Give the app registration the Reader role on this subscription. |
| The Agent 365 catalog of agent packages, because the app registration lacks CopilotPackages.Read.All. | In the Microsoft Entra admin center, open Enterprise applications, the 1Secure registration, then Permissions, and select Grant admin consent for your tenant again, then test again in a few minutes, since the registration already asks for CopilotPackages.Read.All and Microsoft can take a minute to apply a consent, or, with no Microsoft Agent 365 license on the tenant, connect Microsoft Defender for Endpoint, which lists the same agents. |
| The Agent 365 catalog of agent packages, because Microsoft refused the read although the app registration holds CopilotPackages.Read.All with admin consent. | Check that the tenant has a Microsoft Agent 365 license, test again in a few minutes in case Microsoft has not yet applied the admin consent, or connect Microsoft Defender for Endpoint, which lists the same agents. |
| The organization's declarative and custom engine agents in the Agent 365 catalog, because Microsoft lists them only for a tenant with an Agent 365 license. | Either add a Microsoft Agent 365 license, or connect Microsoft Defender for Endpoint with ThreatHunting.Read.All, which lists these agents without one. |
| The Agent 365 catalog of agent packages, because the tenant has not set it up. | Add a Microsoft Agent 365 license and publish an agent package to its catalog. |
| The publish requests waiting in the Agent 365 admin center, because the app registration lacks AppCatalog.Read.All. | In the Microsoft Entra admin center, open Enterprise applications, the 1Secure registration, then Permissions, and select Grant admin consent for your tenant again, then test again in a few minutes, since the registration already asks for AppCatalog.Read.All and Microsoft can take a minute to apply a consent. |

**A sign in or audit read that stopped partway.** In place of "The rest of a sign in or audit log read that stopped partway, which keeps what it read before.", the source names the log and what it left out, for example "The sign in log for the days [days], with the [n] rows read from the other days kept.", "The audit log for the rest of the day [day], with the [n] rows read kept.", "The rest of the sign in log after its first [n] rows, which are kept." or "Part of the audit log, which stopped partway." The fix is the same: wait for the next scan, which reads the same days again. 1Secure starts that scan itself shortly after this one ends, as it does where Microsoft slowed the read down. See [Scans](/docs/1secureaisecurity/admin/scans.md#activity-read-over-more-than-one-scan).

**Activity read on by follow on scans.** Where a scan stopped the sign in or audit read at its hour and the source says "which the next scans read", 1Secure starts the next scan itself as soon as no other scan is running, and continues until the log is read to the end, up to 12 scans in a row. See [Scans](/docs/1secureaisecurity/admin/scans.md#activity-read-over-more-than-one-scan). Do nothing unless the source still says it after the twelfth; then scan it again, or wait for the schedule.

**Site names hidden in reports.** Microsoft 365 hides user, group, and site names in its usage reports by default, so those sites have no owner or file count from the report. Turning that off would close the gap, but it isn't recommended: it shows real names in every report to every admin in the tenant, and Microsoft records the change as an audit event. To turn it off anyway, open the Microsoft 365 admin center, select **Settings > Org settings > Services > Reports**, and clear **Conceal user, group, and site names in all reports**.

**Azure, Power Platform, Copilot Studio and Defender for Endpoint**

| Not scanned | To fix |
|-------------|--------|
| The Azure subscriptions the scanner can't read. | Give the app registration the Reader role on each subscription or their management group. |
| The Azure subscriptions and what they hold, because Azure didn't answer. | Wait for the next scan, which reads them again. |
| Any Azure subscription, because none is readable by the app registration. | Give the app registration the Reader role on at least one subscription or its management group. |
| Azure, because no Azure subscription is visible. | Give the registration Reader on one subscription, or leave Azure unconnected. |
| Who created each AI Foundry project, from the activity log. | Give the app registration the Reader or Monitoring Reader role on the subscription. |
| Who changed the model deployments and connections of the AI Foundry agents in a subscription, from the activity log. | Give the app registration the Reader or Monitoring Reader role on the subscription. |
| The agents inside an AI Foundry project. | Give the app registration the Foundry User role, formerly Azure AI User, on each AI Foundry project. |
| The files and connections an AI Foundry agent's tools use. | Give the app registration the Foundry User role, formerly Azure AI User, on each AI Foundry project. |
| Which privileged Azure roles are time bound through Privileged Identity Management. | Ask the subscription's administrator to remove the deny assignment or Azure Policy that stops the Reader role reading role eligibility. |
| Changes to Azure role assignments in a subscription. | Give the app registration the Reader or Monitoring Reader role on the subscription. |
| The Azure read of [resource], which didn't answer. | Scan again, and if it repeats, give the app registration the Reader role on that scope, or Foundry User, formerly Azure AI User, on an AI Foundry project. |
| The name of the role with the id [id], because its role definition was deleted or is out of the scanner's reach. | Check Access control (IAM) on the subscription for role assignments whose role shows as unknown, and remove them if the role was deleted. |
| The name of a role that role assignments hold, because its role definition was deleted or is out of the scanner's reach. | The same as the previous row. Several such roles are one entry, and its details count them and name their ids. |
| Some Logic Apps workflows or their run history. | Give the app registration the Reader role on each subscription that holds Logic Apps. |
| Who changed the Logic Apps agent workflows in a subscription, from the activity log. | Give the app registration the Reader or Monitoring Reader role on the subscription. |
| Some Azure Bot Service bots or their channels. | Give the app registration the Reader role on each subscription that holds bots. |
| Who changed the Azure Bot Service bots, their channels and connections in a subscription, from the activity log. | Give the app registration the Reader or Monitoring Reader role on the subscription. |
| The tenant's Power Platform data policies and cross tenant isolation setting. | On the Power Platform application user line of Connect Microsoft, select **Grant with my sign in**, or make the 1Secure registration a Power Platform management application yourself. |
| The cloud flows in an environment whose address isn't a Microsoft address the scanner trusts. | If this environment is in a sovereign Microsoft cloud, send Copy for support to Netwrix support. |
| The list of Power Platform environments, so only those named in the source's settings are read. | Make the 1Secure registration a Power Platform management application, or name each environment in the source's settings. |
| The cloud flows in an environment where the scanner isn't an application user. | Add the app registration as an application user in each environment with a role that reads flows. Environments that refused alike are one entry, and the line names each after what wasn't read, for example "2 environments refused the scanner: a and b." |
| The runs, connection targets and sharing of the cloud flows, which were listed from the tenant inventory because no environment admits the scanner as an application user. | Add the app registration as an application user in each environment with a role that reads flows. |
| The cloud flows in an environment with no Dataverse database. | None. |
| Power Platform cloud flows, because no environment has a Dataverse database. | Leave Power Platform unconnected. |
| The cloud flows in a Power Platform environment. | Give the 1Secure registration user Read at Organization depth on the Process table. |
| Cloud flows in an environment that listed none, which the scanner may not see. | Give the 1Secure registration user Read at Organization depth on the Process table if the environment has flows. |
| Which connectors each cloud flow reaches, which shows as unreadable. | Give the 1Secure registration user Read on the Connection Reference table in each environment. |
| The display names of custom connectors, so flows show their raw identifiers. | Give the 1Secure registration user Read on the Connector table in each environment. |
| Who owns each cloud flow, so owners show as Dataverse identifiers. | Give the 1Secure registration user Read on the User table in each environment. |
| Cloud flow run history in an environment, so no flow there is reported as unused. | Give the 1Secure registration user Read on the Flow Run table, or turn on run history in Dataverse for the environment. |
| Who else can edit or share each cloud flow, so each flow shows only its primary owner. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| Who else can edit or share the cloud flows past the number a scan asks about. | None. |
| An environment's Dataverse address or the tenant isolation setting, which shows as unknown. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| The Copilot Studio agents in this tenant, because the 1Secure registration doesn't hold the AI Reader role. | In the Microsoft Entra admin center, open Roles and administrators, then AI Reader, and assign the role to the 1Secure registration. |
| Part of the Copilot Studio inventory, because a query answered unexpectedly. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| [count] more [Copilot Studio agents, Power Platform environments or Power Automate flows], past the most one scan lists. The count is the scan's own, and reads More where Microsoft gave none. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| The knowledge sources of the Copilot Studio agents in a Power Platform environment. | Have a System Administrator of that environment add the 1Secure registration as an application user with a role that reads bot components, such as the built in Agent Viewer role. |
| Who the owners and creators of the Copilot Studio agents in an environment are in the directory. | Give the 1Secure registration user in that environment Read on the User table. |
| Who the Copilot Studio agents in an environment are shared with. | Give the 1Secure registration user in that environment Read on the Copilot table, at Business Unit level or deeper. |
| Who the Copilot Studio agents in an environment are shared with, because the security role of the 1Secure registration user there lacks a privilege the read needs. | Add Read on the Copilot table at Business Unit level or deeper and Read on the Team table to the security role of the 1Secure registration user in that environment. |
| Which Microsoft 365 group or Teams team stands behind each Copilot Studio agent shared with a team in an environment. | Give the 1Secure registration user in that environment Read on the Team table. |
| The names and member counts of the Microsoft 365 groups and Teams teams Copilot Studio agents are shared with, because the app registration lacks GroupMember.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add GroupMember.Read.All as an application permission and grant admin consent. |
| Who the Copilot Studio agents in an environment are shared with, past the number a scan asks about. | None. |
| The environment of some Copilot Studio agents, so those with no knowledge source show unknown reach. | Make the 1Secure registration a Power Platform management application so the environment is named. |
| The AI tools on your machines, because Defender refused the read. | Check that Defender for Endpoint is licensed and onboarded, and that ThreatHunting.Read.All is granted. |
| The AI tools on your machines, because Defender for Endpoint isn't licensed or onboarded. | Onboard your machines, or leave this off. |
| The AI tools installed on the machines Microsoft Defender watches, because the read didn't complete. | Wait for the next scan, which reads it again. |
| Who signs in to each machine, because the app registration lacks the Microsoft Graph permission ThreatHunting.Read.All, so AI tools are listed without people. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the Microsoft Graph permission ThreatHunting.Read.All as an application permission and grant admin consent. |
| Who signs in to some machines, because their sign ins passed the most Microsoft Defender answers for one query. | None. |
| When AI tools started on each machine, because the app registration lacks the Microsoft Graph permission ThreatHunting.Read.All, so only installed tools are listed. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the Microsoft Graph permission ThreatHunting.Read.All as an application permission and grant admin consent. |
| When AI tools started on each machine, because Microsoft Defender didn't answer. | Wait for the next scan, which reads it again. |
| Which programs on each machine reached an AI service, because the app registration lacks the Microsoft Graph permission ThreatHunting.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the Microsoft Graph permission ThreatHunting.Read.All as an application permission and grant admin consent. |
| Which programs on each machine reached an AI service, because Microsoft Defender didn't answer. | Wait for the next scan, which reads it again. |
| The agents Microsoft Defender lists from Copilot Studio, Azure AI Foundry and Microsoft 365, with their data sources and triggers, because the app registration lacks ThreatHunting.Read.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the Microsoft Graph permission ThreatHunting.Read.All as an application permission and grant admin consent. |
| The agents Microsoft Defender lists, because Defender holds no agent inventory for this tenant. | Turn on security for AI agents in the Microsoft Defender portal, or leave it off. |
| The agents Microsoft Defender lists, because Defender didn't answer. | Wait for the next scan, which reads it again. |
| AI tool starts past the most Microsoft Defender answers for one query. | None. |
| Requests for AI services past the most Microsoft Defender answers for one query. | None. |
| More [items], past the most one scan lists. The items are machines in Microsoft Defender, software titles in Microsoft Defender, or machines an AI tool is installed on. | None. |
| Which account each AI tool signed in with, because the app registration lacks the WindowsDefenderATP permissions Machine.LiveResponse and Machine.ReadWrite.All. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the WindowsDefenderATP permissions Machine.LiveResponse and Machine.ReadWrite.All as application permissions and grant admin consent, then turn on Live response in the Microsoft Defender portal. |
| Which account each AI tool signed in with, because the app registration lacks the WindowsDefenderATP permission Machine.LiveResponse. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the WindowsDefenderATP permission Machine.LiveResponse as an application permission and grant admin consent. |
| Which account each AI tool signed in with, because the app registration lacks the WindowsDefenderATP permission Machine.ReadWrite.All, so the result couldn't be fetched from Microsoft Defender. | In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the WindowsDefenderATP permission Machine.ReadWrite.All as an application permission and grant admin consent. |
| Which account each AI tool signed in with, because live response is off in Microsoft Defender. | In the Microsoft Defender portal, under Settings, Endpoints, Advanced features, turn on Live response, Live response for servers and Live response unsigned script execution, and give the machines' device group an automation level. |
| Which account AI tools signed in with on some machines, because Microsoft Defender slowed the scanner down. | Wait for the next scan, which asks those machines again. |
| Which account AI tools signed in with on some online machines. | Check that both account scripts are in the live response library under their expected names and that no other live response session is open. |

**AWS Bedrock, Gemini Enterprise, Kubernetes, Docker and NVIDIA OpenShell**

| Not scanned | To fix |
|-------------|--------|
| Anything from this Kubernetes cluster, because its API server didn't answer or refused the token. | Check that the API server address is reachable and that the token's service account may get and list workloads and roles. |
| Some of this Kubernetes cluster's workloads or roles, because the API server refused to list them. | Give the service account 1Secure uses get and list on the workloads and roles it was refused. |
| Some of this Kubernetes cluster's workloads or roles, because the answer wasn't a readable list. | Check that the API server address points at the cluster itself, not at a proxy or a sign in page. |
| More objects in this Kubernetes cluster, past the most one scan lists. | None. |
| Anything from this Docker host, because its Engine didn't answer or refused the certificate. | Check that the Engine address is reachable and that the Engine trusts the client certificate and key. |
| The settings of a running container the Engine wouldn't describe. | Check that no authorization plugin on the Engine stops 1Secure's certificate from inspecting containers. |
| Anything from this OpenShell gateway, because it didn't answer or refused the certificate. | Check that the gateway address is reachable and that the client certificate holds the sandbox:read scope. |
| The policy a sandbox runs under, or the rules it proposed. | Give the client certificate or service account 1Secure uses the config:read scope in each workspace. |
| Who administers an OpenShell workspace, though its sandboxes were read. | Give the client certificate or service account 1Secure uses the workspace:read scope in each workspace. |
| What a sandbox did in this window, because the gateway didn't hand over its log. | Check that the gateway is up and the client certificate holds the sandbox:read scope, then scan again. |
| The oldest of a sandbox's log lines in this window, because the gateway hands over only its newest lines. | Scan more often so each read covers a shorter window. |
| The rest of a list from this OpenShell gateway, because the gateway didn't end the list. | Check that the gateway is an OpenShell gateway on a current version. |
| Anything from this AWS account, because AWS didn't confirm the access key. | Check that the access key ID and secret access key are correct and active. |
| The Bedrock resource [resource], because AWS stopped accepting the access key mid scan. | Check that the access key is still active, then scan again. |
| Bedrock agents, knowledge bases and their reach in [region]. | Attach the AmazonBedrockReadOnly policy to the IAM identity 1Secure uses. |
| Bedrock Agents Classic agents in [region]. | Attach the AmazonBedrockReadOnly policy to the IAM identity 1Secure uses. |
| Bedrock knowledge bases in [region], and the data agents reach through them. | Attach the AmazonBedrockReadOnly policy to the IAM identity 1Secure uses. |
| The Bedrock model invocation logging setting of a region, which shows as unknown. | Attach the AmazonBedrockReadOnly policy to the IAM identity 1Secure uses. |
| AgentCore agents, gateways, or memories in [region]. | Allow bedrock-agentcore:ListAgentRuntimes, GetAgentRuntime, ListGateways, ListGatewayTargets, and ListMemories to the IAM identity 1Secure uses. |
| Some AgentCore agents, gateways, tools, or memories, because the AgentCore service was unreachable in [region]. | Send Copy for support to Netwrix support, because more permissions will not fix this. |
| The owner tags on a Bedrock resource. | Send Copy for support to Netwrix support, because more permissions will not fix this. |
| The tools an AgentCore gateway offers. | Allow bedrock-agentcore:ListGatewayTargets to the IAM identity 1Secure uses. |
| The Bedrock resource [resource] and the data it can reach. | Check the resource policy, the KMS key grant and any permissions boundary on that resource. |
| The Bedrock resource [resource], which AWS said no longer exists. | Wait for the next scan, which shows if the resource is gone. |
| Which IAM users and roles may invoke Bedrock models. | Attach the IAMReadOnlyAccess policy to the IAM identity 1Secure uses, or grant it iam:GetAccountAuthorizationDetails. |
| Bedrock agents, knowledge bases and data sources in regions this scan wasn't set to read. | Add every region that holds Bedrock agents to the source's settings. |
| Agents in any AgentCore region this scan didn't ask. | List the regions that offer AgentCore, or add more regions, in the source's settings. |
| The details of some Bedrock agents, knowledge bases or their parts past the scan's limit. | None. |
| A Bedrock or AgentCore list in [region], because AWS answered in an unreadable shape. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| Calls to Bedrock agents that CloudTrail recorded in [region]. | Grant cloudtrail:LookupEvents to the IAM identity 1Secure uses in each region that holds agents. |
| Some calls to Bedrock agents in [region], because AWS limited the CloudTrail lookups. | Scan at a quieter hour or with fewer regions in the source's settings. |
| Who created the Bedrock agents in [region]. | Grant cloudtrail:LookupEvents to the IAM identity 1Secure uses in each region that holds agents. |
| Who changed the Bedrock agents in [region]: their model, versions, knowledge bases and action groups. | Grant cloudtrail:LookupEvents to the IAM identity 1Secure uses in each region that holds agents. |
| Which Bedrock agents were run, because no CloudTrail Lake event data store is set. | Log Bedrock agent data events to a CloudTrail Lake event data store, grant the IAM identity 1Secure uses cloudtrail:StartQuery and cloudtrail:GetQueryResults on it, and name the store in the source's settings. |
| Which Bedrock agents were run, because the CloudTrail Lake query didn't return. | Grant the IAM identity 1Secure uses cloudtrail:StartQuery and cloudtrail:GetQueryResults on the event data store in the source's settings, and check that the store is enabled. |
| Which Bedrock agents were run, because AWS limited the CloudTrail Lake queries. | Wait for the next scan, which runs the query again. |
| Anything from Google Cloud, because no project is listed for this source. | List the Google Cloud projects to scan in the source's settings. |
| Anything from Google Cloud, because none of the listed projects could be read. | Grant the service account 1Secure uses read only roles on each listed project, then test the connection again. |
| The Google Cloud project [project], because Google answered for a different project. | Check the project IDs in the source's settings and that nothing between 1Secure and Google changes its requests. |
| The Google Cloud project [project], because it isn't active. | Remove the project from the source's settings, or restore it in Google Cloud. |
| The Google Cloud project [project], because its service accounts couldn't be listed. | Grant the service account 1Secure uses the Service Account Viewer role and turn on the IAM API in the project. |
| The service accounts of the Google Cloud project [project], which listed none. | Check that the service account 1Secure uses holds the Service Account Viewer role on that project. |
| Part of the Google Cloud project or organization [project], because a Google API it needs is off. | Turn on the Google API the read needs in that project, then scan again. |
| Part of the Google Cloud project or organization [project], because a permission is missing. | Grant the service account 1Secure uses the permission the read needs on that project. |
| Part of the Google Cloud project or organization [project], which Google refused without a reason. | Check that the Google API the read needs is on and that the service account 1Secure uses holds its permission. |
| Part of the Google Cloud project or organization [project], because the access token lacks the read scope. | Issue a new access token with the Google Cloud read only scope and update it in the source's settings. |
| Part of the Google Cloud project or organization [project], because Google rejected the access token. | Issue a new access token or key for the service account 1Secure uses and update it in the source's settings. |
| Part of the Google Cloud project or organization [project], because Google slowed the scanner down. | Wait for the next scan, which reads it again. |
| Part of the Google Cloud project or organization [project], because its billing account is off. | Link an active billing account to the project, then scan again. |
| Part of the Google Cloud project or organization [project], because a Google service it needs is unavailable. | Check for an organization policy or service perimeter that hides the Google service the read needs. |
| Part of the Google Cloud project or organization [project], because Google reports the project as invalid. | Check the project IDs in the source's settings for one that is mistyped or deleted. |
| Part of the Google Cloud project or organization [project], because Google said it doesn't exist. | Check the project IDs in the source's settings and that the Google API the read needs is on. |
| Part of the Google Cloud project or organization [project], because Google didn't answer. | Wait for the next scan, which reads it again. |
| Which people and accounts hold AI roles in the Google Cloud project [project]. | Turn on the Cloud Asset API in the project and grant the service account 1Secure uses the Cloud Asset Viewer role. |
| The service account keys in the scanned projects, so keys that never expire aren't found. | Grant the service account 1Secure uses the Service Account Viewer role on each project. |
| The keys of some service accounts past the scan's limit. | None. |
| Agent Engine agents in the Google Cloud project [project], in the locations past the scan's limit. | None. |
| Agents in Google Cloud locations whose names weren't region codes. | Scan again, and raise it with Google support if it happens again. |
| Agent Builder apps outside the collections this scan reads. | None. |
| Google Cloud projects in the organization beyond those listed for this source. | List every project to scan in the source's settings. |
| Who created the agents and apps in the Google Cloud project [project]. | Grant the service account 1Secure uses the Logs Viewer role on the project. |
| Who owns or edits the Google Cloud project [project], which is who its agents' owners are suggested from. | Turn on the Cloud Asset API in the project and grant the service account 1Secure uses the Cloud Asset Viewer role. |
| Who created each Google Cloud service account and API key. | None. |
| The agents people built in the Gemini Enterprise app [app]. | Grant the service account 1Secure uses the Agent Admin role on the project, because Google has no read only role for these agents. |
| The agents people built in the Gemini Enterprise business edition, which Google keeps outside your projects. | None. |
| Agent Engine agents in the Google Cloud project [project], in the locations that don't offer Agent Engine, where no agent can run. | None. |
| The data stores and apps in the Google Cloud multi region [location], which Google turned away. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| A service account's keys, or the agents and apps in one Google Cloud location, for [item]. | Check that the service account 1Secure uses can read that account or location, then scan again. |
| The rest of a Bedrock list in [region], because the scanner reached the most it reads in one scan. | Remove regions you don't use from the source's settings. |
| Some Bedrock resources in [region], which AWS listed incompletely. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| Who owns some AgentCore agents, because they carry no tags. | Tag your AgentCore agents with an Owner tag. |
| Some IAM users and roles in this AWS account, because the scanner reached the most it reads in one scan. | None. |
| Which Bedrock agents were run, because the CloudTrail Lake query didn't finish in time. | Wait for the next scan, which runs the query again. |

**Okta, GitHub, Atlassian, Google Workspace, CrowdStrike and Endpoint Protector**

| Not scanned | To fix |
|-------------|--------|
| The apps in this Okta org, so none of its agents are listed. | Give the API token's admin the Okta Read-only Administrator role. |
| Any app in this Okta org, because Okta listed none. | Check that the org has app integrations and that the credential's admin role covers them. |
| Part of this Okta org, because Okta slowed the scanner down. | Wait for the next scan, which reads it again. |
| The Okta data each app can reach through its scope grants. | Give the API token's admin the Super Administrator role. |
| The admin roles held by Okta apps and by the owners of API tokens. | Give the API token's admin the Super Administrator role. |
| The API tokens in this Okta org, so unused tokens aren't found. | Create the API token as an admin whose role includes okta.users.apitokens.read. |
| Expired or revoked API tokens in this Okta org, because Okta lists only active tokens. | None. |
| Some active API tokens in this Okta org, because the scanner reached the most it reads in one scan. | None. |
| Who holds admin roles in this Okta org, including Super Administrator. | Give the API token's admin the Super Administrator role. |
| The Okta users who own apps and API tokens, so owners who have left aren't flagged. | Give the API token's admin the Okta Read-only Administrator role. |
| Owners of Okta apps and API tokens past the scanner's limit. | None. |
| The Okta System Log, so when each API token and service app was last used is unknown. | Give the API token's admin the Okta Read-only Administrator role. |
| The name of this Okta org. | Give the API token's admin the Okta Read-only Administrator role. |
| When each Okta API token and service app was last used, because this scan skipped the System Log. | None. |
| The people and groups assigned to each Okta app, because this scan skipped assignments. | None. |
| The Okta app, user, or API token [item]. | Check that app, user, or API token in Okta, then scan again. |
| The members of this GitHub organization, so its agents and owners aren't listed. | Connect a classic personal access token with read:org owned by an organization owner, or install the 1Secure GitHub App on this organization. |
| Part of this GitHub organization, because GitHub slowed the scanner down. | Wait for the next scan, which reads it again. |
| One GitHub read, because GitHub retired the API version the scanner uses. | Send Copy for support to Netwrix support, because 1Secure needs an update. |
| The organization's default repository permission and two factor requirement. | Grant the token admin:org, or give the GitHub App the Administration read-only organization permission. |
| The fine-grained personal access tokens with access to this GitHub organization. | Install the 1Secure GitHub App on this organization with the Personal access tokens read-only permission. |
| Fine-grained personal access tokens on this GitHub organization, because GitHub answers alike when the token policy was never set. | Check the fine-grained token policy in the organization's GitHub settings. |
| Classic personal access tokens on this GitHub organization, because GitHub lists them only with SAML single sign-on. | Restrict classic personal access tokens in the organization's GitHub settings. |
| The organization's Actions policy and self-hosted runners. | Grant the token admin:org, or give the GitHub App the Administration read-only organization permission. |
| The GitHub Apps installed on this organization and the repositories they reach. | Grant admin:org to a token owned by an organization owner, or give the GitHub App the Administration read-only organization permission. |
| The organization's OpenID Connect subject claim template. | Grant the token read:org. |
| The organization's OpenID Connect subject claim template, because GitHub answered not found. | Confirm the token holds read:org, then scan again. |
| The Copilot seats in this GitHub organization. | Grant read:org or manage_billing:copilot to a token owned by an organization owner. |
| The Copilot seats in this GitHub organization, because GitHub answered as if it had no Copilot subscription. | Confirm the organization has Copilot Business or Enterprise and the token belongs to an organization owner with read:org. |
| The Copilot agents that ran in this GitHub organization. | Turn on Copilot Metrics API access in the organization's Copilot policies, and grant the token manage_billing:copilot or read:org. |
| What each GitHub App, token, and Actions identity did in this organization, who installed each App, and who changed a coding agent's MCP servers. | Grant read:audit_log to a token owned by an organization owner on GitHub Enterprise Cloud. |
| Who changed the MCP servers of a repository's Copilot coding agent in this organization. | Grant read:audit_log to a token owned by an organization owner on GitHub Enterprise Cloud. |
| Who installed each GitHub App in this organization. | Grant read:audit_log to a token owned by an organization owner on GitHub Enterprise Cloud. |
| The workflow runs in this organization's repositories. | Grant the token the repo scope, or give the GitHub App the Actions read-only repository permission. |
| The deploy keys on this organization's repositories. | Grant the token the repo scope, or give the GitHub App the Administration read-only repository permission. |
| The email addresses of the organization's members, so owners show by GitHub login. | Turn on SAML single sign-on or SCIM provisioning in GitHub Enterprise Cloud, or ask members to make a work email public. |
| The GitHub member, token, or repository [item]. | Check the token's access to that member, token, or repository, then scan again. |
| The Atlassian organizations this key belongs to. | Use an organization admin API key from Atlassian Administration with the read:tokens:admin and read:accounts:admin scopes. |
| More Atlassian organizations, past the most one scan lists. | Set the organization ID in the source's settings to choose the organization to scan. |
| [count] more Atlassian organizations, past the most one scan reads. | Set the organization ID in the source's settings to choose the organization to scan. |
| The API tokens in this Atlassian organization. | Grant the organization admin API key the read:tokens:admin scope. |
| The API tokens in this Atlassian organization, because Atlassian answered in a form the scanner doesn't know. | Send Copy for support to Netwrix support, because 1Secure needs an update. |
| The API tokens in this Atlassian organization, so unused tokens aren't found. | Grant the organization admin API key the read:tokens:admin scope. |
| More API tokens in this Atlassian organization, past the most one scan lists. | None. |
| The API tokens of Atlassian service accounts, because Atlassian can't list service accounts. | Review service accounts in Atlassian Administration. |
| The account state of each Atlassian API token's owner, so tokens of people who have left aren't flagged. | Grant the organization admin API key the read:accounts:admin scope. |
| Each use of an Atlassian API token, so tokens show only their last use. | Grant the organization admin API key the read:events:admin scope on an Atlassian Guard or Cloud Enterprise plan. |
| Part of this Atlassian source, because Atlassian slowed the scanner down. | Wait for the next scan, which reads it again. |
| Part of this Atlassian source, because Atlassian answered with an error on its side. | Scan again later, and check Atlassian's status page if the error stays. |
| Part of this Atlassian source, because Atlassian answered not found. | Send Copy for support to Netwrix support, because 1Secure may need an update. |
| Part of this Atlassian source, because Atlassian refused the request for a reason other than permissions. | Send Copy for support to Netwrix support. |
| The Confluence spaces on this site, so spaces open to anonymous readers aren't found. | Give the source's account the read:space:confluence scope, or access to browse the spaces to scan. |
| The Confluence spaces on this site, because Atlassian didn't find the Confluence address. | Check the Confluence site address in the source's settings, or clear the three Confluence settings if the site has no Confluence. |
| Who can open the Confluence space [space], because Confluence listed it incompletely. | Check the space's permissions in Confluence. |
| The users in this Google Workspace domain. | Authorize the service account's client ID for domain-wide delegation with the reports audit and directory user scopes in the Google Admin console, then allow up to a day. |
| The users in this Google Workspace domain, because Google listed none. | Confirm the administrator in the source's settings is a super administrator and the directory user scope is in the domain-wide delegation. |
| Anything from this Google Workspace domain, because Google refused the service account's domain-wide delegation. | Authorize the service account by its numeric client ID with every scope the scan asks for in the Google Admin console, then allow up to a day. |
| Anything from this Google Workspace domain, because the administrator the scan acts as is missing or suspended. | Set an active super administrator as the administrator in the source's settings. |
| Anything from this Google Workspace domain, because Google rejected the sign in as wrongly timed. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| Anything from this Google Workspace domain, because Google rejected the service account key. | Download a new JSON key for the service account in the Google Cloud console and save it in the source's settings. |
| Part of this Google Workspace domain, because Google slowed the scanner down. | Wait for the next scan, which reads it again. |
| The third-party apps users in this domain have authorized. | Add the reports audit scope to the service account's domain-wide delegation in the Google Admin console, then allow up to a day. |
| The apps given domain-wide delegation in this domain. | Add the reports audit scope to the service account's domain-wide delegation in the Google Admin console. |
| The domain-wide delegations in this domain that are in use. | Add the reports audit scope to the service account's domain-wide delegation in the Google Admin console. |
| The domain-wide delegations in use, because Google no longer answers the scanner's request. | Send Copy for support to Netwrix support, because 1Secure may need an update. |
| The apps each user has authorized now, so apps unused since before the audit log window are missed. | Add the directory user security scope to the service account's domain-wide delegation. |
| This domain's policy on third-party app access. | Add the Cloud Identity policies scope to the domain-wide delegation, and set a super administrator as the administrator in the source's settings. |
| The name of this Google Workspace domain. | Add the directory customer scope to the service account's domain-wide delegation. |
| Domain-wide delegations authorized more than six months ago, past the admin audit log window. | Compare the domain-wide delegation list in the Google Admin console with the apps this scan lists. |
| Removed domain-wide delegations, because Google records no event when one is removed. | Confirm each delegation in the Google Admin console before acting on it. |
| Marketplace apps that have not run inside the audit log window, because Google can't list them. | Compare the installed Marketplace apps in the Google Admin console with the apps this scan lists. |
| The apps authorized by the user [user], who has no email address. | Look these users up in the Google Admin console. |
| The apps authorized by users past the scanner's limit. | None. |
| The Google Cloud service accounts and keys behind this domain's delegations. | Turn on reading Google Cloud in the source's settings, and grant the service account the Browser and Service Account Viewer roles at the organization. |
| The Google Cloud projects, because Google listed none to the service account. | Grant the service account the Browser and Service Account Viewer roles at the organization. |
| The service accounts and keys in the Google Cloud projects. | Grant the service account the Service Account Viewer role at the organization or on each project. |
| The service accounts in Google Cloud projects past the scanner's limit. | None. |
| Who created the Google Cloud service accounts in the project [project]. | Grant the service account 1Secure uses the Logs Viewer role on each project. |
| The keys of the Google Cloud service accounts. | Grant the service account a role with iam.serviceAccountKeys.list, such as Viewer, at the organization. |
| The keys of the service account [service account], which has no email address. | Look these service accounts up in the Google Cloud console. |
| The keys of service accounts past the scanner's limit. | None. |
| The files apps and service accounts shared in this domain's Drive. | Add the reports audit scope to the service account's domain-wide delegation in the Google Admin console. |
| The user, project, or service account [item]. | Check that user, project, or service account in Google, then scan again. |
| Anything from this Falcon tenant, because Falcon refused the API client. | Check the client ID, client secret and base URL in the source's settings. |
| The hosts in this Falcon tenant and the AI tools on them. | Grant the Falcon API client the Hosts: Read scope. |
| Anything from this Falcon tenant, because Falcon didn't answer. | Check that the base URL in the source's settings is your Falcon cloud's API address. |
| The applications installed on each Falcon host. | Turn on Falcon Discover and grant the Falcon API client the Falcon Discover: Read scope. |
| The applications installed on each Falcon host, because Falcon Discover didn't answer. | Wait for the next scan, which reads it again. |
| The Zero Trust Assessment score of each Falcon host. | Grant the Falcon API client the Zero Trust Assessment: Read scope. |
| The process and DNS events of AI tools on each Falcon host. | Grant the Falcon API client the Next-Gen SIEM: Read and Write scope, where Write only lets 1Secure start a search. |
| The process and DNS events of AI tools on each Falcon host, because Falcon's search didn't answer. | Wait for the next scan, which reads it again. |
| Some AI tool events in the time slice [time slice], because Falcon's search reached the most one search returns. | Wait for the next scan, which reads it again. |
| The account each AI tool signed in with, because the Falcon API client lacks the scopes. | Grant the Falcon API client the Real time response: Read, Real time response: Write and Real time response (admin): Write scopes, then turn on Real time response and Custom scripts in each platform's response policy. |
| The account each AI tool signed in with on the hosts where Falcon found it. | Grant the Falcon API client the Real time response: Read, Real time response: Write and Real time response (admin): Write scopes. |
| The account each AI tool signed in with on some hosts, because Falcon slowed the scanner down. | Wait for the next scan, which asks the remaining hosts. |
| The account each AI tool signed in with on some hosts where Falcon found it. | Turn on Real time response and Custom scripts in each platform's response policy, and keep the hosts online during the scan. |
| Anything from this Tanium instance, because Tanium refused the API token. | Check the API token and the instance address in the source's settings. |
| Anything from this Tanium instance, because Tanium didn't answer. | Check that the instance address in the source's settings is right and reachable from 1Secure. |
| The endpoints in this Tanium instance and the AI tools on them. | Give the API token's user a role that can read endpoints and sensors in Tanium. |
| The Tanium read of the sensor [sensor]. | Check that the sensors the scan asks are in the instance and that the token's user may read them. |
| The AI tools and AI services on the endpoints, because Threat Response isn't on them. | Deploy Threat Response tooling and a recorder profile to those endpoints in Tanium. |
| What the Tanium sensor [sensor] reads on the endpoints, because it failed there. | Check the sensor's content and tools on those endpoints in Tanium, then scan again. |
| What a Tanium sensor reads on endpoints whose operating system it doesn't support. | None. |
| The AI tool events on Tanium endpoints that didn't answer in time. | Wait for the next scan, which asks the endpoints again. |
| Anything from this Endpoint Protector server, because it didn't accept the API client. | Check the server address, client ID and client secret in the source's settings. |
| The computers and users on this Endpoint Protector server. | Ask Netwrix support to turn on the REST API Preview for this server and allow 1Secure's addresses. |
| The AI tools people sent data to, from this server's content aware protection log. | Ask Netwrix support to let the API client read the logs on this server. |
| Anything from this Endpoint Protector server, because it didn't answer. | Check that the server address in the source's settings is right and reachable. |
| The users on this Endpoint Protector server, so the people who used AI tools are named without their email address. | Scan again, and ask Netwrix support to let the API client read the users on this server if it happens again. |
| Some computers, users, or AI tool uses on this Endpoint Protector server, which the server listed incompletely. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| The deploy keys and Copilot coding agent settings of repositories past the number one scan reads. | None. |
| The Copilot coding agents of each repository, with their tools and MCP servers. | None. |
| The Copilot coding agents of each repository, because GitHub didn't answer the preview request. | Check that the credential belongs to an organization owner, and if it does, send Copy for support to Netwrix support. |
| Some API tokens in this Atlassian organization, because the scan listed fewer than Atlassian counts. | Scan again, and if the gap stays, send Copy for support to Netwrix support. |
| More managed accounts in this Atlassian organization, past the most one scan lists, so their tokens aren't judged as orphaned. | None. |
| More Confluence spaces on this site, past the most one scan lists. | None. |
| [count] more Confluence spaces, past the most one scan checks for access. | None. |
| More people who can open the Confluence space [space], past the most one scan lists. | None. |
| More Okta apps, past the most one scan lists. | Narrow the resource set of the credential's admin role so the app list is shorter. |
| [count] more Okta apps, past the most one scan checks for access. | None. |
| The roles of Okta administrators past the number one scan reads, so the Super Administrator count is a floor. | None. |
| When some Okta API tokens were last used. | None. |
| The sign ins to some Okta apps that hand people to an AI vendor. | Narrow the resource set of the credential's admin role so fewer apps are listed. |

**n8n, Notion, ElevenLabs, Salesforce, ServiceNow, Anthropic, OpenAI, Mistral and ChatGPT Enterprise**

| Not scanned | To fix |
|-------------|--------|
| Anything from this n8n instance, because its address didn't answer as n8n's API. | Check that the instance URL in the source's settings is the instance's own address, with nothing after it. |
| One of this n8n instance's lists, because it didn't answer as n8n's API. | Check that the instance URL in the source's settings is the instance's own address, with nothing after it. |
| Anything from this n8n instance, because it answered with an error. | Scan again, and check the n8n instance's own logs if it keeps failing. |
| Anything from this n8n instance, because its API key sees nothing in it. | Create an n8n API key as the instance owner with the workflow:list, execution:list, user:list, project:list and securityAudit:generate scopes, then save it in the source's settings. |
| Anything from this n8n instance, because it listed no workflows and its security audit is off. | Confirm in n8n that this instance has no workflows, because this scan can't tell it from a key that sees nothing. |
| The instance's workflows, so each agent's credentials and reach are unknown. | Grant the n8n API key the workflow:list scope. |
| The instance's user list, so each owner's role, second factor and invitation are unknown. | Create the n8n API key as the instance owner and grant it the user:list scope. |
| The instance's projects, so no agent's owner is resolved to a person. | Grant the n8n API key the project:list scope. |
| More n8n [workflows, users, or projects], past the most one scan lists. | Send Copy for support to Netwrix support, because this instance holds more than one scan reads. |
| Who belongs to each n8n project, so ownership stops at the project name. | Grant the n8n API key the user:list scope. |
| Who belongs to some n8n projects, so their agents are owned by the project. | Add the n8n API key's user to those projects in n8n. |
| Who belongs to some n8n projects, because each scan asks about a limited number of projects. | None. |
| The runs of every workflow in this instance. | Grant the n8n API key the execution:list scope. |
| The runs of every workflow in this instance, because this n8n version doesn't offer them. | Upgrade the n8n instance to a current version. |
| The runs of every workflow in this instance, because it answered with an error. | Scan again, and check the n8n instance's own logs if it keeps failing. |
| Older workflow runs, because this n8n version can't filter runs and the scanner reached the most it reads in one scan. | Upgrade the n8n instance to a version that filters runs by start time. |
| The results of n8n's own security audit, such as unused credentials and unprotected webhooks. | Grant the n8n API key the securityAudit:generate scope. |
| The results of n8n's own security audit, because the scanner was set to skip it. | None. |
| Anything from this Notion workspace, because Notion refused the list of agents or didn't answer. | Create an internal integration in Notion under Settings, then Connections, with read content access, connect it to the pages and databases it should see, and save its token in the source's settings. |
| Notion's custom agents, because Notion answered in a form the scanner doesn't recognize. | If the next scan reports the same, send Copy for support to Netwrix support. |
| How many times each Notion agent ran, because Notion states only its last run. | None. |
| The configuration of some Notion agents, which are still listed. | Raise Agents with full configuration under Scan settings on the source card. |
| The creator of every Notion agent, because Notion refused the list of workspace members. | Connect with an internal integration that has the read user information capability, rather than a personal access token. |
| One Notion agent's configuration, though the agent is still listed. | Check what the integration is connected to in Notion, unless the agent was removed during the scan. |
| Notion agent runs, so they don't reach the Activity tab. | Give the integration the Interact with agents capability and share each custom agent with its connection. |
| Some Notion agent runs, because Notion slowed the scanner down. | Wait for the next scan, which reads them again. |
| Notion agent runs, because Notion turned down the scanner's request. | Send Copy for support to Netwrix support, because 1Secure needs a fix. |
| Notion agent runs, because Notion answered with a server error. | Wait for the next scan, which reads them again. |
| Anything from this ElevenLabs workspace, because its API key couldn't read the list of agents. | Create an ElevenLabs API key with read access to Conversational AI and to workspace webhooks, then save it in the source's settings. |
| The configuration of some ElevenLabs agents, which are still listed. | Raise Agents with full configuration under Scan settings on the source card. |
| One ElevenLabs agent's configuration, though the agent is still listed. | Check that the API key's Conversational AI access reaches every agent, unless the agent was deleted during the scan. |
| How many calls each ElevenLabs agent took, though its last call is still dated. | Grant the ElevenLabs API key read access to conversations. |
| The credentials that ElevenLabs agents and phone numbers hold. | Grant the ElevenLabs API key read access to workspace secrets. |
| The setting that says if call transcripts leave the ElevenLabs workspace. | Grant the ElevenLabs API key read access to the conversational settings. |
| Where ElevenLabs sends call transcripts after each call. | Grant the ElevenLabs API key read access to workspace webhooks. |
| Anything from this Salesforce org, because its address didn't answer as the Salesforce API. | Check that the My Domain URL in the source's settings is the org's own My Domain address. |
| Agentforce agents in this Salesforce org, because Agentforce is off. | Turn Agentforce on in Salesforce Setup if this org should have agents. |
| Agentforce agents in this Salesforce org, because the org isn't entitled to Agentforce. | Ask your Salesforce account team for an Agentforce license or more Flex Credits. |
| The [object] records in Salesforce, which the integration user may not read. | Grant the integration user read access to that object on its profile or permission set. |
| The rest of this Salesforce org, because its daily API allowance is spent. | Wait for the allowance to refill before the next scan, or ask Salesforce to raise it. |
| The [object] records in Salesforce, which the org doesn't offer in the scanner's API version. | Send Copy for support to Netwrix support, because 1Secure sets the API version. |
| The [object] records in Salesforce, because the org refused a field. | Check that the integration user can see every field of that kind of record, and if it can, send Copy for support to Netwrix support. |
| How often each Agentforce agent ran, because this org has no Data Cloud session trace data model. | Turn on Data Cloud with the session trace data model to read agent activity. |
| Some [object] records in Salesforce past the point, because the org answered in an unreadable form. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| The email addresses of the people who created the Salesforce agents. | Grant the integration user read access to the User object and its Email field. |
| The rest of this ServiceNow read, because the instance's rate limit turned 1Secure away. | Raise the inbound rate limit rule on the instance that turned 1Secure away. |
| Anything from this ServiceNow instance, because its address didn't answer as the Table API. | Check that the instance URL in the source's settings is the instance's own address. |
| The ServiceNow AI agent table [table], which the integration user may not read. | Assign the sn_aia.viewer role to the integration user. |
| The approved role lists that limit each ServiceNow AI agent. | Assign the agent_role_config_viewer role to the integration user. |
| The MCP servers outside the instance that ServiceNow AI agents connect to. | Assign the sn_mcp_client.viewer role to the integration user. |
| Who may run each ServiceNow AI agent, so public and restricted agents look alike. | Grant the integration user read access to the sys_security_acl table. |
| The users ServiceNow AI agents run as and the roles those users hold, which the integration user may not read. | Grant the integration user read access to the sys_user and sys_user_has_role tables. |
| ServiceNow AI agents, because the AI agent tables aren't installed. | Check that the instance runs Zurich Patch 2 or later with Now Assist Pro Plus or Enterprise Plus. |
| ServiceNow AI agents, because this instance's release has no AI agent tables. | Upgrade the instance to Zurich Patch 2 or later. |
| ServiceNow AI agents, because the AI agent tables aren't installed on this supported release. | Add Now Assist Pro Plus or Enterprise Plus to this instance. |
| AI agents in the ServiceNow domains the integration user can't see. | Give the integration user visibility of every domain whose agents should be read. |
| The records of the ServiceNow table [table], which answered without results. | Scan again, and check that the integration user can read that table if it happens again. |
| The AI Control Tower governance of each ServiceNow AI agent, which shows as not measured. | Install the sn_ai_governance plugin and assign the sn_ai_governance.integration.rest role to the integration user. |
| Anything from AI Control Tower, because the instance didn't answer as its governance API. | Check the instance URL in the source's settings and that the sn_ai_governance plugin is installed. |
| The AI Control Tower entries of the asset class [table], which answered without results. | Scan again, and check that the integration user can read that class if it happens again. |
| The email addresses of the people who created ServiceNow AI agents or own their AI Control Tower entries. | Grant the integration user read access to the user table. |
| Anything from this Anthropic organization, because its key couldn't read the Admin API. | Save an Admin API key, created by an organization admin in the Claude Console, in the source's settings. |
| Anything from this Anthropic organization, because its key named no organization. | Check that the key in the source's settings is an Admin API key of your organization. |
| Anthropic managed agents and what they ran. | Add a workspace API key in the source's settings, and ask Anthropic to turn on managed agents for the organization. |
| The organization's service accounts. | None. |
| The organization's API keys, so no key, who made it or which workspace it reaches is listed. | Use an Admin API key that can read the organization's API keys, created by an organization admin in the Claude Console. |
| The organization's members. | Use an Admin API key that can read members, created by an organization admin in the Claude Console. |
| Who administers each Anthropic workspace. | Use an Admin API key that can read workspace members, created by an organization admin in the Claude Console. |
| Anything from this OpenAI organization, because its key couldn't read the Administration API. | Save an Admin key, created by an organization owner under Settings, API keys, Admin keys, in the source's settings. |
| Anything from this OpenAI organization, because its Admin key sees no projects. | Check that the Admin key in the source's settings belongs to the organization you meant to scan. |
| The API keys and service accounts of the OpenAI project [project]. | Scan again, and check that the Admin key can read that project if it happens again. |
| The agents, sandboxes, and vaults of OpenAI projects with no project key. | Create a key with the api.agents.read permission in each project and add it to the project keys in the source's settings. |
| The agents, sandboxes, and vaults of the OpenAI project [project], whose key was refused. | Give that project's key the api.agents.read permission. |
| OpenAI agents, sandboxes, and vaults, because the Agents API is off for this organization. | Ask OpenAI to turn on the Agents API for the organization. |
| The agents, sandboxes, and vaults of the OpenAI project [project], which answered with an error. | Scan again, and if it happens again, send Copy for support to Netwrix support. |
| The OpenAI sandbox or credential vault [item], which an agent used, though the agent is still listed. | Confirm the project key holds the api.agents.read permission, then scan again. |
| Who created each OpenAI key, from the organization's audit log. | Turn on audit logging for the organization and give the Admin key permission to read the audit log. |
| Anything from this Mistral workspace, because its API key couldn't read the list of agents. | Create an API key in Mistral Studio under the workspace to read, then save it in the source's settings. |
| Anything from this ChatGPT Enterprise workspace, because its Compliance API key couldn't read the workspace's users. | Have a workspace owner issue a Compliance API key in the ChatGPT admin console, then save it with the workspace id in the source's settings. |
| The users of this ChatGPT Enterprise workspace, because its Compliance API key couldn't read them. | Issue the workspace's Compliance API key again in the ChatGPT admin console with access to users, then save it in the source's settings. |
| The GPTs in this ChatGPT Enterprise workspace, because its Compliance API key couldn't read them. | Issue the workspace's Compliance API key again in the ChatGPT admin console with access to GPTs, then save it in the source's settings. |
| The projects in this ChatGPT Enterprise workspace, because its Compliance API key couldn't read them. | Issue the workspace's Compliance API key again in the ChatGPT admin console with access to projects, then save it in the source's settings. |
| The Codex environments in this ChatGPT Enterprise workspace, because its Compliance API key couldn't read them. | Issue the workspace's Compliance API key again in the ChatGPT admin console with access to Codex, then save it in the source's settings. |
| A full list of this n8n instance's credentials, which n8n doesn't publish, so it is built from the workflows and audit. | None. |

### Refused SharePoint sites

When SharePoint refuses some sites, the source counts them in one thing skipped, and its **Export** lists each site once under it with what SharePoint answered. Where the read stopped short instead, **Details** under the source's lines lists them too. The list is the whole list, up to 1,000 sites a scan.

| What a site answered | What it means | What to do |
|----------------------|---------------|------------|
| The site is locked   | An administrator locked the site, or made it read only. This is the common case. | Nothing, unless the site should be read. Then unlock it in the SharePoint admin center. |
| SharePoint refused the scanner | The site refused a read 1Secure is allowed elsewhere. It may be in the recycle bin, or in a geography the credential can't reach. | Check the site in the SharePoint admin center. |
| 1Secure has no access to this site; grant it under SharePoint site permissions below | The app holds no grant on this site. | Select the site on the **Sites** tab of the SharePoint Online source and click **Approve selected**, or grant it on the source's SharePoint site permissions card, then scan again. |
| All sites was granted after this scan; scan again | 1Secure was granted All sites after the scan started, so the scan read without it. | Scan again. |
| Refused although 1Secure has All sites | The site refused for a reason of its own, since 1Secure already holds Sites.FullControl.All. | In the SharePoint admin center, check that the site still exists and isn't locked or limited to certain apps, then scan again. |
| The site wasn't found | The site was deleted, or moved since another source named it. | Nothing. It drops out of the next scans. |
| SharePoint slowed the scanner down | SharePoint limited 1Secure's reads. | Nothing. The next scan reads the site again. |
| SharePoint didn't answer | SharePoint answered with an error of its own. | Scan again later. |
| SharePoint refused the read | SharePoint gave another refusal. | Check the site in the SharePoint admin center. |

Agents found on a refused site earlier are kept from the last scan that read it.

Where All sites is granted, a refusal line that asked you to approve the sites or choose All sites says instead "All sites was granted after this scan started. Scan again to read the site." or "1Secure already has All sites, so the site refused for a reason of its own. In the SharePoint admin center, check that the site still exists and is not locked or limited to certain apps, then scan again."

A personal OneDrive site that answers locked isn't counted among the SharePoint agents read's refused sites. A locked OneDrive is normal, so it counts as searched, the read stays whole, and the scan names those sites in a note of their own.

## Sources page

A platform's row on **Sources** carries a short reason beside its status.

| What you see | What to do |
|--------------|------------|
| credential not set | Open the source, click **Edit** and enter its settings. |
| credential can't be used | Enter the credential again. |
| credential refused, skipped until the test passes | Enter the credential again with **Edit**, then test again. |
| connect [platform] first | Connect the platform it names first. |
| consent needed | Open Microsoft Entra ID and click **Sign in with Microsoft**, or grant admin consent on your app registration. |
| last test failed | Open the source and read the test sentence. |
| last scan failed | Open the scan drawer and read the source's result. |
| last scan partly scanned | Open the scan drawer and read "Not scanned:" and "To fix:". |
| disabled     | Turn the source on to scan it again. |
| not scanned  | Run a scan. |
| last scanned [when] | Run a scan to read the source again. |
| waiting for the running scan | Wait for the running scan to finish. |
| Needs permissions, N missing | Open the source and grant what it lists. |
| Reads with your Microsoft Entra ID connection. Not connected. | Connect Microsoft Entra ID. |
| Microsoft Entra ID is connected. Add the details to finish. | Open the source and add the details it asks for. |
| Add [settings] to finish. | Open the source and add the settings the row names in place of [settings]. |

The **Overview** and the source rows also say how each source's last scan went.

| What you see | What to do |
|--------------|------------|
| No scan has succeeded | Open this source's health status to read the error, then fix the credentials it names. |
| Partly scanned | Open this source to see what the last scan couldn't read and how to fix it. |
| Partly scanned, retries next scan | Nothing. The platform slowed the read down, and the next scan reads it again. |
| Partly scanned, no scan scheduled | The platform slowed the read down. Scan again, or set a scan schedule under **Settings**. |
| Not set up   | Nothing, unless you mean to add what the reason names. |
| Connected, not scanned | Nothing is counted for this source until its first scan finishes. |
| Scanning now | The numbers shown for this source are from the previous scan. |

### Connecting a source

These sentences appear when you save a new source, or change one, and it is refused.

| What you see | What to do |
|--------------|------------|
| This organization reads the Microsoft tenant [tenant ID]. To read another tenant, connect it in a second organization. | Enter an app registration in the tenant the organization reads, or connect the other tenant in a second organization. |
| A [platform] source is already connected. Open it to change its credential. | Open the connected source on **Sources** and click **Edit**. |
| A SharePoint Online source is already connected. Open it to add sites or change its credential. | Open the connected SharePoint Online source to add sites or change its credential. |
| Credentials can't be saved yet, so this source wasn't saved. Contact Netwrix support. | Contact Netwrix support. 1Secure can't store credentials yet. |
| Credentials can't be saved right now, so this source wasn't saved. Contact Netwrix support. | Contact Netwrix support. 1Secure can't store credentials right now. |
| The address changed, so enter the credential again; 1Secure never sends a saved credential to a new address. | You changed where the credential is sent, such as an instance URL, an API server or a tenant ID. Enter the secret again with the new address, then click **Save and test**. |

Where the source points at one item, such as an instance or an organization, the sentence names it: "A [platform] source pointing at [item] is already connected. Open it to change its credential." A platform whose name starts with a vowel reads "An", for example "An Okta source".
