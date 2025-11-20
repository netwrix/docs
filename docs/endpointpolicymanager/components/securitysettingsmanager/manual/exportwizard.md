---
title: "Using the Endpoint Policy Manager Security Settings Manager Export Wizard"
description: "Using the Endpoint Policy Manager Security Settings Manager Export Wizard"
sidebar_position: 20
---

# Using the Endpoint Policy Manager Security Settings Manager Export Wizard

Click on **Export this GPO's Computer-Side Security Settings forEndpoint Policy Manager Exporter and
Endpoint Policy Manager Cloud**. The Endpoint Policy Manager Security Settings Manager export wizard
will appear.

![about_policypak_security_settings_2](/images/endpointpolicymanager/securitysettings/about_endpointpolicymanager_security_settings_2.webp)

When you click **Next**, the Export Wizard analyzes the current GPO's security settings and presents
the security categories currently used within the GPO.

![about_policypak_security_settings_3](/images/endpointpolicymanager/securitysettings/about_endpointpolicymanager_security_settings_3.webp)

:::note
Currently, all supported security settings within the GPO will be exported when you click
**Next**.  Note that some settings are interlocked and others are not. so not all may be
individually selected for exporting.
:::


Clicking **Next** brings up the Item-Level Targeting filters screen.

![about_policypak_security_settings_4](/images/endpointpolicymanager/securitysettings/about_endpointpolicymanager_security_settings_4.webp)

Below you can see the basic capabilities of the Targeting Editor. Item-Level Targeting is being
applied to members of the Traveling Sales Users group that have a portable computer with Windows 10.

![about_policypak_security_settings_5](/images/endpointpolicymanager/securitysettings/about_endpointpolicymanager_security_settings_5.webp)

Setting Item-Level Targeting is completely optional. If desired, when the exported XML file is used
with Endpoint Policy Manager Exporter or Endpoint Policy Manager Cloud, these filters will specify
exactly which users and computers will get these exported settings. If you change your mind and
don't wish to use any targeting filters, simply uncheck Enable Targeting Filters, which will then
remove any filters you put in place.

![about_policypak_security_settings_6](/images/endpointpolicymanager/securitysettings/about_endpointpolicymanager_security_settings_6.webp)

On the final page of the Endpoint Policy Manager Security Settings Manager Export Wizard, provide a
location and filename to save your XML file.

![about_policypak_security_settings_7](/images/endpointpolicymanager/securitysettings/about_endpointpolicymanager_security_settings_7.webp)

Keep this file handy since you'll use it with Endpoint Policy Manager Exporter or Endpoint Policy
Manager Cloud. To learn more about how to deliver settings outside of Group Policy, be sure to read
Appendix A, [Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md).


