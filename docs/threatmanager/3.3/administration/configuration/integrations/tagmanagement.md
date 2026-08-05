---
title: "Tag Management Page"
description: "Tag Management Page"
sidebar_position: 100
---

# Tag Management Page

The Tag Management page displays all tags that the application manages, including
built-in and custom tags. You can add tags and assign objects to those tags.

![Integrations interface on the Tag Management page](/images/threatmanager/3.0/administration/configuration/integrations/page_6.webp)

The built-in tags include:

- Administrator – An administrator user account
- Agent Blueprint – An application registered in Microsoft Entra ID that serves as an
  Agent Identity Blueprint. Agent Blueprints define the identity configuration for AI agents,
  enabling them to authenticate and operate within the Microsoft identity platform.
- Agent Identity – A service principal registered in Microsoft Entra ID that acts as the identity
  for an AI agent. Agent Identity service principals enable agents to authenticate and access
  resources within the Microsoft identity platform.
- Agent User – A user account in Microsoft Entra ID that represents an AI agent. Agent Users are a
  specialized subtype of user identity designed for AI-powered applications that need to function
  as digital workers, enabling them to access APIs and services that require user identities.
- Automated Account – An account with automated authentication behavior detected
- Azure Files Storage Account – A computer account that Azure Files creates in Active Directory to
  enable Kerberos-based SMB authentication. It represents an Azure storage account rather than a
  physical or virtual machine.
- Certificate Authority – A Certificate Authority server
- Computer Account – A computer account
- Disabled – A disabled account or object. You can't use disabled objects to
  authenticate or access resources, but they may still hold role assignments, group memberships, and
  permissions.
- Domain Admin – An Active Directory domain administrator account
- Domain Controller – An Active Directory domain controller account
- Global Catalog – An Active Directory global catalog object
- Honeypot – Tags objects for inclusion in Honeypot detection
- Privileged – A member of a sensitive group. These users typically have access to sensitive systems
  and data and can execute actions that could impact the security, stability, and operation of the
  network or domain.
- Read-Only Domain Controller – A read-only Active Directory domain controller account
- Sensitive – A group that has elevated permissions or administrative rights. Members of these
  groups can perform critical tasks that affect the security, configuration, and
  operation of the entire network or domain.
- Service Account – An Active Directory service account
- Stale – An Active Directory user account marked as stale
- Watchlist – Watchlist users

:::note
The Threat Manager [Home Page](/docs/threatmanager/3.3/administration/home.md) Watchlist
displays any users with the Watchlist tag.
:::


The table displays the following information for available tags:

- Name – The name of the tag
- Description – The description for the tag
- Created – Date timestamp when the tag was created
- Created By – The user account that created the tag
- Members – Number of tagged objects

## Add New Tags

To add a custom tag:

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 2 –** On the Integrations interface, click Add New Integration in the navigation pane. The
Add New Integration window opens.

![Add New Integration window with Tag type selected](/images/threatprevention/7.5/reportingmodule/configuration/integrations/tagmanagement.webp)

**Step 3 –** In the Type dropdown menu, select Tag.

**Step 4 –** Enter the following information:

- Name – Provide a unique, descriptive name for the tag
- Description – Provide a description for the tag

**Step 5 –** Click Add. The Add New Integration window closes.

The tag appears in the Integrations navigation pane. You can now apply it to objects.

## Tag Details Page

To view the details of a tag:

**Step 6 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 7 –** On the Integrations interface, click **Tag Managemetn** in the navigation pane to view
a list of tags.

**Step 8 –** Select a tag from the table or the navigation pane to view its details.

![Integrations interface displaying the details for a Tag](/images/threatmanager/3.0/administration/configuration/integrations/details_5.webp)

This page provides the following information:

- Name – The tag name. Type in the field to modify the name.
- Description – The tag description. Type in the field to modify the description.
- Delete Tag button – This button is available only for custom tags. You can't delete built-in
  tags. You must confirm the action.
- Search box – Search for objects in the Untagged Items box and the Tagged Items box by typing in
  the textbox. You can search for user objects, group objects, file objects, or computer objects.
- Types – The dropdown menu provides object type filter options that apply to the search box
  results. When you aren't searching, the filter types apply to the Tagged Items box.
- Untagged Items box – Displays objects that match the search text. This box is blank until you
  perform a search.
- Tagged Items box – Lists objects with this tag applied

## Use the Type Filter

On the tag details window, click the Type dropdown menu to apply a filter.

:::info
Apply the Type filters you want when searching for objects to tag.
:::


![Honeypot tag with the Types dropdown menu open](/images/threatprevention/7.5/reportingmodule/configuration/integrations/typefilters.webp)

The following types are available:

- Users – Active Directory user objects
- Groups – Active Directory group objects
- Files – File objects
- Computers – Active Directory computer objects

The window filters the _tagged items_ and _untagged items_ lists to the selected object
types.

## Apply Tags to Objects

To apply tags to objects:

![Tag details page showing search results](/images/threatprevention/7.5/reportingmodule/configuration/integrations/searchselect.webp)

**Step 1 –** On the Integrations interface, click **Tag Managemetn** in the navigation pane to view
a list of tags.

**Step 2 –** Select a tag from the table or the navigation pane.

**Step 3 –** On the Tag details page, use the search box to search for the object name.

**Step 4 –** Use the Type dropdown menu to apply the object type filter you want to the search
results.

**Step 5 –** In the Untagged Items box, check the box to the left of the objects you want.

**Step 6 –** Click the arrow () between the Untagged Items box and the Tagged Items box to add the
tag to the selected objects.

Threat Manager applies the tag to the selected objects.

## Remove Tags From Objects

To remove tags from objects:

![Tag details page showing search results](/images/threatprevention/7.5/reportingmodule/configuration/integrations/search.webp)

**Step 1 –** On the Integrations interface, click **Tag Managemetn** in the navigation pane to view
a list of tags.

**Step 2 –** Select a tag from the table or the navigation pane.

**Step 3 –** On the Tag details page, use the search box to search for the object name.

**Step 4 –** Use the Type dropdown menu to apply the object type filter you want to the search
results.

**Step 5 –** In the Tagged Items box, check the box to the left of the objects you want.

**Step 6 –** Click the arrow (`<`) between the Untagged Items box and the Tagged Items box to remove
the tag from the selected objects.

Threat Manager removes the tag from the selected objects.
