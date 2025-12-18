---
description: >-
  Learn how to customize notification and report templates for Netwrix Password
  Reset (Password Expiration Notifier), including locating templates, adding
  images and links, changing font size, adding Active Directory attributes, and
  editing header/footer.
keywords:
  - password expiration
  - templates
  - email templates
  - Netwrix Password Reset
  - Netwrix Auditor
  - notify users
  - Active Directory attributes
  - UTF-8
products:
  - auditor
sidebar_label: Customize Notifications and Reports in Netwrix Password Reset
tags: []
title: "Customize Notifications and Reports in Netwrix Password Reset"
knowledge_article_id: kA00g000000H9W8CAK
---

# Customize Notifications and Reports in Netwrix Password Reset

## Question

How to customize Netwrix Auditor Netwrix Password Reset notifications and reports?

## Answer

> **NOTE:** You can find the templates by following the provided path (by default):
>
> ```text
> C:\Program Files (x86)\Netwrix Auditor\Password Expiration Alerting\Templates\%GUID%
> ```
>
> If you have multiple monitoring plans set up, refer to the Task Scheduler tasks to determine the appropriate GUID for the plan. The Password Expiration task in Task Scheduler will have `Netwrix Auditor - {%GUID_1%} - {%GUID_2%}` name, where `%GUID_2%` will match the corresponding folder name.

> **IMPORTANT:** Netwrix Password Reset uses UTF-8 encoding. Your email client should be set up to either automatically or explicitly detect UTF-8 encoding to correctly translate characters.

- Locate templates
- Insert an image to the user notification email template
- Insert a hyperlink to the user notification email template
- Change the font size of the user notification email template
- Include an attribute in the email template
- Edit email header and footer

### Locate templates

You can edit and customize the notification and report templates in Netwrix Password Reset:

1. In the **Start** menu, select the **Netwrix Auditor** folder.
2. Open **Netwrix Password Reset**.
3. Select the monitoring plan you would like to edit the notification and (or) report templates for, and click **Edit**.
4. To change notifications sent to users, select the **Actions** tab.
   - Check the **Notify users** checkbox, and click **Customize** to edit the corresponding notification template.

   > **NOTE:** Changes introduced are unique to the template. These changes will not be replicated from **First time when password expires in** template to **Last time when password expires in** template, etc.

5. To change the report template, select the **Advanced** tab.
   - Click **Edit** next to **Customize the report template**.
6. To change the report template for users' managers, select the **Actions** tab.
   - Check the **Send reports to the users' managers** checkbox, and click **Customize** to edit the corresponding notification template.

### Insert an image to the user notification email template

1. Select the appropriate template and click **Customize**.
2. Add the following HTML tag to the template body:

   ```html
   <img src="C:\pic.jpg" alt="image_description" />
   ```

   > **NOTE:** The image must be located in a shared folder with permissions to read this folder shared between all users being notified. Alternatively, a URL to the image can be used.

3. Click the **Test** button in the template editor window to send a test message.

### Insert a hyperlink to the user notification email template

1. Select the appropriate template and click **Customize**.
2. Add the following HTML tag to the template body:

   ```html
   <a href="full_URL">Hyperlinked text</a>
   ```

3. Click the **Test** button in the template editor window to send a test message.

### Change the font size of the user notification email template

1. Select the appropriate template and click **Customize**.
2. Add the following tag to the template body (with values ranging from 1 to 7):

   ```html
   <FONT SIZE = Your_Font_Size>
   ```

3. Click the **Test** button in the template editor window to send a test message.

> **NOTE:** The tag affects the lines after the tag. The example provided below affects the lines after `Hi {givenName},`.
>
> <img height="296" src="https://nwxcorp.file.force.com/servlet/rtaImage?eid=ka0Qk0000001ZgT&feoid=00N0g000004CA0p&refid=0EM4u000008MF8u" width="483" />

### Include an attribute in the email template

> **NOTE:** You can use other attributes in your Netwrix Password Reset emails. Learn more about Active Directory attributes in [All attributes ⸱ Microsoft 🡺](https://learn.microsoft.com/en-us/windows/win32/adschema/attributes-all)

1. Select the appropriate template and click **Customize**.
2. Add the following attribute to the template body:

   ```text
   {CanonicalName}
   ```

3. Click the **Test** button in the template editor window to send a test message.

### Edit email header and footer

You can disable header and footer in Netwrix Password Reset emails. Refer to the following article for additional information: [Hide and Disable Header and Footer in Netwrix Password Reset Emails](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/hide-and-disable-header-and-footer-in-password-expiration-notifier-emails).

## Related articles

- [Hide and Disable Header and Footer in Netwrix Password Reset Emails](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/hide-and-disable-header-and-footer-in-password-expiration-notifier-emails)
- [All attributes ⸱ Microsoft 🡺](https://learn.microsoft.com/en-us/windows/win32/adschema/attributes-all)
