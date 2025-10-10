---
title: "Assigning Application Permissions Using Manifest"
description: "Assigning Application Permissions Using Manifest"
sidebar_position: 10
---

# Assigning Application Permissions Using Manifest

Follow the steps to assign application permissions using Manifest.

**Step 1 –** Under **App registrations**, select the newly created app.

**Step 2 –** Select **Manifest** on the left.

**Step 3 –** Locate the **requiredResourceAccess** property in the manifest and edit it with the
following in the square brackets ([]). Then click **Save**.

Optionally, you can select **Download** to edit the manifest locally, and then use Upload to reapply
it to your application.

Do one of the following:

- For the clear installation of Netwrix Auditor, add roles as described in the
  [Using Modern Authentication with SharePoint Online](/docs/auditor/10.8/configuration/microsoft365/sharepointonline/permissions/modernauth/modernauth.md) topic.

- If you upgraded Netwrix Auditor from the version 10.0, replace all existing content under the
  **requiredResourceAccess** property.

```jsonc
{
    "resourceAppId": "00000003-0000-0ff1-ce00-000000000000",
    "resourceAccess": [
        {
            "id": "678536fe-1083-478a-9c59-b99265e6b0d3",
            "type": "Role"
        }
    ]
},
{
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
        {
            "id": "1bfefb4e-e0b5-418b-a88f-73c46d2cc8e9",
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
```
