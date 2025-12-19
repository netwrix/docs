---
title: "App Display Setting"
description: "App Display Setting"
sidebar_position: 10
---

# App Display Setting

This setting is used to customize the application display.

## Examples

Here are some examples of display settings that can be customized:

### Set colors, logos and names

The following example sets:

- Netwrix Identity Manager (formerly Usercube) as name of the application visible on the tabs;
- The logo to be displayed in the top left corner;
- The favicon to be displayed on the tabs;
- The **banner color**, **banner gradient color**, **banner selected tab color**, **banner text
  color**, **primary color** and **secondary color**.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AppDisplaySetting ApplicationName="Netwrix Usercube" LogoFile="logo.webp" FaviconFile="favicon.ico" BannerColor="#512E5F" BannerGradientColor="#76D7C4" BannerSelectedTabColor="#E74C3C" BannerTextColor="#F1C40F" PrimaryColor="#0E6655" SecondaryColor="#85C1E9" />
```

Colors, logo and name customization:

![AppDisplay - Basic Screen](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen2_v603.webp)

Display colors customization:

![AppDisplay - Authentication](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen1_v603.webp)

### Disable counters

The following example disables the counters that are usually visible on the dashboard:

![AppDisplay - Without Counters](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_counters_v603.webp)

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AppDisplaySetting DisableProvisioningCounters="true" />
```

![AppDisplay - Without Counters](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_nocounters_v603.webp)

### Features

The feature **Only allow approving and refusing on access certifications items** gives the
administrator the option to limit the user's option to either **Approve** or **Deny** the Access
Certification items while making the **More** button unavailable.

![allowapprovingdenyingaccesscertificationitems](/images/identitymanager/saas/user-guide/set-up/configure-global-settings/allowapprovingdenyingaccesscertificationitems.webp)

The following example disables the **More** button that is usually visible on certification screen:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessCertificationOnlyApproveDeny="true"/> 
```

If the feature **Only allow approving and denying on access certification items** is set to **Yes**,
the **More** button is disabled.

![accesscertificationonlyapprovedeny-disabled](/images/identitymanager/saas/user-guide/set-up/configure-global-settings/accesscertificationonlyapprovedeny-disabled.webp)

See the
[Configure Global Settings](/docs/identitymanager/6.2/user-guide/set-up/configure-global-settings/index.md)
topic for additional information.

## Properties

| Property                                          | Type    | Description                                                                                                                                                                                     |
| ------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ApplicationName (optional)                        | String  | Name of the application, visible on the application's tabs.                                                                                                                                     |
| AccessCertificationOnlyApproveDeny (optional)     | Boolean | True to hide the **More** button on the access certification screens, only allowing **Approve** and **Deny** actions. The default value is **false**.                                           |
| BannerColor (optional)                            | String  | HEX code of the color for the banner, i.e. the header displaying logo and navigation bar.                                                                                                       |
| BannerGradientColor (optional)                    | String  | HEX code of the color for the banner's gradient to be visible at the middle of the banner.                                                                                                      |
| BannerSelectedTabColor (optional)                 | String  | HEX code of the color for the line that emphasizes the selected tab.                                                                                                                            |
| BannerTextColor (optional)                        | String  | HEX code of the color for the banner's text.                                                                                                                                                    |
| DisableProvisioningCounters (default value: false | String  | True to disable the counters related to the administration screens: **Role Review**, **Provisioning Review**, **Role Reconciliation**, **Resource Reconciliation** and **Manual Provisioning**. |
| FaviconFile (optional)                            | String  | Path of the favicon to be displayed in the application's tabs.                                                                                                                                  |
| FaviconMimeType (optional)                        | String  | Mime type of the favicon.                                                                                                                                                                       |
| FullNameSeparator (default value: �)              | String  | Separator of the full name.                                                                                                                                                                     |
| Identifier (default value: AppDisplay)            | String  | Unique identifier of the setting.                                                                                                                                                               |
| LogoFile (optional)                               | String  | Path of the logo to be displayed in the top left corner.                                                                                                                                        |
| LogoMimeType (optional)                           | String  | Mime type of the logo.                                                                                                                                                                          |
| Preview (optional)                                | String  | Documentation unavailable.                                                                                                                                                                      |
| PrimaryColor (optional)                           | String  | HEX code of the color for the highlighted buttons.                                                                                                                                              |
| SecondaryColor (optional)                         | String  | HEX code of the color for the background of the authentication screen.                                                                                                                          |
