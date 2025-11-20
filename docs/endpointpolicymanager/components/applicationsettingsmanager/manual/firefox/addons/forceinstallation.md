# Force Installation of URL and File-Based Firefox Add-Ons

Endpoint Policy Manager also can install URL and file-based Firefox add-ons within Firefox.

Video: To see a video of Endpoint Policy Manager forcing installation of Firefox's Add-Ons, go to
[Force Install Firefox Extensions (from URL or file).](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/firefox/extensions.md).

Go to the Add-Ons tab within the Firefox AppSet, as shown In the figure shown.

![add_ons_12](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_12.webp)

The figure shown. The Add-Ons tab within Endpoint Policy Manager Application Settings Manager.

To get started with an add-on you want to force installation of, you need to know the add-on and its
URL. Then you need to know what delivery method you would like to use: URL or file install. To use
URL-based installation, you need to get the URL by following these steps (See the figure here):

**Step 1 –** Right-click and select "Copy Link Location" from the "Add to Firefox" button.

**Step 2 –** Copy the URL to Notepad.

**Step 3 –** Trim the URL for excess characters.

**Step 4 –** Convert to Endpoint Policy Manager syntax.

![add_ons_13](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_13.webp)

The figure shown. Copying the link location.

**Step 5 –** Then, using Notepad or another editor, paste from Firefox "Copy Link Location" like
this:

`https://addons.mozilla.org/firefox/downloads/latest/ads-blocker/platform:5/addon-729812-latest.xpi?src=hp-dl-upandcoming`.

**Step 6 –** Then you'll modify it to trim everything after the XPI file, to make the following
correctly modified URL:

`https://addons.mozilla.org/firefox/downloads/latest/ads-blocker/platform:5/addon-729812-latest.xpi`

**Step 7 –** Finally, you'll convert to Endpoint Policy Manager
syntax:` https://addons.mozilla.org/firefox/downloads/latest/ads-blocker/platform:5/addon-729812-latest.xpi`,
install.

For using the file-based installation method, you would select "Save Link As" after right-clicking
on the "Add to Firefox" botton, as shown In the figure shown.

![add_ons_14](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_14.webp)

The figure shown. The file-based installation method.

**Step 8 –** Then, you would save the file to a location to use later, as shown In the figure shown.

![add_ons_15](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_15.webp)

The figure shown. Choosing where to save the file.

**Step 9 –** Next, you also need to decide if you want to leave the user's existing add-ons in place
(with MODE=MERGE) or wipe out what the user already has (with MODE=REPLACE). You will use whatever
you choose as the first line. Then, on the second line and additional lines you will include the
location of the XPI

```
File:https://addons.mozilla.org/firefox/downloads/latest/ads-blocker/platform:5/addon-729812-latest.xpi, install.
File://c:/localdirectory/ addon-729812-latest.xpi, install
File://///server/share/folder/ addon-729812-latest.xpi, install
```

Note the following:

- Local file paths include "File:", followed by two slashes to denote the file path start. Following
  that, there is a single slash per directory.
- UNC paths include "File:", followed by five front slashes to denote the UNC path start. Following
  that, there is a single slash per directory.



