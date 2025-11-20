---
title: "Where does Browser Router store user selected browser (and how can I fake it if I need to) in versions 2536 and later?"
description: "Where does Browser Router store user selected browser (and how can I fake it if I need to) in versions 2536 and later?"
sidebar_position: 70
---

# Where does Browser Router store user selected browser (and how can I fake it if I need to) in versions 2536 and later?

:::warning
This article pertains to build 2536 and later. For earlier builds, the instructions are
different, and technically, not supported. If using a CSE version older than 2536, please upgrade to
the latest Netwrix Endpoint Policy Manager (formerly PolicyPak) version before using the steps in
this KB.
:::


Endpoint Policy Manager Browser Router has a function called **User Selectable browser**. Learn more
about this feature first here:

[Endpoint Policy Manager Browser Router User-Selected Default](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/gettingstarted/userselecteddefault.md)

[What is meant by "Default Browser" within Endpoint Policy Manager Browser router?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/tipsandtricks/defined.md)

You might need to have Endpoint Policy Manager Browser Router indicate that a user specifically
chose a particular browser, even if they did not.

The values a particular user chose are stored for both HTTP and HTTPS. They are stored per user in
the following location in the registry:

`"HKEY_CURRENT_USER\SOFTWARE\PolicyPak\Client-Side Extensions\{1659C456-08FC-4359-B125-BB70EE34DD55}\PPBRAgent\SavedOldValues"`Then
within SavedOldValues there are two keys, one for HTTP and one for HTTPs.

`/Software/Microsoft/Windows/Shell/Associations/UrlAssociations/http/UserChoice`

`/Software/Microsoft/Windows/Shell/Associations/UrlAssociations/https/UserChoice`

The first path is default browser for HTTP schema and the second one is HTTPS.

Those two keys hold a REG_SZ called ProgID which specifies the user's chosen (or perceived) default
browser.

For instance, in this example, after the Admin has chosen User Selectable, the User chooses Edge
(UWP version), with the following results:

![507_1_image-20201229224350-1_950x136](/images/endpointpolicymanager/browserrouter/507_1_image-20201229224350-1_950x136.webp)

Supported values in ProgID are:

- Edge (With Chromium):
  - MSEdgeHTM
- Edge (UWP version):
  - AppXq0fevzme2pys62n3e0fbqa7peapykr8v for HTTP
  - AppX90nv6nhay5n6a98fnetv7tpk64pp35es for HTTPS
- Internet Explorer
  - IE.HTTP
  - IE.HTTPS
- Chrome:
  - ChromeHTML

:::note
Firefox uses a customized value for ProgId dependent on the version of Firefox installed.
You can set the default browser to Firefox and then look under the following key to find the correct
custom ProgId value:
:::


`HKCU\SOFTWARE\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice\ProgId`

For Example:
![507_2_image-20201229224350-2](/images/endpointpolicymanager/browserrouter/507_2_image-20201229224350-2.webp)

Example: If a user has not yet selected a Browser, or if MS Edge Chromium is the perceived browser,
then specify the default as Chrome (one time) and allow the user to select a different browser if
desired going forward.

Prerequisites:

- A PPBR User Selectable policy applied on the User Side
- Browser you wish to use as the default must be installed
- The PPBR policy should be applied AFTER the GP Preferences policy.

To do this you'll use a Group Policy Preferences Registry Item to SET the value Only do this iff
Item Level Targeting proves the value is ABSENT OR if the value is set to MSEdgeHTM (Edge Chromium).

:::note
The GPO must be linked to where USERS are, not COMPUTERS, because the logged-in user SID
is used during this operation.
:::


**Step 1 –** Set the value:

- Hive: HKEY_CURRENT_USER
- `Key Path: SOFTWARE\PolicyPak\Client-Side Extensions\{1659C456-08FC-4359-B125-BB70EE34DD55}\PPBRAgent\SavedOldValues\Software/Microsoft/Windows/Shell/Associations/UrlAssociations/http/UserChoice`
- Value Name: ProgID
- Value Type: REG_SZ
  ![507_3_image-20201229224350-3](/images/endpointpolicymanager/browserrouter/507_3_image-20201229224350-3.webp)-
  ValueData: ChromeHTML

**Step 2 –** (But only if the value below is absent...:

`HKCU\ Software\PolicyPak\Client-Side Extensions\{1659C456-08FC-4359-B125-BB70EE34DD55}\PPBRAgent\SavedOldValues\Software/Microsoft/Windows/Shell/Associations/UrlAssociations/http/UserChoice\`

... or if ProgId at the location below is set to MSEdgeHTM (as verified by ILT):

`HKCU\ Software\PolicyPak\Client-Side Extensions\{1659C456-08FC-4359-B125-BB70EE34DD55}\PPBRAgent\SavedOldValues\Software/Microsoft/Windows/Shell/Associations/UrlAssociations/http/UserChoice\ProgId\`

![507_4_image-20201229224350-4](/images/endpointpolicymanager/browserrouter/507_4_image-20201229224350-4.webp)

![507_5_image-20201229224350-5_950x366](/images/endpointpolicymanager/browserrouter/507_5_image-20201229224350-5_950x366.webp)

Be sure to have entries which set HTTP and HTTPS like these two values here (i.e., Repeat Steps 1 &
2 above for HTTPS value)

![507_6_image-20201229224350-6](/images/endpointpolicymanager/browserrouter/507_6_image-20201229224350-6.webp)

:::tip
Remember, You need two entries. One for HTTP and one for HTTPS.
:::


:::note
If Chrome is not installed, PPBR will fail back to Internet Explorer. Also, for first time
logins, Chrome will not become the default browser until the 2nd processing of gpupdate.For
convenience the required User side Group Policy Preference XMLS are attached below:
:::


HTTP: [https://www.policypak.com/pp-files/2020-12-29_no-default-or-default-edge-
then-set-to-chrome-http.xml](https://www.policypak.com/pp-files/2020-12-29_no-default-or-default-edge-
then-set-to-chrome-http.xml)

HTTPS: [https://www.policypak.com/pp-files/2020-12-29_no-default-or-default-edge-
then-set-to-chrome-https.xml](https://www.policypak.com/pp-files/2020-12-29_no-default-or-default-edge-
then-set-to-chrome-https.xml)


