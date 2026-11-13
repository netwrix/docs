---
title: "Connect with Microsoft"
description: "Connect Microsoft sources with one sign-in or your own app registration, then connect your other platforms in Netwrix 1Secure AI Security."
sidebar_position: 4
---

# Connect with Microsoft

In these steps you connect the platforms you chose. On **Connect Microsoft**, one Microsoft sign-in connects every Microsoft source. On **Connect other sources**, every other platform takes the settings you create in its own console. **Connect Microsoft** comes first, and the other sources open after it is connected or skipped.

## Before you start

- Sign in to 1Secure as an organization administrator.
- Have a Global Administrator or Privileged Role Administrator account of the Microsoft directory.

## Connect the Microsoft sources

Microsoft Entra ID connects through one sign-in. Through it connect Agent 365, Microsoft Copilot Studio, SharePoint agents, SharePoint Online, Power Platform, Azure AI Foundry, Azure RBAC, Microsoft Defender for Endpoint, the Purview audit log, Azure Logic Apps, and Azure Bot Service. You paste nothing.

**Connect Microsoft** lists each permission the platforms you chose need, one line each, in the order you grant them. You sign in once, then grant each line in turn.

1. On **Sign in and consent**, read the card, "Lets 1Secure read Microsoft Entra ID and your agents' Microsoft platforms." The **Microsoft Entra ID** tile under it lists, under "One sign in also connects", the Microsoft sources you chose.
2. To see what 1Secure reads, click **What does 1Secure collect?**. 1Secure reads your directory and never changes it.

   ![Connect Microsoft step with See every AI agent in your Microsoft tenant, Sign in with Microsoft, Use an app registration instead, What does 1Secure collect?, and the Microsoft Entra ID tile listing the sources one sign in also connects](/images/1secureaisecurity/getting-started/connect-microsoft-step.webp)

3. Click **Sign in with Microsoft**. A small window opens, shows "Taking you to Microsoft to sign in." and then the Microsoft sign-in. The page says "Step 1 of 2. Waiting for you to sign in with Microsoft."
4. In the window, sign in with a Global Administrator or Privileged Role Administrator account of the directory, or pick one you're already signed in with.

   Microsoft shows **Permissions requested**, with three permissions that act as you: View your basic profile, Maintain access to data you have given it access to, and Read and write directory RBAC settings. 1Secure uses this access once, to assign the Microsoft Entra AI Reader role, and then drops it. It keeps no token. The window asks nothing for Azure, Power Apps, or Dynamics 365. **Azure Reader roles** and **Power Platform application user** ask in their own window when you grant them.

5. Leave **Consent on behalf of your organization** cleared. Selected, it grants these permissions to every user of your directory, which 1Secure never needs. Cleared, Microsoft records only your own consent. Another administrator who connects 1Secure later sees the same prompt once.
6. Click **Accept**. The window then shows "Signed in. Asking your tenant for the permissions.", and the page says "Step 2 of 2. Asking your tenant for permissions."

   The window can mark the application as **unverified** and say "This application is not published by Microsoft or your organization." Microsoft shows this until the application's publisher verification is complete. It is safe to accept.

7. When Microsoft asks for consent as that account, review the permissions. Microsoft doesn't ask you to pick the account again.

   This second window grants the 1Secure application, "Netwrix 1Secure AI Security", the read permissions it keeps, for your whole organization. It lists eighteen Microsoft Graph permissions, among them Organization.Read.All, which reads your verified domains. [What happens when you connect Microsoft](/docs/1secureaisecurity/configuration/what-happens-when-you-connect-microsoft.md) lists them all.

8. Click **Accept**. The window shows "Signed in." and "1Secure carries on in the page you started from. This window closes on its own.", and closes. The page checks the consent and tests Microsoft Entra ID. No other source is created or tested yet.
9. Wait for Microsoft Entra ID to read. The card then says "Your Microsoft environment is connected", **Sign in and consent** reads **Done**, and the next line opens.
10. Grant each remaining line in turn, as [Add additional permissions](/docs/1secureaisecurity/configuration/add-additional-permissions.md) describes. You can leave **SharePoint sites** for later.

    For fifteen minutes the same sign-in also makes the Entra AI Reader grant, with no Microsoft window unless Microsoft needs to ask you something. **Azure Reader roles** and **Power Platform application user** each open a small Microsoft window for their own service when you grant them.

11. When every line is done or skipped, click **Continue**. **SharePoint sites** doesn't hold **Continue** back.
12. Watch the **Test permissions** card. It creates each Microsoft source you chose and tests it once.

    The card says how long that takes, for example "Now the permissions are in place, each source is created and tested. About 2 minutes.", with the time so far, such as "0:35 so far.". Each source's line then reads **Connected**, **Partly read**, **Asks per site**, **Applying** where a role granted is still applying, **Skipped** where you skipped its permission, or **Not connected**.

13. Read the summary at the foot of the card, for example "12 sources created. 10 read in full, 2 applying. 1Secure keeps checking. You can carry on." Where every source reads, it says "12 sources connected and read."
14. Click **Continue**.

    ![Connecting window titled Your Microsoft environment is connected, with each Microsoft source checked, how many optional reads are next, and Continue](/images/1secureaisecurity/getting-started/microsoft-connected.webp)

**Continue** on the card goes on to **Connect other sources**, or to **Start your first scan** when you chose no other platform.

Where the directory refuses the sign-in, Microsoft Entra ID doesn't read. The lines after **Sign in and consent** stay closed, and the footer keeps **Skip for now**. Sign in again as an administrator of the directory you mean to connect.

[What happens when you connect Microsoft](/docs/1secureaisecurity/configuration/what-happens-when-you-connect-microsoft.md) explains both windows, what each grants, and what 1Secure keeps and drops.

:::info
Some Microsoft reads need a role or a grant that the Microsoft consent screen doesn't give. The lines after **Sign in and consent** add them. See [Add additional permissions](/docs/1secureaisecurity/configuration/add-additional-permissions.md).
:::

:::info
An organization reads one Microsoft tenant. After a Microsoft source is connected, 1Secure refuses an app registration from another tenant with "This organization reads the Microsoft tenant [tenant ID]. To read another tenant, connect it in a second organization." On **Sources**, a connected Microsoft platform offers **Open** and no second connect.
:::

Until Microsoft Entra ID is connected, the footer offers **Skip for now**, which goes on without Microsoft. After it is connected, the footer offers **Continue**. **Back** returns to **Choose where to look**.

### How Connect Microsoft lists the permissions

**Connect Microsoft** lists the permissions under **Permission** and **Status**. **Sign in and consent** is always listed. **Azure Reader roles**, **Microsoft Entra AI Reader role**, **Power Platform application user**, and **SharePoint sites** are listed where a platform you chose needs each. The line in hand reads **Now**, the one after it **Next**, and the rest **Later**. **Permissions granted** at the top counts the lines done, for example "1 of 5". The lead says "Sign in once, then grant each permission in turn. About four minutes."

### If the sign-in doesn't finish

| What you see | What to do |
|--------------|------------|
| "The Microsoft window closed early, so nothing connected. Sign in again." | Click **Sign in with Microsoft** again. |
| "Nothing connected. You can sign in with Microsoft again." | Click **Sign in with Microsoft** again, or click **Request approval** to ask an administrator to accept. |
| "Nothing connected. Ask a Global Administrator or Privileged Role Administrator to grant this." | Ask a Global Administrator or Privileged Role Administrator to sign in, or click **Request approval**. |
| "Request sent to your administrators. Return to Sources once approved." | Wait for an administrator to approve, then come back to **Sources**. |
| "The sign in didn't finish. Select Try again to start it again." | In the small window, click **Try again**. |
| "Not connected because sign in started in another tab. Sign in with Microsoft again from Sources." | Open **Sources**, open Microsoft Entra ID, and click **Sign in with Microsoft** again. |

[Troubleshooting](/docs/1secureaisecurity/troubleshooting/index.md) lists every sentence Microsoft's answer can bring back.

## Use your own app registration instead

If your organization doesn't accept a vendor's application in the directory, create the app registration yourself.

1. On the **Connect Microsoft** card, click **Use an app registration instead**. The icon beside it says what this path asks. The card shows "Connect with your app registration".
2. Under the three fields on the card, click **Set up the app registration** to open its steps. They name each permission and role, and where to add it.
3. In the Microsoft Entra admin center, create the app registration as the first group of steps, **Create the app registration**, says: open **App registrations**, then **New registration**, choose **Accounts in this organizational directory only**, and click **Register**.
4. On the registration's **Overview**, copy the **Directory (tenant) ID** and the **Application (client) ID**.
5. Add a **New client secret**, and copy its **Value**. Microsoft shows the Value only when you create the secret, so copy it then.
6. Add the permissions and roles the other groups of steps name.
7. In **Directory (tenant) ID**, enter the directory's tenant ID.
8. In **Application (client) ID**, enter the application's client ID.
9. In **Client secret value**, paste the secret's value.
10. Click **Test and connect**. The card shows "Saved. Testing the connection.". When the test passes, the next line opens, as after the sign-in.

**Sign in with Microsoft instead** takes you back to the sign-in.

[Connect every Microsoft source](/docs/1secureaisecurity/configuration/sources/connect-every-microsoft-source.md) is the full checklist of grants for this path.

## Connect your other platforms

**Connect other sources** lists the other platforms you chose, and opens on the first one not yet connected.

1. In the source list, select the next platform. The panel for that platform opens.
2. Follow its connector page under [Sources](/docs/1secureaisecurity/configuration/sources/index.md) to create the credential in the platform's console.
3. Enter the settings. 1Secure encrypts the settings you enter when it saves them and never shows them again.
4. Click **Connect**, and read the test's answer.
5. Click **Next source**, or **Skip for now** to come back to the platform later from **Sources**.

## Finish the step

When each platform is connected or skipped, click **Continue**, and **Start your first scan** opens.
