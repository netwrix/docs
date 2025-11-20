---
title: "Firefox: How do I set \"Allow Now\", \"Allow and Remember\" or \"Block Plugin\" as plug-ins are requested?"
description: "Firefox: How do I set \"Allow Now\", \"Allow and Remember\" or \"Block Plugin\" as plug-ins are requested?"
sidebar_position: 230
---

# Firefox: How do I set "Allow Now", "Allow and Remember" or "Block Plugin" as plug-ins are requested?

If you have this dialog in Firefox, you can use Netwrix Endpoint Policy Manager (formerly PolicyPak)
to specify Allow or Block Plugin.

![132_1_ff-kb-img-01](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/132_1_ff-kb-img-01.webp)

If the plug in you want to allow is Java, you can add one line to the PERMISSIONS section in the
Endpoint Policy Manager Application Settings Manager Firefox Pak.

```
website.com, plugin:java, allow
```

![132_2_ff-kb-img-02](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/132_2_ff-kb-img-02.webp)

:::note
You might also need to add these lines as well, if adding the one line above doesn't work.
It depends on the version of Firefox you have installed. Older versions require these lines:
:::


```
website.com, plugin-vulnerable:npdeployjava, allow website.com, plugin:npdeployjava, allow
```

However, if the plug in you want is another plug-in and not Java, then you need to learn the plug in
name in the database. So, start out on your own machine and use Firefox to specify the ALLOW AND
REMEMBER permission or BLOCK PLUGIN permission as seen here.

![132_3_ff-kb-img-03](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/132_1_ff-kb-img-01.webp)

Once this is done, you need to figure out what plug-in was just affected. The way to do this would
be to use a tool called SQLLite Browser found here:
[www.sqlitebrowser.org](http://sqlitebrowser.org/)

Open the table / file moz_perms (on FF 42 and newer) or moz_hosts (on FF 41 and older) which will be
in the following file:

```
C:\Users\AppData\Roaming\MozillaFilrefox\Profiles\permissions.sqllite
```

Discover the name of the plug-in you just approved like what's seen in this example. In this
example, it's still plugin:java. But in your case, it could be something else.

![132_4_ff-kb-img-04](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/132_4_ff-kb-img-04.webp)

Now that you know that, you can use Endpoint Policy Manager Application Settings Manager and the
Firefox Pak to set this permission to Allow or Block.

![132_5_ff-kb-img-05](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/132_5_ff-kb-img-05.webp)


