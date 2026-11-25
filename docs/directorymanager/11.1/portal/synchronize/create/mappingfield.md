---
title: "Mandatory Attributes for Field Mapping"
description: "See the mandatory attributes for each object type and destination provider, and the transformations to apply, when mapping fields in a Synchronize job."
keywords:
  - Synchronize job
  - mandatory attributes
  - field mapping
  - destination providers
  - Microsoft Entra ID
sidebar_position: 40
---

# Mandatory Attributes for Field Mapping

When you create a job, you select one of these destination providers:

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

After you select a provider, you see the set of objects that you can create in that destination provider. After you select the object type, a set of mandatory attributes is required to create the objects.

These tables show the mandatory attributes for each object type and provider, and the transformations to apply to them while mapping.

## User attributes

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
            <td>Every user is assigned a role in Microsoft Entra ID. In static transformation, Directory Manager auto-generates all roles in the tenant. Select the role you want.</td>
        </tr>
         <tr>
            <td valign="top">displayname</td>
            <td>The name that appears in Microsoft Entra ID. You can map it with the first name.</td>
        </tr>
        <tr>
            <td>givenname</td>
            <td>First name of the user in Microsoft Entra ID.</td>
        </tr>
        <tr>
            <td valign="top">userprincipalname</td>
            <td>You need to append the domain name to the userprincipalname. It is the mandatory key value and is unique for every user. <br />In static transformation, select join to modify the name. Then go to the script transformation to see
            the updated script. <pre><code>DTM.Source("First") &amp; "." &amp; <br />DTM.Source("Last") &amp; "@001wrc.onmicrosoft.com"</code></pre> In the script, add the domain name and generate new userprincipalname values for each user based on the join and script transform.</td>
        </tr>
        <tr>
			<td>password</td>
			<td>Generate passwords for the users.</td>
        </tr>
    </tbody>
</table>

## Mail-enabled user attributes

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

## Mailbox-enabled user attributes

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
            <td>Same as userprincipalname. You don't need to update the script. It adds the domain name itself.</td>
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
            <td>All mailboxes are assigned a license. The license is assigned during creation. <br />Select static transformation to display all available licenses. Select a license, and Directory Manager assigns it to the user when it creates the user.</td>
        </tr>
    </tbody>
 </table>

## Mailbox-enabled contact attributes

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
            <td>givenname</td>
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

## Group attributes

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
            <td>Text fields that you can map to anything.</td>
        </tr>
        <tr>
            <td valign="top">displayname</td>
            <td>The name that appears in the directory. It uniquely identifies the group. You can also apply transformations.</td>
        </tr>
        <tr>
            <td valign="top">grouptype</td>
            <td>Go to static transformation to get a group-type list. Select one of the following: <ul><li>Security</li><li>Distribution</li><li>Office365</li></ul></td>
        </tr>
        <tr>
            <td colspan="2">If you add a messaging provider, the group becomes mail-enabled and the following additional mandatory attribute appears while mapping.</td>
        </tr>
        <tr>
            <td valign="top">mailNickname</td>
           <td>Same as userprincipalname. You don't need to update the script. It adds the domain name itself.</td>
        </tr>
    </tbody>
</table>
