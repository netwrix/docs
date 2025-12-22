---
title: "Which items in Chrome will, and will not work when non-domain joined?"
description: "Which items in Chrome will, and will not work when non-domain joined?"
sidebar_position: 20
---

# Which items in Chrome will, and will not work when non-domain joined?

If you use the Chrome Pak (with Netwrix Endpoint Policy Manager (formerly PolicyPak) Application
Manager) or the Chrome ADMX settings (with Endpoint Policy Manager Admin Templates Manager) Chrome
may not apply all settings as expected when the computer is non-domain joined.

In our testing, here are the settings which will and will not work when non-domain joined.

| BASICS TAB                                                                           |                                                                                                                                     |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| SETTING NAME                                                                         | WORKS IN NON-DOMAIN                                                                                                                 |
| Show Home button                                                                     | ![517_1_thick](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)            |
| Always show the bookmarks bar                                                        | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| On startup open the following page(s)                                                | ![517_3_cross](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)            |
| Set Pages                                                                            | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Use New Tab Page as homepage                                                         | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Check to disable auto-update Google Chrome                                           | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| IMPORT BOOKMARKS AND SETTINGS TAB                                                    |                                                                                                                                     |
| ---                                                                                  | ---                                                                                                                                 |
| SETTING NAME                                                                         | WORKS IN NON-DOMAIN                                                                                                                 |
| Browsing history                                                                     | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Favorites/Bookmarks                                                                  | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Saved Passwords                                                                      | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Search engines                                                                       | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| ADVANCED TAB                                                                         |                                                                                                                                     |
| ---                                                                                  | ---                                                                                                                                 |
| SETTING NAME                                                                         | WORKS IN NON-DOMAIN                                                                                                                 |
| Use a prediction service to help complete searches and URLs typed in the address bar | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Use a web service to help resolve spelling errors                                    | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Offer to save passwords I enter on the web                                           | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Offer to translate pages that aren't in a language I read                            | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Download location                                                                    | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Continue running background apps when Google Chrome is closed                        | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Use hardware acceleration when available                                             | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Predict network actions to improve page load performance                             | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Enable phishing and malware protection                                               | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Automatically send usage statistics and crash reports to Google                      | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Show notifications when new printers are detected on the network                     | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Check for server certificate revocation                                              | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Enable Autofill to fill out web forms in a single click.                             | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross_29x29.webp) |
| CONTENT SETTINGS TAB                                                                 |                                                                                                                                     |
| ---                                                                                  | ---                                                                                                                                 |
| SETTING NAME                                                                         | WORKS IN NON-DOMAIN                                                                                                                 |
| Cookies                                                                              | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Block third-party cookies and site data                                              | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Images                                                                               | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Pop-ups                                                                              | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Location                                                                             | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Notifications                                                                        | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Media                                                                                | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Ads                                                                                  | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| USB devices                                                                          | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| PDF documents                                                                        | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| JavaScript                                                                           | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Plug-ins                                                                             | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Handlers                                                                             | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Mouse cursor                                                                         | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Protected content                                                                    | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Unsandboxed plug-in access                                                           | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Automatic Downloads                                                                  | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| MIDI devices full control                                                            | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| CLEAR BROWSING DATA TAB                                                              |                                                                                                                                     |
| ---                                                                                  | ---                                                                                                                                 |
| SETTING NAME                                                                         | WORKS IN NON-DOMAIN                                                                                                                 |
| Browsing history                                                                     | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Download history                                                                     | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Cookies and other site and plugin data                                               | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Cached images and files                                                              | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Passwords                                                                            | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| Autofill form data                                                                   | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| SITES TAB                                                                            |                                                                                                                                     |
| ---                                                                                  | ---                                                                                                                                 |
| SETTING NAME                                                                         | WORKS IN NON-DOMAIN                                                                                                                 |
| Allow cookies on these sites                                                         | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Block cookies on these sites                                                         | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Allow session only cookies on these sites                                            | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Allow images on these sites                                                          | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Block images on these sites                                                          | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Allow JavaScript on these sites                                                      | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Block JavaScript on these sites                                                      | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Allow popups on these sites                                                          | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Block popups on these sites                                                          | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Allow notifications on these sites                                                   | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Block notifications on these sites                                                   | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Allow plugins on these sites                                                         | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Block plugins on these sites                                                         | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Automatically select client certificates for these sites                             | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| List of URLs                                                                         | ![Short white line](/images/endpointpolicymanager/troubleshooting/nondomain/517_3_cross.webp)       |
| EXTENSIONS                                                                           |                                                                                                                                     |
| ---                                                                                  | ---                                                                                                                                 |
| SETTING NAME                                                                         | WORKS IN NON-DOMAIN                                                                                                                 |
| Extension-Install-Blacklist                                                          | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Extension-Install-Forcelist                                                          | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Extension-Install-Whitelist                                                          | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |
| Extension-Install-Sources                                                            | ![Checkmark Icon](/images/endpointpolicymanager/troubleshooting/nondomain/517_1_thick.webp)         |

If you have questions about our results, please use the Endpoint Policy Manager Forums.

