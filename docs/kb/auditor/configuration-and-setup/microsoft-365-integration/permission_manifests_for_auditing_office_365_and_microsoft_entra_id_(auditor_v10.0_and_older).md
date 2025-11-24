---
description: >-
  This article provides step-by-step instructions for setting up permissions for Microsoft 365 and Microsoft Entra ID in Netwrix Auditor v10.0 and older.
keywords:
  - Microsoft 365
  - Microsoft Entra ID
  - Netwrix Auditor
  - permissions
  - auditing
sidebar_label: Permission Manifests for Auditing
tags: []
title: "Permission Manifests for Auditing Office 365 and Microsoft Entra ID (Auditor v10.0 and Older)"
knowledge_article_id: kA04u0000000K9VCAU
products:
  - auditor
---

# Permission Manifests for Auditing Office 365 and Microsoft Entra ID (Auditor v10.0 and Older)

> **IMPORTANT:** For Netwrix Auditor v10.6 and later, refer to the following documentation articles: [Microsoft 365 — Permissions for Microsoft Entra ID Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/microsoftentraid/permissions), [Microsoft 365 — Permissions for Exchange Online Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/exchangeonline/permissions), [Microsoft 365 — Permissions for SharePoint Online Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/sharepointonline/permissions), [Microsoft 365 — Permissions for Teams Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/teams/permissions).

## Question

How to set up permissions for Microsoft 365 and Microsoft Entra ID (formerly Azure AD) in Netwrix Auditor v10.0 and older?

## Answer

This article contains permission manifests for Microsoft 365 and Microsoft Entra ID to ease the permissions configuration for Netwrix Auditor versions 10.0 and older. Refer to the following steps to configure the application manifest:

1. Visit the Entra ID portal: [Microsoft Entra Admin Center ⸱ Microsoft 🡥](https://entra.microsoft.com).
2. In the left pane, select **Applications** > **App registrations**.
3. Select the app you would like to configure.
4. In the left pane of the new **Overview** window, select the **Manifest** tab. You can either edit the manifest in the web-based manifest editor, or select **Download** to edit the manifest locally to **Upload** it to reapply it to your application.

   ![Manifest tab in the Overview window]./../0-images/servlet_image_31a741be3a3d.png)

5. After opening the manifest file, replace the contents of **requiredResourceAccess** with the data provided below.
6. Once changes are introduced, save the manifest and grant administrator permissions in the **API Permissions** tab.

You can use the following screenshots for permissions reference:

- **SharePoint Online**

  ![SharePoint Online permissions]./../0-images/servlet_image_b88c6cd43443.png)

- **Exchange Online**

  ![Exchange Online permissions]./../0-images/servlet_image_a59a6a87d3a0.png)

- **Microsoft Entra ID**

  ![Microsoft Entra ID permissions]./../0-images/servlet_image_bcb70814f4ea.png)

### Manifest for SharePoint Online

```json
"requiredResourceAccess": [
    {
        "resourceAppId": "00000003-0000-0000-c000-000000000000",
        "resourceAccess": [
            {
                "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",
                "type": "Role"
            }
        ]
    },
    {
        "resourceAppId": "c5393580-f805-4401-95e8-94b7a6ef2fc2",
        "resourceAccess": [
            {
                "id": "594c1fb6-4f81-4475-ae41-0c394909246c",
                "type": "Role"
            }
        ]
    },
    {
        "resourceAppId": "00000002-0000-0000-c000-000000000000",
        "resourceAccess": [
            {
                "id": "5778995a-e1bf-45b8-affa-663a9f3f4d04",
                "type": "Role"
            },
            {
                "id": "1cda74f2-2616-4834-b122-5cb1b07f8a59",
                "type": "Role"
            }
        ]
    },
    {
        "resourceAppId": "00000003-0000-0ff1-ce00-000000000000",
        "resourceAccess": [
            {
                "id": "678536fe-1083-478a-9c59-b99265e6b0d3",
                "type": "Role"
            }
        ]
    }
],
```

### Manifest for Exchange Online

```json
"requiredResourceAccess": [
    {
        "resourceAppId": "00000003-0000-0000-c000-000000000000",
        "resourceAccess": [
            {
                "id": "693c5e45-0940-467d-9b8a-1022fb9d42ef",
                "type": "Role"
            },
            {
                "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",
                "type": "Role"
            }
        ]
    },
    {
        "resourceAppId": "00000002-0000-0000-c000-000000000000",
        "resourceAccess": [
            {
                "id": "5778995a-e1bf-45b8-affa-663a9f3f4d04",
                "type": "Role"
            },
            {
                "id": "1cda74f2-2616-4834-b122-5cb1b07f8a59",
                "type": "Role"
            }
        ]
    },
    {
        "resourceAppId": "00000002-0000-0ff1-ce00-000000000000",
        "resourceAccess": [
            {
                "id": "dc50a0fb-09a3-484d-be87-e023b12c6440",
                "type": "Role"
            }
        ]
    },
    {
        "resourceAppId": "c5393580-f805-4401-95e8-94b7a6ef2fc2",
        "resourceAccess": [
            {
                "id": "594c1fb6-4f81-4475-ae41-0c394909246c",
                "type": "Role"
            }
        ]
    }
],
```

### Manifest for Microsoft Entra ID

```json
"requiredResourceAccess": [
    {
        "resourceAppId": "00000002-0000-0000-c000-000000000000",
        "resourceAccess": [
            {
                "id": "5778995a-e1bf-45b8-affa-663a9f3f4d04",
                "type": "Role"
            }
        ]
    },
    {
        "resourceAppId": "00000003-0000-0000-c000-000000000000",
        "resourceAccess": [
            {
                "id": "b0afded3-3588-46d8-8b3d-9842eff778da",
                "type": "Role"
            },
            {
                "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",
                "type": "Role"
            }
        ]
    },
    {
        "resourceAppId": "c5393580-f805-4401-95e8-94b7a6ef2fc2",
        "resourceAccess": [
            {
                "id": "594c1fb6-4f81-4475-ae41-0c394909246c",
                "type": "Role"
            }
        ]
    }
],
```

## Related Articles

- [Microsoft 365 — Permissions for Microsoft Entra ID Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/microsoftentraid/permissions)
- [Microsoft 365 — Permissions for Exchange Online Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/exchangeonline/permissions)
- [Microsoft 365 — Permissions for SharePoint Online Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/sharepointonline/permissions)
- [Microsoft 365 — Permissions for Teams Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/teams/permissions)
- [Microsoft Entra Admin Center ⸱ Microsoft 🡥](https://entra.microsoft.com)


