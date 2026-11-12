---
title: "Add additional permissions"
description: "Grant the extra Microsoft roles and permissions your sources need, from Connect Microsoft or later from the Sources page in 1Secure."
sidebar_position: 5
---

# Add additional permissions

Some Microsoft reads need a role or a grant that the Microsoft consent screen doesn't give. On **Connect Microsoft**, you add them in the lines after **Sign in and consent**, one at a time, before any source is tested. The lines open when Microsoft Entra ID reads, and only the lines the platforms you chose need are listed.

| Line | Listed when you chose | What its card says it is for |
|------|-----------------------|------------------------------|
| Azure Reader roles | Azure RBAC, Azure AI Foundry, Azure Logic Apps, or Azure Bot Service | "Discovers agents in Azure AI Foundry, Bot Service and Logic Apps, and reads Azure RBAC." |
| Microsoft Entra AI Reader role | Microsoft Copilot Studio | "Discovers agents built in Copilot Studio and Agent Builder." |
| Power Platform application user | Power Platform or Microsoft Copilot Studio | "Reads Power Platform policies and what Copilot Studio agents can reach." |
| SharePoint sites | SharePoint Online | "How far should 1Secure look into SharePoint sites?" |

Microsoft Defender for Endpoint has no line. It reads through Microsoft Graph with ThreatHunting.Read.All, which the first consent grants. Its optional account read takes two WindowsDefenderATP permissions granted on the app registration, as the [Microsoft Defender for Endpoint](/docs/1secureaisecurity/configuration/sources/microsoft-defender-for-endpoint.md) page describes.

## Grant a line

Each card of the first three lines says what it grants and who can grant it, and offers one button, **Grant with my sign in**.

1. Read the card. It says what the grant reads, for example "Grants Reader on the subscriptions you select and Foundry User on their projects. Read-only.", and what it needs, for example "Needs Owner or User Access Administrator on each subscription you select."
2. Click **Grant with my sign in**. For **Azure Reader roles** and **Power Platform application user**, on a first run the card then lists the subscriptions, or the Power Platform environments, your account can see, all selected.
3. Clear any you want to leave out, and click **Grant on these**.
4. Read the line's status. It reads **Granted**, **Applying** while Microsoft applies a new role, or, for Power Platform, how many environments took 1Secure, for example "2 of 3".

For fifteen minutes after **Sign in and consent**, 1Secure makes the **Microsoft Entra AI Reader role** grant with that same sign-in, so no Microsoft window opens for it. 1Secure keeps that sign-in only until the grants are recorded. Where the time has passed, or Microsoft needs to ask you something more, a small Microsoft window opens for the grant. **Azure Reader roles** and **Power Platform application user** open a small Microsoft window that asks for their own service alone, unless you consented to that service before.

Each card also offers these options:

- **Do it myself.** The grant to make by hand, with the application's client ID, ending on "Come back here and select Test again." and **Test again**.
- **Skip.** The line reads **Skipped**. The line under the button says what is lost, for example "Azure AI Foundry, Bot Service, Logic Apps and Azure RBAC aren't scanned if you skip." 1Secure creates a source whose permission you skipped and doesn't test it.

What each grant does:

- **Azure Reader roles.** 1Secure is granted Reader on each subscription selected, and Foundry User, formerly Azure AI User, on each Foundry account that holds an Azure AI Foundry project in them, so the scan reads their agents.
- **Microsoft Entra AI Reader role.** "Gives 1Secure the Microsoft Entra AI Reader role, one role for the whole directory. Read-only."
- **Power Platform application user.** "Registers 1Secure as a management application, with Agent Viewer in each selected environment. Read-only." 1Secure also gives its application user the 1Secure Flow Reader role.

| Line | Who signs in |
|------|--------------|
| Azure Reader roles | An account with Owner or User Access Administrator on each subscription you select. |
| Microsoft Entra AI Reader role | A Privileged Role Administrator or Global Administrator. |
| Power Platform application user | A Power Platform administrator who is also a System Administrator in each environment you select. In the Power Platform admin center, open each environment, then **Membership**, then **System Administrators**, and click **Add me** first, because an administrator isn't a member of an environment until added. |

Where Power Platform added 1Secure in only some environments, the card says so, for example "Added to 2 of 3 environments.", and names each environment that didn't take it, such as "Power Platform administrators use Add me under Membership in [environment], and others ask a System Administrator.", with **How to become a System Administrator**. After you are added, click **Grant again**, or click **Continue without it**.

## While a role applies

A new role can take Microsoft minutes to apply. While it does, the line reads **Applying** and the card says "Microsoft can take minutes to apply a role. You can continue while 1Secure checks." The line turns to **Granted** when the tests of the sources the grant opens pass. 1Secure keeps checking after you move on, so it finds a role that applies later.

## SharePoint sites

The **SharePoint sites** line asks "How far should 1Secure look into SharePoint sites?", with "Agents are discovered either way. This decides which agent sites 1Secure reads."

- **Ask me each time.** Marked **Recommended** and chosen to start with: "1Secure asks before it reads each site an agent uses." It records **Selected sites** with no window, and the line reads **Asks per site**.
- **Read every site now.** "1Secure reads any site an agent uses, with no prompts. Grants Sites.FullControl.All." It opens a Microsoft sign-in.

Click **Save choice**, or **Decide later**, which leaves the line open without holding **Continue** back. The card says "Change it later under Sources. Reading every site needs a Global Administrator or Privileged Role Administrator."

## When every line is answered

Click **Continue** in the footer. It is available when every line except **SharePoint sites** is granted, applying, added in some environments, or skipped. The **Test permissions** card then creates and tests each Microsoft source once, as [Connect with Microsoft](/docs/1secureaisecurity/configuration/connect-with-microsoft.md#connect-the-microsoft-sources) describes.

### If the sign-in doesn't finish

| What you see | What to do |
|--------------|------------|
| "The Microsoft sign in window closed before it finished." | Click **Grant with my sign in** again. |
| "Your browser blocked the sign in window. Allow pop-ups for this site, then try again." | Allow pop-ups for this site, and click **Grant with my sign in** again. |
| "Nothing was granted. Check the roles this needs, then grant again." | Sign in with the role the card's needs line names, and click **Grant with my sign in** again. |

[Connect every Microsoft source](/docs/1secureaisecurity/configuration/sources/connect-every-microsoft-source.md) lists every role and grant for each Microsoft source.

## Add permissions later on the Sources page

You can scan with the sources connected so far and add the rest later. On the **Sources** page, the drawer of a source that still needs something shows a card for each missing grant, with **Let 1Secure do it**, **Do it yourself**, and **Test again**. **Let 1Secure do it** signs you in once more as an administrator, as described earlier, and **Use your own app registration** grants your own app registration instead of the 1Secure registration. Two cards offer more there.

**Power Platform policies** card

The card has one button, **Finish Power Platform setup**, and one sign-in for every Power Platform grant.

1. In the Power Platform admin center, open each environment, then **Membership**, then **System Administrators**, and click **Add me**. An administrator isn't a member of an environment until added. The card says so: "Read-only or no privileges means you aren't a member yet. Use Membership, Add me."
2. Select **Also register the management application** only if you want the policies read at every scan. It has tenant administrator rights that can't be narrowed.
3. Click **Finish Power Platform setup**, and sign in. The sign-in reads your data policies and tenant isolation once, then lists the environments with a Dataverse database, all selected.
4. Click **Add 1Secure**. 1Secure adds itself as an application user in each environment selected, with the Agent Viewer role and the 1Secure Flow Reader role.

The card then says what 1Secure did for each grant, and names each environment it skipped with the reason. It stays, so you can add more environments later. See [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md).

**SharePoint site permissions** card

Choose **All sites** or **Selected sites**. **All sites** grants 1Secure Sites.FullControl.All, which reads every SharePoint site's permissions, and needs a Global Administrator or Privileged Role Administrator. After you record Selected sites, the card offers **Grant all sites instead** and says "Sites.Selected. You approve each site an agent uses." As you approve sites, the card names them, or counts them where there are many, with who approved them and when.

| Grant on the Sources page | Who signs in |
|---------------------------|--------------|
| Power Platform policies, application users and, where selected, the management application | A Power Platform administrator or Global Administrator who is also a System Administrator of each environment to add, through **Membership**, **Add me**. 1Secure reads your data policies and tenant isolation once, and keeps them with the date. |
| SharePoint site permissions | With **All sites**, a Global Administrator or Privileged Role Administrator. With **Selected sites**, no one signs in. Each later **Approve** needs an administrator who can consent for the directory, with full control of the site. |

After a scan, the **Sites** tab of the SharePoint Online source's drawer lists each SharePoint site that agents use and 1Secure can't read as awaiting approval. The source's row on the Sources page counts these sites, for example "2 sites awaiting approval". Select the sites and click **Approve selected** to give 1Secure full control on them through one Microsoft sign-in, or **Ignore selected** to stop asking about them. You can reopen an ignored site. See [SharePoint Online](/docs/1secureaisecurity/configuration/sources/sharepoint-online.md).
