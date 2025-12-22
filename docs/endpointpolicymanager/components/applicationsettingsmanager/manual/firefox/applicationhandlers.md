---
title: "Managing Application Handlers"
description: "Managing Application Handlers"
sidebar_position: 70
---

# Managing Application Handlers

Netwrix Endpoint Policy Manager (formerly PolicyPak) can manage which applications open outside of
Firefox. The most common use cases are to open Adobe Reader instead of the internal Firefox PDF
viewer, or launch WinZip when a ZIP file is encountered. These can be seen In the figure shown. The node
only works with client-side extension (CSE) build 1560 or later.

![managing_application_handlers](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/managing_application_handlers.webp)

The figure shown. Settings for opening applications outside of Firefox.

You can use keyword MODE=REPLACE or MODE=MERGE. MODE=REPLACE will wipe out whatever the user has
already selected, and put in your entries. MODE=MERGE will take the entries listed here and add them
to whatever the user already has in place. However, there are some nuances to the Firefox
application handlers as described below.

- Understanding hard-coded handlers

  Some handlers are hard-coded, meaning they are always shown in the user interface (UI), even if
  they are scheduled to be removed by the "replace" mode. So, for example, if you set the PPAM FF
  Pak handler setting to the value below, you might expect the list would contain exactly one
  handler: zip ->` C:\Program Files\7-Zip\7zFM.exe`.

```
MODE=REPLACE    
.zip, APP: C:\Program Files\7-Zip\7zFM.exe,
```

However, that doesn't happen because the UI doesn't change for the hard-coded items. Your list might
look different from what is shown In the figure shown.

![managing_application_handlers_1](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/managing_application_handlers_1.webp)

The figure shown. Choosing how Firefox will handle downloaded files.

- Internal versus external programs

  Firefox prefers opening content internally to firing external programs whenever possible.
  Content that can be handled internally includes images, texts, HTML and XML code, and content
  with some special meaning for the Web (CSS, JS, etc.).  The actual decision is made based on
  so-called MIME type, and not on file extension. In the case of HTTP/HTTP surfing, Firefox
  usually uses the MIME type returned in the "content-type" response header, as shown in
  The figure shown.

![managing_application_handlers_2](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/managing_application_handlers_2.webp)

The figure shown. The MIME type is determined by the "content-type" response header.

If the MIME type is "`text/plain`," "`text/html`," "`text/css`," "`image/jpeg`," or any other
special type, the file is opened internally. Even if the "content-type" header is not set in the web
response, Firefox uses a sophisticated algorithm to guess the MIME type from actual content, and
opens resources of special types internally. For this reason, even though it is possible to add
handlers for JPG, HTML, HTM, TXT, etc., which will appear in the UI, Firefox will keep opening
resources of such types internally. The general rule of thumb here is the following: when there is
no handler for the given type and Firefox normally shows an "Open with" dialog box for this type, it
fires Application Handler for the same type when there is a handler, as shown In the figure shown.

![managing_application_handlers_3](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/managing_application_handlers_3.webp)

The figure shown. The "Open with" dialog box.

MIME type returns from web servers

The actual behavior during Web surfing depends on the MIME type for the resource returned by
"Web-server." Even though you have a handler for somethign like PDF (application/pdf) or ZIP
(application/x-zip-compressed), it might not work for resources returned with a non-standard MIME
type. If the returned MIME type is a generic type for binary resources (application/octet stream),
or some type with no special meaning for Firefox, Firefox fires Application Handler to open files
like this, as shown In the figure shown.

![managing_application_handlers_4](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/managing_application_handlers_4.webp)

The figure shown. The Firefox Application Handler.

Otherwise, the file will be opened internally. The MIME type returned in response depends on
"Web-Server" and resource settings, and it's up to the server to return the correct MIME type. The
general rule of thumb here is similar to that in the second bullet point above. If Firefox shows an
"Open with" dialog box when there is no handler for the resource, it fires Application Handler for
the same resource if there is one.



