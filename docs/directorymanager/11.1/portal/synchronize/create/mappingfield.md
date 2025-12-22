---
title: "Map Fields"
description: "Map Fields"
sidebar_position: 40
---

# Map Fields

When creating a job, you select any of the following destination providers.

- Microsoft Active Directory
- Microsoft Entra ID
- Generic LDAP version 3.0
- Google Workspace
- Microsoft Access
- Microsoft Excel
- Oracle
- ODBC
- Microsoft SQL Server
- Text

Once selected, you can see a specific set of objects that can be created in the destination
providers. Once the object type is selected, there are a set of mandatory attributes that are
required for creating the respective objects.

The tables below show the mandatory attribute for different object types for each provider and what
transformations that need to apply to them while mapping.

Mandatory attributes for User:

<table>
	<thead>
        <tr>
            <th>Provider</th>
            <th>Mandatory Attributes</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td rowspan="5" valign="top">Active Directory</td>
            <td>cn</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>givenname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>sAMAccountName</td>
            <td>&#160;</td>
        </tr>
        <tr>
			<td>sn</td>
			<td>&#160;</td>
        </tr>
         <tr>
            <td>password</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td rowspan="6" valign="top">Microsoft Entra ID</td>
            <td valign="top">accountenabled</td>
            <td>To create disabled users, select False in static transformation. <br />To create enabled users, select True in static transformation.</td>
        </tr>
        <tr>
            <td valign="top">directoryrole</td>
            <td>Every user is assigned a role in Microsoft Entra ID. In static transformation, it will auto-generate all roles in the tenant. Select the one you want to choose.</td>
        </tr>
         <tr>
            <td valign="top">displayname</td>
            <td>Given the name that appears on Microsoft Entra ID. You can map it with the first name.</td>
        </tr>
        <tr>
            <td>givenname</td>
            <td>First name of the user in Microsoft Entra ID.</td>
        </tr>
        <tr>
            <td valign="top">userprincipalname</td>
            <td>You need to amend the domain name to give the userprincipalname. It is the mandatory key value and is unique for every user. <br />In static transformation, select join to modify the name. Then go to the script transformation and you will see
            the updated script. <pre><code>DTM.Source("First") &amp; "." &amp; <br />DTM.Source("Last") &amp; "@001wrc.onmicrosoft.com"</code></pre> In the script, add the domain name and generate new userprincipal names for each user based on the join and script transform.</td>
        </tr>
        <tr>
			<td>password</td>
			<td>Generate passwords for the users.</td>
        </tr>
    </tbody>
</table>

Mandatory attributes for Mail-enabled User:

<table>
    <thead>
        <tr>
            <th>Provider</th>
            <th>Mandatory Attributes</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="8" valign="top">Active Directory</td>
            <td>cn</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>displayname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>givenname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>mailNickname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>&#160;sAMAccountName</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>sn</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>targetAddress&#160;&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>password</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

Mandatory Attributes for Mailbox-enabled User:

<table>
    <thead>
        <tr>
            <th>Provider</th>
            <th>>Mandatory Attributes</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="8" valign="top">Active Directory</td>
            <td>cn</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>displayname</td>
			<td>&#160;</td>
        </tr>
        <tr>
            <td>givenname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>homeMDB</td>
            <td>&#160;</td>
        </tr>
        <tr>
           <td>mailNickname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>sAMAccountName</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>sn</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>password</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td rowspan="10" valign="top">Microsoft Entra ID</td>
            <td>accountenabled</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>directoryrole</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>displayname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>givenname&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td valign="top">mailnickname</td>
            <td>Same as user principalname. We do not need to update script. It will add domain name itself.</td>
        </tr>
        <tr>
            <td>surname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>userprincipalname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>password</td>
            <td>&#160;</td>
        </tr>
       <tr>
            <td>UsageLocation</td>
            <td>Mailbox-specific. You can apply the static transformation.</td>
        </tr>
        <tr>
            <td valign="top">LicenseAssignment</td>
            <td>All mailboxes are assigned a license. We assign that license while creation. <br />Select static transformation, it will display all available licenses. You can select any and once user is created they will be assigned this license.</td>
        </tr>
    </tbody>
 </table>

Mandatory Attributes for Mailbox-enabled Contact:

<table>
    <thead>
        <tr>
            <th>Provider</th>
            <th>Mandatory Attributes</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="6" valign="top"> Active Directory</td>
            <td>cn</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>displayname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>givename</td>
            <td>&#160;</td>
        </tr>
        <tr>        
            <td>mailNickname</td>
            <td>&#160;</td>
        </tr>
        <tr>        
            <td>sn</td>
            <td>&#160;</td>
        </tr>
        <tr>        
            <td>targetAddress</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

Mandatory Attributes for Group:

<table>
    <thead>
        <tr>
            <th>Provider</th>
            <th>Mandatory Attributes</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="5" valign="top">Active Directory</td>
            <td>cn</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>displayname</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>grouptype</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>member (sAMAccountName)</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>sAMAccountName</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td rowspan="5" valign="top">Microsoft Entra ID</td>
            <td>description</td>
            <td>Text fields that you can map with anything</td>
        </tr>
        <tr>
            <td valign="top">displayname</td>
            <td>The name that appears in the directory. It will uniquely identify the group. You can also apply transformations.</td>
        </tr>
        <tr>
            <td valign="top">grouptype</td>
            <td>Go to static transformation, you will get a group-type list. Select any of the following: <ul><li>Security</li><li>Distribution</li><li>Office365</li></ul></td>
        </tr>
        <tr>
            <td colspan="2">If you add Messaging provider, the group becomes mail-enabled and you will see the following additional mandatory attribute while mapping.</td>
        </tr>
        <tr>
            <td valign="top">mailNickname</td>
           <td>Same as user principalname. We do not need to update the script. It will add domain name itself.</td>
        </tr>
    </tbody>
</table>
