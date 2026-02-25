---
title: "AppDisplaySetting"
description: "This setting is used to customize the application display."
sidebar_position: 1
---

This setting is used to customize the application display.


## Examples
### Set colors, logos and names

The following example sets:
* "Netwrix Identity Manager" as name of the application visible on the tabs;
* the logo to be displayed in the top left corner;
* the favicon to be displayed on the tabs;
* the **banner color**, **banner gradient color**, **banner selected tab color**, **banner text color**, **primary color** and **secondary color**.

```xml
<AppDisplaySetting ApplicationName="Netwrix Identity Manager" LogoFile="logo.webp" FaviconFile="favicon.ico" BannerColor="#512E5F" BannerGradientColor="#76D7C4" BannerSelectedTabColor="#E74C3C" BannerTextColor="#F1C40F" PrimaryColor="#0E6655" SecondaryColor="#85C1E9" />
```

![AppDisplay - Tab](/images/identitymanager/integration-guide/toolkit/xml-configuration/metadata/AppDisplaySetting_tab_V603.webp)

![Appdisplaysetting Tab V603](/images/identitymanager/integration-guide/toolkit/xml-configuration/metadata/AppDisplaySetting_tab_V603.webp)

![AppDisplay - Authentication](/images/identitymanager/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen1_v603.webp)

### Disable counters

The following example disables the counters that are usually visible on the dashboard:

> ![AppDisplay - Without Counters](/images/identitymanager/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_counters_v603.webp)

```xml
<AppDisplaySetting DisableProvisioningCounters="true" />
```

![AppDisplay - Without Counters](/images/identitymanager/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_nocounters_v603.webp)


## Properties

|Property|Details|
|---|---|
| ApplicationName optional | **Type:** String **Description:** Name of the application, visible on the application's tabs. |
| BannerColor optional | **Type:** String **Description:** HEX code of the color for the banner, i.e. the header displaying logo and navigation bar. |
| BannerGradientColor optional | **Type:** String **Description:** HEX code of the color for the banner's gradient to be visible at the middle of the banner. |
| BannerSelectedTabColor optional | **Type:** String **Description:** HEX code of the color for the line that emphasizes the selected tab. |
| BannerTextColor optional | **Type:** String **Description:** HEX code of the color for the banner's text. |
| DisableProvisioningCounters <span class="optionalAttribute">default value: false</span> | **Type:** String **Description:** `true` to disable the counters related to the administration screens: **Role Review**, **Provisioning Review**, **Role Reconciliation**, **Resource Reconciliation** and **Manual Provisioning**. |
| FaviconFile optional | **Type:** String **Description:** Path of the favicon to be displayed in the application's tabs. |
| FaviconMimeType optional | **Type:** String **Description:** Mime type of the favicon. |
| FullNameSeparator <span class="optionalAttribute">default value: ¤</span> | **Type:** String **Description:** Separator of the full name. |
| Identifier <span class="optionalAttribute">default value: AppDisplay</span> | **Type:** String **Description:** Unique identifier of the setting. |
| LogoFile optional | **Type:** String **Description:** Path of the logo to be displayed in the top left corner. |
| LogoMimeType optional | **Type:** String **Description:** Mime type of the logo. |
| Preview optional | **Type:** String **Description:** Documentation unavailable. |
| PrimaryColor optional | **Type:** String **Description:** HEX code of the color for the highlighted buttons. |
| SecondaryColor optional | **Type:** String **Description:** HEX code of the color for the background of the authentication screen. |

