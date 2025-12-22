---
title: "Collections and Policies"
description: "Collections and Policies"
sidebar_position: 20
---

# Collections and Policies

Endpoint Policy Manager File Associations Manager is contained within the Endpoint Policy Manager
node. Endpoint Policy Manager File Associations Manager MMC snap-in enables you to create a new
Endpoint Policy Manager File Associations Manager policy or collection. You can create policies on
the Computer side or User side.

:::note
You will only see the Endpoint Policy Manager File Associations Manager node when the
latest Admin Console MSI is installed on the management station.
:::


The functions of collections and policies are as follows:

- Collections are groupings of policies.
- Policies are the rules that perform the work.

Below you can see how to add a new collection or policy.

![about_policypak_file_associations_4](/images/endpointpolicymanager/fileassociations/collections/about_endpointpolicymanager_file_associations_4.webp)

If you want to follow along with the Quickstart for Endpoint Policy Manager File Associations
Manager in the next section, we suggest you download some applications on your Windows 10 management
station and on your endpoint.

On the endpoint, add some common file types to the Windows 10 Desktop. We suggest adding the
following files:

- A PDF file
- An MP4 file
- An XML file
- A Wordpad document with a `MAILTO:` command in it

Below is an example of all four types of files on the sample Desktop.

![about_policypak_file_associations_5](/images/endpointpolicymanager/fileassociations/collections/about_endpointpolicymanager_file_associations_5.webp)

Endpoint Policy Manager File Associations Manager is the quickest way to set up, test, and manage
file associations on your machine (the Group Policy Editor machine) if it has the same applications
as the target machines. It is recommended you install the following applications twice, once on your
management station and another on your Windows 10 endpoint.

- Adobe Acrobat DC (11 or 10) — We suggest the offline MSI installer package, which can be found at
  Adobe's [MSI Installer Package](https://get.adobe.com/reader/enterprise/) download.
- A mail program such as Outlook — If that's too much to download and install, you can use something
  smaller such as Claws Mail for a quick test. Claws Mail can be downloaded at
  [Download Claws Mail](http://www.claws-mail.org/win32/).
- The UWP version of Metro Media Player from the Windows store.

Acrobat Reader asks if it can be the default PDF viewe. Yet, after the installation occurs, the PDF
is not associated with Acrobat Reader. Instead, Windows 10 Edge is typically the default program to
open PDF files, or Edge is recommended, and the user must make a choice.

![about_policypak_file_associations_6](/images/endpointpolicymanager/fileassociations/collections/about_endpointpolicymanager_file_associations_6.webp)

When installing Adobe Acrobat Reader DC, the installer asks to be the default PDF viewer.

![about_policypak_file_associations_7](/images/endpointpolicymanager/fileassociations/collections/about_endpointpolicymanager_file_associations_7.webp)

Edge generally becomes the default when a user opens a PDF file.

The same problem occurs when you install Outlook or Claws Mail. Outlook and Claws Mail try to
register themselves as a provider for the `MAILTO: protocol`. But after Claws Mail or Outlook is
installed, it is not actually correctly set as the default for `MAILTO: emails`. You can quickly
test this by opening up Wordpad and typing `MAILTO:you@email.com`, . Click the link, and you will
see that it will launch the Windows 10 default mail application instead of Outlook or Claws Mail.

![about_policypak_file_associations_8](/images/endpointpolicymanager/fileassociations/collections/about_endpointpolicymanager_file_associations_8.webp)

After installing Claws Mail, the program tries to make itself the default for opening emails.

![about_policypak_file_associations_9](/images/endpointpolicymanager/fileassociations/collections/about_endpointpolicymanager_file_associations_9.webp)

Opening Wordpad and typing `MAILTO:you@email.com` shows that Outlook or Claws Mail is not actually
the default email program.

The UWP (Windows Universal App in the Windows store) for Metro Media Player Pro is shown below.

![about_policypak_file_associations_10](/images/endpointpolicymanager/fileassociations/collections/about_endpointpolicymanager_file_associations_10.webp)

In order to successfully complete the Quickstart with Endpoint Policy Manager File Associations
Manager in the next section, make sure you have the following machines set up with the programs and
files listed here:

- Your machine with the GPMC should have Acrobat Reader, Claws Mail (or Outlook), and the UWP
  version of Metro Media Player.
- An example endpoint machine with the Endpoint Policy Manager CSE should have Acrobat Reader, Claws
  Mail (or Outlook), and the UWP version of Metro Media Player.
- An example endpoint machine with a PDF file, a MP4 file, a MAILTO: example, and an XML file loaded
  on the Desktop.


