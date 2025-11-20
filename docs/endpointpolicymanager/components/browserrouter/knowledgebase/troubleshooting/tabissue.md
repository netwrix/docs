---
title: "How-to resolve the IE-Tab Issues in Edge for Endpoint Policy Manager Browser Router managed URLs"
description: "How-to resolve the IE-Tab Issues in Edge for Endpoint Policy Manager Browser Router managed URLs"
sidebar_position: 290
---

# How-to resolve the IE-Tab Issues in Edge for Endpoint Policy Manager Browser Router managed URLs

Problem:

Endpoint Policy Manager Browser Router fails to redirect URLs to Edge in IE-Tab mode despite being
redirected to Microsoft Edge browser.

Other Symptoms:

Visiting Edge:compat in Edge from an affected system may show a screen similar to below.

![1323_1_a7ea1a5fea27b5af1303c5cae8c549cd](/images/endpointpolicymanager/troubleshooting/browserrouter/internetexplorer/1323_1_a7ea1a5fea27b5af1303c5cae8c549cd.webp)

Possible Causes:

There was previous GPO configuration where the IE Site List and the Enterprise Mode Site list were
managed via Group Policy ADMX settings. Note: Even after disabling the IE site list and the
Enterprise Mode Site list in the previous GPO configuration on Computer and/or User side this issue
could persist.

This issue can also occur if the following registry location is edited manually.
`HKEY_CURRENT_USER\Software\Policies\Microsoft\Internet Explorer\Main\EnterpriseMode`

Resolution:

To resolve the issue regardless of either cause above, delete the ppBRsitelist_v2.xml file located
in the User's Local app data directory
`%LocalAppData%\PolicyPak\PolicyPak Browser Router\ppBRsitelist_v2.xml`.

Then run `GPUPDATE` or `GPUPDATE /FORCE` to restore PPBR functionality and ensure proper redirection
of websites to Edge in IE-tab mode.

Or visit Edge:compat in Edge and click the Force update button, the screen should now look similar
to below.

![1323_2_faaa54cf16d85c909ec4de3a83505ac9](/images/endpointpolicymanager/troubleshooting/browserrouter/internetexplorer/1323_2_faaa54cf16d85c909ec4de3a83505ac9.webp)


