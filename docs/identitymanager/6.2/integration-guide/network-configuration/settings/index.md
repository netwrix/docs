---
title: "Various XML Settings"
description: "Various XML Settings"
sidebar_position: 60
---

# Various XML Settings

This section describes Identity Manager's
[Settings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/settings/index.md) available in the
applicative configuration. Those are mandatory.

## ConfigurationVersion

This setting is used to track the current configuration version.

```

**<ConfigurationVersionSetting Version="5.0.0" Description="Demo IdentityManager" />**

```

- **Version** defines the configuration version.
- **Description** describes this version in detail.
- **Misc** misc.

## AppDisplay

This setting is used to customize the application display.

```

**<AppDisplaySetting PrimaryColor="#009597" SecondaryColor="#00553F" ApplicationName="Usercube" LogoFile="Images/logo.webp" FaviconFile="Images/favicon.ico" />**

```

- **PrimaryColor** defines the primary color.
- **SecondaryColor** defines the secondary color.
- **BannerColor** defines the banner (header displaying logo and navigation bar) color.
- **BannerTextColor** defines the banner text color.
- **ApplicationName** defines the application name.
- **LogoFile** defines the logo path. Concerning the logo, for an ideal result, the following ratio
  should be used: 5:1.
- **LogoMimeType** defines the logo mime type.
- **FaviconFile** defines the favicon path.
- **FaviconMimeType** defines the favicon mime type.
- **FullNameSeparator** defines the full name separator (default value is `�`).
- **DisableProvisioningCounters** disables the counters related to the provisioning screens (**Role
  Review**, **Provisioning Review**, **Role Reconciliation**, **Resource Reconciliation** and
  **Manual Provisioning** - default value is `false`).

## CustomLinks

This setting enables the configuration of custom links that let the user navigate to a custom static
HTML page. Only two CustomLinkSetting can be configured.

The example below defines two custom links accessible through the URLs "_your-Identity
Manager-domain_/LegalNotice" and "your-Identity Manager-domain/TermsOfService", each showing the
content of the corresponding HTML file depending on the currently selected language.

```

    <CustomLink1Setting Url="/LegalNotice" Path_L1="LegalNotice_en.html" Path_L2="LegalNotice_fr.html" />    <CustomLink2Setting Url="/TermsOfService" Path_L1="TermsOfService_en.html" Path_L2="TermsOfService_fr.html" />

```

- **Url\_**(required)\_ defines the url address from which to access the custom page.
- **Path*L1***(required)\_ defines the path (from the configuration root) to the HTML file to be
  rendered depending on the currently selected language in the user interface (`Path_L1` to
  `Path_L16` are available). Only `Path_L1` is required. While navigating to a custom link, if no
  HTML path was defined for the current language, then `Path_L1` is taken as default.

To be displayed correctly, images should be embedded in the HTML files as Base64 images using the
`src` attribute like this : `<img src="data:image/png;base64,iVBORw0...=" />`. You can easily
convert your images using this [Base64 Image Encoder](https://elmah.io/tools/base64-image-encoder/).

To navigate to the custom links from the user interface, NETWRIX recommends configuring a `MenuItem`
with a `URI` value matching the custom link `URL`. The following example defines two menu items,
accessible from the user account tab in the top right corner of the interface, that allows the user
to navigate to the defined URI addresses.

```

    <MenuItem Identifier="UserMenu_CustomLink1" DisplayName_L1="Legal Notice" DisplayName_L2="Mentions l�gales" IconCode="List" URI="/LegalNotice" ParentMenuItem="UserMenu" />    <MenuItem Identifier="UserMenu_CustomLink2" DisplayName_L1="Terms of Service" DisplayName_L2="Conditions d'utilisation" IconCode="List" URI="/TermsOfService" ParentMenuItem="UserMenu" />

```

![LCustomLinksUserMenu.webp](/images/identitymanager/saas/integration-guide/network-configuration/settings/customlinksusermenu_v523.webp)

## DashboardItemNumber

Some sections on the dashboard contain multiple links. These links are quick links with counters to
the review page filtered by entity type. The links are sorted by entity type priority.

![LDashboardItemNumber.webp](/images/identitymanager/saas/integration-guide/network-configuration/settings/dashboarditemnumber.webp)

By default, 3 links are displayed. If more than 3 entity type links exist, a link "Others" is
displayed with the concatenation of remaining counters.

This setting is used to customize the number of links to displayed on each section.

The max number of links to display is 5.

```

**<DashboardItemNumberSetting RoleReviewSection="2" ProvisioningReviewSection="5" RoleReconciliationSection="2" ResourceReconciliationSection="2" MyTasksSection="4" ManualProvisioningSection="2" />**

```

- **RoleReviewSection** defines the number of links to display in the "Role Review" section.
- **ProvisioningReviewSection** defines the number of links to display in the "Provisioning Review"
  section.
- **RoleReconciliationSection** defines the number of links to display in the "Role Reconciliation"
  section.
- **ResourceReconciliationSection** defines the number of links to display in the "Resource
  Reconciliation" section.
- **ManualProvisioningSection** defines the number of links to display in the "Manual Provisioning"
  section.
- **MyTasksSection** defines the number of links to display in the "My Tasks" section.

## SelectUserByIdentityQueryHandler

_This attribute matches an end-user with a resource from the unified resource repository._

Authorization mechanisms within Identity Manager rely on assigning
[Profiles](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/profiles/index.md)
to an identity-resource that stands for the end-user digital identity.

To that end, and end-user authentication credentials are linked to such an identity-resource using
the following pattern:

1. Authentication credentials are retrieved;
2. Authentication credentials are trimmed using the **AfterToken** and/or **BeforeToken**
   attributes;
3. The trimmed result is matched against the **ResourceIdentityProperty** of resources with an
   EntityType **OwnerEntityType**;
4. The matching resource found is used to find a profile and authorization for that digital
   identity.

**Attributes**

- **ResourceIdentityProperty** is the identity-resource property supposed to match the
  authentication login used by the end-user.
- **OwnerEntityType** is the entity type of the resources used to store digital identities within
  Identity Manager.
- **BeforeToken\_**(optional)\_ defines the first character used to trim the authentication login.
- **AfterToken\_**(optional)\_ defines the second character used to trim the authentication login.

    The trimmed result is the content of the authentication login between _AfterToken_ and
    _BeforeToken_. If _BeforeToken_ is empty, trimmed result is everything after _AfterToken_. If
    _AfterToken_ is empty, trimmed result is everything before _BeforeToken_.

- **ResourceDisplayNameProperty** is the property used for displaying login data at the top right of
  the application.
- **OwnerPhotoTagProperty** defines the photo property for Identity Manager users.

**Example**

The following example links the authentication credentials of an end-user to its matching resource
of EntityType **Directory_User**.

In this example, authentication has been set up using
[ End-User Authentication](/docs/identitymanager/6.2/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md). In that case,
the login used by the end-user is in the form `DOMAIN/userName`.

The **AfterToken** attribute parses the `DOMAIN/userName` string into `userName`.

The parsed result `userName` is compared with `AD_Entry:sAMAccountName` property value of
**Directory_User** resources.

The matching **Directory_User** resource is the resource that stands for the end-user identity
within Identity Manager.

```

<SelectUserByIdentityQueryHandlerSetting
    ResourceIdentityProperty="AD_Entry:sAMAccountName"
    ResourceDisplayNameProperty="AD_Entry:displayName"
    OwnerPhotoTagProperty="Directory_User:PhotoTag"
    OwnerEntityType="Directory_User"
    AfterToken="\"/>

```

## SelectPersonasByFilterQueryHander

This setting is used to filter the entity type used by authentication mechanism.

```

**<SelectPersonasByFilterQueryHanderSetting ResourceDisplayNameProperty="AD_Entry:displayName" PersonTypeFilterProperty="AD_Entry:objectCategory" PersonTypeFilter="Person" />**

```

- **ResourceDisplayNameProperty** represents the display property.
- **OwnerPhotoTagProperty** defines the photo tag property.
- **PersonTypeFilterProperty** defines the filter property.
- **PersonTypeFilter** defines the filter value.
- **MailProperty** defines the mail property.

## SelectAllPerformedByAssociationQueryHandler

This setting enables task delegation to a group of people.

```

**<SelectAllPerformedByAssociationQueryHandlerSetting RootEntityType="AD_Entry" Binding="member" />**

```

- **RootEntityType** indicates the entity type on which the delegation is applied.
- **Binding** defines the binding used to get the list of identities to delegate to.

_NB: In order for delegation to work, users that are part of the delegate group must have at least
one assigned profile_

## Scheduling CleanDataBase

If the default value for the Task CleanDataBase needs to be overridden, define this setting:

```

    <SchedulingCleanDataBaseSetting Timeout="2" CronTabExpression="* */2 * * *"/>

```

- `Timeout`: Defines the maximum time a Job or Task can wait after the last run.
- `CronTabExpression`: Define the cron to launch the CleanDatabase Job.

#### 7. Password Generation Setting

It is possible to override some aspects of the password generation (used in password reset features)
using the following setting:

```

**<PasswordGenerationSetting AllowedSymbolChars="*@!^-_" />**

```

- `AllowedSymbolChars`: A string containing the list of symbol chars to be used in the generated
  password. The default value is : `!;.,?()[]-_&%$+{}@`
