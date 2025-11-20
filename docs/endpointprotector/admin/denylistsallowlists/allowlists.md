---
title: "Allowlists"
description: "Allowlists"
sidebar_position: 20
---

# Allowlists

## MIME Type

The content inspection functionally within Endpoint Protector identiﬁes multiple ﬁle types. While
some ﬁles (e.g. Word, Excel, PDFs, etc.) can contain conﬁdential information (e.g. PIIs, SSNs,
Credit Cards, etc.), other ﬁles are highly unlikely to contain such data (e.g. .dll, .exe, .mp3,
.avi, etc.).

The purpose of the MIME Type Allowlists is to eliminate the use of resources to inspect redundant
and unnecessary ﬁles for content, as well as reducing false positives due to information detected in
the metadata of ﬁles where the risk of data loss is extremely low.

Example: As songs or video ﬁles cannot contain lists of credit card numbers, there is no need to
inspect them using content ﬁlters.

MIME Type Allowlists are available for both the Content Aware Protection and eDiscovery modules and
apply to Custom Content, Predeﬁned Content, and Regular Expressions.

:::note
By default, graphic ﬁles, media ﬁles, some password-protected archive ﬁles and some system
ﬁles are automatically deﬁned within the MIME Type Allowlists. While this can be changed, we
recommend only doing so after gaining a deeper understanding of the type of data transferred used,
or stored by the users in your system, and the subsequent logs increase in the Endpoint Protector
Server.
:::


![MIME Type Allowlists ](mimetypeallowlists.webp)

## Allowed Files

Allowed Files Allowlists are custom groups of ﬁles you exclude from Endpoint Protector sensitive
content detection, available for both Content Aware Protection and eDiscovery modules.

![Allowed Files Allowlists ](allowedfilesallowlists.webp)

You can add a new allowlist or edit and delete from the Actions column.

To create a new allowlist, under the list of available allowlists, click **Add**, provide a **name**
and **description** and then select a ﬁle from the list or upload a new ﬁle you can use in multiple
allowlists.

Once the allowlist is created, it will be displayed on the Allowed File list and will be available
when creating or editing a Content Aware Protection or eDiscovery policy.

![New Allowed Files Allowlists ](newallowedfilesallowlists.webp)

## File Location

File Location Allowlists are custom-deﬁned lists of locations identiﬁed by Endpoint Protector. File
transfers within this location are automatically allowed, regardless of the content inspection rules
or permissions deﬁned in various Policies.

File Location Allowlists are available for both Content Aware Protection and eDiscovery modules

Enable the **Include subfolders for File Location Allowlists** option to affect all other File
Location Denylists and Allowlists throughout the system. By default, the File Location Allowlists
apply to all ﬁles located in the speciﬁc folder but also to any other ﬁles located in containing
subfolders.

:::note
In addition to deﬁning the File Location Allowlist, the browser or application used to
transfer ﬁles also needs to be selected from within the Content Aware Protection Policy.
:::


You can use wildcard patterns in the ﬁle location allow list, to specify wildcard matching. To match
a desktop folder on Windows use the pattern "?:\Users\\\*\Desktop\".

**Wildcards Usage Examples for File Location**

| Wildcards Type | File Location      | Results matched                                                                    | Results not matched                                                     |
| -------------- | ------------------ | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Implicit       | \\ﬁle-share\public | \\ﬁle-share\public\jdoe\ﬁle.txt \\ﬁle-share\public\user512\ﬁle2.txt                | \\ﬁle-share\c$\ﬁle.txt \\ﬁle-server\public\jdoe\ﬁle.txt                 |
| Explicit       | \\\*\public\\\*    | \\localhost\public\payslip.xlsx \\192.168.20.2\public\Windows\system32\notepad.exe | \\localhost\c$\system32\notepad.exe C:\Windows.old\system32\notepad.exe |

![File Location Allowlists](filelocationallowlists.webp)

You can add a new allowlist or edit, delete or export from the Actions column.

From this section, you can view and add ﬁle location denylists and from the Actions column, you can
edit, delete or export an existing denylist.

To create a new denylist, under the list of available denylists, click **Add**, provide a **name**
and **description**, add the items separated by a new line, comma, or semicolon and then select the
**groups** and **computers**.

File Location Allowlists will not apply to groups of users, only to groups of computers. File
Location Allowlists will only apply for the selected computer groups after 15 minutes.

:::note
By clicking the "Select All Computers" checkbox, ONLY computers existing in the Computers list at that moment can be checked and selected all at once. This DOES NOT imply that all the computers that will ever exist in the EPP Server Computer's list will be added to the "Allowlist - File Location" exception.

This is because adding new entities by default to the File Location's Allowlist exceptions without the Administrator knowledge could prove troublesome. When a new computer is added to the EPP Server, the "Select All Computers" checkbox becomes unchecked again but the computers that were checked before remain selected. By pressing that checkbox again, the newly added/unselected computers are added to the selectoion.

The same behavior also applies for Groups. The Administrator has the option to create custom Groups based on the existing computers/users already existing in the EPP Server's DB. When a new computer is added, it is not allocated to a group by default because the group in which the computer will be placed might not be the one that the Administrator intended for it to be in and it needs to be added manually.
:::

![New File Location Allowlists ](filelocationnewdenylists.webp)

## Network Share

Network Share Allowlists are custom-deﬁned lists of network share addresses where transfers of
conﬁdential information will be allowed by Endpoint Protector.

:::note
Network Share Allowlists are available only for the Content Aware Protection module.
:::


You can use wildcard patterns in the Network Share Allowlist to specify wildcard matching. The
Network Share Allowlist can perform matching the whole ﬁle name, not only on the directory name,
when wildcard patterns are used.

:::warning
The Network Share must be set to Allow Access and Scan Network Share must be checked
inside a Content Aware Protection Policy.
:::


![Network Share Allowlists ](networkshareallowlists.webp)

You can add a new allowlist or edit, delete or export from the Actions column.

To create a new allowlist, under the list of available allowlists, click **Add**, provide a **name**
and **description**, add server name or IP address to deﬁne a network share path separated by a new
line, comma, or semicolon and then select the **groups** and **computers**.

Network Share Allowlists will not apply to groups of users, only to groups of computers. Network
Share Allowlists will only apply for the selected computer groups after 15 minutes.

:::warning
Do not type the network share path with backslashes (\\) 192.168.0.1\public\users\test;
ﬁleserver\documents\example
:::


![New Network Share Allowlists](newnetworkshareallowlists.webp)

## E-mail Domain

E-mail Domain Allowlists are custom-deﬁned e-mail addresses to which sending of conﬁdential
information will be allowed by Endpoint Protector.

:::note
E-mail Domain Allowlists are available only for the Content Aware Protection module.
:::


![E-mail Domain Allowlists](emaildomainallowlists.webp)

You can add a new allowlist or edit, delete or export from the Actions column.

To create a new allowlist, under the list of available allowlists, click **Add**, provide a **name**
and **description** and then type or paste items at least three characters separated by a new line,
comma, or semicolon. You can import content using the sample ﬁle provided on the form.

Once the allowlist is created, it will be displayed on the E-mail Domain list and will be available
when creating or editing a Content Aware Protection policy.

![New E-mail Domain Allowlists ](newemaildomainallowlists.webp)

You can use wildcard patterns in the e-mail domain to specify wildcard matching as displayed in the
following example.

**Wildcards Usage Examples for E-mail Domain**

| E-mail Domain name | Results matched                              | Results not matched       |
| ------------------ | -------------------------------------------- | ------------------------- |
| @epp.com           | robert@epp.com jdoe@epp.com james@epp.com.ca | sara@epp.com jeff@ccs.com |

## Deep Packet Inspection

Available only for the Content Aware Protection module, Deep Packet Inspection Allowlists are
custom-deﬁned lists or dictionaries with web domains Endpoint Protector will allow conﬁdential
information uploads.

![Deep Packet Inspection Allowlists ](dpiallowlists.webp)

You can add a new allowlist or edit, delete or export from the Actions column.

You can create or import up to 100 lists of dictionaries, each dictionary comprising up to 50000 web
domains.

:::note
Dictionaries comprising up to 100 web domains can be edited, but for more extensive
dictionaries, you will need to import them again.
:::


To create a new allowlist, under the list of available allowlists, click Add, provide a name and
description and then type or paste items at least three characters separated by a new line, comma,
or semicolon. You can import content using the sample ﬁle provided on the form.

Example: example.endpointprotector, \*example.com, \*example\*, https://website.com, etc.

:::warning
“?” cannot be used to replace a character.
:::


:::note
Due to Gmail usage, take the following into consideration:
:::


- You need to allow **mail.google.com** for adding e-mail attachments or ﬁles using the drag and
  drop option
- You need to allow **doc.google.com** to add images in the email body

Once the allowlist is created, it will be displayed on the Deep Packet Inspection list and will be
available when creating or editing a Content Aware Protection policy.

![New Deep Packet Inspection Allowlists](newdpiallowlists.webp)

**Wildcards Usage Examples for Deep Packet Inspection**

| Domain name         | Results matched                                                        | Results not matched                                                      |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| box.com             | box.com                                                                | Sub.box.com box1.com                                                     |
| \*.box.com          | Sub.box.com bad.box.com                                                | Fakebox.com mybox.com                                                    |
| box.\*.com          | Box.co.com box.bad.com                                                 | Sub.box.co.com Box1.co.com box.co.uk                                     |
| box.com.\*          | Box.com.co box.com.us                                                  | Sub.box.com.us box1.com.us                                               |
| https://cisco.com   | https://cisco.com/drives/downloads/ http://cisco.com/drives/downloads/ | https://sub.cisco.com/drives/download s/ https://cisco.com.ca/downloads/ |
| https://cisco.com\* | https://cisco.com.ca/downloads/ http://cisco.com.ca/downloads/         | https://sub.cisco.com.ca/downloads/ https://bad.cisco.com/downloads/     |

:::note
Using wildcards will search for domain names, not URLs.

:::
